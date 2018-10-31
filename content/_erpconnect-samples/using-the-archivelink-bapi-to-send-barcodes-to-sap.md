---
layout: page
title: Using the ArchiveLink BAPI to send barcodes to SAP
description: Using the ArchiveLink BAPI to send barcodes to SAP
permalink: /:collection/:path
weight: 8
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This sample console program shows how to use the function BAPI_BARCODE_SENDLIST to send a list of barcodes to SAP. It is part of the ArchiveLink BAPI.

Releated Links:
[http://help.sap.com/saphelp_45b/helpdata/en/52/3b27181bb011d295840000e82deb58/content.htm](http://help.sap.com/saphelp_45b/helpdata/en/52/3b27181bb011d295840000e82deb58/content.htm)

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer", 00, "SAPUSer","Password", "EN", "800");
con.Open();
  
// create the function
RFCFunction barfunc = con.CreateFunction("BAPI_BARCODE_SENDLIST");
  
// Create and fill the frist row
RFCStructure row = barfunc.Tables["BARCODETABLE"].AddRow();
row["BARCODE"] = "4711"; 
row["CONTREP"] = "Content Repository"; 
row["DOCID"] = "0045935682"; 
row["ARDATE"] = "20070701"; 
row["DOCTYPE"] = "ZTA";
  
// Create and fill the second row
row = barfunc.Tables["BARCODETABLE"].AddRow();
row["BARCODE"] = "4713";
row["CONTREP"] = "Content Repository";
row["DOCID"] = "0045935683";
row["ARDATE"] = "20070702";
row["DOCTYPE"] = "ZTA"; 
  
// Execut e the function
barfunc.Execut e();
  
// process return structure
RFCStructure ret = barfunc.Imports["RETURN"].ToStructure();
  
if (ret["TYPE"].ToString().Equals(""))
    Console.WriteLine("No error reported");
else
    Console.WriteLine("Message: " + ret["MESSAGE"]);
  
Console.WriteLine("Press Enter to exit");
Console.ReadLine();
{% endhighlight %}
</details>