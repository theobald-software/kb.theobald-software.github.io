---
layout: page
title: Runs an ADF pipeline when an SAP extraction file is successfully uploaded to Azure storage
description: 
Runs an ADF pipeline when extraction file is successfully uploaded to Azure storage
permalink: /:collection/:path
weight: 52
---


### About

This article describes how to run an event-driven pipeline in Azure Data Factory to process SAP data extracted with [Xtract Universal](https://theobald-software.com/en/xtract-universal/) into an Azure Storage. </br>

Xtract Universal as a universal SAP extraction platform is used in this example to extract SAP customer master data as a parquet file into an Azure Storage. <br> 
This event would then trigger an ADF pipeline to process the SAP parquet file, e.g. with [Databricks](https://docs.microsoft.com/en-us/azure/databricks/scenarios/what-is-azure-databricks).
Xtract Universal supports different file formats for Azure storage, in our example we are using [Apache Parquet](https://docs.microsoft.com/en-us/azure/databricks/data/data-sources/read-parquet), which is a columnar file format that provides optimizations to speed up queries and is a far more efficient file format than CSV or JSON.

Target audience: Customers who utilize Azure Data Factory (ADF) as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The following is a suggestion of how a possible trigger of an ADF pipeline could look like. It describes the basic principles for doing so. It is no best practice document or recommendation.

### Prerequisites and assumptions

- You are familiar with Xtract Universal and have created a number of extractions. Read the [Getting Started with Xtract Univeral](https://help.theobald-software.com/en/xtract-universal/getting-started) help pages if required.
- You are familiar with [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-introduction)
- You can successfully execute the extraction from a web browser, as described [here](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction#url-and-command-line-3).
- You have assigned a [Azure Storage Destination](https://help.theobald-software.com/en/xtract-universal/destinations/azure-storage) to the extractions.<br> 
- You have access to [Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/) and are familiar with the basic principles of how to build an ADF pipeline.
- You are familiar with ADF pipeline triggers, especially [triggering a pipeline in response to a storage event](https://docs.microsoft.com/en-us/azure/data-factory/how-to-create-event-trigger?tabs=data-factory). 


### General overview

#### Azure Storage 
Xtract Universal extracts SAP data and load it as a parquet file into an Azure Storage. An Azure Storage event trigger is used to run an ADF pipeline for further processing of the SAP file. 

#### ADF pipelines and Storage event triggers
The *Master pipeline* should be triggered by an Azure Storage event and e.g. call a child pipeline for further processing. The *Master pipeline" has an event trigger based on Azure Datalake storage. 

The Master pipeline has 2 activities:
	- write a log to an Azure SQL database. This step is optional.
	- It calls a *Child pipeline* to process the parquet file with Databricks.

We would focus on the *Master pipeline* in this article. 

The *Child pipeline* should process the parquet file with Databricks. As this *child pipeline* is used just as a placeholder for a pipeline to process the data, we would not go here further into the details. 

#### Use Azure SQL for logging (optional)
In our scenario we are logging the ADF pipeline runs into an Azue SQL table using a stored procedure. 

### Step 1: Define the SAP extraction in Xtract Universal

Define an SAP extraction and set the destination to Azure Storage.</br>
![XU_Extraction](/img/contents/xu/xu-adf-storage-trigger/xu-extraction-azure-destination.png)

![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-exraction-destination.png)

We will use the storage account *xtractstorage*</br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-01.png)

and a container called *ke-container*:</br>
![XU_Extraction_AzureDest1](/img/contents/xu/xu-adf-storage-trigger/xu-azure-destination-02.png)

### Step 2: Define the ADF pipelines 

In ADF we have defined two pipelines: 
- a master pipeline called *ProcessBlogStorageFile* and 
- a child pipeline called *ProcessWithDataBricks* 

The *Master pipeline* contains two activities.</br>
![ADF_Pipeline](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-overview.png)

The first activity *sp_pipelinelog* executes an SQL stored procedure to write a log entry to an Azure SQL table. The second activity runs a dummy subpipeline. As both activities are out of the scope of this article, we would not go here further into the details. 

The following parameters are also defined: 
- fileName: contains the file Name in the Azure Storage.
- folderPath: contains the file path in the Azure Storage. 

### Step 3: Define the Storage event trigger in the ADF pipeline

Define the trigger as following: 
![ADF_Pipeline_Trigger00](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-trigger-edit.png)

Be sure to use the right Storage account name and Container name as defined in the Xtract Universal Azure Storage destination:</br> 
![ADF_Pipeline_Trigger01](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-01.png)


![ADF_Pipeline_Trigger02](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-02.png)

![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-03.png)

The event trigger provides those two parameters 
- @triggerBody().fileName and 
- @triggerBody().folderPath 
that are used as input parameters for the *Master Pipeline*.
</br>
![ADF_Pipeline_Trigger03](/img/contents/xu/xu-adf-storage-trigger/xu-pipeline-trigger-04.png)

Be sure to publish the pipeline.

### Step 4: Run the SAP extraction in Xtract Universal

Run the extraction in Xtract Universal, e.g. using the Run dialog.</br>
![Run_Extraction](/img/contents/xu/xu-adf-storage-trigger/xu-extraction-successful.png) 

### Step 5: Check the Azure Blob storage 
When the extraction is successfull, check the Azure Storage.</br> 
![Azure_Storage_Parquet](/img/contents/xu/xu-adf-storage-trigger/azure-storage-parquet-file.png ) 


### Step 6: Check the log table in Azure SQL 
The log table shows an entry each for the master and child pipeline.</br>
![SQL_log](/img/contents/xu/xu-adf-storage-trigger/sql-run-log.png) 


### Step 7: Check Trigger and Pipeline Runs in ADF 
In ADF you can also check the trigger run: </br>
![ADF_Trigger_Run](/img/contents/xu/xu-adf-storage-trigger/adf-trigger-run.png) 


and the pipeline run. </br>
![ADF_Pipeline_Run](/img/contents/xu/xu-adf-storage-trigger/adf-pipeline-run.png) 


### Download JSON templates
Here you can download the code of the master pipeline and the trigger in json format. 
<a href="/files/xu/BlobEventsTrigger01.json">Download Trigger  as json</a> <br>
<a href="/files/xu/ProcessBlobStorageFile.json">Download MASTER pipeline as json</a>









