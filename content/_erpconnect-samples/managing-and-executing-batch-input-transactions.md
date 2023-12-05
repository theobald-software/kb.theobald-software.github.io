---
layout: page
title: Managing and Executing Batch Input Transactions
description: Managing and Executing Batch Input Transactions
permalink: /:collection/:path
weight: 3
---


<!---
move to: https://help.theobald-software.com/en/erpconnect/special-classes/managing-and-executing-transactions-the-class-transaction
-->

Working up to SAP GUI 7.50

The class Transaction offers the possibility of executing SAP transactions in the foreground as well as in a background process. This technique is called Batch Input. By executing in a background process, you will be able to process mass data and transfer it to the SAP system. This technique is often used if no BAPI exists.

Another possibility is to jump directly to an SAP transaction from your .NET application. The example below covers this.

The user is able to enter a material number and the name of a plant. After doing so, she/he can click the button and the SAP GUI is launched with transaction MMBE (stock overview). A special tool, the TransactionRecorder, is also included in the installation package to record such transactions and implement them easily in your own program code.


```csharp
using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
    UseGui = true,
};

connection.Open();

Console.Write("Material: ");
string material = Console.ReadLine();

Console.Write("Plant: ");
string plant = Console.ReadLine();

var transaction = new Transaction(connection)
{
    ExecutionMode = TransactionDialogMode.ShowAll,
    TCode = "MMBE"
};

transaction.AddStepSetNewDynpro("RMMMBEST", "1000");
transaction.AddStepSetOKCode("ONLI");
transaction.AddStepSetCursor("MS_WERKS-LOW");
transaction.AddStepSetField("MS_MATNR-LOW", material);
transaction.AddStepSetField("MS_WERKS-LOW", plant);

// run
transaction.Execute();
```

Input:
```
Material: 100-100
Plant: 1000
```

Output:

![MMBE1_kl](/img/contents/MMBE1_kl.jpg){:class="img-responsive"}
