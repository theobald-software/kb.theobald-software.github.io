---
layout: page
title: Transfer data packets with ReadTable
description: Transferring data packets with ReadTable class
permalink: /:collection/:path
weight: 6
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to use the data packaging mechanism of the *ReadTable* class.

### About 

Table extractions have a limit of table rows that can be extracted at once (between 100,000 and 1,000,000 depending on the system).
To avoid this limitation, the *ReadTable* class offers a packaging mechanism to extract a huge number of table rows.

{: .box-note }
**Note:** The SAP standard function module RFC_READ_TABLE is not suited for mass data extraction. 

### Set Up Data Packaging

Follow the steps below to set up data packaging:

1. Set the *ReadTable* property `PackageSize` to a value greater than 0 to enable packaging.
2. Set the *ReadTable* property `RaiseIncomingPackageEvent` to *true* to raise an event `IncomingPackage` when a new data packet is processed.
3. Implement the `IncomingPackage` event to process each data packet. The packet is provided as a *Datatable* object.

```csharp 
using System;
using System.Data;
using ERPConnect;
using ERPConnect.Utils;

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

var read = new ReadTable(connection)
{
    PackageSize = 10000,
    RaiseIncomingPackageEvent = true,
    TableName = "MKPF"
};

read.IncomingPackage += OnIncomingPackage;

read.Run();

Console.WriteLine("Press enter to exit");
Console.ReadLine();
return;

static void OnIncomingPackage(ReadTable sender, DataTable packageResult)
{
    Console.WriteLine($"Processing data package with {packageResult.Rows.Count} rows");
}
```

Output:
```
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 10000 rows
Processing data package with 798 rows
Press enter to exit
```