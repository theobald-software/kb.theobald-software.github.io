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
9. Click **[Submit]** to save any changes in SAP.
10. Click **[Save]** to save the service.


### Format the Input Table

1. Copy or download the OpenAPI/Swagger definition of the service.
2. Open the service in a tool that supports OpenAPI/Swagger definitions, e.g., [Swagger Inspector](https://inspector.swagger.io/). 
3. Make sure to use the `POST` method when integrating the service. `GET` does not support table parameters.
4. Open the request body of the service. All input parameters are listed in the request body.<br>
Table parameters have the following structure

```
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
		   VBAP-VRKME:
			description: '@\QSales Unit@Un'
			type: string
		   VBAPD-EPMEH:
			description: '@\QSchedule Lines Exist@S'
			type: string
		   VBAP-ARKTX:
			description: Description
			type: string
		   VBAP-KDMAT:
			description: Customer Material Numb
			type: string
```

```
{
    "skipPopups": false,
    "AUFTRAG": [
        {
            "selected": false,
            "cells": { }
        },
        {
            "selected": false,
            "cells": {
                "VBAP-POSNR": "11",
                "RV45A-MABNR": "TG11",
                "RV45A-KWMENG": "5"
            }
        }
    ]
}
```

### Run the Service



******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)