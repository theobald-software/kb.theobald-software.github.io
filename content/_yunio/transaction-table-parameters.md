---
layout: page
title: Working with Transactions - Table Parameters
description: Transactions Table Parameters
permalink: /:collection/:path
weight: 77
---

The following article shows how to pass tables as input parameters to *Transaction* services.<br>
The depicted example application uses the transaction VA02 to change a sales order in SAP, see [Working with Transaction VA02](./transaction-va02).

### Prerequisites

Use an SAP dialog user with sufficient access rights to edit sales orders for the SAP connection assigned to the service. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 


### Selecting a Table as an Input Parameter

1. Create a transaction service that uses tables. <br>
The depicted example uses a service that changes sales orders via transaction VA02, see [Working with Transaction VA02](./transaction-va02). 
2. Click ![change-sales-order](/img/contents/yunio/edit-cog-icon.png) to open the service. <br>
![change-sales-order](/img/contents/yunio/transaction-edit.png){:class="img-responsive"}
3. Click on the documented actions in the section *GUI Steps* to navigate to the screen that contains the table you want to parameterize.<br>
4. Click on the fields and tables that you want to parameterize. The window “Parameterize Element” opens. 
All fields that can be parameterized are highlighted in green when hovering over them.<br>
![table-parameters](/img/contents/yunio/table-parameter.gif){:class="img-responsive" style="border:1px solid black;"}
5. In the window “Parameterize Element”, select **Input** to override the content of the table when running the service. 
6. Enter a custom name for the parameter, e.g., *ITEMS*.<br>
![transaction-va02-order](/img/contents/yunio/transaction-va02-order.png){:class="img-responsive"}
7. Click **[OK]** to save the parameter. The window “Parameterize Element” closes.
8. Click **[Save]** to save the service.

{: .box-note }
**Note:** When defining input parameters, make sure to parameterize fields before they are submitted in the GUI steps. 
If you define an input parameter after a submit, the input is not submitted to SAP.

### Format of Input Tables

Table parameters are passed to the service in the http request body. <br>
In the request body, the columns of the table are represented by their SAP technical name, e.g., `RV45A-MABNR` = *Material* column, `RV45A-KWMENG` = *Order Quantity* column, etc.
You can look up the description of the SAP technical names in the OpenAPI/Swagger definition, e.g., [Swagger Editor](https://editor.swagger.io/).

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
            "VBAP-POSNR": "",
            "RV45A-MABNR": "",
            "RV45A-KWMENG": "",
            ...
        }
    },
    {
        "selected": false,
        "cells": {
            "VBAP-POSNR": "",
            "RV45A-MABNR": "",
            "RV45A-KWMENG": "",
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
</td>
</tr>
</table>

When passing a table to yunIO, only pass fields with values assigned. Delete all table fields that are not subject to change from the request body.<br>
Correct: `"RV45A-KWMENG": "5"`<br>
Incorrect: `"RV45A-KWMENG": ""`


### Running a Service with Table Parameters
1. Click ![copy-URL](/img/contents/yunio/copyURL.png) to copy the URL of the service definition or click ![download-file](/img/contents/yunio/download.png) to download the service definition.<br>
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive" }
2. Open the service in a tool that supports OpenAPI/Swagger definitions, e.g., [SwaggerHub Explore](https://explore.swaggerhub.com/). 
3. Use the `POST` method when integrating the service. The `GET` method does not support table parameters.
4. Open the request body of the service. All input parameters are listed in the request body.<br>
![change-sales-order-table-swagger-default](/img/contents/yunio/change-sales-order-table-swagger-default.png){:class="img-responsive"}
5. Delete all table entries that are not subject to change. 
6. Enter values for all fields that you want to overwrite, e.g., `"RV45A-MABNR": "M-01"`, `"RV45A-KWMENG": "5"`, etc.
The http request body must only contain table fields with valid input values.
The depicted example changes the order quantity of the first two items to 1 and 2:
```
{
    "ITEMS": [
        {
            "selected": false,
            "cells": {
                "RV45A-KWMENG": "1"
            }
        },
        {
            "selected": false,
            "cells": {
                "RV45A-KWMENG": "2"
            }
        }
    ]
}
```
6. Run the service. If the service run is successful, the response body contains a confirmation that the order was saved.<br>
![change-sales-order-table-swagger](/img/contents/yunio/change-sales-order-table-swagger.png){:class="img-responsive" width="900px"}
7. Open SAP to check if the changes in the sales order.<br>
![change-sales-order-table-sap](/img/contents/yunio/change-sales-order-table-sap.png){:class="img-responsive" width="900px"}

#### Adding new Items to a Table
When adding new items to a table, the existing table rows must be passed as empty to avoid overwriting existing content. <br>
The depicted example adds a new item at the 4th row of the table:

```
"ITEMS": [
    {
        "selected": false,
        "cells": { }
    },
    {
        "selected": false,
        "cells": { }
    },
    {
        "selected": false,
        "cells": { }
    },
    {
        "selected": false,
        "cells": {
            "VBAP-POSNR": "40",
            "RV45A-MABNR": "M-01",
            "RV45A-KWMENG": "5",
            "VBAP-VRKME": "PC"
         }
    }
]
```

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)