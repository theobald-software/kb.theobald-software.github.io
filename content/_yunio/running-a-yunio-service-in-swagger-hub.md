---
layout: page
title: Running a yunIO Service in SwaggerHub
description: Running a yunIO Service in SwaggerHub
redirect_from:
  - running-a-yunio-service-in-swagger-inspector
permalink: /:collection/:path
weight: 2
---

The following article shows how to run a yunIO service in SwaggerHub.<br>
SwaggerHub is an OpenAPI design and documentation tool that allows validation of APIs.
For more information on the SwaggerHub, see [SwaggerHub Documentation](https://support.smartbear.com/swaggerhub/docs/).

### Prerequisites in yunIO

1. Create a service in yunIO. The depicted example uses a Table service with the following settings:<br>
![Table-Extraction](/img/contents/yunio/table-settings.png){:class="img-responsive" width="800px" }
2. Click ![run](/img/contents/yunio/run-icon.png) to testrun the service in yunIO (1). For more information, see [Online Help: Testing a Service](https://help.theobald-software.com/en/yunio/run-services#testing-a-service).
3. Click ![download-file](/img/contents/yunio/download.png) to download the service definition (2).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

### Loading and Running a yunIO Service in SwaggerHub

1. Open [SwaggerHub](https://app.swaggerhub.com/home) in your browser.
2. Click **Create New > Import and Document API**.<br>
![Swagger-Hub-Load-Service-1](/img/contents/yunio/swagger-hub-load.png){:class="img-responsive"}
3. Click **[Browse]** to upload the service definition or paste the URL of the service endpoint into the designated input field.<br>
![Swagger-Hub-Load-Service-2](/img/contents/yunio/swagger-hub-load-body.png){:class="img-responsive"}
4. Click **[Import]** / **[Upload File]** to load the service definition. 
5. Open the POST method of the service to access headers and parameter settings.<br>
We recommend using the POST method with Transport Layer Security (HTTPS) to ensure data protection. 
Do not use the GET method to send sensible data, e.g., credentials.<br>
![Swagger-Hub-Loaded](/img/contents/yunio/swagger-hub-loaded.png){:class="img-responsive"}
6. Click **[Try it out]** to pass parameters and credentials and to run the service in Swagger Hub.<br>
![Swagger-Hub-Try](/img/contents/yunio/swagger-hub-try.png){:class="img-responsive"}
7. Optional: Edit the parameters in the request body of the service, e.g., change the WHERE clause of the table extraction. 
8. Click **[Execute]** to run the service.<br>
![Swagger-Hub-Results](/img/contents/yunio/swagger-hub-results.png){:class="img-responsive"}
9. If the service requires *Basic Authentication*, you are prompted to enter your credentials.
10. The results are displayed in the *Response body* section of SwaggerHub.


******

#### Related Links
- [SwaggerHub Documentation](https://support.smartbear.com/swaggerhub-explore/docs/en/get-started.html)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)