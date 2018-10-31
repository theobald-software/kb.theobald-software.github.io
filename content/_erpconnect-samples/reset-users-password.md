---
layout: page
title: Reset User's Password
description: Reset User's Password
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The sample below shows how to reset a user's password. This might be useful in web portals with employee self services.  

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
// open connection
ERPConnect.R3Connection con = new R3Connection("SAPServer",11,"XXX","XXX","EN","800");
con.Open();
  
// Create function object
RFCFunction func = con.CreateFunction("BAPI_USER_CHANGE");
  
// set the user's name
Console.WriteLine("Please type user's name to reset password");
string UserName = Console.ReadLine();
func.Exports["USERNAME"].ParamValue = UserName;
  
// set a new password
func.Exports["PASSWORD"].ToStructure()["BAPIPWD"] = "init01";
  
// set the X field to indicate that the password should be changed
func.Exports["PASSWORDX"].ToStructure()["BAPIPWD"] = "X";
  
// Execut e the function          
func.Execut e();
  
// loop return table and output messages
foreach(RFCStructure retrow in func.Tables["RETURN"].Rows)
    Console.WriteLine(retrow["MESSAGE"].ToString());
  
con.Close();
  
Console.WriteLine("");
Console.WriteLine("Press enter to quit.");
Console.ReadLine();
{% endhighlight %}
</details>