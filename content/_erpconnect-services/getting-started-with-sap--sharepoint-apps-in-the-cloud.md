---
layout: page
title: Getting started with SAP / SharePoint Apps in the Cloud
description: Getting started with SAP / SharePoint Apps in the Cloud
permalink: /:collection/:path
weight: 9
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.


Contents:

1. Introduction

2. Objective

	2.1 Definition

	2.2 Wireframe

	2.3 Prerequisites

3. Instructions to prepare the project in SharePoint

	3.1 New Site-Collection

	3.2 Site-Collection Type

	3.3 NAPA-App Installation

	3.4 NAPA Project

4. Azure Service Bus configuration

	4.1 Create a Service Bus

	4.2 Retrieve connection details

5. ECSCore component

	5.1 Installation

	5.2 Configuration

	5.3 Sap Connection Configuration

	5.4 API-Key

	5.5 Azure Service Bus Configuration

	5.6 Checking consistency

6. Realization and putting it all together

	6.1 References

	6.2 Core Javascript-Code with the logic of the App

7. Result

8. Notes

9. Summary

10. Links

### 1. Introduction

Apps are extensively migrating to the Cloud, so how do we handle the demand in manipulating SAP data from the Cloud?

You should understand that there are at least two integral parts to bring such a mechanism to life:

- Server-side, which can directly communicate with SAP. It gets ErpConnectServicesCORE installed to be that very bridge between SAP communication with “the Cloud App(s)”. As long as the context of a Cloud-App are Javascript-based queries for information exchange there must be a “Converter” or “Helper” to traverse such requests into and from the ones SAP understands.
- The JS-Helper. There still are some technical things to care about on the “Client-Side”, such as Transfer-Type or Basic Error-Handling, so the creation of such a Cloud-App starts basically with using Helpers for the Client-Side and Client-Code, like jQuery.

Our proposed implementation architecture:

![Company_Presentation_EN.pptx](/img/contents/Company_Presentation_EN.pptx.jpg){:class="img-responsive"}

### 2. Objective

#### 2.1 Definition

Integrate an App to SharePoint in which SAP Purchase Orders will be read from an SAP system without writing any Server-Side code. The simplicity, elegance and safety of such execution are the three foundations of the current article.

We are going to write a NAPA-App, in the context of SharepointOnline (Office365) to show that this actually works despite of all “restrictions” (e.g. Firewall) and complex mechanisms involved in the process.


#### 2.2 Wireframe

Let us write a simple App which loads some Customers from SAP, using Functional Module SD_RFC_CUSTOMER_GET, and shows them in a simple table.

![wireframe](/img/contents/_wireframe.png){:class="img-responsive"}

#### 2.3 Prerequisites

We will need SharePoint Online access administration rights to install the NAPA-App and create a development website. We will work with Windows Azure Portal, so you must have access to it, too.

 

### 3. Instructions to prepare the project in SharePoint

#### 3.1 New Site-Collection

Login to https://sharepoint.com as ADMINISTRATOR of SharePoint (so you can create a Site Collection, not just a subsite) and go to “SharePoint” (2) in the “Admin-Menu” (1):

![Manage site collections](/img/contents/Manage-site-collections.jpg){:class="img-responsive"}

#### 3.2 Site-Collection Type

Then Create a DEVELOPMENT (important) Website, clicking “New” (3) and then Private Site:

![2014-10-20-09_52_56-Manage-site-collections](/img/contents/2014-10-20-09_52_56-Manage-site-collections.jpg){:class="img-responsive"}

After roughly 5 minutes the website will be active.

 

#### 3.3 NAPA-App Installation

Install NAPA-App (Online App-Programming environment). Note, you have to be SITE-COLLECTION-Administrator (not the SharePoint Administrator used to create a new site collection).

The following screenshots will guide you through the installation.

![TheosDevSiteCollection-DevHome](/img/contents/TheosDevSiteCollection-DevHome.jpg){:class="img-responsive"}

![Your-Apps](/img/contents/Your-Apps.jpg){:class="img-responsive"}

![SharePoint-Store](/img/contents/SharePoint-Store.jpg){:class="img-responsive"}

![2014-10-20-10_13_14-SharePoint-Store](/img/contents/2014-10-20-10_13_14-SharePoint-Store.jpg){:class="img-responsive"}

![2014-10-20-10_12_39-Your-Apps](/img/contents/2014-10-20-10_12_39-Your-Apps.jpg){:class="img-responsive"}

#### 3.4 NAPA Project

