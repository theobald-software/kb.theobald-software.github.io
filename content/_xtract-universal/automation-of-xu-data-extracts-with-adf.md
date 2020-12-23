---
layout: page
title: Automation of XU data extracts with ADF
description: automation-of-xu-data-extracts-with-adf
permalink: /:collection/:path
weight: 50
---
Target audience: Customers who utilize Azure Data Factory as a platform orchestrating data movement and transformation. <br>

This article describes how Azure Data Factory can be used to trigger and automate SAP data movements with [Xtract Universal](https://theobald-software.com/en/xtract-universal/) from Theobald Software.

**Prerequisites and assumptions:** <br>

- Xtract Universal is installed on a cloud VM and is accessible remotely over HTTP/S
- Customer has AAzure Data Factory

### Step 1: Create your SAP data extract in XU <br>

In the XU Designer, configure your data extract with SAP connection, source object and destination. <br> In the example below, data from SAP table KNA1 is extracted and stored in an Azure blob destination. 
![XU data extracts with adf 01](/img/contents/xu/xu-data-extracts-with-adf_01.jpg){:class="img-responsive"}

### Step 2 Test your SAP data extract from a remote machine <br>

On a remote machine, i.e. a machine other than your XU server, run the SAP data extract with the xu.exe command line utility. You can copy xu.exe and xu.exe.config from the XU server to a folder on the remote machine. <br> This is to ensure that the XU server is reachable. The example below executes a data extract named “KNA1” on the IP address of the XU server on port 8065. You can configure an HTTPS connection to secure the connection.
![XU data extracts with adf 02](/img/contents/xu/xu-data-extracts-with-adf_02.jpg){:class="img-responsive"}

Make sure the extract completes successfully:
![XU data extracts with adf 03](/img/contents/xu/xu-data-extracts-with-adf_03.jpg){:class="img-responsive"}

### Step 3: Configure an Azure Batch account

The detailed steps for how to configure a batch account in the Azure portal are described [here](https://docs.microsoft.com/en-us/azure/batch/batch-account-create-portal).

**Important points:** <br>

**3.1** A **Storage account** needs to be associated with your Batch account. This can a be new storage account dedicated to batch processing, or an existing storage account. Microsoft recommends a general-purpose v2 storage account in the same region as your Batch account (for better performance).

**3.2** The **Pool allocation mode** (under **Advanced**) can be the default **Batch service** (no need to select **User subscription**).
![XU data extracts with adf 04](/img/contents/xu/xu-data-extracts-with-adf_04.jpg){:class="img-responsive"}

### Step 4: Add a Pool to your Batch account 

More Information on this topic is available [here](https://docs.microsoft.com/en-us/azure/batch/batch-custom-images).

**Important points:** <br>

**4.1** The **Pool** will provide the compute resources (VM) to execute a task, in our case we need to run the command line utility xu.exe. This is not a very resource-intensive application and depending on whether you plan to use Azure Batch for other processing, you will choose an appropriately sized resource for your needs. <br> There is an Azure cost associated with the selected Pool.

In the example, a Window Server 2019 Datacenter with small disk configuration was used.
![XU data extracts with adf 05](/img/contents/xu/xu-data-extracts-with-adf_05.jpg){:class="img-responsive"}

**4.2** When you create the **Pool**, specify the **Target dedicated nodes** as at least 1.
![XU data extracts with adf 06](/img/contents/xu/xu-data-extracts-with-adf_06.jpg){:class="img-responsive"}

### Step 5: Upload xu.exe to storage account

In the storage account that you associated with your Azure Batch account in step 3 above, create a container for the Xtract Universal command line utility.

In the example below, the container is named ‘xuexe’.
![XU data extracts with adf 07](/img/contents/xu/xu-data-extracts-with-adf_07.jpg){:class="img-responsive"}
Upload the files xu.exe and xu.exe.config from your Xtract Universal server installation to the storage account.

### Step 6: Create Linked Service to Azure Batch in ADF

In your ADF, go to **Connections** and create a new **Linked Service**. <br>
From the available Linked Services options, select the **Compute** category, then **Azure Batch**. <br>
For the new Batch Linked Service, specify the **Batch Account**, Access Key, Batch URL** and **Pool name** of the Batch account that you created in step 3. <br>
![XU data extracts with adf 08](/img/contents/xu/xu-data-extracts-with-adf_08.jpg){:class="img-responsive"} <br>

For **Storage linked service name**, created a new linked service and reference the storage account that you configured in step 3.
![XU data extracts with adf 09](/img/contents/xu/xu-data-extracts-with-adf_09.jpg){:class="img-responsive"} 

### Step 7: Create an ADF Pipeline with Custom Activity

Create a new **Pipeline** and drag the **Custom Activity** under **Batch Service** into your pipeline. <br>
On the **General** tab, provide a name for the activity (in the example below ‘KNA1’). <br>
On the **Azure Batch** tab, select the **Batch Linked Service** from step 6. <br>
On the **Settings tab, specify the xu.exe command that you want to execute. This is the same command that you tested in step 2. <br>
Also on the Settings tab, select the **Storage Linked Service** from step 6 and the container / folder  path where the xu.exe file is located. <br>

![XU data extracts with adf 10](/img/contents/xu/xu-data-extracts-with-adf_10.jpg){:class="img-responsive"} 

### Step 8: Debug your pipeline 

Click the **Debug** button to test the execution of the SAP data extract. <br>
You can review the Input and Output of the activity, including the exitcode from xu.exe (0 if successful)
![XU data extracts with adf 11](/img/contents/xu/xu-data-extracts-with-adf_11.jpg){:class="img-responsive"} 

In your storage account from step 3, you will find a folder named **adfjobs**. <br>
For every pipeline execution, there will be a subfolder with log information. <br>
The files **stderr.txt** and **stdout.txt** will contain the output from xu.exe. <br>
![XU data extracts with adf 12](/img/contents/xu/xu-data-extracts-with-adf_12.jpg){:class="img-responsive"} 








