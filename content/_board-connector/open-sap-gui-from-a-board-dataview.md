---
layout: page
title: Open SAP GUI from a BOARD DataView
description: Open SAP GUI from a BOARD DataView
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This article shows how to execute some custom action,<br>
e.g. open the SAP-GUI for the current row (purchase order number).

Using common BOARD techniques and a correctly configured DataView component
(details omitted for brevity, please reference the [BOARD Documentation](http://help.board.com/) if needed)
gives us the following view, containing a table with Purchase information.

![Clipboard02](/img/contents/Clipboard02.jpg){:class="img-responsive"}

We want to open the SAP-GUI with some parameters,
so let us use the “Quantity” column as an example target for executing some abstract actions.

![prototyping](/img/contents/prototyping.png){:class="img-responsive"}

1.As a first step we should implement the hidden logic (so we could bind it later to some UI-object).<br>
BOARD operates with the notion of “Procedures”, which can be assigned to an object, e.g. in DataView.
Procedures in turn consist of “Actions” in BOARD.

Clicking on “Process Modeling” in the design mode leads to the view, in which you can select a database,
where the procedures should be managed. Then it is possible to add new ones (we are going to add two).

![Clipboard07](/img/contents/Clipboard07.jpg){:class="img-responsive"}

A. To be able to open the SAP-GUI (windows executable with parameters) we can use a command-line file (cmd).
For this purpose we could use the “Launch Action”, specifying the path to the command batch.

![Clipboard10](/img/contents/Clipboard10.jpg){:class="img-responsive"}

The batch-file contains primitive commands to read the file with the purchase order number
(next action, export parameter) and launch SAP-GUI with this parameter.

{% highlight csharp %}
for/f "tokens=*"%%A in (c:\temp\POExport.txt) do (
"C:\\Program Files (x86)\\SAP\\FrontEnd\\SAPgui\\sapshcut.exe"-user="User"-command="*ME23 RM06E-BSTNR=%%A;"-type="Transaction"
-gui="/H/ecc.theobald-software.com/S/sapdp00"-client="800"-sid="ECC"-reuse=1-max
)
{% endhighlight %}

B. To pass the parameter from DataView to the GUI, which can be read with this CMD-Script,
we could use “Extract” of the available BOARD actions.

![Clipboard09](/img/contents/Clipboard09.jpg){:class="img-responsive"}

The parameter to be exported must be configured, that is done by going to the “Configure Layout” window
(near the file name and path the parameter needs to be exported to).

![exportactionparameters](/img/contents/exportactionparameters.gif){:class="img-responsive"}

After getting these two actions added to the procedure, its actions-view looks like in the image bellow.

![Clipboard11](/img/contents/Clipboard11.jpg){:class="img-responsive"}

2.Now we need to trigger the Procedure from DataView’s column for each row.<br>
In the “Edit Mode“ right-click on the DataView component and select "Layout" in the menu.
There are "Block Options" inside the "Options" tab.

![Clipboard05](/img/contents/Clipboard05.jpg){:class="img-responsive"}

At the bottom of the page the fields of DataView are listed, we could let a particular field act like a button,
selecting “Button” for the “Appearance” column. To change default behavior (none) we need to click “Configure”.

![Clipboard06](/img/contents/Clipboard06.jpg){:class="img-responsive"}

Within the tab “Procedure” you can select previously designed action-sequences (procedures) from a dropdown.
Clicking on the “Add” button, we are effectively binding the click on the cell with the selected procedure.

**Result:**<br>
By clicking on the row (within a Quantity column) the SAP-GUI should appear,
the user will be prompted to enter the password and will eventually see the requested form.

![result](/img/contents/result.gif){:class="img-responsive"}