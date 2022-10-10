---
layout: page
title: Working with Lists in the WHERE-Clause Editor
description: Working with Lists in the WHERE-Clause Editor
permalink: /:collection/:path
weight: 160
---

This article shows how to use lists and SELECT statements in Xtract Universal's [WHERE Clause Editor](https://help.theobald-software.com/en/xtract-universal/table/where-clause#where-clause-editor).<br>

<!---
### List Parameters

List parameters are not yet supported in the Table component.

1. Create a Table extraction, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
Look up the SAP Table *KNA1*.
2. Open the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-builder](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]**.
4. Click **[Default with parameter].
-->

### Static Lists

Create a list of literal values.

1. Create a Table extraction, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
2. Open the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]**.
4. Click **[Default with literal]**.
5. Select *List* the type for the literal value.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-01.png){:class="img-responsive"}
6. Click **[Press to Edit]**. The window "Edit List" opens.
7. Select *String* or *Number* as the type of the list. 
8. Click **[Add]** to create new list items. Edit the items via double-click.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-01.png){:class="img-responsive"}

### SELECT Statement

SELECT statements can be used to select data from a database, see [Microsoft Documentation: SELECT (Transact-SQL)](https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver16).

1. Create a Table extraction, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
2. Open the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]**.
4. Click **[Default with literal]**.
5. Select *List* the type for the literal value.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-01.png){:class="img-responsive"}
6. Click **[Press to Edit]**. The window "Edit List" opens.
7. Select *SELECT* as the type of the list. 
8. Enter a SELECT statement in **SELECT statement**.