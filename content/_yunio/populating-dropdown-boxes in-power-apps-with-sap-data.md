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
3. Populate a dropdown box with SAP data returned from a function module call. The input parameter\ search filter is provided through a separate input box.  


### Prerequisites in yunIO

1. Create three separate services in yunIO. For this example we use table services to query data from SAP tables MAKT and CSKT and a function service to call SAP standard function SD_RFC_CUSTOMER_GET. 
The MAKT service has the following settings:<br>
- Create a new service of type Table or View and select table MAKT (Material Descriptions)
- Select table fields MATNR (Material Number), SPRAS (Language Key) and MAKTX (Material Description (Short Text))
- Set a row limit of 100 rows in the Advanced Settings. 
The CSKT service has the following settings:<br>
- Create a new service of type Table or View and select table CSKT (Cost Center Texts)
- Select table fields KOSTL (Cost Center), KTEXT (General Name) and LTEXT (Description)
- Set a row limit of 100 rows in the Advanced Settings.
The service for calling up function SD_RFC_CUSTOMER_GET has the following settings:<br>
- Select a new service of type Function and select function module SD_RFC_CUSTOMER_GET
- Set parameter NAME1 (Customer's Name) under *Import* as Supplied by caller.
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
- Create a new model-driven Power App containing one screen with the Power Apps studio designer.<br>
- Add three dropdown input fields and three labels to describe these fields.
- For the first and the last dropdown field add additional Text input boxes (input_sap_material_number and input_customers) above for searching\filtering values.  
[yunio-powerapps-model-driven-app](/img/contents/yunio/yunio_powerapps_modeldriven_app.png){:class="img-responsive"} 
- Add the previously created yunIO custom connectors containing the MAKT service, the CSKT service and the Customer Get service.
![yunio-powerapps-add-datasource](/img/contents/yunio/yunio_powerapps_datasource_readmakt.png){:class="img-responsive" width="800px"} 
- Customize the following fields for populating the dropdown boxes with SAP values. 

1. The first example is for querying SAP table data for table MAKT (Material Decriptions). The search field shall use a Where Clause to enable filtering the SAP table. 
Use the following coding in the OnSelect box of the dropdown control in the advanced settings:
```
ClearCollect(SAPResult,yunIO.MAKTService({whereClause:Concatenate("SPRAS = 'EN' AND MATNR LIKE '",input_sap_material_number.Text,"'")}));
```
With *ClearCollect* a collection with a name of your choice (named *SAPResult* in this example) is filled data from the external data source.
The Where Clause is pointing to the input field *input_sap_material_number* (configured as Text).    

Use the *Concatenate* function in field Items to concatenate and display more then one table column in the dropdown box. Under Value *Result* should be selectable, thats the result of the SAP table query stored in the collection variable SAPResult.
In this example fields MATNR (material number) and MAKTX (material description should be concatenated and displayed, separated with a space (other column separators would be possible).

```
Concatenate(SAPResult.MATNR," ",SAPResult.MAKTX)  
```
2. The second example is for querying SAP table data for table CSKT (Cost Center Texts). In this case the dropdown box shall be populated without any filtering possibility.
Use the following coding in the OnSelect box of the dropdown control in the advanced settings: 
````
ClearCollect(SAPData,yunIO_1.ReadCSKT());
```
With *ClearCollect* a collection with a name of your choice (named *SAPData* in this example) is filled data from the external data source.
The results should instantly be displayed after selecting the dropdown box.    
Use the *Concatenate* function in field Items to concatenate and display more then one table column in the dropdown box. Under Value *Result* should be selectable, thats the result of the SAP table query stored in the collection variable SAPData.
In this example fields KOSTL (cost center) and LTEXT (cost center description) should be concatenated and displayed, separated with a space (other column separators would be possible).
````
Concatenate(SAPData.KOSTL," ",SAPData.LTEXT)
```
3. The third example is for calling an SAP function (SD_RFC_CUSTOMER_GET in this example) using an input parameter and display the table output in the dropdown box. The input parameter shall be passed to 
the function through a separate text box. In this example it enables seraching for a customer name (field NAME1).
Use the following coding in the OnSelect box of the dropdown control in the advanced settings:
```
ClearCollect(CustomerGetResult,yunIO_2.postCustomerGet({NAME1:input_customer_name.Text}).CUSTOMER_T);
```
With *ClearCollect* a collection with a name of your choice (named *CustomerGetResult* in this example) is filled with data from the external data source.
The input parameter NAME1 is pointing to the input field *input_customer_name* (configured as Text).There's a reference to output table CUSTOMER_T at the end of the statement, which will 
allow to select the output fields of that table in later steps.  
    
Use the *Concatenate* function in field Items to concatenate and display more then one table column in the dropdown box. Under Value *Result* should be selectable, thats the result of the SAP function call stored in the collection variable CustomerGetResult.
In this example fields NAME1 (customer name) and KUNNR (customer number) should be concatenated and displayed, separated with a space (other column separators would be possible).

````
Concatenate(CustomerGetResult.NAME1," ",CustomerGetResult.KUNNR)
```

******

#### Related Links
- [Web Version of the Swagger Inspector](https://inspector.swagger.io/builder)
- [Swagger Inspector Documentation](https://swagger.io/docs/swagger-inspector/how-to-use-swagger-inspector/)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)