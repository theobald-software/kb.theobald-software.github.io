---
layout: page
title: Execute & Schedule All Xtract Universal Extractions
description: execute_all_defined_xu_extractions 
permalink: /:collection/:path
weight: 11
---
### About this approach

The following article describes how to execute and schedule all defined extractions within Xtract Universal designer. 

The implementation of this scenario is realized via the integration of an SSIS-package. 

This uses the onboard SSIS tasks to sequentially call all existing extraction in Xtract Universal. 

The execution is implemented via the SQL Server Agent as part of the SSIS-DB. The following requirements have to be fulfilled and are documented below. 

### Requirements

The following programs and tool are a prerequisite for using the above-mentioned SSIS-package:

- Installed [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads).
- Installed [SQL Server Management Studio (SSMS)](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15).
- [Configure SQL Server Agent](https://docs.microsoft.com/en-us/sql/ssms/agent/configure-sql-server-agent?view=sql-server-ver15)
- Installed [Xtract Universal Server](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update)

{: .box-note }
**Note:** The Xtract Universal Server should be installed on the identical environment as the SQL-Server / SSIS-DB using standard directory, e.g. `C:\Program Files\XtractUniversal`.

### Step-by-Step Guide

1. Import the attached SSIS-package into the SSIS-DB - see direct download link in section *Related Links*.
2. Adjust the SSIS parameters to the correct values of the customer installation.
![Configure_XtractUniversalScheduler](/img/contents/xu/Configure_XtractUniversalScheduler.png){:class="img-responsive"}
3. Schedule the deployed SSIS package while using the integrated SQL Server Agent execution jobs.
![Create_Job_XtractUniversalScheduler_XtractUniversalScheduler](/img/contents/xu/Create_Job_XtractUniversalScheduler.png.png){:class="img-responsive"}
4. Execute the created step of the SQL Server Agent.
5. Check the correct execution of all defined extractions within Xtract Universal Designer Window.
![Xtract_Universal_Designer_Status](/img/contents/xu/Xtract_Universal_Designer_Status.png){:class="img-responsive"}
6. Check the results in the extractions' destination(s).
![Destination_Results](/img/contents/xu/Destination_Results.png){:class="img-responsive"}

SSIS parameter | Data type | Sensitive | Required | Example Value | Info
------------ | ------------- | ---------- | ---------| -------- |-------|
XtractUniversalServer| String | False | True | *[ServerName.theobald.local}* | [Xtract Universal Server](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server)
XtractUniversalServerPort | String | False | True | *8065* | [XU-Server Ports](https://help.theobald-software.com/en/xtract-universal/server/ports)

SSIS variables | Data type | Example Value | Expression
------------ | ------------- | ---------- | ---------| 
extraction_arguments| String | *-s todd.theobald.local -p 8065 -n ExtractionName* | `"-s " + @[$Package::XtractUniversalServer]  + " -p " + @[$Package::XtractUniversalServerPort]  + " -n " +  REPLACE ( SUBSTRING( @[User::extraction_folder_name], 53, LEN(@[User::extraction_folder_name]) - 52 ) , "\\general.json", "")`
extraction_folder_name | String | *C:\Program Files\XtractUniversal\config\extractions\ExtractionName\general.json* | -



****
#### Releated Link
- [Call via Commandline](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline)
- [Download SSIS-package XtractUniversalScheduler.dtsx)](/files/xu/XtractUniversalScheduler.dtsx){:download="XtractUniversalScheduler.dtsx"}
- [Run Integration Services (SSIS) Packages](https://docs.microsoft.com/en-us/sql/integration-services/packages/run-integration-services-ssis-packages?view=sql-server-ver15)
- [Create a SQL-Server Agent Job](https://docs.microsoft.com/en-us/sql/ssms/agent/create-a-job?view=sql-server-ver15)