Start NAPA by going to “Site Contents” and clicking the NAPA-App and create a new Sharepoint-App Project:

![Site-Contents](/img/contents/Site-Contents.jpg){:class="img-responsive"}

![Microsoft _Napa_ Office-365-Development-Tools](/img/contents/Microsoft_Napa_Office-365-Development-Tools.jpg){:class="img-responsive"}

That’s all. We are redirected to the Project-Code and can write the logic of our App.


### 4. Azure Service Bus configuration 

The mechanism to relay the queries from clients to a secured environment (with ECSCore and SAP access).

#### 4.1 Create a Service Bus

Login to Azure Management Portal and create a new Azure ServiceBus entity (Service Bus > Create > Namespace Name > OK):

[https://manage.windowsazure.com](https://manage.windowsazure.com)

![Service-Bus-Windows-Azure](/img/contents/Service-Bus-Windows-Azure.jpg){:class="img-responsive"}

#### 4.2 Retrieve connection details

Copy connection string, we will need it later: 

![15_24_21-Service Bus-Windows-Azure](/img/contents/15_24_21-Service-Bus-Windows-Azure.png){:class="img-responsive"}


![15_25_38-Service-Bus-Windows-Azure](/img/contents/15_25_38-Service-Bus-Windows-Azure.jpg){:class="img-responsive"}

### 5. ECSCore component

#### 5.1 Installation

Get the package of ERPConnectServices and Install it on the machine, which has access to an SAP system:

[http://theobald-software.com/de/erpconnectservices-downloads.htm](http://theobald-software.com/de/erpconnectservices-downloads.htm)

#### 5.2 Configuration

Now we need to set-up and configure the ECSCore. Deployment manager usually sits in

C:\Program Files\ERPConnect Services Core\ ERPConnectServices.DeploymentManager.exe

Follow the instruction of the deployment master and if everything goes smooth we should be able to navigate to the Page of ECSCore and respective Administration Panel.

#### 5.3 Sap Connection Configuration

Go to Management Webpage:

http://localhost:8085 (it is port 8085, provided that you have selected the default port).

Select “Services” > “Add” to Add SAP connection.

![ECS-Core-Management-Add](/img/contents/ECS-Core-Management-Add.jpg){:class="img-responsive"}

After the Service is created, specify, which users are allowed to use it:

![ECS-Core-Management-Edit-Users](/img/contents/ECS-Core-Management-Edit-Users.jpg){:class="img-responsive"}

#### 5.4 API-Key

Now we need to generate an API-Key, so queries can authenticate the source (it supports more secure models with signatures, which can be used as well).

![ECS-Core-Management-API-Keys](/img/contents/ECS-Core-Management-API-Keys.jpg){:class="img-responsive"}

Copy this key (!), we will need it later from tEcs Client Library (connection.ecs.coreApiKey).

#### 5.5 Azure Service Bus Configuration

Add Azure ServiceBus registration details.

Settings > Azure Service Bus > Add Service Bus Registration and paste the Connection String from paragraph 4.

![ECS-Core-Management-Service-Bus-Registrations](/img/contents/ECS-Core-Management-Service-Bus-Registrations.jpg){:class="img-responsive"}

![ECS-Core-Management-Service-Bus-Registrations-01](/img/contents/ECS-Core-Management-Service-Bus-Registrations-01.jpg){:class="img-responsive"}

#### 5.6 Checking consistency

Test SAP connection and Azure Service Bus registration at the default page of ECSCore:

http://localhost:8080

![ECS-Core-Tasks](/img/contents/ECS-Core-Tasks.jpg){:class="img-responsive"}

![ECS-Core-Azure-Service-Bus-Registration](/img/contents/ECS-Core-Azure-Service-Bus-Registration.jpg){:class="img-responsive"}

![15_40_40-ECS-Core-Service-Tests](/img/contents/15_40_40-ECS-Core-Service-Tests.jpg){:class="img-responsive"}

### 6. Realization and putting it all together

#### 6.1 References

i. Remove App.js reference, it is used to test the new Project. 

ii. We should include Bootstrap (with jQuery, which should already be included by default in the project) and tEcs libraries on the Page (Default.aspx):

```
<link href="//maxcdn.bootstrapcdn.com/bootswatch/3.2.0/yeti/bootstrap.min.css" rel="stylesheet" type="text/css" />

<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
```
 

IMPORTANT! please check and use the latest version of tEcs, where newest changes and improvements are incorporated!

Please visit: [http://static.theobald-software.com/tEcs/](http://static.theobald-software.com/tEcs/)

```
<script src="//static.theobald-software.com/tEcs/4.6.0/theobald.ecs.min.js"></script>
```

![Theobald_TECS_App-Napa](/img/contents/Theobald_TECS_App-Napa.jpg){:class="img-responsive"}

iii. Give this div an ID, so we can put our content there:
```
<div>

</div>

has to become

<div id=”sapContent”>

</div>
```

with custom name of your choice.

#### 6.2 Core Javascript-Code with the logic of the App 

Let us put the basic code to call SAP through AzureBus and ECSCore:

- connection.ecs.coreApiKey must be be retrieved from paragraph 5.4.

- connection.ecs.url consists of Azure Service Bus name (theobaldproxyservices) and domain:servicebus.windows.net, plus “ecs” ist the name of endpoint. “ws” is the suffix for Azure Service Bus powered ECSCore communication:

**“theobaldproxyservices.servicebus.windows.net/ecs/ws”**

{% highlight javascript %}
<script>

        $(document).ready(function () {

            var sapContentTable = $('<table>', {

                class: 'table'

            });

            sapContentTable.css('padding-top', '50px');

            $('#sapContent').append(sapContentTable);

            tEcs.executeFunction({

                connection: {

                    ecs: {

                        core: true,

                        coreApiKey: 'E5AB3A7E4F7945D5A85CC4B3C0DF7BE7',

                        url: 'https://theobaldproxyservices.servicebus.windows.net/ecs/ws'

                    }

                },

                name: 'SD_RFC_CUSTOMER_GET',

                data: {

                    exports: {

                        NAME1: 'T*'

                    }

                },

                done: function (data) {

                    sapContentTable.empty();

                    sapContentTable.append($('<tr><th>ANRED</th><th>KUNNR</th><th>NAME1</th><th>ORT01</th><th>PFACH</th><th>PSTLZ</th><th>STRAS</th><th>TELF1</th><th>TELFX</th></tr>'));

                    data.tables.CUSTOMER_T.rows.forEach(function (row) {

                        var tr = $('<tr>');

                        for (var fieldName in row) {

                            tr.append($('<td>').html(row[fieldName]));

                        }

                        sapContentTable.append(tr);

                    });

                },

                fail: function () {

                    alert(JSON.stringify(tEcs.getLastError()));

                }

            });

        });

    </script>
{% endhighlight %}

We need to supply the function name and connection parameters such as Url to EcsCore (AzureServiceBus Endpoint has “/ws” at the end) and API-Key to access the EcsCore. “data”-field references SAP Objects such as tables, exports, imports, so we set the value of “NAME1” parameter in “tables”.

“$” stands for jQuery and “$(document).ready()” executes, when page loaded.

Click the deploy button on the left of the project and the App should go live in a minute. That’s all:

![Theobald_TECS_App-Napa01](/img/contents/Theobald_TECS_App-Napa01.jpg){:class="img-responsive"}

### 7. Result

As planned we get pretty fast response, as the table gets filled with SAP data:

![Theobald_TECS_App](/img/contents/Theobald_TECS_App.jpg){:class="img-responsive"}

### 8. Notes

Instead of NAPA we could use Visual Studio, they are quite interchangeable when it comes to Sharepoint Javascript-based Apps. However you don’t have to install Visual Studio to write such an app.

Queries to Azure Service Bus must always be sent securely over SSL.

tEcs library is provided with ECS package as well (Folder JS).

### 9. Summary

We’ve seen now how powerful the trifecta of Sharepoint, ECSCore and Windows Azure ServiceBus makes the SAP-Connectivity easy.

In roughly 20 lines of code we are able to load a table of customers from SAP system and aesthetically and beautifully present it on a page.

Impressive. Secure. Convincing.

Enjoy experimenting with ECSCore! Our team is always there for you.

### 10. Links

References:

ErpConnectServices:[http://theobald-software.com/de/erpconnectservices-downloads.htm](http://theobald-software.com/de/erpconnectservices-downloads.htm)

tEcs: [https://static.theobald-software.com/tEcs/4.1](https://static.theobald-software.com/tEcs/4.1)

(latest version [https://static.theobald-software.com/tEcs/latest](https://static.theobald-software.com/tEcs/latest))

jQuery: [http://jquery.com](http://jquery.com)

Bootstrap: [http://getbootstrap.com](http://getbootstrap.com)

Sharepoint Online: [http://sharepoint.com](http://sharepoint.com)

Azure Management Portal: [https://manage.windowsazure.com](https://manage.windowsazure.com)








