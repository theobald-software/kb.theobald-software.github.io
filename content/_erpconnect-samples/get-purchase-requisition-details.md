---
layout: page
title: Get Purchase Requisition Details
description: Get Requisition Detail by using BAPI_REQUISITION_GETDETAIL
permalink: /:collection/:path
weight: 40
---

This sample shows how to list detailed data of a purchase requisition using the BAPI BAPI_REQUISITION_GETDETAIL.

### About

To get the processing status of a purchase requisition, send the purchase requisition number to the BAPI.
If the call is successful, the item data is returned in the Table REQUISITION_ITEMS.

Possible processing statuses returned by BAPI_REQUISITION_GETDETAIL:
- N - Not edited
- B - PO created
- A - RFQ created
- K - Contract created
- L - Scheduling agreement created
- S - Service entry sheet created

### Call BAPI_REQUISITION_GETDETAIL

The following sample code calls the BAPI BAPI_REQUISITION_GETDETAIL to get the processing status of a purchase requisition:

```csharp
public static void BanfStatus(string Banf_Number)
{
    RFCFunction func = connection.CreateFunction("BAPI_REQUISITION_GETDETAIL");
    func.Exports["NUMBER"].ParamValue = Banf_Number; 
  
    func.Execute();
  
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
```

Output:

![BanfStatusEn](/img/contents/BanfStatusEn.jpg){:class="img-responsive"}

