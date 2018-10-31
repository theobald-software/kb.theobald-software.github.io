---
layout: page
title: Executing BW Queries
description: Executing BW Queries
permalink: /:collection/:path
weight: 31
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This chapter contains information and examples surrounding the subject of BW data extraction. The corresponding ERPConnect classes can be found in the namespace ERPConnect.BW.

The examples are based on a BW query, which in turn is based on the cube 0D_DECU and is called ZSIMPLEQUERY. Please note that the checkbox “Allow external access” has to be marked off in your preferences for the query.

The following figure shows the query in the designer. The dimensions “material” and “client” as well as the key figures “billed amount” and “costs” are drawn into the query output. The dimension has a variable called MAT01, which allows a limitation to the material number.

The following example shows a query being executed in .NET. First a BWCube object is built with the help of the CreateCube function. Its name is made up of the cube name and query name.

The cube object offers a collection for all of the contained dimensions (“Dimensions”) and key figures (“Measures”). The attribute SelectForFlatMDX defines whether or not each component should be contained in the query output. It is set to true in our example. Please note that the denomination of the key figures via the query generation in the designer does not follow from the original technical name, so the key figures in our example here are addressed by the ordinal number, not the name.

To fill the variables with values, they are addressed through the variables collection. There are always range tables behind each a variable, as previously discussed in the SAP query chapter. The BW query can be executed via Execut e() and outputs a table of the DataTable type. The screenshot of our example shows the query output in the grid.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void Go_Click(object sender, System.EventArgs e)
{
    R3Connection con = new R3Connection();
    if (!con.AskUserAndOpen(true))
        return;
    BWCube query = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY");
  
    query.Dimensions["0D_MATERIAL"].SelectForFlatMDX = true;
    query.Dimensions["0D_SOLD_TO"].SelectForFlatMDX = true;
  
    query.Measures[0].SelectForFlatMDX = true;
    query.Measures[1].SelectForFlatMDX = true;
  
    query.Variables["MAT01"].SingleRange.LowValue = this.txtMatNr.Text;
  
    this.dataGrid1.DataSource = query.Execut e();
}
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Private Sub Go_Click(ByVal sender As Object, ByVal e As System.EventArgs)
        Dim con As R3Connection = New R3Connection
        If Not con.AskUserAndOpen(true) Then
            Return
        End If
  
        Dim query As BWCube = con.CreateBWCube("0D_DECU/ZSIMPLEQUERY")
  
        query.Dimensions("0D_MATERIAL").SelectForFlatMDX = true
        query.Dimensions("0D_SOLD_TO").SelectForFlatMDX = true
  
        query.Measures(0).SelectForFlatMDX = true
        query.Measures(1).SelectForFlatMDX = true
  
        query.Variables("MAT01").SingleRange.LowValue = Me.txtMatNr.Text
  
        Me.dataGrid1.DataSource = query.Execut e
  
    End Sub
{% endhighlight %}
</details>

![BWQueryImGrid](/img/contents/BWQueryImGrid.png){:class="img-responsive"}
