---
layout: page
title: Xtract IS DeltaQ Convert String to Decimal
description: Xtract IS DeltaQ Convert String to Decimal
permalink: /:collection/:path
weight: 5
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The Xtract IS DeltaQ Component returns decimal values as strings. There is a way to convert the strings to decimal values. The following sample extracts a currency and a quantity field from an OLTP Data Source in SAP and converts them into the right data type.

After configuring the DeltaQ component, we insert a script component into the Data Flow and connect the output of the DeltaQ component to the script component.

![ScriptEditor01](/img/contents/ScriptEditor01.jpg){:class="img-responsive"}

We want to insert the converted values of the fields 'CURR01' and 'QUAN01' in two additional columns. To do so, we click on "Inputs and Outputs" in the script component dialog. Then we click on "Add Column" to add two new output columns (DecimalOutQuant, DecimalOutCurr). For the Data Type property we choose "DT_DECIMAL" for both columns.

![ScriptEditor02](/img/contents/ScriptEditor02.jpg){:class="img-responsive"}

In the lower part of the script screen we click on "Design Script...". Now the source code editor opens.

![ScriptEditor03](/img/contents/ScriptEditor03.jpg){:class="img-responsive"}

We insert the following code.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public override void Input0_ProcessInputRow(Input0Buffer Row)
    {
        System.Globalization.NumberFormatInfo  nfi = new System.Globalization.NumberFormatInfo();
        Row.DecimalOutQuant = Convert.ToDecimal(Row.QUAN01.ToString(), nfi);
        Row.DecimalOutCurr = Convert.ToDecimal(Row.CURR01.ToString(), nfi);
    }

{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Public Overrides Sub Eingabe0_ProcessInputRow(ByVal Row As Eingabe0Buffer)
        Dim nfi As Globalization.NumberFormatInfo = New Globalization.NumberFormatInfo()
        Row.DecimalOutQuant = Convert.ToDecimal(Row.QUAN01.ToString(), nfi)
        Row.DecimalOutCurr = Convert.ToDecimal(Row.CURR01.ToString(), nfi)
 End Sub
{% endhighlight %}
</details>

So the two strings in the columns "QUAN1" and "CURR01" from our source are converted into decimal values and inserted in the two new columns. We can use them in the further flow. In the following screenshot we can see the values in the DataViewer which is added after the script component.

![ScriptEditor04](/img/contents/ScriptEditor04.jpg){:class="img-responsive"}

