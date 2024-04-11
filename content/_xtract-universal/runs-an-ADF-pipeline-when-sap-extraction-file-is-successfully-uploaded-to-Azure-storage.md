---
layout: page
title: Run an ADF pipeline when an SAP extraction file is uploaded to Azure storage
description: Runs an ADF pipeline when extraction file is uploaded to Azure storage
permalink: /:collection/:path
weight: 125
---

The following article shows how to run an event-driven pipeline in Azure Data Factory to process SAP data extracted with [Xtract Universal](https://theobald-software.com/en/xtract-universal/) into an Azure Storage. <br>

### About

Xtract Universal is a universal SAP extraction platform that is used in this example to extract and upload SAP customer master data to Azure Storage. <br> 
An event then triggers an ADF pipeline to process the SAP parquet file, e.g. with [Databricks](https://learn.microsoft.com/en-us/azure/databricks/).
Xtract Universal supports different file formats for Azure storage, this example uses [Apache Parquet](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/read-parquet), which is a column file format that provides optimizations to speed up queries and is more efficient than CSV or JSON.

Target audience: Customers who utilize Azure Data Factory (ADF) as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The following sections describe the basic principles for triggering an ADF pipeline.
Keep in mind, it is not a best practice document or a recommendation.

### Prerequisites

- You are familiar with Xtract Universal and have created a number of extractions, see [Getting Started with Xtract Univeral](https://help.theobald-software.com/en/xtract-universal/getting-started).
- You are familiar with [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction).
- You can successfully execute extractions from a web browser, see [Running an Extraction: URL and command-line](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction#url-and-command-line-3).
- You have assigned an [Azure Storage Destination](https://help.theobald-software.com/en/xtract-universal/destinations/azure-storage) to extractions.<br> 
- You have access to [Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/) and are familiar with the basic principles of how to build an ADF pipeline.
- You are familiar with ADF pipeline triggers, especially [triggering a pipeline in response to a storage event](https://docs.microsoft.com/en-us/azure/data-factory/how-to-create-event-trigger?tabs=data-factory). 


### General Overview

#### Azure Storage 
Xtract Universal extracts SAP data and loads it into an Azure Storage as a parquet file. An Azure Storage event trigger is used to run an ADF pipeline for further processing of the SAP file. 

#### ADF Pipelines and Storage Event Triggers
The *Master pipeline* is triggered by an Azure Storage event and calls a child pipeline for further processing. The *Master pipeline* has an event trigger based on Azure storage. <br>

The Master pipeline has 2 activities: <br>

- write a log to an Azure SQL database (optional)
- call a *Child pipeline* to process the parquet file with Databricks

This article focuses on the *Master pipeline*. 

The *Child pipeline* processes the parquet file e.g., with Databricks. The *Child pipeline* in this example is a placeholder. 

#### Use Azure SQL for logging (optional)

In the scenario depicted, the ADF pipeline executes a stored procedure to log various details of the pipeline run into an Azure SQL table. 

### Procedure

1. Define an SAP extraction and set the destination to Azure Storage.<br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-exraction-destination.png){:class="img-responsive"}<br>
In this example *xtractstorage* is the storage account and the container is called *ke-container*:<br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-01.png){:class="img-responsive" width="400px"}<br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-02.png){:class="img-responsive" width="400px"}

2. Define two pipelines in ADF: 
- a master pipeline, here: *ProcessBlogStorageFile* 
- a child pipeline, here: *ProcessWithDataBricks* 
The *Master pipeline* contains two activities:<br>
![ADF_Pipeline](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-overview.png){:class="img-responsive"}<br>
The first activity *sp_pipelinelog* executes an SQL stored procedure to write a log entry to an Azure SQL table. The second activity runs a dummy subpipeline. As both activities are out of the scope of this article, there are no further details. 

3. Define the following parameters: 
- fileName: contains the file Name in the Azure Storage.
- folderPath: contains the file path in the Azure Storage. 

4. Click **[New/Edit]** to add a new Storage Event Trigger in the ADF Pipeline.
![ADF_Pipeline_Trigger00](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-trigger-edit.png){:class="img-responsive"}
![ADD_ADF_Pipeline_Trigger](/img/contents/xu/xu-adf-storage-trigger/new_adf-pipeline-trigger.png){:class="img-responsive" width="600px"}
5. Adjust the details and use the Storage account name and Container name defined in the Xtract Universal Azure Storage destination:<br> 
![ADF_Pipeline_Trigger01](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-01.png){:class="img-responsive" width="600px"}
![ADF_Pipeline_Trigger02](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-02.png){:class="img-responsive" width="600px"}
![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-03.png){:class="img-responsive" width="600px"}

6. Adjust the event trigger parameters that are used as input parameters for the *Master Pipeline*:<br>
- @triggerBody().fileName <br>
- @triggerBody().folderPath <br>
![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-04.png){:class="img-responsive" width="600px"}

7. Publish the pipeline.
8. Run the SAP Extraction in Xtract Universal.
9. When the extraction is finished, check the Azure Storage.
![Azure_Storage_Parquet](/img/contents/xu/xu-adf-storage-trigger/azure-storage-parquet-file.png){:class="img-responsive"} 
10. Check the log table in Azure SQL. The log table shows an entry each for the master and child pipeline.
![SQL_log](/img/contents/xu/xu-adf-storage-trigger/sql-run-log.png){:class="img-responsive"} 
11. Check Trigger and Pipeline Runs in ADF.
![ADF_Trigger_Run](/img/contents/xu/xu-adf-storage-trigger/adf-trigger-run.png){:class="img-responsive"} 
![ADF_Pipeline_Run](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-run.png){:class="img-responsive"} 


### JSON templates

- <a href="/files/xu/BlobEventsTrigger01.json">Download Trigger  as json</a> <br>
- <a href="/files/xu/ProcessBlobStorageFile.json">Download MASTER pipeline as json</a>

