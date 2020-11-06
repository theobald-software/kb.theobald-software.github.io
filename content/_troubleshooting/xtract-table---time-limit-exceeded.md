---
layout: page
title: Xtract Table - Time Limit Exceeded
description: Xtract Table - Time Limit Exceeded
permalink: /:collection/:path
weight: 9
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

### Error

The extraction of an SAP table is aborted and terminated with the following error:

>RfcReceiveEx failed(RFC_SYS_EXCEPTION) RFC_ERROR_SYSTEM_FAILURE - Time limit exceeded

### Reason

The system-wide SAP parameter `rdisp/max_wprun_time` for the maximum duration of RFC connections is exceeded. This termination is basically controlled by the SAP source system. <br>
The following extract from the SAP documentation and example screenshot from transaction RZ11.

![excerp_sap_parameter_documentation](/img/contents/excerp_sap_parameter_documentation.png){:class="img-responsive"}

![rdisp_max_wprun_time](/img/contents/rdisp_max_wprun_time.png){:class="img-responsive"}

This limitation mainly affects very large or growing SAP tables.

### Solution

The following options are available to avoid the above mentioned error. The following alternatives are to be understood as either or approaches.

- Instead of executing the extraction in a dialog mode, the extraction can be executed as a background job with the help of the custom function module Z_THEO_READ_TABLE in version 2.10. Import the function module into the SAP source system and activate the background function in the extraction settings. 
The transport request for the custom function module Z_THEO_READ_TABLE can be found in the following installation path: `C:\Program Files\[Xtract Product]\ABAP\Z_THEO_READ_TABLE-transport.zip`.
![Table-Extraction-Settings](/img/contents/Table-Extraction-Settings.png){:class="img-responsive"}

-  Manual increase of the SAP parameter by the SAP Basis team. 

{: .box-note }
**Note:** This is a system-wide adaptation of the RFC runtime parameter `rdisp/max_wprun_time`.



***********
#### Related Links

- [Customer portal](https://my.theobald-software.com)
- [Installing the ABAP Framework Z_THEO_READ_TABLE](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-table-extraction#installing-the-abap-framework-z_theo_read_table)
- [How to import an SAP transport request](https://kb.theobald-software.com/sap/how-to-import-an-sap-transport-request-with-the-transport-management-system-stms)
