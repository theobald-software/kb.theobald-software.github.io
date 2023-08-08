---
layout: page
title: Sync Dynamics 365 with SAP using Power Automate and yunIO
description: Sync Dynamics 365 with SAP using Power Automate and yunIO
permalink: /:collection/:path
weight: 45
---

This article shows how to synchronize Dynamics 365 Business Central with SAP.<br>
In the following scenario, data from Dynamics 365 Business Central is used to automatically create customer master data in SAP. 
The newly created SAP customer number is then written back to Dynamics 365 Business Central.

### About
This article leads you through all necessary steps to set up the following process:
- When a customer account in Dynamics 365 Business Central is modified, a Power Automate workflow is triggered.
- The workflow checks if the customer exists in SAP.
- If the customer does not exist, a yunIO service writes the customer data from Dynamics 365 Business Central to SAP.
- When the customer is created in SAP, the new SAP customer number is written back to Dynamics 365 Business Central.


### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
Follow the steps below to set up a yunIO service that adds customers to the customer master data in SAP:

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. 
This example uses the integration type *Function Module* for the service.
3. [Look up](https://help.theobald-software.com/en/yunio/bapis-and-function-modules#look-up-a-function-module--bapi) the standard BAPI BAPI_CUSTOMER_CREATEFROMDATA1 that creates customers in SAP. 
4. Set all import parameters you want to transfer from Dynamics 365 Business Central to SAP to *Supplied by Caller* e.g., NAME, CITY, POSTL_COD1, STREET, etc.<br>
5. Select CUSTOMERNO for export. This Export parameter contains the newly created SAP customer number that is written back to Dynamics 365 Business Central.<br>
![yunio-Services-Function-Download](/img/contents\yunio\yunio-bapi-createcustomer.png){:class="img-responsive"}
6. Click ![download-file](/img/contents/yunio/download.png) to download the service definition. <br>
The service definition can be imported to Power Automate to create a custom connector for the service.<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 
your comment goes here

### Setup in Dynamics 365

Customize your Business Central account to provide SAP-related fields, e.g., SAP customer number.<br>
Business Central’s personalization options do not include the creation of custom fields. 
Use [custom development](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-reference-overview) or one of multiple available [add-ons](https://appsource.microsoft.com/en-us/marketplace/apps) for Dynamics 365 Business Central to create custom fields.

For more information on how to customize table fields via custom development, see [Microsoft Documentation: Development - Table Object](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/developer/devenv-table-object).

{: .box-note }
**Note:** Creating *Sales Org*, *Distribution Channel* and *Division* in Dynamics 365 Business Central is optional as they can also be set as static values in Power Automate.

![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition0.png){:class="img-responsive" }


### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate#configuring-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a customer data is modified in the Dynamics 365 Business Central table *customers*.
3. Use a *RowID* to keep track of the modified record.
4.. Check if the customer already exists in SAP...
5. ..
6. Add the yunIO connector created in step 1 to the workflow and map the customer data from Dynamics 365 Business Central to the input parameters of yunIO.<br>
![sharepoint-purchase-requisition3](/img/contents/yunio/sharepoint-purchase-requisition3.png){:class="img-responsive"}
7. Add a Business Central **Update Record** tool to write the SAP customer number returned by the yunIO custom connector back to Business Central.<br>
![sharepoint-purchase-requisition2](/img/contents/yunio/sharepoint-purchase-requisition2.png){:class="img-responsive"}
8. Use the *RowID* of the workflow trigger to pass the SAP customer number to the modified record in Dynamics 365 Business Central.<br>
screenshot
9. Optional: Send notifications when a purchase requisition is created. 
8. Turn on the workflow.

{: .box-note }
**Note:** As of Business Central 2022 wave 2 (BC21) any changes in Dynamics 365 Business Central are saved automatically.
To avoid triggering the Power Automate workflow multiple times due to auto-save actions, add a **Delay** tool to the workflow or schedule the SAP synchronization, e.g., once a day.

### Triggering the Process

1. Open Dynamics 365 Business Central and add a new customer.
2. The Power Automate workflow runs and creates the customer in SAP.
3. Check if the SAP customer number is written back to Dynamics 365 Business Central.
![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition.png){:class="img-responsive" }
