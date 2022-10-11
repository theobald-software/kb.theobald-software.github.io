---
layout: page
title: Running a yunIO Service in Swagger Inspector
description: Running a yunIO Service in Swagger Inspector
permalink: /:collection/:path
weight: 2
---

This article shows how to run a yunIO service in Swagger Inspector.

Swagger Inspector is an OpenAPI design and documentation tool that allows validation of APIs and automatic creation of OpenAPI files for any end point you call.
For more information on the Swagger Inspector, see [Swagger Inspector Documentation](https://swagger.io/docs/swagger-inspector/how-to-use-swagger-inspector/).

### Prerequisites in yunIO

1. Create a service in yunIO. This example uses a Table service with the following settings:<br>
![Table-Extraction](/img/contents/yunio/table-settings.png){:class="img-responsive" width="800px" }
2. Copy the URL of the service definition (![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive" width="800px"}

### Loading a yunIO Service into Swagger Inspector

1. Open Swagger Inspector in your browser.
2. Navigate to the **Definition** menu (1). There are 2 ways to load a yunIO service definition into the swagger inspector:<br>
- Paste the URL of the service definition into the designated input field (2).
- Click on the upload icon to load a service definition from your harddrive (2).
3. Click **[PARSE]** to analyze the service definition (3).<br>
![Swagger-Inspector-Load-Service-1](/img/contents/yunio/swagger-inspector-load.png){:class="img-responsive"}
4. Once the service is parsed, click on the service (4) to access any authentication, headers and parameter settings of the service.<br>
![Swagger-Inspector-Load-Service-2](/img/contents/yunio/swagger-inspector-load-body.png){:class="img-responsive"}

{: .box-tip }
**Tip:** If you don’t have any authentication, headers, or parameters to add to the service, paste the URL of your yunIO service endpoint directly into the main URI input line.
Select *POST* from the method drop-down list and click **[Send]** to execute the service.

### Parameterizing the Service

All parameters defined in yunIO are accessible in the request body of the service. <br>
To set parameters, edit the *Body*, e.g. change the WHERE clause of the table extraction. <br>
![Swagger-Inspector](/img/contents/yunio/swagger-inspector.png){:class="img-responsive"}

### Running the Service

{: .box-note }
**Note:** If the option [*Request credentials from callers when running services*](https://help.theobald-software.com/en/yunio/sap-connection#authentication) is active in the connection settings in yunIO, 
you have to select *Basic Authentication* in the *Authentication & Headers* tab of Swagger Insector and enter your SAP credentials before running the service.

After parsing the service definition, the URL of the service endpoint should be available in the main URI input line.
If not, enter the URL and select the *POST* method. 
Click **[Send]** to execute the service.<br>
![Swagger-Inspector](/img/contents/yunio/swagger-inspector-run.png){:class="img-responsive"}

The results are displayed in the **Response** section of Swagger Inspector.
![Swagger-Inspector-Results](/img/contents/yunio/swagger-inspector-results.png){:class="img-responsive"}


******

#### Related Links
- [Web Version of the Swagger Inspector](https://inspector.swagger.io/builder)
- [Swagger Inspector Documentation](https://swagger.io/docs/swagger-inspector/how-to-use-swagger-inspector/)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)