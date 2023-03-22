---
layout: page
title: Creating a Custom Connector in Matillion Data Loader 
description: Creating a custom Connector in Matillion Data Loader 
permalink: /:collection/:path
weight: 23
---

This article shows how to a custom connector in Matillion Data Loader that loads SAP data via Xtract Universal into Snowflake.<br>
Matillion Data Loader is a cloud based data loading platform that extracts data from popular sources and loads it into cloud destinations, see [Official Website: Matillion Data Loader](https://www.matillion.com/products/data-loader/).

### Prerequisites

- Matillion Hub Account, see [Official Website](https://hub.matillion.com/). 
- Snowflake Destination for the Matillion Data Loader pipeline, see [Matillion Documentation: Destinations - Set up Snowflake](https://documentation.matillion.com/mdl/docs/set-up-snowflake).
- Xtract Universal (where the web service is securely exposed to the internet???). 

### Setup in Xtract Universal

1. Create an extraction in Xtract Universal, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction). 
The following example scenario extracts the SAP table KNA1 (General Data in Customer Master).<br>
![KNA1](/img/contents/xu/kna1.png){:class="img-responsive"}
2. 

### Create a Custom Connector in Matillion Data Loader

To extract SAP data via Xtract Universal you must define a custom connector that contains the connection details of Xtract Universal, see [Matillion Documentation: Matillion Custom Connector Overview](https://documentation.matillion.com/mcc/docs/custom-connector-overview).

1. Click **[Add Connector]** to create a new custom connector.
2. ....
3. ...
4. ...
5. Open the tab *Parameters*.
6. Click **[Save]**.

### Create a Pipeline in Matillion Data Loader

1. Click **[Add Pipeline]** to create a new pipeline.
2. Click **[Custom Connectors]** to select the custom connector, that contains the connection settings for Xtract Universal.


#### Related Links

- [Online Help: Getting Started with Xtract Universal](https://help.theobald-software.com/en/xtract-universal/getting-started)
- [Matillion Documentation: Matillion Custom Connector Overview](https://documentation.matillion.com/mcc/docs/custom-connector-overview)
