---
layout: page
title: Change Batch Value of an Outbound Delivery
description: Change Batch value of an Outbound delivery
permalink: /:collection/:path
weight: 47
---

This sample shows how to change the batch values in SAP in an outbound delivery using the BAPI BAPI_OUTB_DELIVERY_CHANGE. 

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

try
{
 
    // Create a function object, fill parameters and execute
    RFCFunction f = connection.CreateFunction("BAPI_OUTB_DELIVERY_CHANGE");
      
    //Fill in values for HEADER_DATA SAP Import Structure
    RFCStructure fHeader = f.Exports["HEADER_DATA"].ToStructure();
    fHeader["DELIV_NUMB"] = "0080016236";
         
    f.Exports["DELIVERY"].ParamValue = "0080016236";
         
    // first Batch
    RFCTable fPosT = f.Tables["ITEM_DATA"];
    RFCStructure fPos = fPosT.AddRow();
    fPos["DELIV_NUMB"] = "0080016236";
    fPos["DELIV_ITEM"] = "000010";
    fPos["MATERIAL"] = "100-302";
    fPos["BATCH"] = "EIGEN_HALB";
    fPos["HIERARITEM"] = "10";
         
    fPos["USEHIERITM"] = "1";
 
    fPos["DLV_QTY"] = 1;
    fPos["DLV_QTY_IMUNIT"] = 1;
 
    fPos["FACT_UNIT_NOM"] = "1";
    fPos["FACT_UNIT_DENOM"] = "1";
 
    fPos["SALES_UNIT"] = "ST";
 
    //Second Batch
    fPos = fPosT.AddRow();
    fPos["DELIV_NUMB"] = "0080016236";
    fPos["DELIV_ITEM"] = "000010";
    fPos["MATERIAL"] = "100-302";
    fPos["BATCH"] = "FREMD_HALB";
 
    fPos["HIERARITEM"] = "10";
 
    fPos["USEHIERITM"] = "1";
    fPos["DLV_QTY"] = 2;
    fPos["DLV_QTY_IMUNIT"] = 2;
 
    fPos["FACT_UNIT_NOM"] = "1";
    fPos["FACT_UNIT_DENOM"] = "1";
 
    fPos["SALES_UNIT"] = "ST";
 
    //Fill in values for ITEM_CONTROL Table
    RFCTable fPosCtrlT = f.Tables["ITEM_CONTROL"];
    RFCStructure fPosCtrl = fPosCtrlT.AddRow();
 
    fPosCtrl["DELIV_NUMB"] = "0080016236";
    fPosCtrl["DELIV_ITEM"] = "000010";
 
    fPosCtrl["CHG_DELQTY"] = "X";
    // Execute function
    f.Execute();
 
    //Create commit function object
    RFCFunction funcCommit = r3Connection1.CreateFunction("BAPI_TRANSACTION_COMMIT");
    funcCommit.Exports["WAIT"].ParamValue = "X";
 
    // Execute commit function
    funcCommit.Execute();
}

catch (Exception e1)
{
    Console.WriteLine(e1.Message);
}

connection.Close();
```