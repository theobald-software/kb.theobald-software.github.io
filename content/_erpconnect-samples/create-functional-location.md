---
layout: page
title: Create Functional Location
description: Create Functional Location
permalink: /:collection/:path
weight: 41
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This sample shows how to create a Functional Location. The Functional Location(External Number) must match the structure definied in the exporting parameter STRIND. You can export the default value for the superior functional location under data_specific - SUPFLOC.

To change a Functional Location replace the function "BAPI_FUNCLOC_CREATE" with the function "BAPI_FUNCLOC_CHANGE". To get the function running a connection object (Con) must be available.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
            R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "en", "800");
            con.Open(false);
  
            RFCFunction func = con.CreateFunction("BAPI_FUNCLOC_CREATE");
  
            RFCStructure data_specific = func.Exports["DATA_SPECIFIC"].ToStructure();
  
                data_specific["STRIND"] = "A"; //StrIndicator
                data_specific["CATEGORY"] = "M"; //Category
                data_specific["SUPFLOC"] = ""; //Superior Function Location
  
            RFCStructure data_general = func.Exports["DATA_GENERAL"].ToStructure();
  
                data_general["DESCRIPT"] = "My New Location2"; //Description
                data_general["MAINTPLANT"] = "1000"; //Mainplant        
  
            func.Exports["LABELING_SYSTEM"].ParamValue = "A"; //Labeling System
            func.Exports["EXTERNAL_NUMBER"].ParamValue = "1111-111-AA-15";  //Functional Location
  
            func.Execut e();
  
            RFCFunction funcCommit = con.CreateFunction("BAPI_TRANSACTION_COMMIT");
  
            funcCommit.Exports["WAIT"].ParamValue  = "X"; 
            funcCommit.Execut e();
  
            // ReturnMessage from BAPI
            RFCStructure funcRet = func.Imports["RETURN"].ToStructure();
            //strmessage = funcRet["MESSAGE"].ToString();
  
            Console.WriteLine (funcRet["MESSAGE"].ToString());
            Console.WriteLine ("Please press a Key to continue")
  
            Console.ReadLine();
  
  
        }
{% endhighlight %}
</details>

