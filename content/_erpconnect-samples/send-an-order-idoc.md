---
layout: page
title: Send an ORDER IDoc
description: Sending an ORDER IDoc by using CreateEmptyIdoc method
permalink: /:collection/:path
weight: 20
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows to create a sales order in the SAP system using the IDoc type ORDERS01.

### About

An IDoc to create sales orders requires three different kinds of segment types:
- E1EDK01 is the main segment of an ORDERS01 IDoc. 
We leave it empty, but it must be provided by the calling program to pass the SAP IDoc syntax check.
- E1EDP01 is the segment for a single order position. The field MENGE contains the quantity. 
This segment can occur more than once.
- E1EDP19 represents an object definition and is a child of E1EDP01. In this case the object is a material number. 
The field QUALF is therefore set to "002" and the material number is written into the IDTNR field. 

{: .box-tip }
**Tip:** Use SAP transaction WE60 to look up the segment documentation of IDoc type ORDERS01.

### Prerequisites

Set up an RFC destination to enable calls from an SAP system to a subsystem, see [Online Help: IDocs Prerequisites](https://help.theobald-software.com/en/erpconnect/receiving-and-sending-idocs/prerequisites).<br>
If there is no partner profile found for an incoming IDoc, no order will be created.

### Send an ORDER IDoc

The Windows form for the sales order contains the following elements:
- Two text boxes for input: *txtMaterialNumber* (material number) and *txtQty* (quantity).
- One button: *button1*
 
``` csharp 
private void button1_Click(object sender, System.EventArgs e)
{
 
 // Set your ERPConnect license
 LIC.SetLic("xxxx");

 using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
 {
    Protocol = ClientProtocol.NWRFC,
 };

 connection.Open(false);
  
 Idoc idoc = connection.CreateEmptyIdoc("ORDERS01","");
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
```

Output:

![IdocSalesOrder](/img/contents/IdocSalesOrder.png){:class="img-responsive"}

