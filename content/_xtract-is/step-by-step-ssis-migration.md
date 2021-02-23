---
layout: page
title: Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2019
description: Step-by-step instructions for migrating SSIS 2008/2012 packages to SSIS 2019
permalink: /:collection/:path
weight: 99
---

To upgrade existing SSIS packages to the latest SQL Server version (currently 2019), existing SSIS packages created with SSIS 2012 must be converted and integrated into the new SQL Server 2019 environment in a specific order. 

The following instructions should be followed carefully to ensure the executability of the SSIS packages and to keep them working.

Necessary prerequisite for the migration to a new SQL Server version is the installation of the latest XTRACT IS version on the new server environment or the execution of the existing XtractISSetup.exe. 

SQL Server 2019 and Visual Studio 2019 are supported since Xtract IS version **6.2.0.** 

### The functionality of the SSIS packages and SSIS projects could be ensured by the following order:

{: .box-note }
**Note:** The password encryption of the SSIS packages by means of the [ProtectionLevel property]((https://docs.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#set_protection)) must be deactivated or changed for the conversion of the SSIS packages.

1. Use the XtractISConversionPreparer.exe, located in the Xtract IS installation routine, to convert the SSIS packages to the SQL Server 2016 version.
2. Open the Solution and project in VS/SSDT. The packages should open and might display the following error `could not acquire Xtract connection`
3. Right click on the project and open the project properties.
4. Change the Deployment Target Version to SQL Server 2016.  
5. Save the SSIS project.
6. Right click on the project and open the project properties.
7. Now change the Deployment Target Version to SQL Server 2019. 
8. Save the SSIS project.


Finally, you can deploy the SSIS packages to your SSIS runtime.

*****
#### Related links
 - [Customer Portal](https://my.theobald-software.com/)
 - [Access Control for Sensitive Data in Packages](https://docs.microsoft.com/en-us/sql/integration-services/security/access-control-for-sensitive-data-in-packages?view=sql-server-ver15#protection-levels)



