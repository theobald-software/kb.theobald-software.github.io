---
layout: page
title: Working with Transaction IE01
description: Creating Equipment Using Transactions in yunIO
permalink: /:collection/:path
weight: 50
---

This article shows how to use the integration type *Transaction* in yunIO.<br>
The following example application uses transactions to create new equipment in SAP.
For more information on creating equipment, see [SAP Help: Creating a Piece of Equipment](https://help.sap.com/viewer/f0e0dd7850e64947aa66a647f8d3af09/6.18.latest/en-US/bc78bb53707db44ce10000000a174cb4.html).


### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to create new equipment. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature. 

### Creating Equipment

Follow the steps below to create an equipment that has a location and warranty assigned to it.<br>

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction IE01 to create new equipment (1). <br>
![yunio-Transaction](/img/contents/yunio/transaction.png){:class="img-responsive"}
3. Click **[Start]** to execute the transaction in your SAP system.<br>
All available fields from the SAP GUI are displayed in *Input Fields*.<br>
4. Edit the fields according to the kind of equipment you want to create e.g., enter a new equipment number (2).
![yunio-Transaction-IE01](/img/contents/yunio/transaction-ie01.png){:class="img-responsive"}
5. Select *Submit* from the list of available actions in the drop-down-menu (3).<br>
The drop-down-menu lists all available actions from the SAP GUI.
*Submit* corresponds to submitting input in the SAP GUI.
6. Click **[Next]** to execute the selected action. All actions are logged in the section *GUI Steps* (4).
7. Enter the general data of your equipment. 
8. Adding a location to the equipment: <br>Select *[TAB] Location* from the drop-down-menu (3) and click **[Next]**.
*[TAB] Location* corresponds to opening the Location tab in the SAP GUI.
Enter the location data for your equipment.
9. Adding a warranty to the equipment: <br>Select *[TAB] Warranty and Partner* from the drop-down-menu (3) and click **[Next]**.
*[TAB] Warranty and Partner* corresponds to opening the Warranty tab in the SAP GUI.
Enter the warranty data of your equipment.
10. Select *Save* from the drop-down-menu (3) and click **[Next]** to save the equipment.
11. Select *Exit* from the drop-down-menu (3) and click **[Next]** to end the process.
The following actions are logged in *GUI Steps*:<br>
![yunio-GUI-Steps](/img/contents/yunio/transaction-guisteps.png){:class="img-responsive"}

Open SAP and check if the new equipment is available.

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [SAP Help: Creating a Piece of Equipment](https://help.sap.com/viewer/f0e0dd7850e64947aa66a647f8d3af09/6.18.latest/en-US/bc78bb53707db44ce10000000a174cb4.html).
