---
layout: page
title: Sales Order Chat bot solution
description: sales-order-chat-bot-solution
permalink: /:collection/:path
weight: 15
---

### Content ###

Chat bots are a means of communication through an artificial intelligence service which responds just as a real person would. The communication takes place in a chat interface which is usually used in applications such as Facebook Messenger, Skype or Webchat, but it could also be a communication via email. <br> 
These kind of bots are growing more and more important in certain sectors and for certain business scenarios. A classic example for a bot scenario would be the booking of a hotel room for a certain date and time. But furthermore an infinite number of potential use cases are thinkable here and an increasing number of chat bot applications will certainly come into market.

There are different bot frameworks available for different purposes and different messengers. <br>

Theobald Software used the Microsoft Bot Framework and created a fully functional prototype of a chat bot that can be used to create Sales Order information in a SharePoint Online List. When the list is created, a Nintex for Office 365 workflow is triggered to transmit this information to SAP and create a new sales order there.

To realize this scenario the following platforms and tools were used:

- SAP ERP system on-premise
- ECS Core as SAP integration platform
- Nintex Workflow Cloud (or Nintex for Office 365) as workflow solution
- Microsoft Bot Framework for the chat bot

### Software Architecture ###

The architecture of this bot scenario looks as follows:
![ecscore_bot_scenario](/img/contents/ecscore/ecscore_bot_scenario.png){:class="img-responsive"}

On the left hand side we have the user who wants to create a new sales order and enters the preferences in a chat application or in an email. <br>
The Theobald Software Bot, which is located in the cloud (Microsoft Azure platform), communicates with the user and in the end creates an entry in a custom list in SharePoint Online. <br>
In this list, all the necessary information to create a sales order in the SAP system is stored (e.g. material number, plant, quantity, delivery date). <br>
As soon as the new item is created in the SharePoint list, a  Nintex Workflos Cloud workflow is triggered in the background which will first activate an approval process. Only when the assigned person (e.g. manager, coworker) has approved the request, the sales order is submitted to the on-premise SAP system and is posted there.

***********

#### Related Links ####

- [ECS Core](https://help.theobald-software.com/en/ecs-core/) - OnlineHelp <br>
- [ECS Core](https://theobald-software.com/en/ecs-core/demo-portal/) - demo portal <br>