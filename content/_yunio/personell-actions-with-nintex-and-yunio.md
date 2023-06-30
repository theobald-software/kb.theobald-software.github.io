---
layout: page
title: Employee Onboarding using Nintex and yunIO
description: Employee Onboarding using Nintex and yunIO
permalink: /:collection/:path
weight: 27
---

This article shows how to use the Nintex [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) with yunIO to create new employees in SAP.<br>


### About

The [Employee Onboarding scenario template](https://gallery.nintex.com/t/employee-onboarding) provided by Nintex includes a form for filling in employee details. 
Based on the input, the workflow generates and sends the new hire their ‘Employee Contract’. 
Once the contract is signed, the workflow automatically stores the employee contract in a file storage system, starts user provisioning with Active Directory, and sends the new hire a welcome email.

This article leads you through all necessary steps to add a yunIO Xtension to the Employee Onboarding workflow to create the new employee in SAP.

### Setup in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

{: .box-note }
**Note:** The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. 
This example uses the integration type *Transaction* for the service.
3. Record SAP transactions to create a new employee in SAP, see [Working with Transaction PA40](https://kb.theobald-software.com/yunio/transaction-pa40). Example:<br>
![PA40](/img/contents/yunio/pa40.gif){:class="img-responsive" style="border:1px solid black;"}
4. Parameterize all mandatory SAP fields in the yunIO service. 
For information on how to parameterize services, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).<br>
This example uses the following input parameters:
*EntryDate*, *FirstName*, *LastName*, *BirthDate*, *BirthPlace*, *Language*, *Nationality*, *Street*, *City*, *PostalCode*.<br>
The input parameters can be adjusted according to your individual scenario requirements.
![PA40](/img/contents/yunio/pa40-parameters.gif){:class="img-responsive" style="border:1px solid black;"}
5. Download the service definition (![download-file](/img/contents/yunio/download.png) icon).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive"}

<!---
&bull; Entry Date <br>
&bull; First Name <br>
&bull; Last Name <br>
&bull; Birth Date <br>
&bull; Birth Place <br>
&bull; Language <br>
&bull; Nationality <br>
&bull; Street <br>
&bull; City <br>
&bull; Postal Code <br>
-->

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Nintex, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 

### Setup in Nintex

1. Integrate the yunIO service created in [Setup in yunIO](#setup-in-yunio) as an Xtension in Nintex, see [Integrating a yunIO Service with Nintex: Configuring a yunIO Xtension in Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex#configuring-a-yunio-xtension-in-nintex).
2. Import the Nintex template for Employee Onboarding to your tenant, see [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding).
3. Open the imported Nintex workflow.
4. Add the yunIO Xtension from step 1 after the contract is signed.<br>
![personnel-actions-nintex](/img/contents/yunio/personnel-actions-nintex.png){:class="img-responsive"}
5. Edit the start form to include input fields for SAP (*EntryDate*, *FirstName*, *LastName*, *BirthDate*, *BirthPlace*, *Language*, *Nationality*, *Street*, *City*, *PostalCode*):<br>
![personnel-actions-nintex-form2](/img/contents/yunio/personnel-actions-nintex-form2.png){:class="img-responsive" width="700px"}
6. Create a new variable for every *Date/Time* field to change the date to the format "DD.MM.YYYY". This format is required by SAP.<br>
![personnel-actions-nintex-date](/img/contents/yunio/personnel-actions-nintex-date.png){:class="img-responsive" }
7. Map the parameters of the input form to the input fields of the yunIO Xtension.<br>
![personnel-actions-nintex-parameters](/img/contents/yunio/personnel-actions-nintex-parameters.png){:class="img-responsive"}
8. Optional: Add a **Log to instance details** action after the yunIO Xtension to monitor any returned error messages.
9. Test the workflow.


*****
#### Related Links
- [yunIO Online Help](https://help.theobald-software.com/en/yunio/)
- [yunIO Online Help: Transactions](https://help.theobald-software.com/en/yunio/transactions)
- [Nintex Gallery: Employee Onboarding](https://gallery.nintex.com/t/employee-onboarding)
- [Integrating a yunIO Service with Nintex](https://kb.theobald-software.com/yunio/integrating-a-yunio-service-with-nintex)
