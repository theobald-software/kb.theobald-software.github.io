---
layout: page
title: Workaround for missing UseRFCWrapper function
description: Workaround for missing UseRFCWrapper function
permalink: /:collection/:path
weight: 9
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In older ERPConnect versions the class RFCFunction had a property called UseRFCWrapper. When this property was set to true function modules could be executed WITHOUT being remote enabled. This was considered as a potential security risk by some of our customers, so we decided to remove this function with ERPConnect version 4.5 (released beginning of September 2012).

Customers who used this function in the past and want to migrate to ERPConnect 4.5 are advised to check, if they can find an alternate function module which is remote enabled. If this is not possible the following code shows how to simulate the old wrapper method by using a class called NonRemoteEnabledABAPReport which can be found as attachment to this article.

After having imported this class in the project, the RFCFunction.Execute call must be replaced as shown in this code:


<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args) 
{
    R3Connection con = new R3Connection("...", 00, "...", "...","DE","800");
    con.Open();
 
    RFCFunction func = con.CreateFunction("READ_TEXT");
    func.Exports["CLIENT"].ParamValue = "800";
    func.Exports["ID"].ParamValue = "BEST";
    func.Exports["LANGUAGE"].ParamValue = "EN";
    func.Exports["NAME"].ParamValue = "100-100";
    func.Exports["OBJECT"].ParamValue = "MATERIAL";
 
    NonRemoteEnabledABAPReport myDummyReport = new NonRemoteEnabledABAPReport(func);
    myDummyReport.Execute();
 
    foreach (RFCStructure row in func.Tables["LINES"].Rows)
    {
        Console.WriteLine(row["TDLINE"].ToString());
    }
}
{% endhighlight %}
</details>


The attached code is published under the CC0 License, which means, you can do whatever you want with it (see for details: [http://creativecommons.org/publicdomain/zero/1.0/legalcode](http://creativecommons.org/publicdomain/zero/1.0/legalcode)).