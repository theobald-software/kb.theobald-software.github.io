---
layout: page
title: Reset User's Password
description: Reset User's Password
permalink: /:collection/:path
weight: 7
---

The sample below shows how to reset a user's password. 
This might be useful in web portals with employee self services.  

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
// open connection
ERPConnect.R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License.

con.Open();  //Open the connection to SAP.
  
RFCFunction func = con.CreateFunction("BAPI_USER_CHANGE");
  
Console.WriteLine("Please type user's name to reset password");
string UserName = Console.ReadLine();

func.Exports["USERNAME"].ParamValue = UserName;
func.Exports["PASSWORD"].ToStructure()["BAPIPWD"] = "init01";
func.Exports["PASSWORDX"].ToStructure()["BAPIPWD"] = "X";
  
func.Execute();
  
foreach(RFCStructure retrow in func.Tables["RETURN"].Rows)
    Console.WriteLine(retrow["MESSAGE"].ToString());
  
con.Close();
  
Console.WriteLine("");
Console.WriteLine("Press enter to quit.");
Console.ReadLine();
{% endhighlight %}
</details>
