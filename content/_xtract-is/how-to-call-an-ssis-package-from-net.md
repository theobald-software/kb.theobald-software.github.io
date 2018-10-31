---
layout: page
title: How to call an SSIS Package from .NET
description: How to call an SSIS Package from .NET
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In this article we want to start an SSIS package within .NET
First we need a reference to Microsoft.SqlServer.Dts.Runtime. This dll is installed with the Client Tools SDK when setting up the SQL Server. 

Then we are able to call the package with the following lines of code. Optionally we can pass values to the variables in the packages.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using Microsoft.SqlServer.Dts.Runtime;
 
namespace CallPackage
{
    class Program
    {
        static void Main(string[] args)
        {
            Application app = new Application();
            Package package = null;
            package  = app.LoadPackage(@"C:\Packages\PackageTest.dtsx",null);          
            package.Variables["User::FLIGHTVAR"].Value = "ONLYAA"; //Optional, passing variables
            DTSExecResult result = package.Execute();
        }
     }
}
{% endhighlight %}
</details>

If the package runs sucessfully the DTSExecResult is "Successful", otherwise it's "Failure".

