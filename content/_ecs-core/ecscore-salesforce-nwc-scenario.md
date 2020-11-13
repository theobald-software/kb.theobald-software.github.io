---
layout: page
title: Sync Salesforce to SAP with Nintex Workflow Cloud and ECS Core
description: Sync Salesforce to SAP with Nintex Workflow Cloud and ECS Core
permalink: /:collection/:path
weight: 3
---

In this article, a scenario is described, where a Salesforce account is synchronized in near-real time to SAP, where an SAP customer is created and his number is written back to Salesforce using the following tools:

- SAP ECC system on Premise
- ECS Core for SAP Integration in cloud scenarios
- Salesforce
- Nintex Workflow Cloud NWC as a workflow solution

ECS Core enables you to build powerful and sophisticated cloud applications for SAP on Premise. It allows you to integrate your cloud-based apps with SAP. For that ECS Core uses only outbound connections. It pulls the pending requests from the cloud, sends the query to the SAP system for execution and then sends the SAP result back onto the cloud service.

**Step 1: Define the Connection to the SAP system**
In ECS Core define the connection to your SAP ECC system. This connection will be used to create the SAP customer.

![NWC_SALESFORCE_01](/img/contents/ecscore/ecscore_nwc_salesforce_01.png){:class="img-responsive"}

**Step 2: Use ECS Core to provide REST Service to create SAP customers**
The Web Service Designer for ECS Core is used to create a REST Service *CreateSAPCustomer* based on a default SAP function module to create customer master data. The REST service has different input parameters about the customers and returns the number of the created SAP customer.

![NWC_SALESFORCE_02](/img/contents/ecscore/ecscore_nwc_salesforce_02.png){:class="img-responsive"}

![NWC_SALESFORCE_03](/img/contents/ecscore/ecscore_nwc_salesforce_03.png){:class="img-responsive"}

Deploy the REST web service then it's ready to be consumed in the cloud.

![NWC_SALESFORCE_04](/img/contents/ecscore/ecscore_nwc_salesforce_04.png){:class="img-responsive"}

**Step 3: Customize your Salesforce Account to provide related fields such as SAP Customer Number**
In the Salesforce accounts you need to creat some new fields to store the SAP customer number and further details required to create the SAP customer, e.g. SAP Company Code or related sales data like sales organization.

![NWC_SALESFORCE_05](/img/contents/ecscore/ecscore_nwc_salesforce_05.png){:class="img-responsive"}

**Step 4: Use NWC to define a workflow to trigger Salesforce Account Changes**
As a workflow solution, Nintex Workflow Cloud is used to trigger any account changes in Salesforce, where the account type is changed from prospect to customer and no related SAP customer exists. In this case the SAP customer will be created using the Salesforce account data. When the operation is successful, the Salesforce account is updated with the SAP customer number.

![NWC_SALESFORCE_06](/img/contents/ecscore/ecscore_nwc_salesforce_06.png){:class="img-responsive"}

![NWC_SALESFORCE_07](/img/contents/ecscore/ecscore_nwc_salesforce_07.png){:class="img-responsive"}

**Optional steps:**
In your workflow, you can use further optional steps. In this sample a SharePoint Online list is used to log all synchronized Salesforce accounts to SAP. An additional step can be used to send notifications when a customer has been created.

![NWC_SALESFORCE_08](/img/contents/ecscore/ecscore_nwc_salesforce_08.png){:class="img-responsive"}


Now let's have a closer look and go through the process. 

Let us change the account type to customer. The field SAP ID is empty at the beginning.

![NWC_SALESFORCE_09](/img/contents/ecscore/ecscore_nwc_salesforce_09.png){:class="img-responsive"}


The workflow runs and creates the customer in SAP.

![NWC_SALESFORCE_10](/img/contents/ecscore/ecscore_nwc_salesforce_10.png){:class="img-responsive"}

![NWC_SALESFORCE_11](/img/contents/ecscore/ecscore_nwc_salesforce_11.png){:class="img-responsive"}


Check the customer in SAP.

![NWC_SALESFORCE_12](/img/contents/ecscore/ecscore_nwc_salesforce_12.png){:class="img-responsive"}

Go to Salesforce and check that the SAP customer number is set.

![NWC_SALESFORCE_13](/img/contents/ecscore/ecscore_nwc_salesforce_13.png){:class="img-responsive"}

Now check the video to see that in action:

 <iframe width="560" height="315"
src="https://www.youtube.com/embed/PqMexOX8zN0"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>