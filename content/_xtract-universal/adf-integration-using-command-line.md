---
layout: page
title: Integration in Azure Data Factory using Commandline
description: automation-of-xu-data-extracts-with-adf
permalink: /:collection/:path
weight: 75
author: Christoph Schuler, Valerie Schipka
---

The following article describes a scenario that uses Azure Data Factory (ADF) to trigger and automate SAP data movements using Xtract Universal's [command line tool](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline).
This article targets customers that utilize ADF as a platform for orchestrating data movement and transformation. <br>

{: .box-note}
**Note:** The depicted scenario is no best practice or recommendation. 
The following is a suggestion of how an orchestration of Xtract Universal extractions from ADF can look like, see also [Integration in Azure Data Factory using Webservices](adf-integration-using-webservices).

### Prerequisites

- Xtract Universal is installed on a cloud VM and is accessible remotely over http(s).
- The extraction uses a [push-destination](https://help.theobald-software.com/en/xtract-universal/destinations#pull-and-push-destinations), e.g., Azure Blob Storage or Azure SQL Server.<br> 
- The extraction runs successfully when called from a remote machine via commandline, see [Execute and Automate - Call via Commandline](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline).
This ensures that the XU server is reachable. 
- Access to the Azure portal and Azure Data Factory.
- Knowledge on how to build ADF pipelines.

### Configure an Azure Batch Account

When creating a batch account in the Azure portal, make sure to consider the following:

- A **Storage account** needs to be associated with your Batch account. 
This can a be new storage account dedicated to batch processing, or an existing storage account. Microsoft recommends a general-purpose v2 storage account in the same region as your Batch account (for better performance).
- The **Pool allocation mode** under **Advanced** can be the default **Batch service** (no need to select **User subscription**).<br>
![XU data extracts with adf 04](/img/contents/xu/xu-data-extracts-with-adf_04.jpg){:class="img-responsive"}

For information on how to configure a batch account in the Azure portal, see [Microsoft Documentation: Create a Batch account in the Azure portal](https://docs.microsoft.com/en-us/azure/batch/batch-account-create-portal).


### Add a Pool to the Azure Batch Account 

The pool provides the computing resources (VM) to execute a task, in this case running the commandline tool xu.exe. 
When creating a pool from a managed image in the Azure portal, make sure to consider the following:

- The commandline tool xu.exe is not a very resource-intensive application, but if Azure Batch is used for other processing, choose an appropriately sized resource for your needs.
Note that there is an Azure cost associated with the selected Pool.<br>
The depicted example uses a Window Server 2019 Datacenter with small disk configuration.<br>
![XU data extracts with adf 05](/img/contents/xu/xu-data-extracts-with-adf_05.jpg){:class="img-responsive"}
- When creating the pool, set the **Scale** property **Target dedicated nodes** to at least 1.

For information on how to create a pool, see [Microsoft Documentation: Use a managed image to create a custom image pool](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images).

### Upload xu.exe to Storage Account

Follow the steps below to make the command line tool xu.exe available in Azure:

1. Create a container for the Xtract Universal commandline tool in the Azure storage account associated with the Azure Batch account.
In the depicted example, the container is named ‘xuexe’.<br>
![XU data extracts with adf 07](/img/contents/xu/xu-data-extracts-with-adf_07.jpg){:class="img-responsive"}
2. Upload the files xu.exe and xu.exe.config from the Xtract Universal server installation to the Azure storage account. The files are located in `C:\Program Files\XtractUniversal`.

{: .box-note }
**Note:** Do not confuse the xu.exe.config file with the xu.config file.

### Create a Linked Service to Azure Batch in ADF

Follow the steps below to create a *Batch Linked Service* and a *Storage Linked Service* in Azure Data Factory:

1. In ADF, navigate to **Manage > Connections > Linked Services** and click **[New]** (1). The menu "New linked service" opens. <br>
![azure-data-factory-linked-service](/img/contents/xu/azure-data-factory-linked-service.png)
2. In the tab *Compute* category, select **Azure Batch** (2) and click **[Continue]** (3).
3. Specify the **Batch Account**, **Access Key**, **Batch URL** and **Pool name** of the batch account. The data is available in the key settings of the batch account.<br>
![XU data extracts with adf 08](/img/contents/xu/xu-data-extracts-with-adf_08.jpg){:class="img-responsive"}
4. In **Storage linked service name**, select *New* to create a new linked service that references the storage account that contains the xu.exe file in the linked service. <br>
![XU data extracts with adf 09](/img/contents/xu/xu-data-extracts-with-adf_09.jpg){:class="img-responsive"} 

### Create an ADF Pipeline with Custom Activity

Follow the steps below to create a pipeline that runs extractions:

1. Create a new **Pipeline** in ADF.
2. Drag the **Custom Activity** under *Batch Service* into your pipeline.  <br>
![azure-data-factory-pipeline-general](/img/contents/xu/azure-data-factory-pipeline-general.png){:class="img-responsive"} 
3. In the *General* tab, provide a name for the activity, e.g., ‘KNA1’ (1).
4. In the *Azure Batch* tab, reference the *Batch Linked Service* from [Create a Linked Service to Azure Batch in ADF](#create-a-linked-service-to-azure-batch-in-adf). <br>
5. In the *Settings* tab, specify the xu.exe command that you want to execute (2), e.g., `xu.exe [protocol]://[host or IP address]:[port]/?name=[name of the extraction]` to run an extraction.
![azure-data-factory-pipeline-settings](/img/contents/xu/azure-data-factory-pipeline-settings.png){:class="img-responsive"} 
6. Reference the *Storage Linked Service* from [Create a Linked Service to Azure Batch in ADF](#create-a-linked-service-to-azure-batch-in-adf) in the **Advanced Settings** (3).
7. Specify the container / folder  path where the xu.exe file is located in the Azure storage account (4).
8. Click **[Debug]** to testrun the SAP data extraction.

When the activity is finished, review the output of the activity in the *Output* tab.
If the exitcode from xu.exe is 0, the data extraction was successful and the following folders / files are available in the Azure storage account:<br>
- the storage account contains a folder **adfjobs**.<br>
- for every pipeline execution, there is a subfolder with log information.<br>
- the files **stderr.txt** and **stdout.txt** contain the output from xu.exe.<br>
![XU data extracts with adf 12](/img/contents/xu/xu-data-extracts-with-adf_12.jpg){:class="img-responsive"} 

*****
#### Related Links
- [Calling Dynamic Extractions with Variables in ADF](./calling-dynamic-extractions-with-variables-in-adf).
- [Integration in Azure Data Factory using Webservices](adf-integration-using-webservices)