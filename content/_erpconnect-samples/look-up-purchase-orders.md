---
layout: page
title: Look up purchase orders
description: Look up purchase orders
permalink: /:collection/:path
weight: 26
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This sample shows how to obtain a list of purchase orders. The return value is a DataTable object. To get the function running a connection object (Con) must be available.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public DataTable FindPurchaseOrders(string Werk,string BestellNr, string MaterialNr)
{
    // Prepare DataTable
    DataTable ret = new DataTable();
    ret.BeginInit();
    ret.Columns.Add("BestellNr",System.Type.GetType("System.String"));
    ret.Columns.Add("BestellPos",System.Type.GetType("System.String"));
    ret.Columns.Add("MaterialNr",System.Type.GetType("System.String"));
    ret.Columns.Add("Bezeichnungstext",System.Type.GetType("System.String"));
    ret.Columns.Add("Datum",System.Type.GetType("System.DateTime"));
    ret.Columns.Add("Lieferant",System.Type.GetType("System.String"));
    ret.Columns.Add("OffeneMenge",System.Type.GetType("System.Int32"));
    ret.EndInit();
  
  
    // Fill Export Params for the FunctionModule
    RFCFunction func = Con.CreateFunction("BAPI_PO_GETITEMS");
    func.Exports["PLANT"].ParamValue = Werk;
    func.Exports["PURCHASEORDER"].ParamValue = BestellNr;
    func.Exports["MATERIAL"].ParamValue = MaterialNr;
    func.Exports["ITEMS_OPEN_FOR_RECEIPT"].ParamValue = "X";
    func.Exports["WITH_PO_HEADERS"].ParamValue = "X";
    func.Execut e();
  
    // Check Return-Table
    for(int i=0; i < func.Tables["PO_ITEMS"].RowCount; i++)
    {
        DataRow retrow = ret.NewRow();
  
        retrow["BestellNr"] = func.Tables["PO_ITEMS"].Rows[i,"PO_NUMBER"];
        retrow["BestellPos"] = func.Tables["PO_ITEMS"].Rows[i,"PO_ITEM"];
        retrow["MaterialNr"] = func.Tables["PO_ITEMS"].Rows[i,"PUR_MAT"];
        retrow["Bezeichnungstext"] = func.Tables["PO_ITEMS"].Rows[i,"SHORT_TEXT"];
        retrow["OffeneMenge"] = (Decimal)func.Tables["PO_ITEMS"].Rows[i,"DISP_QUAN"] 
            - GetRecToPO(func.Tables["PO_ITEMS"].Rows[i,"PO_NUMBER"].ToString(),
            func.Tables["PO_ITEMS"].Rows[i,"PO_ITEM"].ToString());
  
        // Loope Header Table and find the right PO
        for (int j=0; j < func.Tables["PO_HEADERS"].RowCount; j++)
        {
            if (func.Tables["PO_HEADERS"].Rows[j,"PO_NUMBER"].ToString().Equals(func.Tables["PO_ITEMS"].Rows[i,"PO_NUMBER"]))
            {
                retrow["Datum"] = ERPConnect.ConversionUtils.SAPDate2NetDate(func.Tables["PO_HEADERS"].Rows[j,"DOC_DATE"].ToString());
                retrow["Lieferant"] = func.Tables["PO_HEADERS"].Rows[i,"VEND_NAME"];
            }
        }
  
        ret.Rows.Add(retrow);
    }
    return ret;
}
{% endhighlight %}
</details>


The function GetRecToPO determines the quantity that is already receipted.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public Decimal GetRecToPO(string BestellNr, string BestellPos)
{
    // Fill Export Params for the FunctionModule
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


