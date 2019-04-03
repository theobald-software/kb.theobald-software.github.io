---
layout: page
title: Call SOAP services from a SharePoint page (WebService Designer, JavaScript)
description: Call SOAP services from a SharePoint page (WebService Designer, JavaScript)
permalink: /:collection/:path
weight: 11
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Contents:

 

1. Introduction

	1.1 Services and SOAP

	1.2 Prerequisites and Concept

2. Step-by-step guide

	2.1 Deploying a Service with WebService Designer (into SharePoint 2013)

	2.2 Investigating and creating an SOAP-envelope

	2.3 Explaining and creating an Ajax-Query

	2.4 Creating a Wiki page with a Script Editor

	2.5 Adding code for Service Query

	2.6 Testing the request

3. Notes and Tipps

4. Summary

5. Links

### 1. Introduction 

#### 1.1 Services and SOAP

The WebService Designer supports on the one hand “typical” flexible SOAP-Services (ISAPI-Services) deployable in SharePoint and OData-Services, which have some restrictions from the other.

SOAP Services communicate over TCP or HTTP using SOAP messages (SOAP means Simple Object Access Protocol), which are strictly declared by the Service Interface and SOAP Standards.

Often such services provide metadata, so the signature for function calls (names, parameters, types, positions) can be determined. Using these services from development environments or from an application, which supports SOAP Services, all that parsing of metadata happens “transparently” for the user which provides only parameter values and the mechanism determines by itself how the final SOAP-Message will look like.

However, it is possible to access SOAP-Services “directly”, without any helper application. This can be useful for example, when a service communication must be initiated from the client-side like a web page using JavaScript. In this case a SOAP-message must be built manually.

Our WebService Designer (WSD) provides a way to sketch an SAP workflow, which will be materialized into a web service in SharePoint. Such a web service can be easily consumed by Visual Studio or InfoPath. However, to work with this service directly from a web page (in SharePoint) SOAP messages (Envelopes) must be built manually.

In this article we show you how to consume a simple SOAP WSD-Service realizing some SAP activities from the JavaScript code on the SharePoint web page.

 

#### 1.2 Prerequisites and Concept

To follow the steps you must have SharePoint 2013 On-Premise installation available, it is the major prerequisite. Maybe you already have a service and would like to try the part of the guide, where we are querying the service. Anyway we provide a mean to design (without writing code) and deploy (without uploading files and mangling with PowerShell) your service into SharePoint, for that we are going to be using our WebService Designer, which is the part of ErpConnectServices package (see link at the bottom). If you would like to experiment with the source code of your service you must have Visual Studio 2012 (or later) and use "Export to VS2012" functionality of the WSD. If you want to dissect the SOAP you might need Fiddler or SoapUI (links at the bottom). We are going to be using jQuery and tEcs+ (links at the bottom) JavaScript libraries to simplity the implementation. tEcs+ is the client-side helper for ErpConnectServices.

In this guide we are going to:

a. Deploy a simple WebService prepared with the WebService Designer into SharePoint 2013 On-Premise and

b. Consume this Service from a SharePoint Wiki page with ScriptEditor using client-side code (JavaScript).

 

### 2. Step-by-step guide

#### 2.1 Deploying a Service with the WebService Designer (into SharePoint 2013)

We are going to deploy a simple WSD-Service called “SAPCustomerWebService” in SharePoint (WSD Template could be found in the download section at the bottom in the archive, extension wcsm). To find instructions for writing (designing) a service, using the WebService Designer please check our documentation:

