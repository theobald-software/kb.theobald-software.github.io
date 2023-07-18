---
layout: page
title: Using a self-hosted IR with Xtract IS for Azure
description: Azure SSIS-IR supports self-hosted IR for 3rd party components
permalink: /:collection/:path
weight: 25
---


## Motivation
When running SSIS packages on an Azure SSIS-Integration Runtime (IR), it is very likely that you are using Connection Managers that connect to on-premises data sources or targets. For example, with Xtract IS for Azure this could be an SAP system hosted on-premises in your company network.

To overcome the challenge of connecting to on-premises resources from a cloud environment, SSIS-IR offers two different solutions.

1. Configure a VPN tunnel (VNet) from Azure to your on-premises resource [Join an Azure-SSIS integration runtime to a virtual network](https://docs.microsoft.com/en-us/azure/data-factory/join-azure-ssis-integration-runtime-virtual-network)
2. Set up a self-hosted IR to act as a proxy for your Azure SSIS-IR. [Configure a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis)

Xtract IS for Azure supports both options. Actually, it supports those options pretty much out of the box. So, that's good news for you. The second option requires XIS for Azure version 6.5.10 or higher.

## Goal
The following article describes how to enable usage of Xtract IS for Azure with a self-hosted IR. This article is a supplement to Microsoft's documentation on How to [Enable custom/3rd party components](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#enable-custom3rd-party-components) for usage with a self-hosted IR. 

## Let's get started
Read the Microsoft documentation about [configuring a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis) and implement the steps mentioned therein. That's the major part of the work you need to do. And you would need to do this, irrespective of whether you use Xtract IS for Azure or not.
 
Step 1. [Prepare the self-hosted IR](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#prepare-the-self-hosted-ir) <br>
Step 2. [Prepare the Azure Blob Storage linked service for staging](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#prepare-the-azure-blob-storage-linked-service-for-staging) <br>
Step 3. [Configure an Azure-SSIS IR with your self-hosted IR as a proxy](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#configure-an-azure-ssis-ir-with-your-self-hosted-ir-as-a-proxy) <br>
Step 4. [Enable SSIS packages to connect by proxy](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#enable-ssis-packages-to-connect-by-proxy) <br>

In the beginning, I was a bit confused about **Step 1**. I need a Windows server that has access to my on-prem SAP system, that much is understood. But, what software, other than the [Integration Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=39717) needs to be installed on that Windows server? A SQL Server? SSIS? VS/SSDT? The answer is: None of that. Just the Integration Runtime and, obviously, Xtract IS for Azure...but we'll come to later.

I performed **Step 2** and **Step 3** following above mentioned Microsoft documentation. The outcome looks something like this in the Azure portal.
 
![Configure_SSIS-IR_for_SHIR](/img/contents/XISforAzure_SHIR_1.png){:class="img-responsive"}

**Step 4** requires you to set the *ConnectByProxy* property in the XTRACT connection manager to *true*.

{: .box-note }
**Note:** The *ConnectByProxy* property doesn't show in older releases of SSDT. If that's the case, please update.
 

![ConnectByProxy](/img/contents/XISforAzure_SHIR_proxy.png){:class="img-responsive"}


## Installing Xtract IS for Azure
Now, continuing where we left off with **Step 1**, we need to install Xtract IS for Azure on our self-hosted IR. 

Remember when I said, you just need a plain vanilla Windows server, w/o SSIS, SQL Server or SSDT pre-installed? Well, this still holds true..although, if you want, you *can* have these tools installed. But, let's pretend they are not.

The Xtract IS for Azure setup routine expects certain SSIS/DTS folders to be in place on the server, because that is where the Xtract DLLs are placed during setup. These SSIS/DTS folders usually come with an installation of SSIS/SSDT.

*Question*: But what happens, when no SSIS/DTS folders are available on that server?

*Answer*: Well, we need to pretend, they are. 

*Question*: And how do we do that?

*Answer*: Enter *Regedit* or the *Registry Editor*. This tool allows entering Registry Keys which make Xtract IS for Azure believe, SSIS/DTS is installed on the server. This is what the Microsoft documentation describes in the chapter [Enable custom/3rd party components](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#enable-custom3rd-party-components).

>Create the following DTSPath registry keys on self-hosted IR if they don’t exist already: Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server\140\SSIS\Setup\DTSPath and Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Microsoft SQL Server\140\SSIS\Setup\DTSPath.

I shall add, that the DTSPath key needs to have assigned these values:
```C:\Program Files\Microsoft SQL Server\140\DTS\``` and ```C:\Program Files (x86)\Microsoft SQL Server\140\DTS\``` 


![Regedit](/img/contents/XISforAzure_SHIR_regedit.png){:class="img-responsive"}

After you have entered these registry keys, you can install Xtract IS for Azure.

{: .box-note }
**Note:** As the SSIS packages are executed on the self-hosted IR (SHIR), *not* on the Azure SSIS-IR, after installation of Xtract IS you need to run the *XtractLicenseManager.exe* to install the Xtract IS license on the SHIR.


## Deploy and run SSIS packages
If you (correctly) performed all the steps mentioned above, you can then deploy your SSIS packages to the Azure SSIS-IR. Even if your XTRACT connection manager points to an on-premises SAP system connection to that system will be established from the SSIS-IR. Make sure your Azure SSIS-IR *and* Self-Hosted IR are both running.

![Azure_IRs](/img/contents/XISforAzure_SHIR_2.png){:class="img-responsive"}

The SSIS reports can be found on your local self-hosted IR in the following folders...just in case Theobald Software tech. support is asking for it.

![Logs](/img/contents/XISforAzure_SHIR_log.png){:class="img-responsive"}




