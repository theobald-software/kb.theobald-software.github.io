---
layout: page
title: Receiving a list of all users
description: Receiving a list of all users
permalink: /:collection/:path
weight: 9
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This example acquires the user names and the address data of all users in the SAP system.

Basis for this example is the function module BAPI_HELPVALUES_GET.
This function module provides the use of selection parameters, because it contains an import Table (SELECTION_FOR_HELPVALUES)

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static ArrayList getUserList(string sign, string option, string low, string high)
        { 
  
            ERPConnect.LIC.SetLic("xxxxxxxxxxxxx");
  
            R3Connection con = new R3Connection("SAPServer",
                                                11,
                                                "SAPUser",
                                                "Password",
                                                "en",
                                                "800");            
  
            con.Open();            
  
            RFCFunction func = con.CreateFunction("BAPI_HELPVALUES_GET");
  
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
  
            func.Execut e();
  
            con.Close();
  
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
{% endhighlight %}
</details>

For example we are going to display all users, whose name starts with M, on the console

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
            ArrayList users = getUserList("I","CP","M*","");
            foreach (object userdetail in users)
            {
                Console.WriteLine(userdetail);
            }
            Console.ReadLine();
        }
{% endhighlight %}
</details>