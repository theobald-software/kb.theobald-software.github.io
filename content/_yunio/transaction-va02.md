---
layout: page
title: Working with Transaction VA02
description: Working with Transaction VA02
permalink: /:collection/:path
weight: 55
---

This article shows how to use the integration type *Transaction* with transaction VA02 in yunIO.<br>
The following example application uses the transaction VA02 to change a sales order in SAP.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to create new equipment. 

{: .box-note }
**Note:** The integration type *Transaction* is currently marked as "Preview" and is not fully functional. 
Future versions will work with any SAP transaction code.

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature. 

### Update Items in a Sales Order

The following example application uses a yunIO service to change items in a sales order in SAP.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction VA02 and press **[Start]**. A replicated SAP GUI of the transaction VA02 is displayed.
![change-sales-order](/img/contents/yunio/change-sales-order.png){:class="img-responsive"}
3. Enter an order number between 1 - 4999999.<br>
If you do not know the order number, use the search criteria to find the sales order you want to edit.<br>
![change-sales-order2](/img/contents/yunio/change-sales-order2.png){:class="img-responsive" width="850px"}
4. Click **[Submit]** to execute the action and to continue to the next screen. All actions are logged in the *GUI Steps* section of the UI.
5. If a pop-op window opens in SAP, the message of the pop-up window is displayed in yunIO. In this example, the message "*Consider the subsequent documents*" is displayed.<br>
Click **[Continue]** to close the pop-up window and continue to the next screen.
![change-sales-order3](/img/contents/yunio/change-sales-order3.png){:class="img-responsive" width="850px"}
6. Edit the sales order, e.g., change the quantity item, pricing coditions, etc.
7. Click **[Submit]** to submit the changes to SAP.<br>
![change-sales-order4](/img/contents/yunio/change-sales-order4.png){:class="img-responsive"}
8. Click **[Save]** to save your actions.

The changes are now available in SAP.

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
