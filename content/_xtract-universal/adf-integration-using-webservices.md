---
layout: page
title: Integration in Azure Data Factory using Webservices
description: automation-of-xu-data-extracts-with-adf-Part 2
permalink: /:collection/:path
weight: 80
---


The following article shows how to use Azure Data Factory (ADF) to trigger and automate SAP data movements using Xtract Universal's [webservices](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice). <br>
This article targets customers that utilize ADF as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The depicted scenario is a suggestion of how an orchestration of Xtract Universal extractions from ADF can look like . It is no best practice or recommendation.

### Prerequisites

- The extraction uses a [push-destination](https://help.theobald-software.com/en/xtract-universal/destinations#pull-and-push-destinations), e.g., Azure Blob Storage or Azure SQL Server.<br> 
- The extraction runs successfully when called from a web browser, see [Execute and Automate - Call via Webservice](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice).
- A [self-hosted Integration runtime](https://docs.microsoft.com/EN-US/azure/data-factory/create-self-hosted-integration-runtime#create-a-self-hosted-ir-via-azure-data-factory-ui) is set up on the server Xtract Universal runs on. 
This ensures that Xtract Universal's web server is accessible from ADF over http(s).   
- Access to Azure Data Factory.
- Knowledge on how to build ADF pipelines.

### Basic Principles

The depicted scenario builds upon the following basic principles:

- Xtract Universal offers a web API through which various actions can be performed via http(s) calls. The depicted scenario uses the web API to:
	- trigger extractions, see [Web-API - Run Extractions](https://help.theobald-software.com/en/xtract-universal/web-api#run-extractions)
	- query the extraction status, see [Web-API - Get Status of an Extraction](https://help.theobald-software.com/en/xtract-universal/web-api#get-status-of-an-extraction)
	- query extraction logs, see [Web-API - Get Extraction Logs](https://help.theobald-software.com/en/xtract-universal/web-api#get-extraction-logs)
	- query a list of all extractions, see [Web-API - Get Extraction Details](https://help.theobald-software.com/en/xtract-universal/web-api#get-extraction-details)
- Microsoft's self-hosted Integration runtime enables access to on-prem resources, such as Xtract Universal, from ADF.
- Microsoft's ADF offers a *Web Activity* that allows calling resources (here: XU extraction) via http(s) via a self-hosted Integration runtime.

### ADF Pipelines

The depicted scenario consist of two ADF pipelines, *Child pipeline* and *Master pipeline*: <br>

#### Child Pipeline

The *Child pipeline* runs an extraction (1) and polls the extraction status in regular intervals (2). 
In case the extraction status indicates that the extraction failed the extraction's log file is written to an Azure Blob Storage account (3). 
A follow up event, e.g., sending a notification email, can then be triggered by this *Storage event*.

The actual data extraction from SAP is done in this pipeline. 
The pipeline functions by itself. It can be run in debug mode or can be triggered via a schedule. <br>

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline_Check_Status.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Child_pipeline_write_Log.png)

#### Master Pipeline

The purpose of the second pipeline, the *Master pipeline*, is to call the child pipeline multiple times, each time for a different extraction. 
This allows automatic iteration through all extractions defined in Xtract Universal. 
For this purpose, the Master pipeline queries a list of all XU extractions (1) and then loops over that list (2). 
In each loop the name of the current extraction is passed on to the *Child pipeline* and the *Child pipeline* is executed for that extraction.

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Master_pipeline.png)

![XU_ADF_global_parameter](/img/contents/xu/xu_ADF_2_Master_pipeline_ForEachLoop.png)

#### Variables and Parameters

Parameters and variables are used in both pipelines:
- Parameters provide constant values that are used in multiple activities. 
- Variables provide dynamic values at runtime and are used to pass on data between different activities or pipelines.

The following parameters and variables are used in the depicted scenario:

| Parameter/Variable | Name                         | Data Type | Defined in      | Description                                                                                                                                                                                      |
|--------------------|------------------------------|-----------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Parameter          | p_global_XU_HOST             | String    | global          | This parameter contains the base URL of the Xtract Universal webserver, here: `https://MyOnPremXuServer.theobald.local:8165`. The parameter is used in every Web Activity.                       |
| Variable           | v_XU_extractions_array       | Array     | Master pipeline | This variable stores the list of XU extractions returned by *Web* activity *Get_List_of_XU_extractions*. The variable's value is set in the *Set variable* activity *Set variable_extraction array*. |
| Parameter          | p_extractionName_from_Master | String    | Child pipeline  | This parameter takes on the value (extraction name) of the current iteration *For Each* activity *ForEach extraction in v_extraction array. As a default name, you assign a name of an extraction. This allows running the Child pipeline w/o being triggered from the Master pipeline.                                                         |
| Variable           | v_TIMESTAMP                  | String    | Child pipeline  | This variable stores the extraction's timestamp returned by *Web* activity *XU_START_JOB*. The variable’s value is set in the *Set variable* activity *TIMESTAMP*. The variable is later used in *Web* activities *CHECK_XU_JOB_STATUS* and *XU_Get_Extraction_Log*.         |
| Variable           | v_JOB_STATUS                 | String    | Child pipeline  | This variable stores the extraction's run status returned by *Web* activity*CHECK_XU_JOB_STATUS*. The variable’s value is set in the *Set variable* activity *JOB_STATUS*. As long as the variable has the status "Running", the *Until* activity *IS_JOB_RUNNING* is executed. Other values this variable can can have are "FinishedNoErrors" and "FinishedErrors".                                                                                                                                                                                                   |
| Variable           | v_Log                        | String    | Child pipeline  |This variable stores the extraction's log returned by *Web* activity*XU_Get_Extraction_Log*. The variable’s value is set in the *Set variable* activity *Set_variable_XU_Log*. The value of this variable is appended to the log file in the *Copy data* activity *Copy Extraction Log to Blob*.                                                                                                                                                                                                  |

For more information on variables in ADF, see [Calling Dynamic Extractions with Variables in ADF](./calling-dynamic-extractions-with-variables-in-adf).

### Download JSON Templates

- [Download CHILD pipeline as json](/files/xu/CHILD_pipeline_Execute_single_XU_extraction.json){:download="Download CHILD pipeline as json"}
- [Download MASTER pipeline as json](/files/xu/MASTER_pipeline_Loop_over_XU_extractions.json){:download="Download MASTER pipeline as json"}

*****
#### Related Links
- [Calling Dynamic Extractions with Variables in ADF](./calling-dynamic-extractions-with-variables-in-adf).
- [Integration in Azure Data Factory using Command Line](adf-integration-using-command-line)