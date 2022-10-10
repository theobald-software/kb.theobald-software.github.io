---
layout: page
title: How to extract SAP data to SAP Data Warehouse Cloud (DWC)
description: Using Xtract Universal's HANA destination to push data to SAP DWC
permalink: /:collection/:path
weight: 50
---


### About

Xtract Universal enables data extraction **from** ABAP based SAP systems, like SAP ECC, S/4, BW, etc. **to** various destination environments:
- Database destinations
- Cloud Storage destinations
- BI Analytic clients
- etc.

This article describes the simple steps how to extract and load SAP data to a database table on SAP DWC. This would be the data ingestion or staging part of a data load. <br>
Any post-processing and data modeling on DWC is **not** covered in this article.


### Assumption
This article assumes:
- Xtract Universal is already installed on a Windows machine; a number of extractions have been created.
- You have an SAP DWC environment in place.
- *Optional*: You have a cloud storage environment (Azure Storage, AWS S3, Google Cloud Storage) in place.

If you are not familiar with Xtract Universal, you may want to first take a look at our [Getting Started with Xtract Universal](https://help.theobald-software.com/en/xtract-universal/getting-started) pages.

### General Workflow for Creating and Running Extractions

Xtract Universal allows data extraction from different SAP objects:

![supported SAP Source objects](/img/contents/XU_DWC_1.png){:class="img-responsive"}

This way, multiple extractions can be created:
![List of XU extractions](/img/contents/XU_DWC_2.png){:class="img-responsive"}

Extractions can be manually triggered from the Xtract Universal Designer. Data is extracted from SAP and written to the destination. <br>
Later on, these extractions can be scheduled so as to run automatically.

![Run Dialog](/img/contents/XU_DWC_4.png){:class="img-responsive"}


For simplicity, the following steps were omitted in this workflow:
- Creating a connection to a SAP source system.
- Creating a connection to a destination.

### Direct Integration with DWC

In this scenario, data from an extraction is directly written to a database table on SAP DWC. This table can be automatically created by Xtract Universal, taking into account the SAP source object's meta data (data fields, data types). 

![destination2](/img/contents/XU_DWC_6.png){:class="img-responsive"}

Output on SAP DWC (viewed through SAP HANA Database Explorer)
![DWC](/img/contents/XU_DWC_7.png){:class="img-responsive"}


The technical connection between Xtract Universal and SAP DWC is established through the ADO.NET driver of the [SAP HANA client](https://developers.sap.com/tutorials/hana-clients-install.html).

![destination1](/img/contents/XU_DWC_3.png){:class="img-responsive"}

### Indirect Integration (via Cloud Storage)

Xtract Universal supports data ingestion to the following cloud storage environments:
- Microsoft Azure Storage
- AWS S3
- Google Cloud Storage

![Azure_cloud_storage](/img/contents/XU_DWC_9.png){:class="img-responsive"}

In the same way, SAP DWC supports these environments as a data source. 

![DWC_cloud_storage](/img/contents/XU_DWC_8.png){:class="img-responsive"}


Integration of Xtract Universal and SAP DWC would happen through the respective cloud storage environment:
1. Xtract Universal loads SAP data to the cloud storage.
2. SAP DWC reads that data from the cloud storage.

