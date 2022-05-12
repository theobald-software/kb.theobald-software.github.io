---
layout: page
title: Execute & Schedule All Xtract Universal Extractions
description: execute_all_defined_xu_extractions 
permalink: /:collection/:path
weight: 11
---

### About

This article shows how to execute and schedule all defined extractions in the Xtract Universal Designer. 

The implementation of this scenario is realized via the integration of an SSIS-package. 
The package uses the onboard SSIS tasks to sequentially call all existing extractions in Xtract Universal. 
The execution is implemented via the SQL Server Agent as part of the SSIS-DB.

### Requirements

The following programs and tools are a prerequisite for using the above-mentioned SSIS-package:

- Install [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
- Install [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
- [Configure SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/configure-sql-server-agent?view=sql-server-ver15).
- Install [Xtract Universal Server](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update).
- [Download SSIS-package *XtractUniversalScheduler.dtsx*](/files/xu/XtractUniversalScheduler.dtsx){:download="XtractUniversalScheduler.dtsx"}.

{: .box-note }
**Note:** The Xtract Universal Server must be installed on the same environment as the SQL-Server / SSIS-DB using the default directory `C:\Program Files\XtractUniversal`.

### Step-by-Step Guide

1. Import the SSIS-package *XtractUniversalScheduler.dtsx* into the SSIS-DB using the Microsoft SQL Server Management Studio.
2. Adjust the SSIS parameters to the correct values of the customer installation.<br>
![Configure_XtractUniversalScheduler](/img/contents/xu/Configure_XtractUniversalScheduler.png){:class="img-responsive"}

   | SSIS Parameter | Data type | Sensitive | Required | Example Value | Info |
   ------------ | ------------- | ---------- | ---------| -------- |-------|
   | XtractUniversalServer| String | False | True | *[ServerName.theobald.local]* | [Xtract Universal Server](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server) | 
   | XtractUniversalServerPort | String | False | True | *8065* | [XU-Server Ports](https://help.theobald-software.com/en/xtract-universal/server/ports) |
3. Schedule the deployed SSIS package using the integrated SQL Server Agent execution jobs. For more information, see [Microsoft Documentation: Create a SQL-Server Agent Job](https://docs.microsoft.com/en-us/sql/ssms/agent/create-a-job?view=sql-server-ver15).
![Create_Job_XtractUniversalScheduler_XtractUniversalScheduler](/img/contents/xu/Create_Job_XtractUniversalScheduler.png){:class="img-responsive"}
4. Execute the created step of the SQL Server Agent.
5. Check the correct execution of all defined extractions within the Xtract Universal Designer window.
![Xtract_Universal_Designer_Status](/img/contents/xu/Xtract_Universal_Designer_Status.png){:class="img-responsive"}
6. Check the results in the extraction destination(s).
![Destination_Results](/img/contents/xu/Destination_Results.png){:class="img-responsive"}

#### About the SSIS Package
The SSIS package contains the following SSIS variables:

SSIS Variables | Data type | Example Value | Expression
------------ | ------------- | ----- | ---------| 
extraction_arguments| String | *-s todd.theobald.local -p 8065 -n ExtractionName* | `"-s " + @[$Package::XtractUniversalServer]  + " -p " + @[$Package::XtractUniversalServerPort]  + " -n " +  REPLACE ( SUBSTRING( @[User::extraction_folder_name], 53, LEN(@[User::extraction_folder_name]) - 52 ) , "\\general.json", "")`
extraction_folder_name | String | *C:\Program Files\XtractUniversal\config\ extractions\ExtractionName\general.json* | -

****
#### Releated Links
- [Call via Commandline](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline)
- [Run Integration Services (SSIS) Packages](https://docs.microsoft.com/en-us/sql/integration-services/packages/run-integration-services-ssis-packages?view=sql-server-ver15)
- [Create an SQL-Server Agent Job](https://docs.microsoft.com/en-us/sql/ssms/agent/create-a-job?view=sql-server-ver15)