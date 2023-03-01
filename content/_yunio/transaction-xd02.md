---
layout: page
title: Working with Transaction XD02
description: Working with Transaction XD02
permalink: /:collection/:path
weight: 55
---

This article shows how to use the integration type *Transaction* with transaction XD02 in yunIO.<br>
The following example application uses the transaction XD02 to change customer master data in SAP.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to create new equipment. 

{: .box-note }
**Note:** The integration type *Transaction* is currently marked as "Preview" and is not fully functional. 
Future versions will work with any SAP transaction code.

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
Therefore knowing how to navigate the SAP GUI makes it easier to use the transaction feature. 

### Update Customer Master Data

The following example application uses a yunIO service to change customer master data in SAP.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction XD02 and press **[Start]**. A replicated SAP GUI of the transaction XD02 is displayed.
![change-customer-master](/img/contents/yunio/change-customer-master.png){:class="img-responsive"}
3. Enter a customer number. This input can be replaced with a runtime parameter after the transaction is recorded.
4. Click **[Submit]** to execute the action and continue to the next screen. All actions are logged in the *GUI Steps* section of the UI. <br>
![change-customer-master2](/img/contents/yunio/change-customer-master2.png){:class="img-responsive" }
5. Edit the customer data or record screens for parameterization.<br>
All fields that need to be parameterized must be available in the section *GUI Steps*. Example: to parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.
6. Click **[Save]** to save your actions. <br>
Alternatively, click **[Stop]** to start parameterizing, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)