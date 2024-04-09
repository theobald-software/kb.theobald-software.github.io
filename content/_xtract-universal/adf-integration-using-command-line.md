---
layout: page
title: Integration in Azure Data Factory using Command Line
description: automation-of-xu-data-extracts-with-adf
permalink: /:collection/:path
weight: 75
---

The following article shows how to use Azure Data Factory (ADF) to trigger and automate SAP data movements using Xtract Universal's [command line tool](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline).
This article targets customers that utilize ADF as a platform for orchestrating data movement and transformation. <br>

### Prerequisites

- Xtract Universal is installed on a cloud VM and is accessible remotely over http(s).
- The extraction uses a [push-destination](https://help.theobald-software.com/en/xtract-universal/destinations#pull-and-push-destinations), e.g., Azure Blob Storage or Azure SQL Server.<br> 
- The extraction runs successfully when called from a remote machine via commandline, see [Execute and Automate - Call via Commandline](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline).
This ensures that the XU server is reachable. 
- Access to Azure Data Factory.
- Knowledge on how to build ADF pipelines.

### Configure an Azure Batch Account

When creating a batch account in the Azure portal, make sure to consider the following:

- A **Storage account** needs to be associated with your Batch account. 
This can a be new storage account dedicated to batch processing, or an existing storage account. Microsoft recommends a general-purpose v2 storage account in the same region as your Batch account (for better performance).
- The **Pool allocation mode** (under **Advanced**) can be the default **Batch service** (no need to select **User subscription**).<br>
![XU data extracts with adf 04](/img/contents/xu/xu-data-extracts-with-adf_04.jpg){:class="img-responsive"}

For information on how to configure a batch account in the Azure portal, see [Microsoft Documentation: Create a Batch account in the Azure portal](https://docs.microsoft.com/en-us/azure/batch/batch-account-create-portal).


### Add a Pool to the Azure Batch Account 

When creating a pool from a managed image in Azure, make sure to consider the following:

- The **Pool** provides the computing resources (VM) to execute a task, in this case running the command line tool xu.exe. 
This is not a very resource-intensive application, but if Azure Batch is used for other processing, choose an appropriately sized resource for your needs.
Note that there is an Azure cost associated with the selected Pool.<br>
The depicted example uses a Window Server 2019 Datacenter with small disk configuration.<br>
![XU data extracts with adf 05](/img/contents/xu/xu-data-extracts-with-adf_05.jpg){:class="img-responsive"}
- When creating the **Pool**, specify the **Target dedicated nodes** as at least 1.<br>
![XU data extracts with adf 06](/img/contents/xu/xu-data-extracts-with-adf_06.jpg){:class="img-responsive"}

For information on how to create a pool, see [Microsoft Documentation: Use a managed image to create a custom image pool](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images).

### Upload xu.exe to Storage Account

1. Create a container for the Xtract Universal command line tool in the storage account associated with your Azure Batch account.
In the depicted example, the container is named ‘xuexe’.<br>
![XU data extracts with adf 07](/img/contents/xu/xu-data-extracts-with-adf_07.jpg){:class="img-responsive"}
2. Upload the files xu.exe and xu.exe.config from your Xtract Universal server installation to the storage account. The files are located in `C:\Program Files\XtractUniversal`.

### Create a Linked Service to Azure Batch in ADF

In your ADF, go to **Connections** and create a new **Linked Service**. <br>
From the available Linked Services options, select the **Compute** category, then **Azure Batch**. <br>
For the new Batch Linked Service, specify the **Batch Account**, Access Key, Batch URL** and **Pool name** of the Batch account that you created in step 3. <br>
![XU data extracts with adf 08](/img/contents/xu/xu-data-extracts-with-adf_08.jpg){:class="img-responsive"} <br>

For **Storage linked service name**, created a new linked service and reference the storage account that you configured in step 3.
![XU data extracts with adf 09](/img/contents/xu/xu-data-extracts-with-adf_09.jpg){:class="img-responsive"} 

### Create an ADF Pipeline with Custom Activity

1. Create a new **Pipeline** and drag the **Custom Activity** under **Batch Service** into your pipeline. <br>
2. On the **General** tab, provide a name for the activity (in the example below ‘KNA1’). <br>
3. On the **Azure Batch** tab, select the **Batch Linked Service** from step 6. <br>
4. On the **Settings tab, specify the xu.exe command that you want to execute. This is the same command that you tested in step 2. <br>
5. Also on the Settings tab, select the **Storage Linked Service** from step 6 and the container / folder  path where the xu.exe file is located. <br>

![XU data extracts with adf 10](/img/contents/xu/xu-data-extracts-with-adf_10.jpg){:class="img-responsive"} 

Debug your pipeline

Click the **Debug** button to test the execution of the SAP data extract. <br>
You can review the Input and Output of the activity, including the exitcode from xu.exe (0 if successful)
![XU data extracts with adf 11](/img/contents/xu/xu-data-extracts-with-adf_11.jpg){:class="img-responsive"} 

In your storage account from step 3, you will find a folder named **adfjobs**. <br>
For every pipeline execution, there will be a subfolder with log information. <br>
The files **stderr.txt** and **stdout.txt** will contain the output from xu.exe. <br>
![XU data extracts with adf 12](/img/contents/xu/xu-data-extracts-with-adf_12.jpg){:class="img-responsive"} 

*****
#### Related Links
- [Calling Dynamic Extractions with Variables in ADF](./calling-dynamic-extractions-with-variables-in-adf).
- [Integration in Azure Data Factory using Webservices](adf-integration-using-webservices)