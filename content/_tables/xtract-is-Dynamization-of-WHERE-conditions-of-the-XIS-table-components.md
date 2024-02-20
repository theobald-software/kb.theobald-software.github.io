---
layout: page
title: Xtract IS - Dynamization of WHERE conditions
description: Dynamization of WHERE conditions of the XIS table components
permalink: /:collection/:path
weight: 1
---

The following article shows how to define dynamic WHERE conditions for Table extractions.

The dynamization of Xtract IS Table components increases the maintainability of SSIS packages / projects. 
So-called SSIS expressions based on table properties are used for this functionality. 
The following table shows all defined table properties that can be used dynamically at runtime of the SSIS package:


|Property Name|Description|
|:----|:----|
| `[Xtract Table].[WhereClause]`| Restricts the number of rows included in the results set by the statement SELECT of a query, by using a logical expression.|
| `[Xtract Table].[ConvertsDates]`|Converts the character-type SAP date to a special date format.|
| `[Xtract Table].[CustomFunctionName]`| Specifies the name of the function module used for data extraction.|
| `[Xtract Table].[MaxRows]`|Specifies the maximum number of extracted records.|
| `[Xtract Table].[MinDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[MaxDateReplacement]`|Date conversions are applied in case of invalid data in SAP date fields.|
| `[Xtract Table].[PackageSize]`| Specifies the number of records retrieved per data package.|


### How to use [Xtract Table].[WhereClause]

In the depicted example, only results until 01.01 of the current fiscal year are to be extracted. 
The SAP standard table *BKPF - Accounting Document Header* and the table field *BUDAT - Posting Date in the Document* are used. 

1. Create an SSIS package, see [Xtract IS Table](https://help.theobald-software.com/en/xtract-is/table).
2. Right-click on Data Flow canvas and open **[Properties]**.
![data_flow_properties](/img/contents/xis/data_flow_properties_expressions.png){:class="img-responsive"}
3. Add Expression by clicking on plus symbol and open expression context using **[...]**.
4. Select Property `[Xtract Table].[WhereClause]`.
![expression_editor](/img/contents/xis/property_expression_editor.png){:class="img-responsive"}
5. Open expression Builder using **[...]**.
6. Copy & paste following expression `"BUDAT <= " + "'" +  (DT_STR, 4, 1252) DATEPART("yy" , GETDATE())  + "0101'"`.
![expression_builder](/img/contents/xis/expression_builder.png){:class="img-responsive"}
7. **[Evaluate Expression]** to check correct syntax.
8. Confirm entry by clicking **[OK]**.
9. Confirm entry by clicking **[OK]** within Property Expression Editor.
10. Check WHERE-Clause of the table extraction in tab *WHERE Clause*.
![xis-where-condition](/img/contents/xis/xis_where_clause_tab.png){:class="img-responsive"}
11. Run the SSIS Package / Project.


### Examples of Dynamic WHERE clauses

|SSIS Expression|	Output	| Description |
|:----|:----|:----|
|`"BUDAT >= " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", DATEADD( "yy", -1, GETDATE() ) ) + "%'"`|	BUDAT >= ‘2019%’	|All values of the last 2 years. |
|`"BUDAT = " + "'" +(DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + RIGHT("0" + (DT_STR, 2, 1252) DATEPART("mm" , GETDATE()), 2) +RIGHT("0" + (DT_STR, 2, 1252) DATEPART("dd" , GETDATE()), 2) + "'"`|	BUDAT = ‘20200726’|	All values of the current day.|
|`"BUDAT >= " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", GETDATE() ) + "01%'" + " AND BUDAT < " + "'" + (DT_STR, 4, 1252) DATEPART( "yy", GETDATE() ) + "04%'"`|	BUDAT >= ‘202001%’ AND BUDAT < ‘202004%’|	All values in Q1 of the current year.|
|`"BUDAT LIKE " + "'" + (DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + RIGHT("0" + (DT_STR, 2, 1252) DATEPART("mm" , GETDATE()), 2) + "%'"`| BUDAT LIKE ‘202007%’	| All values of the current month. |
|`"BUDAT LIKE " + "'" + (DT_STR, 4, 1252) DATEPART("yy" , GETDATE()) + "%'"`|	BUDAT LIKE ‘2020%’	|All values of the current year. |
|`(DT_WSTR, 4) YEAR( GETDATE() )`|	2022	|Current year value. |
|`(DT_WSTR, 4) DATEPART( "yy", DATEADD( "yy", -9, GETDATE() ) )`|	2013	|Annual calculation based on the number parameter used. |
