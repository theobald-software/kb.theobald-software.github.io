---
layout: page
title: Building an OData web service in ECS WebService Designer and using it in a SharePoint 2013 workflow
description: Building an OData web service in ECS WebService Designer and using it in a SharePoint 2013 workflow
permalink: /:collection/:path
weight: 12
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Contents**

1. Introduction

	1.1 RESTful web services in SharePoint Workflow 2013

	1.2 Prerequisites

2. Implementation guide

	2.1 Building and deploying a OData web service

	2.2 Testing the OData web service in a REST-client

	2.3 Create a SharePoint list

	2.4 Create the SharePoint 2013 workflow

	2.5 Execute the Workflow

	2.6 Display the results in SAP

3. Notes and Tipps

4. Summary

### 1.  Introduction

#### 1.1             RESTful web services in SharePoint Workflow 2013

With SharePoint Server 2013 a new workflow platform has been introduced which brings major advantages to workflow building such as service bus messaging, elastic scalability, and managed service reliability.

One of the useful enhancements of the SharePoint 2013 workflow platform is the possibility to call web services in a SharePoint workflow which wasn’t possible within SharePoint 2010. A new workflow action called Call HTTP Web Service is available since and can be used for workflow building in SharePoint Designer 2013

However, one limitation of this workflow action is that only so called RESTful web services can be processed. RESTful web services are a simple alternative to SOAP-based web services. Whereas in SOAP web services WSDL documents are processed, OData web services expose EDMX documents containing all metadata. Furthermore RESTful web services follow specific design principles e.g. explicitly use the specific HTTP methods POST, GET, PUT and DELETE and provide data in XML or JSON format.     

The open standard for data communication using REST architecture is OData. OData format is particularly suited for web service applications that require a uniform, flexible, general purpose interface for exposing CRUD (Create Retrieve Update Delete) operations on a tabular data model to clients.

So much for the technical background of this article. On the following pages we want to demonstrate how to integrate SAP data in a OData web service and use this web service in a SharePoint workflow. As you will see there is a comfortable way to do this using the WebService Designer (WSD) developed by Theobald Software.

WSD is part of ERPConnect Services, a powerful, easy-to-use tool to design and deploy web services to SharePoint. In addition to the creation of SOAP-based web services the WSD also offers the possibility to build web services in OData format.

As a show scenario we’ve chosen the creation of a web service that enables the user to create purchase requisitions in the SAP system.

 

#### 1.2 Prerequisites

For building OData web services with WebService Designer an ERPConnect Services (ECS) installation is necessary.

Please follow this link to demand an ECS 30 day free trial version:

