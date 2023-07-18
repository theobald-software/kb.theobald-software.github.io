---
layout: page
title: Mastering SAP Access with Xtract Universal and Powershell
description: Mastering SAP Access with Xtract Universal and Powershell
permalink: /:collection/:path
weight: 100
---

This article showcases how to use PowerShell scripts in combination with Xtract Universal.

Xtract Universal is an SAP connector that enables axtraction of save data streams from SAP ERP and BW objects to different target systems. 
Xtract Universal offers a command line tool that can be used to automate and schedule SAP extractions and to integrate different ETL Tools.

Powershell is a powerful task automation and configuration framework from Microsoft that is based on the .NET Framework.
It includes a command-line shell and a scripting language.


### How to run an extraction

Execute an Xtract Universal extraction using the command tool xu.exe in a PowerShell script as shown below:

```shell
# execute an Xtract Universal extraction using the command tool xu.exe in a PowerShell script
# 2>&1 redirects standard error (the 2) to the same place as standard output (the 1)
&'C:\Program Files\XtractUniversal\xu.exe' -s "localhost" -p "8065" -n "SAPSalesCube" 1>$null 2>1
```

### How to run an extraction with a parameter

Here is an example of an extraction with a variable *CalendarMonth* that needs a value in the format YYYYMM, e.g. 201712:

```shell
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
&'C:\Program Files\XtractUniversal\xu.exe' -s "localhost" -p "8065" -n "SAPSalesCube" -o CalendarMonth='200401' 1>$null 2>&1
```

### How to run an extraction with a parameter using PowerShell variables

Here is an example of an extraction with a parameter using a PowerShell variable:

```shell
# set the path to the installation folder
$XUCmd = 'C:\Program Files\XtractUniversal\xu.exe'
# XU server &amp; port
$XUServer = "localhost"
$XUPort = "8065"
# extraction name
$XUExtraction = "SAPSalesCube"

# Setting Calendar month variable
# the extraction has a variable CalendarMonth that needs a value in the format YYYYMM, e.g. 201712
$myCalendarMonth = (Get-Date -format "yyyyMM")

# run an extraction with one parameter
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalendarMonth=$myCalendarMonth 1>$null 2>&1
```

### How to run an extraction with multiple parameters

Here is an example of an extraction with multiple parameters:

```shell
# run an extraction with multiple parameters
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o CalendarMonth=$myCalendarMonth -o clearBuffer=true 1>$null 2>&1
```

### How to create a function to run an extraction

Here is an example of a function that runs an extraction, checks the exit code and writes an output:

```shell
# Function to run an XU extraction
Function XURun($XUCmd, $XUServer, $XUPort, $XUExtraction, $XUParameters)
{
Try {
$parameters = $XUCmd + " " + $XUServer + " " + $XUPort + " " + $XUExtraction + " " + $XUParameters

if([string]::IsNullOrEmpty($XUParameters)){
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction 1>$null 2>&1
} else {
&$XUCmd -s $XUServer -p $XUPort -n $XUExtraction -o $XUParameters 1>$null 2>&1
}

# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {

write-host -f Green "The last command $parameters has been executed successfully" (Get-Date)

} else {

write-host -f Red "The last execution for $parameters failed with error code $LASTEXITCODE!" (Get-Date)
Write-Host $errorMessage
}
}
Catch {

write-host -f Red "Error running XU extraction!" + (Get-Date) $_.Exception.Message
}
}

# define error message
$errorMessage = @'
If the command completes an operation successfully, it returns an exit code of zero (0).
In case of an error, it will return one of the following (http status) codes:
HTTP Statuscodes (e.g. 404 when the extraction does not exist)
1001 An undefined error occured
1002 Could not find the specified file
1013 Invalid input data
1014 The number of arguments is invalid
1015 The parameter name is unknown
1016 The argument is not valid
1053 Something is wrong with your URL
1087 The parameter is invalid
'@

# run an extraction with multiple parameters
$XUParameters = "clearBuffer=True -o CalendarMonth=$myCalendarMonth"
$XUResult = XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters $XUParameters
```


