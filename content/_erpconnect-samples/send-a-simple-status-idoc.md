---
layout: page
title: Send a STATUS IDoc
description: Send a simple STATUS IDoc
permalink: /:collection/:path
weight: 19
---

The example below shows how to send a STATUS IDoc. 

### About 

The message type STATUS is designed for manipulating a status of another outbound IDoc. 
If an external application receives an IDoc, it can use the STATUS IDoc to confirm the successful processing. 
STATUS is a simple IDoc that contains only one data record. 

### Send a STATUS IDoc

1. Open a client connection to the R/3 system using the *R3Connection* class. 
2. Inquire the IDoc number of the IDoc to be manipulated and read the input.
3. Use `CreateIdoc` to instance a valid *IDoc* object. 
"SYSTAT01" is the IDoc type for the appropriate message type STATUS. <br> 
	 ```csharp
     static void Main(string[] args)  
     {  
        using (R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800"))
        {
			con.Open(false); 
        
			Console.WriteLine("Which IDocnumber would you like to manipulate?");  
			string IdocNo = Console.ReadLine(); 
        
			Idoc i = con.CreateIdoc("SYSTAT01","");
     ```
4. Provide receiver and sender information as shown in the code below. <br> 
	 ```csharp
			// Fill Message Type 
			i.MESTYP = "STATUS"; 
  
			// Fill Information about IDoc Reciever 
			i.RCVPRN = "PT4_800"; // Partner number 
			i.RCVPRT = "LS"; // Partner type 
  
			// Fill information about idoc sender 
			i.SNDPOR = "ERPCONNECT"; // Partner port 
			i.SNDPRN = "ERPCONNECT"; // Partner number 
			i.SNDPRT = "LS"; // Partner type
     ```
5. Fill in the following fields in segment *E1STATS*: the new status code (*STATUS*), date and time (*LOGDAT*, *LOGTIM*) and the number of the IDoc to be manipulated. 
6. Send the IDoc using the `Send`. <br> 
	 ```csharp
			// Fill the right fields in the segments 
			i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20210901";
			i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301"; 
			i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12"; 
			i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo; 
  
			i.Send(); 
			Console.WriteLine("IDoc sent"); 
			Console.ReadLine();
			}
	}
     ```
7. Run the program using and check the result.<br>
The status code of the manipulated IDoc increases from 3 (Data passed...) to 12 (Dispatch OK). <br>
![IdocSend2](/img/contents/IdocSend2.jpg){:class="img-responsive"}
