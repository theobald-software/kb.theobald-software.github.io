---
layout: page
title: Connection Scope for Nintex Workflow Custom Actions
description: Connection Scope for Nintex Workflow Custom Actions
permalink: /:collection/:path
weight: 1
---

Some SAP integration scenarios require several function modules to be executed in a row in order to complete a process successfully. This could be the case for HR processes, where a personnel number needs to be locked and unlocked after some changes have been made. 
In this case the function calls must take place in the same so-called "connection scope". The connection scope ensures that the function calls are related and not interrupted in between.

Setting up and using a connection scope is available as a feature in the [Nintex Workflow Custom Actions](https://help.theobald-software.com/en/erpconnect-services/sap-integration-nintex/nintex-integration-sharepoint/nintex-workflow-custom-actions/) in SharePoint On-Premises. These custom actions are part of the [ERPConnect Services Nintex Edition](https://theobald-software.com/en/nintex/) and allow read and write access to SAP tables and functions directly within the Nintex Workflow designer.

Using a connection scope in the *Call SAP Function* Custom Action works as follows: Create a workflow variable and select it in the *Connection Scope* window in the custom action configuration screen:

![NINTEX_CONNECTION_SCOPE](/img/contents/ecs/connection-scope.jpg){:class="img-responsive"}

To begin or end and a connection scope the appropriate box must be checked.

For more information take a look in our [OnlineHelp](https://help.theobald-software.com/en/erpconnect-services/sap-integration-nintex/nintex-integration-sharepoint/nintex-workflow-custom-actions/call-sap-function-action/call-sap-function-action-in-workflow).