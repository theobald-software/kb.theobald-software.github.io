---
layout: page
title: ERPConnect FAQs
description: ERPConnect FAQs
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**ERPConnect Exception - System.BadImageFormatException**

*Although I had a copy of the librfc32.dll in my System32 folder I get this exception.*

If you use a 64-Bit System you have to copy a 64-Bit Version of the librfc32.dll in the System32 Folder. The 32-Bit Version of the librfc32.dll has to be copied in the Windows\SysWow64 folder.

**Determine if a connection is valid**

*How do I know whether or not an ERPConnect.R3Connection object is already opened or closed? I have a shared connection object in a windows form, and I don’t want the user to supply credentials each time he clicks on a certain button.*

Please use the ping() method of the connection object. It will never raise an exception only returns true / false depending on if the connection is active and usable.


**SNC Connection to SAP**

*How can I establish a SNC (Secure Network Connection) to SAP?*

You can use the SNC functionality, just with commiting all the Logon Parameters in one Connection String. The Constructor or the Connection String Property of the R3Connection Object can be used to set the Connection String. A SNC Connection String for example can be built like this :

string ConnStr = "ashost=myapphost client=000 snc_mode=1 sysnr=00 type=3 user=SAPDOTNET snc_partnername=\"p:SAPServiceCS2@nt5.sap-ag.de\";

**Ports in Use**

*Which ports are used by SAP to establish the connection?*

If a SAP-Router is used, the ports are 3299 and 3399. If not, the ports are 32XX and 33XX. XX is usually the Systemnumber (like 00, or 05)

**SSO doesn't work**

*I'm not able to obtain a SSO ticket.*

Please have a look at SAP Note 356691 and use the test tool described there to check if everything is set up correctly. You may also make sure that you have the latest ERPConnect release. German speaking customers may also have a look here: '[Single Sign-On sicher konfigurieren](https://www.bsi.bund.de/DE/Themen/ITGrundschutz/ITGrundschutzKataloge/Inhalt/_content/m/m04/m04258.html)'

**Binding LINQ sets to a grid**

*I'm trying to bind a LINQ resultset to a DataGridView object. But it doesn't show any rows.*

You must use a so called BindingSource object between the LINQ resultset and the DataSource property of the grid:


<details>
<summary>[C#]</summary>
{% highlight csharp %}
var ms = from m in sapcon.MARAList where m.MATNR == "100-100" select m;
  
Form1 f = new Form1();
BindingSource bs = new BindingSource(ms,"");
f.dataGridView1.DataSource = bs;
{% endhighlight %}
</details>

Or you can use the ToList() method:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
var ms = from m in sapcon.MARAList where m.MATNR == "100-100" select m;
  
Form1 f = new Form1();
f.dataGridView1.DataSource = ms.ToList();
{% endhighlight %}
</details>

**Using Passwords with Blanks**

I want to use a password with blanks inside.

You can use blank characters in your password, if you quote your password using double quotes.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new ERPConnect.R3Connection("ptmalg", 05, "User", "\"My Password\"", "EN", "800");
{% endhighlight %}
</details>

#### ReadTable class

**Error Error in ASSIGN statement in the program SAPLSDTX**

*I'm getting an error Error in ASSIGN statement in the program SAPLSDTX when using the ReadTable class. But only some tables cause this problem.*

This error comes from a bug in one of the SAP's own function modules. The tables that cause the bug contain at least one column of type F (floating point). There are two ways to avoid this error:

- Create a view in SAP over the table that causes the error. Leave out all columns of type F and use the ReadTable class to run the view instead of the table.
- Install the function module [Z_XTRACT_IS_TABLE](http://www.theobald-software.com/download/Xtractis/Z_XTRACT_IS_TABLE.txt) into you system. Then call the method ReadTable.SetCustomFunctionModule("Z_XTRACT_IS_TABLE") before running the extraction. Please have a look [here](https://help.theobald-software.com/en/erpconnect/special-classes/reading-sap-tables-directly-with-readtable) to learn more about the installation of the function module.

**ERPConnect Exception - DATA_BUFFER_EXCEEDED**

*I try to extract a table from SAP using the ReadTable class and get this execption. But only some tables cause this problem.*

This error comes from a bug in one of SAP's own function modules. The tables that cause the bug contain at least one column of type F (floating point). There are two ways to avoid this error:

- Create a view in SAP over the table that causes the error. Leave out all columns of type F and use the ReadTable class to run the view instead of the table.
- Install the function module [Z_XTRACT_IS_TABLE](https://files.theobald-software.com/download/XtractIS/Z_XTRACT_IS_TABLE.txt) into you system. Then call the method ReadTable.SetCustomFunctionModule("Z_XTRACT_IS_TABLE") before running the extraction. Please have a look [here](https://help.theobald-software.com/en/erpconnect/special-classes/reading-sap-tables-directly-with-readtable) to learn more about the installation of the function module.


#### Queries

**Date format**

*I'm trying to run a query with the following date paramater*
{% highlight sql %}
qry.SelectionParameters(0).Ranges.Add(Sign.Include, RangeOption.Equals, "11-07-2007")
{% endhighlight %}
*but it keeps failing with the following error: "Entry too long (please enter in the format __-__-____)"*


For date values please use the technical format YYYYMMDD (e.g. 20070703)
