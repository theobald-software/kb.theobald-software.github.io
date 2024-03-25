---
layout: page
title: Transactional RFC Server
description: Transactional RFC Server
permalink: /:collection/:path
weight: 29
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to build an RFC server that supports transactional RFCs.

### About

How it works:
- An ABAP program sends two strings as export parameters to .NET. 
- The strings are merged in .NET and inserted into an SQL server table. 
- Within a tRFC context only export parameters and tables are sent to the RFC server. 

For more information on how to create RFC functions, see [Online Help: RFC Server](https://help.theobald-software.com/en/erpconnect/rfc-server).

{: .box-note }
**Note:** A transactional RFC call cannot receive results.

### Build an RFC Server in ERPConnect

The following code creates an RFC function Z_TRFC that reads two strings provided by an ABAP program:

```csharp
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
```

The following events are fired from the client within the server program:

- TRFCCheckTID
- IncomingCall
- TRFCCommit
- TRFCConfirm
- TRFCRollback

```csharp
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
```

### Function Call in ABAP

In the ABAP program the RFC function is called with the ABAP function *CALL FUNCTION “Z_TRFC” IN BACKGROUND TASK* for the asynchronous execution:

```
REPORT  ZTESTTRFC                             .

CALL FUNCTION 'Z_TRFC' in background task DESTINATION 'ERPTEST'
  EXPORTING
    STRING1  = 'Hello'
    STRING2  = 'World'.

Commit Work.

WRITE: / 'strings sent'.
```

#### Workflow

- The ABAP statement is not executed immediately, but with the EXPORTING and/or TABLES content stored in a SAP database table. 
- COMMIT WORK starts the processing of the function
- .NET fires the event TRFCCheckTID.
- The transaction ID in the depicted example is checked to see if it can be found in the [table on the SQL server](#table-on-the-sql-server). 
- If the transaction ID is missing, or available but not executed yet, TRFCCheckTID returns *True*. 
- The IncomingCall event is fired. 
- If the processing is successful, the Commit event is fired, which confirms the execution. 
- The Confirm event is fired to tidy up the transaction management.

With tRFC the remote function is processed, even if at the time of the call the remote partner is not available or the connection was lost.

Contrary to the synchronous RFC you can combine different functions for the remote processing into a logical unit or work (SAP-LUW). 
Rollback on the whole unit is then possible. 

{: .box-tip }
**Tip:** Tools for monitoring and administration are available with SAP transaction SM58.


### Table on the SQL Server

The depicted example requires a table on the SQL server (TransactionID). The table includes: 

- 4 flags (XCommit, XConfirm, XRollback and XExecuted)
- a field with the transaction ID (TID) 
- a field for the result (Result).
