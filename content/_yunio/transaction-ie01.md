---
layout: page
title: Working with Transaction IE01
description: Creating Equipment Using Transactions in yunIO
permalink: /:collection/:path
weight: 50
---

The following article shows how to use the integration type *Transaction* with transaction IE01 in yunIO.<br>
The depicted example application uses transaction IE01 to create new equipment in SAP.
For more information on creating equipment, see [SAP Help: Creating a Piece of Equipment](https://help.sap.com/viewer/f0e0dd7850e64947aa66a647f8d3af09/6.18.latest/en-US/bc78bb53707db44ce10000000a174cb4.html).


### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to create new equipment. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
  

### Create Equipment

Follow the steps below to create a new equipment in SAP.<br>

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction IE01 and press **[Start]**. A replicated SAP GUI of the transaction IE01 is displayed.<br>
![yunio-Transaction](/img/contents/yunio/transaction.png){:class="img-responsive"}
3. Edit the fields according to the kind of equipment you want to create e.g., enter a new equipment.
4. Click **[Submit]** to execute the action and continue to the next screen. All actions are logged in the GUI Steps section of the UI.
![yunio-Transaction-IE01](/img/contents/yunio/transaction-ie01.png){:class="img-responsive"}
5. Edit the data of your equipment or record screens for parameterization.<br>
All fields that need to be parameterized must be available in the section GUI Steps. 
Example: to parameterize a field in a specific tap or menu, the tab or menu must be accessed when recording the transaction.
6. Click **[Equipment] > [Save]** to save the new equipment in SAP.<br>
![yunio-Transaction-IE01-Save](/img/contents/yunio/transaction-save-equipment.png){:class="img-responsive"}
7. Click **[Save]** to save your actions. <br>
Alternatively, click **[Stop]** to start parameterizing, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).
8. Copy the URL of the service definition ( ![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition ( ![download-file](/img/contents/yunio/download.png) icon) to integrate the service in your workflow.<br>
For information on how to use yunIO services in Power Automate or Nintex, see [Integrating a yunIO Service with Power Automate](integrating-a-yunio-service-with-power-automate) or [Integrating a yunIO Service with Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex).
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive"}

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO e.g., *"Equipment number... not in external number interval"*.
These messages are not yunIO specific and should be treated accordingly.



******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [SAP Help: Creating a Piece of Equipment](https://help.sap.com/viewer/f0e0dd7850e64947aa66a647f8d3af09/6.18.latest/en-US/bc78bb53707db44ce10000000a174cb4.html).
