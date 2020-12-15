---
layout: page
title: Sync Salesforce to SAP in near-real time using Flow and ERPConnect Services Core
description: sync-salesforce-to-sap-in-near-real-time-using-flow-and-erpconnect-services-core
permalink: /:collection/:path
weight: 6
---

I will describe a scenario, where a Salesforce account is synchronized in near-real time to SAP, where an SAP customer is created and his number is written back to Salesforce using the following tools:

- SAP ECC system on Premise
- ERPConnect Services Core (ECS Core) for SAP Integration in cloud scenarios
- Salesforce
- Microsoft Flow as workflow

ECS Core enables you to build powerful and sophisticated cloud applications for SAP on Premise. It allows you to integrate your cloud-based apps with SAP. <br> For that ECS Core uses only outbound connections. It pulls the pending requests from the cloud, sends the query to the SAP system for execution and then sends the SAP result back onto the cloud service.

**Step 1: Define the Connection to the SAP system** <br>

In ECS Core define the connection to your SAP ECC system. This connection will be used to create the SAP customer.

![ecscore_salesforce_Flow_ERPconnect_01](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_01.png){:class="img-responsive"}

**Step 2: Use ECS Core to provide REST Service to create SAP customers.** <br>

I have used the Web Service Designer for ECS Core to create a REST Service CreateSAPCustomer based on a default SAP function module to create Customers. The REST service has different input parameters about the customers and returns the number of the created SAP customer.

![ecscore_salesforce_Flow_ERPconnect_02](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_02.png){:class="img-responsive"}

![ecscore_salesforce_Flow_ERPconnect_03](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_03.png){:class="img-responsive"}
I have deployed the rest web service and it is now ready to be consumed in the cloud.

![ecscore_salesforce_Flow_ERPconnect_04](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_04.png){:class="img-responsive"}

**Step 3: Customize your Salesforce Account to provide related fields such as SAP Customer Number.** <br>
In Salesforce, I have my Accounts where I have created some new fields to store the SAP customer number and further details required to create the SAP customer, e.g. SAP Company Code or related sales data like sales organization.

![ecscore_salesforce_Flow_ERPconnect_05](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_05.png){:class="img-responsive"}

**Step 4: Use Microsoft Flow to define a workflow to trigger Salesforce Account Changes** <br>

As workflow, I am using Microsoft Flow to trigger any Account changes in Salesforce, where the account type is changed from prospect to customer and no related SAP customer exists. In this case the SAP customer will be created using the Salesforce account data. When the operation is successful, the Salesforce account is updated with the SAP customer number.

![ecscore_salesforce_Flow_ERPconnect_06](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_06.png){:class="img-responsive"}

**Optional steps** <br> 
In your workflow, you can use further optional steps. In my sample, I am using a SharePoint Online list to log all synchronized Salesforce accounts to SAP. An additional Flow step can be used to be notified when a customer has been created.

![ecscore_salesforce_Flow_ERPconnect_07](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_07.png){:class="img-responsive"}

Now let us see that in action.

Let us change the account type to customer. As you can see the field SAP ID is empty.

![ecscore_salesforce_Flow_ERPconnect_08](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_08.png){:class="img-responsive"}

the workflow runs and creates the customer in SAP.

![ecscore_salesforce_Flow_ERPconnect_09](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_09.png){:class="img-responsive"}

Check the customer in SAP

![ecscore_salesforce_Flow_ERPconnect_10](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_10.png){:class="img-responsive"}

Go to Salesforce and check that the SAP customer number is set

![ecscore_salesforce_Flow_ERPconnect_11](/img/contents/ecscore/ecscore_salesforce_Flow_ERPconnect_11.png){:class="img-responsive"}

Now check the video to see that in action

<iframe width="560" height="315"
src="https://www.youtube.com/watch?v=ZCoTA1G5NJQ"
frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

