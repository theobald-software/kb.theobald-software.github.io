---
layout: page
title: Use ERPConnect in PowerShell
description: Using ERPConnect in Powershell
permalink: /:collection/:path
weight: 23
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

This sample shows how to use ERPConnect in Windows PowerShell to connect to SAP, extract data from a table (MAKT) and print it to the console.

### Prerequisites

- The librfc32.dll has to be registered: `regsvr32 c:\windows\system32\librfc32.dll`
- The PowerShell script uses the file extension *** .PS1

### Extract SAP Table Data in PowerShell

The following sample code calls connects to SAP and extracts the data of SAP table MAKT directly in Powershell or within the Powershell ISE:

```powershell
$ErrorActionPreference = "Stop"

# If ERPConnect is registered in the GAC then use the following line
# [Reflection.Assembly]::LoadWithPartialName("ERPConnectStandard20.dll")

# If no is it also possible to load ERPConnect directly
[Reflection.Assembly]::LoadFile("C:\Program Files\ERPConnect\ERPConnectStandard20.dll")

# Set your ERPConnect license
[ERPConnect.LIC]::SetLic("xxxx")

$hostname = "server.acme.org"
$systemid = 00
$username = "user"
$password = "passwd"
$lang     = "EN"
$client   = "001"

$connection = new-object ERPConnect.R3Connection($hostname, $systemid, $username, $password, $lang, $client)

$connection.Protocol = [ERPConnect.ClientProtocol]::NWRFC
$connection.Open()

$readTable = new-object ERPConnect.Utils.ReadTable($connection)
$readTable.AddField("MATNR")
$readTable.AddField("MAKTX")
$readTable.AddField("SPRAS")
$readTable.RowCount = 10
$readTable.WhereClause = "SPRAS = 'EN'"
$readTable.TableName = "MAKT"

$readTable.Run()

$result = $readTable.Result

$result
```

Output:

![644px-Powershell](/img/contents/644px-Powershell.jpg){:class="img-responsive"}

<!---
```
GAC    Version        Location
---    -------        --------
False  v4.0.30319     C:\Program Files\ERPConnect\ERPConnectStandard20.dll

MATNR : 000000000000000023
MAKTX : Pawan Kalyan_08
SPRAS : E


MATNR : 000000000000000038
MAKTX : Test US colleagues upd4
SPRAS : E


MATNR : 000000000000000043
MAKTX : English Check 25_01
SPRAS : E


MATNR : 000000000000000058
MAKTX : Ventilation, complete build
SPRAS : E


MATNR : 000000000000000059
MAKTX : Filter Ereteam
SPRAS : E


MATNR : 000000000000000068
MAKTX : a portable 1 ton crane
SPRAS : E


MATNR : 000000000000000078
MAKTX : Component Full Repair Service ...
SPRAS : E


MATNR : 000000000000000088
MAKTX : AS-100 T-shirt XL
SPRAS : E


MATNR : 000000000000000089
MAKTX : AS-100 T-shirt
SPRAS : E


MATNR : 000000000000000098
MAKTX : PCB Subassembly
SPRAS : E
```
-->