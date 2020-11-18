---
layout: page
title: Using a self-hosted IR with Xtract IS for Azure
description: Azure SSIS-IR supports self-hosted IR for 3rd party components
permalink: /:collection/:path
weight: 25
---


##Motivation
When running SSIS packages on an Azure SSIS-Integration Runtime (IR), it is very likely that you are using Connection Managers that connect to on-premises data sources or targets. For example, with Xtract IS for Azure this could be an SAP system hosted on-premises in your company network.

To overcome the challenge of connecting to on-premises resources from a cloud environment, SSIS-IR offers two different solutions.

1. Configure a VPN tunnel (VNet) from Azure to your on-premises resource [Join an Azure-SSIS integration runtime to a virtual networt](https://docs.microsoft.com/en-us/azure/data-factory/join-azure-ssis-integration-runtime-virtual-network)
2. Set up a self-hosted IR to act as a proxy for your Azure SSIS-IR. [Configure a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis)

Xtract IS for Azure supports both options. Actually, it supports those options pretty much out of the box. So, that's good news for you.

##Goal
This article describes how to enable usage of Xtract IS for Azure with a self-hosted IR. This article is a supplement to Microsoft's documentation on How to [Enable custom/3rd party components](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#enable-custom3rd-party-components) for usage with a self-hosted IR. 

##Let's get started
Read the Microsoft documentation about [configuring a self-hosted IR as a proxy for an Azure-SSIS IR in Azure Data Factory](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis) and implement the steps mentioned therein. That's the major part of the work you need to do. And you would need to do this, irrespective of whether you use Xtract IS for Azure or not.
 
1. Prepare the self-hosted IR
2. Prepare the Azure Blob Storage linked service for staging
3. Configure an Azure-SSIS IR with your self-hosted IR as a proxy
4. Enable SSIS packages to connect by proxy

In the beginning, I was a bit confused about step 1., Prepare the self-hosted IR. I need a Windows server that has access to my on-prem SAP system, that's clear. But, what software, other than the [Integration Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=39717) needs to be installed on that machine? A SQL Server? SSIS? VS/SSDT? The answer is: None of that. Just the Integration Runtime and, obviously, Xtract IS for Azure...but we'll come to that in a bit.

I performed steps 2 and 3 following above mentioned Microsoft documentation. The outcome looks something like this in the Azure portal
 
![Configure_SSIS-IR_for_SHIR](/img/contents/XISforAzure_SHIR_1.png){:class="img-responsive"}

Step 4 requires you to set the *ConnectByProxy* property in the XTRACT connection manager to *true*. Attention: This property won't show in older releases of SSDT, if that's the case, please update.

![ConnectByProxy](/img/contents/XISforAzure_SHIR_proxy.png){:class="img-responsive"}

Now, continuing where we left off with step 1. we need to install Xtract IS for Azure on our self-hosted IR. Now, remember when I said, you just need a plain vanilla Windows server, w/o SSIS, SQL Server or SSDT pre-installed? Well, that still holds true...actually, regarding the setup of the self-hosted IR, it doesn't hurt to have these tools installed. But, let's pretend they are not.
One of the peculiarities of the Xtract IS for Azure setup is, that the installer looks for SSIS/DTS artefacts on the server, it's being installed on. Just to place the Xtract.dlls in the respective DTS folders. But what happens, when no SSIS/DTS arefacts are installed on that server? Well, we need to pretend, they are. And how do we do that? Enter *Regedit*. This tool allows entering Registry Keys which make Xtract IS for Azure believe, SSIS/DTS is installed on the server. This is what the Microsoft documentation describes [here](https://docs.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-proxy-ssis#enable-custom3rd-party-components)

>>Create the following DTSPath registry keys on self-hosted IR if they don’t exist already: Computer\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Microsoft SQL Server\140\SSIS\Setup\DTSPath and Computer\HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Microsoft SQL Server\140\SSIS\Setup\DTSPath.

I shall add, that the DTSPath key needs to be assigned these values:
*C:\Program Files\Microsoft SQL Server\140\DTS\* and *C:\Program Files (x86)\Microsoft SQL Server\140\DTS\*


![Regedit](/img/contents/XISforAzure_SHIR_regedit.png){:class="img-responsive"}


After you have entered these registry keys, you can install Xtract IS for Azure. And that's all you need to do. Xtract IS for Azure takes care of the rest.

