---
layout: page
title: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
description: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
permalink: /:collection/:path
weight: 7
---

This article shows how to manually install the function Z_XTRACT_IS_TABLE_JOIN. 

{: .box-note }
**Note:** A transport request for the Table Join component is available on request.


### Step 1 - DDIC Object
Create the following 5 structures (SE11-> DataType -> Create -> Structure):

1. ZXTRACTTABLEFIELDS
![Z_XTRACT_TABLE_JOIN_01](/img/contents/Z_XTRACT_TABLE_JOIN_01.png){:class="img-responsive"}
2. ZXTRACTTABLEJOINDEF
![Z_XTRACT_TABLE_JOIN_02](/img/contents/Z_XTRACT_TABLE_JOIN_02.png){:class="img-responsive"}
3. ZXTRACTTABLECODELINE
![Z_XTRACT_TABLE_JOIN_03](/img/contents/Z_XTRACT_TABLE_JOIN_03.png){:class="img-responsive"}
4. ZXTRACTRANGE
![Z_XTRACT_TABLE_JOIN_03_02](/img/contents/Z_XTRACT_TABLE_JOIN_03_02.png){:class="img-responsive"}
5. ZXTRACTSELFIELDS
![Z_XTRACT_TABLE_JOIN_03_03](/img/contents/Z_XTRACT_TABLE_JOIN_03_03.png){:class="img-responsive"}

### Step 2 - Create a new function module

Call transaction SE37 and create a new function module named Z_XTRACT_IS_TABLE_JOIN. <br>
You can use an existing function group or create a new one. This is also valid for the development class (Package). <br>

**IMPORTANT: In tab *Attributes* check *Remote Enabled*.**

![Z_XTRACT_TABLE_JOIN_04](/img/contents/Z_XTRACT_TABLE_JOIN_04.png){:class="img-responsive"}

### Step 3 - Parameters

1. Define the following import parameters: 
![Z_XTRACT_TABLE_JOIN_05](/img/contents/Z_XTRACT_TABLE_JOIN_05.png){:class="img-responsive"}
2. Define the following export parameters:
![Z_XTRACT_TABLE_JOIN_06](/img/contents/Z_XTRACT_TABLE_JOIN_06.png){:class="img-responsive"}
3. Define the following tables:
![Z_XTRACT_TABLE_JOIN_07](/img/contents/Z_XTRACT_TABLE_JOIN_07.png){:class="img-responsive"}

### Step 4 - Code

Use **[Ctrl + C]** and **[Ctrl + V]**to paste the attached code ([Z_XTRACT_IS_TABLE_JOIN_GLOBALDATA](/files/z_xtract_is_table_join_globaldata.txt)) into the Global Data of the function module (menu Goto -> Global Data). <br>
Use **[Ctrl + C]** and **[Ctrl + V]** to paste the attached ABAP source code ([Z_XTRACT_IS_TABLE_JOIN](/files/z_xtract_is_table_join.txt)) into the source code editor.

Save the function module and activate it.

****
#### Attachments

- [Z_XTRACT_IS_TABLE_JOIN_GLOBALDATA.txt (7.25 KB)](/files/z_xtract_is_table_join_globaldata.txt)
- [Z_XTRACT_IS_TABLE_JOIN.txt (115.89 KB)](/files/z_xtract_is_table_join.txt)
