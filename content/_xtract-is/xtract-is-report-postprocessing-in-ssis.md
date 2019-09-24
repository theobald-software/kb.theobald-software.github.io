---
layout: page
title: Xtract IS Report Postprocessing in SSIS
description: Xtract IS Report Postprocessing in SSIS
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

We can use the component XtractIS Report to use reports as a data source. But sometimes reports contain groups and headers or any other disturbing rows between the relevant rows (e.g. delimiters or column names in the middle of the report). This Article shows how you can eliminate the rows which are containing no relevant data, and how to insert information from the group header to referred columns and rows.

The following example extracts data from the Report RFITEMAP. The report RFITEMAP - Vendor Line Item Display - groups the Report to the single Vendor. The Report is called with the Transaction FBL1N.

After we have put the component into the Data Flow task and we double click it, we get into the Editor. We assign a Variant to get the Data assessable.

To continue, please preview the report at least once by clicking the “Preview” button. Use the report column editor at the bottom and the table on the upper right to define new columns. A column is defined by its name, offset and length. The following screenshot shows how the report should look like when it is properly defined.

![DatasourceSAPReportsEn](/img/contents/DatasourceSAPReportsEn.jpg){:class="img-responsive"}

The next step is to insert a script component into the Data Flow. With a double click on the component we get into the Script Transformation Editor. We add a column with the name " Vendor" under the screen Inputs and Outputs. We also change the value of the Exclusion Group to 1 if it's 0 at the Common Properties of the Output Pipeline.

![ScriptTransformationEn](/img/contents/ScriptTransformationEn.jpg){:class="img-responsive"}

In the lower part of the Script Screen is the Button "Design Script...". Click on it and we get into the Visual Basic Editor. Now we insert the following rows.

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Public Class ScriptMain
    Inherits UserComponent
    Dim Vendor As String
  
  
    Public Overrides Sub Input0_ProcessInputRow(ByVal Row As Input0Buffer)
        Dim retValue As Integer
  
        'If the Groupheader is containing any Vendorinformation  
        '(in our Case the Word "Vendo") the value from the same DataRow in the
        'Column PaymentDate is written to the variable "Vendor".
  
        If Row.Status.ToString().Trim().Contains("Vendo") Then
  
            If Integer.TryParse(Row.PaymentDate.ToString(), retValue) = True Then
                Vendor = Row.PaymentDate.ToString().Trim()
            End If
  
        End If
  
         'The Vendorinformation is written in the Vendor Column
        Row.Vendor = Vendor
  
        'If there is a Integer Value in the Column "Net" than the DataRow will be send to the Output 
        'The Column "NET" is out indicator column to filter the relevant DataRows.
        If Int32.TryParse(Row.Net.ToString(), retValue) = True Then Row.DirectRowToOutput0()
  
  
    End Sub
{% endhighlight %}
</details>

Now we get only the filtered rows with the respective vendor number in the Vendor column.

![XtractISReportEn](/img/contents/XtractISReportEn.jpg){:class="img-responsive"}
