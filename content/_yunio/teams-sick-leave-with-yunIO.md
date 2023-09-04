---
layout: page
title: Sync Microsoft Teams with SAP using Power Automate and yunIO
description: Sync Microsoft Teams with SAP using Power Automate and yunIO
permalink: /:collection/:path
weight: 46
---

The following article shows how to use forms in Microsoft Teams to send data to SAP.<br>
In the following scenario, a Teams form is used to manage an employee's sick leave in SAP.

### About
This article leads you through all necessary steps to set up the following process:

- When a sick leave is entered in a Microsoft Teams form, a Power Automate workflow is triggered. 
- The workflow starts an approval process.
- The workflow uses the data of the from to run a yunIO service that creates a sick leave in SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).<br>
Follow the steps below to set up a yunIO service that creates sick leaves in SAP:

{: .box-note }
**Note:** The parameters that are needed to create a sick leave are dependent on your customized SAP settings.

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. The depicted example uses the integration type *Transaction* for the service.
3. Record the SAP transaction PA30 to create a new sick leave in SAP, e.g., for an annual sick leave. <br>
animation
4. Parameters...
5. Click ![download-file](/img/contents/yunio/download.png) to download the service definition.<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }
6. Repeat the steps 3 to 5 to create a service for every relevant type of sick leave.

### Setup in Microsoft Teams

The setup in Teams requires the installation of the Teams app [Team Forms](https://teamforms.app/) from the Microsoft Teams app store.

1. Open the Team Forms template "Sick Leave Request".
2. Edit the mandatory input field **Leave type**.<br>
![teams-form-edit](/img/contents/yunio/teams-form-edit.png){:class="img-responsive" }
3. Open the tab *Data* and edit the labels and values  (1) to provide the correct input for SAP:

   | Leave Type in SAP | Value in SAP | 
   | :------ |:--- | 
   | Annual Leave | 0100 | 
   | Illness with certificate | 0200 | 
   | Parental Leave | 0600 | 
   | Unpaid Leave | 0620 | 
   | Sick child (unpaid) | 0550 |
4. Click **[Save]** to save the changes.<br>
![teams-form-leave](/img/contents/yunio/teams-form-leave.png){:class="img-responsive" }
5. ...

For more information on Team Forms, see [Team Forms Documentation](https://docs.teamforms.app/).

### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate#configuring-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a new item is added to the SharePoint list.
3. Add the yunIO connector created in step 1 to the workflow and map the purchase requisition data from SharePoint to the input parameters of yunIO.<br>
4. Make sure that the SharePoint input uses the right format, e.g., the delivery date must have the SAP format `YYYYmmDD` and the cost center must have 10 characters, including leading zeroes.
For conversion tips and code templates, see [Formats and Conversions in Power Automate](https://kb.theobald-software.com/yunio/conversion-in-power-automate).
5. Add a SharePoint **Update Item** tool to write the purchase requisition number from the yunIO Custom Connector back to the SharePoint list.<br>
![sharepoint-purchase-requisition2](/img/contents/yunio/sharepoint-purchase-requisition2.png){:class="img-responsive"}
7. Optional: Send notifications when a purchase requisition is created. 
8. Turn on the workflow.


### Triggering the Process

1. Open SharePoint and add a new purchase requisition.
2. The Power Automate workflow runs and creates the purchase requisition in SAP.
3. Check if the SAP purchase requisition number is written back to SharePoint.
![sharepoint-purchase-requisition](/img/contents/yunio/sharepoint-purchase-requisition.png){:class="img-responsive" }

