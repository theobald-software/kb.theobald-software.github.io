---
layout: page
title: Integation scenario with yunIO and the AI Builder
description: Integation scenario with yunIO and the AI Builder
permalink: /:collection/:path
weight: 3
---

This article shows an example of how to integrate yunIO with Microsoft Power Automate and the AI Builder.

AI builder is a capability offered in the Power Platform that enables the usage of artificial intelligence to automate processes in Power Apps anjd Power Automate.
Microsoft offers a couple of prebuilt AI models that allow to start using the tool right away without training the AI model first.
For more Information on see the official [Microsoft AI Builder Documentation](https://docs.microsoft.com/en-gb/ai-builder/overview).

In this scenario invoice information is extracted with the AI Builder action in Power Automate and automatically posted to the backend SAP ERP system.
A pre-built AI Builder template is used for this use case.   

### Prerequisites in yunIO

1. Create a service in yunIO for incoming invoice creation. For this example we use BAPI_INCOMINGINVOICE_CREATE1 to create an incoming invoice in SAP. 
The service has the following settings:<br>
- Set the following import parameters to *Supplied by Caller* (Structure *HEADERDATA*).
	- INVOICE_IND (Indicator: post invoice)
	- DOC_TYPE (Document Type)
	- DOC_DATE (Document Date in Document)	
	- PSTNG_DATE (Posting Date in the Document)
	- COMP_CODE	(Company Code)
	- DIFF_INV (Different Invoicing Party)
	- CURRENCY (Currency Key)
	- CURRENCY_ISO (ISO currency code)
	- GROSS_AMOUNT (Gross Invoice Amount in Document Currency)
	- PMNTTRMS (Terms of Payment Key)
	- BLINE_DATE (Baseline Date for Due Date Calculation)
	- PMNT_BLOCK (Payment Block Key)
	- PYMT_METH	(Payment Method)
	- PMTMTHSUPL (Payment Method Supplement)
	- INVOICESTATUS	(Invoice Document Status)
- Select export parameters FISCALYEAR (Fiscal Year) and INVOICEDOCUMENTNUMBER (Document Number of an Invoice Document) for the output.  
- Select all fields in the Table *RETURN* for the output.
2. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

{: .box-note }
**Note:** Depending on your SAP customizing for the invoicing process, it could be other parameters be necessary to sucessfully create an incoming invoice. This is an example with the minimum required fields from our SAP demo environment.  

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 

### Other Prerequisites
When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway is needed to tunnel the connection e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
You decide which gateway solution you want to use.<br> 
If you choose the **Microsoft On-premises data gateway**, install and configure the gateway before proceeding to the next steps.

The process for incoming invoice creation must be customized and ready to use in SAP. It is recommended to test a BAPI/function call in SAP first with transaction SE37 before building a web service of it.   

 
### Configuring a yunIO Custom Connector in Power Automate
Import and configure the created yunIO service for incoming invoice creation in Power Automate.  
For detailed information about how to configure, test and use a custom connector build with a yunIO service have a look at the [following knowledgebase article](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate).

### Create a Power Automate Flow for invoice processing using the AI Builder
In our use case we want to automatically extract invoicing information with the AI Builder tool from random invocing PDF files and post this information to SAP.

Therefore we dwell on the following prebuilt [model provided by Microsoft](https://docs.microsoft.com/en-gb/ai-builder/flow-invoice-processing).
Follow the steps described in the documentation. 

After the AI Builder step add an initialize variable step, with the following settings. We need this to automatically convert the invoice date coming from the document into SAP compliant format. 
![Power-Automate-initialize-variable.png](/img/contents/yunio/yunio-power-automate-initialize-variable.png){:class="img-responsive"}

For simplicity we use only one variable and use it later for the document date, the posting date and the billing date required for inocming invoice creation in SAP..
Map the field *Invoice Date (Date)* returned from the AI Builder action to field *Value* of the initialize variable action.

After that add the previously created yunIO custom connector for incomcing invoice creation as a workflow step.

You need to map the output fields of the AI Builder action now to the parameters of the custom connector.  
  


******

#### Related Links
- [Youtube Tutorial: SAP process automation | Power Automate SAP Connector](https://www.youtube.com/watch?v=A-2cOpGmCJ8)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)