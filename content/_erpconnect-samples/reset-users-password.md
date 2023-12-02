---
layout: page
title: Reset the Password of an SAP User
description: Reset User's Password
permalink: /:collection/:path
weight: 7
---

This sample shows how to reset the password of an SAP user using the BAPI BAPI_USER_CHANGE. 

{: .box-tip }
**Tip:** Resetting the password of SAP users can be useful in web portals with employee self services.  

```csharp
using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

// Open the connection to SAP
using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();
  
RFCFunction func = connection.CreateFunction("BAPI_USER_CHANGE");
  
Console.WriteLine("Please type user's name to reset password");
string UserName = Console.ReadLine();

func.Exports["USERNAME"].ParamValue = UserName;
func.Exports["PASSWORD"].ToStructure()["BAPIPWD"] = "init01";
func.Exports["PASSWORDX"].ToStructure()["BAPIPWD"] = "X";
  
func.Execute();
  
foreach(RFCStructure retrow in func.Tables["RETURN"].Rows)
    Console.WriteLine(retrow["MESSAGE"].ToString());
  
connection.Close();
  
Console.WriteLine("");
Console.WriteLine("Press enter to quit.");
Console.ReadLine();

```