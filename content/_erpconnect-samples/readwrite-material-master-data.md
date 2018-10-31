---
layout: page
title: Read/Write material master data
description: Read/Write material master data
permalink: /:collection/:path
weight: 16
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This little article shows the minimum requirement to create and read material master data in SAP. A material object consists of multiple layers or so called views. Each view may exist multiple times (e.g. one plant view for plant 1000 and one for plant 2000 both for the same material). To keep the samples as simple and short as possible this code only shows how to handle the basic views but the others will work in the same way. The attributes of the basic view are the Material Number itself, the so called Old Material Number (which can come from a legacy system), the Industry Sector and the Material Type (in our case HAWA which stands for Trading Goods, if you know German: HAWA is the abbreviation for Handelsware). And last but not least the basic measure unit, which is mandatory.

We use the BAPI BAPI_MATERIAL_SAVEDATA which can be used for both creating a new material or changing / extending an existing Material. As you see in the code, beside the regular structure for submitting data (CLIENTDATA) there an additional so called checkbox structure called CLIENTDATAX. Any data that is submitted in CLIENTDATA must be confirmed by an X value in the CLIENTDATAX structure.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("...");
con.Open();
 
RFCFunction func = con.CreateFunction("BAPI_MATERIAL_SAVEDATA");
 
RFCStructure header = func.Exports["HEADDATA"].ToStructure();
RFCStructure basedata = func.Exports["CLIENTDATA"].ToStructure();
RFCStructure basedatax = func.Exports["CLIENTDATAX"].ToStructure();
 
header["MATERIAL"] = "SAMPLE001";
header["IND_SECTOR"] = "M"; // M stands for Mechanical Engineering
header["MATL_TYPE"] = "HAWA"; // Type HAWA stands for Trading Goods
header["BASIC_VIEW"] = "X"; // Just an X to indicate, that we want to create the basic view
 
basedata["OLD_MAT_NO"] = "4711"; // Old material number
basedata["BASE_UOM"] = "MM"; // Base Unit MM for milimeter
basedatax["OLD_MAT_NO"] = "X"; // X indicates, that we want to set this value
basedatax["BASE_UOM"] = "X"; // X indicates, that we want to set this value
 
// Add a row to the description text tables
RFCStructure descriptionrow = func.Tables["MATERIALDESCRIPTION"].AddRow();
descriptionrow["LANGU"] = "EN"; // Language of the text
descriptionrow["MATL_DESC"] = "My New Material"; // Actual Text
 
func.Execute();
 
// process return message
Console.WriteLine(func.Imports["RETURN"].ToStructure()["MESSAGE"].ToString());
 
// And Commit everything
RFCFunction funccommit = con.CreateFunction("BAPI_TRANSACTION_COMMIT");
funccommit.Execute();
 
Console.WriteLine("\r\nPress Enter to exit");
Console.ReadLine();
{% endhighlight %}
</details>

![Material-Sample-001](/img/contents/Material-Sample-001.png){:class="img-responsive"}

![Material-Sample-002](/img/contents/Material-Sample-002.png){:class="img-responsive"}

Here's the code snippet for reading the material attributes that were used in the first sample:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("...");
con.Open();
 
RFCFunction func = con.CreateFunction("BAPI_MATERIAL_GET_DETAIL");
 
func.Exports["MATERIAL"].ParamValue = "SAMPLE001";
 
func.Execute();
 
RFCStructure basedata = func.Imports["MATERIAL_GENERAL_DATA"].ToStructure();
 
Console.WriteLine("Description Text: " + basedata["MATL_DESC"].ToString());
Console.WriteLine("Old Material No: " + basedata["OLD_MAT_NO"].ToString());
Console.WriteLine("Industry Sector: " + basedata["IND_SECTOR"].ToString());
Console.WriteLine("Material Type: " + basedata["MATL_TYPE"].ToString());
 
Console.WriteLine("\r\nPress Enter to exit");
Console.ReadLine();
{% endhighlight %}
</details>

![Material-Sample-003](/img/contents/Material-Sample-003.png){:class="img-responsive"}