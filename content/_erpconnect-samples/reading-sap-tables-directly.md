---
layout: page
title: Reading SAP Tables Directly
description: Reading SAP Tables Directly
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

A recurrent task in daily work with SAP and .NET applications is to read directly from tables of the SAP system. You can use the ReadTable class to manage this demand. The sample below shows how to select data from the table. The result is passed back via an easy-to-use ADO.net table object.

In this sample we want to read material description texts which are located in the table MAKT. So we need the two columns MATNR (material number) and MAKTX (material description). Furthermore we want only the German texts so we have to add the WHERE statement SPRAS='DE'. SPRAS is the column which contains the language keys. The method Run executes the query and passes back the ADO.net table.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using System;
using ERPConnect;
using System.Data;
  
class Class1
{
    static void Main(string[] args)
    {
        R3Connection con = new R3Connection("hamlet",11,"theobald","pw","DE","800");
        con.Open(false);
  
        ERPConnect.Utils.ReadTable table = new ERPConnect.Utils.ReadTable(con);
        table.AddField("MATNR");
        table.AddField("MAKTX");
        table.AddCriteria("SPRAS = 'DE'");    
        table.TableName = "MAKT";
        table.RowCount = 10;
  
        table.Run();
  
        DataTable resulttable = table.Result;
  
        for(int i=0; i < resulttable.Rows.Count;i++)
        {
            Console.WriteLine(
                resulttable.Rows[i]["MATNR"].ToString() + " " +
                resulttable.Rows[i]["MAKTX"].ToString());
        }
  
        Console.ReadLine();
  
    }
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Imports ERPConnect
Imports System.Data
  
Module Module1
  
    Sub Main()
        Dim con As New R3Connection
        con.Host = "Hamlet"
        con.SystemNumber = 11
        con.UserName = "Theobald"
        con.Password = "pw"
        con.Client = "800"
        con.Language = "DE"
  
        con.Open(False)
  
        Dim table As New ERPConnect.Utils.ReadTable(con)
  
        table.AddField("MATNR")
        table.AddField("MAKTX")
  
        table.AddCriteria("SPRAS = 'DE'")
  
        table.TableName = "MAKT"
        table.RowCount = 10
  
        table.Run()
  
        Dim resulttable As DataTable
        resulttable = table.Result
  
        Dim i As Integer
  
        For i = 0 To resulttable.Rows.Count - 1
            Console.WriteLine( _
                CStr(resulttable.Rows(i)(0)) + " " + _
                CStr(resulttable.Rows(i)(1)))
        Next
  
        Console.ReadLine()
  
    End Sub
  
End Module
{% endhighlight %}
</details>

![ReadTableDemoConsole](/img/contents/ReadTableDemoConsole.jpg){:class="img-responsive"}
