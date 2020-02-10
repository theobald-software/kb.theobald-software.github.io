---
layout: page
title: Collation Settings for MSSQL Server Destination
description: example of how to append the collation for a specified column
permalink: /:collection/:path
weight: 5
---

The following section describes a common problem by pushing SAP data into a SQL server database if not setting up a case sensitive collation. In this example, we will explain, how to customize the drop & create SQL server statement within Xtract Universal destination settings.

### Collation SQL Server

Collations in SQL Server provide sorting rules, case, and accent sensitivity properties for your data. Collations that are used with character data types, such as *char* and *varchar*, dictate the code page and corresponding characters that can be represented for that data type. 

Collation can be set up on three different levels:
- [Server collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-server-collation?view=sql-server-ver15)
- [Database collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-database-collation?view=sql-server-ver15)
- [Column collation](https://docs.microsoft.com/en-us/sql/relational-databases/collations/set-or-change-the-column-collation?view=sql-server-ver15)

MSSQL server offers different collation statements. The following excerpts provides the needed adaptions for this example:

**option** | **description**
------------ | -------------
Case-sensitive (_CS) | Distinguishes between uppercase and lowercase letters. If this option is selected, lowercase letters sort ahead of their uppercase versions. If this option isn't selected, the collation is case-insensitive. That is, SQL Server considers the uppercase and lowercase versions of letters to be identical for sorting purposes. You can explicitly select case insensitivity by specifying _CI.
Accent-sensitive (_AS) | Distinguishes between accented and unaccented characters. For example, "a" is not equal to "ấ". If this option isn't selected, the collation is accent-insensitive. That is, SQL Server considers the accented and unaccented versions of letters to be identical for sorting purposes. You can explicitly select accent insensitivity by specifying _AI.

A complete list of usable collation can be found [here](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15#Collation_Defn)

For more detailed information, please rely on the following official [Microsoft site](https://docs.microsoft.com/en-us/sql/relational-databases/collations/collation-and-unicode-support?redirectedfrom=MSDN&view=sql-server-ver15). 
In the following example, we will explain the possibility to use the column collation within Xtract Universal by using [Custom SQL](https://help.theobald-software.com/en/xtract-universal/xu-destinations/microsoft-sql-server/sql-server-custom-sql) statement.

### SQL Server Management Studio (SSMS)

Take a closer look into the database settings 'xu_fas', following collation statement appears: 'Latin1_General_100_CI_AI'. 

**option** | **description**
------------ | -------------
_CI | case-insensitive
_AI | accent-insensitive

![default_collation_statement](/img/contents/collation_example_CI_AI_xu_fas_DB.png){:class="img-responsive"}

### Xtract Universal

We want to extract the SAP table 'MAKT' from ECC:

1. Create an table extraction as discribed in our [Online Help](https://help.theobald-software.com/en/xtract-universal/table)
2. The look-up process dispend the corresponding metadata from our SAP object 'MAKT'. 
![default_collation_statement](/img/contents/makt_metadata.png){:class="img-responsive"}
3. Composite primary key of the table fields: 'MANDT', 'MATNR', 'SPRAS'
4. SAP field 'SPRAS' is of data type 'LANG' with a length '1'
5. Creating a simple Where clause statement like 
```sql
MATNR = '000000000000000038' AND ( SPRAS  = 'd' OR SPRAS = 'D' )
```
6. **[Load live preview]** results in two data entries - only difference upper- lower case for the field 'SPRAS'
7. Select a MSSQL server destination for this extraction and press the **[Run]** button
8. Following error during extraction occurs from the destination
```
System.Data.SqlClient.SqlException (0x80131904): Violation of PRIMARY KEY constraint 'PK__makt__3483F06C110B42CD'. Cannot insert duplicate key in object 'dbo.makt'. The duplicate key value is (800, 000000000000000038, d)
```

### Workaround

As explained in detail above Xtract Universal isn't able to push the entire data of 'MAKT' into MSSQL server due to used collation statement of the database. In this case, the user has to adjust the SQL statement *Preparation* of the MSSQL destination settings.

1. Change the default value *Drop & Create* to *Custom SQL*
2. Create the *Drop & Create* statement for table 'MAKT'
3. Customize column collation for table field 'SPRAS'
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
```
4. Finally the extraction to MSSQL server ends with following statement

```
Extraction finished successfully
```


