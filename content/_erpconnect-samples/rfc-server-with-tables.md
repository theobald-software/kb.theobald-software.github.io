---
layout: page
title: RFC Server with tables
description: RFC Server with tables
permalink: /:collection/:path
weight: 5
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The first sample ([RFC Server]()) only showed the exchange of scalar parameters. The following sample shows how to exchange tables between SAP and .NET using a RFC server.

A table with name NUMBERS is added to the Z_ADD function and the function is renamed to Z_ADD_2. All entries in table NUMBERS in column NUMB should be added by the .NET program.

The code below shows how to initialize the RFCServer object. Please have a close look on how to create the table NUMBERS. It is added to the Tables collection. The column NUMB is added to the empty Columns collection with Add(...).

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static RFCServer s = new RFCServer();
  
static void Main(string[] args)
{
    s.GatewayHost = "hamlet";
    s.GatewayService = "sapgw11";
    s.ProgramID = "ERPTEST";
  
    s.IncomingCall += new RFCServer.OnIncomingCall(s_IncomingCall);
  
    RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_2");
    f.Exports.Add("RES", RFCTYPE.INT);
  
    RFCTable numbertable = f.Tables.Add("NUMBERS");
    numbertable.Columns.Add("NUMB", 10, 0, RFCTYPE.NUM); 
  
    s.Start();
  
    Console.WriteLine("Press Enter to quit");
    Console.ReadLine();
}
{% endhighlight %}
</details>

The handling of the tables is done as always. We are using the object hierarchy to iterate through the rows and add the values. The result is returned in the scalar export parameter RES.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
{
    Console.WriteLine("Incoming call!!");
  
    Int32 Res = 0;
  
    foreach (RFCStructure row in CalledFunction.Tables["NUMBERS"].Rows)
        Res += Convert.ToInt32(row["NUMB"]);
  
    CalledFunction.Exports["RES"].ParamValue = Res;
}
{% endhighlight %}
</details>


Here is the sample ABAP code to call the function in a foreign destination.

```
REPORT  zaddtest2                               .


DATA res TYPE i.
DATA numbs LIKE zaddstruc OCCURS 0 WITH HEADER LINE.

numbs-numb = '1'.
APPEND numbs.
numbs-numb = '2'.
APPEND numbs.
numbs-numb = '3'.
APPEND numbs.

CALL FUNCTION 'Z_ADD_2' DESTINATION 'ERPTEST'
  IMPORTING
    res     = res
  TABLES
    numbers = numbs.

WRITE: / 'Result: ', res.
```

