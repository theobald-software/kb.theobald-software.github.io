---
layout: page
title: Determining the Azure SSIS-IR Cluster ID
description: Determining the Azure SSIS-IR Cluster ID
permalink: /:collection/:path
weight: 20
---


{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for Xtract IS.<br>
Make sure to use the knowledge base within the new [HelpCenter for Xtract IS](https://helpcenter.theobald-software.com/xtract-is/knowledge-base/).

The following article shows how to access the Azure SSIS-IR Cluster. 
The Azure SSIS-IR ClusterID is needed to create a customer bound license.  

### Azure SSIS-IR Cluster ID in the Azure Portal

1.  Within Azure Data Factory (ADF) navigate to **[Launch Studio]** and select **Configure SSIS**. Data factory window opens. <br> 
![Landing page](/img/contents/landing.png){:class="img-responsive" }
2.  Select Data Factory: *[data factory name]* (in the given example: *Xtract-ADF*). <br>
![Data factory example](/img/contents/azure-portal.jpg){:class="img-responsive" }
3. In the general menu on the left handside select *Integration Runtimes* > *[Name]* (in the given example: *XTRACT-IR*). 
The intergration runtime window opens and all possible runtimes are displayed, including the type, the status and further information.

The Azure SSIS-IR Cluster ID is composed of the name of the Data Factory and the name of the Integration Runtime.<br>
Syntax example: `Microsoft.DataFactory/factories/[data factory name]/integrationruntimes/[integration runtime name]`.<br>
Syntax in the given example: `Microsoft.DataFactory/factories/Xtract-ADF/integrationruntimes/XTRACT-IR`

****

#### Related Links
- [SSIS Integration Runtime](https://docs.microsoft.com/en-us/azure/data-factory/concepts-integration-runtime#azure-ssis-integration-runtime)


