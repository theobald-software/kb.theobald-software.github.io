---
layout: page
title: Integrating SAP real-time data into BOARD user interface
description: Integrating SAP real-time data into BOARD user interface
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Objective:

SAP Purchase Orders will be read from an SAP Database within the BOARD Designer. Clicking on a row will in turn fetch vendor description from SAP using ERPConnect and show it in a built-in web-page inside BOARD.

 

To demonstrate this particular of many possible integration scenarios between ERPConnect and BOARD, let us create a simple project using:

a.    DataView component

b.    Viewer component

![Board-connect-image001](/img/contents/image001.jpg){:class="img-responsive"}

1.Using common BOARD techniques and a correctly configured DataView component (details omitted for brevity, please reference the [BOARD Documentation](http://help.board.com/) if needed) gives us the following view, containing a table with Purchase information.

![Board-connect-image002](/img/contents/image002.jpg){:class="img-responsive"}

2.Now let us add a Viewer component to the form.

It should be able to receive the Purchase Number, which is currently selected as a parameter (EBELN) and “send a request” to fetch a web-page, based on this parameter. Sample “Layout” configuration is illustrated in the image below.

![Board-connect-image003](/img/contents/image003.gif){:class="img-responsive"}

3.Now let us sketch an exemplary layout for the Vendor Information page

![Board-connect-image004](/img/contents/image004.png){:class="img-responsive"}

3.1. The corresponding HTML could be the table.

{% highlight html %}
<body>
    <form id="form1" runat="server">
        <div>
            <table class="lfa1T">
                <tr>
                    <td colspan="2">
                        <div class="ts-vendor-title ts-nohover">
                            SAP Vendor Details
                        </div>
                    </td>
                </tr>
                …
           </table>
        </div>
    </form>
</body>
</html>
{% endhighlight %}

3.2.  The code-behind implementation can consist of two parts, the Page_Load part extracts the parameter (EBELN), tries to get the vendor info from SAP utilizing the ERPConnect library (see 3.3.) and writes the values to the form fields.

{% highlight csharp %}
protected void Page_Load(object sender, EventArgs e)
    {
        string ebeln = HttpUtility.UrlDecode(Request.QueryString["EBELN"]);
        var vendor = ProviderLfa1.GetLfa1FromSap(ebeln);
        if (String.IsNullOrEmpty(vendor.Lifnr))
        {
            form1.Visible = false;
        }
        LIFNR.ReadOnly = LAND1.ReadOnly = NAME1.ReadOnly = ORT01.ReadOnly = PSTLZ.ReadOnly = true; 
        LIFNR.Text = vendor.Lifnr;
        LAND1.Text = vendor.Land1;
        NAME1.Text = vendor.Name1;
        ORT01.Text = vendor.Ort01;
        PSTLZ.Text = vendor.Pstlz;
    }
{% endhighlight %}

3.3. The extraction part establishes a connection to SAP, tries to read the Vendor ID by passing the Order ID (EBELN).

  a. Look up Vendor №

{% highlight csharp %}
	ReadTable table = new ReadTable(connection);
	table.AddField("LIFNR");
	table.AddCriteria(String.Format("EBELN = {0}", ebeln));
	table.Run();
{% endhighlight %}
	
  b. Look up Vendor details

{% highlight csharp %}
	ReadTable table = new ReadTable(connection);
	table.AddField("LAND1");
	table.AddField("NAME1");
	table.AddField("ORT01");
	table.AddField("PSTLZ");
	table.AddCriteria(String.Format("LIFNR = '{0}'", lifnr));
	table.TableName = "LFA1";
	table.Run();
	table.Result.Rows[0]["LAND1"].ToString()
	…
{% endhighlight %}

You can find the full code of the WebForms project at the end of the article.

Add the WebSite to the IIS (if needed) and copy the URL.

4.Finish the integration by specifying this URL in the Layout Designer of the Viewer component in the BOARD Project.

![Board-connect-image005](/img/contents/image005.jpg){:class="img-responsive"}

The result would be an embedded WebPage on the right side of the DataView, where the Vendor information is being refreshed on changing (selecting) the record inside the DataView table.

![Board-connect-image006](/img/contents/image006.gif){:class="img-responsive"}

[ERPConnect](https://theobald-software.com/en/erpconnect/)

[Source Code (VS Project)](/files/TS.BoardIntegration_src.zip)




