---
layout: releaseNotes
---

# Xtract Universal 6.3.11

## Redshift ODBC Driver upgrade

The Redshift destination was upgraded to use the latest Redshift ODBC driver version 2.1.0.0. The new implementation is not compatible to version 1.x ODBC drivers and will not work anymore with these versions.

**These changes are only breaking for customers using the Redshift destination**

## Improved data type mapping for Redshift destination

The Redshift destination now has improved data type mapping as follow:

* Int4 type source fields are now mapped to INTEGER columns in the destination table instead of DECIMAL(10,0)
* Int2 type source fields are now mapped to SMALLINT columns in the destination table instead of DECIMAL(5,0)
* Raw type source fields are now mapped to VARBINARY columns in the destination table instead of VARCHAR

## Bug fix for special characters in result sets

The data handling for INSERT operations was improved. E.g. some special characters have caused problems with data loads which is fixed in this version.

## Increased row processing timeout

The timeout for row processing commands was increased to 300 seconds in order to now fail on long running insert operations.