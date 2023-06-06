---
layout: page
title: Sync SharePoint with SAP using Power Automate and yunIO
description: Sync SharePoint with SAP using Power Automate and yunIO
permalink: /:collection/:path
weight: 45
---

This article shows how to synchronize a SharePoint list in near-real time with SAP.
In the following scenario, data from SharePoint is used to automatically create a purchase requisition in SAP. The newly created SAP purchase requisition number is then written back to SharePoint.

### About
This article leads you through all necessary steps to set up the following process:

- When a new purchase requisition is added to a SharePoint list, a Power Automate workflow is triggered. 
This process also works with other automation tools, e.g. Nintex.
- The workflow uses the SharePoint data to run a yunIO service that creates a new purchase requisition in SAP.
- When the purchase requisition is created in SAP, the new SAP purchase requisition number is written back to the SharePoint list.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
The following yunIO service creates purchase requisitions in SAP:

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. This example uses the integration type *Function Module* for the service.
3. [Look up](https://help.theobald-software.com/en/yunio/bapis-and-function-modules#look-up-a-function-module--bapi) the standard BAPI BAPI_PR_CREATE that creates purchase requisitions in SAP. 
4. Set the following import parameters to *Supplied by Caller*: 

	| Table | Field | Description |
	| :------ |:--- | :--- |
	| PRHEADER |  | Transfer Structure for Enjoy Purchase Req. - Header |
	| PRHEADER | PR_TYPE | Order Type (Purchasing) |
	| PRHEADERX |  | Change Parameter for Enjoy Purchase Requisition - Header |
	| PRHEADERX | PR_TYPE | Updated information in related user data field |
	
5. Set the following table parameters to *Supplied by Caller*:

	| Table | Field | Description |
	| :------ |:--- | :--- |
	| PRACCOUNT |  | Transfer Structure for Enjoy Purchase Req. - Acct Assignment |
	| PRACCOUNT | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRACCOUNT | SERIAL_NO | Sequential Number of Account Assignment |
	| PRACCOUNT | GL_ACCOUNT | G/L Account Number |
	| PRACCOUNT | COSTCENTER | Cost Center |
	| PRACCOUNTX | | Change Toolbar for Enjoy Purchase Req. - Account Assignment |
	| PRACCOUNTX | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRACCOUNTX | SERIAL_NO | Sequential Number of Account Assignment |
	| PRACCOUNTX | PREQ_ITEMX | Updated information in related user data field |
	| PRACCOUNTX | SERIAL_NOX | Updated information in related user data field |
	| PRACCOUNTX | GL_ACCOUNT | Updated information in related user data field |
	| PRACCOUNTX | COSTCENTER | Updated information in related user data field |
	| PRITEM | | Transfer Structure for Enjoy Purchase Req. - Item Data |
	| PRITEM | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRITEM | MATERIAL | Material Number |
	| PRITEM | PLANT | Plant |
	| PRITEM | QUANTITY | Purchase Requisition Quantity |
	| PRITEM | DELIV_DATE | Item Delivery Date |
	| PRITEM | ACCTASSCAT | Account Assignment Category |
	| PRITEMX | | Change Parameter for Enjoy Purchase Requisition - Item Data |
	| PRITEM | PREQ_ITEM | Item Number of Purchase Requisition |
	| PRITEM | PREQ_ITEMX | Updated information in related user data field |
	| PRITEM | MATERIAL | Updated information in related user data field |
	| PRITEM | PLANT | Updated information in related user data field |
	| PRITEM | QUANTITY | Updated information in related user data field |
	| PRITEM | DELIV_DATE | Updated information in related user data field |
	| PRITEM | ACCTASSCAT | Updated information in related user data field |

6. Select the table RETURN for export. This table contains logs and error messages.
7. Select the export parameter NUMBER for the output. This parameter contains the new SAP purchase requisition number that is written back to SharePoint.
8. Activate the advanced setting **Commits Transaction**. If this option is active, the function module “BAPI_TRANSACTION_COMMIT” is called after processing the selected Function Module / BAPI. 
BAPI_PR_CREATE require this commit function to successfully update data in the database.<br>
![SAPPurchaseRequisitionCreate-export](/img/contents/yunio/SAPPurchaseRequisitionCreate-export.png){:class="img-responsive"}
8. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 

### Setup in SharePoint

Create a SharePoint list that provides SAP related fields.
For this example, create the following columns:
- Material
- Plant
- Quantity
- Delivery Date
- Cost Center
- Purchase Requisition Number (when a purchase requisition number is created in SAP, it is written back to this column)

![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition.png){:class="img-responsive" }

For more information on SharePoint lists, see [Microsoft Documentation: Introduction to lists](https://support.microsoft.com/en-us/office/introduction-to-lists-0a1c3ace-def0-44af-b225-cfa8d92c52d7).

{: .box-note }
**Note:** Defining other input parameters in SharePoint is optional as they can also be set as static values in Power Automate.

{: .box-tip }
**Tip:** You can use a Power App form to simplify and validate the SharePoint input, see [Using yunIO Services in Power Apps](https://kb.theobald-software.com/yunio/populating-drop-down-controls-in-power-apps#using-yunio-services-in-power-apps).


### Setup in Power Automate

{: .box-note }
**Note:** When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
For more information about yunIO networking settings, see [yunIO Networking Scenarios](https://kb.theobald-software.com/yunio/networking).

1. Open the section **Data > Custom Connectors** in Power Automate and click on **+ New custom connector**.
2. Click on **Import an OpenAPI file** and give the connector a name of your choice. Select the service definition from [Setup in yunIO](#setup-in-yunio) from your harddrive and click **Continue**. 
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
- Enter the credentials of the SAP user you have defined in the yunIO connection settings. If you select to connect via an on-premises gateway in the *General* tab, select your gateway instance.
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
