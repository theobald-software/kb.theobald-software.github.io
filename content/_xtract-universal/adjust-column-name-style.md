---
layout: page
title: Post-Processing Column Name Style
description: Post-Processing Column Name Style by using generic SQL-statement
permalink: /:collection/:path
weight: 9
---

The following section describes a common business scenario to rename column name style within Microsoft SQL-Server environment.
The given example shows how to use Custom SQL in the Finalization step of the database transaction within Xtract Universal destination settings.

Xtract Universal offers 4 different [Column Name Styles](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-settings#column-name-style) for naming the SAP table columns in databases:
- Code
- Prefixed Code
- CodeAndText
- TextAndCode

The metadata of the SAP objects is fetched from the SAP source object. 
In the following example, the Column Name Style 'Prefixed Code' is used, which connects each existing table field in the form [TabName][ColumnName] with the SAP standard separator '~'. 
This naming of table columns is mainly used for table joins, since identical column identifiers exist in the different tables. A typical example is the table join of 'EKKO', table Purchasing Document Header and 'EKPO', table Purchasing Document Item. 
Both tables have the following identical column descriptions: 'MANDT', 'EBELN'. When selecting the standard Column Name Style 'Code' in [destination settings](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-settings#destination-settings), the following error occurs on the SQL side when selecting these fields.

> System.Data.SqlClient.SqlException (0x80131904): Column names in each table must be unique. Column name 'MANDT' in table 'EKKO_JOIN' is specified more than once.

### Adjust Standard Separator using Custom SQL

Proceed as follows to circumvent to change SAP standard separator from '~' to '_':
1. Adjust the Column Name Style e.g. 'PrefixedCode' (1).
![column_name_style](/img/contents/xu/destination_settings.png){:class="img-responsive"} 
2. Insert the generic SQL Code below into the 'Finalization'(3) step using 'Custom SQL'(2).
![Custom_sql](/img/contents/xu/custom_sql_finalization_step.png){:class="img-responsive"} 
3. Confirm the entries with 'OK' (4).
4. Execute the selected extraction. 
5. Check the Column Name Style changes in SSMS.
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

Proceed as follows to circumvent to change SAP standard separator from '~' to '_':
1. Create a T-SQL Stored Procedure by using SQL Server Management Studio. Detailed information can be foung in the official [Microsoft Documentation](https://docs.microsoft.com/en-us/sql/relational-databases/stored-procedures/create-a-stored-procedure?view=sql-server-ver15) .
2. Assign a name for the stored procedure e.g., ColumnNameStyle.
3. Insert the SQL Code below and **[Execute]** this stored procedure for saving purpose.
![custom Stored Procedure](/img/contents/xu/ssms_object_explorer_custom_stored_procedure.png){:class="img-responsive"}
4. Adjust the Column Name Style e.g. 'PrefixedCode' (1).
![column_name_style](/img/contents/xu/destination_settings.png){:class="img-responsive"}
5. Insert following SQL Code `EXEC ColumnNameStyle '#{ Extraction.TableName }#'` into the 'Finalization'(3) step using 'Custom SQL'(2).
![execute stored procedure](/img/contents/xu/exec_sp_column_name_style.png){:class="img-responsive"}
6. Execute the selected extraction and check the Column Name Style changes in SSMS.

```sql
CREATE PROCEDURE ColumnNameStyle 
	-- Add the parameters for the stored procedure here
	@table_name nvarchar(128)
AS 

BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;
	declare @old_name nvarchar(128),
		@new_name nvarchar(128)

	-- Insert statements for procedure here	
	SELECT @table_name, @old_name, @new_name
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










