---
layout: page
title: How to use yunIO to populate dropdown boxes in Power Apps with SAP data
description: How to use yunIO to populate dropdown boxes in Power Apps with SAP data
permalink: /:collection/:path
weight: 3
---

This article shows how to integrate yunIO services with Microsoft Power Apps.

Power Apps is a cloud-based platform to build custom business applications based on different data sources.  
For more Information on Power Apps see [Microsoft Power Apps Documentation](https://docs.microsoft.com/en-us/powerapps/).

There are three examples for SAP interaction with dropdown boxes in Power Apps documented:

1. Populate a dropdown box with SAP table data and provide a search filter through a separate input box.
2. Populate a dropdown box with SAP table data without a search filter.
3. Populate a dropdown box with SAP data returned from a function call. The input parameter\ search filter is provided through a separate input box.  


### Prerequisites in yunIO

1. Create three services in yunIO. For this example we use table services to query data from SAP tables MAKT and CSKT and a function service to call SAP standard functionj SD_RFC_CUSTOMER_GET. 
The MAKT service has the following settings:<br>
- Create a new service of type Table or Vieww and select table MAKT (Material Descriptions)
- Select table fields MATNR (Material Number), SPRAS (Language Key) and MAKTX (Material Description (SHort Text))
- Set a row limit of 100 rows in the Advanced Settings. 
The CSKT service has the following settings:<br>
- Create a new service of type Table or View and select table CSKT (Cost Center Texts)
- Select table fields KOSTL (Cost Center), KTEXT (General Name) and LTEXT (Description)
- Set a row limit of 100 rows in the Advanced Settings.
The service for calling up function SD_RFC_CUSTOMER_GET has the following settings:<br>
- Select a new service of type Function and select function module SD_RFC_CUSTOMER_GET
- Set parameter NAME1 (Customer'S Name) under Import as Supplied by caller.
- Select all fields in the function table *CUSTOMER_T* for the output.
2. Download the service definitions (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with the Micrososft Power Platform, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 

### Other Prerequisites
When integrating services from a local yunIO installation with a cloud hosted platform like Power Apps, a gateway is needed to tunnel the connection e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
You decide which gateway solution you want to use.<br> 
If you choose the **Microsoft On-premises data gateway**, install and configure the gateway before proceeding to the next steps.
 
### Configuring and testing yunIO custom connector in Power Automate

To use a service created in the yunIO designer with Power Apps it must first be made available as a custom connector in Power Automate. On how to integrate a yunIO service with Power Automate and test it, please see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate). 


### Using the Services with Power Apps
After a connector is successfully tested, it can be used as a data source in Power Apps. 
- Create a new model-driven Power App with the Power Apps designer.<br>
![Power-Automate-Custom-Connector-Flow-Action.png](/img/contents/yunio/power-automate-custom-connector-flow-action.png){:class="img-responsive"} 
- Add three dropdown input fields and three labels to describe these fields. 
- For the frist and the last dropdown field add additional Text input boxes above for the filtering. 


******

#### Related Links
- [Web Version of the Swagger Inspector](https://inspector.swagger.io/builder)
- [Swagger Inspector Documentation](https://swagger.io/docs/swagger-inspector/how-to-use-swagger-inspector/)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)