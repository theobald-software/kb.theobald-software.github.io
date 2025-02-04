---
layout: page
title: Working with Transaction XD02
description: Working with Transaction XD02
permalink: /:collection/:path
weight: 55
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for yunIO.<br>
Make sure to use the samples within the new [HelpCenter for yunIO](https://helpcenter.theobald-software.com/yunio/knowledge-base).

The following article shows how to use the integration type *Transaction* with transaction XD02 in yunIO.<br>
The depicted example application uses the transaction XD02 to change customer master data in SAP.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to edit customer master data. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
  

### Update Customer Master Data

The depicted example application uses a yunIO service to change customer master data in SAP.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction XD02 and press **[Start]**. A replicated SAP GUI of the transaction XD02 is displayed.
![change-customer-master](/img/contents/yunio/change-customer-master.png){:class="img-responsive"}
3. Enter a customer number. This input can be replaced with a runtime parameter after the transaction is recorded.
4. Click **[Submit]** to execute the action and continue to the next screen. All actions are logged in the *GUI Steps* section of the UI. <br>
![change-customer-master2](/img/contents/yunio/change-customer-master2.png){:class="img-responsive" }
5. Edit the customer data or record screens for parameterization.<br>
All fields that need to be parameterized must be available in the section *GUI Steps*. Example: to parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.
7. Click **[Customer] > [Save]** to save the changes in SAP.<br>
![change-customer-master4](/img/contents/yunio/change-customer-master4.png){:class="img-responsive"}
6. Click **[Save]** to save your actions. <br>
Alternatively, click **[Stop]** to start parameterizing, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).
7. Copy the URL of the service definition ( ![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition ( ![download-file](/img/contents/yunio/download.png) icon) to integrate the service in your workflow.<br>
For information on how to use yunIO services in Power Automate or Nintex, see [Integrating a yunIO Service with Power Automate](integrating-a-yunio-service-with-power-automate) or [Integrating a yunIO Service with Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex).
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive"}


{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)
