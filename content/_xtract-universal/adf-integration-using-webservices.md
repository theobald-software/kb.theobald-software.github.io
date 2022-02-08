---
layout: page
title: Integration in Azure Data Factory using Webservices
description: automation-of-xu-data-extracts-with-adf-Part 2
permalink: /:collection/:path
weight: 51
---


### About
This article describes how Azure Data Factory can be used to trigger and automate SAP data movements using [Xtract Universal's](https://theobald-software.com/en/xtract-universal/) webservices. <br>
Target audience: Customers who utilize Azure Data Factory (ADF) as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The following is a suggestion of how a possible orchestration of Xtract Universal extractions from ADF could look like. It describes the basic principles for doing so. It is no best practice document or recommendation.

### Prerequisites

- You are familiar with Xtract Universal and have created a number of extractions. Read the [Getting Started with Xtract Univeral](https://help.theobald-software.com/en/xtract-universal/getting-started) help pages if required.
- You have assigned a [push-destination](https://help.theobald-software.com/en/xtract-universal/destinations#pull-and-push-destinations) like Azure Blob Storage or Azure SQL Server, to the extractions.<br> 
- You can successfully execute the extraction from a web browser, as described [here](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction#url-and-command-line-3).
- You have set up a [self-hosted Integration runtime](https://docs.microsoft.com/EN-US/azure/data-factory/create-self-hosted-integration-runtime#create-a-self-hosted-ir-via-azure-data-factory-ui) on the server Xtract Universal runs on. This ensures that Xtract Universal's web server is accessible from ADF over http(s).   
- You have access to Azure Data Factory and are familiar with the basic principles of how to build an ADF pipeline.

### Some basic principles this scenario builds upon

- Xtract Universal offers a Web-API through which various actions can be performed via http(s) calls:
	- Xtract Universal extractions can be triggered via http(s), see [Call via Webservice](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice).
	- The status of an extraction can be queried using the extraction's name and timestamp, see [Querying the extraction status ](https://help.theobald-software.com/en/xtract-universal/logging/logging-access-via-http#querying-the-extraction-status).
	- The extraction's log can be requested, see [HTTP Log Parameter ](https://help.theobald-software.com/en/xtract-universal/logging/logging-access-via-http#http-log-parameter).
	- XU extractions can be triggered with an asynchronous mode, see [Options for Calling Extractions](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice#options-for-calling-extractions): An http response containing the extraction's timestamp is immediately returned to the caller (ADF pipeline). The extraction keeps on running on the XU side.
	- A list of XU extractions writing to a specific destination can be requested, see [List of extractions with a specific destination type ](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http-json#list-of-extractions-with-a-specific-destination-type) .
- Microsoft's self-hosted Integration runtime enables access to on-prem resources, such as Xtract Universal, from ADF.
- Microsft's ADF offers a *Web Activity* that allows calling resources (here: XU extraction) via http(s) via a self-hosted Integration runtime.

### General overview

The scenario consist of two ADF pipelines, *Child pipeline* and *Master pipeline*: <br>
#### Child pipeline
The *Child pipeline* runs an extraction (1) and polls the extraction status in regular intervals (2). In case the extraction status indicates that the extraction failed the extraction's log file is written to an Azure Blob Storage account (3). A follow up event, like sending a notification email, could then be triggered by this *Storage event*.<br>
The actual data extraction from SAP is done in this pipeline. The pipeline functions by itself, it can be run in debug mode or can be triggered via a schedule. <br>

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline_Check_Status.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline_write_Log.png)

#### Master pipeline
The purpose of the second pipeline, the *Master pipeline*, is to call the child pipeline multiple times, each time for a different extraction. This allows automatic iteration through all extractions defined in Xtract Universal. For this purpose, the Master pipeline queries a list of all XU extractions (1) and then loops over that list (2). In each loop the name of the current extraction is passed on to the Child pipeline and the Child pipeline is executed for that extraction.

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Master_pipeline.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Master_pipeline_ForEachLoop.png)

#### Variables and parameters

Parameters and variables are used in both pipelines:
- Parameters provide a constant value that is being used in various activities, so that we don't have to type in the same values again and again.
- Variables take on dynamic values at runtime and are used to pass on data between different activities or pipelines.


The following parameters and variables were created:

| Parameter/Variable | Name                         | Data Type | Defined in      | Description                                                                                                                                                                                      |
|--------------------|------------------------------|-----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter          | p_global_XU_HOST             | String    | global          | This parameter contains the base URL of the Xtract Universal webserver, here: `https://MyOnPremXuServer.theobald.local:8165`. The parameter is used in every Web Activity.                       |
| Variable           | v_XU_extractions_array       | Array     | Master pipeline | This variable stores the list of XU extractions returned by *Web* activity *Get_List_of_XU_extractions*. The variable's value is set in the *Set variable* activity *Set variable_extraction array*. |
| Parameter          | p_extractionName_from_Master | String    | Child pipeline  | This parameter takes on the value (extraction name) of the current iteration *For Each* activity *ForEach extraction in v_extraction array. As a default name, you assign a name of an extraction. This allows running the Child pipeline w/o being triggered from the Master pipeline.                                                         |
| Variable           | v_TIMESTAMP                  | String    | Child pipeline  | This variable stores the extraction's timestamp returned by *Web* activity *XU_START_JOB*. The variable’s value is set in the *Set variable* activity *TIMESTAMP*. The variable is later used in *Web* activities *CHECK_XU_JOB_STATUS* and *XU_Get_Extraction_Log*.         |
| Variable           | v_JOB_STATUS                 | String    | Child pipeline  | This variable stores the extraction's run status returned by *Web* activity*CHECK_XU_JOB_STATUS*. The variable’s value is set in the *Set variable* activity *JOB_STATUS*. As long as the variable has the status "Running", the *Until* activity *IS_JOB_RUNNING* is executed. Other values this variable can can have are "FinishedNoErrors" and "FinishedErrors".                                                                                                                                                                                                   |
| Variable           | v_Log                        | String    | Child pipeline  |This variable stores the extraction's log returned by *Web* activity*XU_Get_Extraction_Log*. The variable’s value is set in the *Set variable* activity *Set_variable_XU_Log*. The value of this variable is appended to the log file in the *Copy data* activity *Copy Extraction Log to Blob*.                                                                                                                                                                                                  |




### JSON templates

<a href="/files/xu/CHILD_pipeline_Execute_single_XU_extraction.json">Download CHILD pipeline as json</a> <br>
<a href="/files/xu/MASTER_pipeline_Loop_over_XU_extractions.json">Download MASTER pipeline as json</a>









