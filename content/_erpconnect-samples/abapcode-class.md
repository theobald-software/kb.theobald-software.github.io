---
layout: page
title: ABAPCode class
description: ABAPCode class
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The class ABAPCode offers nearly unlimited possibilities. You can execute ABAP code on the fly and retrieve the result in a string array. The example below shows how to create a simple ABAP interpreter that executes a dynamic SQL statement.

Like other client classes, ABAPCode needs a valid R/3 connection. With the help of the method AddCodeLine, a new line of code will be added to the dynamic report. The report will be executed via Execute. The result set (regarding the ABAP list) can be read by the method GetResultLine.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void button1_Click(object sender, System.EventArgs e)
        {
            R3Connection con = new R3Connection("SAPServer",00,"SAPUser","Password","EN","800");
            con.Open(false);
            ERPConnect.Utils.ABAPCode code = new ERPConnect.Utils.ABAPCode();
            code.Connection = con;
  
            foreach(string s in textBox1.Lines)
                code.AddCodeLine(s);
  
            if (code.Execut e())
            {
                for(int i=0; i < code.ResultLineCount; i++)
                    textBox2.Text += code.GetResultLine(i) + "\r\n";
            }
            else
                textBox2.Text = "ABAP Error: " + code.LastABAPSyntaxError;
        }
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles button1.Click
        Dim con As New R3Connection("SAPServer",00,"SAPUser","Password","EN","800")
        con.Open(False)
  
        Dim code = New ERPConnect.Utils.ABAPCode
        code.Connection = con
  
        Dim s As String
        For Each s In textBox1.Lines
            code.AddCodeLine(s)
        Next
  
        Dim i As Integer
        If code.Execut e() Then
            For i = 0 To code.ResultLineCount - 1
                textBox2.Text += code.GetResultLine(i) + vbCrLf
            Next
        Else
            textBox2.Text = "ABAP Error: " + code.LastABAPSyntaxError
        End If
    End Sub
{% endhighlight %}
</details>

![ABAPPad](/img/contents/ABAPPad.jpg){:class="img-responsive"}