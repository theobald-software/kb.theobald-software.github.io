---
layout: page
title: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
description: Installation of the Function Module Z_XTRACT_IS_TABLE_JOIN
permalink: /:collection/:path
weight: 15
---

This article shows how to manually install the function Z_XTRACT_IS_TABLE_JOIN. 

{: .box-note }
**Note:** The Table Join component has been marked as *deprecated*. Use the Table component with custom function module Z_THEO_READ_TABLE for joining SAP tables.

### Installation with an SAP transport
The function module can be installed using the transport request *Z_XTRACT_IS_TABLE_JOIN-transport.zip*. <br> 
The zip file is provided by Theobald Software upon request.

### Manual installation of function module Z_XTRACT_IS_TABLE_JOIN

The Table Join component is used for joining several tables or views on the SAP side before data extraction.

Prerequisite for using the Table Join component is the installation of a custom function module on the SAP side.

### Create DDIC structures

In this step, five structures must be created via transaction *SE11*, see the following screenshots. <br>
The required text files are marked as paths.

File: *Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLEFIELDS.txt*
![Z_XTRACT_TABLE_JOIN_01](/img/contents/table_join_structure1.png){:class="img-responsive"}
File: *Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLEJOINDEF.txt*
![Z_XTRACT_TABLE_JOIN_02](/img/contents/table_join_structure2.png){:class="img-responsive"}
File: *Z_XTRACT_IS_TABLE_JOIN - ZXTRACTTABLECODELINE.txt*
![Z_XTRACT_TABLE_JOIN_03](/img/contents/table_join_structure3.png){:class="img-responsive"}
File: *Z_XTRACT_IS_TABLE_JOIN - ZXTRACTRANGE.txt*
![Z_XTRACT_TABLE_JOIN_04](/img/contents/table_join_structure4.png){:class="img-responsive"}
![Z_XTRACT_TABLE_JOIN_05](/img/contents/table_join_structure5.png){:class="img-responsive"}

### Create function module

1. Call transaction *SE80 - Object Navigator* to create a new function group, e.g. ZXTRACT.
![Create_new_function_group](/img/contents/create_function_group.png){:class="img-responsive"}
2. Call transaction *SE37* to create a new function module. The name should be *Z_XTRACT_IS_TABLE_JOIN*, but can be changed if necessary.  
3. Set the processing type of the module to *Remote-Enabled Module* (remote-enabled). 
![Table-Join_function_attributes](/img/contents/table-join_attributes.png){:class="img-responsive"}
4. Create the module signature according to the following screenshots.
![Table-Join_function_import](/img/contents/table-join_import.png){:class="img-responsive"}
![Table-Join_function_export](/img/contents/table-join_export.png){:class="img-responsive"}
![Table-Join_function_tables](/img/contents/table-join_tables.png){:class="img-responsive"}
5. Copy the source code with **[Ctrl+C]** and **[Ctrl+V]** from the file *Z_XTRACT_IS_TABLE_JOIN.txt* into the code editor - tab *Source Code*.
![Table-Join_function_source](/img/contents/table-join_source.png){:class="img-responsive"}
6. Copy the source code with **[Ctrl+C]** and **[Ctrl+V]** from the file *Z_XTRACT_IS_TABLE_JOIN - Global Data.txt* into the code editor **Goto > Global Data**. 
7. Save and activate the module.
