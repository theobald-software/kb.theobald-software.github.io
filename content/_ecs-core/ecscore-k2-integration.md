---
layout: page
title: SAP integration with the K2 Cloud
description: SAP integration with the K2 Cloud
permalink: /:collection/:path
weight: 1
---

SAP integration with the **K2 cloud platform ("K2 Nexus")** is enabled with cloud connector [ECS Core](https://theobald-software.com/en/ecs-core/).

With ECS Core it is possible to create REST services for SAP read write access and import these services as a so-called K2 **SmartObject**.
SmartObjects are business entities for data integration across different applications. Building a SmartObject is completely no-code and, once created, a SmartObject can be used for different purposes, e.g. for data integration in a workflow.

Here's a step-by-step guide how SAP integration with ECS Core and K2 SmartObjects works.

1. Create and deploy a web service for SAP read or write access in the ECS Core WebService Designer. 
![ECSCore_K2_01](/img/contents/ecscore/ecscore_k2_01.png){:class="img-responsive"}
2. Export the web service into an OpenAPI definition.
This export can be done through the WebService designer or the ECS Core administration dashboard. <br>
If it's done via the WebService Designer checkbox *Use definition section (references)* must be activated in the *Options* section for OpenAPI. 
Also be sure to enter the Azure Relay endpoint in the Server Settings under *Connections* if you have integrated an Azure Relay instance.If you do not do this, 
the default local address "http://localhost..." will be taken and used in the definition.
![ECSCore_K2_02](/img/contents/ecscore/ecscore_k2_02.png){:class="img-responsive"}
![ECSCore_K2_03](/img/contents/ecscore/ecscore_k2_03.png){:class="img-responsive"}
![ECSCore_K2_03_1](/img/contents/ecscore/ecscore_k2_03_1.png){:class="img-responsive"}
If you want to download it from the ECS Core management dashboard, navigate to the *Web Services* section, select the required web service and click on *Download OpenAPI Definition (with references)*
With this approach the Azure Relay endpoint is automatically used in the definition, if you have integrated an Azure relay inctance. 
![ECSCore_K2_04](/img/contents/ecscore/ecscore_k2_04.png){:class="img-responsive"}
3. Create a Service Instance in K2. 

The mandatory fields are marked red.

![ECSCore_K2_05](/img/contents/ecscore/ecscore_k2_05.png){:class="img-responsive"}

 
![ECSCore_K2_06](/img/contents/ecscore/ecscore_k2_06.png){:class="img-responsive"}

 
![ECSCore_K2_07](/img/contents/ecscore/ecscore_k2_07.png){:class="img-responsive"} 

 
For the *Default HTTPS Request Headers* box the following template can be used.  

``` c#
{"$type":"SourceCode.SmartObjects.Services.Endpoints.Common.HttpHeader[], SourceCode.SmartObjects.Services.Endpoints.Common, Version=4.0.0.0, Culture=neutral, PublicKeyToken=null","$values":[{"$type":"SourceCode.SmartObjects.Services.Endpoints.Common.HttpHeader, SourceCode.SmartObjects.Services.Endpoints.Common, Version=4.0.0.0, Culture=neutral, PublicKeyToken=null","Name":"Authorization","Value":"Apikey 
[Your API Key]"}]}
```

For the *Descriptor location* you need to upload the file in some kind of data storage, in this example Amazon S3 is used therfore.  

![ECSCore_K2_08](/img/contents/ecscore/ecscore_k2_08.png){:class="img-responsive"} 
 
If *Generate SmartObjects for this Service instance* is checked, a SmartObject with the same name of the service instance is created directly with all objects. 

4. Create a SmartObject

For a more precise control of the process the SmartObject should be created separately. 
The easiest way to directly test the functionality of a SmartObject is also via the Management Dashboard.
To do this, select the created service instance and click on "Generate SmartObjects".
Only the "Object Types" must be selected in the following mask and not the "System Types".

![ECSCore_K2_10](/img/contents/ecscore/ecscore_k2_10.png){:class="img-responsive"} 
 
A new SmartObject for SAP integration can also be created in the K2 Designer. 
 
![ECSCore_K2_11](/img/contents/ecscore/ecscore_k2_11.png){:class="img-responsive"} 
 
![ECSCore_K2_12](/img/contents/ecscore/ecscore_k2_12.png){:class="img-responsive"} 


5. Test the SmartObject functionality
 
A newly created simple SmartObject without complex objects and (de-)serialisation steps can be executed and tested directly in the management dashboard.
To do so, select the newly created object under the category "REST" (refresh it if necessary), select the desired method in the bottom right corner (name from the web service) and click "Execute".

![ECSCore_K2_13](/img/contents/ecscore/ecscore_k2_13.png){:class="img-responsive"} 

In the following screen, input parameters can be entered and the service executed.
 
![ECSCore_K2_14](/img/contents/ecscore/ecscore_k2_14.png){:class="img-responsive"}

Return values are displayed under RESULTS. 

![ECSCore_K2_15](/img/contents/ecscore/ecscore_k2_15.png){:class="img-responsive"}

The SmartObject can then be used (e.g. in a K2 workflow).

{: .box-note }
**Note:** This was an example for a simple object without structured parameters. For SmartObjects with complex parameters, additional configuration steps are necessary.  
