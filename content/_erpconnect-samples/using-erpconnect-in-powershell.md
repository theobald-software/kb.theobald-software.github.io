---
layout: page
title: Using ERPConnect in Powershell
description: Using ERPConnect in Powershell
permalink: /:collection/:path
weight: 23
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

n this Article ERPConnect is used in a Powerhell Environment to connect to SAP, extract Data from a table (MAKT) and print it directly to the console in Powershell.

First the librfc32.dll has to be registered. That's an additional step to the "regular" usage of ERPConnect, where this step is not necessary.

```
regsvr32 c:\windows\system32\librfc32.dll
```

Then the following Code is needed with the extension *** .PS1

<details>
<summary>[Powershell]</summary>
{% highlight powershell %}
# --------------------------------------------------------------------------------
# If ERPConnect is registered in the GAC then use the following line
# [Reflection.Assembly]::LoadWithPartialName("ERPConnect20")
# If no is it also possible to load ERPConnect directly
[Reflection.Assembly]::LoadFile("C:\Program Files\ERPConnect\ERPConnect20.dll")

# Set the license key
#[ERPConnect.LIC]::SetLic("xxx")

# Set the connection parameters 
$hostname = "ptmalg"
$systemid = 5
$username = "Babi"
$password = "xxx"
$lang     = "EN"
$client   = "800"

$r3conn = new-object ERPConnect.R3Connection($hostname,$systemid,$username,$password,$lang,$client)
# Open the connection
$r3conn.Open($false)

# Check if the connection is available.
$r3conn.Ping()

# Read the table MAKT
$ReadTable = new-object ERPConnect.Utils.ReadTable($r3conn)
$ReadTable.AddField("MATNR")
$ReadTable.AddField("MAKTX")
$ReadTable.AddField("SPRAS")
$ReadTable.RowCount = 100
$ReadTable.AddCriteria("SPRAS = 'EN'")
$ReadTable.TableName = "MAKT"

$ReadTable
$ReadTable.Run()

[System.Data.DataTable]$result = $ReadTable.Result
# Show the RowsCount
$result.Rows.Count
# Print out the result on the screen
$result
{% endhighlight %}
</details>

The call is made directly in Powershell or within Powershell ISE.

![644px-Powershell](/img/contents/644px-Powershell.jpg){:class="img-responsive"}

![426px-Powershell2](/img/contents/426px-Powershell2.jpg){:class="img-responsive"}
