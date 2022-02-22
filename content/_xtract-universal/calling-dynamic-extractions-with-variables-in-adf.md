---
layout: page
title: Calling Dynamic Extractions with Variables in ADF
description: Calling Dynamic Extractions with Variables in ADF
permalink: /:collection/:path
weight: 53
---

This article shows how to call Xtract Universal extractions dynamically from Azure Data Factory (ADF) using user-defined variables. <br>

### Calling Dynamic Extractions with Variables

In the following example, an extraction with a date parameter is called in ADF.
The date parameter is set dynamically using a user-defined variable.<br>
The goal of this example is to run daily extractions that only write data added or updated on the day before to the destination.

1. Create an extraction in Xtract Universal that uses runtime parameters.<br>
This example uses an extraction called *0COSTCENTER_0101_HIER* with a date parameter called *myDate*. 
2. Create a pipeline in ADF that stores yesterday's date in a variable (1).<br>
![adf-pipeline](/img/contents/adf-pipeline.png){:class="img-responsive"}
3. Format the date to the internal SAP date format (YYYYMMDD).<br>
The type and format of the input variable must match the type and format of the actual parameter in Xtract Universal.
![adf-call-extractions-variable](/img/contents/azura-data-factory-date-variable.png){:class="img-responsive"}
4. Add a web activity that calls extractions (2).
The URL used to call static extractions has the following format: <br>`[Protocol]://[HOST or IP address]:[Port]/?name=[Name of the Extraction]`
5. To set runtime parameters of an extraction, add the corresponding variables to the extraction URL using the *@concat* command. 
The concatenated string has the following format:<br>
`@concat('[Protocol]://[HOST or IP address]:[Port]/?name=[Name of the Extraction]&[Name of the Parameter in XU]=',variables('[Name of the Variable in ADF'))`<br>
![adf-call-extractions-variable](/img/contents/adf-call-extraction-variable.png){:class="img-responsive"}
6. Run the pipeline and check the result.

{: .box-tip }
**Tip:** You can copy the URL of an extraction from the Run window in Xtract Universal, see [Online Help: Running an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction#run-extraction).

******

#### Related Links
- [Run an ADF pipeline when an SAP extraction file is successfully uploaded to Azure storage](https://kb.theobald-software.com/xtract-universal/runs-an-ADF-pipeline-when-sap-extraction-file-is-successfully-uploaded-to-Azure-storage)
- [Integration in Azure Data Factory using Webservices](https://kb.theobald-software.com/xtract-universal/adf-integration-using-webservices)
- [Integration in Azure Data Factory using Command Line](https://kb.theobald-software.com/xtract-universal/adf-integration-using-command-line)
- [Online Help: User-Defined Variables](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/user-defined-variables)
- [Online Help: Call via Webservice](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice)
- [Online Help: Metadata access via HTTP-JSON](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http-json)