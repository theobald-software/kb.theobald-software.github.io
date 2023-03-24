---
layout: page
title: Creating a Custom Connector in Matillion Data Loader 
description: Creating a custom Connector in Matillion Data Loader 
permalink: /:collection/:path
weight: 23
---

This article shows how to create a custom connector in Matillion Data Loader that loads SAP data via Xtract Universal into Snowflake.<br>
Matillion Data Loader is a cloud based data loading platform that extracts data from popular sources and loads it into cloud destinations, see [Official Website: Matillion Data Loader](https://www.matillion.com/products/data-loader/).

### Prerequisites

- Matillion Hub Account, see [Official Website](https://hub.matillion.com/). 
- Snowflake Destination for the Matillion Data Loader pipeline, see [Matillion Documentation: Destinations - Set up Snowflake](https://documentation.matillion.com/mdl/docs/set-up-snowflake).
- Xtract Universal must be accessible via the internet, e.g., by hosting Xtract Universal on a webserver with a static IP address or via third party tools like [ngrock](https://ngrok.com/). 

### Setup in Xtract Universal

1. Create an extraction in Xtract Universal, see [Online Help: Defining an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction). <br>
The following example scenario extracts the SAP table KNA1 (General Data in Customer Master).<br>
![KNA1](/img/contents/xu/kna1.png){:class="img-responsive"}
2. Assign the `http-json` destination to the extraction, see [Online Help: Assigning Destinations](https://help.theobald-software.com/en/xtract-universal/getting-started/write-data-to-destination#assigning-destinations-to-extractions).

### Create a Custom Connector in Matillion

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
5. Click on the ![edit](/img/contents/icons/edit.png) icon to edit the structure (names and data types) of the http response (6).<br>
The structure is used when loading data into your destination.
This example scenario only extracts the KNA1 columns *City_ORT01*, *Name 1_NAME1*, *Country Key_LAND1* and *Customer Number_KUNNR*.<br>
![matillion-structure](/img/contents/xu/matillion-structure.png){:class="img-responsive"} 
6. Optional: If your extraction uses parameters, open the *Parameters* tab and define the parameters.<br>
![matillion-parameters](/img/contents/xu/matillion-parameters.png){:class="img-responsive"}
7. Click **[Save]** (7) to save the connector.

The custom connector can now be used in a Matillion Data Loader pipeline.

{: .box-note}
**Note:** The Matillion Custom Connector must be set to the same region as Matillion Data Loader, e.g., US (N. Virginia).

### Create a Pipeline in Matillion Data Loader

Create a pipeline that triggers the extraction and writes the data to a destination, see [Matillion Documentation: Creating a pipeline with custom connectors](https://documentation.matillion.com/mcc/docs/custom-connector-batch-pipeline).

1. Open your Matillion Data Loader dashboard under [https://dataloader.matillion.com/dashboard](https://dataloader.matillion.com/dashboard).
2. Click **[Add Pipeline]** to create a new pipeline (1).
![matillion-pipelines](/img/contents/xu/matillion-pipelines.png){:class="img-responsive"}
3. Open the *Custom Connectors* tap to select the custom connector (2), that contains the connection settings for Xtract Universal. 
![matillion-source](/img/contents/xu/matillion-source.png){:class="img-responsive"}
4. Select the endpoint that calls the Xtract Universal extraction and use the arrow buttons to add the endpoint to the list **Endpoints to extract and load**.
Note that a custom connector can have multiple endpoints.
5. Click **[Continue with x endpoint]** (3).<br>
![matillion-endpoints](/img/contents/xu/matillion-endpoint.png){:class="img-responsive"}
6. In the *General* tab enter a name for the target table (4) under **Data warehouse table name**.<br>
![matillion-configure-endpoints](/img/contents/xu/matillion-configure-endpoint.png){:class="img-responsive"}
7. Open the *Authentication* tab and enter the authentication details for the Xtract Universal webservice.
8. Open the *Behaviour* tab and select the elements you want to include as columns in the target table. By default, all elements are selected.
9. Optional: If your endpoint uses parameters, open the *Parameters* tab to define the parameters.
10. Open the *Keys* tab and select a key column that is used to match existing data and prevent duplicates, e.g., *Customer Number_KUNNR* (5).
11. Click **[Continue]** (6).<br>
![matillion-configure-endpoints-key](/img/contents/xu/matillion-configure-endpoint-key.png){:class="img-responsive"}
12. Select the destination to which the data is written to, e.g., Snowflake (7). 
For more information on how to connect to Snowflake, see [Matillion Documentation: Connect to Snowflake](https://documentation.matillion.com/mdl/docs/connect-to-snowflake).<br>
![matillion-destination](/img/contents/xu/matillion-destination.png){:class="img-responsive"}
13. Configure the destination, see [Matillion Documentation: Configure Snowflake](https://documentation.matillion.com/mdl/docs/connect-to-snowflake#configure-snowflake).
14. Click **[Continue]**.
15. Enter a name for the pipeline (8).<br>
![matillion-frequency](/img/contents/xu/matillion-frequency.png){:class="img-responsive"}
16. Select at which interval pipeline is to be executed (9). The pipeline first runs after it is created and then continues with the specified frequency.
17. Click **[Create pipeline]** to create and run the pipeline (10). The pipeline is now listed in your dashboard.<br>
![matillion-pipeline-done](/img/contents/xu/matillion-pipeline-done.png){:class="img-responsive"}
18. Check if the data was successfully uploaded to the destination.<br>
![matillion-matillion-snowflake](/img/contents/xu/matillion-snowflake.png){:class="img-responsive"}

The pipeline now runs automatically at the specified frequency. 

#### Related Links

- [Online Help: Getting Started with Xtract Universal](https://help.theobald-software.com/en/xtract-universal/getting-started)
- [Matillion Documentation: Snowflake Destination](https://documentation.matillion.com/mdl/docs/set-up-snowflake)
- [Matillion Documentation: Matillion Custom Connector Overview](https://documentation.matillion.com/mcc/docs/custom-connector-overview)
- [Matillion Documentation: Creating a pipeline with custom connectors](https://documentation.matillion.com/mcc/docs/custom-connector-batch-pipeline).
