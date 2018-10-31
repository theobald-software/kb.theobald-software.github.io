---
layout: page
title: Transferring data packets with ReadTable class
description: Transferring data packets with ReadTable class
permalink: /:collection/:path
weight: 6
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If you want to extract more than a certain number of table rows (between 100,000 and 1,000,000 depending on the system) it is not possible at once anymore. That's why the ReadTable class offers the Packaging mechanism that is explained in the following.

- Set the property PackageSize to a value greater than 0 to enable packaging.
- Set the property RaiseIncomingPackageEvent to true to enable the event to be raised when a new data packet has to be processed.
- Implement the IncomingPackage event to process each data packet. The packet will be provided as a Datatable object.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
{
    R3Connection con = new R3Connection("XXX", 11, "XXX", 
        "XXX", "DE", "800");
  
    con.Open();
  
    ReadTable read = new ReadTable(con);
    read.PackageSize = 10000;
    read.RaiseIncomingPackageEvent = true;
    read.TableName = "MKPF";
    read.IncomingPackage += new ReadTable.OnIncomingPackage(read_IncomingPackage);
  
    read.Run();
  
    Console.WriteLine("Press enter to exit");
    Console.ReadLine();
}
  
static void read_IncomingPackage(ReadTable Sender, DataTable PackageResult)
{
    Console.WriteLine("Processing data package with " + 
        PackageResult.Rows.Count.ToString() + " rows");
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Imports ERPConnect
Imports ERPConnect.Utils
  
Module Module1
  
  Dim con As New R3Connection("xxx", 7, "xxx", "xxx", "DE", "800")
  Dim WithEvents read As New ReadTable(con)
  
Sub Main()
   con.Open()
   read.PackageSize = 10000
   read.RaiseIncomingPackageEvent = True
   read.TableName = "MKPF"
   read.Run()
   Console.WriteLine("Press enter to exit")
   Console.ReadLine()
End Sub
  
Public Sub OnIncomingPackage(ByVal Sender As ERPConnect.Utils.ReadTable, _
  ByVal PackageResult As System.Data.DataTable) Handles read.IncomingPackage
  Console.WriteLine("Processing data package with " + _
                    PackageResult.Rows.Count.ToString() + " rows")
End Sub
End Module
{% endhighlight %}
</details>