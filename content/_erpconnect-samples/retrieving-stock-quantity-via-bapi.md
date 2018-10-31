---
layout: page
title: Retrieving Stock Quantity via BAPI
description: Retrieving Stock Quantity via BAPI
permalink: /:collection/:path
weight: 13
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

A so-called BAPI is a Business Object method. There are hundreds of Business Objects in a SAP system, one of these is Material. Material represents a single material. You can execute several methods on it, e.g. Availability. The method Availability provides the so-called ATP (stock quantity Available To Promise). You can use the Object Repository (transaction BAPI) to search or execute BAPIs and Business Objects. Please have a look at ifr.sap.com, the web-based SAP Interface Repository. The example below shows how to execute the BAPI Material.Availability in a Windows Forms application. We start by placing an ERPConnect.R3Connection control in the form (you can use drag and drop from the toolbox). The figure below shows the form during design time. The connection properties (on the right hand side) can be also set in design time, so we don't need to worry about these things in code.

![BAPIStockQuan](/img/contents/BAPIStockQuan.jpg){:class="img-responsive"}

**Coding**

Before executing the BAPI, there are at least three import parameters to be defined: the Plant (PLANT), the material number (MATERIAL) and the unit (UNIT). As you can see in the code below, the BAPI object is created by the CreateFunction method of the R3Connection object. The imports will be set the same way as we did when calling 'normal' function modules. After executing this BAPI we can evaluate the return parameters. In case of an error, we have to analyze the Return structure. If no error has occurred, the AV_QTY_PLT parameter contains the stock quantity in the given unit.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
        {
            try
            {
                r3Connection1.Open(false);
  
                // Create a Bapi object, fill parameters and execute
                RFCFunction f =
                    r3Connection1.CreateFunction("BAPI_MATERIAL_AVAILABILITY");
                f.Exports["PLANT"].ParamValue = textBox1.Text;
                f.Exports["MATERIAL"].ParamValue = textBox2.Text;
                f.Exports["UNIT"].ParamValue = textBox3.Text;
                f.Execut e();
  
                // Read the import structure RETURN to provide possible Messages
                RFCStructure BapiRet = f.Imports["RETURN"].ToStructure();
                textBox5.Text = BapiRet["MESSAGE"].ToString();
  
                // Fill textbox with stock quantity
                textBox4.Text = f.Imports["AV_QTY_PLT"].ToString();
            }
            catch (ERPException e1)
            { MessageBox.Show(e1.Message); }
        }
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
        Try
            r3Connection1.Open(False)
  
            ' Create a Bapi object, fill parameters and execute
            Dim f As RFCFunction= _
                     r3Connection1.CreateFunction("BAPI_MATERIAL_AVAILABILITY")
            f.Exports("PLANT").ParamValue = textBox1.Text
            f.Exports("MATERIAL").ParamValue = textBox2.Text
            f.Exports("UNIT").ParamValue = textBox3.Text
            f.Execut e()
  
            ' Read the import structure RETURN to provide possible Messages
            Dim BapiRet As RFCStructure = f.Imports("RETURN").ToStructure()
            textBox5.Text = BapiRet("MESSAGE").ToString()
  
            ' Fill textbox with stock quantity
            textBox4.Text = f.Imports("AV_QTY_PLT").ToString()
        Catch e1 As ERPException
            MessageBox.Show(e1.Message)
        End Try
    End Sub
{% endhighlight %}
</details>

The figures below show the example program in action. On the first try, the user types a non-existing material number so an error message is given by the BAPI. The right hand figure shows a correct quantity indication.

![ScreenshotBeispielBapi1](/img/contents/ScreenshotBeispielBapi1.jpg){:class="img-responsive"}

![ScreenshotBeispielBapi2](/img/contents/ScreenshotBeispielBapi2.jpg){:class="img-responsive"}
