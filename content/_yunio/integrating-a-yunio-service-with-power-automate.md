---
layout: page
title: Integrating a yunIO Service with Power Automate
description: Running a yunIO Service with Power Automate
permalink: /:collection/:path
weight: 3
---

This article shows how to integrate a yunIO service with Microsoft Power Automate.

Power Automate is a cloud-based process automation service provided by Microsoft. 
The platform can be used to create automated workflows between different cloud apps and services that synchronize and collect data, get notifications, start approvals, and more. 
For more Information on Power Automate see [Microsoft Power Automate Documentation](https://docs.microsoft.com/en-us/power-automate/).


### Creating a Service in yunIO

1. Create a service in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
The service has the following settings:<br>
- Set the Import Parameter NAME1 to *Supplied by Caller*.
- Select all fields in the Table *CUSTOMER_T* for the output.
2. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 


### Configuring a yunIO Custom Connector in Power Automate

{: .box-note }
**Note:** When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway is to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
For more information about yunIO networking settings, see [yunIO Networking Scenarios](https://kb.theobald-software.com/yunio/networking).

1. Open the section **Data > Custom Connectors** in Power Automate and click on **+ New custom connector**.
2. Click on **Import an OpenAPI file** and give the connector a name of your choice. Select the service definition from [Prerequisites in yunIO](#prerequisites-in-yunio) from your harddrive and click **Continue**. 
3. In the **General** tab you can define general information for the custom connector. <br> 
- With **Upload** you can upload a connector icon of your choice. Defining an alternative icon background color or a service description is optional.  
- If you use an on-premises data gateway, activate the checkbox **Connect via on-premises gateway**.<br>
- **Scheme**: With [TLS enabled](https://help.theobald-software.com/en/yunio/server-settings#transport-layer-security) in the yunIO server settings, the HTTPS scheme is pre-selected. In this example TLS is disabled, so the HTTP scheme is set.<br> 
- Under **Host** the host address for the yunIO service consumption with its respective port is preset. For local installations the host address is `localhost:[port]`.<br> 
- The **Base URL** represents extensions of the REST service URL that is triggered by the custom connector. <br>
![Power-Automate-Custom-Connector-Ceneral.png](/img/contents/yunio/power-automate-custom-connector-general.png){:class="img-responsive"}
4. In the **Security** tab you can select the authentication type for service consumption. <br> 
- *No authentication* is pre-set. This means that there is no authentication required by users calling the connector. <br>
- If [*Request credentials from callers when running services*](https://help.theobald-software.com/en/yunio/sap-connection#authentication) is enabled in the yunIO connection settings, you can also select *Basic authentication*. 
This means that the SAP user name and password used for the SAP connection, must be stored in the Connection Settings defined in the [**Test** tab](#testing-the-service).
- This example uses *Basic authentication* and labels the parameters *SAP User* and *Password*
![Power-Automate-Custom-Connector-Security.png](/img/contents/yunio/power-automate-custom-connector-security.png){:class="img-responsive"} 
![Power-Automate-Custom-Connector-Security-Basic.png](/img/contents/yunio/power-automate-custom-connector-security-basic.png){:class="img-responsive"} 
5. The **Definition** tab gives an overview about the yunIO service definition. No changes necessary. This also applies to the **Code (Preview)** tab.

{: .box-note }
**Note:** Before the service can be tested in the **Test** tab, the custom connector must be published with **Create connector**. 

{: .box-tip }
**Tip:** When testing a new custom connector, you can switch to **Swagger Editor** mode and paste test sets directly from Swagger Editor / Swagger Inspector.
For more information on how to test yunIO services in Swagger Inspector, refer to the knowledge base article [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector).

### Testing the Service

The custom connector can be tested in the **Test** tab. <br>
- Create a connection with **+ New connection**. 
- Enter the credentials of the SAP user you have defined in the yunIO connection settings. If you selected to connect via an on-premises gateway in the *General* tab, select your gateway instance.
- Confirm the settings with **Create connection**.   

![Power-Automate-Custom-Connector-Test-Connection.png](/img/contents/yunio/power-automate-custom-connector-test-connection.png){:class="img-responsive"} 

To test run the service 
- **(1)** enter valid import values for the parameters you defined as *Supplied by caller* in the yunIO service settings. 
- **(2)** click **Test operation**. 
- **(3)** the SAP response is displayed in the Request Body. 

![Power-Automate-Custom-Connector-Test-Operation.png](/img/contents/yunio/power-automate-custom-connector-test-operation.png){:class="img-responsive"} 

{: .box-tip }
**Tip:** For services calling Function Modules or BAPIs that use tables or structured input information, switch **Raw Body** off to get a better structured input screen.


### Using the Service in a Power Automate Flow
After a connector is successfully tested, it can be used in a Flow. 
- Add a new action to the Flow and search for the name of the custom connector. <br>
![Power-Automate-Custom-Connector-Flow-Action.png](/img/contents/yunio/power-automate-custom-connector-flow-action.png){:class="img-responsive"} 
- Once the connector is added, the input fields can be parameterized. <br>
![Power-Automate-Custom-Connector-Flow.png](/img/contents/yunio/power-automate-custom-connector-flow.png){:class="img-responsive"} 

******

#### Related Links
- [Youtube Tutorial: SAP process automation - Power Automate SAP Connector](https://www.youtube.com/watch?v=k_yL8Bphfus)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)