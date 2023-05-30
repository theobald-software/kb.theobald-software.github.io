---
layout: page
title: ODP based Delta Extraction of Sales and Customer Data from an SAP ERP System 
description: Test
permalink: /:collection/:path
weight: 180
---

The following article shows how to use the Xtract ODP component of Xtract for Alteryx to load sales documents and customer master data from an SAP ERP system.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Load all customer master data from the SAP ERP system
- Process the extracted SAP data
- Load sales data using the delta mechanism of the Xtract ODP component

 The delta mechanism of the Xtract ODP component allows loading only the added or changed data (since the last run) from an SAP ERP system.

| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | BW Extractors: *2LIS_11_VAITM* (Sales Document Item Data) & *0CUSTOMER_ATTR* (Customer Master Data) | Xtract ODP |

You can download the Alteryx workflow for this application in the [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120).


![odp-workflow](/img/contents/xfa/odp-workflow.png){:class="img-responsive"}

### Prerequisites

Implement the following SAP notes to use the Xtract ODP component:
- [1931427 - ODP Data Replication API 2.0](https://launchpad.support.sap.com/#/notes/1931427)
- [2232584 - Release of SAP extractors for ODP replication (ODP SAPI)](https://launchpad.support.sap.com/#/notes/2232584)
- [1560241 - Release of DataSources for ODP data replication API](https://launchpad.support.sap.com/#/notes/1560241)
- [2196500 - ODP Package size cannot be reduced below 50 MB](https://launchpad.support.sap.com/#/notes/2196500/D)
- [2191995 - ODQ Package Size cannot be reduced below 50 MByte](https://launchpad.support.sap.com/#/notes/2191995/D)

### Delta Extraction of Sales Documents

Follow the steps below to load sales data from your SAP ERP system:
1. Drag & drop the Xtract ODP component into your Alteryx workflow (1).<br>
![xfa_create_odp_extraction_01](/img/contents/xfa/xfa_create_odp_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract ODP component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Operational Data Provider Lookup” opens.
5. In the field **Name** (4) enter the name of the sales data extractor: *2LIS_11_VAITM*. Use wildcards (*), if needed.<br>
![odp-lookup-sales-data](/img/contents/xfa/odp-lookup-sales-data.png){:class="img-responsive"}
6. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the *2LIS_11_VAITM* extractor from the displayed list (5).
7. Click **[OK]**.
8. Select the fields you want to add to the output of the Xtract ODP component.
For more information on selections and filters, see [Online Help: Xtract ODP - Selections and Filters](https://help.theobald-software.com/en/xtract-for-alteryx/odp/odp-define#selections-and-filters).
![odp-extraction-sales-data](/img/contents/xfa/odp-extraction-sales-data.png){:class="img-responsive"}
9. In the section *Update Mode* select the option **Delta Update** to only load data from the SAP system that was added or changed since the last run.
By default, the first run loads all data from the SAP system. Deactivate the *On delta initialization* option **Extract data** to prevent loading of any data on the first run.<br>
For more information on selections and filters, see [Online Help: Xtract ODP - Update Mode](https://help.theobald-software.com/en/xtract-for-alteryx/odp/odp-define#update-mode).
10. Click **[Load live preview]** (6) to display a live preview of the data without running an extraction.
11. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP sales data.

### Extraction of Customer Master Data

Follow the steps below to load customer master data from your SAP ERP system:
1. Drag & drop the Xtract ODP component into your Alteryx workflow (1).<br>
![xfa_create_odp_extraction_01](/img/contents/xfa/xfa_create_odp_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract ODP component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Operational Data Provider Lookup” opens.
5. In the field Name (4) enter the name of the customer master data extractor: *0CUSTOMER_ATTR*. Use wildcards (*), if needed.<br>
![odp-lookup-customer-data](/img/contents/xfa/odp-lookup-customer-data.png){:class="img-responsive"}
6. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the *0CUSTOMER_ATTR* extractor from the displayed list (5).
7. Click **[OK]**.
8. Select the fields you want to add to the output of the Xtract ODP component. 
For more information on selections and filters, see [Online Help: Xtract ODP - Selections and Filters](https://help.theobald-software.com/en/xtract-for-alteryx/odp/odp-define#selections-and-filters).
![odp-extraction-sales-data](/img/contents/xfa/odp-extraction-customer-data.png){:class="img-responsive"}
9. Click **[Load live preview]** (6) to display a live preview of the data without executing an extraction.
10. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP customer data.


*****
#### Related Links
<!---
uncomment once the Alteryx Community gallery is published:
- [Alteryx Community - Gallery title and link here]()
-->
- [Online Help: Xtract ODP (Operational Data Provisioning)](https://help.theobald-software.com/en/xtract-for-alteryx/odp)
