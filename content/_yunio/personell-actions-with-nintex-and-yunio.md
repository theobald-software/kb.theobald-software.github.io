---
layout: page
title: Employee Onboarding using Nintex and yunIO
description: Employee Onboarding using Nintex and yunIO
permalink: /:collection/:path
weight: 27
---

This article shows how to use the Nintex [template for employee onboarding](https://gallery.nintex.com/t/employee-onboarding) with yunIO to create new employees in SAP.<br>


### About

The [Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding) workflow provided by Nintex includes a form for filling in employee details. 
Based on the input, the workflow generates and sends the new hire their ‘Employee Contract’. 
Once the contract is signed, the workflow automatically stores the employee contract in a file storage system, starts user provisioning with Active Directory, and sends the new hire a welcome email.

This article leads you through all necessary steps to add a yunIO Xtension to the Employee Onboarding workflow to create the new employee in SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. 
This example uses the integration type *Transaction* for the service.
3. .<br>
![yunio-Services-Function-Download](/img/contents\yunio\yunio-bapi-createcustomer.png){:class="img-responsive"}
5. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" }

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Nintex, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 

### Setup in Nintex

1. Import the Nintex template for employee onboarding to your tennant, see [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding).

### Setup in Power Automate

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as a Custom Connector in Power Automate, see [Integrating a yunIO Service with Power Automate](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-power-automate#configuring-a-yunio-custom-connector-in-power-automate).
2. Create a new workflow that is triggered when a Salesforce account is modified (1).
3. Check if the account type in Salesforce is set to *Customer - Direct* and if the customer does not yet exist in SAP (2).<br>
If one or both conditions are false, end the workflow (3).
If both conditions are true, execute the yunIO service to write the customer data to SAP (4).<br>
![power-automate-salesforce-conditions](/img/contents/yunio/power-automate-salesforce-conditions.png){:class="img-responsive"}
4. Add the yunIO connector created in step 1 to the workflow and map the customer data from Salesforce to the input parameters of yunIO.<br>
![power-automate-yunio-parameters](/img/contents/yunio/power-automate-yunio-parameters.png){:class="img-responsive"}
5. Check if the SAP customer was created using the yunIO return field TYPE (5). <br>
If TYPE does not equal 'E' (error), the SAP customer number is written back to Salesforce.
6. When updating the Salesforce account (6), assign the CUSTOMERNO from yunIO to *SAP ID* and set the checkbox *In SAP* to 'Yes'.
![power-automate-write-to-salesforce](/img/contents/yunio\power-automate-write-to-salesforce.png){:class="img-responsive"}
7. Optional: Send notifications when a customer is created or log all synchronized Salesforce accounts e.g., in a SharePoint Online list. 
8. Turn on the workflow.


### Triggering the Process

1. Open Salesforce and change the account type from *Prospect* to *Customer - Direct*.
Make sure that the checkbox *In SAP* is deactivated.
2. The Power Automate workflow runs and creates the customer in SAP. <br>
![power-automate-finished](/img/contents/yunio/power-automate-finished.png){:class="img-responsive"}
3. Check if the SAP customer number is set in Salesforce and if the checkbox *In SAP* is active.
![salesforce_after_sap](/img/contents/yunio/salesforce_after_sap.png){:class="img-responsive" width="900px"}
4. Open SAP and look up the customer using the transaction **xd03**. Enter the customer number from Salesforce to look up the customer.
![sap-customer-search](/img/contents/yunio/sap-customer-search.png){:class="img-responsive"}
