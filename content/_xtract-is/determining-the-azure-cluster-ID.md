---
layout: page
title: Determining the Azure SSIS-IR Cluster ID
description: Determining the Azure SSIS-IR Cluster ID
permalink: /:collection/:path
weight: 20
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Azure SSIS-IR Cluster ID is needed to create a customer bound license.  

### Azure SSIS-IR Cluster ID in the Azure Portal

-  Within Azure Data Factory (ADF) navigate to "Let's get started" and select **Configure SSIS Integration**.

![Landing page](/img/contents/landing.jpg){:class="img-responsive" }

-  Select Data Factory -> *[data factory name]* (in the given example: *ADF-XIS-YW*).

![Data factory example](/img/contents/azure-portal.jpg){:class="img-responsive" }

-  Within the tab **Connections** select *Integration Runtimes* -> *[integration runtime name]* (in the given example: *ADF-IR-XIS2*).

The Azure SSIS-IR Cluster ID is composed of the name of the Data Factory and the name of the Integration Runtime.<br>
Syntax example: `Microsoft.DataFactory/factories/[data factory name]/integrationruntimes/[integration runtime name]`.<br>
Syntax in the given example: `Microsoft.DataFactory/factories/ADF-XIS-YW/integrationruntimes/ADF-IR-XIS2`

****
#### Related Links
- Check the additional information on [SSIS Integration Runtime](https://docs.microsoft.com/en-us/azure/data-factory/concepts-integration-runtime#azure-ssis-integration-runtime), if needed.


