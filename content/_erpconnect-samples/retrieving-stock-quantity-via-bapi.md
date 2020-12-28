---
layout: page
title: Retrieving Stock Quantity via BAPI
description: Retrieving Stock Quantity via BAPI
permalink: /:collection/:path
weight: 13
---

A BAPI is a Business Object method in SAP. There are hundreds of BAPIs in an SAP system, one of them is BAPI_MATERIAL_AVAILABILITY. BAPI_MATERIAL_AVAILABILITY shows the  Availability of a Material. This availability provides the so-called ATP (stock quantity Available To Promise). You can use the Object Repository (TXCode BAPI) to search or execute BAPIs and Business Objects. The example below shows how to execute the BAPI BAPI_MATERIAL_AVAILABILITY in a Windows Forms application. The figure below shows the form during design time.

![BAPIStockQuan](/img/contents/BAPIStockQuant.jpg){:class="img-responsive"}

**Coding**

Before executing the BAPI, there are at least three import parameters to be defined: the Plant (PLANT), the material number (MATERIAL) and the unit (UNIT). As you can see in the code below, the BAPI object is created by the CreateFunction method of the R3Connection object. The imports will be set the same way as we did when calling 'normal' function modules. After executing this BAPI we can evaluate the return parameters. In case of an error, we have to analyze the Return structure. If no error has occurred, the AV_QTY_PLT parameter contains the stock quantity in the given unit.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void btnGetQuantity_Click(object sender, System.EventArgs e)
        {
            try
            {
        
                ERPConnect.LIC.SetLic("xxxxxxxxxxxxx"); //Set your ERPConnect License. 
  
                R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","DE","800");  //Set Connection Properties
  
                con.Open(); //Open the SAP Connection 
                
                // Create a Bapi object, fill parameters and execute
                RFCFunction f = con.CreateFunction("BAPI_MATERIAL_AVAILABILITY");
                f.Exports["PLANT"].ParamValue = txtPlant.Text;
                f.Exports["MATERIAL"].ParamValue = txtMaterial.Text;
                f.Exports["UNIT"].ParamValue = txtUnit.Text;
                f.Execute();
  
                // Read the import structure RETURN to provide possible Messages
                RFCStructure BapiRet = f.Imports["RETURN"].ToStructure();
                txtBAPIMessage.Text = BapiRet["MESSAGE"].ToString();
  
                // Fill textbox with stock quantity
                txtStock.Text = f.Imports["AV_QTY_PLT"].ToString();
            }
            catch (ERPException e1)
            { MessageBox.Show(e1.Message); }
        }
{% endhighlight %}
</details>

The figures below show the example program in action. On the first try, the user types a non-existing material number so an error message is given by the BAPI. The right hand figure shows a correct quantity indication.

![ScreenshotBeispielBapi1](/img/contents/ScreenshotBeispielBapi1.jpg){:class="img-responsive"}

![ScreenshotBeispielBapi2](/img/contents/ScreenshotBeispielBapi2.jpg){:class="img-responsive"}
