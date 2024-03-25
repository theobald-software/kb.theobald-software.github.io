---
layout: page
title: Read meta data of a table
description: Get meta data of a table
permalink: /:collection/:path
weight: 10
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to read the meta data of an SAP table using the *ReadTable* class.<br>


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
  
ReadTable read = new ReadTable(connection);
read.TableName = "MKPF";
read.RetrieveAllFieldsOfTable();
  
// Fill the fields collection with detailed information on each column
for(int i=0; i < read.Fields.Count; i++)
    Console.WriteLine(read.Fields[i].FieldName + " (" +
        read.Fields[i].ABAPType + ", " + read.Fields[i].Length + ")");
  
connection.Close();
```