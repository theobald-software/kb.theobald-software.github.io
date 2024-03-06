---
layout: page
title: TableCDC Initial Table Load Timeout
description: TableCDC Initial Table Load Timeout
permalink: /:collection/:path
weight: 15
progressstate: 5
---

The following article shows how to handle the initial table load for delta extractions using the Table component.
The article applies in the following situation:

- You run the TableCDC component on SAP releases < 7.10
- The option **Extract table on first run** (Delta initialization) is activate.
- The delta initialization takes longer than the maximum processing time specified in the SAP profile parameter **rdisp/max_w**.
- The extraction aborts with an error message, e.g., `ERPConnect.ABAPRuntimeException: RfcInvoke failed(RFC_ABAP_RUNTIME_FAILURE): TIME_OUT - Time limit exceeded`.


{: .box-note}
**Note:** The custom function module /THEO/READ_TABLE used by the Table CDC component to extract the table does not support background mode on SAP releases < 7.10.
The background mode would avoid the timeout mentioned above.

### Recommended Workflow


To avoid timeouts it is recommended to execute the initial table load using the Table component.

1. Set up TableCDC. Make sure the option **Extract table on first run** is deactivated.<br>
![table-cdc-delta-init](/img/contents/xu/table-cdc-delta-init.png){:class="img-responsive"}
2. Run the TableCDC component to initialize the delta extractions before extracting the initial table with the Table component. 
This ensures that no data is missed between table extraction and delta initialization.
3. Set up a regular table extraction with the Table component. Make sure to select an SAP standard function module, e.g., RFC_READ_TABLE.<br>
![table-cdc-initial-table-load-extraction-settings](/img/contents/xu/table-cdc-initial-table-load-extraction-settings.png){:class="img-responsive"}
4. Run the table extraction.

****

#### Related Links

- [Documentation: Defining a Table CDC Extraction](https://help.theobald-software.com/en/xtract-universal/table-cdc/extract-table-cdc)
- [Documentation: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/table/extract-table-data)
- [Documentation: Table Extraction Settings - Function modules and Background Jobs](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings#function-module)
