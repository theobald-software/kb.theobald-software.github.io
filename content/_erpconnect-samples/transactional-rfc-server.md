---
layout: page
title: Transactional RFC Server
description: Transactional RFC Server
permalink: /:collection/:path
weight: 29
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In the following sample we want to build a RFC server, which supports transactional RFCs.

An ABAP program sends two strings as export parameters to .Net. These strings are merged in .Net and inserted into a SQL server table. Within a tRFC context only export parameter and tables are sent to the RFC server. A transactional RFC call cannot receive results.

The following code is based on the known example RFC-Server

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static RFCServer s = new RFCServer();
        static SqlConnection SQLConn = null;
  
static void Main(string[] args)
 {
  RFCServer s = new RFCServer();
  s.GatewayHost = "hamlet";
  s.GatewayService = "sapgw11";
  s.ProgramID = "ERPTEST";
  s.IncomingCall += new ERPConnect.RFCServer.OnIncomingCall(s_IncomingCall);
  s.TRFCCheckTID += new RFCServer.OnTRFCCheckTID(s_TRFCCheckTID);
  s.TRFCCommit += new RFCServer.OnTRFCCommit(s_TRFCCommit);
  s.TRFCConfirm += new RFCServer.OnTRFCConfirm(s_TRFCConfirm);
  s.TRFCRollback += new RFCServer.OnTRFCRollback(s_TRFCRollback);
  
  // Add and register function module
  RFCServerFunction f = s.RegisteredFunctions.Add("Z_TRFC");
  f.Imports.Add("STRING1", RFCTYPE.CHAR,10 );
  f.Imports.Add("STRING2", RFCTYPE.CHAR,10 );
  
  // start server
  s.Start();
  Console.Write("Server started. Please press any key to stop");
  Console.ReadLine();
  s.Stop();        
}
{% endhighlight %}
</details>

The following events are fired from the client within the server program:

- TRFCCheckTID
- IncomingCall
- TRFCCommit
- TRFCConfirm
- TRFCRollback

In the ABAP program the Function is called with the ABAP function *CALL FUNCTION “Z_TRFC” IN BACKGROUND TASK* for the asynchronous execution.

```
REPORT  ZTESTTRFC                             .

CALL FUNCTION 'Z_TRFC' in background task DESTINATION 'ERPTEST'
  EXPORTING
    STRING1  = 'Hello'
    STRING2  = 'World'.

Commit Work.

WRITE: / 'strings sent'.
```

The ABAP statement is not executed immediately, but with the EXPORTING and/or TABLES content stored in a SAP database table. A COMMIT WORK starts the processing of the function, and on the .Net side the event TRFCCheckTID is fired. The transaction ID in our example is checked whether it can be found in our table on the SQL server. If the TID is missing, or available but not executed yet, TRFCCheckTID returns True (check was successful). After this the IncomingCall event is fired. In case of successful processing, the Commit event is fired, which confirms the execution. The Confirm event is fired to tidy up the transaction management.

With tRFC you can guarantee that the remote function is processed, even if at the time of the call the remote partner is not available or the connection was lost.

Contrary to the synchronous RFC you can combine different functions for the remote processing into a logical unit or work (SAP-LUW). Rollback on the whole unit is then possible. Furthermore tools for monitoring and administration are available with transaction SM58.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void s_TRFCCheckTID(RFCServer Sender, string TID, ref bool OK)
 {
  DataTable DtTID = GetDataTableBySQL("Select * from TransactionID 
  where TID = '" + TID + "' and XExecuted = 'False'");
  
  if (DtTID.Rows.Count > 0)
  {
    Console.WriteLine("TransactionalID " + TID + " is already executed");
    OK = false;
  }
  else
  {
    Console.WriteLine("TRFCCheckTID is OK");
    InsertUpdateBySQL("Insert TransactionID (TID) Values ('" + TID + "')");
    OK = true;
  }
 }
  
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
 {
  if (CalledFunction.FunctionName == "Z_TRFC")
  {
   string string1 = CalledFunction.Imports["STRING1"].ToString();
   string string2 = CalledFunction.Imports["STRING2"].ToString();
   string string3 = string1 +  " " + string2 ;
  
   InsertUpdateBySQL("Update TransactionID set Result = '" + string3 + "',
   XExecuted = 'True' where TID = '" + Sender.LastTID.ToString() + "'");
  
  }
  else
  throw new ERPConnect.ERPException("Function unknown");
  
 }
  
static void s_TRFCCommit(RFCServer Sender, string TID, ref bool OK)
 {
  Console.WriteLine("TransactionalID " + TID + " is committed");
  InsertUpdateBySQL("Update TransactionID set XCommit = 'True' where TID = '" + TID + "'");
  OK = false;
 }
  
static void s_TRFCConfirm(RFCServer Sender, string TID, ref bool OK)
 {
   Console.WriteLine("TransactionalID " + TID + " was confirmed");
   InsertUpdateBySQL("Update TransactionID set XConfirm = 'True' where TID = '" + TID + "'");
   OK = true;
 }
  
static void s_TRFCRollback(RFCServer Sender, string TID)
 {
   Console.WriteLine("TransactionalID " + TID + " is rolled back");
   InsertUpdateBySQL("Update TransactionID set XRolledBack = 'True' where TID = '" + TID + "'");
 }
{% endhighlight %}
</details>

We also need a table on the SQL server (TransactionID) for our example. In this table, there are 4 flags (XCommit, XConfirm, XRollback and XExecuted), the field with the transaction ID (TID) and a field for the result (Result).
