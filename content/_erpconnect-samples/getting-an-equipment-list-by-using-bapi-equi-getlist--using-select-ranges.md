---
layout: page
title: Getting an equipment list by using BAPI EQUI GETLIST / Using Select Ranges
description: Getting an equipment list by using BAPI EQUI GETLIST / Using Select Ranges
permalink: /:collection/:path
weight: 43
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This code snippet shows how to obtain an Equipment list. You can use the function module BAPI_EQUI_GETLIST or the business object method PieceOfEquipment.GetList.

The function module offers so called selection ranges. The snippet shows how to fill the selection range for plants. SIGN defines to Include or Exclude the selection. OPTION defines the operator. The columns LOW and HIGH are for the values.

The sample shows how to query an equipment list of all plants between 1000 and 2000 and all equipment of plant 3000.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// open connection
R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
con.Open(false);
  
// Create a function object
// Alternatively the business object method
// can be created via BusinessObjectMethod businessMethod = 
//       con.CreateBapi("PieceOfEquipment", "GetList")
RFCFunction func = con.CreateFunction("BAPI_EQUI_GETLIST");
  
// The table MAINTPLANT_RA contains a selection range for plants
RFCStructure NewRow = func.Tables["MAINTPLANT_RA"].Rows.Add();
NewRow["SIGN"] = "I"; // Include
NewRow["OPTION"] = "EQ"; // Equals
NewRow["LOW"] = "3000"; // Low value -> Plant 3000
// create a scond range row
NewRow = func.Tables["MAINTPLANT_RA"].Rows.Add();
NewRow["SIGN"] = "I"; // Include
NewRow["OPTION"] = "BT"; // Between
NewRow["LOW"] = "1000"; // Low value -> Plant 1000
NewRow["HIGH"] = "2000"; // High value -> Plant 2000
  
func.Execut e();
  
// print out equipment list
Console.WriteLine("Found " + func.Tables["EQUIPMENT_LIST"].Rows.Count.ToString() + " equipment rows");
  
foreach(RFCStructure row in func.Tables["EQUIPMENT_LIST"].Rows)
{
    Console.WriteLine("EQUIPMENT / DESCRIPT: " + 
        row["EQUIPMENT"].ToString() + " / " + row["DESCRIPT"].ToString());
}
{% endhighlight %}
</details>