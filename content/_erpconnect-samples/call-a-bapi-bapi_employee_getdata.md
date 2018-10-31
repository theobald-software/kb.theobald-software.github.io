---
layout: page
title: Call a BAPI- BAPI_EMPLOYEE_GETDATA
description: Call a BAPI- BAPI_EMPLOYEE_GETDATA
permalink: /:collection/:path
weight: 15
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

BAPI_EMPLOYEE_GETDATA is an RFC-enabled function module that should be present in every SAP system. As an import parameter, the last name of an employee should be transferred to the module and the employee's detail data is sent back to the calling program contained in an table parameter.

The code below shows how to log on to the SAP system. An RFCFunction object is created by the method CreateFunction(). The import parameter LASTNAME_M is filled with the string given by the user. Execut e() executes the function module. After the call, the program gets the table parameter PERSONAL_DATA and writes the table field PERNO to the console. Additionally the last name and the name are written to the console

![BAPI_EMPLOYEE_GETDATA](/img/contents/BAPI_EMPLOYEE_GETDATA.jpg){:class="img-responsive"}

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
            R3Connection con = new R3Connection("Host", 05, "User", "Password", "DE", "800");
            con.Open(false);
  
            // Create a function object
            RFCFunction func = con.CreateFunction("BAPI_EMPLOYEE_GETDATA");
            Console.WriteLine("Please enter Lastname of Employee...");
            Console.WriteLine("(you can also use Wildcard Characters * ...)"); 
  
            // fill the export parameter
            string  EmployeeLM = Console.ReadLine();
            func.Exports["LASTNAME_M"].ParamValue = EmployeeLM;
            func.Exports["DATE"].ParamValue = ERPConnect.ConversionUtils.NetDate2SAPDate(System.DateTime.Now); 
            try
            {
                func.Execut e();
            }
            catch (ERPException e)
            {
                Console.WriteLine(e.Message);
                Console.ReadLine();
                return;
            }
  
            // Output the result of the function module
            RFCTable EmployeeDataTable = func.Tables["PERSONAL_DATA"];
            if (EmployeeDataTable.RowCount > 0)
            {
                for (int i = 0; i < EmployeeDataTable.RowCount; i++)
                {
                    Console.WriteLine(
                    EmployeeDataTable.Rows[i]["PERNO"].ToString() + " " +
                    EmployeeDataTable.Rows[i]["LAST_NAME"].ToString() + " " +
                    EmployeeDataTable.Rows[i]["FIRSTNAME"].ToString());
                }
            }
            else
            {
                Console.WriteLine("No Employee found");
            }
            Console.ReadLine();
        }
    }<br>
{% endhighlight %}
</details>


<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Sub Main()
  
     Dim con As New R3Connection("host", 5, "User", "Password", "DE", "800")
  
        con.Open(False)
        Dim sii As String = con.Codepage()
        ' Create a function object
        Dim func = con.CreateFunction("BAPI_EMPLOYEE_GETDATA")
        Console.WriteLine("Please enter Lastname of Employee...")
        Console.WriteLine("(you can also use Wildcard Characters * ...)")
  
        ' fill the export parameter
        Dim EmployeeLM As String = Console.ReadLine()
        func.Exports("LASTNAME_M").ParamValue = EmployeeLM
        func.Exports("DATE").ParamValue = ERPConnect.ConversionUtils.NetDate2SAPDate(System.DateTime.Now)
  
        Try
            func.Execut e()
        Catch e As ERPException
            Console.WriteLine(e.Message)
            Console.ReadLine()
            Return
        End Try
  
        Dim EmployeeDataTable As RFCTable = func.Tables("PERSONAL_DATA")
        If EmployeeDataTable.RowCount > 0 Then
            For i As Integer = 0 To EmployeeDataTable.RowCount - 1
                Console.WriteLine(EmployeeDataTable.Rows(i)("PERNO").ToString() + _
                                  " " + EmployeeDataTable.Rows(i)("LAST_NAME").ToString() + _
                                  " " + EmployeeDataTable.Rows(i)("FIRSTNAME").ToString())
            Next i
        Else
            Console.WriteLine("No Employee found")
        End If
        Console.ReadLine()
    End Sub
{% endhighlight %}
</details>
