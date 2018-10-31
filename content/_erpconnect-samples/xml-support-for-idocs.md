---
layout: page
title: XML Support for IDocs
description: XML Support for IDocs
permalink: /:collection/:path
weight: 22
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

ERPConnect offers support for both IDoc schema and IDoc data located in XML-files. The two figures below show a IDoc schema file (for the ORDERS01 type) and an IDoc data file. Both are also included in the samples directory.

![SampleXMLSchema](/img/contents/SampleXMLSchema.jpg){:class="img-responsive"}

![SampleXMLIdoc](/img/contents/SampleXMLIdoc.jpg){:class="img-responsive"}

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

