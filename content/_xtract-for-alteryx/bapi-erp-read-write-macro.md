---
layout: page
title: Create and Load Purchase Requisitions in SAP ERP 
description: Create and Load Purchase Requisitions in SAP ERP 
permalink: /:collection/:path
weight: 50
---

This article shows how to use the Xtract BAPI component of Xtract for Alteryx to create a new purchase requisition in SAP and how to load the data of the purchase requisition into Alteryx.

### About this Workflow

This article leads you through all necessary steps to set up the following workflow:
- Create the purchase requisition in an SAP ERP system. <br>
This process uses a simple input table that contains the data for the purchase requisition.
- Use the new purchase requisition number to load the details of the purchase requisition into Alteryx. <br>
This process uses an input parameter and a macro to pass the input parameter to the Xtract BAPI component.

{: .box-note }
**Note:** While input tables can be passed to the Xtract BAPI component directly, single values require the usage of batch macros.
For more information on how to parameterize Xtract components, see [Online Help: Parameterizing](https://help.theobald-software.com/en/xtract-for-alteryx/parameterizing). 


| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | *BAPI_REQUISITION_CREATE* (Create Purchase Requisition) <br>*BAPI_REQUISITION_GETDETAIL* (Display Purchase Requisition Details) | Xtract BAPI |

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
2. Select an SAP connection (2). If no SAP connection is available, create a new connection, see [Online Help: Creating an SAP Connection](https://help.theobald-software.com/en/xtract-for-alteryx/sap-connection).
3. Click **[Edit]** (3) to open the main window of the Xtract BAPI component.
4. In the main window of the component click ![magnifying-glass](/img/contents/icons/magnifying-glass.png). The window “Function Module Lookup” opens.
5. In the field **Function Name** (4) enter the name of the BAPI *BAPI_REQUISITION_CREATE*. Use wildcards (*), if needed.<br>
![create-purchase-requisition-lookup](/img/contents/xfa/create-purchase-requisition-lookup.png){:class="img-responsive"}
6. Click ![magnifying-glass](/img/contents/icons/magnifying-glass.png) and select the BAPI *BAPI_REQUISITION_CREATE* from the displayed list (5).
7. Click **[OK]**.
8. In the tab **Tables**, click ![glasses](/img/contents/icons/glasses.png) to look up the names and data types of table fields.
![create-purchase-requisition-table-param](/img/contents/xfa/create-purchase-requisition-table-param.png){:class="img-responsive"}
9. Prepare the input data. This example uses the following input:<br>
![create-purchase-requisition-input-table](/img/contents/xfa/create-purchase-requisition-input-table.png){:class="img-responsive"}
10. Select the export parameter NUMBER for the output.
![create-purchase-requisition-export-param](/img/contents/xfa/create-purchase-requisition-export-param.png){:class="img-responsive"}
11. Click **[OK]** to save the settings.

The Xtract BAPI component can now be used to create purchase requisitions in SAP.

### Loading Purchase Requisition Data from SAP

Follow the steps below to create a batch macro that loads purchase requisition data from SAP:
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
8. Click **[OK]**.
9. Click **[Edit Parameters]**. The window "Edit Runtime Parameters" opens.<br>
![load-purchase-requisition-runtime-parameter](/img/contents/xfa/load-purchase-requisition-runtime-parameter.png){:class="img-responsive"}
10. Click **[Add Scalar]** to define a new input parameter for the Xtract BAPI component.
This example uses a string parameter *Req_Number* to represent the purchase requisition number.
11. Click **[OK]**. The window "Edit Runtime Parameters" closes.
12. ...
![load-purchase-requisition-import-param](/img/contents/xfa/load-purchase-requisition-import-param.png){:class="img-responsive"}
13. Select the fields you want to add to the output of the Xtract ODP component. 
![load-purchase-requisition-table-parameter](/img/contents/xfa/load-purchase-requisition-table-parameter.png){:class="img-responsive"}

9. Navigate to the workflow configuration and set the workflow type to **Batch Macro*.
10. Save the workflow.
11. Add a **Control Parameter** tool from the *Interface* toolbox and label the parameter e.g., 
12. Connect the **Control Parameter** tools to the Xtract BAPI component. This creates the *Action* tool **Update Value** (2).
13. Select an **Update Value** tool and mark the corresponding Xtract parameter in the tree menu *Value or Attribute to Update* (3) to assign the control parameter.
14. Drag the **Macro Output** tool from the *Interface* toolbox onto the canvas to create an output for the batch macro (4).
15. Connect the Xtract BAPI component to the **Macro Output**.
16. Save the macro.

The macro can now be used to load purchase requisition data from SAP.


*****
#### Related Links
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-for-alteryx/bapi)
- [Online Help: Sample Workflows](https://help.theobald-software.com/en/xtract-for-alteryx/sample-workflows)
- [Online Help: Parameterizing](https://help.theobald-software.com/en/xtract-for-alteryx/parameterizing)