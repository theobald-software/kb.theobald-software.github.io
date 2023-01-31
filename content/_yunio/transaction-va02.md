---
layout: page
title: Working with Transactions
description: Creating Equipment Using Transactions in yunIO
permalink: /:collection/:path
weight: 45
---

This article shows how to use the integration type *Transaction* with transaction VA02 in yunIO.<br>
The following example applications use the transaction VA02 to change a sales order in SAP.
For more information on creating equipment, see [SAP Help: Creating a Piece of Equipment](https://help.sap.com/viewer/f0e0dd7850e64947aa66a647f8d3af09/6.18.latest/en-US/bc78bb53707db44ce10000000a174cb4.html).


### Prerequisites

The SAP connection asigned to a transaction service must use an SAP dialog user with enough access rights to create new equipment. 

{: .box-note }
**Note:** The integration type *Transaction* is currently marked as "Preview" and is not fully functional. 
Future versions will work with any SAP transaction code.

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature. 


### Update an Item Detail on a Sales Order

The following example uses a yunIO service to change the quantity item in a sales order in SAP.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).<br>

2. Enter the transaction VA02 and press **[Start]**. A replicated SAP GUI of the transaction VA02 is displayed.
![change-sales-order](/img/contents/yunio/change-sales-order.png){:class="img-responsive"}
3. Enter an order number between 1 - 4999999.<br>
If you do not know the order number, use the search criteria to find the sales order you want to edit.<br>
![change-sales-order2](/img/contents/yunio/change-sales-order2.png){:class="img-responsive"}
4. Click **[Submit]** to execute the action. All actions are logged in the *GUI Steps* section of the UI.
5. If a pop-op window opens in SAP, the message of the pop-up window is displayed in yunIO. In this example, the message "Consider the subsequent documents" is displayed.<br>
Click **[Continue]** to close the pop-up window and continue to the next screen.
![change-sales-order3](/img/contents/yunio/change-sales-order3.png){:class="img-responsive"}
6. Edit the items of the sales order, e.g., change the quantity item of the sales order.<br>
![change-sales-order4](/img/contents/yunio/change-sales-order4.png){:class="img-responsive"}
7. Click **[Submit]** to submit the changes to SAP.
8. Click **[Save]** to save your actions.

The changes in SAP are...

### Read Pricing Information based on the Price Calculation in VA02


### Creating Equipment

Follow the steps below to create an equipment that has a location and warranty assigned to it.<br>

1. Enter the transaction IE01 to create new equipment in the main input field (1). <br>
![yunio-Transaction](/img/contents/yunio/transaction.png){:class="img-responsive"}
2. Click **[Start]** to execute the transaction in your SAP system.<br>
All available fields from the SAP GUI are displayed in *Input Fields*.<br>
3. Edit the fields according to the kind of equipment you want to create e.g., enter a new equipment number (2).
![yunio-Transaction-IE01](/img/contents/yunio/transaction-ie01.png){:class="img-responsive"}
4. Select *Submit* from the list of available actions in the drop-down-menu (3).<br>
The drop-down-menu lists all available actions from the SAP GUI.
*Submit* corresponds to submitting input in the SAP GUI.
5. Click **[Next]** to execute the selected action. All actions are logged in the section *GUI Steps* (4).
5. Enter the general data of your equipment. 
6. Adding a location to the equipment: <br>Select *[TAB] Location* from the drop-down-menu (3) and click **[Next]**.
*[TAB] Location* corresponds to opening the Location tab in the SAP GUI.
Enter the location data for your equipment.
7. Adding a warranty to the equipment: <br>Select *[TAB] Warranty and Partner* from the drop-down-menu (3) and click **[Next]**.
*[TAB] Warranty and Partner* corresponds to opening the Warranty tab in the SAP GUI.
Enter the warranty data of your equipment.
8. Select *Save* from the drop-down-menu (3) and click **[Next]** to save the equipment.
9. Select *Exit* from the drop-down-menu (3) and click **[Next]** to end the process.
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
