---
layout: page
title: Send a STATUS IDoc
description: Send a simple STATUS IDoc
permalink: /:collection/:path
weight: 19
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for ERPConnect.<br>
Make sure to use the samples within the new [HelpCenter for ERPConnect](https://helpcenter.theobald-software.com/erpconnect/samples).

The example below shows how to send a STATUS IDoc. 

### About 

The *STATUS* message type is used to manipulate the status of another outbound IDoc e.g., 
when a subsystem receives an IDoc and acknowledges the receive with a status change.
*STATUS* is a simple IDoc that contains only one data record.

{: .box-note }
**Note**: Make sure to configure your SAP system to receive IDocs.

### Send a STATUS IDoc

Follow the steps below to send a STATUS IDoc:

1. Open a client connection to the R/3 system using the *R3Connection* class. 
2. Inquire the IDoc number of the IDoc to be manipulated and read the input.
3. Use `CreateIdoc` to instance a valid *IDoc* object. 
"SYSTAT01" is the IDoc type for the appropriate message type STATUS. 
4. Provide receiver and sender information. 
5. Fill in the following fields in segment *E1STATS*: 
	- the new status code (*STATUS*)
	- date and time (*LOGDAT*, *LOGTIM*) 
	- the number of the IDoc to be manipulated
6. Send the IDoc using the `Send`. <br> 
7. Run the program using and check the result.<br>

```csharp

using System;
using ERPConnect;
using ERPConnect.Utils;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open(false);
        
Console.WriteLine("Which IDoc number would you like to manipulate?");  
string IdocNo = Console.ReadLine(); 
        
Idoc i = connection.CreateIdoc("SYSTAT01","");
 
// Fill Message Type 
i.MESTYP = "STATUS"; 
  
// Fill Information about IDoc Reciever 
i.RCVPRN = "PT4_800"; // Partner number 
i.RCVPRT = "LS"; // Partner type 
  
// Fill information about IDoc sender 
i.SNDPOR = "ERPCONNECT"; // Partner port 
i.SNDPRN = "ERPCONNECT"; // Partner number 
i.SNDPRT = "LS"; // Partner type

// Fill the right fields in the segments 
i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20210901";
i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
i.Send(); 
Console.WriteLine("IDoc sent"); 
Console.ReadLine();
 ```

Output:

The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
![IdocSend2](/img/contents/IdocSend2.jpg){:class="img-responsive"}
