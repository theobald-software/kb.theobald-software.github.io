---
layout: page
title: Using Current Date in the Where Clause of the Xtract IS Table Component
description: Using Current Date in the Where Clause of the Xtract IS Table Component
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If you want to use the current date in a where clause, you have to convert the date into a format SAP understands. You can use the following two options to use user-defined variables for date values. 

### Variant 1: Using SSIS Expressions

First we need to create an SSIS Variable called "TDatum" (data type [String], scope [PackageName]).

![ssis_expression_Tdatum](/img/contents/ssis_expression_Tdatum.png){:class="img-responsive"}

Then we open the expression builder via the **[...]** at the right margin.

![evaluate_ssis_expression](/img/contents/evaluate_ssis_expression.png){:class="img-responsive"}

In the expression builder, predefined functions can be used by SSIS. In our case we drag and drop Date/Time functions to the expression field. Since we have to convert the date format into a format readable by SAP, type casts are necessary and must be placed before the date function. 
```
(DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + RIGHT("0" + (DT_STR, 2, 1252) DATEPART("mm" , GETDATE()), 2) +RIGHT("0" + (DT_STR, 2, 1252) DATEPART("dd" , GETDATE()), 2)
```
Finally, the evaluate expression button can be used to check the syntax of the expression and the defined value is displayed in the Evaluate Value field.

![ssis_expression_value](/img/contents/ssis_expression_value.png){:class="img-responsive"}
 

If you confirm the expression builder with the ok key, the generated value is displayed in the user variable.
The user variable TDatum can now be used in the where clause of the table component, e.g. `LAEDA = @TDatum`

### Variant 2: Using a script task in the control flow

First we need to create an SSIS Variable called "TDatum" (data type [String], scope [PackageName]).

![ScriptTaskVariables](/img/contents/ScriptTaskVariables.jpg){:class="img-responsive"}

After creating the variable we insert a Script Task.

![ScriptComponentDataflow](/img/contents/ScriptComponentDataflow.jpg){:class="img-responsive"}

Double-click on the Script Task and insert the recently created variable in the field ReadWriteVariables. With the button "Edit Script..." the script editor opens.

![Scriptscreen](/img/contents/Scriptscreen.jpg){:class="img-responsive"}

Insert the following code into the script editor.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public void Main()
   {
           Dts.Variables["TDatum"].Value =  DateTime.Now.ToString("yyyyMMdd"); 
           Dts.TaskResult = (int)ScriptResults.Success;
   }
{% endhighlight %}
</details>

This code converts the current date to the format year, month and day without any delimiter, and stores the value in the variable "TDatum". Now we can use this variable in an Xtract IS Table Component to make the where clause dynamic.

![VariableInTable](/img/contents/VariableInTable.jpg){:class="img-responsive"}

The tasks are executed in a row.

![DataFlows](/img/contents/DataFlows.jpg){:class="img-responsive"}
