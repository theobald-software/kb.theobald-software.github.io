---
layout: page
title: Integrating a yunIO Service with Alteryx
description: Integrating a yunIO Service with Alteryx
permalink: /:collection/:path
weight: 4
progressstate: 5
---


This article shows how to integrate a yunIO service with Alteryx.<br>
Alteryx is a software platform, which allows accessing, cleansing, testing, combining and analyzing output data. 
For more Information on Alteryx, see [Alteryx Official Website](https://www.alteryx.com/).

### Integrating yunIO in Alteryx

yunIO is the connector, which reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

1. Open or create a new Alteryx workflow.
2. Add a **Download** tool to your workflow.
3. In the *Configuration* section of the **Download** tool, activate the option **Use Data Connection Manager (DCM)** and click **[Set Up Connection]**. The Alteryx Data Connection Manager (DCM) opens.
![yunio-download-tool1](/img/contents/yunio/yunio-download-tool1.png){:class="img-responsive"}
4. Click **[New]** to create a new data source.
5. Enter a name for the connection.<br>
![yunio-data-source](/img/contents/yunio/yunIO-data-source.png){:class="img-responsive"}
6. Copy the Base URL of your yunIO instance into the field **Base URL**.
7. Click **[Save]**. The subsection *Connection* is displayed.
8. In the subsection *Connection* select one of the following authentication methods: <br>
- *No Credentials* (if no authentication is set up in yunIO).
- *Username* (if no authentication is set up in yunIO).
- *Username and password* (if Basic Authentication is set up in yunIO, see [yunIO Online Help: Access Control](https://help.theobald-software.com/en/yunio/access-control#global-access-control)).
9. Select an existing credential or click **+ Connect Credential** to create a new credential that can access and run yunIO services.
10. Click **[Link]** / **[Create and link]** to link the credential to the connection.<br>
![yunio-credentials](/img/contents/yunio/yunio-credentials.png){:class="img-responsive"}
11. Click **[Connect]** to establish a connection to yunIO. The Data Connection Manager closes.<br>
![yunio-data-source](/img/contents/yunio/yunIO-data-source-connect.png){:class="img-responsive"}
12. Use the name of a yunIO service as input for the **Download** tool to call the service. <br>
For more information about calling and passing parameters to yunIO services, see [Calling yunIO Services in Alteryx](#calling-yunio-services-in-alteryx).

For more information about the Alteryx **Download** tool, see [Alteryx Designer Documentation: Download-Tool](https://help.alteryx.com/20231/designer/download-tool).

<!---
{: .box-note }
**Note:** The Alteryx Data Connection Manager is available as of Alteryx Designer version 2021.4. 
-->

### Calling yunIO Services in Alteryx

Follow the steps below to call yunIO services in Alteryx:<br>

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO.
This example uses a yunIO transaction service that changes customer master data in SAP, see [Working with Transaction XD02](https://kb.theobald-software.com/yunio/transaction-xd02).<br>
3. Open or create a new Alteryx workflow.<br>
![yunio-workflow](/img/contents/yunio/yunIO-workflow.png){:class="img-responsive"}
4. Add an **Input Data** tool (1) that provides values for the input parameters of the yunIO service. Example:

	|  | Name | Value |
	| :------ |:--- | :--- |
	| 1 | skipPopups | false |
	| 2 | CustomerNo | 1001 |
	| 3 | Name | The Fresh Loaf |
	| 4 | Street | Washington Boulevard |
	| 5 | HouseNo | 1000 |
	| 6 | PostalCode | 65936 |
	| 7 | City | Frankfurt |
	| 8 | Country | DE |
	| 9 | Region | 06 |
	| 10 | Phone | 069-467653-0 |

5. Add a **JSON Build** tool (2) to format the input data into a JSON format that can be processed by the yunIO service. Example:<br>
![yunio-json-format](/img/contents/yunio/yunio-json-format.png){:class="img-responsive"}
6. Add a **Formula** tool (3) to add a new column *Service* to the result of the **JSON Build** tool. 
The column contains the name of the service you want to call e.g., `/Customer_Change_Alteryx`.<br>
![alteryx-formula](/img/contents/yunio/alteryx-formula.png){:class="img-responsive"}
7. Add a **Download** tool (4) to your workflow and set up a connection to yunIO, see [Integrating yunIO in Alteryx](#integrating-yunio-in-alteryx). 
8. Select the *Service* column that contains the name of the service as the input for the URL field. Make sure that the combination of the base URL and the service name represents a valid URL e.g., `https://yunio.example.com:8175/services/Customer_Change_Alteryx`.<br>
![yunio-download-tool](/img/contents/yunio/yunio-download-tool.png){:class="img-responsive"}
8. Add a **JSON Parse** tool (5) to parse the JSON results returned by the service. 
9. Add a **Browse** tool (6) to view the parsed result message of the yunIO service. 
10. Run the workflow. If the run is successful, the workflow returns the following message:<br>
"Changes have been made".

You can download the Alteryx workflow for this application here: [yunIO_Customer_Update.yxwz](/files/yunio/yunIO_Customer_Update.yxwz){:download="yunIO_Customer_Update.yxwz"}

<!--- The service uses the following input parameters:<br>
- skipPopups (this is a default parameter that is used by every service)
- CustomerNo
- Name
- Street
- HouseNo
- PostalCode
- City
- Country
- Region
- Phone 

```json
{
	 "skipPopups": "false",
	 "CustomerNo": "1001",
	 "Name": "The Fresh Loaf",
	 "Street": "Washington Boulevard",
	 "HouseNo": "1000",
	 "PostalCode": "65936",
	 "City": "Frankfurt",
	 "Country": "DE",
	 "Region": "06",
	 "Phone": "069-467653-0"
}
```-->

******

#### Related Links
- [Download yunIO_Customer_Update.yxwz](/files/yunio/yunIO_Customer_Update.yxwz){:download="yunIO_Customer_Update.yxwz"}
- [yunIO Online Help](https://help.theobald-software.com/en/yunio/index)
- [Alteryx Designer Documentation: Data Connection Manager](https://help.alteryx.com/20231/designer/dcm-designer)
- [Alteryx Designer Documentation: Download-Tool](https://help.alteryx.com/20231/designer/download-tool)
- [Alteryx Designer Documentation: JSON Build-Tool](https://help.alteryx.com/20231/designer/json-build-tool)
