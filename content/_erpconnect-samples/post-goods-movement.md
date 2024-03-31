---
layout: page
title: Post Goods Movement
description: Post Goods Movement
permalink: /:collection/:path
weight: 27
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to create a goods receipt for a goods movement using the BAPI BAPI_GOODSMVT_CREATE. 

### About

The BAPI BAPI_GOODSMVT_CREATE requires multiple parameters to create a goods receipt for a goods movement.<br>
The export parameter GM_CODE of BAPI_GOODSMVT_CREATE represents the transaction code that would be used to post the movement as a dialog user. Values for GM_CODE include: 
- “01” is replaced by SAP with the transaction code MB01 that creates a goods receipt for purchase orders. 
- “02” is replaced by SAP with the transaction code MB31 for goods receipt for production orders.
- "05" is replaced by SAP with the transaction code MB1C for other goods receipts.

Other export parameters for BAPI_GOODSMVT_CREATE include:
- the Posting Date of the Document
- the Username
- the Document Date. 

The table parameters for BAPI_GOODSMVT_CREATE include:
- PLANT (Plant)
- PO_NUMBER (Purchase Order Number) 
- PO_ITEM (Purchase Order Item)
- ENTRY_QNT (Quantity)
- MOVE_TYPE "101" is the Movement Type for the goods receipt for purchase order into warehouse/stores.
- MVT_IND is the Movement Indicator that specifies the type of document that constitutes the basis for the movement.
- STGE_LOC is the Storage Location for the goods. 

### Call BAPI_GOODSMVT_CREATE

The following code sample calls the BAPI BAPI_GOODSMVT_CREATE.
If a goods receipt is successfully created the function returns the material document number and the year.

```csharp
using System;
using ERPConnect;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();

public bool GoodsReceipt101(string PO_Number, string PO_ITEM, string Plant, decimal Quantity)
  {
     string rMessage;
     // Fill Export Structures for the FunctionModule
     RFCFunction func = connection.CreateFunction("BAPI_GOODSMVT_CREATE");
     func.Exports["GOODSMVT_HEADER"].ToStructure()["PSTNG_DATE"] = "20070921"; //Posting Date in the Document
     func.Exports["GOODSMVT_HEADER"].ToStructure()["PR_UNAME"] = "HUGO";       //UserName
     func.Exports["GOODSMVT_HEADER"].ToStructure()["HEADER_TXT"] = "XXX";      //HeaderText
     func.Exports["GOODSMVT_HEADER"].ToStructure()["DOC_DATE"] = "20070921";   //Document Date in Document
  
     func.Exports["GOODSMVT_CODE"].ToStructure()["GM_CODE"] = "01";
  
     // Fill Table Items 
     RFCStructure itemrow = func.Tables["GOODSMVT_ITEM"].Rows.Add();
     itemrow["PLANT"] = Plant;                //Plant
     itemrow["PO_NUMBER"] = PO_Number;        //Purchase Order Number
     itemrow["PO_ITEM"] = PO_ITEM;            //Item Number of Purchasing Document  
     itemrow["ENTRY_QNT"] = Quantity;         //Quantity in Unit of Entry
     itemrow["MOVE_TYPE"] = "101";            //Movement Type
     itemrow["MVT_IND"] = "B";                //Movement Indicator
     itemrow["STGE_LOC"] = "0001";            //Storage Location
  
     // Execute Function Module
     func.Execute();
  
     RFCFunction funcCommit = connection.CreateFunction("BAPI_TRANSACTION_COMMIT");
     funcCommit.Exports["WAIT"].ParamValue = "X";
  
     string MaterialDocument = func.Imports["MATERIALDOCUMENT"].ParamValue.ToString();
     string MatDocumentYear = func.Imports["MATDOCUMENTYEAR"].ParamValue.ToString();
  
     // Check Return-Table
     if (func.Tables["RETURN"].RowCount > 0)
      {
        rMessage = func.Tables["RETURN"].Rows[0, "MESSAGE"].ToString();
        funcCommit.Execute();
        return !func.Tables["RETURN"].Rows[0, "TYPE"].ToString().Equals("E");
      }
     else
      {
        funcCommit.Execute();
        rMessage = "";
        return true;
      }
 }
```
