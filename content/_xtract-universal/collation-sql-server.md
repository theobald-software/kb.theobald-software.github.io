---
layout: page
title: Collation Settings for MSSQL Server Destination
description: example of how to append the collation for a specified column
permalink: /:collection/:path
weight: 5
---

The following section describes a common problem that occurs when pushing SAP data into an SQL server database when collation is not set case-sensitive.
The given example shows how to customize the drop & create SQL server statement within Xtract Universal destination settings.

### Collation SQL Server

Collations in SQL Server provide sorting rules, case, and accent sensitivity properties for your data. Collations that are used with character data types, such as *char* and *varchar*, difine the code page and corresponding characters that can be represented for the corresponding data type. 

Collation can be set up on three different levels:
- [Server collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-server-collation?view=sql-server-ver15)
- [Database collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-database-collation?view=sql-server-ver15)
- [Column collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-column-collation?view=sql-server-ver15)

MSSQL server offers different collation statements. The following excerpts provide the necessary adaptions for the given example:

**option** | **description**
------------ | -------------
Case-sensitive (_CS) | Distinguishes between uppercase and lowercase letters. If this option is selected, lowercase letters sort ahead of their uppercase versions. If this option isn't selected, the collation is case-insensitive. Which means, SQL Server considers the uppercase and lowercase versions of letters to be identical for sorting purposes. You can explicitly select case insensitivity by specifying _CI.
Accent-sensitive (_AS) | Distinguishes between accented and unaccented characters. For example, "a" is not equal to "ấ". If this option isn't selected, the collation is accent-insensitive. Which means, SQL Server considers the accented and unaccented versions of letters to be identical for sorting purposes. You can explicitly select accent insensitivity by specifying _AI.

Check the complete list of [usable collations](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15#Collation_Defn). 

For more detailed information, see [Microsoft site](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15). 
The following example shows the possibility to use the column collation within Xtract Universal with [Custom SQL](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql) statement.

### SQL Server Management Studio (SSMS)

Check the database settings *xu_fas*, following collation statement appears: *Latin1_General_100_CI_AI*. 

**option** | **description**
------------ | -------------
_CI | case-insensitive
_AI | accent-insensitive

![default_collation_statement](/img/contents/collation_example_CI_AI_xu_fas_DB.png){:class="img-responsive"}

### Xtract Universal

We want to extract the SAP table *MAKT* from ECC:

1. Create an table extraction as discribed in [Online Help](https://help.theobald-software.com/en/xtract-universal/table) article.
   - The look-up process dispends the corresponding metadata from our SAP object *MAKT*. 
![default_collation_statement](/img/contents/makt_metadata.png){:class="img-responsive"}
   - Composite primary key consists of the table fields: *MANDT*, *MATNR*, *SPRAS* with a unique constraint.
   - SAP field *SPRAS* is of data type *LANG* with a length *1*.
   ![DD_SPRAS](/img/contents/dataDictionary_SPRAS.png){:class="img-responsive"}
2. Creating a simple Where clause statement like 
```sql
MATNR = '000000000000000038' AND ( SPRAS  = 'd' OR SPRAS = 'D' )
```
3. Results in two data entries when clicking **[Load live preview]** - The SAP database interprets the data records with upper-case 'D' and lower-case 'd' in the field *SPRAS* as different data records.
4. Select an MSSQL server destination for the previously edited extraction and click **[Run]**.
   - The destination following error occurs during the extration.
```
System.Data.SqlClient.SqlException (0x80131904): Violation of PRIMARY KEY constraint 'PK__makt__3483F06C110B42CD'. Cannot insert duplicate key in object 'dbo.makt'. The duplicate key value is (800, 000000000000000038, d)
```

### Workaround

As explained above Xtract Universal isn't able to push the data of 'MAKT' into MSSQL server due to used collation statement of the database. 
In this case, the user has to customize the SQL statement *Preparation* of the MSSQL destination settings.

1. Change the default value *Drop & Create* to *Custom SQL* and click **[Edit SQL]**.
2. Select the *Drop & Create* entry from the drop-down menu and click on **[Generate Statement]** for table *MAKT*.
3. Customize column collation for field *SPRAS* as shown below.
4. The extraction to MSSQL server ends with the following message 'Extraction finished successfully'.


```sql
IF (object_id('MAKT') IS NOT NULL)
BEGIN
   DROP TABLE [MAKT];
END;

CREATE TABLE [MAKT]  
(
   [MANDT] NATIONAL CHARACTER VARYING(3) NOT NULL,
   [MATNR] NATIONAL CHARACTER VARYING(18) NOT NULL,
   [SPRAS] NATIONAL CHARACTER VARYING(1) COLLATE Latin1_General_100_CS_AS NOT NULL,
   [MAKTX] NATIONAL CHARACTER VARYING(40),
   [MAKTG] NATIONAL CHARACTER VARYING(40),
   PRIMARY KEY
   (
      [MANDT], 
      [MATNR], 
      [SPRAS]
   )

);
```


