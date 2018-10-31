---
layout: page
title: Using the SAP transaction recorder for creating custom function modules
description: Using the SAP transaction recorder for creating custom function modules
permalink: /:collection/:path
weight: 8
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

### Using the SAP transaction recorder for creating custom function modules

#### Table of contents:

1. Introduction........................................................................................................... 2

1.1          Prerequisites................................................................................................ 3

2. Recording a transaction...................................................................................... 3

3. Creating a function module.............................................................................. 11

3.1          Testing the function module.................................................................... 14

4. Using the custom function module with Theobald Software’s SAP integration tools    15

### 1.  Introduction

When dealing with SAP integration in other business platforms like SharePoint, often the necessity arises to call up SAP BAPIs or function modules to carry out certain processes. Whereas on the SAP side usually transactions exist for creating or evaluating any kind of data, no such instruments are available outside the SAP system. To reproduce an SAP transaction for external use there are different approaches. The most convenient way would be to use an SAP standard function module/BAPI which carries out exactly what the transaction would do (e.g. creating material master data) in the backend SAP system. Sometimes however there is no SAP standard function module available for the transaction in question or the function module is too complex in its structure to deal with it without deeper SAP knowledge. In this case the most common way would be to write a custom function module in ABAP code according to your individual requirements. However, if there is no ABAP programmer available and a quick and easy solution for finishing the job is urgently needed, there exists another possibility. You could use an SAP program called “Transaction Recorder”.

The Transaction Recorder is a standard SAP report available on every common SAP ERP system. With this program it is possible to record complex transactional processes, e.g. for creating master data in Financials or Human Resources and to build a custom function module from the record. This function module can then be called up in the external system later on.

On the next few pages we want to give you an example of how to work with the Transaction Recorder.

#### 1.1 Prerequisites
To use the Transaction Recorder and to create function modules you will require both the authorization for calling up transaction SHDB and for executing the transaction you want to record. You might also probably need a developer key for creating function modules depending on your SAP basis settings.  

Contact your SAP authorization management and SAP basis administration regarding this. There might be the directive in your company to create function modules on your developing system only and to transport it to the productive system afterwards. That’s an individual thing which is handled differently from costumer to costumer.  

Besides these things there is nothing special to take care about.

### 2.  Recording a transaction

As an example we want to demonstrate how to record transaction MM01 for creating material master data.

First open the Transaction Recorder with transaction SHDB. There are probably already some recordings listed. 

![image001](/img/contents/image001.gif){:class="img-responsive"}

Click *New recording* to start a new transaction recording.

![image002-1](/img/contents/image002-1.gif){:class="img-responsive"}

In the *Create Recording* window two mandatory fields have to be filled. In the Recording field enter an individual name for the new recording according to your company name conventions. Furthermore, enter the required transaction in the Transaction Code field. In our example we choose transaction MM01 for material creation. You don’t have to change the recording parameters in the window’s lower section. Click *Start recording*. 

![image003-1](/img/contents/image003-1.gif){:class="img-responsive"}

Transaction MM01 will be automatically called up. Fill in all the mandatory fields like Material, Industry sector, etc. Keep in mind that really every mouse click is recorded. That means if you first select the wrong Industry sector or Material Type for example this will be recorded as well and recognizable in the function module later on. So if you make any false entries or corrections better abort the current recording and start all over again.

![image004-1](/img/contents/image004-1.gif){:class="img-responsive"}

Confirm your entries with enter and select the view in which you want to maintain data. Just do whatever you would normally do when using transaction MM01 for creating material data.



![image005-1](/img/contents/image005-1.jpg){:class="img-responsive"}

Save your entries when you are finished. Please note that only filled in fields will be available as input parameters in the function module we want to create from the recording.

![image006-1](/img/contents/image006-1.gif){:class="img-responsive"}

After saving, the recording is completed and will be displayed in a very technical view. You can change entries here for example delete default input values in the *Field value* column.

![image007-1](/img/contents/image007-1.gif){:class="img-responsive"}

Save the new transaction recording. This will take you automatically back to the Transaction recorder screen.

![image008-1](/img/contents/image008-1.gif){:class="img-responsive"}

### 3.  Creating a function module

There is now a new entry with your recording in the screen. Mark the entry and click Function module for creating a function module from your recording.

![image009](/img/contents/image009.gif){:class="img-responsive"}

In the upcoming window you have to enter a name for the custom function module, a function group and a description. Contact your SAP basis if you are not sure about name conventions and which function group to choose.

![image010](/img/contents/image010.jpg){:class="img-responsive"}

After confirming your entries with the green checkmark the function module has been created and will be available to use.

![image011-1](/img/contents/image011-1.gif){:class="img-responsive"}

Open the function builder with transaction SE37. Enter the name of the new created function module and execute it.  

![image012-1](/img/contents/image012-1.gif){:class="img-responsive"}

You possibly have to activate the function module in the settings first (click display).

![image013-1](/img/contents/image013-1.gif){:class="img-responsive"}

#### 3.1  Testing the function module

You can test the function module by entering different input parameters than the ones from the recording and execute it.

![image014](/img/contents/image014.png){:class="img-responsive"}

Check material master data table MARA if the material has been created. If there is a new entry you know that the function module works. 

![image015](/img/contents/image015.gif){:class="img-responsive"}

### 4.  Using the custom function module with Theobald Software’s SAP integration tools

With Theobald Software’s SAP integration solutions a self-created custom function module copying an SAP transaction would rather be used with process oriented tools like ERPConnect Services than with BI connectors like Xtract IS or Xtract Universal.

Within **ERPConnect Services** - the component for SAP/SharePoint connectivity – a classical example for using a custom function module would be building a web service with the WebService Designer that calls up the function module. You could then deploy the web service to SharePoint and consume it with the usual instruments (Infopath, Nintex Workflow, etc.).

Another possible scenario with ECS would be a direct call-up of the function module in a Nintex Workflow by using the Call SAP function custom action delivered with ECS. You will find examples for both scenarios in our [OnlineHelp](https://help.theobald-software.com).