---
layout: page
title: Using T-SQL Query Values To Parameterize SAP Extractions
description: Using T-SQL query values to parameterize SAP extractions 
permalink: /:collection/:path
weight: 20
---
### About

The following article describes how T-SQL query results can be passed to SSIS variables. These values can then be passed as call parameters to the Xtract IS tasks. 

The T-SQL query on existing SQL table objects is a single value that is then passed to a dedicated selection criterion. 

The following example uses the Xtract BAPI task, which dynamically executes the *FISCYEAR* selection field at runtime. 

{: .box-note }
**Note:**  This example case can also be used for other Xtract IS tasks within SQL Sever Integration Services (SSIS).

### Step-by-Step Guide

1. Drag & Drop the SSIS Task *Execute SQL Task* to the Control Flow canvas (1).
![Execute SQL Task - Control Flow](/img/contents/xis/control-flow-execute-sql-task.png){:class="img-responsive"}
2. Create a SSIS-Variable of data type String, e.g. *@[User::myGJAHR]* (2).
![Execute SQL Task - Control Flow](/img/contents/xis/ssis-variable-myGJAHR.png){:class="img-responsive"}
3. Use the correct OLE-DB connection to the SQL Server Database, where the required Table values already exists.
4. Edit the Execute SQL Task and click on the *Build Query button* (3).
![Execute SQL Task - Control Flow](/img/contents/xis/build-query-button.png){:class="img-responsive"}
5. Select the required T-SQL statement to fetch the needed value, e.g. fiscal year column MSEG~MJAHR: *SELECT MAX(MJAHR) AS maxMJAHR FROM MSEG*.
![Execute SQL Task - Control Flow](/img/contents/xis/query-builder.png){:class="img-responsive"}
6. Open the *Result Set* configuration and map the result of the T-SQL statement to the defined SSIS variable *@[User::myGJAHR]* (4).
![Execute SQL Task - Control Flow](/img/contents/xis/result-set-configuration.png){:class="img-responsive"}
7. Proceed with configuring a Data Flow task with the Xtract BAPI task and corresponding OLE-DB task for processing the BAPI result.
![Execute SQL Task - Control Flow](/img/contents/xis/data-flow-task.png){:class="img-responsive"}
![Execute SQL Task - Control Flow](/img/contents/xis/data-flow-task-xtract-BAPI.png){:class="img-responsive"}
8. Select the defnied SSIS variable myGJAHR to the corresponding selection criterion (5).
![Execute SQL Task - Control Flow](/img/contents/xis/BAPI-task-selection-criterion.png){:class="img-responsive"}
9. Execute the SSIS package and check the results with known built-in functionalities.

****
#### Releated Links
- [Xtract BAPI](https://help.theobald-software.com/en/xtract-is/bapi)
- [Xtract BAPI Parameterization](https://help.theobald-software.com/en/xtract-is/bapi/parameters)
- [Execute SQL Task](https://learn.microsoft.com/en-us/sql/integration-services/control-flow/execute-sql-task?view=sql-server-ver16)
- [Integration Services (SSIS) Variables](https://learn.microsoft.com/en-us/sql/integration-services/integration-services-ssis-variables?view=sql-server-ver16)
