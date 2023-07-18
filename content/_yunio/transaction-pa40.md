---
layout: page
title: Working with Transaction PA40
description: Working with Transaction PA40
permalink: /:collection/:path
weight: 55
---

The following article shows how to use the integration type *Transaction* with transaction PA40 in yunIO.<br>
The depicted example application uses the transaction PA40 to define personnel actions in SAP.

### Prerequisites

The SAP connection assigned to a transaction service must use an SAP dialog user with enough access rights to edit customer master data. 

{: .box-tip }
**Tip:** The transaction feature of yunIO offers the same functionalities as the SAP GUI. 
  

### Create a new Employee in SAP

The depicted example application uses a yunIO service to create a new employee in SAP.

{: .box-note }
**Note:** The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. Create a new Service with the integration type *Transaction*. For more information on creating a service, see [Creating a Service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service).
2. In the transaction service enter the transaction PA40 and press **[Start]**. A replicated SAP GUI of the transaction PA40 is displayed.
![personnel-actions](/img/contents/yunio/personnel-actions.png){:class="img-responsive"}
3. Enter a start date for the new employee in the format `DD.mm.YYYY`. This input can be replaced with a runtime parameter after the transaction is recorded.
4. Select the action type **Hiring**.
5. Click **Execute** to execute the action and continue to the next screen. All actions are logged in the *GUI Steps* section of the UI. <br>
![personnel-actions1](/img/contents/yunio/personnel-actions1.png){:class="img-responsive"}
6. Fill in the data of the new employee.
7. Click **[Submit]** to check if the input is valid.
8. Click **[Save]** to save the employee data in SAP and to continue to the next screen.<br>
![personnel-actions2](/img/contents/yunio/personnel-actions2.png){:class="img-responsive"}
9. Optional: If a pop-op window opens in SAP, the message of the pop-up window is displayed in yunIO. 
Click **[Continue]** to close any pop-up windows and continue to the next screen.
10. Once all necessary data is entered, click **[Infotype] > [Exit]** to stop the input. Example:<br>
![personnel-actions](/img/contents/yunio/pa40.gif){:class="img-responsive" style="border:1px solid black;"}
11. Click **[Save]** to save your actions. <br>
Alternatively, click **[Stop]** to start parameterizing, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).
12. Copy the URL of the service definition ( ![copy-URL](/img/contents/yunio/copyURL.png) icon) or download the service definition ( ![download-file](/img/contents/yunio/download.png) icon) to integrate the service in your workflow.<br>
For information on how to use yunIO services in Power Automate or Nintex, see [Integrating a yunIO Service with Power Automate](integrating-a-yunio-service-with-power-automate) or [Integrating a yunIO Service with Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex).
![yunio-Services](/img/contents/yunio/yunio-run-services.png){:class="img-responsive"}

<!---
Reason for action 06 -> new Hire
Position 50001799 -> Service and Support engineer
Personnel area 1400 -> Stuttgart
EE group 1 -> Active
EE subgroup DN -> monthly wage earner
-->

{: .box-note }
**Note:** When using *Transaction*, warnings and error messages from SAP are displayed in yunIO.
These messages are not yunIO specific and should be treated accordingly.

******

#### Related Links
- [yunIO Help: Getting Started](https://help.theobald-software.com/en/yunio/getting-started)
- [yunIO Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions)
