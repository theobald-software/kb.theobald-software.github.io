---
layout: page
title: Uploading CATS data using Xtract BAPI
description: uploading-cats-data-by-using-xtract-is-bapi
permalink: /:collection/:path
weight: 110
---

The following article shows how to upload CATS data from an SQL server table by using SSIS and the [Xtract IS BAPI](https://help.theobald-software.com/en/xtract-is/bapi) component.

### About BAPI_CATIMESHEETMGR_INSERT

The BAPI BAPI_CATIMESHEETMGR_INSERT creates Time Sheet entries in SAP.

- Input:
Important input fields for BAPI_CATIMESHEETMGR_INSERT are the import parameters PROFILE and TESTRUN and the table CATSRECORDS_IN. 
- Output:
The results are available in the tables CATSRECORDS_OUT and RETURN. <br>
The RETURN table contains different types of messages, e.g., warnings, information, errors, etc. 
If the input records do not have any errors, then the table CATSRECORDS_OUT will be populated with the same number of input records, otherwise it will not contain any entries. <br>

#### Troubleshooting
The ROW fields in the RETURN table can be used to identify errors, see [Checking for Errors](#checking-for-errors).<br>
Example: If the second and third entries have errors then the ROW of table RETURN will be populated as 2 and 3.

### Input Table

The format of an input table (column names and data types) must be compatible with the parameters of the BAPI, see [Online Help: Mapping Input Tables](https://help.theobald-software.com/en/xtract-is/bapi/parameters#mapping-input-tables).<br>
The following table is stored on an SQL Server:

Table Name: BAPICATSINPUT
![CATS-Bapi_02](/img/contents/xis/CATS-Bapi_02.png){:class="img-responsive"}

The table has the following content:
![CATS-Bapi_03](/img/contents/xis/CATS-Bapi_03.png){:class="img-responsive"}

### Setup in SSIS

For information on how to use Xtract components, see [Online Help: Getting Started with Xtract IS](https://help.theobald-software.com/en/xtract-is/getting-started).

1. Create a new *Data Flow* and add a *Connection Manager* that connects to your SAP system, see [Online Help: Connection Manager](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager).
2. Add the Xtract BAPI component to the workflow.
3. Assign the *Connection Manager* to the Xtract BAPI component manually or by double clicking on the component.
4. Open the Xtract BAPI component and look up the BAPI BAPI_CATIMESHEETMGR_INSERT.
5. Provide the PROFILE "TEST" and TESTRUN " " as import parameters.<br>
![CATS-Bapi_04](/img/contents/xis/BAPI-CATS-Imports.png){:class="img-responsive"}
6. Add the tables CATSRECORD_OUT and RETURN to the output.<br>
![CATS-Bapi_05](/img/contents/xis/BAPI-CATS-Tables.png){:class="img-responsive"}
7. Add a source. In this example, add an OLE DB Source to the workflow and map it with the [input table](#input-table) BAPICATSINPUT.
8. Connect the OLE DB Source to the Xtract BAPI component. The window "Input Putput Selection" opens.
9. Select the table CATSRECORD_IN to map the data from the input table to CATSRECORD_IN.<br>
The table fields are mapped automatically. For this, the name and data types of the table columns must match.
If the input table and CATSRECORD_IN do not match, add a Deprived Column component between the OLE DB Source and the Xtract BAPI component to format the input table accordingly.
![CATS-Bapi_06](/img/contents/xis/BAPI-CATS-mapping.png){:class="img-responsive"}
10. Create two OLE DB destinations for the tables CATSRECORDS_OUT and RETURN of the Xtract BAPI component.<br>
![CATS-Bapi_07](/img/contents/xis/CATS-Bapi_04.png){:class="img-responsive"}
11. Execute the workflow and check the SQL output tables.
12. Use the transaction CAT3 to check the data in SAP. <br>
![CATS-Bapi_08](/img/contents/xis/CATS-Bapi_16.png){:class="img-responsive"}

### Checking for Errors

The ROW fields in the RETURN table can be used to identify errors. Example:<br>

1. To produce an error, set the the value for ABS_ATT_TYPE in the input table BAPICATSINPUT to 0005.
![CATS-Bapi_21](/img/contents/xis/CATS-Bapi_21.jpg){:class="img-responsive"}
2. Run the SSIS package.<br>
The output table CATSRECORDS_OUT does not have any entries. This means that the data in SAP is not updated.
3. Query the SQL table RETURN to identify the error.<br>
The numbers in the ROW column show which rows contain the erroneous records. <br>
The message displayed in the MESSAGE column indicates that the attendance/absence type (0005) is not maintained.
![CATS-Bapi_23](/img/contents/xis/CATS-Bapi_23.jpg){:class="img-responsive"}

{: .box-note }
**Note:** When using BAPI_CATIMESHEETMGR_INSERT, note that only records without errors are posted. 
If an error occurs during posting, none of the data – including records without errors – is posted. 
We recommend including only a small number of records in each posting.


***********

#### Related Links
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-is/bapi) 
- [Knowledge Base Article: How to Post Data in SAP with Xtract BAPI](https://kb.theobald-software.com/xtract-is/how-to-post-data-in-sap)
