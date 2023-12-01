---
layout: page
title: ERPConnect in a web application- Creating a Purchase Order via BAPI
description: ERPConnect in a web application- Creating a Purchase Order via BAPI
permalink: /:collection/:path
weight: 14
---

<!---
move to: https://help.theobald-software.com/en/erpconnect/calling-bapis-and-function-modules/using-erpconnect-in-a-web-application
-->


![CreatePurchaseOrderIE](/img/contents/CreatePurchaseOrderIE.jpg){:class="img-responsive"}


```csharp
using System;
using ERPConnect;

Console.Write("Vendor: ");
string vendor = Console.ReadLine();

Console.Write("Material: ");
string material = Console.ReadLine();

Console.Write("Plant: ");
string plant = Console.ReadLine();

Console.Write("Quantity: ");
decimal quantity = decimal.Parse(Console.ReadLine() ?? string.Empty);

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

// Create an RFC-Function object
RFCFunction func = connection.CreateFunction("BAPI_PO_CREATE");

// Fill header structure
RFCStructure header = func.Exports["PO_HEADER"].ToStructure();
header["DOC_TYPE"] = "NB";
header["PURCH_ORG"] = "1000";
header["PUR_GROUP"] = "010";
header["DOC_DATE"] = DateTime.Now.ToString("yyyyMMdd");
header["VENDOR"] = vendor;

// Create an Item
RFCTable items = func.Tables["PO_ITEMS"];
RFCStructure item = items.AddRow();
item["PO_ITEM"] = "1";
item["PUR_MAT"] = material;
item["PLANT"] = plant;

// Create and fill schedules
RFCTable schedules = func.Tables["PO_ITEM_SCHEDULES"];
RFCStructure schedule = schedules.AddRow();
schedule["PO_ITEM"] = "1";
schedule["DELIV_DATE"] = DateTime.Now.ToString("yyyyMMdd");
schedule["QUANTITY"] = quantity;

// Execute Bapi and process return messages
func.Execute();

var returnMessage = func.Tables["RETURN"].Rows[0, "MESSAGE"].ToString();

Console.WriteLine($"Message: {returnMessage}");
```

Input/Output:
```
Vendor: 0000001070
Material: B-7000
Plant: 1000
Quantity: 10
Message: Standard PO created under the number 4500018292
```

![CreatePuchaseOrderME23](/img/contents/CreatePuchaseOrderME23.jpg){:class="img-responsive"}
