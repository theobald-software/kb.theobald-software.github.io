---
layout: page
title: Reading material BOM
description: Reading material BOM
permalink: /:collection/:path
weight: 38
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This sample shows how to obtain the components of a material BOM by using the function module CSAP_MAT_BOM_READ.

To change a material BOM you may use CSAP_MAT_BOM_OPEN, CSAP_MAT_BOM_MAINTAIN and CSAP_MAT_BOM_CLOSE.

To create a new BOM use CSAP_MAT_BOM_ALLOC_CREATE and CSAP_MAT_BOM_CREATE.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("hamlet", 11, "XXX", 
    "XXX", "EN", "800");
con.Open();
  
//Create function
RFCFunction func = con.CreateFunction("CSAP_MAT_BOM_READ");
func.Exports["MATERIAL"].ParamValue = "100-100"; // Material
func.Exports["PLANT"].ParamValue = "1000"; // Plant
func.Exports["BOM_USAGE"].ParamValue = "1"; // Usage -> 1 = Production
  
// Execut e
func.Execut e();
  
// reading header
if (func.Tables["T_STKO"].Rows.Count > 0)
{
    // print out BOM header
    RFCStructure header = func.Tables["T_STKO"].Rows[0];
    Console.WriteLine("Base Quantity: " + header["BASE_QUAN"].ToString()
        + " " + header["BASE_UNIT"].ToString() + "\r\n");
  
  
    Console.WriteLine("Items:\r\n");
  
    // print out components, quantity, item text
    foreach (RFCStructure itemrow in func.Tables["T_STPO"].Rows)
    {
        Console.WriteLine(itemrow["COMPONENT"].ToString() + " " +
            itemrow["COMP_QTY"].ToString() + " " +
            itemrow["ITEM_TEXT1"].ToString());
    }
  
}
else
{
    Console.WriteLine("No BOM found");
}
  
Console.WriteLine("Ready");
Console.ReadLine();
{% endhighlight %}
</details>
