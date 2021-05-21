---
layout: page
title: Manual Installation of Custom Funtion Modules
description: Instructions on how to manually install Custom Funtion Modules
permalink: /:collection/:path
weight: 14
---

This article shows how to manually install the function modules Z_XTRACT_IS_TABLE and Z_XTRACT_IS_REMOTE_REPORT in your SAP system. 

{: .box-note }
**Note:** For more information on custom function modules and transport requests, refer to the [Online Help](https://help.theobald-software.com/en/xtract-universal/sap-customizing).


### Install Z_XTRACT_IS_TABLE

1. Create a new function module in SAP:<br>
Call transaction SE37 and create a new function module named "Z_XTRACT_IS_TABLE". You can use an existing function group or create a new one. 
This is also valid for the development class (Package).<br>
2. In the tab *Attributes* check *Remote Enabled*.
![Z-Custom-Funcion-01](/img/contents/Z_XTRACT_IS_TABLE00.png){:class="img-responsive" }
3. Define the following import parameters:
![Z-Custom-Function-02](/img/contents/Z_XTRACT_IS_TABLE01.png){:class="img-responsive" }
4. Define the following tables parameters:
![Z-Custom-Function-03](/img/contents/Z_XTRACT_IS_TABLE02.png){:class="img-responsive" }
5. Define the following exceptions:
![Z-Custom-Function-04](/img/contents/Z_XTRACT_IS_TABLE03.png){:class="img-responsive" }
6. Use **[Ctrl + C]** and **[Ctrl + V]** to paste the attached ABAP source code [Z_XTRACT_IS_TABLE.txt](/files/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"} into the source code editor.
7. Save the function module and activate it.

### Install Z_XTRACT_IS_REMOTE_REPORT 

1. Create a new function module in SAP:<br> 
Call transaction SE37 and create a new function module named "Z_XTRACT_IS_REMOTE_REPORT". You can use an existing function group or create a new one. 
This is also valid for the development class (Package).<br> 
2. In the tab *Attributes* check *Remote Enabled*. 
![Report_function_attributes](/img/contents/report_function_attributes.png){:class="img-responsive"}
3. Define the following import parameters:
![Report_function_import](/img/contents/report_function_import.png){:class="img-responsive"}
4. Define the following export parameters:
![Report_function_export](/img/contents/report_function_export.png){:class="img-responsive"}
5. Define the following tables parameters:
![Report_function_tables](/img/contents/report_function_tables.png){:class="img-responsive"}
6. Define the following exceptions:
![Report_function_exceptions](/img/contents/report_function_exceptions.png){:class="img-responsive"}
6. Use **[Ctrl + C]** and **[Ctrl + V]** to paste the attached ABAP source code [Z_XTRACT_IS_REMOTE_REPORT.txt](/files/Z_XTRACT_IS_REMOTE_REPORT.txt){:download="Z_XTRACT_IS_REMOTE_REPORT"} into the source code editor.
7. Save the function module and activate it.

{: .box-tip }
**Tip:** The functionality of the module Z_XTRACT_IS_REMOTE_REPORT can be understood from reading the source code. All steps for execution, job monitoring and spool retrieval are commented in the source code.

****
#### Attachments

- [Z_XTRACT_IS_TABLE.txt (6.91 KB](/files/Z_XTRACT_IS_TABLE.txt){:download="Z_XTRACT_IS_TABLE"}
- [Z_XTRACT_IS_REMOTE_REPORT.txt (8.48 KB)](/files/Z_XTRACT_IS_REMOTE_REPORT.txt){:download="Z_XTRACT_IS_REMOTE_REPORT"}
