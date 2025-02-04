---
layout: page
title: Receive an IDoc
description: Receiving an IDoc
permalink: /:collection/:path
weight: 36
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).


This section shows how to receive and process a *MATMAS* IDoc.<br>
To configure your SAP system to send *MATMAS* IDocs, see [Setting Up a Test Environment for IDocs](https://help.theobald-software.com/en/erpconnect/receiving-and-sending-idocs/prerequisites#setting-up-a-test-environment-for-idocs).

### About

The following sample receives a *MATMAS* IDoc that contains material descriptions. 
The material descriptions are written into the console window to check the contents of the IDoc. 
 
The IDoc is analyzed using the *E2MARAM005* segment. 
Within this segment, several *E2MAKTM001* child segments contain material descriptions.

{: .box-tip }
**Tip**: You can use the transaction **WE60** to look up the structures of IDocs in SAP.


### Receive a MATMAS IDoc
Follow the steps below to receive a MATMAS IDoc:

1. Create an RFC Server object to accept calls from SAP, see [RFC Server](https://help.theobald-software.com/en/erpconnect/rfc-server/example) for more information.
2. To receive IDocs with the *RFCServer* object, set the property *CanReceiveIdocs* to true.<br>
3. When an IDoc is received by ERPConnect, the event *IncomingIdoc* is triggered and a reference to the *RFCServer* object and to the *IDoc* object is transferred. 
4. Use the *IncomingIdoc* event to read the data buffer of the child segment *E2MAKTM001*. 
The description text is located at index 4 with a length of 40 in *E2MAKTM001*. <br>
5. Write the description texts into the console window.
6. Run the program.
7. Send an IDoc in SAP and check the result. 

```csharp
using System;
using ERPConnect;
using ERPConnect.Idocs;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var server = new RFCServer();
server.Logging = true;
server.GatewayHost = "hamlet";
server.GatewayService = "sapgw11";
server.ProgramID = "ERPTEST";
server.CanReceiveIdocs = true;

server.InternalException += (_, exception) =>
{
    Console.WriteLine($"Internal error: {exception.Message}");
};

server.IncomingIdoc += (_, idoc) =>
{
    Console.WriteLine("Received Idoc " + idoc.IDOCTYP);
    IdocSegment e1maram = idoc.Segments["E2MARAM005", 0];
    for (int i = 0; i < e1maram.ChildSegments.Count; i++)
    {
        if (e1maram.ChildSegments[i].SegmentName != "E2MAKTM001")
        {
            continue;
        }

        string text = e1maram.ChildSegments[i].ReadDataBuffer(4, 40);
        Console.WriteLine($"Material text found: {text}");
    }
};

server.Start();

Console.WriteLine("Server is running. Press any key to exit.");
Console.ReadLine();

server.Stop();
```


Output:

In this sample case, 5 *E2MAKTM001* segments were found, so 5 texts are passed. 

![IdocReceiver](/img/contents/IdocReceiver.jpg){:class="img-responsive"}



{: .box-note }
**Note**: If you do not want to read the data buffer with offset and length of the texts, you can load an XML Schema instead, see [Using XMLs for IDocs](https://help.theobald-software.com/en/erpconnect/receiving-and-sending-idocs/xml-support-for-idoc-programming).
