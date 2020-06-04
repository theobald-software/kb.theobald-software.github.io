---
layout: page
title: Determining the Azure Cluster ID
description: Determining the Azure Cluster ID
permalink: /:collection/:path
weight: 20
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Azure Cluster ID is needed to create a customer bound license.  

### Cluster ID in the Azure Portal

1. Within Azure Data Factory (ADF) navigate to "Let's get started" and select **Configure SSIS Integration**.
![Landing page](/img/contents/landing.jpg){:class="img-responsive" }
2. Select Data Factory -> [data factory name](in the given example: *ADF-XIS-YW*).
![Data factory example](/img/contents/azure-portal.jpg){:class="img-responsive" }
3. Within the tab **Connections** select *Integration Runtimes* -> [integration runtime name](in the given example: *ADF-IR-XIS2*).

The Azure Cluster ID is composed of the name of the Data Factory and the name of the Integration Runtime.<br>
Syntax example: `Microsoft.DataFactory/factories/[data factory name]/integrationruntimes/[integration runtime name].`<br>
Syntax in the given example: `Microsoft.DataFactory/factories/ADF-XIS-YW/integrationruntimes/ADF-IR-XIS2`

****
#### Related Links
- Check the additional information on [SSIS Integration Runtime](https://docs.microsoft.com/en-us/azure/data-factory/concepts-integration-runtime#azure-ssis-integration-runtime), if needed.


