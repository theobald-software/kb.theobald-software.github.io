---
layout: page
title: Sending a MATMAS IDoc
description: Sending a MATMAS IDoc
permalink: /:collection/:path
weight: 21
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This sample code shows, how to create and send a MATMAS IDoc.
Please note, that the code only creates the basic data. If you want to add more sophisticated data, have a look at the IDoc documentation transaction WE60 to find out more about the segments.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
con.Open(false);
  
ERPConnect.Idocs.Idoc id = con.CreateEmptyIdoc("MATMAS01","");
  
// Fill header data
id.SNDPRN = "SMP_ERPC";
id.SNDPRT = "LS";
id.SNDPOR = "TRFC";
id.RCVPRN = "T90CLNT090";
id.RCVPRT = "LS";
id.MESTYP = "MATMAS";
  
// Fill basic data
ERPConnect.Idocs.IdocSegment e1maram = id.CreateSegment("E1MARAM");
e1maram.Fields["MATNR"].FieldValue = "DEV003"; // Material Number
e1maram.Fields["MTART"].FieldValue = "FERT"; // Material Type
e1maram.Fields["MATKL"].FieldValue = "001"; //  Material Group
e1maram.Fields["MEINS"].FieldValue = "PCE"; // Base Unit of Measure
e1maram.Fields["MBRSH"].FieldValue = "M"; // Industry sector
e1maram.Fields["BRGEW"].FieldValue = "1"; // Gross Weight
e1maram.Fields["NTGEW"].FieldValue = "1"; // Net Weight
e1maram.Fields["GEWEI"].FieldValue = "KG"; // Weight Unit
  
id.Segments.Add(e1maram);
  
// Fill text data
ERPConnect.Idocs.IdocSegment e1maktm = id.CreateSegment("E1MAKTM");
e1maktm.Fields["SPRAS"].FieldValue = "E"; // Language Key
e1maktm.Fields["MAKTX"].FieldValue = "my Article"; // Description Text
  
e1maram.ChildSegments.Add(e1maktm);
  
// Send IDoc
id.Send();
  
  
Console.WriteLine("Ready..");
Console.ReadLine();
{% endhighlight %}
</details>

![MatmasSend](/img/contents/MatmasSend.jpg){:class="img-responsive"}


