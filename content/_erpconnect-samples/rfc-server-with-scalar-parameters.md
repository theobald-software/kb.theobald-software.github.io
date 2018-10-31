---
layout: page
title: RFC Server with scalar parameters
description: RFC Server with scalar parameters
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Apart from the client functionality that allows function modules or BAPIs to be accessed in the SAP system, ERPConnect also offers the possibility of easily developing a server function. Transactional RFC functions are, of course, supported.

The example below shows a simple task. An ABAP program should add two numbers with the help of a function module. The two imports NUMBER1 and NUMBER2 are added and passed back to the calling program via the export RES.

The code shows how to initialize an RFCServer object by providing the gateway host, the gateway service and the program ID to register on the SAP gateway (you may also refer to how to administrate RFC destinations).

After registering the RFCServer object at the SAP gateway, there is an RFCServerFunction object registered with the help of the <ServerObject>.RegisteredFunctions.Add method. The imports and exports must be handled the same way as when calling RFC functions as a client. An RFCServer object can, of course, hold more than one RFCServerFunction object.

The event IncomingCall is fired when an ABAP program calls the function in a foreign destination. If you use C#, you must define the event call-back with a separate line of code. If you use Visual Basic on the other hand, use the WithEvents statement.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using ERPConnect;
  
static void Main(string[] args)
{
    // define server object
    RFCServer s = new RFCServer();
    s.GatewayHost = "hamlet";
    s.GatewayService = "sapgw11";
    s.ProgramID = "ERPTEST";
    s.IncomingCall+=new ERPConnect.RFCServer.OnIncomingCall(s_IncomingCall);
  
    // Add and register function module
    RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD");
    f.Imports.Add("NUMBER1",RFCTYPE.INT);
    f.Imports.Add("NUMBER2",RFCTYPE.INT);
    f.Exports.Add("RES",RFCTYPE.INT);
  
    // start server
    s.Start();
  
    Console.Write("Server started. Please press any key to stop");
    Console.ReadLine();
  
    s.Stop();
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Imports ERPConnect
  
Module Module1
    Dim WithEvents s As New RFCServer
  
    Sub Main()
  
        ' define server object
        s.GatewayHost = "hamlet"
        s.GatewayService = "sapgw11"
        s.ProgramID = "ERPTEST"
  
        ' deifne registered function
        Dim f As RFCServerFunction
        f = s.RegisteredFunctions.Add("Z_ADD")
        f.Imports.Add("NUMBER1", RFCTYPE.INT)
        f.Imports.Add("NUMBER2", RFCTYPE.INT)
        f.Exports.Add("RES", RFCTYPE.INT)
  
        ' start server
        s.Start()
  
        Console.Write("Server is started. Please press any key to stop.")
        Console.ReadLine()
  
        s.Stop()
    End Sub
{% endhighlight %}
</details>

The following code shows how the IncomingCall event is handled. The import parameters are the ones that are passed by the calling SAP system. The export parameters are the ones that are passed back to SAP.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
private static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
{
    if (CalledFunction.FunctionName=="Z_ADD")
    {
        Int32 i1 = (Int32)CalledFunction.Imports["NUMBER1"].ParamValue;
        Int32 i2 = (Int32)CalledFunction.Imports["NUMBER2"].ParamValue;
        Int32 erg = i1 + i2;
        CalledFunction.Exports["RES"].ParamValue = erg;
        Console.WriteLine("Incoming Call");
    }
    else
        throw new ERPConnect.ERPException("Function unknown");
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub s_IncomingCall(ByVal Sender As ERPConnect.RFCServer, _
   ByVal CalledFunction As ERPConnect.RFCServerFunction) Handles s.IncomingCall
        Dim i1 As Int32
        i1 = CalledFunction.Imports("NUMBER1").ParamValue
        Dim i2 As Int32
        i2 = CalledFunction.Imports("NUMBER2").ParamValue
        Dim res As Int32
        res = i1 + i2
        CalledFunction.Exports("RES").ParamValue = res
        Console.WriteLine("Incoming Call")
    End Sub
{% endhighlight %}
</details>

At the end of this example, you’ll see the ABAP code that is used to call our .NET function in the remote destination ERPTEST. The two numbers 26 and 25 are passed, and the result 51 is passed back. The screenshot further below shows the running ABAP program.

```
REPORT  z_add_test                                                  .

DATA result TYPE i.


CALL FUNCTION 'Z_ADD' DESTINATION 'ERPTEST'
  EXPORTING
    number1 = 26
    number2 = 25
  IMPORTING
    res     = result.

WRITE: / 'Result: ', result. 
```

![Z_add_output](/img/contents/Z_add_output.jpg){:class="img-responsive"}