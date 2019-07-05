---
layout: page
title: Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2017
description: Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2017
permalink: /:collection/:path
weight: 99
---
Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2017

To upgrade to the current SQL Server version, existing SSIS packages must be converted and integrated into the new SQL Server 2017 environment in a specific order. 

The following instructions should be followed carefully to ensure the executability of the SSIS packages and to keep them working.

Necessary prerequisite for the migration to a new SQL Server version is the installation of the latest XTRACT IS version on the new server environment or the execution of the existing XtractISSetup.exe. 

This can be downloaded via the access to our [customer portal}(https://portal.theobald-software.com/Auth/Login).

#### The functionality of the SSIS packages and SSIS projects could be ensured by the following order:

1. Use the XtractISConversionPreparer.exe, located in the Xtract IS installation routine, to convert the SSIS packages to the SQL Server 2016 version.
2. Open the project, the Solution in SSDT 2017 or VS 2017
3. Right click on the project and open the project properties
4. Change the Target Deployment Model to SQL Server 2016  
5. Then open the SSIS packages in the project 
6. The packages should open and display without error, <could not aquire Xtract connection> 
7. Save the project in VS 2017 or SSDT 2017
8. Right click on the project and open the project properties
9. Renewed conversion to Target Deployment version SQL Server 2017 
10. Saving the SSIS project


Finally, you can deploy the SSIS packages in SSMS as usual and schedule and execute them using the SQL Server Agent.

