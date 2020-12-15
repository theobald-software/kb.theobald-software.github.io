---
layout: section-page
title: Cloud scenario for SAP user account creation
description: cloud-scenario-for-sap-user-account-creation
permalink: /:collection
weight: 7
---

This article is about how to create SAP user accounts from the cloud.

To realize this business scenario the following platforms and tools were used:

- SAP ERP or BW system on-premise
- ECS Core as SAP integration platform
- Nintex Workflow Cloud as workflow solution

With **ECS Core**, Theobald Software provides a connector which enables code and no-code SAP integration for cloud environments and solutions such as Office 365, Nintex Workflow Cloud, Microsoft Flow and many more.

For this scenario, ECS Core in combination with **Nintex Workflow Cloud** (NWC) was used. NWC is a very sophisticated workflow solution for process automation in the cloud. Connectors to numerous other cloud applications are provided in NWC.

How does it work?

The workflow operates as follows:

A user requests the creation of a new SAP user account with a web form created in NWC. Information such as company name, email address, reason for creation, desired creation date, etc. have to be entered in the form.
The requester can also choose whether the user account is to be created for the SAP ERP or BW system, or both.

![ecscore_SAP-User-Creation_01](/img/contents/ecscore/ecscore_SAP-User-Creation_01){:class="img-responsive"}

Once the web form is sent, an approval process starts that automatically sends an email task notification to an assigned administrator.

![ecscore_SAP-User-Creation_02](/img/contents/ecscore/ecscore_SAP-User-Creation_02){:class="img-responsive"}

The administrator has to check if it's a reasonable and valid request. Before the actual approval a task form with additional information must be completed. This data is necessary for the user account creation in SAP and includes the SAP user name, the initial logon password and a valid-from and valid-to date for the time limitation of the account.

![ecscore_SAP-User-Creation_03](/img/contents/ecscore/ecscore_SAP-User-Creation_03){:class="img-responsive"}

After submitting this information, SAP integration takes place and the SAP user account is automatically created in the requested system. If the account was created successfully, both the administrator and the applicant will receive email notifications.

![ecscore_SAP-User-Creation_04](/img/contents/ecscore/ecscore_SAP-User-Creation_04){:class="img-responsive"}
![ecscore_SAP-User-Creation_05](/img/contents/ecscore/ecscore_SAP-User-Creation_05){:class="img-responsive"}

How was the scenario realized?

The following steps were carried out to realize the project:
<br>
1. Cloud connector ECS Core was installed and configured on a Windows server environment.
2. A REST service for the SAP user account creation was built with the WebService Designer provided with ECS Core.
3. The REST service was deployed to the ECS Core installation and from then on is accessible from the cloud.
4. The REST service was exported into an OpenAPI definition and imported in Nintex Workflow Cloud as a custom connector.
5. The approval workflow was built with the Nintex Workflow Cloud designer.
6. For the SAP integration part the previously imported custom connector was selected from the designer toolbox and configured.
<br>
Additional information:
- SAP user roles and authorization profiles are automatically assigned in this example. It would also be possible to delegate this task to the approver and have him enter this information in the approval task form.
- A key feature of the Nintex Workflow Cloud for realizing this scenario is the ability to use and design task forms. This feature was released for NWC in July 2018. In addition, the scenario should also be feasible with Microsoft Flow as a workflow solution.

For technical details on the configuration and on how to use ECS Core in combination with Nintex Workflow Cloud and other solutions please take a look on our [OnlineHelp](https://help.theobald-software.com/en/ecs-core/) or contact us.

You can directly test the workflow by calling up this [webform](https://theobald.workflowcloud.com/forms/9e48cec6-cc88-49a2-9840-61c3e6de705c). All notifications and the approval task are sent to the e-mail address entered in the form. It is only a simulation, no SAP user account is created.

We also have a [demo portal](https://theobald-software.com/en/erpconnect-services/demo-portal/), where numerous SAP integration cloud scenarios can be viewed and tested.

