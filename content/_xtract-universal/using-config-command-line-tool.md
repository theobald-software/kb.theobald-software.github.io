---
layout: page
title: Creating extractions without using the Xtract Universal designer GUI
description: Creating extractions without using the Xtract Universal designer GUI
redirect_from:
  - xtract-universal/explanation-of-using-config-command-line-tool
permalink: /:collection/:path
weight: 25
---
As of Xtract Universal Version 4.26.1, the command line tool *xu-config.exe* is available to customers for creating extractions, sources and destinations outside of the Xtract Universal Designer. The *xu-config.exe* can be found in the installation directory of Xtract Universal, e.g., `C:\Program Files\XtractUniversal\xu-config.exe`.

{: .box-note }
**Note:** This tool is **EXPERIMENTAL** and still in development. Beware of bugs and breaking changes! 
The tool supports the extraction types [Table](https://help.theobald-software.com/en/xtract-universal/table), [ODP](https://help.theobald-software.com/en/xtract-universal/odp) and [DeltaQ](https://help.theobald-software.com/en/xtract-universal/datasource-deltaq).

{: .box-note }
**Note:** As of Xtract Universal 5.0.0, xu-config.exe must be executed under the same Windows AD account as the [Xtract Universal service](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account) is running. In this case, you need to run the Windows command prompt as that respective user or use the ```runas```command.


### Creating an SAP Source using Windows Command Prompt

Note that the xu-config.exe only supports SAP connections with plain authentication.

1. Start the Command Prompt application (1) with admin-user rights (2). 
![cmd-prompt](/img/contents/cmd_prompt.png){:class="img-responsive"}
2. Navigate to the installation directory of Xtract Universal (3).
3. Run the following shell command to create an encrypted password for your SAP source: `powershell ./protect-password.ps1` (4).<br>
The execution of powershell scripts must be authorized on your system, see [Microsoft Documentation: Managing the execution policy with PowerShell](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2#managing-the-execution-policy-with-powershell).
4. Select the *xu-config.exe* command line tool from the Xtract Universal installation directory and enter the following command: <br>
`xu-config.exe --source <name> <host> <instance-number> <client> <language> <user> <protected-password>`.<br>
Replace the parameters in `< >`with actual values (5). The parameters are not case sensitive.<br>
![create_source_command_prompt](/img/contents/create_source_command_prompt.png){:class="img-responsive"}
5. Execute the *xu-config* by confirming the input. The xu-config and the XU service must run under the same account.
6. Check the generated source in the Xtract Universal Designer or in the following directory: <br>`C:\Program Files\XtractUniversal\config\sources`.

### Creating a Destination using Windows Command Prompt

{: .box-note }
**Note:** The xu-config.exe only supports the creation of the [Azure Storage](https://help.theobald-software.com/en/xtract-universal/destinations/azure-storage#destination-details) and [Amazon AWS S3](https://help.theobald-software.com/en/xtract-universal/destinations/amazon-aws-s3#destination-details) destinations.

1. Start the Command Prompt application (1) with admin-user rights (2). 
![cmd-prompt](/img/contents/cmd_prompt.png){:class="img-responsive"}
2. Navigate to the installation directory of Xtract Universal (3).
3. Run the following shell command to create encrypted passwords or keys needed for the destination: `powershell ./protect-password.ps1` (4). <br>
The execution of powershell scripts must be authorized on your system, see [Microsoft Documentation: Managing the execution policy with PowerShell](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2#managing-the-execution-policy-with-powershell).
4. Select the *xu-config.exe* command line tool and depending on the destination you want to create, enter one of the following commands. <br>
Azure Storage: `xu-config.exe --azure <account> <accesskey> <container> <folder(opt)>`.<br>
Amazon AWS S3 with user credentials: `xu-config.exe --s3 --auth user <key> <secretkey> <bucket> <region> <folder(opt)>`.<br>
Amazon AWS S3 with authentication via IAM role: `xu-config.exe --s3 --auth iam <bucket> <region> <folder(opt)>`.<br>
Replace the parameters in `< >` with actual values (5). The names of the parameters are not case sensitive.<br>
![create_destination_command_prompt](/img/contents/create_destination_command_prompt.png){:class="img-responsive"}
5. Execute the *xu-config* by confirming the input. The xu-config and the XU service must run under the same account.<br>
6. Check the generated destination in the Xtract Universal Designer or in the following directory: <br>`C:\Program Files\XtractUniversal\config\destinations`.

### Creating a Table Extraction using Windows Command Prompt
1. Start the Command Prompt application (1) with admin-user rights (2). 
![cmd-prompt](/img/contents/cmd_prompt.png){:class="img-responsive"}
2. Navigate to the installation directory of Xtract Universal.
3. Select the *xu-config.exe* command line tool enter the following command: <br>`xu-config.exe --extraction <source> <destination> --table <table>`.
Replace the parameters in `< >`with actual values (3). 
Enter a [defined SAP Connection, Destination](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/backup-and-migration#configuration-files) and an SAP Table object for the parameters \<source\>, \<destination\> and \<table\>. 
The names of the parameters are not case sensitive. <br>
![administrator-command-prompt-xu-config](/img/contents/administrator-command-prompt-xu-config.png){:class="img-responsive"}
4. Execute the *xu-config* by confirming the input. The xu-config and the XU service must run under the same account.
5. Check the generated table extraction in the Xtract Universal Designer or in the following directory: <br>`C:\Program Files\XtractUniversal\config\extractions`.
![xu-config-xu-designer-gui](/img/contents/xu-config-xu-designer-gui.png){:class="img-responsive"} 
6. Use of all known functionalities e.g., filters, runtime parameters, execution, scheduling of extraction.

{: .box-note }
**Note:** The following table settings are set by default after creation: **Package Size (50000)**, **Extract data in background job (enabled)**, **Selecting all related fields**.

{: .box-tip }
**Tip:** Use the command `xu-config.exe -h` to find examples for ODP and DeltaQ extractions.

### Creating multiple Table Extractions using a PowerShell-Script
Using suitable scripts, a large number of extractions can be generated almost automatically and consequently contribute to the generation of an SAP data warehouse.

```shell
# read table list
$tableList = "KNA1","LFA1","MARA","CSKT","SKA1"
# set the path to the installation folder
$XUConfig = 'C:\Program Files\XtractUniversal\xu-config.exe'
# source sytem
$source = "ec5"
# destination
$destination = "sqlserver2019"

# loop the tables
foreach ($tableName in $tableList) {
    # create the extraction e.g.
    # xu-config.exe --extraction ec5 sqlserver2019 --table KNA1 
	Try {	    	        
		write-host -f Green "$tableName : Creation of Extraction is starting "  (Get-Date)            			
	    &$XUConfig --extraction $source $destination --table $tableName    
	    
	    # check the last exit code
	    # 0: successful
	    # else unsuccessful
	    if($LASTEXITCODE -eq 0) {                           
			write-host -f Green "$tableName : Creation of Extraction  is successful"  (Get-Date)            
	    } else {           
	        write-host -f Red "$tableName : Creation of Extraction failed with error code $LASTEXITCODE!"  (Get-Date)
	        #Write-Host $errorMessage
	    }                
	}
	Catch {
		write-host -f Red "$tableName : Creation of Extraction failed with Exception ! " + (Get-Date)  $_.Exception.Message
	}    	  
}
```


*****
#### Related Links
 - [SAP Connection](https://help.theobald-software.com/en/xtract-universal/introduction/sap-connection#creating-an-sap-connection)
 - [Define a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction#adding-tables)
 - [Running an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction)
 - [WHERE Clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause)
 - [Scheduling an Extraction](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-scheduler)
 
