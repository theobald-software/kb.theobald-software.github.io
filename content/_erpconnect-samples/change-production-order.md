---
layout: page
title: Change Production Order
description: Change Production Order
permalink: /:collection/:path
weight: 44
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In this sample we are going to change a production order by using the function CLOI_CHANGES_UPL_31. This, for example, could be useful, if an external programm does the planning of the productions orders and sends back the changes to SAP.

To change the header data you need the production order number and the fieldname you are going to change. You can get an overview of the fields in the SAP documentation, which can be found here: here

In our sample we change the Start Date (Field GSTRP) und the End Date (Field GLTRP). You can also change the quantity (Field BDMNG) or the Start Time (Field GSUZP). For Rescheduling the production order you have to fill the field METHOD with the value "SCHEDULE". The table CLOI_MESSAGE_LOG_EXP contains the message codes. When the changing was successful we get following message back:


![Cloi_Success_Message01](/img/contents/Cloi_Success_Message01.jpg){:class="img-responsive"}

The Messagecode C7 - 071 means "Operation has been scheduled". You can find the message codes in the transaction SE91. To get the function running a connection object (Con) must be available.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static string ChangeProductionOrder(string AUFNR, string VORNR, string APLFL)
 {
   string rMessage = "";
  
   RFCFunction func = Con.CreateFunction("CLOI_CHANGES_UPL_31");
  
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
  
   func.Execut e();
  
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
{% endhighlight %}
</details>

In our second sample we change the item data. We want to change the Start Time and End Time, and the Start and End Dates of a given operation (we define the operation in the variable VORNR). In this case the value of the field METHOD is "DISPATCH", which reschedules all the item data of the production order. More changeable fields you can find again in the SAP documentation

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static string ChangeProductionOrderPos(string AUFNR, string VORNR, string APLFL)
 {
   string rMessage = "";
  
   RFCFunction func = Con.CreateFunction("CLOI_CHANGES_UPL_31");
  
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
  
   func.Execut e();
  
   if (func.Tables["CLOI_MESSAGE_LOG_EXP"].RowCount > 0)
    {
      RFCStructure MyMessageRow = func.Tables["CLOI_MESSAGE_LOG_EXP"].Rows[0];
      rMessage = "MessageType: " + MyMessageRow[3].ToString() + 
      " Message (Please Check SE91): " + MyMessageRow[1].ToString() + " - " + 
      MyMessageRow[2].ToString();
    }
     return rMessage;
 }
{% endhighlight %}
</details>

