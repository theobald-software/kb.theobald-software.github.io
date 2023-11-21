---
layout: page
title: Read SAP Attachment Files 
description: Test
permalink: /:collection/:path
weight: 180
---

The following article shows how to extract attachment files of all formats from an SAP systems, e.g., .pdf files of purchase orders.<br>

### About this Workflow

This article leads you through all necessary steps to set up the following workflows:
- Get a list of attached files from the SAP ERP system
- Download SAP attachment files of any format

| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | *SRGBTBREL* (Relationships in GOS Environment) <br>*SOOD* (SAPoffice: Object Definition) | Xtract Table |
| SAP ERP | **SO_DOCUMENT_READ_API1** (SAPoffice: View object from folder using RFC) | Xtract BAPI |

<!---
You can download the Alteryx workflow for this application in the [Alteryx Community - Read SAP Attachment Files](...).
-->

![sap-attachments-workflow](/img/contents/xfa/sap-attachments-workflow.png){:class="img-responsive"}



### Get a List of all SAP Attachments

Follow the steps below to set up the following workflow:
- Read the table SRGBTBREL to obtain all document IDs attached to business objects
- Read the table SOOD to obtain the names of the attached files

#### Get a List of Document IDs attached to Business Objects

The document IDs are listed in the INSTIND_B of SAP Table SRGBTBREL.

1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. [Look up](https://help.theobald-software.com/en/xtract-for-alteryx/table/extract-table-data#look-up-a-table) the SAP table *SRGBTBREL*.
5. Select the columns INSTID_A, TYPEID_A and INSTID_B for output.<br>
![attachment-files-table1](/img/contents/xfa/attachment-files-table1.png){:class="img-responsive"}
6. Click **[OK]** to save the table extraction.
7. Add a **Formula** component to the workflow and connect it with the Xtract Table output.
8. ... <br>
![attachment-files-formula](/img/contents/xfa/attachment-files-formula.png){:class="img-responsive"}

#### Get a List of File Names

The ...

1. Drag & drop the Xtract Table component into your Alteryx workflow.
2. Select an SAP connection. If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. [Look up](https://help.theobald-software.com/en/xtract-for-alteryx/table/extract-table-data#look-up-a-table) the SAP table *SOOD*. The table contains all document IDs attached to business objects.
4. Select the columns OBJTP, OBJYR and OBJNO for output.<br>
![attachment-files-table2](/img/contents/xfa/attachment-files-table2.png){:class="img-responsive"}
5. Click **[Edit parameters]** and [create a runtime parameter](https://help.theobald-software.com/en/xtract-for-alteryx/table/edit-runtime-parameters) *OBJNO* of type string.<br>
![attachment-files-runtime-parameter](/img/contents/xfa/attachment-files-runtime-parameter.png){:class="img-responsive"}
6. Navigate to the WHERE Clause tab and create the following WHERE clause: `SOOD~OBJNO IN [OBJNO]`. <br>
![attachment-files-where-clause](/img/contents/xfa/attachment-files-where-clause.png){:class="img-responsive"}
7. Click **[OK]** to save the table extraction.
8. Input... <br>
![attachment-files-table-input](/img/contents/xfa/attachment-files-table-input.png){:class="img-responsive"}
9. Optional: Join<br>

<!---
![attachment-files-workflow1](/img/contents/xfa/attachment-files-workflow1.png){:class="img-responsive"}
-->

### Download SAP Attachment Files

Follow the steps below to download SAP attachment files using their SAP object number as input:

1. Drag & drop the Xtract BAPI component into your Alteryx workflow (1).<br>
![xfa_create_bapi_extraction_01](/img/contents/xfa/xfa_create_bapi_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract BAPI component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Function Module Lookup Lookup” opens.
5. [Look up](https://help.theobald-software.com/en/xtract-for-alteryx/bapi/bapi-extraction-define#look-up-a-bapi) the function module *SO_DOCUMENT_READ_API1*.
6. Click **[Edit parameters]** and [create a runtime parameter](https://help.theobald-software.com/en/xtract-for-alteryx/bapi/edit-runtime-parameters) *ObjectIdentifier* of type string.<br>
![attachment-files-runtime-parameter2](/img/contents/xfa/attachment-files-runtime-parameter2.png){:class="img-responsive"}
7. In the *Import* tab, set the DOCUMENT_ID to the runtime parameter *ObjectIdentifier*.<br>
![attachment-files-bapi-import](/img/contents/xfa/attachment-files-bapi-import.png){:class="img-responsive"}
8. In the *Export* tab, select DOCUMENT_DATA for output.<br>
![attachment-files-bapi-import](/img/contents/xfa/attachment-files-bapi-import.png){:class="img-responsive"}
9. In the *Table* tab, select CONTENTS_HEX for the output. CONTENTS_HEX contains the attachment file in the format of a HEX string.<br>
![attachment-files-bapi-import](/img/contents/xfa/attachment-files-bapi-import.png){:class="img-responsive"}
10. Click **[OK]** to save your input.
11. ...<br>
![attachment-files-bapi-input](/img/contents/xfa/attachment-files-bapi-input.png){:class="img-responsive"}
12. ... <br>
![attachment-files-workflow2](/img/contents/xfa/attachment-files-workflow2.png){:class="img-responsive"}


*****
#### Related Links
- [Alteryx Community - Read SAP Attachment Files](...)
- [Online Help: Xtract Table](https://help.theobald-software.com/en/xtract-for-alteryx/table)
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-for-alteryx/bapi)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
