---
layout: page
title: Working with Transactions - Table Parameters
description: Transactions Table Parameters
permalink: /:collection/:path
weight: 77
---

This article shows how to pass tables as input parameters to *Transaction* services.<br>
The following example application uses the transaction VA02 to change a sales order in SAP, see [Working with Transaction VA02](./transaction-va02).

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to edit sales orders. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature. 

### Select a Table as an Input Parameter in yunIO

1. Create a transaction service that uses tables. <br>
This article uses a service created in [Working with Transaction VA02](./transaction-va02). The service changes sales orders via transaction VA02.
2. Click ![change-sales-order](/img/contents/yunio/edit-cog-icon.png) to open the service. <br>
![change-sales-order](/img/contents/yunio/transaction-edit.png){:class="img-responsive"}
3. Click on the documented actions in the section *GUI Steps* to navigate to the screen that contains the table you want to parameterize.<br>
4. Click on the table that you want to parameterize. The window “Parameterize Element” opens. 
All fields that can be parameterized are highlighted in green when hovering over them.<br>
![transaction-va02-table](/img/contents/yunio/transaction-va02-table.png){:class="img-responsive"}
5. In the window “Parameterize Element”, select **Input** to override the content of the table when running the service.
6. Enter a name for the parameter, e.g. *ITEMS*.<br>
![transaction-va02-order](/img/contents/yunio/transaction-va02-order.png){:class="img-responsive"}
7. Optional: Select **Output** to check if your input was successful.
8. Click **[OK]** to save the parameter. The window “Parameterize Element” closes.
9. Click **[Save]** to save the service.

### Format of Input Tables

Table parameters have the following structure:

<table>
<tr><th>
Table structure in the http request body
</th><th>
Table structure in OpenAPI/Swagger definition
</th></tr>
<tr><td>
<pre>
"ITEMS": [
    {
        "selected": false,
        "cells": {
            "VBAP-POSNR": "20",
            "RV45A-MABNR": "M-01",
            "RV45A-KWMENG": "5",
            ...
        }
    },
    {
        "selected": false,
        "cells": {
            "VBAP-POSNR": "30",
            "RV45A-MABNR": "M-02",
            "RV45A-KWMENG": "10",
            ...
        }
    }
    ]
</pre>
</td>
<td>
<pre>
ITEMS:
    type: array
    items:
      type: object
      properties:
        selected:
          type: boolean
        cells:
          type: object
          properties:
            VBAP-POSNR:
              description: Item
              type: string
            RV45A-MABNR:
              description: Material
              type: string
            RV45A-KWMENG:
              description: Order Quantity
              type: string
            ...
</pre>
</td></tr>
</table>

Table parameters are passed to the service in the http request body. 
Enter values for each column, e.g., `"VBAP-POSNR": "10"`, `"RV45A-MABNR": "M-01"`, `"RV45A-KWMENG": "5"`, etc.<br>
The columns are represented by their SAP technical name, e.g., `VBAP-POSNR` = column *Item*, `RV45A-MABNR` = column *Material*, `RV45A-KWMENG` = column *Order Quantity*, etc.

{: .box-note }
**Note:** In the http request body must only contain the table fields that have input values. Do not add fields without input in the http request body.<br>
Correct: `"VBAP-WERKS": "3000"`<br>
Incorrect: `"VBAP-WERKS": ""`

{: .box-tip }
**Tip:** You can look up the description of the SAP technical column names in the OpenAPI/Swagger definition, e.g., [Swagger Editor](https://editor.swagger.io/).

Example:<br>
![transaction-va02-order](/img/contents/yunio/table-input-requestbody.png){:class="img-responsive"}

### Run the Service
2. Copy the URL of the service definition (![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive" width="800px"}
2. Open the service in a tool that supports OpenAPI/Swagger definitions, e.g., [Swagger Inspector](https://inspector.swagger.io/). 
3. Use the `POST` method when integrating the service. The `GET` method does not support table parameters.
4. Open the request body of the service. All input parameters are listed in the request body.
5. Copy the ...
{
    "skipPopups": false,
    "Order": "16219",
    "Items": [
        {
            "selected": false,
            "cells": {

6. Enter values for each column, e.g., `"VBAP-POSNR": "10"`, `"RV45A-MABNR": "M-01"`, `"RV45A-KWMENG": "5"`, etc.<br>
The columns are represented by their SAP technical name, e.g., `VBAP-POSNR` = column *Item*, `RV45A-MABNR` = column *Material*, `RV45A-KWMENG` = column *Order Quantity*, etc.
You can look up the description of the SAP technical column names in the OpenAPI/Swagger definition.
7. Delete all table fields that do not have any input.


```
{
    "skipPopups": false,
    "Order": "16219",
    "Items": [
        {
            "selected": false,
            "cells": {
                "VBAP-POSNR": "20",
                "RV45A-MABNR": "M-01",
                "RV45A-KWMENG": "5",
                "VBAP-VRKME": "PC",
                "VBAP-ARKTX": "Sony Sunny01",
                "VBAP-PSTYV": "TAN",
                "VBAP-UEPOS": "0",
                "RV45A-PRGBZ": "D",
                "RV45A-ETDAT": "08.06.2023",
                "VBAP-WERKS": "3000",
                "KOMV-KBETR": "1200,00",
                "RV45A-KOEIN": "USD",
                "VBAP-PRCTR": "3500",
                "VBAP-ROUTE": "000001",
                "VBKD-INCO1": "CFR",
                "VBSTT-GBSTA_BEZ": "Completed",
                "VBKD-VALTG": "0"
            }
        }
    ]
}
```

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)