---
layout: page
title: Using the ArchiveLink BAPI to send Barcodes to SAP
description: Using the ArchiveLink BAPI to send barcodes to SAP
permalink: /:collection/:path
weight: 8
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to use the BAPI BAPI_BARCODE_SENDLIST to send a list of barcodes to SAP. <br>
BAPI_BARCODE_SENDLIST is part of the ArchiveLink BAPI.

### Call BAPI_BARCODE_SENDLIST
The following sample code sends a list of barcodes to SAP:

```csharp
using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

// Open the connection to SAP
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
  
// create the function
RFCFunction barfunc = connection.CreateFunction("BAPI_BARCODE_SENDLIST");
  
// Create and fill the frist row
RFCStructure row = barfunc.Tables["BARCODETABLE"].AddRow();
row["BARCODE"] = "4711"; 
row["CONTREP"] = "Content Repository"; 
row["DOCID"] = "0045935682"; 
row["ARDATE"] = "20070701"; 
row["DOCTYPE"] = "ZTA";
  
// Create and fill the second row
row = barfunc.Tables["BARCODETABLE"].AddRow();
row["BARCODE"] = "4713";
row["CONTREP"] = "Content Repository";
row["DOCID"] = "0045935683";
row["ARDATE"] = "20070702";
row["DOCTYPE"] = "ZTA"; 
  
// Execute the function
barfunc.Execute();
  
// process return structure
RFCStructure ret = barfunc.Imports["RETURN"].ToStructure();
  
if (ret["TYPE"].ToString().Equals(""))
    Console.WriteLine("No error reported");
else
    Console.WriteLine("Message: " + ret["MESSAGE"]);
  
Console.WriteLine("Press Enter to exit");
Console.ReadLine();
```
