---
layout: page
title: Retrieve the Quantity of a Purchase Order that has already been received
description: Retrieving the quantity of a purchase order that has already been received by using BAPI_PO_GETDETAIL
permalink: /:collection/:path
weight: 37
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to get the history of a purchase order to find out which part of the quantity has already been received.

```csharp
public Decimal GetPODetail(string BestellNr, string BestellPos)
{
     
    RFCFunction func = connection.CreateFunction("BAPI_PO_GETDETAIL");
    func.Exports["PURCHASEORDER"].ParamValue = BestellNr;
    func.Exports["HISTORY"].ParamValue = "X";
    func.Exports["ITEMS"].ParamValue = " ";
    func.Execute();
  
     // Check Return-Table
    for(int i=0; i < func.Tables["PO_ITEM_HISTORY_TOTALS"].RowCount; i++)
    {
        if (func.Tables["PO_ITEM_HISTORY_TOTALS"].Rows[i,"PO_ITEM"].ToString().Equals(BestellPos))
        {
            return (decimal)func.Tables["PO_ITEM_HISTORY_TOTALS"].Rows[i,"DELIV_QTY"];
        }
    }
    return 0;
}
```
