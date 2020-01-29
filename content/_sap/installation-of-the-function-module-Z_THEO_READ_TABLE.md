---
layout: page
title: Installation of the function module Z_THEO_READ_TABLE
description: Installation of the Function Module Z_THEO_READ_TABLE
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/xtract-is/sap-customizing/custom-function-module-for-table-extraction) for further information.

This article describes how to manually install the custom function module Z_THEO_READ_TABLE **for SAP releases below 7.4 SP5.** <br>

<div class="alert alert-info">
  <i class="fas fa-info-circle"></i> <strong>Note:</strong> We recommend that you import the function module into the SAP system using the transport requests provided in the ABAP subfolder.
</div>


## Step-by-step Guide - Z_THEO_READ_TABLE up to version 1.12

### Step 1 - Create DDIC Objects

First create two structures (SE11-> DataType -> Create -> Structure). Please have a look at the screenshots below.


![Z_THEO_READ_TABLE_01](/img/contents/Z_THEO_READ_TABLE_ZTHEOTABLEFIELDS.png){:class="img-responsive"}

![Z_THEO_READ_TABLE_02](/img/contents/Z_THEO_READ_TABLE_ZTHEOTABLEJOINDEF.png){:class="img-responsive"}


### Step 2 – Create a new function module

Call transaction SE37 and create a new function module named Z_THEO_READ_TABLE. 
You can use an existing function group and development class (Package) or create a new one. 

**IMPORTANT**: In the *Attributes* tab check *Remote-Enabled Module*.

![Z_THEO_READ_TABLE_04](/img/contents/Z_THEO_READ_TABLE_remote_enabled.png){:class="img-responsive"}

### Step 3 – Parameters and Exceptions

Define the import parameters: 

![Z_THEO_READ_TABLE_05](/img/contents/Z_THEO_READ_TABLE_import_parameters.png){:class="img-responsive"}

Define the tables parameters:

![Z_THEO_READ_TABLE_07](/img/contents/Z_THEO_READ_TABLE_tables_parameters.png){:class="img-responsive"}

Define the exceptions:

![Z_THEO_READ_TABLE_07](/img/contents/Z_THEO_READ_TABLE_exceptions.png){:class="img-responsive"}

### Step 4 - Code

The ABAP source code is provided by Theobald Software upon request.

Use Ctrl + C and Ctrl + V to paste the code in the source code editor. Save the function module and activate it.




