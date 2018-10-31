---
layout: page
title: Managing and Executing Batch Input Transactions
description: Managing and Executing Batch Input Transactions
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The class Transaction offers the possibility of executing SAP transactions in the foreground as well as in a background process. This technique is called Batch Input. By executing in a background process, you will be able to process mass data and transfer it to the SAP system. This technique is often used if no BAPI exists.

Another possibility is to jump directly to an SAP transaction from your .NET application. The example below covers this.

The user is able to enter a material number and the name of a plant. After doing so, she/he can click the button and the SAP GUI is launched with transaction MMBE (stock overview). A special tool, the TransactionRecorder, is also included in the installation package to record such transactions and implement them easily in your own program code.


<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
{
    // Reset the batch steps
    transaction1.BatchSteps.Clear();
  
    // fill new steps
    transaction1.ExecutionMode =    ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors;
    transaction1.TCode = "MMBE";
    transaction1.AddStepSetNewDynpro("RMMMBEST","1000");
    transaction1.AddStepSetOKCode("ONLI");
    transaction1.AddStepSetCursor("MS_WERKS-LOW");
    transaction1.AddStepSetField("MS_MATNR-LOW",textBox1.Text);
    transaction1.AddStepSetField("MS_WERKS-LOW",textBox2.Text);
  
    // connect to SAP
    r3Connection1.UseGui = true;
  
   R3Connection r3Connection1= new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
     r3Connection1.Open(false);
     // Run
     transaction1.Execut e();
  
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, _
         ByVal e As System.EventArgs) Handles button1.Click
  
        ' Reset the batch steps
        transaction1.BatchSteps.Clear()
  
        ' fill new steps
        transaction1.ExecutionMode = ERPConnect.Utils.TransactionDialogMode.ShowOnlyErrors
        transaction1.TCode = "MMBE"
        transaction1.AddStepSetNewDynpro("RMMMBEST", "1000")
        transaction1.AddStepSetOKCode("ONLI")
        transaction1.AddStepSetCursor("MS_WERKS-LOW")
        transaction1.AddStepSetField("MS_MATNR-LOW", textBox1.Text)
        transaction1.AddStepSetField("MS_WERKS-LOW", textBox2.Text)
  
        ' connect to SAP
        r3Connection1.UseGui = True
  
        Dim r3Connection1 As New R3Connection("SAPServer",00,"SAPUser","Password","EN","800")
        con.Open(False)
            transaction1.Execut e()
         
  
    End Sub
{% endhighlight %}
</details>

![MMBE1_kl](/img/contents/MMBE1_kl.jpg){:class="img-responsive"}