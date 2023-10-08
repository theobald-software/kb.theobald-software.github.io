---
layout: page
title: Create and Load Purchase Requisitions in SAP ERP 
description: Create and Load Purchase Requisitions in SAP ERP 
permalink: /:collection/:path
weight: 50
---

The following article shows how to use the Xtract BAPI component of Xtract for Alteryx to create a new purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Create a new purchase requisition in an SAP ERP system. <br>
This process uses a simple input table that contains the data for the purchase requisition.
- Use the new purchase requisition number to load the details of the purchase requisition into Alteryx. <br>
This process uses an input parameter and a batch macro to pass the input parameter to the Xtract BAPI component.

{: .box-note }
**Note:** When using Xtract for Alteryx version 1.18 and below tables can be passed to the Xtract BAPI component directly, while single values require the usage of batch macros.
As of Xtract for Alteryx version 1.19 all input parameters can be passed to the Xtract BAPI component without the use of a batch macro. 
For more information, see [Online Help: Parameterizing](https://help.theobald-software.com/en/xtract-for-alteryx/parameterizing). 


| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | *BAPI_REQUISITION_CREATE* (Create Purchase Requisition) <br>*BAPI_REQUISITION_GETDETAIL* (Display Purchase Requisition Details) | Xtract BAPI |

You can download the Alteryx workflow for this application here: [BAPI-ERP-ReadAndWriteWithMacro.yxzp](/files/xfa/BAPI-ERP-ReadAndWriteWithMacro.yxzp){:download="BAPI-ERP-ReadAndWriteWithMacro.yxzp"}

<!---
You can download the Alteryx workflow for this application in the [Alteryx Community - ODP based Delta Extraction of Sales and Customer Data from SAP ERP with Xtract for Alteryx](https://community.alteryx.com/t5/Community-Gallery/ODP-based-Delta-Extraction-of-Sales-and-Customer-Data-from-SAP/ta-p/1140120).
-->

![bapi-workflow](/img/contents/xfa/bapi-workflow.png){:class="img-responsive"}

### Prerequisites

To use the Xtract BAPI component, access to the designated authority objects (RFC) in SAP must be available. <br>
For more information, refer to the knowledge base article [SAP User Rights: BAPI](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bapi).

### Creating a new Purchase Requisition in SAP

Follow the steps below to create a new purchase requisition in SAP:
1. Drag & drop the Xtract BAPI component into your Alteryx workflow (1).<br>
![xfa_create_bapi_extraction_01](/img/contents/xfa/xfa_create_bapi_extraction_01.png){:class="img-responsive" width="900px"}
3. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
4. Click **[Edit]** (3) to open the main window of the Xtract BAPI component.
5. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Function Module Lookup” opens.<br>
![BAPI-empty](/img/contents/xfa/BAPI-empty.png){:class="img-responsive"}
6. In the field **Function Name** (4) enter the name of the BAPI *BAPI_REQUISITION_CREATE*. Use wildcards (*), if needed.<br>
![create-purchase-requisition-lookup](/img/contents/xfa/create-purchase-requisition-lookup.png){:class="img-responsive"}
7. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the BAPI *BAPI_REQUISITION_CREATE* from the displayed list (5).
7. Click **[OK]**. The window "Function Module Lookup" closes.
8. In the tab *Tables* of the Xtract BAPI component click ![glasses](/img/contents/icons/glasses.png){:class="img-responsive" style="display:inline"} to look up the names and data types of the table REQUISITION_ITEMS.
Use this information to prepare the input data of the purchase requisition:<br>
![create-purchase-requisition-input-table](/img/contents/xfa/create-purchase-requisition-input-table.png){:class="img-responsive"}
9. Connect the input data to the Xtract BAPI component (6).<br>
![bapi-input](/img/contents/xfa/bapi-input.jpg){:class="img-responsive"} 
10. Open the Xtract BAPI component.
11. In the tab *Tables* assign the input data to the table REQUISITION_ITEMS.<br>
![create-purchase-requisition-table-param](/img/contents/xfa/create-purchase-requisition-table-param.png){:class="img-responsive"}
11. Add the tables REQUISITION_ITEMS and RETURN to the output of the Xtract BAPI component.
12. In the tab *Exports* add the export parameter NUMBER for the output.
![create-purchase-requisition-export-param](/img/contents/xfa/create-purchase-requisition-export-param.png){:class="img-responsive"}
13. Click **[OK]** to save the settings.
14. Select the Xtract BAPI component and activate the option **Commit work in SAP after execution**.<br>
![BAPI-configuration](/img/contents/xfa/BAPI-configuration.png){:class="img-responsive"}

The Xtract BAPI component can now be used to create purchase requisitions in SAP.

### Loading Purchase Requisition Data from SAP

Follow the steps below to create a [batch macro](http://downloads.alteryx.com/betawh_xnext/BatchMacro.htm) that loads the SAP purchase requisition data of any given purchase requisition number:
1. Create a new workflow.
2. Drag & drop the Xtract BAPI component into your Alteryx workflow (1).<br>
![xfa_create_odp_extraction_01](/img/contents/xfa/xfa_create_odp_extraction_01.png){:class="img-responsive" width="900px"}
3. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
4. Click **[Edit]** (3) to open the main window of the Xtract BAPI component.
5. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Function Module Lookup” opens.<br>
![BAPI-empty](/img/contents/xfa/BAPI-empty.png){:class="img-responsive"}
6. In the field **Function Name** (4) enter the name of the BAPI *BAPI_REQUISITION_GETDETAILS*. Use wildcards (*), if needed.<br>
![load-purchase-requisition-lookup](/img/contents/xfa/load-purchase-requisition-lookup.png){:class="img-responsive"}
7. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the BAPI *BAPI_REQUISITION_GETDETAILS* from the displayed list (5).
8. Click **[OK]**. The window "Function Module Lookup" closes.
9. In the main window of the component click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.
10. Click **[Add Scalar]** to define a new input parameter for the Xtract BAPI component.
The depicted example uses a string parameter *Req_Number* to represent the purchase requisition number.<br>
![load-purchase-requisition-runtime-parameter](/img/contents/xfa/load-purchase-requisition-runtime-parameter.png){:class="img-responsive"}
11. Click **[OK]**. The window "Edit Runtime Parameters" closes.
12. In the *Imports* tab assign the parameter *Req_Number* to the import parameter NUMBER.<br>
![load-purchase-requisition-import-param](/img/contents/xfa/load-purchase-requisition-import-param.png){:class="img-responsive"}
13. In the *Tables* tab add the tables REQUISITION_ITEMS and RETURN to the output of the Xtract BAPI component. <br>
![load-purchase-requisition-table-parameter](/img/contents/xfa/load-purchase-requisition-table-parameter.png){:class="img-responsive"}
14. Click **[OK]** to save the settings of the Xtract BAPI component.
15. Navigate to the Alteryx workflow configuration and set the workflow type to **Batch Macro*.<br>
![load-purchase-requisition-import-param](/img/contents/xfa/batchmacro.png){:class="img-responsive"}
16. Save the workflow.
17. Add a **Control Parameter** tool from the *Interface* toolbox. Label the parameter *Req Number Input*.
18. Connect the **Control Parameter** tool to the Xtract BAPI component. This creates the *Action* tool **Update Value**.
19. Select the **Update Value** tool and mark the Xtract BAPI parameter *Req_Number* in the tree menu *Value or Attribute to Update* to map the parameters.<br>
![macro-update-value](/img/contents/xfa/macro-update-value.jpg){:class="img-responsive"}
14. Add two **Macro Output** tools from the *Interface* toolbox to create outputs for the batch macro.
15. Connect the output of the Xtract BAPI component to the **Macro Output** tools.
16. Save the macro.

The batch macro can now be used to load SAP purchase requisition data of any given purchase requisition number.


*****
#### Related Links
- [Download Link for BAPI-ERP-ReadAndWriteWithMacro.yxzp](/files/xfa/BAPI-ERP-ReadAndWriteWithMacro.yxzp){:download="BAPI-ERP-ReadAndWriteWithMacro.yxzp"}
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-for-alteryx/bapi)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
