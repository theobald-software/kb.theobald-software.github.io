---
layout: page
title: Read and Download SAP Attachment Files 
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
| SAP ERP | *SO_DOCUMENT_READ_API1* (SAPoffice: View object from folder using RFC) | Xtract BAPI |


You can download the Alteryx workflow for this application in the [Alteryx Community - Read SAP Attachment Files](...).
<!---
![sap-attachments-workflow](/img/contents/xfa/sap-attachments-workflow.png){:class="img-responsive"}
-->


### Get a List of all SAP Attachments

Follow the steps below to set up the following workflow:
- Read the table SRGBTBREL to get all Object IDs that are attached to business objects
- Read the table SOOD to get the corresponding file names and extensions of the Object IDs.

#### Get a List of Object IDs

1. Drag & drop the Xtract Table component into your Alteryx workflow (1).<br>
![xfa_create_table_extraction_01](/img/contents/xfa/xfa_create_table_extraction_01.png){:class="img-responsive" width="900px"}
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract Table component.
4. [Look up](https://help.theobald-software.com/en/xtract-for-alteryx/table/extract-table-data#look-up-a-table) the SAP table *SRGBTBREL*.
5. Select the columns TYPEID_A (source of the attached file) and INSTID_B (Object ID) for output.<br>
![attachment-files-table1](/img/contents/xfa/attachment-files-table1.png){:class="img-responsive"}
6. Click **[OK]** to save the table extraction.
7. Optional: Add a **Formula** tool after the Xtract Table component to separate the key objects of INSTID_B into the following columns: "Object", "OBJTP" (object type), "OBJYR" (object year) and "OBJNO" (object number).<br>
![attachment-files-formula](/img/contents/xfa/attachment-files-formula.png){:class="img-responsive"}

The processed list of attached files contains the following information:<br>
![attachment-files-SRGBTBREL-parsed-output](/img/contents/xfa/attachment-files-SRGBTBREL-parsed-output.jpg){:class="img-responsive"}

#### Get a List of File Names

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
8. Define an object number as the input for the runtime parameter of the Xtract Table component, e.g., *000000001276*.<br>
![attachment-files-table-input](/img/contents/xfa/attachment-files-table-input.png){:class="img-responsive"}
9. Add a **Join** tool to join the results of the two table extraction into a single list.<br>
![attachment-files-workflow1](/img/contents/xfa/attachment-files-workflow1.png){:class="img-responsive"}

{: .box-note}
**Note:** The workflow provided in the Alteryx community contains further steps to download the first file in the list of attached files in the SAP ERP system.

### Download SAP Attachment Files

Follow the steps below to download SAP attachment files using their Object ID as input:

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
8. In the *Export* tab, select DOCUMENT_DATA for output.
9. In the *Table* tab, select CONTENTS_HEX for the output. CONTENTS_HEX contains the attachment file in the format of a HEX string.
10. Click **[OK]** to save your input.
11. Define an Object ID as the input for the runtime parameter of the Xtract BAPI component, e.g., *FOL18          4 EXT45000000000229*.<br>
**Tip:** Object IDs are available in the SAP table SRGBTBREL, see [Get a List of all SAP Attachments](#get-a-list-of-all-sap-attachments).
![attachment-files-bapi-input](/img/contents/xfa/attachment-files-bapi-input.png){:class="img-responsive"}
12. Add a **Summarize** tool (4) to concatenate the multi-line HEX string returned by the Xtract BAPI component into a single line.<br>
![attachment-files-workflow2](/img/contents/xfa/attachment-files-workflow2.png){:class="img-responsive"}
13. Add a **Select** (5) and a **Formula** tool to concatenate the file name using the Xtract BAPI output fields OBJDES and FILE_EXT, e.g., `example.pdf`.<br>
![attachment-files-formula-filename](/img/contents/xfa/attachment-files-formula-filename.png){:class="img-responsive"}
14. Add a **Append Fields** tool to append the file name to the HEX string.<br>
![attachment-files-append-fields](/img/contents/xfa/attachment-files-append-fields.png){:class="img-responsive"}
15. Add a **Blob Convert** tool (6) to convert the HEX string to a Binary Large OBject (BLOB).
BLOB data types can store multiple file types, e.g., images, audio, and other objects, see [Alteryx Documentation: Blob Convert Tool](https://help.alteryx.com/current/en/designer/tools/developer/blob-convert-tool.html) for more information. <br>
![attachment-files-blob-convert](/img/contents/xfa/attachment-files-blob-convert.png){:class="img-responsive"}
16. Add a **Blob Output** tool (7) to save the file.<br>
![attachment-files-blob-convert](/img/contents/xfa/attachment-files-blob-output.png){:class="img-responsive"}


*****
#### Related Links
- [Alteryx Community - Read SAP Attachment Files](...)
- [Online Help: Xtract Table](https://help.theobald-software.com/en/xtract-for-alteryx/table)
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-for-alteryx/bapi)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
