---
layout: page
title: Get an Equipment List
description: Getting an equipment list by using BAPI EQUI GETLIST / Using Select Ranges
permalink: /:collection/:path
weight: 43
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to get a (filtered) equipment list using the function module BAPI_EQUI_GETLIST. 

### About

To get an equipment list you can use the function module BAPI_EQUI_GETLIST or the business object method `PieceOfEquipment.GetList`.

The function module offers selection ranges to filter the equipment. 
This sample shows how to use selection ranges for plants. 
Selection ranges use the following properties:
- SIGN defines whether to include or exclude the defined selection. 
- OPTION defines the operator. 
- The columns LOW and HIGH define the filter values.


### Call BAPI_EQUI_GETLIST

The following sample code queries an equipment list of all plants between 1000 and 2000 and all equipment of plant 3000.

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
  
// Create a function object
// Alternatively the business object method can be created via 
// BusinessObjectMethod businessMethod = connection.CreateBapi("PieceOfEquipment", "GetList")
RFCFunction func = connection.CreateFunction("BAPI_EQUI_GETLIST");
  
// The table MAINTPLANT_RA contains a selection range for plants
RFCStructure NewRow = func.Tables["MAINTPLANT_RA"].Rows.Add();
NewRow["SIGN"] = "I"; // Include
NewRow["OPTION"] = "EQ"; // Equals
NewRow["LOW"] = "3000"; // Low value -> Plant 3000
// create a scond range row
NewRow = func.Tables["MAINTPLANT_RA"].Rows.Add();
NewRow["SIGN"] = "I"; // Include
NewRow["OPTION"] = "BT"; // Between
NewRow["LOW"] = "1000"; // Low value -> Plant 1000
NewRow["HIGH"] = "2000"; // High value -> Plant 2000
  
func.Execute();
  
// print out equipment list
Console.WriteLine("Found " + func.Tables["EQUIPMENT_LIST"].Rows.Count.ToString() + " equipment rows");
  
foreach(RFCStructure row in func.Tables["EQUIPMENT_LIST"].Rows)
{
    Console.WriteLine("EQUIPMENT / DESCRIPT: " + 
        row["EQUIPMENT"].ToString() + " / " + row["DESCRIPT"].ToString());
}
```