|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|[1.14.11 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.14.11.html)|2020-05-27|ODP|Improved monitoring for subscriptions and requests([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.14.11.html))|
|1.14.10 [L]|2020-05-14|Table|Global conversion checkbox is now tri-state and allows to enable conversion on all the fields that have a conversion exit in SAP, all at once. Fixed a bug where the 1.x versions of Z_THEO_READ_TABLE would continue running after an exception in extractor occurred.|
|1.14.9 [L]|2020-05-07|Table|Improved the error message for when Z_THEO_READ_TABLE is used and conversion is enabled on a field that does not have a conversion exit defined in SAP.|
|1.14.8 [L]|2020-05-05|Table|Fixed a bug where enabling conversion on all the fields that have conversion exit defined in SAP, would enable conversion on all the fields in the table UI.|
|1.14.7 [M]|2020-04-30|Table|Fixed a bug where table extractions with Z_XTRACT_IS_TABLE_COMPRESSION function module would not work.|
|[1.14.6 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.14.6.html)|2020-04-14|Table|Updated Z_THEO_READ_TABLE to version 2.10. ([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.14.6.html))|
|1.14.5 [M]|2020-03-11|Table|Fixed metadata refresh|
|1.14.4 [M]|2020-03-10|ODP|Fix for parameters in higher value for ranged selections|
|1.14.3 [M]|2020-03-09|Table|Z_THEO_READ_TABLE exception and error callbacks don't cause short dumps anymore|
|1.14.2 [M]|2020-03-02|ODP|Fixed "Unknown block type" error|
|1.14.1 [M]|2020-02-05|General|Fixed warning for ENLFDIR permissions|
|1.14.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|1.13.0 [M]|2020-01-28|BAPI|Added support for multiple output tables|
|1.12.0 [L]|2020-01-23|Table|Added basic support for /THEO/READ_TABLE|
|1.11.3 [M]|2020-01-10|Table|Updated Z_THEO_READ_TABLE to version 2.9|
|1.11.2 [M]|2019-12-11|Table|Updated Z_THEO_READ_TABLE to version 2.8|
|1.11.1 [M]|2019-12-04|Hierarchy|Fix for lookup|
|1.11.0 [L]|2019-12-04|Table|Length restrictions of STRING/XSTRING are reflected in persistence / result metadata|
|1.10.19 [M]|2019-12-04|Table|Updated Z_THEO_READ_TABLE to version 2.7|
|[1.10.18 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.10.18.html)|2019-12-03|ODP|Several fixes for execution([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.10.18.html))|
|1.10.17 [L]|2019-12-02|Table|UI improvements for removing tables|
|1.10.16 [L]|2019-11-29|ODP|GUI: Fixed a bug that caused delta columns to be deselected when changing from Delta to Recovery mode|
|1.10.15 [L]|2019-11-13|Table|Fix for 99h error during lookup|
|1.10.14 [M]|2019-11-13|ODP|Hierarchy texts for merged segments now use the language of the connection |
|1.10.13 [M]|2019-11-07|Table|Updated Z_THEO_READ_TABLE to version 2.6|
|1.10.12 [M]|2019-11-06|Table|Updated Z_THEO_READ_TABLE to version 2.5|
|1.10.11 [M]|2019-11-04|ODP|Added support for parameterizing selections|
|[1.10.10 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.10.10.html)|2019-10-23|General|Fixed the preview GUI. Removed the broken alias functionality from table subcomponent([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.10.10.html))|
|1.10.9 [M]|2019-10-07|Table|Another fix for RFC_CONVERSION_FIELD when calling Z_THEO_READ_TABLE 2.x on Big Endian systems|
|1.10.8 [M]|2019-09-30|Table|Fix for RFC_CONVERSION_FIELD when calling Z_THEO_READ_TABLE 2.x on Big Endian systems|
|1.10.7 [L]|2019-09-27|General|Adjustments for column name conversion of result columns|
|1.10.6 [L]|2019-09-24|Table|Improved logging|
|1.10.5 [M]|2019-09-24|Table|Updated Z_THEO_READ_TABLE for releases 740SP05 and newer to version 2.4|
|1.10.4 [L]|2019-09-24|Hierarchy|Fixed incorrect window parent|
|1.10.3 [L]|2019-09-23|ERPConnect|Updated to 6.8.1.5|
|1.10.2 [M]|2019-09-20|General|Fix for copying results of Table (Compression FM) and ODP (non-Hierarchy)|
|1.10.1 [L]|2019-09-20|ERPConnect|Updated to 6.8.1.3|
|1.10.0 [L]|2019-09-20|BAPI|Added BAPI component (beta)|
|1.9.5 [L]|2019-09-19|Table|Updated ABAP README|
|1.9.4 [M]|2019-09-19|Table|Fix for decimal floats|
|1.9.3 [M]|2019-09-19|Table|Improved error handling for TABLE_NOT_ACCESSIBLE errors. Updated Z_THEO_READ_TABLE to version 2.3.|
|1.9.2 [M]|2019-09-16|ODP|Workaround for an SAP bug that caused the package size to increase (roughly double) with each package|
|1.9.1 [M]|2019-09-11|Table|Updated Z_THEO_READ_TABLE for releases 740SP05 and newer to version 2.2|
|1.9.0 [L]|2019-09-11|Hierarchy|Added hierarchy component (beta)|
|1.8.7 [M]|2019-09-11|ODP|Fixed a bug that caused range selections to reset to 'Equal' after saving the extraction|
|1.8.6 [L]|2019-09-11|Table|Reverted Z_THEO_READ_TABLE back to v1.11 for systems before 740SP05|
|1.8.5 [L]|2019-09-02|BW Cube|Fix for properties with same names on different dimensions.|
|1.8.4 [L]|2019-08-30|BW Cube|Fix for selecting properties in cube extractor.|
|1.8.3 [L]|2019-08-28|ERPConnect|Updated to 6.8.0.11|
|[1.8.2 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.8.2.html)|2019-08-26|Table|Added an icon indicating whether a table field is indexed. Number of rows can now be counted (only with Z_THEO_READ_TABLE) or estimated (using other function modules) in the editor GUI.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.8.2.html))|
|1.8.1 [L]|2019-08-22|Table|Updated Z_THEO_READ_TABLE to version 2.1|
|1.8.0 [M]|2019-08-20|Table|Updated Z_THEO_READ_TABLE to version 2.0|
|1.7.4 [L]|2019-08-15|ERPConnect|Updated to 6.7.3.6|
|1.7.3 [M]|2019-08-14|BW Cube|Various fixes for variables|
|1.7.2 [L]|2019-08-13|Table|Workaround for SAP 4.6C bug with WHERE clauses containing IN condition|
|1.7.1 [L]|2019-08-13|Table|Fixed a bug that caused the preview to fail when two columns with the same name were selected for output|
|1.7.0 [M]|2019-08-07|General|Added support for INT8|
|1.6.2 [L]|2019-08-02|BW Cube|Fixes for variable names (RSZGLOBV)|
|1.6.1 [L]|2019-08-02|BW Cube|Improvements for variable names (RSZGLOBV)|
|1.6.0 [M]|2019-08-02|ODP|Added support for recovering the previous delta run |
|1.5.10 [L]|2019-08-01|Table|Added UI to enable conversion routines|
|1.5.9 [M]|2019-07-30|ODP|Improved exception handling and logging in case of errors|
|[1.5.8 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.5.8.html)|2019-07-30|Table|Improvements for detecting possible joins and bug fixes related to editing joins([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.5.8.html))|
|1.5.7 [L]|2019-07-29|ERPConnect|Updated ERPConnect 6.6.2.0|
|[1.5.6 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.5.6.html)|2019-07-29|ODP|Fixed two bugs related to columns in the GUI of ODP extractions([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.5.6.html))|
|1.5.5 [M]|2019-07-25|ODP|Fixed a bug that would reset the TransferDataOnDeltaInit property to false|
|1.5.4 [L]|2019-07-17|ERPConnect|Updated to 6.6.1.5|
|1.5.3 [M]|2019-07-17|Table|Improved error handling for value access / conversion|
|1.5.2 [L]|2019-07-16|General|Table and ODP: Added column name styles|
|1.5.1 [L]|2019-07-11|General|Fixes and improvements for GUI filters|
|1.5.0 [L]|2019-07-11|BW Cube|Added filters to cube extractor.|
|1.4.4 [M]|2019-07-03|ODP|Fixed a bug that caused merged hierarchy extractions to fail with IndexOutOfRange|
|1.4.3 [L]|2019-07-03|Table|Fixed a bug that caused the extraction settings window to not show available function modules|
|1.4.2 [L]|2019-07-02|General|Increased preview row limit to 100|
|1.4.1 [L]|2019-06-21|ERPConnect|Updated to 6.5.9.20|
|1.4.0 [M]|2019-06-21|Table|Added support for SSTRING/STRING/RAWSTRING (Z_THEO_READ_TABLE 1.12).|
|1.3.7 [M]|2019-06-17|General|Improvements for error handling in UI|
|1.3.6 [L]|2019-05-17|ERPConnect|Updated to 6.5.9.16|
|1.3.5 [H]|2019-05-16|Table|Fixed a bug where Z_THEO_READ_TABLE would continue running after the table authorization check had failed.|
|1.3.4 [M]|2019-05-16|General|Improved logging|
|1.3.3 [L]|2019-05-14|Table|Added backward-compatibility support for Conversion Routines (Z_XTRACT_IS_TABLE_COMPRESSION)|
|1.3.2 [L]|2019-05-08|General|Using MSBuild 16|
|1.3.1 [L]|2019-05-08|ERPConnect|Updated to 6.5.9.3|
|1.3.0 [M]|2019-05-08|General|Updated to .NET Framework 4.7.1|
|1.2.3 [M]|2019-05-07|Table|Fix for automatic join detection on tables where unknown fields are defined in SAP|
|1.2.2 [L]|2019-05-06|ERPConnect|Updated to 6.5.8.0|
|1.2.1 [M]|2019-04-29|Table|Fixed a bug that caused the GUI to display an error when a table without relationships was added|
|1.2.0 [M]|2019-04-24|Table|Added metadata refresh|
|1.1.7 [M]|2019-04-23|ERPConnect|Updated to 6.5.7.20|
|1.1.6 [L]|2019-04-23|Table|Fix for extractions using Z_XTRACT_IS_TABLE_COMPRESSION|
|1.1.5 [M]|2019-04-23|Table|Fix for auto-selection of function module|
|1.1.4 [L]|2019-04-23|ERPConnect|Updated to 6.5.7.19|
|1.1.3 [M]|2019-04-23|Table|Fixes for numeric & binary values via RFC_READ_TABLE & Co.|
|1.1.2 [M]|2019-04-15|Table|Improved error messages related  to function module failures|
|1.1.1 [L]|2019-04-15|ERPConnect|Updated to 6.5.7.14|
|1.1.0 [L]|2019-04-15|Table|Added support for custom renaming of Z_THEO_READ_TABLE|
|1.0.1 [L]|2019-04-15|ERPConnect|Updated to 6.5.7.13|
|1.0.0 [M]|2019-04-10|General|General Availibility (end of beta)|
|0.2.13 [M]|2019-02-26|ERPConnect|Updated to 6.5.4.1|
|0.2.12 [M]|2019-02-22|Table|Improved extraction strategy selection.|
|0.2.11 [M]|2019-02-18|Table|Fixed a bug where structure for the callback could not be generated if a field had no ROLLNAME set|
|0.2.10 [M]|2019-02-13|Table|Reverted back to Z_THEO_READ_TABLE 1.9|
|0.2.9 [M]|2019-02-13|Table|Fixed a bug where structure for the callback could not be generated if a field had no ROLLNAME set|
|0.2.8 [M]|2019-02-08|Table|Fixed a bug where certain ABAP versions were wrongly recognized as pre 7.40 SP05 versions.
Fix for client-specific tables in JOINs.|
|0.2.7 [M]|2019-02-07|Table|Fixed string concatenation for older ABAP versions where && operator is not supported|
|0.2.6 [L]|2019-01-28|Table|Fixed a bug where certain fields could not be extracted due to having too long names.|
|0.2.5 [L]|2019-01-25|Table|Fixed a bug where WHERE clause wasn't being generated correctly in certain situations. Improved client handling.|
|0.2.4 [L]|2019-01-23|Table|Fixed a bug in Z_THEO_READ_TABLE where ABAP version check was not working on systems running ABAP version 75C. Fixed client handling in Z_THEO_READ_TABLE.|
|0.2.3 [M]|2019-01-22|Table|Updated transport requests for Z_THEO_READ_TABLE|
|0.2.2 [L]|2019-01-15|Table|Added Z_THEO_READ_TABLE variant for SAP releases before 7.40 SP05|
|0.2.1 [M]|2019-01-15|ERPConnect|Updated to 6.5.0.2|
|0.2.0 [M]|2019-01-15|Table|Added support for aggregate functions and HAVING clause. Fields can now be assigned an alias.|
|0.1.5 [L]|2019-01-08|Table|Fix for Big Endian + NWRFC|
|0.1.4 [M]|2018-12-21|BW Cube|Fixed an error that caused cubes not to be loaded after selection.|
|0.1.3 [L]|2018-12-07|Table|UI fixes and improvements in performance and stability.|
|0.1.2 [L]|2018-11-12|ERPConnect|Updated to 6.3.0.8|
|0.1.1 [L]|2018-11-12|General|Design & stability improvements.|
|0.1.0 [M]|2018-11-09|Table|Fixes & improvements for UI and serialization (breaking)|
|0.0.5 [L]|2018-11-09|ERPConnect|Updated to 6.3.0.7|
|0.0.4 [M]|2018-10-31|ERPConnect|Updated to 6.2.3.8|
|0.0.3 [M]|2018-10-31|BW Cube|Set default package size to 20k|
|0.0.2 [M]|2018-10-31|General|Various UI improvements|
|0.0.1 [H]|2018-10-01|General|Initial Release|
