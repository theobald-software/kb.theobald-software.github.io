---
layout: page
title: How to create an ECS Service Application
description: How to create an ECS Service Application
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

An ERPConnect Service Application in SharePoint represents the main connectivity component to an SAP system. <br>
The service application stores all the information required to establish a connection to the SAP system (see screen below). 

To create a new ECS Service Application, go to the *Manage service applications* page in SharePoint Central Administration. <br>
Select *New -> ERPConnect Service Application*.

Specify a *Service Application Name* and the *SAP Connection* parameters, including the *Host Name* of a single SAP application 
server or theMessage Server for a connection using load balancing. In addition, you can provide service application-specific parameters, 
for example the *Application Pool* or the *Default* flag for the ERPConnect Services Application.

![ECS-Create-Application-01](/img/contents/ECS-Create-Application-01.png){:class="img-responsive"}

To enable individual SAP access for every SharePoint user, ERPConnect Services utilizes the *Secure Store Service* in SharePoint. <br>
The *Secure Store Service* is a core feature of the SharePoint 2010 platform and replaces the *Single Sign-On (SSO)* feature that 
was introduced with MOSS 2007. In the following steps, we will utilize an already existing Secure Store Service Application. <br>
See [Creating a Secure Store Service Application]() for further information.

![ECS-Create-Application-02](/img/contents/ECS-Create-Application-02.png){:class="img-responsive"}

For the *IIS Application Pool* you can select an existing pool or create a new one. <br>
The available application pools will be shown in the drop-down list.

It is not necessary to create a new application pool with every new ERPConnect Services application. <br>
Multiple service applications can share the same application pool.

By selecting the Default flag, the ERPConnect Service Application will be used as the default application. <br>
When SAP data is accessed using ERPConnect Services, the settings of the default application will be used, 
unless another application is specified explicitly.

Select the Create button to create the new ERPConnect Service Application.

![ECS-Create-Application-03](/img/contents/ECS-Create-Application-03.png){:class="img-responsive"}

Every new ERPConnect Services Application will be displayed with two entries in the list of service applications. <br>
The first entry is the Service Application itself, and the second entry is the Service Application Proxy object. <br>
The proxy object is important for developing a solution.

The new Service Application will start immediately and will be available within the SharePoint farm. <br>
For futher information on the SharePoint service architecture, please refer to the Microsoft documentation. 