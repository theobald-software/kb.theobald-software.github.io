---
layout: page
title: Dynamization of WHERE conditions of the XIS table components
description: Dynamization of WHERE conditions of the XIS table components
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The dynamization of Xtract IS Table components increases the maintainability of SSIS packages / projects. So-called SSIS expressions based on table properties are used for this functionality. The following table shows all defined table properties that can be used dynamically at runtime of the SSIS package:


|Property Name|Description|
|:----|:----|
| `[Xtract Table].[WhereClause]`| Restricts the number of rows included in the results set by the statement SELECT of a query, by using a logical expression.|
| `[Xtract Table].[ConvertsDates]`|Converts the character-type SAP date to a special date format.|
| `[Xtract Table].[CustomFunctionName]`| Specifies the name of the function module used for data extraction.|
| `[Xtract Table].[MaxRows]`|Specifies the maximum number of extracted records.|
| `[Xtract Table].[MinDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[MinDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[PackageSize]`| Specifies the number of records retrieved per data package.|


### Step-by-Step Anleitung zur Verwendung von [Xtract Table].[WhereClause]

In the following example, only results till 01.01 of the current fiscal year are to be extracted. The SAP standard table *BKPF - Accounting Document Header* and the table field *BUDAT - Posting Date in the Document* are used. 

1. Create a SSIS package, see [Xtract IS Table](https://help.theobald-software.com/en/xtract-is/table)
2. Right-click on Data Flow canvas and open **[Properties]**
![data_flow_properties](/img/contents/xis/data_flow_properties_expressions.png){:class="img-responsive"}
3. Add Expression by clicking on plus symbol and open expression context using **[...]**
4. Select Property [Xtract Table].[WhereClause]
![expression_editor](/img/contents/xis/property_expression_editor.png){:class="img-responsive"}
5. Open expression Builder using **[...]**
6. Copy & paste following expression `"BUDAT <= " + "'" +  (DT_STR, 4, 1252) DATEPART("yy" , GETDATE())  + "0101'"`
![expression_builder](/img/contents/xis/expression_builder.png){:class="img-responsive"}
7. **[Evaluate Expression]** to check correct syntax
8. Confirm entry with clicking on **[OK]**
9. Confirm entry with clicking on **[OK]** within Property Expression Editor
10. Check WHERE-Bedingung der Tabellenextraktion im Tab *WHERE Clause*
![xis-where-condition](/img/contents/xis/xis_where_clause_tab.png){:class="img-responsive"}
11. Run the SSIS Package / Project
