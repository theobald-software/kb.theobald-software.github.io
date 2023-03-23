---
layout: page
title: Creating a Custom Connector in Matillion Data Loader 
description: Creating a custom Connector in Matillion Data Loader 
permalink: /:collection/:path
weight: 23
---

This article shows how to a custom connector in Matillion Data Loader that loads SAP data via Xtract Universal into Snowflake.<br>
Matillion Data Loader is a cloud based data loading platform that extracts data from popular sources and loads it into cloud destinations, see [Official Website: Matillion Data Loader](https://www.matillion.com/products/data-loader/).

### Prerequisites

- Matillion Hub Account, see [Official Website](https://hub.matillion.com/). 
- Snowflake Destination for the Matillion Data Loader pipeline, see [Matillion Documentation: Destinations - Set up Snowflake](https://documentation.matillion.com/mdl/docs/set-up-snowflake).
- Xtract Universal must be exposed to the internet, e.g., by hosting Xtract Universal on a webserver with a static IP address or via third party tools like [ngrock](https://ngrok.com/). 

### Setup in Xtract Universal

Create an extraction in Xtract Universal, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction). <br>
The following example scenario extracts the SAP table KNA1 (General Data in Customer Master).<br>
![KNA1](/img/contents/xu/kna1.png){:class="img-responsive"}

{: .box-note}
**Note:** Web Service (http-csv, http-json) destination a must? Or it doesn't matter?


### Create a Custom Connector in Matillion Data Loader

To extract SAP data via Xtract Universal you must define a custom connector that contains the connection details of Xtract Universal, see [Matillion Documentation: Matillion Custom Connector Overview](https://documentation.matillion.com/mcc/docs/custom-connector-overview).

1. Open the website [https://create-connector.matillion.com/](https://create-connector.matillion.com/) and log in to create the custom connector.
2. Click **[Add Connector]** (1) to create a new custom connector.<br>
![matillion-add-connector](/img/contents/xu/matillion-add-connector.png){:class="img-responsive"}
3. Click on the ![edit](/img/contents/icons/edit2.png) icon to change the name of the connector (2).
3. Copy the URL the extraction into the designated input field and select `GET` as the http method (3).<br>
The URL has the following format: `<Protocol>://<HOST or IP address>:<Port>/?name=<Name of the Extraction>{&<parameter_i>=<value_i>}`<br>
Example: the URL `https://6606-185-114-89-133.eu.ngrok.io/?name=kna1` calls the extraction "kna1" via ngrock.
For more information about calling extractions via web services, see [Online Help: Call via Webservice](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice).<br>
![matillion-test-connector](/img/contents/xu/matillion-test-connector.png){:class="img-responsive"}
4. To test the connection, enter your authentication details and click **[Send]** (4). 
If the connection is successful, the http response contains the SAP customer data extracted by Xtract Universal (5).
5. Optional: After testing the connection the response structure is automatically generated in the structure section (6). <br>
The structure is used when loading data into your destination. To edit the structure click on the ![edit](/img/contents/icons/edit.png) icon.
This example scenario only extracts the KNA1 columns *ORT01*, *NAME1*, *LAND1* and *KUNNR*.<br>
<!--- ![matillion-structure](/img/contents/xu/matillion-structure.png){:class="img-responsive"} -->
6. Optional: If your extraction uses parameters, open the *Parameters* tab and define the parameters.<br>
![matillion-parameters](/img/contents/xu/matillion-parameters.png){:class="img-responsive"}
7. Click **[Save]** (7) to save the connector.

The custom connector can now be used in a Matillion Data Loader pipeline.

### Create a Pipeline in Matillion Data Loader

Create a pipeline that triggers the extraction and writes the data to a destination, see [Matillion Documentation: Creating a pipeline with custom connectors](https://documentation.matillion.com/mcc/docs/custom-connector-batch-pipeline).

1. Open your Matillion Data Loader dashboard under [https://dataloader.matillion.com/dashboard](https://dataloader.matillion.com/dashboard).
2. Click **[Add Pipeline]** to create a new pipeline (1).
![matillion-pipelines](/img/contents/xu/matillion-pipelines.png){:class="img-responsive"}
3. Open the *Custom Connectors* tap to select the custom connector, that contains the connection settings for Xtract Universal.
![matillion-source](/img/contents/xu/matillion-source.png){:class="img-responsive"}
4. Select your custom connector and use the arrow buttons to add the custom connector to the list **Endpoints to extract and load**.
5. Click **[Continue with 1 endpoint]** to continue to the configuration of the endpoint.<br>
![matillion-endpoints](/img/contents/xu/matillion-endpoint.png){:class="img-responsive"}
6. Configure... enter name of extraction?<br>
![matillion-configure-endpoints](/img/contents/xu/matillion-configure-endpoint.png){:class="img-responsive"}
7. Open the *Keys* tab and select the key properties, e.g., *KUNNR*.
8. Click **[Continue]**.
<!--- ![matillion-configure-endpoints-key](/img/contents/xu/matillion-configure-endpoint-key.png){:class="img-responsive"} -->
9. Select the destination where the data is written to, e.g., snowflake.<br>
![matillion-destination](/img/contents/xu/matillion-destination.png){:class="img-responsive"}
10. Enter the ... where the extracted data is written to.
11. Click **[Continue]**.
12. Enter a name for the pipeline.<br>
![matillion-frequency](/img/contents/xu/matillion-frequency.png){:class="img-responsive"}
13. Select when the pipeline is to be executed.
13. Click **[Create pipeline]**. The pipeline is now listed in your dashboard.<br>
![matillion-pipeline-done](/img/contents/xu/matillion-pipeline-done.png){:class="img-responsive"}

Run pipeline and check if the data was uploaded to the destination.

#### Related Links

- [Online Help: Getting Started with Xtract Universal](https://help.theobald-software.com/en/xtract-universal/getting-started)
- [Matillion Documentation: Matillion Custom Connector Overview](https://documentation.matillion.com/mcc/docs/custom-connector-overview)
