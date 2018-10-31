---
layout: page
title: Retrieving the quantity of a purchase order that has already been received by using BAPI_PO_GETDETAIL
description: Retrieving the quantity of a purchase order that has already been received by using BAPI_PO_GETDETAIL
permalink: /:collection/:path
weight: 37
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This function shows how to get the history of a purchase order to find out which part of the quantity has already been received.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public Decimal GetPODetail(string BestellNr, string BestellPos)
{
     
    RFCFunction func = Con.CreateFunction("BAPI_PO_GETDETAIL");
    func.Exports["PURCHASEORDER"].ParamValue = BestellNr;
    func.Exports["HISTORY"].ParamValue = "X";
    func.Exports["ITEMS"].ParamValue = " ";
    func.Execut e();
  
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
{% endhighlight %}
</details>
