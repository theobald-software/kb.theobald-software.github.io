---
layout: page
title: Sending an ORDER IDoc by using CreateEmptyIdoc method
description: Sending an ORDER IDoc by using CreateEmptyIdoc method
permalink: /:collection/:path
weight: 20
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

We have already discussed IDoc handling in another sample. This time we want to create a more complex IDoc type: ORDERS01. This IDoc will create a sales order in the SAP system.

There are some things to do before sending this type of IDoc. Please refer to the administra-tion chapter to learn how to configure a correct partner profile. If there is no partner profile found for an incoming IDoc, no order will be created.

There are two possible ways to create an IDoc object after having established a connection to the SAP system. Use the CreateIdoc method to create an IDoc with all segments located in the segment collections. This might be useful for sending very simple IDocs. In this example we use the CreateEmptyIdoc method to create only the segments we need with the CreateSegment method.

The example below is a simple WinForms application with two textboxes: The material number (txtMaterialNumber) and the quantity (txtQty) can be entered by the user.

Our sample IDoc needs three different kinds of segment types:

E1EDK01 is the main segment of an ORDERS01 IDoc. We leave it empty, but it must be provided by the calling program to pass the SAP IDoc syntax check.

E1EDP01 is the segment for a single order position. The field MENGE contains the quantity. Of course, this segment can occur more than once.

E1EDP19 represents an object definition. In this case the object is a material number. The field QUALF is therefore set to 002 and the material number is written into the IDTNR field. E1EDP19 segments are always children of E1EDP01.

If you like, take a look at transaction WE60 to search for the segment documentation of IDoc type ORDERS01.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
{
 
 R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
 con.Open(false);
  
 Idoc idoc = con.CreateEmptyIdoc("ORDERS01","");
 idoc.MESTYP = "ORDERS";
  
 // Fill information about idoc sender
 idoc.SNDPRN = "1172"; // Partner number
 idoc.SNDPRT = "KU"; // Partner type
  
 // Create document header segment
 IdocSegment e1edk01 = idoc.CreateSegment("E1EDK01");
 idoc.Segments.Add(e1edk01);
  
 // Create item segment
 IdocSegment e1edp01 = idoc.CreateSegment("E1EDP01");
 e1edp01.Fields["MENGE"].FieldValue = txtQty.Text;
 idoc.Segments.Add(e1edp01);
  
 // Create Object identification (material number in this case)
 IdocSegment e1edp19 = idoc.CreateSegment("E1EDP19");
 e1edp19.Fields["QUALF"].FieldValue = "002"; // 002 for material number
 e1edp19.Fields["IDTNR"].FieldValue = txtMaterialNumber.Text; // material number
 e1edp01.ChildSegments.Add(e1edp19);
  
 idoc.Send();
 this.lblInfo.Text = "Idoc sent";
}
{% endhighlight %}
</details>

![IdocSalesOrder](/img/contents/IdocSalesOrder.jpg){:class="img-responsive"}

