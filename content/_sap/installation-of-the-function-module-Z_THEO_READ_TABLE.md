---
layout: page
title: Installation of the function module Z_THEO_READ_TABLE
description: Installation of the Function Module Z_THEO_READ_TABLE
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/xtract-is/sap-customizing/custom-function-module-for-table-extraction) for further information.

This article describes how to manually install the custom function module Z_THEO_READ_TABLE.

### Step-by-step Guide - How to install Z_THEO_READ_TABLE

#### Step 1 - Create DDIC Objects

First we need to create two structures (SE11-> DataType -> Create -> Structure). Please have a look at the screenshots below.
The definition of those structures can also be found in the ABAP folder inside the installation directory of our software, e.g. *C:\Program Files\XtractIS\ABAP*.
You can simply copy the content of the files *Z_THEO_READ_TABLE - ZTHEOTABLEFIELDS.txt* and *Z_THEO_READ_TABLE - ZTHEOTABLEJOINDEF.txt* and paste it in the new structure. 


![Z_THEO_READ_TABLE_01](/img/contents/Z_THEO_READ_TABLE_ZTHEOTABLEFIELDS.png){:class="img-responsive"}

![Z_THEO_READ_TABLE_02](/img/contents/Z_THEO_READ_TABLE_ZTHEOTABLEJOINDEF.png){:class="img-responsive"}


#### Step 2 – Create a new function module

Call transaction SE37 and create a new function module named Z_THEO_READ_TABLE or give it any different name of your choice. 
You can use an existing function group and development class (Package) or create a new one. 

**IMPORTANT**: In the *Attributes* tab check *Remote-Enabled Module*.

![Z_THEO_READ_TABLE_04](/img/contents/Z_THEO_READ_TABLE_remote_enabled.png){:class="img-responsive"}

#### Step 3 – Parameters and Exceptions

Define the import parameters: 

![Z_THEO_READ_TABLE_05](/img/contents/Z_THEO_READ_TABLE_import_parameters.png){:class="img-responsive"}

Define the tables parameters:

![Z_THEO_READ_TABLE_07](/img/contents/Z_THEO_READ_TABLE_tables_parameters.png){:class="img-responsive"}

Define the exceptions:

![Z_THEO_READ_TABLE_07](/img/contents/Z_THEO_READ_TABLE_exceptions.png){:class="img-responsive"}

#### Step 4 - Code

The ABAP source code can be found in the ABAP folder inside the installation directory of our software, e.g. *C:\Program Files\XtractIS\ABAP*.

**IMPORTANT**: For SAP systems equal to or above 7.40 SP5 (SAP Component *SAP_ABA*) use the file *Z_THEO_READ_TABLE.txt*. For all other earlier SAP releases use the file *Z_THEO_READ_TABLE - before-7.40-SP05.txt*.

Use Ctrl + C and Ctrl + V to paste the code in the source code editor. Save the function module and activate it.