### How to loop an array with different parameter values

The depicted example uses a loop to run an extraction with different parameter values. The parameters values are defined in an array.

```shell
$Months = @("200401","200402","200403")
foreach($Month in $Months){
XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters CalendarMonth=$Month
}
```

### How to run multiple extractions in sequence

The depicted example uses a loop tu run multiple extractions in sequence. The extraction names are defined in an array.

```shell
Function XURun-Multi ($XUCmd, $XUServer, $XUPort, $XUExtractions,$XUParameters){

foreach($XUExtraction in $XUExtractions){

XURun -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtraction $XUExtraction -XUParameters $XUParameters
}
}

#$XUExtractions = "SAPCustomers", "SAPPlants";,"PSSAPCustomers", "PSSAPPlants";
$XUResult = XURUN-Multi -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions
```


### How to run multiple extractions parallely

There are multiple ways to run parallel commands in PowerShell. One of them is using [PowerShell Workflow](https://docs.microsoft.com/en-us/system-center/sma/overview-powershell-workflows). 
Here is an example of using a ThrottleLimit to limit the number of parallel running extractions.

```shell
# Define Workflow 1
# Run multiple Extractions in parallell using powershell workflow
Workflow XURun-Parallel { param ($XUCmd, $XUServer, $XUPort, $XUExtractions, $XUParameters, $ThrottleLimit)

foreach -parallel -throttlelimit $ThrottleLimit ($XUExtraction in $XUExtractions){

InlineScript{
if([string]::IsNullOrEmpty($XUParameters)){
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction 1>$null 2>&1
} else {
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction -o $Using:XUParameters 1>$null 2>&1
}
}

}
}

# 4 parallel extractions
$ThrottleLimit = 4
XURun-Parallel -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions -XUParameters $XUParamters -ThrottleLimit $ThrottleLimit

# Define Workflow 2

# Run multiple Extractions using PowerShell workflow

Workflow XURun-Parallel2{ param ($XUCmd, $XUServer, $XUPort, $XUExtractions, $XUParameters, $ThrottleLimit)

foreach -parallel -throttlelimit $ThrottleLimit ($XUExtraction in $XUExtractions){

InlineScript{

Try {
$parameters = $Using:XUCmd + " " + $Using:XUServer + " " + $Using:XUPort + " " + $Using:XUExtraction + " " + $Using:XUParameters

if([string]::IsNullOrEmpty($Using:XUParameters)){
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction 1>$null 2>&1
} else {
&$Using:XUCmd -s $Using:XUServer -p $Using:XUPort -n $Using:XUExtraction -o $Using:XUParameters 1>$null 2>&1
}

# check the last exit code
# 0: successful
# else unsuccessful
if($LASTEXITCODE -eq 0) {

write-host -f Green "The last command $Using:parameters has been executed successfully" (Get-Date)

} else {

write-host -f Red "The last execution for $Using:parameters failed with error code $LASTEXITCODE!" (Get-Date)
Write-Host $errorMessage
}
}
Catch {

write-host -f Red "Error running XU extraction!" + (Get-Date) $_.Exception.Message
}
}

}
}

# 4 parallel extractions
$ThrottleLimit = 4
XURun-Parallel2 -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractions -XUParameters $XUParamters -ThrottleLimit $ThrottleLimit
```

### How to get a list of defined extractions

Xtract Universal offers an HTTP API to access the defined extractions, their metadata and log, the server log and further information.

The following function gets the list of extractions from the repository. The output will have the following format for each extraction.

*Name : BWCubeFIGL*<br>
*Type : BWCube*<br>
*Source : sapbw*<br>
*Destination : tableau*<br>
*LastRun : 2018-04-25_12:44:02.422*<br>
*RowCount : 2733787*<br>
*LastChange : 2018-02-16_12:18:29.475*<br>
*Created : 2018-02-14_11:25:47.718*<br>

```shell
<pre>Function XUGet-Extractions($XUServer, $XUPort){
$XUExtractions= (Invoke-WebRequest "http://$XUServer`:$XUPort").Content | ConvertFrom-CSV
return $XUExtractions
}
$XUExtractions = XUGet-Extractions $XUServer $XUPort
[code lang='powershell']
The following functions gets the list of extraction names from repository. This list can be then used e.g. to run the extraction or to check their logs.
[code lang='powershell']
Function XUGet-ExtractionNames($XUServer, $XUPort){
$XUExtractions = XUGet-Extractions $XUServer $XUPort
$XUExtractionNames = $XUExtractions | foreach { $_.Name } #| where{$_ -like "*PSSAP*"}
return $XUExtractionNames
}
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort

