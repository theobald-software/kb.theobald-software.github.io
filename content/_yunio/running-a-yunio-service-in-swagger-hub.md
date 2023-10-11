---
layout: page
title: Running a yunIO Service in SwaggerHub Explore
description: Running a yunIO Service in SwaggerHub Explore
permalink: /:collection/:path
weight: 2
---

The following article shows how to run a yunIO service in SwaggerHub Explore.

SwaggerHub Explore is an OpenAPI design and documentation tool that allows validation of APIs and automatic creation of OpenAPI files for any end point you call.
For more information on the SwaggerHub Explore, see [SwaggerHub Explore Documentation](https://support.smartbear.com/swaggerhub-explore/docs/en/get-started.html).

### Prerequisites in yunIO

1. Create a service in yunIO. The depicted example uses a Table service with the following settings:<br>
![Table-Extraction](/img/contents/yunio/table-settings.png){:class="img-responsive" width="800px" }
2. Click ![copy-URL](/img/contents/yunio/copyURL.png) to copy the URL of the service definition or click ![download-file](/img/contents/yunio/download.png) to download the service definition.<br>
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive" width="800px"}

### Loading a yunIO Service into SwaggerHub Explore

1. Open SwaggerHub Explore in your browser.
2. Navigate to the **Definition** menu (1). There are 2 ways to load a yunIO service definition into the SwaggerHub Explore:<br>
- Paste the URL of the service definition into the designated input field (2).
- Click on the upload icon to load a service definition from your hard drive (2).
3. Click **[PARSE]** to analyze the service definition (3).<br>
![Swagger-Inspector-Load-Service-1](/img/contents/yunio/swagger-inspector-load.png){:class="img-responsive"}
4. Once the service is parsed, click on either the GET or POST method of the service (4) to access authentication, headers and parameter settings.<br>
We recommend using the POST method with Transport Layer Security (HTTPS) to ensure data protection. 
Do not use the GET method to send sensible data, e.g. credentials.<br>
![Swagger-Inspector-Load-Service-2](/img/contents/yunio/swagger-inspector-load-body.png){:class="img-responsive"}

{: .box-tip }
**Tip:** If you don’t have any authentication, headers, or parameters to add to the service, paste the URL of your yunIO service endpoint directly into the main URI input line.
Select *POST* from the method drop-down list and click **[Send]** to execute the service.

### Parameterizing the Service

All parameters defined in yunIO are accessible in the request body of the service. <br>
To set parameters, edit the *Body*, e.g. change the WHERE clause of the table extraction. <br>
![Swagger-Inspector](/img/contents/yunio/swagger-inspector.png){:class="img-responsive"}

{: .box-note }
**Note:** When passing a WHERE clause to a yunIo service using the http GET method, add spaces manually, e.g., `MANDT=800 and LAND1='DE'` instead of `MANDT=800andLAND1='DE'`.

### Running the Service

{: .box-note }
**Note:** If the option [*Request credentials from callers when running services*](https://help.theobald-software.com/en/yunio/sap-connection#authentication) is active in the connection settings in yunIO, select *Basic Authentication* in the *Authentication & Headers* tab of SwaggerHub Explore and enter your SAP credentials before running the service.

After parsing the service definition, the URL of the service endpoint should be available in the main URI input line.
If not, enter the URL and select the *POST* method. 
Click **[Send]** to execute the service.<br>
![Swagger-Inspector](/img/contents/yunio/swagger-inspector-run.png){:class="img-responsive"}

The results are displayed in the **Response** section of SwaggerHub Explore.
![Swagger-Inspector-Results](/img/contents/yunio/swagger-inspector-results.png){:class="img-responsive"}


******

#### Related Links
- [SwaggerHub Explore Documentation]([SwaggerHub Explore Documentation](https://support.smartbear.com/swaggerhub-explore/docs/en/get-started.html))
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)