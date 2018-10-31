---
layout: page
title: Change Batch value of an Outbound delivery
description: Change Batch value of an Outbound delivery
permalink: /:collection/:path
weight: 47
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In this sample we want to change the batch values in SAP in an outbound delivery. 

The code below shows how to log on to the SAP system, create an RFCFunction object by the method CreateFunction fill in several parameters and structures and execute the function.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
{
    try
    {
 
        R3Connection r3Connection1 = new R3Connection("sapserver", 00, "sapuser", "pwd", "de", "800");
        r3Connection1.Open();
       
        // Create a function object, fill parameters and execute
        RFCFunction f = r3Connection1.CreateFunction("BAPI_OUTB_DELIVERY_CHANGE");
      
        //Fill in values for HEADER_DATA SAP Import Structure
        RFCStructure fHeader = f.Exports["HEADER_DATA"].ToStructure();
        fHeader["DELIV_NUMB"] = "0080016236";
         
        f.Exports["DELIVERY"].ParamValue = "0080016236";
         
        // first Batch
        RFCTable fPosT = f.Tables["ITEM_DATA"];
        RFCStructure fPos = fPosT.AddRow();
        fPos["DELIV_NUMB"] = "0080016236";
        fPos["DELIV_ITEM"] = "000010";
        fPos["MATERIAL"] = "100-302";
        fPos["BATCH"] = "EIGEN_HALB";
        fPos["HIERARITEM"] = "10";
         
        fPos["USEHIERITM"] = "1";
 
        fPos["DLV_QTY"] = 1;
        fPos["DLV_QTY_IMUNIT"] = 1;
 
        fPos["FACT_UNIT_NOM"] = "1";
        fPos["FACT_UNIT_DENOM"] = "1";
 
        fPos["SALES_UNIT"] = "ST";
 
        //Second Batch
        fPos = fPosT.AddRow();
        fPos["DELIV_NUMB"] = "0080016236";
        fPos["DELIV_ITEM"] = "000010";
        fPos["MATERIAL"] = "100-302";
        fPos["BATCH"] = "FREMD_HALB";
 
        fPos["HIERARITEM"] = "10";
 
        fPos["USEHIERITM"] = "1";
        fPos["DLV_QTY"] = 2;
        fPos["DLV_QTY_IMUNIT"] = 2;
 
        fPos["FACT_UNIT_NOM"] = "1";
        fPos["FACT_UNIT_DENOM"] = "1";
 
        fPos["SALES_UNIT"] = "ST";
 
        //Fill in values for ITEM_CONTROL Table
        RFCTable fPosCtrlT = f.Tables["ITEM_CONTROL"];
        RFCStructure fPosCtrl = fPosCtrlT.AddRow();
 
        fPosCtrl["DELIV_NUMB"] = "0080016236";
        fPosCtrl["DELIV_ITEM"] = "000010";
 
        fPosCtrl["CHG_DELQTY"] = "X";
        // Execute function
        f.Execute();
 
        //Create commit function object
        RFCFunction funcCommit = r3Connection1.CreateFunction("BAPI_TRANSACTION_COMMIT");
        funcCommit.Exports["WAIT"].ParamValue = "X";
 
        // Execute commit function
        funcCommit.Execute();
 
         
    }
    catch (Exception e1)
    {
 
        Console.WriteLine(e1.Message);
    }
 
 
}
{% endhighlight %}
</details>
