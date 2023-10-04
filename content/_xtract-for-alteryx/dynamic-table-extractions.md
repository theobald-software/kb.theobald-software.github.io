---
layout: page
title: Dynamic Table Extractions 
description: Test
permalink: /:collection/:path
weight: 180
---

The following article shows how to use the Xtract Table component of Xtract for Alteryx with runtime parameters.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Pass single values as runtime parameters to an Xtract Table component, see [Scalar Parameters](#scalar-parameters).
- Pass multiple values as runtime parameters to an Xtract Table component, see [List Parameters](#list-parameters).
- Pass multiple parameters to an Xtract Table component, see [Multiple Parameters](#multiple-parameters).


| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP S/4HANA | SAP Table: *ACDOCA* (Universal Journal Entry Line Items) | Xtract Table |

You can download the Alteryx workflow for this application here: [Table-Dynamic-Parameters.yxmd](/files/xfa/Table-Dynamic-Parameters.yxmd){:download="Table-Dynamic-Parameters.yxmd"}.

![table-workflow](/img/contents/xfa/workflow.png){:class="img-responsive"}


### Prerequisites

To use the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available.<br>
For more information, refer to the knowledge base article [SAP User Rights: Table](../sap/authority-objects-sap-user-rights#table).

### Scalar Parameters

![table-scalar](/img/contents/xfa/table-scalar.png){:class="img-responsive"}


Follow the steps below to ...:
1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Table Lookup” opens.
5. In the field **Name** (4) enter the name of an SAP table, e.g., *ACDOCA*. Use wildcards (*), if needed.<br>
![odp-lookup-sales-data](/img/contents/xfa/odp-lookup-sales-data.png){:class="img-responsive"}
6. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select a table from the displayed list (5).
7. Click **[OK]**.
8. Click **[Edit Parameters]**. The window "
9. 
![single-table-parameter](/img/contents/xfa/single-table-parameter.png){:class="img-responsive"}
9. WHERE clause
10. Click **[Load live preview]** (6) to display a live preview of the data without running an extraction.
11. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP sales data.

### List Parameters

![table-list](/img/contents/xfa/table-list.png){:class="img-responsive"}

![list-table-parameter](/img/contents/xfa/list-table-parameter.png){:class="img-responsive"}
... 

Follow the steps below to load customer master data from your SAP ERP system:
1. Drag & drop the Xtract ODP component into your Alteryx workflow (1).<br>
![xfa_create_odp_extraction_01](/img/contents/xfa/xfa_create_odp_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract ODP component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Operational Data Provider Lookup” opens.
5. In the field **Name** (4) enter the name of the customer master data extractor: *0CUSTOMER_ATTR*. Use wildcards (*), if needed.<br>
![odp-lookup-customer-data](/img/contents/xfa/odp-lookup-customer-data.png){:class="img-responsive"}
6. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the *0CUSTOMER_ATTR* extractor from the displayed list (5).
7. Click **[OK]**.
8. Select the fields you want to add to the output of the Xtract ODP component. 
For more information on selections and filters, see [Online Help: Xtract ODP - Selections and Filters](https://help.theobald-software.com/en/xtract-for-alteryx/odp/odp-define#selections-and-filters).
![odp-extraction-sales-data](/img/contents/xfa/odp-extraction-customer-data.png){:class="img-responsive"}
9. Click **[Load live preview]** (6) to display a live preview of the data without executing an extraction.
10. Click **[OK]** to save your input.

The Xtract ODP component can now be used to access and process the extracted SAP customer data.

### Multiple Parameters

![table-multiple](/img/contents/xfa/table-multiple.png){:class="img-responsive"}

![multiple-lists-table-parameter](/img/contents/xfa/multiple-lists-table-parameter.png){:class="img-responsive"}
...

*****
#### Related Links
- [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120)
- [Online Help: Xtract ODP (Operational Data Provisioning)](https://help.theobald-software.com/en/xtract-for-alteryx/odp)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
