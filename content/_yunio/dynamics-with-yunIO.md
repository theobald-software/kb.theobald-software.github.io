---
layout: page
title: Sync Dynamics 365 with SAP using Power Automate and yunIO
description: Sync Dynamics 365 with SAP using Power Automate and yunIO
permalink: /:collection/:path
weight: 45
---

This article shows how to synchronize Dynamics 365 in near-real time with SAP.<br>
In the following scenario, data from Dynamics 365 Business Central is used to automatically create a purchase requisition in SAP. The newly created SAP purchase requisition number is then written back to Dynamics 365.

### About
This article leads you through all necessary steps to set up the following process:
- When a customer account in Dynamics 365 Business Central is modified, a Power Automate workflow is triggered.
- The workflow checks if the customer exists in SAP.
- If both conditions are true, a yunIO service that writes customer data from Dynamics 365 to SAP is executed.
- When the customer is created in SAP, the new SAP customer number is written back to Dynamics 365.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
Follow the steps below to set up a yunIO service that adds customers to the customer master data in SAP:

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. 
This example uses the integration type *Function Module* for the service.
3. [Look up](https://help.theobald-software.com/en/yunio/bapis-and-function-modules#look-up-a-function-module--bapi) the standard BAPI BAPI_CUSTOMER_CREATEFROMDATA1 that creates customers in SAP. 
4. Set all import parameters you want to transfer from Salesforce to SAP to *Supplied by Caller* e.g., NAME, CITY, POSTL_COD1, STREET, etc.<br>
5. Select CUSTOMERNO for export. This Export parameter contains the newly created SAP customer number that is written back to Salesforce.<br>
![yunio-Services-Function-Download](/img/contents\yunio\yunio-bapi-createcustomer.png){:class="img-responsive"}
6. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }

<!---

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. This example uses the integration type *Function Module* for the service.
3. [Look up](https://help.theobald-software.com/en/yunio/bapis-and-function-modules#look-up-a-function-module--bapi) the standard BAPI, BAPI_REQUISITION_CREATE that creates purchase requisitions in SAP. 
4. Set the following table parameters to *Supplied by Caller*:

	| Table | Field | Description |
	| :------ |:--- | :--- |
	| REQUISITION_ITEMS | PREQ_ITEM | Item Number of Purchase Requisition |
	| REQUISITION_ITEMS  | DOC_TYPE | Purchase Requisition Document Type |
	| REQUISITION_ITEMS  | MATERIAL | Material Number |
	| REQUISITION_ITEMS  | PLANT | Plant |
	| REQUISITION_ITEMS  | QUANTITY | Purchase Requisition Quantity |
	| REQUISITION_ITEMS  | DELIV_DATE | Item Delivery Date |

5. Select the table RETURN for the output. This table contains logs and error messages.
6. Select the export parameter NUMBER for the output. This parameter contains the new SAP purchase requisition number that is written back to Dynamics 365.
8. Activate the advanced setting **Commits Transaction**.<br>
![SAPRequisitionCreate-export](/img/contents/yunio/SAPRequisitionCreate-export.png){:class="img-responsive"}
8. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }

-->

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 
your comment goes here

### Setup in Dynamics 365

Customize your Salesforce account to provide SAP-related fields:

- Create a field SAP ID. Once a customer is created in SAP, the customer number is written back into SAP ID.
- Company Code, Sales Org, Distribution Channel and Division are organization details required to create the SAP customer.
- Create a checkbox that indicates if the customer exists in SAP.

For more information on how to customize fields in Salesforce, see Salesforce Documentation: Create Custom Fields.

{: .box-note }
**Note:** Creating *Company Code*, *Sales Org*, *Distribution Channel* and *Division* in Dynamics 365 is optional as they can also be set as static values in Power Automate.



![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition0.png){:class="img-responsive" }

For more information on Dynamics 365, see [Microsoft Documentation: Introduction to lists](https://support.microsoft.com/en-us/office/introduction-to-lists-0a1c3ace-def0-44af-b225-cfa8d92c52d7).

{: .box-note }
**Note:** Defining other input parameters in Dynamics is optional as they can also be set as static values in Power Automate.


### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate#configuring-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a new item is added to the SharePoint list.
3. Add the yunIO connector created in step 1 to the workflow and map the purchase requisition data from SharePoint to the input parameters of yunIO.<br>
![sharepoint-purchase-requisition3](/img/contents/yunio/sharepoint-purchase-requisition3.png){:class="img-responsive"}
4. Make sure that the SharePoint input uses the right format, e.g., the delivery date must have the SAP format `YYYYmmDD` and the cost center must have 10 characters, including leading zeroes.
For conversion tips and code templates, see [Formats and Conversions in Power Automate](https://kb.theobald-software.com/yunio/conversion-in-power-automate).
5. Add a SharePoint **Update Item** tool to write the purchase requisition number from the yunIO Custom Connector back to the SharePoint list.<br>
![sharepoint-purchase-requisition2](/img/contents/yunio/sharepoint-purchase-requisition2.png){:class="img-responsive"}
7. Optional: Send notifications when a purchase requisition is created. 
8. Turn on the workflow.


### Triggering the Process

1. Open SharePoint and add a new purchase requisition.
2. The Power Automate workflow runs and creates the purchase requisition in SAP.
3. Check if the SAP purchase requisition number is written back to SharePoint.
![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition.png){:class="img-responsive" }

