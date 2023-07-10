---
layout: page
title: Integrating a yunIO Service with Alteryx
description: Integrating a yunIO Service with Alteryx
permalink: /:collection/:path
weight: 3
progressstate: 5
---


This article shows how to integrate a yunIO service with Alteryx.

Alteryx is a software platform that allows people to to access, cleanse, test, combine, analyze and output data. 
For more Information on Alteryx, see [Alteryx Official Website](https://www.alteryx.com/).

### Creating a Service in yunIO

yunIO is the connector that reads and writes data from and to SAP.
For more information on yunIO, see [Theobald Software: yunIO](https://theobald-software.com/en/yunio/).

{: .box-note }
**Note:** The parameters that are needed to create new employees are dependent on your customized SAP settings.

1. Define a [connection to your SAP system](https://help.theobald-software.com/en/yunio/sap-connection) in yunIO. 
2. [Create a new service](https://help.theobald-software.com/en/yunio/getting-started#creating-a-service) in yunIO. 
This example uses the integration type *Transaction* for the service.
3. Record SAP transactions to create a new customer in SAP, see [Working with Transaction XA02](https://kb.theobald-software.com/yunio/transaction-xa02). Example:<br>
4. Parameterize all mandatory SAP fields in the yunIO service. 
For information on how to parameterize services, see [yunIO Help: Parameterize Transactions](https://help.theobald-software.com/en/yunio/transactions#parameterize-transactions).<br>
5. Click ![download-file](/img/contents/yunio/download.png) to download the service definition.<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}

{: .box-tip }
**Tip:** It is recommended to test a yunIO service in a REST client before integrating it with Alteryx, see [Running a yunIO Service in Swagger Inspector](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-swagger-inspector) or [Running a yunIO Service in Postman](https://kb.theobald-software.com/yunio/running-a-yunio-service-in-postman). 


### Integrating a yunIO Service in Alteryx

You can download the Alteryx workflow for this application here: [yunIO_Customer_Update.yxwz](/files/yunio/yunIO_Customer_Update.yxwz){:download="yunIO_Customer_Update.yxwz"}



******

#### Related Links
- [yunIO Help: How to Run a Service](https://help.theobald-software.com/en/yunio#how-to-run-a-service)
- [Alteryx Designer Documentation](https://help.alteryx.com/20231/designer/documentation)
