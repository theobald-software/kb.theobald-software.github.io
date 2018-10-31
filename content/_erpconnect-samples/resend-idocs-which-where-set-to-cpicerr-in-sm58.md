---
layout: page
title: Resend IDocs which where set to CPICERR in SM58
description: Resend IDocs which where set to CPICERR in SM58
permalink: /:collection/:path
weight: 33
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

When IDocs are sent by SAP while the external system is not available at this moment, these IDocs / calls are flagged with error in SM58 (tRFC monitor). The calls are resent automatically after minutes depending on the system configuration.

These code snippet shows an option to force the resend.

It looks up all errors in tables ARFCSSTATE of a given destination and then calls ARFC_RUN_NOWAIT to resend each call.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void CheckAndResendTRFCErrors(R3Connection con, string RFCDestination)
{
    // Look up errors in table ARFCSSTATE
    string MyDate = ERPConnect.ConversionUtils.NetDate2SAPDate(DateTime.Now.AddDays(-1));
    ReadTable r = new ReadTable(con);
    r.TableName = "ARFCSSTATE";
    r.AddCriteria("ARFCDEST = '" + RFCDestination + "'");
    r.AddCriteria("AND ARFCDATUM >= '" + MyDate + "'");
    r.AddCriteria("AND ARFCSTATE = 'CPICERR'");
    r.Run();
    if (r.Result.Rows.Count == 0)
        return;
  
    // Execute ARFC_RUN_NOWAIT for each call
    RFCFunction f = con.CreateFunction("ARFC_RUN_NOWAIT");
    f.Exports["WITH_ENQ"].ParamValue = "X";
  
    for (int i = 0; i < r.Result.Rows.Count; i++)
    {
        f.Tables["DATA"].Clear();
        f.Tables["STATES"].Clear();
        RFCStructure struc = f.Exports["TID"].ToStructure();
        struc["ARFCIPID"] = r.Result.Rows[i]["ARFCIPID"].ToString();
        struc["ARFCPID"] = r.Result.Rows[i]["ARFCPID"].ToString();
        struc["ARFCTIME"] = r.Result.Rows[i]["ARFCTIME"].ToString();
        struc["ARFCTIDCNT"] = r.Result.Rows[i]["ARFCTIDCNT"].ToString();
        f.Execut e();
    }
}
{% endhighlight %}
</details>
