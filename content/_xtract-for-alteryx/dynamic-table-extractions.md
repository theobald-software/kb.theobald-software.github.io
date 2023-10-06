---
layout: page
title: Dynamic Table Extractions 
description: Test
permalink: /:collection/:path
weight: 180
---

The following article shows how to use the Xtract Table component of Xtract for Alteryx with different kinds of runtime parameters.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Pass a single value as a runtime parameter to an Xtract Table component, see [Scalar Parameters](#scalar-parameters).
- Pass a list of values as a runtime parameter to an Xtract Table component, see [List Parameters](#list-parameters).
- Pass multiple runtime parameters to an Xtract Table component, see [Multiple Parameters](#multiple-parameters).


| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP S/4HANA | SAP Table: *ACDOCA* (Universal Journal Entry Line Items) | Xtract Table |

You can download the Alteryx workflow for this application here: [Table-Dynamic-Parameters.yxmd](/files/xfa/Table-Dynamic-Parameters.yxmd){:download="Table-Dynamic-Parameters.yxmd"}.

![table-workflow](/img/contents/xfa/workflow.png){:class="img-responsive"}

<!---
### Prerequisites

To use the Xtract Table component, access to the designated authority objects (RFC) in SAP must be available.<br>
For more information, refer to the knowledge base article [SAP User Rights: Table](../sap/authority-objects-sap-user-rights#table).
-->

### Scalar Parameters

Follow the steps below to pass a single value as a runtime parameter to the Xtract Table component.<br>
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on the fiscal year of the entry.

1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. [Look up](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data#look-up-a-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![single-table](/img/contents/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add Scalar]** (4) to create a new runtime parameter for passing single values.<br>
**Tip:** Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.
![single-table-parameter](/img/contents/xfa/single-table-parameter.png){:class="img-responsive"}
7. Click on the drop-down menu (5) and assign a data type to the parameter. The data types can, but don’t have to correlate to SAP data types.
8. Click **[OK]** to save the runtime parameter. 
9. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6. <br>
Example: `ACDOCA~GJAHR >= [PARAM]` only extracts SAP journal entries that contain the fiscal year provided by the runtime parameter PARAM.<br>
![single-where](/img/contents/xfa/single-where.png){:class="img-responsive"}
10. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `2023`.
11. Click **[OK]** to save the extraction.
12. Create/add input values for the runtime parameter in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-scalar](/img/contents/xfa/table-scalar.png){:class="img-responsive"}
13. Connect the input value to the input anchor "P" of the Xtract Table component (6). The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### List Parameters

Follow the steps below to pass a list of values as a runtime parameter to the Xtract Table component.<br>
The depicted example uses the runtime parameter to dynamically filter SAP journal entries based on a list of booking dates.

1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. [Look up](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data#look-up-a-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![single-table](/img/contents/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add List]** (4) to create a new runtime parameter that can pass multiple values.<br>
**Tip:** Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM.
![list-table-parameter](/img/contents/xfa/list-table-parameter.png){:class="img-responsive"}
7. Click **[OK]** to save the runtime parameter. 
8. Define a WHERE clause to filter the SAP data using the runtime parameter created in step 6. <br>
Example: `ACDOCA~BUDAT IN [PARAM]` only extracts SAP journal entries that contain the booking dates provided by the runtime parameter PARAM.<br>
![list-where](/img/contents/xfa/list-where.png){:class="img-responsive"}
9. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `20171008,20181008`.
10. Click **[OK]** to save the extraction.
11. Create/add input values for the runtime parameter in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-list](/img/contents/xfa/table-list.png){:class="img-responsive"}
12. Connect the input value to the input anchor "P" of the Xtract Table component (5). The input is automatically mapped to the runtime parameter.

The Xtract Table component can now be used to dynamically filter SAP data.

### Multiple Parameters

Follow the steps below to pass a multiple runtime parameters to the Xtract Table component.<br>
The depicted example uses the runtime parameters to dynamically filter SAP journal entries based on lists of customer numbers and fiscal years.

1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. [Look up](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data#look-up-a-table) an SAP table, e.g., *ACDOCA* (Universal Journal Entry Line Items).<br>
![multiple-table](/img/contents/xfa/single-table.png){:class="img-responsive"}
5. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
6. Click **[Add List]** (4) to create new runtime parameters that can pass multiple values.<br>
**Tip:** Parameter0..-n is the default naming for added runtime parameters. You can enter a name of your choice, e.g., PARAM1 and PARAM2.
![multiple-lists-table-parameter](/img/contents/xfa/multiple-lists-table-parameter.png){:class="img-responsive"}
7. Click **[OK]** to save the runtime parameter. 
8. Define a WHERE clause to filter the SAP data using the runtime parameters created in step 6. <br>
Example: `(ACDOCA~KUNNR IN [PARAM1]) AND (ACDOCA~GJAHR IN [PARAM2])` only extracts SAP journal entries that contain the customer numbers provided by the runtime parameter PARAM1 and that contain the fiscal years provided by runtime parameter PARAM2.<br>
![multiple-where](/img/contents/xfa/multiple-where.png){:class="img-responsive"}
9. Click **[Load live preview]** to display a live preview of the data without running the extraction.<br>
When prompted, provide a value for the runtime parameter, e.g., `USCU_S13,USCU_L04` for PARAM1 and `2020,2021` for PARAM2.
10. Click **[OK]** to save the extraction.
11. Create/add input values for the runtime parameters in your workflow.
Make sure that the name and data type of the input matches the name and data type of the runtime parameter created in step 6. <br>
![table-multiple](/img/contents/xfa/table-multiple.png){:class="img-responsive"}
12. Connect the input value to the input anchor "P" of the Xtract Table component (5). The input is automatically mapped to the runtime parameters.

The Xtract Table component can now be used to dynamically filter SAP data.

*****
#### Related Links
- [Online Help: Xtract Table](https://help.theobald-software.com/en/xtract-for-alteryx/table)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
