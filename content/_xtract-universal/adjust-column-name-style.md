---
layout: page
title: Post-Processing Column Name Style
description: Post-Processing Column Name Style by using generic SQL-statement
permalink: /:collection/:path
weight: 115
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for Xtract Universal.<br>
Make sure to use the knowledge base within the new [HelpCenter for Xtract Universal](https://helpcenter.theobald-software.com/xtract-universal/knowledge-base/).

The following section describes a common business scenario to rename column name style within Microsoft SQL-Server environment.
The given example shows how to use Custom SQL in the Finalization step of the database transaction within Xtract Universal destination settings.

Xtract Universal offers 4 different [Column Name Styles](https://help.theobald-software.com/en/xtract-universal/destinations/microsoft-sql-server#column-name-style) for naming the SAP table columns in databases:
- Code - `[FieldName]`
- Prefixed Code - `[TabName]~[FieldName]`
- CodeAndText - `[FieldName]_[FieldDescription]`
- TextAndCode - `[FieldDescription]_[FieldName]`

The metadata of the SAP objects is fetched from the SAP source object. 
In the depicted example, the Column Name Style 'Prefixed Code' is used, which connects each existing table field in the form [TabName][ColumnName] with the SAP standard separator '~'. 
This naming of table columns is mainly used for table joins, since identical column identifiers exist in the different tables. A typical example is the table join of 'EKKO', table Purchasing Document Header and 'EKPO', table Purchasing Document Item. 
Both tables have the following identical column descriptions: 'MANDT', 'EBELN'. When selecting the standard Column Name Style 'Code' in [destination settings](https://help.theobald-software.com/en/xtract-universal/destinations/microsoft-sql-server#destination-settings), the following error occurs on the SQL side when selecting these fields.

> System.Data.SqlClient.SqlException (0x80131904): Column names in each table must be unique. Column name 'MANDT' in table 'EKKO_JOIN' is specified more than once.

### Adjust Standard Separator using Custom SQL

Proceed as follows to adjust SAP standard separator from '~' to '_':
1. Adjust the Column Name Style e.g. 'PrefixedCode' (1).
![column_name_style](/img/contents/xu/destination_settings.png){:class="img-responsive"} 
2. Insert the generic SQL Code below into the 'Finalization'(2) step using **[Edit SQL]**(3).
![Custom_sql](/img/contents/xu/custom_sql_finalization_step.png){:class="img-responsive"} 
3. Confirm the entries with **[OK]** (4).
4. Execute the selected extraction. 
5. Check the Column Name Style changes and results in SQL Server Management Studio (SSMS).
![SSMS_view](/img/contents/xu/ssms_result_column_name_style.png){:class="img-responsive"} 

```sql
declare @table_name nvarchar(128) = '#{ Extraction.TableName }#'
declare @old_name nvarchar(128)
declare @new_name nvarchar(128)

declare cur CURSOR LOCAL for
    select COLUMN_NAME
    from INFORMATION_SCHEMA.COLUMNS
    where TABLE_NAME = @table_name

open cur

while (1 = 1)
begin
    fetch next from cur into @old_name
    IF @@FETCH_STATUS != 0 BREAK

    SET @new_name = REPLACE(@old_name, '~', '_')
    SET @old_name = '[' + @table_name + '].[' + @old_name + ']'
    EXEC sp_rename @old_name, @new_name, 'COLUMN'
end

close cur
deallocate cur
```

### Create Stored Procedure (sp) using SSMS

Create a stored procedure that contains above mentioned T-SQL code for renaming column names style and call this stored procedure in the finalization step. 
This approach allows you to easily change the renaming logic within the DB or SQL server instance - you would only have to adapt the stored procedure instead of e.g., hundreds of finalization steps.

Proceed as follows to adjust SAP standard separator from '~' to '_':
1. Create T-SQL Stored Procedure by using SQL Server Management Studio. Detailed information can be found in the official [Microsoft Documentation](https://docs.microsoft.com/en-us/sql/relational-databases/stored-procedures/create-a-stored-procedure?view=sql-server-ver15) .
2. Assign a name for the Stored Procedure e.g., ColumnNameStyle.
3. Insert the SQL-Code below and **[Execute]** the statement to save the process.
![custom Stored Procedure](/img/contents/xu/ssms_object_explorer_custom_stored_procedure.png){:class="img-responsive"}
4. Select the Column Name Style e.g. 'PrefixedCode' (1).
![column_name_style](/img/contents/xu/destination_settings.png){:class="img-responsive"}
5. Insert following SQL Code `EXEC ColumnNameStyle '#{ Extraction.TableName }#'` into the 'Finalization'(2) step using **[Edit SQL]**.
![execute stored procedure](/img/contents/xu/exec_sp_column_name_style.png){:class="img-responsive"}
6. Confirm changes with **[OK]**.
6. Execute the selected extraction and check the Column Name Style changes and results in SSMS.

```sql
CREATE PROCEDURE ColumnNameStyle 
	@table_name nvarchar(128)
AS 

BEGIN

declare @old_name nvarchar(128)
declare @new_name nvarchar(128)
declare cur CURSOR LOCAL for
    
	select COLUMN_NAME
    	from INFORMATION_SCHEMA.COLUMNS
    	where TABLE_NAME = @table_name

open cur
while (1 = 1)
begin

    fetch next from cur into @old_name
    IF @@FETCH_STATUS != 0 BREAK
    SET @new_name = REPLACE(@old_name, '~', '_')
    SET @old_name = '[' + @table_name + '].[' + @old_name + ']'
    EXEC sp_rename @old_name, @new_name, 'COLUMN'

end
close cur
deallocate cur

END
``` 
