---
layout: page
title: Creating extractions without using the Xtract Universal designer GUI
description: Creating extractions without using the Xtract Universal designer GUI
permalink: /:collection/:path
weight: 16
---
As of Xtract Universal Version 4.26.1, the command line tool *xu-config.exe* is available to customers for creating extractions outside of the Xtract Universal Designer: `C:\Program Files\XtractUniversal\xu-config.exe`.

{: .box-note }
**Note:** This tool is **EXPERIMENTAL** and still in development. Beware of bugs and breaking changes! It's currently limited to the extraction types [Table](https://help.theobald-software.com/en/xtract-universal/table) and [DeltaQ](https://help.theobald-software.com/en/xtract-universal/datasource-deltaq).

### Creating a single Table extraction using Command Prompt
1. Start the Command Prompt application (1) with admin-user rights (2).
![cmd-prompt](/img/contents/cmd_prompt.png){:class="img-responsive"}
2. Navigation and selection of the *xu-config.exe* command line tool.
![administrator-command-prompt-xu-config](/img/contents/administrator-command-prompt-xu-config.png){:class="img-responsive"}
3. Input of a defined SAP Connection, Destination & SAP table object for the parameter \<source\>, \<destination\>, \<table\>. The names of the parameters are not case sensitive. <br>
`C:\Program Files\XtractUniversal>xu-config.exe --extraction ec5 sqlserver2019 --table TCURR`
4. Execution of the *xu-config* by confirming the input.
5. Checking the generated table extraction in the Xtract Universal Designer or in the following directory: <br>`C:\Program Files\XtractUniversal\config\extractions`
![xu-config-xu-designer-gui](/img/contents/xu-config-xu-designer-gui.png){:class="img-responsive"} 
6. Use of all known functionalities e.g., filters, runtime parameters, execution, scheduling of extraction.

{: .box-note }
**Note:** The following table settings are set by default after creation: **Package Size (50000)**, **Extract data in background job (enabled)**, **Selecting all related fields**.

### Creating multiple Table extractions using PowerShell-Script
Using suitable scripts, a large number of extractions can be generated almost automatically and consequently contribute for the generation of an SAP data warehouse.

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
#### Related links
 - [SAP Connection](https://help.theobald-software.com/en/xtract-universal/introduction/sap-connection#creating-an-sap-connection)
 - [Destination](https://help.theobald-software.com/en/xtract-universal/xu-destinations/managing-destinations)
 - [SAP table object](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction#adding-tables)
 - [Running an Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/run-an-extraction)
 - [WHERE Clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause)
 - [Scheduling an extraction](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/scheduling_extraction)
 - [Extraction Parameters](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/extraction-parameters)
 
 
 




