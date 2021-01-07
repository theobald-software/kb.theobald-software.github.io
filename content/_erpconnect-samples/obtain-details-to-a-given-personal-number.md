---
layout: page
title: Obtain details to a given personal number
description: Obtain details to a given personal number
permalink: /:collection/:path
weight: 17
---
### Code Example
``` c#  
    static void Main(string[] args)
        {
            ERPConnect.R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
            ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License.

            con.Open();  //Open the connection to SAP.

            RFCFunction func = con.CreateFunction("BAPI_EMPLOYEE_GETDATA");

            // set parameters
            Console.WriteLine("Please enter Employee ID: ");
            string EmployeeID = Console.ReadLine();
            func.Exports["EMPLOYEE_ID"].ParamValue = EmployeeID;
            func.Exports["DATE"].ParamValue = ERPConnect.ConversionUtils.NetDate2SAPDate(System.DateTime.Now);

           
            func.Execute();

            if (func.Imports["RETURN"].ToStructure()["MESSAGE"].ToString().Trim() != "")
            {
                Console.WriteLine(func.Imports["RETURN"].ToStructure()["MESSAGE"].ToString());
                return;
            }

            
            if (func.Tables["ORG_ASSIGNMENT"].RowCount > 0)
            {
                Console.WriteLine("Name: " + func.Tables["ORG_ASSIGNMENT"].Rows[0, "NAME"].ToString());
                Console.WriteLine("Role: " + func.Tables["ORG_ASSIGNMENT"].Rows[0, "POSTXT"].ToString());
                Console.WriteLine("Dept: " + func.Tables["ORG_ASSIGNMENT"].Rows[0, "ORGTXT"].ToString());
                Console.WriteLine("Costcenter: " + func.Tables["ORG_ASSIGNMENT"].Rows[0, "COSTCENTER"].ToString());
            }

            
            if (func.Tables["COMMUNICATION"].RowCount > 0)
            {
                Console.WriteLine("Email: " + func.Tables["COMMUNICATION"].Rows[0, "USRID_LONG"].ToString());
            }

            
            if (func.Tables["INTERNAL_CONTROL"].RowCount > 0)
            {
                Console.WriteLine("Phone: " + func.Tables["INTERNAL_CONTROL"].Rows[0, "PHONENO1"].ToString());
               
            }
            Console.ReadKey();
            
         }
```

### Sample Output Screenshot

This code shows how to get detail data to a given personal number.

![HRDemo01](/img/contents/HRDemoCon01.jpg){:class="img-responsive"}
