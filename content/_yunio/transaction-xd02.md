---
layout: page
title: Working with Transaction XD02
description: Working with Transaction XD02
published: false
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
3. Enter a customer number.<br>
If you do not know the customer number, use the search button to find the customer you want to edit.
4. Click **[Continue]** to execute the action and to continue to the next screen. All actions are logged in the *GUI Steps* section of the UI.<br>
![change-customer-master2](/img/contents/yunio/change-customer-master2.png){:class="img-responsive" }
6. Edit the customer data, e.g., change the address, payment method, etc.
7. Click **[Submit]** to submit the changes to SAP.<br>
![change-customer-master3](/img/contents/yunio/change-customer-master3.png){:class="img-responsive"}
8. Click **[Save]** to save your actions.

The changes are now available in SAP.

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
