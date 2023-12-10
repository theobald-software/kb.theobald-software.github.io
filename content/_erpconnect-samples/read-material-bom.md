---
layout: page
title: Read Material BOM
description: Reading material BOM
permalink: /:collection/:path
weight: 38
---

This sample shows how to obtain the components of a material BOM using the function module CSAP_MAT_BOM_READ.

{: .box-tip }
**Tip**: To change a material BOM use the function modules CSAP_MAT_BOM_OPEN, CSAP_MAT_BOM_MAINTAIN and CSAP_MAT_BOM_CLOSE.
To create a new BOM use the function modules CSAP_MAT_BOM_ALLOC_CREATE and CSAP_MAT_BOM_CREATE.

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
  
//Create function
RFCFunction func = connection.CreateFunction("CSAP_MAT_BOM_READ");
func.Exports["MATERIAL"].ParamValue = "100-100"; // Material
func.Exports["PLANT"].ParamValue = "1000"; // Plant
func.Exports["BOM_USAGE"].ParamValue = "1"; // Usage -> 1 = Production
  
// Execut e
func.Execut e();
  
// reading header
if (func.Tables["T_STKO"].Rows.Count > 0)
{
    // print out BOM header
    RFCStructure header = func.Tables["T_STKO"].Rows[0];
    Console.WriteLine("Base Quantity: " + header["BASE_QUAN"].ToString()
        + " " + header["BASE_UNIT"].ToString() + "\r\n");
  
  
    Console.WriteLine("Items:\r\n");
  
    // print out components, quantity, item text
    foreach (RFCStructure itemrow in func.Tables["T_STPO"].Rows)
    {
        Console.WriteLine(itemrow["COMPONENT"].ToString() + " " +
            itemrow["COMP_QTY"].ToString() + " " +
            itemrow["ITEM_TEXT1"].ToString());
    }
  
}
else
{
    Console.WriteLine("No BOM found");
}
  
Console.WriteLine("Ready");
Console.ReadLine();
```
