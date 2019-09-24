---
layout: page
title: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
description: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This article describes how to install the function Z_XTRACT_IS_TABLE_JOIN.

### Step-by-step Guide - How to install Z_XTRACT_IS_TABLE_JOIN

**Step 1 - DDIC Object**<br>
First we need 5 structures (SE11-> DataType -> Create -> Structure). Please have a look at the screenshot below.

![Z_XTRACT_TABLE_JOIN_01](/img/contents/Z_XTRACT_TABLE_JOIN_01.png){:class="img-responsive"}

![Z_XTRACT_TABLE_JOIN_02](/img/contents/Z_XTRACT_TABLE_JOIN_02.png){:class="img-responsive"}

![Z_XTRACT_TABLE_JOIN_03](/img/contents/Z_XTRACT_TABLE_JOIN_03.png){:class="img-responsive"}

![Z_XTRACT_TABLE_JOIN_03_02](/img/contents/Z_XTRACT_TABLE_JOIN_03_02.png){:class="img-responsive"}

![Z_XTRACT_TABLE_JOIN_03_03](/img/contents/Z_XTRACT_TABLE_JOIN_03_03.png){:class="img-responsive"}

**Step 2 – Create a new function module**

Call transaction SE37 and create a new function module named Z_XTRACT_IS_TABLE_JOIN. 
You can use an existing function group or create a new one. 
This is also valid for the development class (Package).

**IMPORTANT**: In tab “Attributes” check “**Remote Enabled**”.

![Z_XTRACT_TABLE_JOIN_04](/img/contents/Z_XTRACT_TABLE_JOIN_04.png){:class="img-responsive"}

**Step 3 – Parameters**

Define the import parameters: 

![Z_XTRACT_TABLE_JOIN_05](/img/contents/Z_XTRACT_TABLE_JOIN_05.png){:class="img-responsive"}

Define the export parameters:

![Z_XTRACT_TABLE_JOIN_06](/img/contents/Z_XTRACT_TABLE_JOIN_06.png){:class="img-responsive"}

Define the tables:

![Z_XTRACT_TABLE_JOIN_07](/img/contents/Z_XTRACT_TABLE_JOIN_07.png){:class="img-responsive"}

**Step 4 - Code**

1. You need to fill in the code attached (Z_XTRACT_IS_TABLE_JOIN_GLOBALDATA) into the Global Data of the function module (menu Goto -> Global Data).
2. The ABAP source code is placed in the attached file Z_XTRACT_IS_TABLE_JOIN.txt. Use Ctrl + C and Ctrl + V to paste the code in the source code editor. Save the function module and activate it.

Attachments 	-------------------------------------------

[z_xtract_is_table_join_globaldata.txt (7.25 KB)](/files/z_xtract_is_table_join_globaldata.txt)

[z_xtract_is_table_join.txt (115.89 KB)](/files/z_xtract_is_table_join.txt)