# run all the extractions in the list
XURun-Parallel2 -XUCmd $XUCmd -XUServer $XUServer -XUPort $XUPort -XUExtractions $XUExtractionNames
```

### How to get the latest log of the extractions

The following script gets the latest log of the extractions and writes a colorful output depending on the log status.

```shell
Function XUGet-Log($XUServer, $XUPort){
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort
$XULog = @{}
foreach ($XUExtractName in $XUExtractionNames) {
# concatenate URL
$XUURL = "http://$XUServer`:$XUPort/log/?req_type=extraction&amp;name=$XUExtractName"
# get log, convert it to csv, sort by timestamp and select the newest log
$newestLog = (Invoke-WebRequest $XUURL).Content | ConvertFrom-CSV | Sort-Object Timestamp | Select-Object -Last 1
# chech log status
Switch ($newestLog.StateDescr) {
"FinishedNoErrors"{ write-host -f Green $XUExtractName $newestLog}
"FinishedErrors" {write-host -f Red $XUExtractName $newestLog}
"Running" {write-host -f Yellow $XUExtractName $newestLog}
"NotAvailable"{write-host -f Blue $XUExtractName $newestLog}
}
$XULog.Add($XUExtractName, $newestLog)
}
return $XULog
}
$XULog = XUGet-Log $XUServer $XUPort
```

### How the get the metadata of the extractions

This function gets the metadata of the extractions, including field names, data types etc.

The output will have the following format for each extraction:

*POSITION,NAME,DESC,TYPE,LENGTH,DECIMALS*<br>
*0,WERKS,Plant,C,4,0*<br>
*1,NAME1,Name,C,30,0*<br>
*2,KUNNR,Customer number of plant,C,10,0*<br>
*3,NAME2,Name 2,C,30,0*<br>

```shell
# Get Metadata
# http://[host]:[port]/metadata/?name=[extractionName]
Function XUGet-Metadata($XUServer, $XUPort){
$XUExtractionNames = XUGet-ExtractionNames $XUServer $XUPort
$XUMetadata = @{}
foreach ($XUExtractName in $XUExtractionNames) {
# concatenate URL
$XUURL = "http://$XUServer`:$XUPort/metadata/?name=$XUExtractName"
# get log, convert it to csv, sort by timestamp and select the newest log
$tmpmeta = (Invoke-WebRequest $XUURL).Content | ConvertFrom-CSV
$XUMetadata.Add($XUExtractName, $tmpmeta)
}
return $XUMetadata
}
$XUMetadata = XUGet-Metadata $XUServer $XUPort
```

#### Related Links:
- [Get all scripts from GitHub](https://github.com/KhoderElzein/theobaldsoftware/blob/master/XURunScript.ps1)
- [Call extractions from command line](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-commandline)
- [Metadata access via HTTP-JSON](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http-json)
- [Log Access via Web Service](https://help.theobald-software.com/en/xtract-universal/logging/logging-access-via-http)
- [Microsoft Powershell Documentation](https://docs.microsoft.com/en-us/powershell/)
