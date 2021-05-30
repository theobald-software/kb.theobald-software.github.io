---
layout: page
title: XML Support for IDocs
description: XML Support for IDocs
permalink: /:collection/:path
weight: 22
---

ERPConnect offers support for both IDoc schema and IDoc data located in XML-files. You can create an IDoc schema with the IDoc Schema Generator, which is included in the program folder of ERPConnect. The screenshot below shows an IDoc schema file for the ORDERS01 type.

![SampleXMLSchema](/img/contents/SampleXMLSchema.jpg){:class="img-responsive"}

To create an IDoc object out of the schema we use the method LoadIdocSchema. After doing so, it is possible to create segment objects by using the method CreateSegment (as we did in the other ORDER-Example). The example below shows how to load the IDoc data from a data file by using the method LoadXMLData.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
con.Open(false); 
Idoc i = new Idoc();
i.Connection = con;
  
i.LoadIdocSchema(@"ORDERS01.xsd");
i.LoadXMLData(@"OrderIdoc.xml");
  
i.Send();
  
con.Close();
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Dim con As New R3Connection("SAPServer",00,"SAPUser","Password","EN","800")
con.Open(False)
  
  Dim i As Idoc = New Idoc
  i.Connection = con
  
  i.LoadIdocSchema("ORDERS01.xsd")
  i.LoadXMLData("OrderIdoc.xml")
  
  i.Send()
  
 con.Close()
{% endhighlight %}
</details>

