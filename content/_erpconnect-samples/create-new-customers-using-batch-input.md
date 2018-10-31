---
layout: page
title: Create New Customers using Batch Input
description: Create New Customers using Batch Input
permalink: /:collection/:path
weight: 46
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Using the BAPI BAPI_CUSTOMER_CREATEFROMDATA1 is not recommended because this BAPI doesn't support a lot of fields that are needed to create valid customer master data.
The best way to create a new customer is to use batch input. You can use the transaction recorder located in the installation directory to create a template and then use this template for your own code as described in the manual.
Have a look at the screenshot that shows how to use the transaction recorder. The code below shows the ready-to-use program.

![CreateCustomerBatchInput00](/img/contents/CreateCustomerBatchInput00.png){:class="img-responsive"}

![CreateCustomerBatchInput01](/img/contents/CreateCustomerBatchInput01.png){:class="img-responsive"}

![CreateCustomerBatchInput02](/img/contents/CreateCustomerBatchInput02.png){:class="img-responsive"}

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("USER=XXX LANG=EN CLIENT=800 SYSNR=11 ASHOST=XXPASSWD=XXX");
con.Open();
  
Transaction trans = new Transaction();
  
trans.Connection=con;
trans.TCode="XD01"; // Transaktion XD01
  
  
// First Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0100");
trans.AddStepSetOKCode("/00");
trans.AddStepSetField("RF02D-BUKRS","1000"); // Company Code
trans.AddStepSetField("RF02D-VKORG","1000"); // Sales Org
trans.AddStepSetField("RF02D-VTWEG","10"); // Distribution Channel
trans.AddStepSetField("RF02D-SPART","00"); // Division
trans.AddStepSetField("RF02D-KTOKD","ZARG"); // Account Group
  
//Main Address
trans.AddStepSetNewDynpro("SAPMF02D","0110");
trans.AddStepSetOKCode("/00");
trans.AddStepSetField("KNA1-NAME1","C. Pimpelhuber"); // Name 1
trans.AddStepSetField("KNA1-SORTL","PIMPELH"); // Search Term
trans.AddStepSetField("KNA1-ORT01","Stuttgart"); // City
trans.AddStepSetField("KNA1-STRAS","Olgastr. 20"); // City
trans.AddStepSetField("KNA1-PSTLZ","70182"); // Zip-Code
trans.AddStepSetField("KNA1-LAND1","DE"); // Country
trans.AddStepSetField("KNA1-SPRAS","DE"); // Language
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0120");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0125");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0130");
trans.AddStepSetOKCode("=ENTR");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0340");
trans.AddStepSetOKCode("=ENTR");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0370");
trans.AddStepSetOKCode("=ENTR");
trans.AddStepSetField("KNA1-CIVVE","X");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0360");
trans.AddStepSetOKCode("=ENTR");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0210");
trans.AddStepSetOKCode("/00");
trans.AddStepSetField("KNB1-AKONT","140000"); // Account
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0215");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0220");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0230");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0310");
trans.AddStepSetOKCode("/00");
trans.AddStepSetField("KNVV-KALKS","1"); // Pricing Procedure
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0315");
trans.AddStepSetOKCode("/00");
trans.AddStepSetField("KNVV-VSBED","01"); // Shipping condition
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","0320");
trans.AddStepSetOKCode("/00");
  
//Next Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","1350");
trans.AddStepSetOKCode("=ENTR");
trans.AddStepSetField("KNVI-TAXKD(01)","1"); // Tax classification
  
//Begin a new Dynpro
trans.AddStepSetNewDynpro("SAPMF02D","1350");
trans.AddStepSetOKCode("=UPDA");
  
trans.Execut e();
  
foreach(ERPConnect.Utils.BatchReturn ret in trans.Returns)
    Console.WriteLine(ret.Message);
  
Console.WriteLine("Press Enter to exit");
Console.ReadLine();
{% endhighlight %}
</details>
