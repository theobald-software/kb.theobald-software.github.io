---
layout: page
title: Working with Lists in the WHERE-Clause Editor
description: Working with Lists in the WHERE-Clause Editor
permalink: /:collection/:path
weight: 160
---

The following article shows how to use static lists and SELECT statements in the [WHERE Clause Editor](https://help.theobald-software.com/en/xtract-universal/table/where-clause#where-clause-editor).<br>

{: .box-note }
**Note:** List parameters or not yet supported by the Table component.

<!---
### List Parameters

1. Create a Table extraction for the SAP table KNA1, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
2. Navigate to the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]** and **[Default with parameter] to create an empty template in the WHERE clause editor.
-->

### Static Lists

The depicted example statement returns all the active customers (rows in the table KNA1) that have an address in one of the following cities: Berlin, Stuttgart, Paris, Seattle, Hong Kong or Dongguan.

1. Create a Table extraction for the SAP table KNA1, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
2. Navigate to the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]** and **[Default with literal]** to create an empty template in the WHERE clause editor.
4. Select the column *ORT01* from KNA1 as the data you want to filter.
5. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
6. Select *List* as the type of the static filter value.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-00.png){:class="img-responsive"}
7. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.
8. Select *String* as the **Type** of the list. When working with numbers, select *Number*.
9. Click **[Add]** to add items to the list. You can edit items via double-click.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-04.png){:class="img-responsive"}
10. Click **[OK]** to confirm your input.
11. Click **[Load live Preview]** or run the extraction to check the output.


### SELECT Statement

SELECT statements can be used to select data from SAP tables, see [ABAP Documentation: Open SQL SELECT](https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-us/abapselect.htm).<br>
The depicted example statement returns all the active customers (rows in the table KNA1) that have a sales document in the table VBAK for sales document header data.

{: .box-note }
**Note:** The usage of SELECT statements is only possible as of SAP Release 7.40, SP05.

1. Create a Table extraction for the SAP table KNA1, see [Online Help: Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).<br>
2. Navigate to the *WHERE Clause* tab in the main window of the extraction and click **[Editor Mode]** to open the WHERE clause editor. <br>
![where-clause-editor](/img/contents/where-clause-builder.png){:class="img-responsive"}
3. Click **[Add criteria]** and **[Default with literal]** to create an empty template in the WHERE clause editor.
4. Select the column *KUNNR* from KNA1 as the data you want to filter.
5. Select *IN* as the operator. *IN* is the only operator that can be used for lists.
6. Select *List* as the type of the static filter value.<br>
![where-clause-editor](/img/contents/xu/where-clause-editor-01.png){:class="img-responsive"}
7. Click **[Press to Edit]** in the static value component of the WHERE clause. The window "Edit List" opens.
8. Select *SELECT* as the **Type** of the list. 
9. Enter the SELECT statement ```SELECT KUNNR FROM VBAK``` to create a list that contains all items of the column KUNNR from the SAP table VBAK.<br>
![where-clause-editor](/img/contents/xu/select-statement.png){:class="img-responsive"}
10. Click **[OK]** to confirm your input.
11. Click **[Load live Preview]** or run the extraction to check the output.


*****
#### Related Links
- [Online Help: WHERE Clause Editor](https://help.theobald-software.com/en/xtract-universal/table/where-clause#where-clause-editor)