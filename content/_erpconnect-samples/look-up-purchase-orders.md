---
layout: page
title: Look up Purchase Orders
description: Look up purchase orders
permalink: /:collection/:path
weight: 26
---

This sample shows how to get a list of purchase orders using the BAPI BAPI_PO_GETITEMS. 


```csharp
using System;
using System.Globalization;
using ERPConnect;

// Set your ERPConnect license
LIC.SetLic("xxxx");

Console.Write("Plant: ");
string plant = Console.ReadLine();

Console.Write("Purchase Order: ");
string purchaseOrder = Console.ReadLine();

Console.Write("Material: ");
string material = Console.ReadLine();

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

RFCFunction function = connection.CreateFunction("BAPI_PO_GETITEMS");
function.Exports["PLANT"].ParamValue = plant;
function.Exports["PURCHASEORDER"].ParamValue = purchaseOrder;
function.Exports["MATERIAL"].ParamValue = material;
function.Exports["ITEMS_OPEN_FOR_RECEIPT"].ParamValue = "X";
function.Exports["WITH_PO_HEADERS"].ParamValue = "X";
function.Execute();

RFCTable headersTable = function.Tables["PO_HEADERS"];
RFCTable itemsTable = function.Tables["PO_ITEMS"];

for (int i = 0; i < itemsTable.RowCount; i++)
{
    var purchaseOrderNumber = (string) itemsTable.Rows[i, "PO_NUMBER"];
    var item = (string) itemsTable.Rows[i, "PO_ITEM"];

    var total = (decimal) itemsTable.Rows[i, "DISP_QUAN"];
    decimal delivered = GetDeliveredQuantityForPurchaseOrder(
        connection,
        purchaseOrderNumber,
        item);

    Console.WriteLine("Purchase Order:");
    Console.WriteLine($"  Number: {purchaseOrderNumber}");
    Console.WriteLine($"  Item: {item}");
    Console.WriteLine($"  Material: {itemsTable.Rows[i, "PUR_MAT"]}");
    Console.WriteLine($"  Text: {itemsTable.Rows[i, "SHORT_TEXT"]}");
    Console.WriteLine($"  Open: {total - delivered}");

    // Loop header table and find the right PO
    for (int j = 0; j < headersTable.RowCount; j++)
    {
        var headerNumber = (string) headersTable.Rows[j, "PO_NUMBER"];
        if (headerNumber == purchaseOrderNumber)
        {
            var date = (string) headersTable.Rows[j, "DOC_DATE"];
            DateTime parsedDate = DateTime.ParseExact(
                date,
                "yyyyMMdd",
                CultureInfo.InvariantCulture);

            Console.WriteLine($"  Date: {parsedDate}");
            Console.WriteLine($"  Vendor: {headersTable.Rows[i, "VEND_NAME"]}");
        }
    }
}

return;

// Determine the quantity that is already receipted
static decimal GetDeliveredQuantityForPurchaseOrder(
    R3Connection connection,
    string purchaseOrder,
    string item)
{
    RFCFunction func = connection.CreateFunction("BAPI_PO_GETDETAIL");
    func.Exports["PURCHASEORDER"].ParamValue = purchaseOrder;
    func.Exports["HISTORY"].ParamValue = "X";
    func.Exports["ITEMS"].ParamValue = " ";
    func.Execute();

    RFCTable table = func.Tables["PO_ITEM_HISTORY_TOTALS"];
    for (int i = 0; i < table.RowCount; i++)
    {
        RFCStructure row = table.Rows[i];
        var historyItem = (string) row["PO_ITEM"];
        if (historyItem == item)
        {
            return (decimal) row["DELIV_QTY"];
        }
    }

    return 0;
}
```

