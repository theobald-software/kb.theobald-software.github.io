---
layout: page
title: Get a List of all users
description: Receiving a list of all users
permalink: /:collection/:path
weight: 9
---

This sample shows how to read the user names and address data of all users in the SAP system using the function module BAPI_HELPVALUES_GET.<br>

### Call BAPI_HELPVALUES_GET

The following sample code reads user names and address data of SAP users using uses selection parameters for the import Table (SELECTION_FOR_HELPVALUES) of BAPI_HELPVALUES_GET.

```csharp
static ArrayList getUserList(string sign, string option, string low, string high)
        { 
  
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
  
            RFCFunction func = connection.CreateFunction("BAPI_HELPVALUES_GET");
  
            func.Exports["OBJTYPE"].ParamValue = "USER";
            func.Exports["METHOD"].ParamValue = "GETDETAIL";
            func.Exports["PARAMETER"].ParamValue = "USERNAME";
  
            RFCStructure shlp = func.Exports["EXPLICIT_SHLP"].ToStructure();
            shlp["SHLPNAME"] = "USER_ADDR";
            shlp["SHLPTYPE"] = "SH";
  
            RFCStructure sfh = func.Tables["SELECTION_FOR_HELPVALUES"].AddRow(); ;
            sfh["SELECT_FLD"] = "MC_NAMELAS";
            sfh["SIGN"] = sign;
            sfh["OPTION"] = option;
            sfh["LOW"] = low;
            sfh["HIGH"] = high;
  
            func.Execute();
  
            connection.Close();
  
            ArrayList user = new ArrayList();
            for (int i = 0; i < func.Tables["HELPVALUES"].RowCount; i++)
            {
                user.Add(func.Tables["HELPVALUES"].Rows[i, 0]);
            }
            if (user.Count == 0)
            {
                user.Add("No results matching criteria");
            }               
  
            return user;                           
        }
```

How to display all users, whose name start with M:

```csharp
static void Main(string[] args)
        {
            ArrayList users = getUserList("I","CP","M*","");
            foreach (object userdetail in users)
            {
                Console.WriteLine(userdetail);
            }
            Console.ReadLine();
        }
```
