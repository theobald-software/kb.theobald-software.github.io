---
layout: page
title: Create Functional Location
description: Create Functional Location
permalink: /:collection/:path
weight: 41
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to create a [Functional Location](https://help.sap.com/doc/saphelp_nw70/7.0.12/ja-JP/01/d5438b4ab311d189740000e8322d00/content.htm?no_cache=true) in SAP using the BAPI BAPI_FUNCLOC_CREATE. 

### About

The Functional Location (External Number) must match the structure defined in the exporting parameter STRIND of BAPI_FUNCLOC_CREATE. 
You can export the default value for the superior functional location under data_specific - SUPFLOC.

{: .box-tip }
**Tipp**:  To change a Functional Location replace the function module "BAPI_FUNCLOC_CREATE" with the function module "BAPI_FUNCLOC_CHANGE". 


### Call BAPI_FUNCLOC_CREATE

The following sample code calls the BAPI BAPI_FUNCLOC_CREATE to create a Functional Location in SAP:

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

RFCFunction func = connection.CreateFunction("BAPI_FUNCLOC_CREATE");
RFCStructure data_specific = func.Exports["DATA_SPECIFIC"].ToStructure();
  
	data_specific["STRIND"] = "A"; //StrIndicator
	data_specific["CATEGORY"] = "M"; //Category
	data_specific["SUPFLOC"] = ""; //Superior Function Location
  
RFCStructure data_general = func.Exports["DATA_GENERAL"].ToStructure();
  
    data_general["DESCRIPT"] = "My New Location2"; //Description
    data_general["MAINTPLANT"] = "1000"; //Mainplant        
  
func.Exports["LABELING_SYSTEM"].ParamValue = "A"; //Labeling System
func.Exports["EXTERNAL_NUMBER"].ParamValue = "1111-111-AA-15";  //Functional Location
  
func.Execute();
  
RFCFunction funcCommit = connection.CreateFunction("BAPI_TRANSACTION_COMMIT");
  
funcCommit.Exports["WAIT"].ParamValue  = "X"; 
funcCommit.Execute();
  
 // ReturnMessage from BAPI
RFCStructure funcRet = func.Imports["RETURN"].ToStructure();
//strmessage = funcRet["MESSAGE"].ToString();
  
Console.WriteLine (funcRet["MESSAGE"].ToString());
Console.WriteLine ("Please press a Key to continue")
  
Console.ReadLine();
  
```

