---
layout: page
title: Using Current Date in the Where Clause of the Xtract IS Table Component
description: Using Current Date in the Where Clause of the Xtract IS Table Component
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If you want to use the current date in a where clause, you have to convert the date into a format SAP understands. This is possible by using a Script Task.

First we need to create an SSIS Variable called "TDatum" (data type String, scope Package).

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