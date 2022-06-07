---
layout: page
title: Integation Scenario with yunIO and AI Builder
description: Integation scenario with yunIO and the AI Builder
permalink: /:collection/:path
weight: 3
---

This article shows how to integrate yunIO with Microsoft Power Automate and the [Microsoft AI Builder](https://docs.microsoft.com/en-gb/ai-builder/overview).<br>

AI Builder enables the usage of artificial intelligence to automate processes in Power Apps and Power Automate.
Microsoft offers pre-built AI models to start using the tool without training the AI model first.
The following example scenario uses an AI Builder template in Power Automate to automatically extract and post invoice information to the backend SAP ERP system. 
In the SAP system an incoming invoice for a previously created purchase order is booked.
 
### Prerequisites
- When integrating services from a local yunIO installation with a cloud hosted platform like Power Automate, a gateway is to tunnel the connection is recommended, e.g., the [**Microsoft On-premises data gateway**](https://docs.microsoft.com/en-us/data-integration/gateway/).
For more information about yunIO networking settings, see [yunIO Networking Scenarios](https://kb.theobald-software.com/yunio/networking).
- The process for incoming invoice creation must be customized and ready to use in SAP.  
- Test the BAPI/function call in SAP with transaction SE37 before building the web service. Note which parameters are needed for the call.

### Creating a Service in yunIO

Create a yunIO service for incoming invoices.<br>
Note that the parameters that are needed to create an incoming invoice are dependent on your customized SAP settings for the invoicing process.

1. Create a service in yunIO of type *Function Module / BAPI*. <br>
This example uses the BAPI_INCOMINGINVOICE_CREATE1 to create an incoming invoice in SAP. 
2. Set the following import parameters to *Supplied by Caller* (Structure *HEADERDATA*):<br>
- INVOICE_IND (Indicator: post invoice)<br>
- DOC_TYPE (Document Type)<br>
- DOC_DATE (Document Date in Document)	<br>
- PSTNG_DATE (Posting Date in the Document)<br>
- COMP_CODE	(Company Code)<br>
- DIFF_INV (Different Invoicing Party)<br>
- CURRENCY (Currency Key)<br>
- CURRENCY_ISO (ISO currency code)<br>
- GROSS_AMOUNT (Gross Invoice Amount in Document Currency)<br>
- PMNTTRMS (Terms of Payment Key)<br>
- BLINE_DATE (Baseline Date for Due Date Calculation)<br>
- PMNT_BLOCK (Payment Block Key)<br>
- PYMT_METH	(Payment Method)<br>
- PMTMTHSUPL (Payment Method Supplement)<br>
- INVOICESTATUS	(Invoice Document Status)<br>
3. Select export parameters FISCALYEAR (Fiscal Year) and INVOICEDOCUMENTNUMBER (Document Number of an Invoice Document) for the output.  
4. Select the Table *RETURN* for the output and set the following fields of table ITEMDATA to *Supplied by Caller*:<br>
- INVOICE_DOC_ITEM (Document Item in Invoice Document)<br>
- PO_NUMBER (Purchase Order Number)<br>
- PO_ITEM (Item Number of Purchasing Document)<br>
- ITEM_AMOUNT (Amount in document currency)<br>
- QUANTITY (Quantity)<br>
- PO_UNIT (Purchase Order Unit of Measure)	<br>
5. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download-invoices.png){:class="img-responsive" width="800px"}

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Power Automate, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 


### Configuring a yunIO Custom Connector in Power Automate

To use the service created in [Prerequisites in yunIO](#prerequisites-in-yunio) with Power Apps, it must be available as a custom connector in Power Automate. 
For information on how to integrate a yunIO service with Power Automate, see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate).

### Creating a Power Automate Flow for Invoice processing

To automatically extract invoicing information with the AI Builder tool from random invoicing PDF files and post this information to SAP.

1. Follow the steps described in the [Microsoft AI Builder Documentation](https://docs.microsoft.com/en-gb/ai-builder/flow-invoice-processing) to create a new Power Automate flow that uses the invoice processing pre-built model of AI Builder.
2. Add an *Initialize variable* action after the AI Builder action. 
This variable is used to automatically convert extracted dates into an SAP compliant format, i.e. the document date, 
the posting date and the billing date required for incoming invoice creation in SAP. 
3. Map the field *Invoice Date (Date)* returned from the AI Builder action to field *Value* of the *Initialize variable* action.<br>
![Power-Automate-initialize-variable.png](/img/contents/yunio/yunio-power-automate-initialize-variable.png){:class="img-responsive"}
4. Add the yunIO custom connector for incoming invoice creation.
5. Map the required output fields of the AI Builder action to the matching parameters of the custom connector. 
Keep in mind that some fields need fixed values required by SAP (INVOICESTATUS, INVOICE_IND,...), while others need output values from the invoice document extracted with the AI Builder action (DOC_DATE,...).<br>
Because the table ITEMDATA is used in a BAPI that can process multiple invoice items, Power Automate automatically sets an *Apply to each* action as the next workflow step. 
This example demonstrates a simple case with a single invoice line item. 
![Power-Automate-AI-Builder-mapping1.png](/img/contents/yunio/yunio-power-automate-ai-builder-mapping1.png){:class="img-responsive"}
6. Use an expression to automatically convert the date fields into an SAP compliant format, see [Formats and Conversions in Power Automate](./conversion-in-power-automate). 
7. Optional: Add an email notification action to get notified about the newly created incoming invoice.
Use the output parameters INVOICEDOCNUMBER and FISCALYEAR in the notification email to see if the invoice was successfully created.
Other SAP output information (i.e. table RETURN) can be extracted to analyze the data in case of workflow failures. <br>
![Power-Automate-email-notification-invoice.png](/img/contents/yunio/yunio-power-automate-notification-invoice.png){:class="img-responsive"}
8. Publish the workflow.

{: .box-note }
**Note:** Note that the values used in this example might not be valid for your SAP system. 
In your case other (fixed) values might be necessary to run the process.  

### Test the Workflow

1. Upload a suitable invoice PDF-document. 
If needed, [download a sample EXCEL file (.xlsx)](/files/yunio/Invoice_Easy_Computer_Software-AI-Builder-Sample.xlsx){:download="Invoice_Easy_Computer_Software-AI-Builder-Sample.xlsx"} that can be used as an invoice document.<br>
Note that a purchase order on which the incoming invoice can be booked, must already exist in the SAP ERP system. 
For more information on incoming invoices, see [SAP Documentation: Incoming Invoice](https://help.sap.com/docs/SAP_ERP/ffc393c91a904eb5b0bec93aa34e42d8/dc6eb6531de6b64ce10000000a174cb4.html?version=6.02.latest&locale=en-US).
![Power-Automate-AI-Builder-run-flow.png](/img/contents/yunio/yunio-ai-builder-run-flow.png){:class="img-responsive"}
2. Check if the workflow steps are successfully executed one after the other.<br>
3. Check if an incoming invoice is created in SAP. <br>

******

#### Related Links
- [Youtube Tutorial: SAP process automation- Power Automate SAP Connector](https://www.youtube.com/watch?v=A-2cOpGmCJ8)
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)
- [SAP Documentation: Incoming Invoice](https://help.sap.com/docs/SAP_ERP/ffc393c91a904eb5b0bec93aa34e42d8/dc6eb6531de6b64ce10000000a174cb4.html?version=6.02.latest&locale=en-US)
