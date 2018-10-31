---
layout: page
title: Get meta data of a table
description: Get meta data of a table
permalink: /:collection/:path
weight: 10
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The code snippet shows, how to obtain the meta data of a SAP table by using the ReadTable class.

After calling RetrieveAllFieldsOfTable() the Fields collection is filled with detailed information on each column.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer", 00, "SAPUSer","Password", "en", "800");
  
con.Open();
  
ReadTable read = new ReadTable(con);
read.TableName = "MKPF";
read.RetrieveAllFieldsOfTable();
  
for(int i=0; i < read.Fields.Count; i++)
    Console.WriteLine(read.Fields[i].FieldName + " (" +
        read.Fields[i].ABAPType + ", " + read.Fields[i].Length + ")");
  
con.Close();
{% endhighlight %}
</details>