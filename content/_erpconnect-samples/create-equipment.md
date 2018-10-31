---
layout: page
title: Create Equipment
description: Create Equipment
permalink: /:collection/:path
weight: 42
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

With this sample you can create equipment. The equipment name (equi_master["EQUIPMENT"]) musst be written in uppercase, otherwise the function won't work. The fields EQUITYPE,INVENTORY and MANFACTURE are optional and can be filled with this function if needed.

To change the equipment you can use the function BAPI_EQMT_MODIFY.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
            R3Connection con = new R3Connection("SAPUser", 00, "SAPUser", "Password", "en", "800");
            con.Open(false);
  
            RFCFunction func = con.CreateFunction("BAPI_EQMT_CREATE");
  
            RFCStructure equi_master = func.Exports["EQUIMASTER"].ToStructure();
  
                equi_master["EQUIPMENT"] = "TESTEQUIP04"; //  Equipment
                equi_master["EQUICATGRY"] = "M"; //EquipmentCategory
                equi_master["EQUITYPE"] = "5000"; //ObjectType     optional
                equi_master["INVENTORY"] = "123456"; //Inventury No.  optional
                equi_master["MANFACTURE"] = "TEST AG"; //Manufacturer   optional
  
            RFCStructure equi_text = func.Exports["EQUITEXT"].ToStructure();
  
                equi_text["EQUIDESCR"] = "TestDescription"; //Description
  
            RFCStructure equi_location = func.Exports["EQUILOCATION"].ToStructure();
  
                equi_location["MAINTPLANT"] = "1000"; //Plant
  
            func.Execut e();
  
  
            // ReturnMessage from BAPI
            RFCStructure funcRet = func.Imports["RETURN"].ToStructure();
            if (funcRet["Type"].ToString() == "S")
                Console.WriteLine("Equipment was created succesfully");
            else
            Console.WriteLine (funcRet["MESSAGE"].ToString());
            Console.WriteLine("Please Press Enter to continue");
  
            Console.ReadLine();
  
  
        }
{% endhighlight %}
</details>