---
layout: page
title: Using Computed Query Parameters for SSRS with Xtract Universal
description: Using Computed Query Parameters in Visual Studio for SSRS
permalink: /:collection/:path
weight: 52
---

This article contains information on how to parameterize extractions in Visual Studio in context of Xtract Universal's [SSRS destination](https://help.theobald-software.com/en/xtract-universal/destinations/server-report-services).

### About

When creating reports with Visual Studio you can incorporate dynamic and optional parameters to let users filter data without having to change the report itself.<br>

To do this, filter parameters need to be passed as runtime parameters to Xtract Universal.
In Visual Studio's Report Server Projects the runtime parameters of Xtract Universal allow only one parameter input for each runtime parameter.
To pass multiple parameters you can use a computed query parameter.

The following example uses the [WHERE clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause) of a table extraction to show how to pass multiple filter parameters using a single computed query parameter.

### Prerequisites

Create a table extraction with an SSRS destination in Xtract Universal. This example uses the SAP standard table *MAKT*. <br>
Add the extraction as a data source in Visual Studio and create a report ad described in [SSRS in Visual Studio](https://help.theobald-software.com/en/xtract-universal/destinations/server-report-services#adding-an-extraction-as-a-data-source-in-visual-studio).

### Computed Query Parameters

This example uses data from the columns SPRAS and MATNR to filter the SAP standard table *MAKT*.
Input parameters for both columns are combined in a single computed parameter that is passed to the where clause.

How to create a parameter that encapsulates 2 other parameters:

1. Create 3 query parameters. <br>
Right-click the data set in the *Report Data* section and select **Dataset Properties**. The window "Dataset Properties" opens. <br>
Switch to the tab *Parameters* and click **[Add]**.
2. Name 2 parameters after the columns you want to filter. In this example `spras` and `matnr`. <br>
Name the other parameter "where". This will be the computed query parameter. 
![Query-Parameter](/img/contents/xu/ssrs-query-parameters2.png){:class="img-responsive"}
3. Click the **[f(x)]** button next to the "where" parameter. The window "Expressions" opens.
4. Enter the name of the 2 columns and the value of their respective query parameter. Link them together by using " and ":<br>
```= "spras " & Parameters!spras.Value & " and " & "matnr " & Parameters!matnr.Value```.
![SSRS-Expression](/img/contents/xu/ssrs-expression.png){:class="img-responsive"}
5. Confirm your input with **[OK]**.
6. Switch to the Query tab and click the **[Query Designer…]** button. The window “Query Designer” opens.
7. Select *Parameterized* as the **Behaviour** for "where".
![Query-Designer](/img/contents/xu/QueryDesigner.png){:class="img-responsive"}
8. Enter the name of the new query parameter under **Value**.
9. Confirm your input with **[OK]**.

Use the **Preview** mode of Visual Studio to test the inputs.


### Optional Computed Query Parameters

If you want to use parameters as optional input, the expression for the "where" parameter needs to be edited to accommodate optional parameters.

#### Optional Parameters

How to make parameters optional:

1. Right-click the input fields of the 2 parameters you want to be optional and select *Parameter Properties*. The window "Report Parameter Properties" opens.
![Input-Field](/img/contents/xu/optional-params.png){:class="img-responsive"}
2. In the *General* tab, activate the checkbox **Allow null value**.
3. Confirm your input with **[OK]**. A checkbox appears next to the input field.
4. If the checkbox is activated, the parameter will send *Nothing* and thus be ignored at runtime.

#### Optional Parameters in Expressions

In this example we add an optional where clause to the query.
The goal is to filter the SPRAS and MATNR columns, with both filters being optional.<br>
This results in four different cases on how the where clause could look like:
- no filtering, the where runtime parameter will be ignored
- filter by `spras`only, e.g., `spras > 5`
- filter by `spras` and `matnr`, e.g., `spras > 5 and matnr = TG0012`
- filter by `matnr`only, e.g., `matnr = TG0012`

How to edit the "where" expression to accommodate optional input:

1. Navigate to the query parameters.<br>
Right-click the data set in the *Report Data* section and select **Dataset Properties**. The window "Dataset Properties" opens. Switch to the tab *Parameters*.
2. Click the **[f(x)]** button next to the "where" parameter. The window "Expressions" opens.
3. Edit the expression to include the following conditions:<br>
``` c++
= IIf (IsNothing(Parameters!spras.Value) And IsNothing(Parameters!matnr.Value),Nothing,
IIf(IsNothing(Parameters!spras.Value),"","spras " & Parameters!spras.Value) &
IIf(Not(IsNothing(Parameters!spras.Value)) And Not(IsNothing(Parameters!matnr.Value))," and ","") &
IIf(IsNothing(Parameters!matnr.Value),"","matnr " & Parameters!matnr.Value))
```
- The first line checks if both parameters are *Nothing*. In this case the expression returns *Nothing* and the evaluation is complete. Else either one or both parameters are not set to *Nothing*.
- The second line checks if `spras` is not *Nothing* and adds the column name and value to the expression if that is the case. Else the expression is left unchanged ("").
- The third line checks if both `spras` and `matnr` are not *Nothing* and adds an " and " to the where clause. Else the expression is left unchanged ("").
- The last line checks if the `matnr` is not *Nothing* and adds the column name and value to the expression if that is the case. Else the expression is left unchanged ("").
4. Confirm your input with **[OK]**.

Use the **Preview** mode of Visual Studio to test the inputs.
