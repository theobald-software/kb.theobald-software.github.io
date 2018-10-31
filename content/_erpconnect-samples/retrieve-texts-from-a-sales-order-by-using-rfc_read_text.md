---
layout: page
title: Retrieve texts from a sales order by using RFC_READ_TEXT
description: Retrieve texts from a sales order by using RFC_READ_TEXT
permalink: /:collection/:path
weight: 45
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The screenshot shows the texts tab in VA01 where the user can store different kinds of texts.

![ReadTextVA01](/img/contents/ReadTextVA01.jpg){:class="img-responsive"}

The texts can be attached to the order header or the order items.

To retrieve these texts we can use the function module RFC_READ_TEXT. We have to fill the table TEXT_LINES for each text we want to fetch. These elements must be filled:

- TDOBJECT is the name of the text object (e.g. VBBK for sales order header or VBBP for sales order item)
- TBNAME is the key (in case of VBBP it is the sales order number and the Sales order item number)
- TDID is the text id which defines the kind of text (e.g. 0001 for Material sales text).
- TDSPRAS is the language key

This code shows how to execute the function module:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// open connection
ERPConnect.R3Connection con = new R3Connection("SapServer",00,"SapUser","Password","en","800");
con.Open();
  
// Create function object
RFCFunction func = con.CreateFunction("RFC_READ_TEXT");
  
// Add a new table row and fill it
RFCStructure newrow = func.Tables["TEXT_LINES"].Rows.Add();
newrow["TDOBJECT"] = "VBBP"; // Text object
newrow["TDNAME"] = "0000008221000010"; // Key
newrow["TDID"] = "0001"; // Text-ID
newrow["TDSPRAS"] = "DE"; // Language
  
// Execut e the function          
func.Execut e();
  
// Loop the table
foreach(RFCStructure row in func.Tables["TEXT_LINES"].Rows)
    Console.WriteLine(row["TDLINE"].ToString());
  
con.Close();
  
Console.WriteLine("");
Console.WriteLine("Press enter to quit.");
Console.ReadLine();
{% endhighlight %}
</details>

![ReadTextConsole](/img/contents/ReadTextConsole.jpg){:class="img-responsive"}

#### Additional Information

Goto transaction SE75 to find out more about all available text objects and the underlaying text IDs.

If you want to know what the correct text name, text object and text id of a certain text is, go to the editor and then click on Goto -> Header.

![TextDetails](/img/contents/TextDetails.png){:class="img-responsive"}