[https://help.theobald-software.com/en/erpconnect-services/ecs/webservice-designer](https://help.theobald-software.com/en/erpconnect-services/ecs/webservice-designer)

To open a project in the WebService Designer click on "Open From File" (1), select a Service name (2) and please set your SAP (3) and SharePoint (4) connections:

![wsd_soap-11](/img/contents/wsd_soap-11.jpg){:class="img-responsive"}

You can take a peak of how the service is built and what happens inside by double-clicking the operation on the right:

![wsd_soap-12](/img/contents/wsd_soap-12.jpg){:class="img-responsive"}

Now we are ready to deploy (red mark 5).

After successful deployment the Service metadata page (/mex) will be shown, e. g. "http://sp2013/_vti_bin/SAPCustomerWebService.svc/mex"

![wsd_soap-1](/img/contents/wsd_soap-1.jpg){:class="img-responsive"}

#### 2.2 Investigating and creating an SOAP-envelope

There are many ways to generate signatures for a specific service, you could try SoapUi tool, if you would like to understand more of how it works:

[http://sourceforge.net/projects/soapui/](http://sourceforge.net/projects/soapui/)

A sample Envelope for the SAPGetCustomerWebService Service, created with the WSD will be looking like this:

{% highlight xml %}
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.theobald-software.com/ERPConnectServices/WebServices">

<soapenv:Header/>

<soapenv:Body>

    <web:GetCustomersByName>

        <web:name>%</web:name>

    </web:GetCustomersByName>

</soapenv:Body>

</soapenv:Envelope>
{% endhighlight %}

The body contains method-name and method contains method-parameters with “web:” prefix. Value of the parameter node is the value of the parameter.

 

#### 2.3 Explaining and creating an Ajax-Query

jQuery is required for this to work, however it is possible (more unnecessary complicated) to make a request in pure JavaScript.

The functionality was tested with jQuery 1.11.2 (recommended 1.9+).

The full example of such request (in the archive at the bottom):

{% highlight xml %}
var requestSoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://www.theobald-software.com/ERPConnectServices/WebServices"><soapenv:Header/><soapenv:Body><web:GetCustomersByName><web:name>%</web:name></web:GetCustomersByName></soapenv:Body></soapenv:Envelope>';

$.ajax({

    url: '/_vti_bin/SAPCustomerWebService.svc',

    type: 'POST',

    //

    // IMPORTANT

    //

    headers: {

        // "I" before the Service Name, in respect to Interface!

        SOAPAction: 'http://www.theobald-software.com/ERPConnectServices/WebServices/ISAPCustomerWebService/GetCustomersByName'

    },

    data: requestSoap,

    contentType: 'text/xml; charset=utf-8'

}).done(function (data, textStatus, jqXHR) {

    console.log('OK %o', data);

}).fail(function (jqXHR, textStatus, errorThrown) {

    console.log('ERROR: %s, %o', textStatus, errorThrown);

});
{% endhighlight %}

The SOAP-Envelope from the previous paragraph is set to the “data” field of Ajax parameters.

Type is always POST (as long as data is always an envelope).

ContentType is “text/xml; charset=utf-8”, as long as SOAP operates with XML-based data.

The done() and fail() handlers (or “always()”) can be used to deal with the completion of the request, where the first parameter of done method is SOAP response data from the Service (as xml node).

The most important part is adding a “SOAPAction”-header, which is used to correctly assign and process HTTP-request at the server-side (“I’m going to call a service function”).

Note, that there are many possibilities, when describing server-client SOAP communication, sometimes ContentType is “text/xml”, sometimes SOAPAction is empty, so make sure which rules apply to service and SOAP requests.

 
#### 2.4 Creating a Wiki page with a Script Editor

A Wiki page in SharePoint is required, so we get an authorized environment, where a user has access to SharePoint resources (and to our newly deployed Service), so no extra implementation for authorization should be made.

Navigate to your SharePoint page and go to “Site Contents” and then to “Site Pages”:

![wsd_soap-2](/img/contents/wsd_soap-2.jpg){:class="img-responsive"}

Click on “new Wiki page”, name it and click on create:

![wsd_soap-3](/img/contents/wsd_soap-3.jpg){:class="img-responsive"}

After creating a page, you are automatically switched to the edit mode. If you already have a page to begin with, click “edit”.

![wsd_soap-4](/img/contents/wsd_soap-4.jpg){:class="img-responsive"}

Now let us insert a “Script Editor” WebPart (Media and Content category), click “Add”.

![wsd_soap-5](/img/contents/wsd_soap-5.jpg){:class="img-responsive"}

#### 2.5 Adding code for Service Query

Select the Script Editor and add some boilerplate HTML with jQuery and tEcs+ references.

Click “Edit Web Part” and then “EDIT SNIPPET”:

![wsd_soap-6](/img/contents/wsd_soap-6.jpg){:class="img-responsive"}

![wsd_soap-7](/img/contents/wsd_soap-7.jpg){:class="img-responsive"}

Paste the following code to the part (customize it with your Service name, action/function name and parameters if you need) and click “Insert”.

{% highlight html %}
<html>

​

<head>

    <script src="//code.jquery.com/jquery-1.11.2.js"></script>

    <script src="//static.theobald-software.com/theobald.ecs/4.9.0/theobald.ecs.js"></script>

</head>

​

<body>

    <input id="iCustomerMask" value="%" placeholder="customer mask" />

    <br/>

    <input id="bSendSoap" type="button" value="Get Customers" />

    <br/>

    <pre id="tSoapResponse" style="width: 400px; height: 500px;"></pre>

    <script>

        $(document).ready(function () {

            window.theobald.ready(function () {

                $('#bSendSoap').click(function () {

                    window.tEcs.wsdSoapQuery({

                        serviceName: 'SAPCustomerWebService',

                        actionName: 'GetCustomersByName',

                        data: {

                            name: $('#iCustomerMask').val() || '%'

                        },

                    }).done(function (data, textStatus, jqXHR) {

                        $('#tSoapResponse').html(

                            (new XMLSerializer()).serializeToString(data).replace(/>/g, ">\n")

                        );

                    }).fail(function (jqXHR, textStatus, errorThrown) {

                        $('#tSoapResponse').html(

                            jqXHR.responseText.replace(/>/g, ">\n")

                        );

                    }).always(function (data, statusText, errorThrown) {

                        console.log('SAPCustomerWebService/GetCustomersByName: %o', data);

                    });

                });

            });

        });

    </script>

</body>

</html>
{% endhighlight %}



![wsd_soap-8](/img/contents/wsd_soap-8.jpg){:class="img-responsive"}

To find out APIs of tEcs+ wsdSoapQuery function go to:

[https://static.theobald-software.com/theobald.ecs](https://static.theobald-software.com/theobald.ecs)

Now save the page:

![wsd_soap-9](/img/contents/wsd_soap-9.jpg){:class="img-responsive"}

#### 2.6 Testing the request

Clicking on the “Get Customers” button should execute Ajax-query and populate the result control with the response from the service/server, whether it’s an error or a success. Please wait at least 30 seconds on big queries:

![wsd_soap-10](/img/contents/wsd_soap-10.jpg){:class="img-responsive"}

We provide Ajax-based HTML page and tEcs+ based HTML page with response shown as not formatted XML as well for your convenience (see download section).

 

### 3. Notes and Hints

This applies to the ERPConnect Services Core (tm) product as well. Services deployed inside of IIS can be queried with SOAP-Messages from JavaScript code.

If something goes wrong you can always test the new service from InfoPath/Visual Studio or Service Test Application, to ensure it’s deployed correctly and accepting connections. Then try to access it from the Client.

Pay attention to what authentication mechanisms are used (if you are trying to call a service outside of SharePoint and authenticated environment).

Use the developer console (F12) to detect uncaught client-side exceptions (if “nothing happens”).

 

### 4. Summary

We’ve learned why the SOAP mechanism is powerful, where and how it can be used. Making direct requests from the client side in JavaScript can be complicated because of dynamic nature of SOAP, but it is possible. We have seen how tEcs+ library (theobald.ecs) provides an easy way to build generic SOAP envelopes and prepare query parameters for an AJAX-request in typical well known syntax. You can still compose SOAP messages manually and be more thorough when it comes to more complex scenarios and special cases.

tEcs+ is actively extending client side ERPConnect Services extension library, which simplifies responsive JavaScript development for SAP.


Enjoy delivering your SAP data with ERPConnect Services and WebService Designer! Our team is always happy to help, just contact us: support@theobald-software.com.

### 5. Links

References:

ErpConnectServices (includes Web Service Designer):

[http://theobald-software.com/de/erpconnectservices-downloads.htm](http://theobald-software.com/de/erpconnectservices-downloads.htm)

tEcs+ (API and download):

[https://static.theobald-software.com/theobald.ecs](https://static.theobald-software.com/theobald.ecs)

jQuery:

[http://jquery.com/](http://jquery.com/)

SoapUI:

[http://sourceforge.net/projects/soapui/](http://sourceforge.net/projects/soapui/)

Fiddler:

[http://www.telerik.com/fiddler](http://www.telerik.com/fiddler)

Resources:

[Templates, pages and Code Snippets](/files/SAPCustomerWebServicePackage.zip)