---
layout: page
title: Reading SAP Tables Directly
description: Reading SAP Tables Directly
permalink: /:collection/:path
weight: 1
---

<!---
move to: https://help.theobald-software.com/en/erpconnect/special-classes/reading-sap-tables-directly-with-readtable
-->
A recurrent task in daily work with SAP and .NET applications is to read directly from tables of the SAP system. You can use the ReadTable class to manage this demand. The sample below shows how to select data from the table. The result is passed back via an easy-to-use ADO.net table object.

In this sample we want to read material description texts which are located in the table MAKT. So we need the two columns MATNR (material number) and MAKTX (material description). Furthermore we want only the English texts so we have to add the WHERE statement SPRAS='EN'. SPRAS is the column which contains the language keys. The method Run executes the query and passes back the ADO.net table.

``` csharp
using System;
using System.Data;
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

var table = new ReadTable(connection)
{
    WhereClause = "SPRAS = 'EN'",
    TableName = "MAKT",
    RowCount = 10
};

// Select columns to read
table.AddField("MATNR");
table.AddField("MAKTX");

table.Run();

DataTable result = table.Result;
for (int i = 0; i < result.Rows.Count; i++)
{
    Console.WriteLine($"{result.Rows[i]["MATNR"]} {result.Rows[i]["MAKTX"]}");
}

Console.ReadLine();
```

Output produced:
```
000000000000000023 Pawan Kalyan_08
000000000000000038 Test US colleagues upd4
000000000000000043 English Check 25_01
000000000000000058 Ventilation, complete build
000000000000000059 Filter Ereteam
000000000000000068 a portable 1 ton crane
000000000000000078 Component Full Repair Service ...
000000000000000088 AS-100 T-shirt XL
000000000000000089 AS-100 T-shirt
000000000000000098 PCB Subassembly
```

![ReadTableDemoConsole](/img/contents/ReadTableDemoConsole.jpg){:class="img-responsive"}
