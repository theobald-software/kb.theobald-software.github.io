---
layout: page
title: Create and Load Purchase Requisitions in SAP ERP 
description: Create and Load Purchase Requisitions in SAP ERP 
permalink: /:collection/:path
weight: 20
---

This article shows how to use the Xtract BAPI component of Xtract for Alteryx to create a new purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Create a new purchase requisition in an SAP ERP system. <br>
This process uses a simple input table that contains the data for the purchase requisition.
- Use the new purchase requisition number to load the details of the purchase requisition into Alteryx. <br>
This process uses an input parameter and a macro to pass the input parameter to the Xtract BAPI component.

| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | *BAPI_REQUISITION_CREATE* (Create Purchase Requisition) <br>*BAPI_REQUISITION_GETDETAIL* (Display Purchase Requisition Details) | Xtract BAPI |

<!---
You can download the Alteryx workflow for this application in the [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120).
-->

![bapi-workflow](/img/contents/xfa/bapi-workflow.png){:class="img-responsive"}

### Prerequisites



### Creating a new Purchase Requisition

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
- [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120)
- [Online Help: Xtract ODP (Operational Data Provisioning)](https://help.theobald-software.com/en/xtract-for-alteryx/odp)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
