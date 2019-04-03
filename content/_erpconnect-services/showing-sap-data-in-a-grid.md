---
layout: page
title: Showing SAP Data in a Grid within SharePoint with 50 lines of JavaScript (Updated!)
description: Showing SAP Data in a Grid within SharePoint with 50 lines of JavaScript (Updated!)
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

#### Simple WebPart with SAP Scenario

**Introduction**
 
The concept of a JavaScript-Application is simple - most of the time user experiences live interaction. The heavy page must not be fully submitted to the server and then shown to the user.

Update Panels and wise programming along with modern Frameworks show very good performance, so it's your choice whether to try (or expand) the power of Client-Side Scripting or dedicate the time completely to it. Basically the communication with remote services runs via AJAX requests, so the purpose of UI is to form the right request and show the response.

 

Let's create a simple Visual Web Part in Visual Studio (2012) and utilize ERPConnect Services by showing typical usage patterns.

If you know how Sharepoint Web Parts tick, skip to Chapter 2.

**1.Preparing template project**

**1.1 Visual Web Part project**

Create a new Visual Web Part project in Visual Studio (you could use [CKSDev Extension](https://archive.codeplex.com/?p=cksdev) to automate the process even more). Let’s name it by default VisualWebPart1. Check [Microsoft manual](https://docs.microsoft.com/en-us/visualstudio/sharepoint/creating-web-parts-for-sharepoint?view=vs-2017) if you must.

![Picture1](/img/contents/Picture1.png){:class="img-responsive"}
Image 1. New Project: SharePoint Visual WebPart


Select deploy as (!) a **farm** solution. Image 2.

![Picture2](/img/contents/Picture2.png){:class="img-responsive"}
Image 2. SharePoint Customization Wizard

 
You are in .ascx file, responsible for rendering your Web Part.

Type some text into the file and try to deploy it.

Hint:

After successful SharePoint installation be sure, that you use Visual Studio from an account, which has administrative privileges to work with SharePoint. That means if deployment failed, try to investigate the errors in the console.

Then enter the edit-mode of a site-page and navigate to *Insert > Webpart menu*. Under “Custom” folder the VisualWebPart1 you should see your Web Part. Add it and Save the page.

Note:

You may need to do this step again, upon next build/deploy.

![Picture3](/img/contents/Picture3.png){:class="img-responsive"}
Image 3. Project Files Layout.

Notes:

If you would like to rename the project and/or its components, please inspect manually each item highlighted with yellow (Image 3).

SharePointProjectItem.spdata has some information (Namespaces and Class Names), which are not being updated automatically. If you fail to do so, then the Web Part can be rejected by SharePoint when adding it on a website, because of security reasons, it would be “not safe” anymore.

**1.2. Installing and configuring ERPConnect Services**

Now get the ERPConnect Services package (ECS).

[http://theobald-software.com/en/erpconnect-services-productinfo.html](http://theobald-software.com/en/erpconnect-services-productinfo.html)

After having ERPConnect Services installed from

[http://theobald-software.com/en/erpconnect-services-downloads.html?prod=ERPConnectServices](http://theobald-software.com/en/erpconnect-services-downloads.html?prod=ERPConnectServices)

please ensure, that the ECS Service is running and passes the proxy test. You may need to restart the server in order for all components to get initialized.

*{SharepointServer}/_admin/ServiceApplications.aspx*

**2.Coding**

**2.1 Dom (ascx, html)**

You need to include jQuery in project, if it’s not already included. (Right click on the project and select *Add > SharePoint “Layouts” Mapped Folder*. (Image 3, A) Put [jQuery](http://code.jquery.com/jquery-1.10.2.min.js) into the subfolder:

*Layouts\1033\VisualWebPart1\Scripts\jquery.min.js.*

The project tree now looks like on Image 3.

Note how naming is being used. In ScriptLink we have only the last part of the path, without 1033. 1033 resolves English-Language resources.

Note:

You cannot reference external scripts because of security reasons.

Add the following code into the page (in ascx file):
```
<SharePoint:ScriptLink runat="server" Name="VisualWebPart1/Scripts/jquery.min.js" LoadAfterUI="False"></SharePoint:ScriptLink>
```

Be sure to include Tag Definition (normally, that is done automatically):
```
<% @Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>
```

Now you can add an html-markup to be manipulated with.
```
<table id="ts-demo-result"/>
```

**2.2 JavaScript**

{% highlight javascript %}
<script>
    $(document).ready(function () {
        $.ajax({
            url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction',
            type: 'POST',
            data: JSON.stringify({ applicationName: 'ecc', name: 'SD_RFC_CUSTOMER_GET' }),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                Sys.Debug.traceDump(data, 'data');
                if (!data.error) {                   
                    data.result.exports['NAME1'].paramValue = 'T*';                   
                    $.ajax({
                        url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction',
                        type: 'POST',
                        data: JSON.stringify({ applicationName: 'ecc', 'function': data.result}),
                        dataType: 'json',
                        contentType: 'application/json; charset=utf-8',
                        success: function (data1) {
                            if (!data1.error) {
                                alert('Number of rows of table CUSTOMER_T: ' + data1.result.tables['CUSTOMER_T'].rows.length);
                                alert('NAME1 of first table row: ' + data1.result.tables['CUSTOMER_T'].rows[0].NAME1);
                            }
                        }
                    });
                }
            }
        });
    });
</script>
{% endhighlight %}

Code components:

1. “$” - jQuery,

2. “$(document).ready()” - execute, when page loaded.

3. JSON.stringify({ applicationName: 'ecc', name: 'SD_RFC_CUSTOMER_GET' });

This is the way the ECS configuration parameters are sent to the ECS Service with Ajax in a POST-Query.

Function Block ‘SD_RFC_CUSTOMER_GET’ is the example block, which we have chosen for the demo.

4. url: '/_vti_bin/ERPConnectServiceRest.svc/CreateFunction'

The AJAX endpoint, to which we’re making the request, namely CreateFunction, meaning Create an Internal Object of SAP-Function, asks SAP on the server side (ECS Services Application) about metadata for the required function and prepares it for Execution.

5. If CreateFunction request was successful, then we need to fill the parameters of SAP-Function-Object to send it for execution:

data.result.exports['NAME1'].paramValue = 'T*';

Now the AJAX request to ECS contains among other parameters SAP-Function-Object with set values:

JSON.stringify({ applicationName: 'ecc', 'function': data.result });

Note:

There are “exports” and “tables” in SAP-Function-Object), they have metadata, received from SAP Environment:

```
func.exports Object {KUNNR: Object, NAME1: Object}

KUNNR: Object

ddicFieldType: "KUNNR"

 decimals: 0

length: 20

name: "KUNNR"

paramValue: ""

type: "CHAR"

__proto__: Object

NAME1: Object

ddicFieldType: "NAME1"

decimals: 0

length: 70

name: "NAME1"

paramValue: ""

type: "CHAR"

__proto__: Object
```

6. Then we must execute the second AJAX-request to the ECS-ExecuteFunction endpoint with filled “metadata-values”.

```
url: '/_vti_bin/ERPConnectServiceRest.svc/ExecuteFunction'
```

 

7. If the SAP System has accepted the request (parameters were properly filled), the resulting dataset is going to be delivered in the response, this is exactly what we wanted!

For the given example the response looks like this:

```
data1.result.tables['CUSTOMER_T'].rows

Array[337]

[0 … 99]

0: Object

ANRED: ""

KUNNR: "0000000002"

NAME1: "Theobald Software GmbH"

ORT01: "Stuttgart"

PFACH: ""

PSTLZ: "70182"

STRAS: "Astorstrasse 34"

TELF1: ""

TELFX: ""

__proto__: Object

1: Object

...

[100 … 199]

[200 … 299]

[300 … 336]

length: 337


```

8. We are done. You could inspect the query and objects behind the veil (F12, see console), or implement more!

**2.3 Showing the result in a grid**
 

There are many Code and View enhancing mechanisms, like Telerik Kendo or Infragistics, so you can perfect the application and implement most complex scenarios. This time we are going to work with free grid **DataTables**.

[http://datatables.net](http://datatables.net)

The direct link to the package:

[http://datatables.net/releases/DataTables-1.9.4.zip](http://datatables.net/releases/DataTables-1.9.4.zip)

1. You are going to need the a. min.js, b. css file and c. images folder for the project.

a. Add JavaScript reference for DataTables:

```
<SharePoint:ScriptLink runat="server" Name="VisualWebPart1/Scripts/jquery.dataTables.js" LoadAfterUI="False"></SharePoint:ScriptLink>
```

b. Css is included on the page with CssLink control:
```
<SharePoint:CssLink runat="server" DefaultUrl="VisualWebPart1/css/jquery.dataTables.css"/>
```

c. Note, that <images> directory should be inside of PARENT to .css directory.

2. Now modify your code (marked green, the two innermost alerts) to load the data into the table:

```
$('#ts-demo-result').dataTable({

    'aaData': data1.result.tables['CUSTOMER_T'].rows,
    'aoColumns': [
        { 'mDataProp': 'ANRED', sTitle: 'ANRED' },
        { 'mDataProp': 'KUNNR', sTitle: 'KUNNR' },
        { 'mDataProp': 'NAME1', sTitle: 'NAME1' },
        { 'mDataProp': 'ORT01', sTitle: 'ORT01' },
        { 'mDataProp': 'PFACH', sTitle: 'PFACH' },
        { 'mDataProp': 'PSTLZ', sTitle: 'PSTLZ' },
        { 'mDataProp': 'STRAS', sTitle: 'STRAS' },
        { 'mDataProp': 'TELF1', sTitle: 'TELF1' },
        { 'mDataProp': 'TELFX', sTitle: 'TELF1' }
    ]
});
```

3. Redeploy the project and see if you got it!

![Picture4](/img/contents/Picture4.png){:class="img-responsive"}
Image 4. Visual Web Part with rendered by DataTable Grid data, retrieved from SAP via ERPConnect Services SharePoint Connector.

**Conclusion**

***That’s it***. Now you have the results of a huge and powerful SAP system on your SharePoint Website Page. With only 50 lines of code! Great? Definitely!

Now you can spend more time strategically planning how to scale and which features to implement.

This simple project can be downloaded here.

As an example of a more complex project, utilizing kendo framework here could be mentioned our SapQuotation JavaScript Scenario.

![Picture6](/img/contents/Picture6.png){:class="img-responsive"}
Image 5. Alternative application, empowered by ECS and Telerik Kendo [8]

Update:

Using external references of bootstrap library and jQuery the tables can be aligned and designed automatically. Adopting the code from our another article about SharePoint Online we've built another template for you, with 50 lines of code:

![CustomerGetSPOnpremiseBootstrapTable](/img/contents/CustomerGetSPOnpremiseBootstrapTable.jpg){:class="img-responsive"}

Download the wsp [here](/files/KE_SP_ECS_JS_CustomerGet.wsp), and aspx page [here](/files/KE_SP_ECS_JS_CustomerGet.aspx.txt).

Related links:

[1] [https://help.theobald-software.com/en/erpconnect-services/ecs/erpconnect-services-runtime/web-services](https://help.theobald-software.com/en/erpconnect-services/ecs/erpconnect-services-runtime/web-services)

Links in article:

[1] [http://msdn.microsoft.com/en-us/library/ee231579.aspx](http://msdn.microsoft.com/en-us/library/ee231579.aspx)

[2] [http://cksdev.codeplex.com/](http://cksdev.codeplex.com/)

[3] [http://theobald-software.com/en/erpconnect-services-productinfo.html](http://theobald-software.com/en/erpconnect-services-productinfo.html)

[4] [http://jquery.com](http://jquery.com)

[5] [http://code.jquery.com/jquery-1.10.2.min.js](http://code.jquery.com/jquery-1.10.2.min.js)

[6] [http://datatables.net](http://datatables.net)

[7] [http://datatables.net/releases/DataTables-1.9.4.zip](http://datatables.net/releases/DataTables-1.9.4.zip)

[8] [http://www.kendoui.com/](http://www.kendoui.com/)