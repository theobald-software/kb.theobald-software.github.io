---
layout: page
title: Integrating a yunIO Service with Nintex
description: Integrating a yunIO Service with Nintex
permalink: /:collection/:path
weight: 4
progressstate: 5
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for yunIO.<br>
Make sure to use the samples within the new [HelpCenter for yunIO](https://helpcenter.theobald-software.com/yunio/knowledge-base).


The following article shows how to integrate a yunIO service with Nintex Automation Cloud.

The Nintex Automation Cloud is a cloud-based process automation service provided by Nintex. 
The platform can be used to create automated workflows between different cloud apps and services that synchronize and collect data, generates documents and more. 
For more Information on Nintex, see [Nintex Official Website](https://www.nintex.com/).


### Creating a Service in yunIO

1. Create a service in yunIO. For this example we use the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
The service has the following settings:<br>
- Set the Import Parameter NAME1 to *Supplied by Caller*.
- Select all fields in the Table *CUSTOMER_T* for the output.
2. Click ![run](/img/contents/yunio/run-icon.png) to testrun the service in yunIO (1). For more information, see [Online Help: Testing a Service](https://help.theobald-software.com/en/yunio/run-services#testing-a-service).
3. Click ![download-file](/img/contents/yunio/download.png) to download the service definition (2).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

### Configuring a yunIO Xtension in Nintex

{: .box-note }
**Note:** When integrating services from a local yunIO installation with Nintex Automation Cloud, we recommend using the [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm) to tunnel the connection.
For more information on how to set up the Nintex Gateway with yunIO, see [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm).

1. Open your Nintex Automation Cloud tenancy.
2. Click **Xtensions** (1) in the dashboard to open the Xtensions page.
3. Click ![nintex-add](/img/contents/yunio/nintex-add.png) (2) in the Private connector list.
4. Click **[Choose a file]** (3). Navigate to the yunIO service definition from [Creating a Service in yunIO](#creating-a-service-in-yunio).<br>
![nintex-xtensions1](/img/contents/yunio/nintex-xtension.png){:class="img-responsive"}
5. Wait for the Nintex Automation Cloud to validate the file.
6. Click **[Next]**. Nintex Workflow Cloud detects the basic authentication security template.
7. Click **[Next]**.
8. Edit the **Name** of the Xtension. The entered name becomes the name of the action group in the workflow.
9. Edit the **Description** of the Xtension. This appears in the Private connector list in the Xtensions page.
10. Optional: select or upload an icon for the Xtension.
11. Click **[Publish]** (4).<br>
![nintex-xtensions2](/img/contents/yunio/nintex-xtension2.png){:class="img-responsive"}

### Using the yunIO Xtension in a Nintex workflow
After an Xtension is created, it can be used in a workflow. 

- Drag&Drop the yunIO Xtension from [Configuring a yunIO Xtension in Nintex](#configuring-a-yunio-xtension-in-nintex) into the workflow (5).
- Parameterize the input fields (6). <br>
![nintex-xtensions3](/img/contents/yunio/nintex-xtension3.png){:class="img-responsive"}


******

#### Related Links
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)
- [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm)
- [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm)