---
layout: page
title: Executing SSIS packages between cloud data stores and a private network data storage.
description: Running copy activity between a cloud data stores and a data store in private network
permalink: /:collection/:path
weight: 16
---

The following article describes the secure data integration approach and the necessary steps to execute SSIS packages that access an SAP source (Xtract Connection) located in a private network (domain).

To perform data integration securely in a private network environment without a direct line-of-sight from the public cloud environment, you can install a self-hosted IR in your on-premises environment behind a firewall, or inside a virtual private network. 
The self-hosted integration runtime only makes outbound HTTP-based connections to the internet. 
The Xtract Connection (SAP connection) with the property *ConnectByProxy = True* is used to implement access to the local network using the Self-Hosted Integration Runtime (SHIR).

### Prerequisites

The SSIS package was created in advance on a development environment (Visual Studio) and the execution was tested successfully. Subsequently, the SSIS project was published to an SSIS in ADF.
The following prerequisites are mostly based on the official Microsoft documentation for using Azure integration runtime (IR) as well as Self-Hosted Integration Runtime (SHIR). 

{: .box-note }
**Note:** Download and install the latest version of self-hosted IR, as well as the additional drivers and runtime, on your on-premises machine or Azure virtual machine (VM).

### Step-by-step Instruction

1. The Azure Data Factory IR is configured and started with the necessary files to run the [Xtract IS for Azure extension in ADF](https://help.theobald-software.com/en/xtract-is/for-azure/installation).
2. Download and install the SHIR on the local Windows server (on-prem) -[Microsoft Integration Runtime](https://www.microsoft.com/en-us/download/details.aspx?id=39717)
3. Register the Integration Runtime (Self-hosted) - [Configure a self-hosted IR via UI](https://learn.microsoft.com/en-US/azure/data-factory/create-self-hosted-integration-runtime?tabs=data-factory#configure-a-self-hosted-ir-via-ui)
4. If applicable: Enable SSIS package execution on self-hosted IR node using the following cmd command: `C:\Program Files\Microsoft Integration Runtime\5.0\Shared>dmgcmd -eesp`
5. Install *XtractISSetup.exe* to use Xtract IS Data Flow Tasks.
6. If applicable: Object Linking and Embedding Database (OLEDB), Open Database Connectivity (ODBC), or ADO.NET connectors are used in your packages, download and install the relevant drivers - [OLE DB Driver 18 for SQL Server](https://www.microsoft.com/en-us/download/details.aspx?id=56730)
7. If applicable: Data flow components from Azure Feature Pack in are used your packages, download and install Azure Feature Pack for SQL Server 2017 - [SSIS 2017 Feature Pack for Azure](https://www.microsoft.com/en-us/download/details.aspx?id=54798)


{: .box-note }
**Note:** If the Integration Runtime (Self-hosted) node encouters errors during execution, error logs are provided using the Windows Event Viewer.


#### Related Links:
- [.NET Framework system requirements](https://learn.microsoft.com/en-us/dotnet/framework/get-started/system-requirements)
- [Integration runtime in Azure Data Factory](https://learn.microsoft.com/en-US/azure/data-factory/concepts-integration-runtime#self-hosted-integration-runtime)
- [Self-hosted integration runtime](https://learn.microsoft.com/en-US/azure/data-factory/concepts-integration-runtime#self-hosted-integration-runtime)
- [Troubleshoot self-hosted integration runtime](https://learn.microsoft.com/en-us/azure/data-factory/self-hosted-integration-runtime-troubleshoot-guide?tabs=data-factory)
- [Assess SSIS project\packages for executions in Azure](https://learn.microsoft.com/en-us/azure/data-factory/how-to-invoke-ssis-package-ssdt#assess-ssis-projectpackages-for-executions-in-azure)
