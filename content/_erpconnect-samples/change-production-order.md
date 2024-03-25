---
layout: page
title: Change Production Order
description: Change Production Order
permalink: /:collection/:path
weight: 44
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to change a production order using the function module CLOI_CHANGES_UPL_31. 

### About

This sample can be used to send changes to SAP if an external program does the planning of the productions orders.

To change the header data you need the production order number and the field name you are going to change. 
For a complete list of all fields, refer to the [SAP Documentation: Function Module CLOI_CHANGES_UPL_31](https://help.sap.com/docs/SAP_ERP/812f0b55261a4d58abe8af46f4bd8cc5/fa1ebf53d25ab64ce10000000a174cb4.html?version=6.05.latest)

Typical applications include:
- changing the start date (Field GSTRP)
- changing the end date (Field GLTRP)
- changing the quantity (Field BDMNG) 
- changing the start time (Field GSUZP) 
- rescheduling the production order using the field METHOD with the value "SCHEDULE"

The table CLOI_MESSAGE_LOG_EXP contains the message codes of the function module. 



### Call CLOI_CHANGES_UPL_31

#### Change Start and End Date

The following sample code changes the start date (Field GSTRP) and the end date (Field GLTRP) of a production order.

```csharp
public static string ChangeProductionOrder(string AUFNR, string VORNR, string APLFL)
 {
   string rMessage = "";
  
   RFCFunction func = connection.CreateFunction("CLOI_CHANGES_UPL_31");
  
   func.Exports["CLOI_IF_PAR"].ToStructure()["COMMITFLG"] = "C";
   func.Exports["CLOI_IF_PAR"].ToStructure()["R3_VERSION"] = "60";   //SAP Version
  
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSG_FILTER"] = "";     // Show All Messages
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSGLOG_REQ"] = "X";    //Message Return Tables  
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSGOBJ_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORD_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORDOPR_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["METLOG_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORDSEQ_REQ"] = "X";
  
   // Change Header Data
  
   // Change Start Time
   RFCStructure orduRow = func.Tables["CLOI_ORDU_IMP"].Rows.Add();
   orduRow["AUFNR"] = AUFNR;
   orduRow["FIELD"] = "GSTRP";
   orduRow["VALUE"] = "20080815";
  
   //Change Finish Time
   orduRow = func.Tables["CLOI_ORDU_IMP"].Rows.Add();
   orduRow["AUFNR"] = AUFNR;
   orduRow["FIELD"] = "GLTRP";
   orduRow["VALUE"] = "20080815";
  
   orduRow = func.Tables["CLOI_ORDU_IMP"].Rows.Add();
   orduRow["AUFNR"] = AUFNR;
   orduRow["FIELD"] = "METHOD";
   orduRow["VALUE"] = "SCHEDULE";       
  
   func.Execute();
  
   if (func.Tables["CLOI_MESSAGE_LOG_EXP"].RowCount > 0)
    {
      RFCStructure MyMessageRow = func.Tables["CLOI_MESSAGE_LOG_EXP"].Rows[0];
      rMessage = "MessageType: " + MyMessageRow[3].ToString() + 
      " Message (Please Check SE91): " + MyMessageRow[1].ToString() + " - " + 
      MyMessageRow[2].ToString();
    }
    else
  
    {
    rMessage = "No Messages found";
    } 
     return rMessage;
 }
```

#### Reschedule All Item Data

The following sample code changes the item data of a production order.
It changes the start and end dates of a given operation defined in the variable VORNR.

To reschedule all the item data of the production order the value of the field METHOD is set to "DISPATCH". 

```csharp
public static string ChangeProductionOrderPos(string AUFNR, string VORNR, string APLFL)
 {
   string rMessage = "";
  
   RFCFunction func = connection.CreateFunction("CLOI_CHANGES_UPL_31");
  
   func.Exports["CLOI_IF_PAR"].ToStructure()["COMMITFLG"] = "C";
   func.Exports["CLOI_IF_PAR"].ToStructure()["R3_VERSION"] = "60";   //SAP Version
  
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSG_FILTER"] = "";     // Show All Messages
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSGLOG_REQ"] = "X";    //Message Return Tables  
   func.Exports["CLOI_IF_PAR"].ToStructure()["MSGOBJ_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORD_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORDOPR_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["METLOG_REQ"] = "X";
   func.Exports["CLOI_IF_PAR"].ToStructure()["ORDSEQ_REQ"] = "X";
  
   // Change Position Data
  
   RFCStructure opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
  
   // Changes the work center 
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "ARBPL";
   opruRow["VALUE"] = "1112";      // Note : The internal ID of workcenter
  
   //Earliest date when execution of operation can finish
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSEDD";
   opruRow["VALUE"] = "20080812";
  
   //Earliest time when execution of operation can finish
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSEDZ";
   opruRow["VALUE"] = "080000";
  
   //Earliest date when execution of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSAVD";
            opruRow["VALUE"] = "20080812";
  
   //Earliest time when execution of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSAVZ";
   opruRow["VALUE"] = "080000";
  
   //Earliest date when processing of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSSBD";
   opruRow["VALUE"] = "20080812";
  
   //Earliest time when processing of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSSBZ";
   opruRow["VALUE"] = "080000";
  
   //Earliest date when teardown of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSSAD";
   opruRow["VALUE"] = "20080812";
  
   //Earliest time when teardown of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "FSSAZ";
   opruRow["VALUE"] = "080000";
  
   //Latest date when execution of operation can finish
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSEDD";
   opruRow["VALUE"] = "20080813";
  
   //Latest time when execution of operation can finish
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSEDZ";
   opruRow["VALUE"] = "100000";
  
   //Latest date when execution of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSAVD";
   opruRow["VALUE"] = "20080813";
  
   //Latest time when execution of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSAVZ";
   opruRow["VALUE"] = "100000";
  
   //Latest date when teardown of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSSAD";
   opruRow["VALUE"] = "20080813";
  
   //Latest time when teardown of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSSAZ";
   opruRow["VALUE"] = "100000";
  
   //Latest date when processing of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSSBD";
   opruRow["VALUE"] = "20080813";
  
   //Latest time when processing of operation can start
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "SSSBZ";
   opruRow["VALUE"] = "100000";
  
   //Dispatches the Order. 
   opruRow = func.Tables["CLOI_ORD_OPRU_IMP"].Rows.Add();
   opruRow["AUFNR"] = AUFNR;
   opruRow["VORNR"] = VORNR;
   opruRow["APLFL"] = APLFL;
   opruRow["FIELD"] = "METHOD";
   opruRow["VALUE"] = "DISPATCH";
  
   func.Execute();
  
   if (func.Tables["CLOI_MESSAGE_LOG_EXP"].RowCount > 0)
    {
      RFCStructure MyMessageRow = func.Tables["CLOI_MESSAGE_LOG_EXP"].Rows[0];
      rMessage = "MessageType: " + MyMessageRow[3].ToString() + 
      " Message (Please Check SE91): " + MyMessageRow[1].ToString() + " - " + 
      MyMessageRow[2].ToString();
    }
     return rMessage;
 }
```

Output:

![Cloi_Success_Message01](/img/contents/Cloi_Success_Message01.jpg){:class="img-responsive"}

{: .box-tip }
**Tipp**: Use SAP transaction SE91 to look up all message codes. The Messagecode C7 - 071 means "Operation has been scheduled". 
