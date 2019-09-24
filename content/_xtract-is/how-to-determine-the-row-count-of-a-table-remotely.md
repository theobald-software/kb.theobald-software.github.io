---
layout: page
title: How to determine the row count of a table remotely
description: How to determine the row count of a table remotely
permalink: /:collection/:path
weight: 11
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Sometimes it is necessary to determine the row count of a table remotely. In this sample we are getting the row count with the help of an SAP standard function module called EM_GET_NUMBER_OF_ENTRIES.

This function module is remote enabled, so we can use it either with ERPConnect for pure programming or with the Xtract product line for pure plug & play.

Let us first take a look at the programming method with ERPConnect. The following code sample illustrates how easy it is getting the row count of the table MARA with just a few lines of code.

{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800");
RFCFunction func = con.CreateFunction("EM_GET_NUMBER_OF_ENTRIES");
RFCStructure entrystruc = func.Tables["IT_TABLES"].AddRow();
entrystruc["TABNAME"] = "MARA";
CountFunc.Execute();
if (func.Tables["IT_TABLES"].RowCount>0)
Console.WriteLine(func.Tables["IT_TABLES"][0, "TABROWS"].ToString());
{% endhighlight %}

Having a look at the following screenshots you can see how it works with the Xtract IS BAPI Component .

First we define the Input Type as static and the Output Type as Pipeline of the Table IT_TABLES.
Then we click on Edit.


![BAPI-Row-Count-01](/img/contents/BAPI-Row-Count-01.png){:class="img-responsive"}

The field TABNAME has to be filled with the name of the table. We can also use a variable here, or we can define a table to get multiple values. But that leads to the necessity to change the Input Type to Pipeline and define the Input table. In this sample we insert a single value MARA. 


![BAPI-Row-Count-02](/img/contents/BAPI-Row-Count-02.png){:class="img-responsive"}

After running the package we can see, that the field TABROWS is now filled with the row count of the Table MARA.

![BAPI-Row-Count-03](/img/contents/BAPI-Row-Count-03.png){:class="img-responsive"}

![BAPI-Row-Count-04](/img/contents/BAPI-Row-Count-04.png){:class="img-responsive"}