---
layout: page
title: Get Requisition Detail by using BAPI_REQUISITION_GETDETAIL
description: Get Requisition Detail by using BAPI_REQUISITION_GETDETAIL
permalink: /:collection/:path
weight: 40
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To list detailed data on a purchase requisition we use the BAPI BAPI_REQUISITION_GETDETAIL. In our sample we want to get the processing status of a purchase requisition.

Therefore we send the purchase requisition number to the BAPI. If the calling was successful, we get the item data back. We can find the item data in the Table REQUISITION_ITEMS.

There are more possibilities for sending and receiving data from purchase requisitions, which could be referred in the SAP documentation.

To get the function running a connection object (Con) must be available.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static void BanfStatus(string Banf_Number)
{
    RFCFunction func = Con.CreateFunction("BAPI_REQUISITION_GETDETAIL");
    func.Exports["NUMBER"].ParamValue = Banf_Number; 
  
    func.Execut e();
  
    if (func.Tables["Return"].RowCount > 0)
    {
     string rMessage = func.Tables["Return"].Rows[0, "MESSAGE"].ToString();
     Console.WriteLine(rMessage);
    }
    if (func.Tables["REQUISITION_ITEMS"].RowCount > 0)
    {
  
     foreach (RFCStructure dr in func.Tables["REQUISITION_ITEMS"].Rows)
     {
       Console.WriteLine("BelgNummer:" + dr["PREQ_NO"].ToString() + " Pos: " + 
       dr["PREQ_ITEM"].ToString() + " Status: " + dr["PROC_STAT"].ToString());
     }
}
{% endhighlight %}
</details>

Now here we can see the result. The requisition has 3 items. They have all the same processing status. You can see the status at the console - "N". N Stands for "Not edited". More processing status values are:

- B - PO created
- A - RFQ created
- K - Contract created
- L - Scheduling agreement created
- S - Service entry sheet created

In our case all the positions of the requisition are "Not edited"

![BanfStatusEn](/img/contents/BanfStatusEn.jpg){:class="img-responsive"}