[http://theobald-software.com/en/trial-version.html](http://theobald-software.com/en/trial-version.html)

You also have to ensure that a SharePoint 2013 on-premise installation is available on your server. For designing workflows with the SharePoint 2013 workflow platform you will also need SharePoint Designer 2013.

Furthermore you have to ensure that the SharePoint 2013 workflow management platform is available on your system. Therefore a separate installation of Workflow Manager 1.0 and the registration of the workflow management service is required.
 
For technical details about the complete installation process of workflow for SharePoint Server 2013 see:

[https://technet.microsoft.com/en-us/library/jj658588.aspx](http://theobald-software.com/en/trial-version.html)


After the successful installation SharePoint 2013 Workflow will be selectable as Platform Type in SharePoint designer 2013:

![image001](/img/contents/image001.jpg){:class="img-responsive"}

Note that only with SharePoint 2013 Workflow platform the workflow action Call HTTP Web Service we want to use in this scenario will be available.  


### 2.  Implementation guide

On the next few pages we will guide you through the full process of building an OData web service in WebService Designer and the subsequent integration of this web service in a SharePoint 2013 workflow. The aim of this scenario is to create a web service that enables the user to create purchase requisitions in SAP. For the creation process we will establish a simple, easy to implement approval workflow.

#### 2.1  Building and deploying an OData web service

The first step in our scenario is to build a OData web service in the WebService Designer. 

To do this open the WebService Designer and create a new OData web service by clicking the New Button. We name the web service “PurchaseRequisition”. You can download the WebService model file in the summary section of this article. 

![image002](/img/contents/image002.gif){:class="img-responsive"}

![image003](/img/contents/image003.gif){:class="img-responsive"}

After testing the SAP and SharePoint connection you have to create a new Custom Data Type. For creating purchase requisitions in SAP we use the standard function module BAPI_REQUISITION_CREATE. Use the import button in the New Custom Data Type Dialog to import the following parameters. These are the minimum required input parameters for creating purchase requisitions in SAP including the assignment of the purchase requisition to a cost center.

From table REQUISTION_ITEMS import

**DOC_TYPE**       (Document Type)<br>
**MATERIAL**       (Material)<br>
**PLANT**             (Plant)<br>
**QUANTITY**       (Quantity)<br>
**DELIV_DATE**    (Delivery Date)<br>
**ACCTASSCAT**   (Account Assignment Category)

![image004](/img/contents/image004.gif){:class="img-responsive"}

![image005](/img/contents/image005.gif){:class="img-responsive"}

![image006](/img/contents/image006.gif){:class="img-responsive"}

![image007](/img/contents/image007.gif){:class="img-responsive"}

Save your entries and manually add the Item COST_CTR. We need this item for the account assignment.

![image008](/img/contents/image008.gif){:class="img-responsive"}

After that create a new entity using the previously created Custom Data Type. For creating purchase requisitions we only need the CRUD operation Create. Because we only create and don’t read data it is not necessary to use a specific primary key. Just select one of the items in the list.

![image009](/img/contents/image009.jpg){:class="img-responsive"}

In the WebService Designer screen we use the Execute Function activity for calling the BAPI_REQUISTION_CREATE function module.

![image010](/img/contents/image010.gif){:class="img-responsive"}

Because with OData web services the creation of mapping parameters is somewhat limited we have to use the activity Custom Code to make the previously created custom data type items available for mapping in the Execute Function dialogue box.

With two rows of custom code we create a new list parameter containing our custom data types and write it into the variable varItems.

Before using the Custom Code activity you should create this variable using the Variables menu point in the overview screen.

![image011](/img/contents/image011.gif){:class="img-responsive"}

After creating the variable you can use it in the Custom Code action as demonstrated in the screenshot.

![image012](/img/contents/image012.gif){:class="img-responsive"}

Save your entries with OK.

![image013](/img/contents/image013.gif){:class="img-responsive"}

Now you can map the parameters in the Execute Function Dialog box. Scroll down to the input tables section and select table REQUSITION_ITEMS first. Select the previously created list parameter varItems in the Mapping column and open the mapping dialog window to map the parameters DOC_TYPE, MATERIAL, PLANT, QUANTITY, DELIV_DATE, ACCTASSCAT. You can use the Automap function for this.

![image014](/img/contents/image014.jpg){:class="img-responsive"}

![image015](/img/contents/image015.jpg){:class="img-responsive"}

Confirm your entries with OK and select table REQUISITION_ACCOUNT_ASSIGNMENT to map the remaining parameter COST_CTR.

![image016](/img/contents/image016.jpg){:class="img-responsive"}

![image017](/img/contents/image017.jpg){:class="img-responsive"}

Doing this we have successfully finished our OData web service for purchase requisition creation and can deploy it to the SharePoint server.

![image018](/img/contents/image018.jpg){:class="img-responsive"}

Open the service URL and the web service EDMX document will be shown in the web browser.

![image019](/img/contents/image019.jpg){:class="img-responsive"}

![image020](/img/contents/image020.jpg){:class="img-responsive"}

#### 2.2  Testing the OData web service in a REST-client

Before we continue with our workflow scenario we should check if the just created and deployed web service is callable and fully functional. Therefore we can use any open source REST-Client which can process HTTP methods and allows to set specific header values.

Enter the web service URL in the REST-Client command line and replace the ending $metadata with the term Items. This is the command to get data access with the POST method.

![image021](/img/contents/image021.jpg){:class="img-responsive"}

![image022](/img/contents/image022.jpg){:class="img-responsive"}

Choose HTTP-method POST in the REST-Client and add the following headers:

**Content-Type**: application/json

**Accept**: application/json

**Authorization**: Basic > Header created via the Basic Auth ribbon. Note that basic authorization has to be activated for your central administration site in the Internet Information Services (IIS). 

![image023](/img/contents/image023.jpg){:class="img-responsive"}

In the request body you have to define the parameter values you want to post with the web service. For testing purposes choose a few input values for every parameter (e.g. “MATERIAL”: “100-100”;...) and execute the web service. Note that all the values have to be in SAP compatible format. This means that e.g. any date has to be in format yyyymmdd and for some values like cost center leading zeros are required.

![image024](/img/contents/image024.jpg){:class="img-responsive"}

After successful execution of the service the posted values are shown in the response message.

![image025](/img/contents/image025.jpg){:class="img-responsive"}

You can also check on your SAP system if the purchase requisition has been created (SAP table EBAN).

![image026](/img/contents/image026.jpg){:class="img-responsive"}

#### 2.3  Create a SharePoint list

We would like to use the web service to create purchase requisitions by entering the input values in a SharePoint list. We want to integrate the columns of this custom list in the SharePoint Workflow.

The next step is to create a SharePoint list with the following properties:

Type = **Custom List**

Name = **Create purchase requisitions**

Add the following columns to the list:

**Material**: Single line of text (rename the default Title column to Material), required

**Plant**: Single line of text, required

**Quantity**: Number, required

**Delivery Date**: Single line of text, required

**Cost Center**: Single line of text, required

**Notes**: Multiple lines of text

A comfortable way to do this is in the SharePoint designer.

![image027](/img/contents/image027.jpg){:class="img-responsive"}

![image028](/img/contents/image028.jpg){:class="img-responsive"}

#### 2.4  Create the SharePoint 2013 workflow

After the successful creation of the SharePoint list we can start to build a list workflow based on this list.

![image029](/img/contents/image029.jpg){:class="img-responsive"}

We name this workflow Purchase Requisition WF.

![image030](/img/contents/image030.jpg){:class="img-responsive"}

![image031](/img/contents/image031.jpg){:class="img-responsive"}

For building a simple approval process the first workflow action to integrate in our workflow is the Assign a task action.

![image032](/img/contents/image032.jpg){:class="img-responsive"}

Configure the workflow action with the following properties:

**Participant** = Approvers (Group from a SharePoint site. Has to be created first)

**Task Title** = Purchase Requisition Approval

**Description** = Current Item: Notes 

**Task Options** = Wait for task completion

![image033](/img/contents/image033.jpg){:class="img-responsive"}

The approval outcome (Approved/Rejected) should be written in the output variable Outcome1.

![image034](/img/contents/image034.jpg){:class="img-responsive"}

After configuring the Assign task action for the approval process we have to insert a condition that states that the next actions only will be started if the approval outcome will be Approved.

![image035](/img/contents/image035.jpg){:class="img-responsive"}

Then we proceed with the workflow actions necessary to call the OData web service. First we have to define the header values we’ve seen before in the REST-client. Insert the Build Dictionary action with the following values:

**Content-Type** = application/json

**Accept** = application/json 

**Authorization** = The header values we created in the REST-Client  

![image036](/img/contents/image036.jpg){:class="img-responsive"}

![image037](/img/contents/image037.jpg){:class="img-responsive"}

For the  output create a new dictionary variable called Request Header.

![image038](/img/contents/image038.jpg){:class="img-responsive"}

![image039](/img/contents/image039.jpg){:class="img-responsive"}

After that we have to insert one more Build dictionary action. In this dictionary variable we define the Request Body of our web service.

![image040](/img/contents/image040.jpg){:class="img-responsive"}

We have to enter our initially defined parameters and link them to the columns of our SharePoint list. Note that a difference is made between small and capital letters. The parameters have to be entered exactly as defined in the web service.

We don’t link the parameters DOC_TYPE and ACCTASSCAT to our SharePoint list columns but set default values for them.

 

**MATERIAL** > Current Item: Material

**DOC_TYPE** > Default Value: “NB”

**PLANT** > Current Item: Plant

**QUANTITY** > Current Item: Quantity

**DELIV_DATE** > Current Item: Delivery Date

**ACCTASSCAT** > Default Value: “K”

**COST_CTR** > Current Item: Cost Center


![image041](/img/contents/image041.jpg){:class="img-responsive"}

![image042](/img/contents/image042.jpg){:class="img-responsive"}

![image043](/img/contents/image043.jpg){:class="img-responsive"}

Following this procedure you can link all the other parameters to the according list columns in your SharePoint list.

![image044](/img/contents/image044.jpg){:class="img-responsive"}

Write the output to the new created variable Request.

![image045](/img/contents/image045.jpg){:class="img-responsive"}

Then insert the workflow action Call HTTP web service and enter the web service URL we sucessfully executed in the REST-client before (with the ending Items and not metadata).

![image046](/img/contents/image046.jpg){:class="img-responsive"}

Choose HTTP-method POST in the configuration screen.

![image047](/img/contents/image047.jpg){:class="img-responsive"}

On the workflow building screen select variable Request as request message.

![image048](/img/contents/image048.jpg){:class="img-responsive"}

Then open the properties section of the action and insert variable Request Header for RequestHeaders.

![image049](/img/contents/image048.jpg){:class="img-responsive"}


![image049](/img/contents/image049.jpg){:class="img-responsive"}


![image050](/img/contents/image050.jpg){:class="img-responsive"}

Confirm your entries with OK.

After that we insert the workflow action Set workflow status and enter manually the word completed as output message.

As a final step we set Transition to stage to End of Workflow.


![image051](/img/contents/image051.jpg){:class="img-responsive"}

In the general workflow settings you can optionally define that the workflow will be automatically started if a new item is created.

![image052](/img/contents/image052.jpg){:class="img-responsive"}

Save and publish the workflow when you are finished.

![image053](/img/contents/image053.jpg){:class="img-responsive"}

#### 2.5 Execute the Workflow

For testing the new build workflow open your SharePoint list **Create purchase requisitions** and create a new list item. You should not create the workflow item with your farm administrator user but with another user who has permissions to create items in this list. Otherwise there might be authorization problems in the approval process.

![image054](/img/contents/image054.jpg){:class="img-responsive"}


![image055](/img/contents/image055.jpg){:class="img-responsive"}

After creating the new item the approver has received a new workflow task and can check the values entered by the creator.

![image056](/img/contents/image056.jpg){:class="img-responsive"}

By clicking on the item the item values are shown to the approver. 

![image057](/img/contents/image057.jpg){:class="img-responsive"}

After that he can approve the task.

![image058](/img/contents/image058.jpg){:class="img-responsive"}

The workflow gets the status completed then.

![image059](/img/contents/image059.jpg){:class="img-responsive"}

#### 2.6  Display the results in SAP

As we have done after testing the web service in the REST-client we should also check out now in the SAP system if the purchase requisition has been created.

In SAP table EBAN you should see a new entry with the just created purchase requisition. When the new entry is shown you can be sure the scenario is successfully implemented and the workflow is working.  

![image060](/img/contents/image060.jpg){:class="img-responsive"}

### 3.  Notes and Tipps

Take some time for the installation and configuration of the SharePoint 2013 workflow platform. This can be a bit tricky and time consuming.

Keep an eye on your authorization settings in the Internet Information Services (IIS) for your SharePoint site and SharePoint central administration. False authorization settings can be an obstacle for successful implementation of a SharePoint 2013 workflow.

 

### 4.  Summary

In this article we’ve learned how to configure and implement OData web services in a SharePoint 2013 workflow.  

The Call HTTP Web Service workflow action can be a powerful tool in combination with ERPConnect Services because it allows read and write access to SAP data in a standard SharePoint workflow environment.  

It should also be mentioned that for the present example a standard SAP function module was used which means that the implementation efforts are kept at a minimum.   

We hope you are inspired by this scenario and realize the great potential of the ERPConnect Services integration platform and WebService Designer.

[Here](/files/PurchaseRequisitionODataWebService.zip) you can download the WebService Model file. 

If you have any questions or comments regarding this article or SAP integration in general don’t hesitate to contact us: support@theobald-software.com.
