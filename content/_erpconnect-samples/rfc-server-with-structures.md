---
layout: page
title: RFC Server with structures
description: RFC Server with structures
permalink: /:collection/:path
weight: 28
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Our third sample now shows how to use structures between SAP and .NET with a RFC server.

A structure with the name NUMBERS is added to the Z_ADD_2 function and the table is being deleted (see also RFC Server with tables). Now we rename the function to Z_ADD_3. The structure is build with 2 columns named NUMB1 and NUMB2. Both columns are filled in ABAP and should be added by the .NET programm.

The code below shows how to initialize the RFCServer object. Please have a close look on how to create the structure NUMBERS. First add the 2 columns to the RFCTableColumnCollection. Then you can add the Structure NUMBERS with the Columns Collection to the IMPORT definition.

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
  
            RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_3");
  
  
            RFCTableColumnCollection Columns = new RFCTableColumnCollection ();
            Columns.Add("NUMB", 10, 0, RFCTYPE.NUM);
            Columns.Add("NUMB2", 10, 0, RFCTYPE.NUM);
  
            f.Imports.Add("NUMBERS",Columns );
            f.Exports.Add("RES", RFCTYPE.INT);
  
            s.Start();
  
            Console.WriteLine("Press Enter to quit");
            Console.ReadLine();
        }
{% endhighlight %}
</details>

Now as always we add the 2 Columns from the Structure in the .NET programm. The result is returned in the scalar export parameter RES.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
        {
            Console.WriteLine("Incoming call!!");
  
            Int32 Res = 0;
            RFCStructure numberstruc = CalledFunction.Imports["NUMBERS"].ToStructure();
  
            Int32 i1 = Convert.ToInt32(numberstruc["NUMB"].ToString());
            Int32 i2 = Convert.ToInt32(numberstruc["NUMB2"].ToString());
  
            Res = i1 + i2;
  
            CalledFunction.Exports["RES"].ParamValue = Res;
        }
{% endhighlight %}
</details>

Here is the sample ABAP code to call the function in a foreign destination.

```
REPORT  ZADDTEST3

DATA res TYPE i.
DATA numbs LIKE zaddstruc2.

numbs-numb1 = '1'.
numbs-numb2 = '2'.

CALL FUNCTION 'Z_ADD_3' DESTINATION 'ERPTEST'
  EXPORTING
    NUMBERS       = numbs
 IMPORTING
   RES           = res.
      
WRITE: / 'Result: ', res.
```

The same sample here with import and export structure. Add a structure to the EXPORTS-Collection on the SAP side. Remove the RES Parameter. The .NET programm is modified also with a structure to the EXPORTS-Collection with 2 added Columns (NUMB1 and NUMB2). The ABAP Coding is also getting modified see Coding below.

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
  
            RFCServerFunction f = s.RegisteredFunctions.Add("Z_ADD_4");
            RFCTableColumnCollection Columns = new RFCTableColumnCollection ();
            Columns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
            Columns.Add("NUMB2", 10, 0, RFCTYPE.NUM);
  
            RFCTableColumnCollection EXColumns = new RFCTableColumnCollection();
            EXColumns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
            EXColumns.Add("NUMB2", 10, 0, RFCTYPE.NUM);
  
            f.Imports.Add("NUMBERS",Columns );
  
            f.Exports.Add("EXNUMBERS", EXColumns);
  
            s.Start();
  
            Console.WriteLine("Press Enter to quit");
            Console.ReadLine();
        }

{% endhighlight %}
</details>

The Values from the IMPORTS-Collection are set in variables. Then different values are added to them and are written back to the EXPORTS-Collection.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void s_IncomingCall(RFCServer Sender, RFCServerFunction CalledFunction)
        {
            Console.WriteLine("Incoming call!!");
  
            RFCTableColumnCollection EXColumns = new RFCTableColumnCollection();
            EXColumns.Add("NUMB1", 10, 0, RFCTYPE.NUM);
            EXColumns.Add("NUMB2", 10, 0, RFCTYPE.NUM);
  
            CalledFunction.Exports.Add("EXNUMBER", EXColumns);
            RFCStructure numberstruc = CalledFunction.Imports["NUMBERS"].ToStructure();
  
            Int32 i1 = Convert.ToInt32(numberstruc["NUMB1"].ToString());
            Int32 i2 = Convert.ToInt32(numberstruc["NUMB2"].ToString());
  
            RFCStructure EXnumbers = CalledFunction.Exports["EXNUMBERS"].ToStructure();
            EXnumbers["NUMB1"] = i1 + 1;
            EXnumbers["NUMB2"] = i2 + 98;
        }
{% endhighlight %}
</details>

And here is the little modified sample ABAP code.

```
REPORT  ZADDTEST4                               .
                            .
DATA numbs LIKE zaddstruc2.
DATA exnumbers like zaddstruc2.

numbs-numb1 = '1'.
numbs-numb2 = '2'.

CALL FUNCTION 'Z_ADD_4' DESTINATION 'ERPTEST'
  EXPORTING
    NUMBERS       = numbs
   IMPORTING
   EXNUMBERS      = exnumbers.

WRITE: / 'First result is (added 1): ', exnumbers-numb1 .
WRITE: / 'Second result is (added 98): ', exnumbers-numb2 .
```


