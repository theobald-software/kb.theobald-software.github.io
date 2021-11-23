---
layout: page
title: Run an ADF pipeline when an SAP extraction file is successfully uploaded to Azure storage
description: Runs an ADF pipeline when extraction file is successfully uploaded to Azure storage
permalink: /:collection/:path
redirect_from:
  - xtract-universal/runs-an-ADF-pipeline-when-sap-extraction-file-is-successfully-uploaded-to-Azure-storage.md
  - xtract-universal/running-an-ADF-pipeline-when-sap-extraction-file-is-uploaded-to-Azure-storage.md
weight: 52
---


### About

This article shows how to run an event-driven pipeline in Azure Data Factory to process SAP data extracted with [Xtract Universal](https://theobald-software.com/en/xtract-universal/) into an Azure Storage. <br>

Xtract Universal is a universal SAP extraction platform that is used in this example to extract and upload SAP customer master data to Azure Storage. <br> 
An event then triggers an ADF pipeline to process the SAP parquet file, e.g. with [Databricks](https://docs.microsoft.com/en-us/azure/databricks/scenarios/what-is-azure-databricks).
Xtract Universal supports different file formats for Azure storage, this example uses [Apache Parquet](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/read-parquet), which is a column file format that provides optimizations to speed up queries and is more efficient than CSV or JSON.

Target audience: Customers who utilize Azure Data Factory (ADF) as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The following sections describe the basic principles for triggering an ADF pipeline.
Keep in mind that this is no best practice document or recommendation.

### Prerequisites and Assumptions

- You are familiar with Xtract Universal and have created a number of extractions, see [Getting Started with Xtract Univeral](https://help.theobald-software.com/en/xtract-universal/getting-started).
- You are familiar with [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction).
- You can successfully execute extractions from a web browser, see [Running an Extraction: URL and command-line](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction#url-and-command-line-3).
- You have assigned an [Azure Storage Destination](https://help.theobald-software.com/en/xtract-universal/destinations/azure-storage) to extractions.<br> 
- You have access to [Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/) and are familiar with the basic principles of how to build an ADF pipeline.
- You are familiar with ADF pipeline triggers, especially [triggering a pipeline in response to a storage event](https://docs.microsoft.com/en-us/azure/data-factory/how-to-create-event-trigger?tabs=data-factory). 


### General overview

#### Azure Storage 
Xtract Universal extracts SAP data and loads it into an Azure Storage as a parquet file. An Azure Storage event trigger is used to run an ADF pipeline for further processing of the SAP file. 

#### ADF Pipelines and Storage Event Triggers
The *Master pipeline* is triggered by an Azure Storage event and calls a child pipeline for further processing. The *Master pipeline* has an event trigger based on Azure storage. 

The Master pipeline has 2 activities:
	- write a log to an Azure SQL database. This step is optional.
	- call a *Child pipeline* to process the parquet file with Databricks.

This article focuses on the *Master pipeline*. 

The *Child pipeline* processes the parquet file e.g., with Databricks. The *Child pipeline* in this example is a placeholder. 

#### Use Azure SQL for logging (optional)
In our scenario the ADF pipeline has an activity that runs a stored procedure to log some entries about the pipeline run into an Azue SQL table. 

### Step 1: Define the SAP Extraction in Xtract Universal

Define an SAP extraction and set the destination to Azure Storage.<br>
![XU_Extraction](/img/contents/xu/xu-adf-storage-trigger/xu-extraction-azure-destination.png)

![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-exraction-destination.png)

In this example we use the storage account *xtractstorage* and a container called *ke-container*:<br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-01.png)

![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-02.png)

### Step 2: Define the ADF pipelines 

Define 2 pipelines in ADF: 
- a master pipeline called *ProcessBlogStorageFile* and 
- a child pipeline called *ProcessWithDataBricks* 

The *Master pipeline* contains two activities:<br>
![ADF_Pipeline](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-overview.png)

The first activity *sp_pipelinelog* executes an SQL stored procedure to write a log entry to an Azure SQL table. The second activity runs a dummy subpipeline. As both activities are out of the scope of this article, there are no further details. 

Define the following parameters: 
- fileName: contains the file Name in the Azure Storage.
- folderPath: contains the file path in the Azure Storage. 

### Step 3: Define the Storage Event Trigger in the ADF Pipeline

Define the trigger as followed: 
![ADF_Pipeline_Trigger00](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-trigger-edit.png)

Use the Storage account name and Container name defined in the Xtract Universal Azure Storage destination:<br> 
![ADF_Pipeline_Trigger01](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-01.png)


![ADF_Pipeline_Trigger02](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-02.png)

![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-03.png)

The event trigger provides the following parameters:
- @triggerBody().fileName and 
- @triggerBody().folderPath 

They are used as input parameters for the *Master Pipeline*.<br>
![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-04.png)

Publish the pipeline.

### Step 4: Run the SAP Extraction in Xtract Universal

Run the extraction in Xtract Universal e.g. using the Run dialog.<br>
![Run_Extraction](/img/contents/xu/xu-adf-storage-trigger/xu-extraction-successful.png) 

### Step 5: Check the Azure Blob storage 
When the extraction is finished, check the Azure Storage.<br> 
![Azure_Storage_Parquet](/img/contents/xu/xu-adf-storage-trigger/azure-storage-parquet-file.png ) 


### Step 6: Check the log table in Azure SQL 
The log table shows an entry each for the master and child pipeline.<br>
![SQL_log](/img/contents/xu/xu-adf-storage-trigger/sql-run-log.png) 


### Step 7: Check Trigger and Pipeline Runs in ADF 
In ADF you can also check the trigger and pipeline run: <br>
![ADF_Trigger_Run](/img/contents/xu/xu-adf-storage-trigger/adf-trigger-run.png) 

![ADF_Pipeline_Run](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-run.png) 


### Download JSON templates
Here you can download the code of the master pipeline and the trigger in json format: <br>
<a href="/files/xu/BlobEventsTrigger01.json">Download Trigger  as json</a> <br>
<a href="/files/xu/ProcessBlobStorageFile.json">Download MASTER pipeline as json</a>

