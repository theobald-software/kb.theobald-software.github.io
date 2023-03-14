---
layout: page
title: Delta Table Extraction
description: Delta Table Extraction
permalink: /:collection/:path
weight: 30
---

This article shows how to load data incrementally from an SAP Table based on date fields.
The following example scenarios use the table VBAK (SAP Sales Document Header), which has two date fields: ERDAT for creation date and AEDAT for update date.

### Extract Data using a Date Parameter

The following example extracts data that was created or changed after a specific date.
The date is provided as a parameter at runtime.

1. Create a new Table extraction.
2. Look up a table you want to extract data from, e.g., VBAK. <br>
![VBAK-Table](/img/contents/VBAK-Table.png){:class="img-responsive"}
3. Open the WHERE clause tab of the Table component and enter the following criterion: <br>
`( VBAK~ERDAT GE @LastDate AND VBAK~AEDAT EQ '00000000' ) OR VBAK~AEDAT GE @LastDate` <br>
This criterion extracts data if one of the following conditions is true: <br>
The data was created (ERDAT) after the date provided by the parameter `@LastDate` and it has not been changed (AEDAT). <br>
Or the data has changed (ARDAT) after the date provided by the parameter `@LastDate`.
![Where-Clause_Date-Param](/img/contents/Where-Clause_Date-Param.png){:class="img-responsive"}
4. Click **[OK]** to confirm your input.
5. Open the *Run Extraction* menu and navigate to the *Custom* tab for runtime parameters.<br>
![Where-Clause_Run-Extraction-Param](/img/contents/xu/run-extraction-parameter.png){:class="img-responsive"}
6. Enter a value for the `@LastDate` parameter in the format `YYYYmmDD`.
7. Click **[Run]** and check the results.

### Daily Data Extraction

The following example extracts data that was created or changed the day before.
This example uses script expressions to query the current date.

1. Create a new Table extraction.
2. Look up a table you want to extract data from, e.g., VBAK. <br>
![VBAK-Table](/img/contents/VBAK-Table.png){:class="img-responsive"}
3. Open the WHERE clause tab of the Table component and enter the following criterion: <br>
`(ERDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#' AND AEDAT = '00000000') OR AEDAT >= '#{ DateTime.Now.AddDays(-1).ToString("yyyyMMdd") }#'` <br>
This criterion extracts data if one of the following conditions is true:<br>
The data was created (ERDAT) the day before the current date and it has not been changed (AEDAT).<br>
Or the data has changed (ARDAT) the day before the current date.
![Where-Clause_Daily](/img/contents/Where-Clause-Daily.png){:class="img-responsive"}
4. Click **[OK]** to confirm your input.
5. Open the *Run Extraction* menu.
7. Click **[Run]** and check the results.

This extraction can be scheduled every night at 1p.m. or later to extract all changes of the day before.
Providing extraction dates is not necessary.
 
******

#### Related Links
- [Change Data Capture with CDHDR](https://kb.theobald-software.com/xtract-universal/change-data-capture-with-cdhdr)
- [Table: WHERE Clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause)
- [Xtract Universal: Script Expressions](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/script-expressions)
