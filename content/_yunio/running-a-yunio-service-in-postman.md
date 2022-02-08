---
layout: page
title: Running a yunIO Service in Postman
description: Running a yunIO Service in Postman
permalink: /:collection/:path
weight: 2
---

This article shows how to run a yunIO service in Postman.

Postman is an API platform for building and using APIs. You can use Postmn as a Desktop App or in your browser.
For more information on Postman, see [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/).

### Prerequisites in yunIO

1. Create a service in yunIO. For this article we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
The service has the following settings:<br>
- Set the Import Parameter NAME1 to *Supplied by Caller*.
- Select all fields in the Table *CUSTOMER_T* for the output.
2. Copy the URL of the service definition (![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive" width="800px"}


### Loading a yunIO Service in Postman

1. Open Postman in your browser or on your desktop.
2. To load a service definition in Postman, navigate to your workspace and click **[Import]**.<br>
![Postman-Workspace](/img/contents/yunio/postman-workspace.png){:class="img-responsive"}
3. There are 2 ways to import a yunIO service definition:<br>
- Paste the URL of the service definition in the tab **Links**.
- Upload a service definition from your harddrive in the tab **File**.
4. Click **[Import]** to import the service definition.
The service definition is now available in your workspace. <br>
![Postman-Import](/img/contents/yunio/postman-import.png){:class="img-responsive"}

{: .box-tip }
**Tip:** If you don’t have any authentication, headers, or parameters to add to the service, open a new tab and paste the URL of your yunIO service endpoint into the main URL input line.
Select *POST* from the method drop-down list and click **[Send]** to execute the service.

### Parameterizing the Service

All parameters defined in yunIO are accessible in the request body of the service. <br>
To set parameters, edit the *Body* accordingly e.g., set the input parameter NAME1 to "John%" to get all data of customers whose names starts with "John".<br>
There are multiple ways to set the parameter:
- Enter the parameter value directly into the request body: `"NAME1": "John%"`
- Use a variable to set the parameter: `"NAME1": "{% raw  %}{{my_variable}}"{% endraw %}`<br>
For more information on variables in Postman, see [Using Variables in Postman](https://learning.postman.com/docs/sending-requests/variables/).

![Postman-Import](/img/contents/yunio/postman-body.png){:class="img-responsive"}

### Running the Service
After importing the service definition, the URL of the service endpoint is available in the main URI input line.
If not, enter the URL and select the *POST* method. 
Click **[Send]** to execute the service.<br>
![Swagger-Inspector](/img/contents/yunio/postman-run.png){:class="img-responsive"}

The results are displayed in the **Response** section of Postman.
![Postman-Results](/img/contents/yunio/postman-results.png){:class="img-responsive"}

{: .box-note }
**Note:** If the option [**Request credentials from callers when running services**](https://help.theobald-software.com/en/yunio/sap-connection#authentication) is active in the connection settings in yunIO, 
you have to select *Basic Authentication* in the *Authentication* tab of Postman and enter your SAP credentials before running the service.

******

#### Related Links
- [Web Version of Postman](https://www.postman.com/)
- [Postman Documentation](https://learning.postman.com/docs/getting-started/introduction/)
- [Using Variables in Postman](https://learning.postman.com/docs/sending-requests/variables/)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)