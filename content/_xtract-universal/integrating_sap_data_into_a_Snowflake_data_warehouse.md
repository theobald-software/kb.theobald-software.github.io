---
layout: page
title: Integrating SAP Data into a Snowflake Data Warehouse
description: integrating-sap-data-into-a-snowflake-data-warehouse
permalink: /:collection/:path
weight: 85
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for Xtract Universal.<br>
Make sure to use the knowledge base within the new [HelpCenter for Xtract Universal](https://helpcenter.theobald-software.com/xtract-universal/knowledge-base/).

Theobald Software has partnered with Snowflake to build a showcase for integrating SAP ERP data into a Snowflake cloud data warehouse. 
The solution described in this article is based on an actual customer use case.

### Customer Need 

The customer was looking to replace an existing on-premises data warehouse and analytics toolset with primarily cloud-based services. 
Critical business data would have to be sourced from SAP ECC (on-premise), in addition to data stored in various databases or flat files.

The customer was also looking for a fully automated process to bring data from different sources together in a Snowflake cloud data warehouse. 
The data load process had to be fast and support incremental data loads, to ultimately enable near real-time insights for the business users.

### SAP Data Extraction

The customer used our [Xtract Universal](https://theobald-software.com/en/xtract-universal/) product to extract data from their SAP ECC system. 
Incremental data feeds are enabled with the built-in Table and DeltaQ components in Xtract Universal. 
The Table component is easy to configure and delivers performant data extraction from even the largest SAP tables. 
The DeltaQ component provides reliable delta feeds, based on SAP’s native DataSource extractors.
![sap_snowflake](/img/contents/xu/sap_snowflake.png){:class="img-responsive"}

### Cloud Storage 

Once the data is extracted from SAP, it can be directly stored in one of currently 20+ supported target environments. 
It’s a direct pass-through of the data from SAP into the target. In the process, SAP data types are mapped to the data types of the target environment. <br> 
Xtract Universal can write SAP data directly into a database, cloud storage or data warehouse. 
In this case, the customer wants to write the data from Xtract Universal to Azure blob storage first and then to Snowflake DB. 
With this approach an additional staging datalake can be maintained in Azure.
The DDLs to create the proper tables in Snowflake can be auto-generated in Xtract Universal. 
An initial, full data load from the Blob container can be done in Snowflake with the COPY command. 
Subsequent, incremental data loads can be done with a MERGE statement.

### Automation 

The SAP data extracts and the load process in Snowflake can be fully automated, using utilities like the Windows Task Scheduler or Cron, or your scheduling tool of choice. 
This can also work in conjunction with an existing ETL tool for centralized monitoring and management of all data movement processes.

***********

#### Related Links

- [Xtract Universal Product Information](https://theobald-software.com/en/xtract-universal/) 
- [Online Help: Snowflake Destination](https://help.theobald-software.com/en/xtract-universal/destinations/snowflake)
