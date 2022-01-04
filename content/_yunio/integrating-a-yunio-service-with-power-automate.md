---
layout: page
title: Integrating a yunIO Service with Power Automate
description: Running a yunIO Service with Power Automate
permalink: /:collection/:path
weight: 3
---

This article shows how to integrate a yunIO service with Microsoft Power Automate.

Power Automate is a cloud-based process automation service provided by Microsoft. The platform can be used to create automated workflows between different cloud apps and services to synchronize and collect data, get notifications, start approvals, and more. 
For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).

### Prerequisites in yunIO

1. Create a service in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
The service has the following settings:<br>
- Set the Import Parameter NAME1 to *Supplied by Caller*.
- Select all fields in the Table *CUSTOMER_T* for the output.
2. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client first before integrating it with Power Automate. There are examples for [Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) and [Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman) in the knowledgebase. 


### Configuring a yunIO custom connector in Power Automate

1. Open the section **Data > Custom Connectors** in Power Automate and click on **+ New custom connector**.
2. Click on **Import an OpenAPI file** and give the connector a name of your choice. Select the previously downloaded service definition from your harddrive and click on **Continue**.
The other import methods can also be used in principle, but are not explained in this article. Importing a locally stored definition is the most common method. 
3. In the **General** screen you can upload a connector icon of your choice. <br> If yunIO is installed on a local server environment, the checkbox at *Connect via on-premises gateway* can be selected.<br>
With [TLS enabled](https://help.theobald-software.com/en/yunio/server-settings#transport-layer-security) in the yunIO server settings, the HTTPS scheme is pre-selected. In this example, TLS is disabled, so the HTTP scheme is set.<br> 
Under **Host** the host address for yunIO service consumption with the respective port is preset. For local installations, as it is the case in this example, the host address is *localhost*.<br> 
The **Base URL** box represents extensions of the REST service URL that is triggered with the custom connector. Nothing needs to be changed here. <br>
![Power-Automate-Custom-Connector-Ceneral.png](/img/contents/yunio/power-automate-custom-connector-general.png){:class="img-responsive"}
Keep in mind that as soon as you integrate services from a local yunIO installation with a cloud hosted platform such as Power Automate you need some sort of gateway to tunnel the connection.
A comfortable way for the integration with Power Automate is with the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/). However, it is up to you to decide which gateway solution you want to use.   
4. In the **Security** screen the authentication type for service consumption can be selected. *No authentication* is pre-set. <br>
That means that there is no authentication required by users calling up the connector. <br>
If *Request credentials from callers when running services* is enabled in the yunIO connection settings, *Basic authentication* can also be selected. 
This means that the SAP user name and password of the (technical) user that is used for the SAP connection, must be stored in the Connection Settings defined in the **Test** screen.
In our example we choose *Basic authentication* and label the parameters as *SAP User* and *Password*
![Power-Automate-Custom-Connector-Security.png](/img/contents/yunio/power-automate-custom-connector-security.png){:class="img-responsive"} 
![Power-Automate-Custom-Connector-Security-Basic.png](/img/contents/yunio/power-automate-custom-connector-security-basic.png){:class="img-responsive"} 
5. The **Definition** screen gives an overview about the yunIO service definition. Nothing needs to be changed here. This also applies to the **Code (Preview)** screen.
Before the service can be tested in the **Test** screen, the custom connector must be published with **Create connector**. 

### Testing the Service

In the **Test** screen the custom connector can be tested. To do this, a connection must first be created with **+ New connection**. 
Enter the credentials of the SAP user you have defined for the connection to the SAP source system in the yunIO connection settings. Furthermore select the gateway instance for the *Microsoft on-prem data gateway* if you selected this option in the *General* screen.
Confirm the settings with **Create connection**.   

![Power-Automate-Custom-Connector-Test-Connection.png](/img/contents/yunio/power-automate-custom-connector-test-connection.png){:class="img-responsive"} 


To test the service and see data flowing from SAP, enter valid import values for the parameters you defined as *Supplied by caller* in the yunIO service settings. 
Then click on **Test operation**.

![Power-Automate-Custom-Connector-Test-Operation.png](/img/contents/yunio/power-automate-custom-connector-test-operation.png){:class="img-responsive"} 

{: .box-tip }
**Tip:** For services calling Function Modules or BAPIs that use table or structured input information it can help to switch *Raw Body* off to get a better structured input screen.


### Using the Service in a Power Automate Flow
After the connector was successfully tested it can be used in a Flow. Add a new action to the Flow and search for the custom connector name. <br>
After adding the connector to the Flow, the input fields can be parameterised.

![Power-Automate-Custom-Connector-Flow-Action.png](/img/contents/yunio/power-automate-custom-connector-flow-action.png){:class="img-responsive"} 

![Power-Automate-Custom-Connector-Flow.png](/img/contents/yunio/power-automate-custom-connector-flow.png){:class="img-responsive"} 

******

#### Related Links
- [Web Version of the Swagger Inspector](https://inspector.swagger.io/builder)
- [Swagger Inspector Documentation](https://swagger.io/docs/swagger-inspector/how-to-use-swagger-inspector/)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)