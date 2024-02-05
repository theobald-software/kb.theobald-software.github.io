|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|1.52.19 [L]|2024-02-05|TableCDC|Added option to select function module that is used during the extraction runs|
|1.52.18 [L]|2024-02-05|DeltaQ|Fixed a bug, introduced in 1.47.0, that would not create the LeafFrom and LeaftTo columns for hierarchy extractors|
|1.52.17 [L]|2024-01-30|BAPI|Fixed a bug that caused the BAPI result row count to be 1 when it was actually 0|
|1.52.16 [L]|2024-01-29|TableCDC|Add deletion transport request for Z_THEO_DELETE_LOG_ENTRIES function module.|
|1.52.15 [L]|2024-01-23|TableCDC|RFC Service objects are now excluded from /THEO/CDC_ECC to avoid issues during import of the transport request.|
|1.52.14 [L]|2024-01-22|Table|Fixed a bug where subqueries in WHERE clause would cause an error.|
|1.52.13 [L]|2024-01-19|TableCDC|Fix for trigger syntax error in IBM DB for z/os (DB6). Requires update of /THEO/CDC_ECC|
|1.52.12 [L]|2024-01-18|TableCDC|Fixed a bug where trigger creation failed if ".INCLUDE" structures were part of the primary key of the source table. Requires update of /THEO/CDC_* package.|
|1.52.11 [L]|2024-01-16|Hierarchy|Removed debug logging statement that wrote the first 2 items of the extracted data into the log|
|[1.52.10 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.10.html)|2024-01-11|TableCDC|Fixed a bug where log table creation failed due to missing namespace license. Requires update of /THEO/CDC_* package. Check release notes for details([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.10.html))|
|1.52.9 [L]|2024-01-09|TableCDC|Log table key field number and maintenance level is now set explicitly. Fixed a bug where fallback logic would not work if system language is set to 'D'.|
|[1.52.8 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.8.html)|2024-01-08|DeltaQ|Fixed a bug in the activation process for DeltaQ hierarchy extractions([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.8.html))|
|[1.52.7 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.7.html)|2024-01-03|Table|Fixed a bug where table settings UI would cause an error when saving. Updated /THEO/READ_TABLE to version 3.2 (see notes).([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.7.html))|
|[1.52.6 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.6.html)|2023-12-29|DeltaQ|Fixed bugs in the DeltaQ extractor - Details in release notes([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.6.html))|
|1.52.5 [L]|2023-12-20|BAPI|Fixed a bug that caused obscure error messages in case of special library errors |
|1.52.4 [L]|2023-12-20|TableCDC|Improved error handling in log table creation step|
|1.52.3 [M]|2023-12-19|TableCDC|Added support for SAP Max DB databases|
|1.52.2 [L]|2023-12-13|TableCDC|Fixed a bug that caused Delta extractions to fail if source table was client-independent|
|1.52.1 [L]|2023-12-08|TableCDC|Create table statement will now be logged in CDC initialization step.|
|[1.52.0 [H]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.0.html)|2023-12-06|TableCDC|Released /THEO/CDC package. **Breaking changes** - Please see release notes for details.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.52.0.html))|
|1.51.0 [L]|2023-12-04|General|Added the result columns custom order implementation|
|1.50.9 [L]|2023-11-24|TableCDC|Fixed a bug where Z_THEO_READ_TABLE could not be used as fallback to /THEO/READ_TABLE|
|1.50.8 [L]|2023-11-23|Hierarchy|Added /THEO/READ_TABLE as most preferred internal table extraction function module|
|[1.50.7 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.50.7.html)|2023-11-23|Table|Updated /THEO/READ_TABLE to version 3.1([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.50.7.html))|
|1.50.6 [L]|2023-11-22|Hierarchy|Fixed a bug where no description texts were retrieved. Extractor now uses a fallback logic where the longest available and non-empty text is retrieved.|
|1.50.5 [L]|2023-11-20|Table|Fixed an issue where data would not be properly extracted when using STREAM_READ_TABLE function modules in combination with some SAP code pages.|
|1.50.4 [L]|2023-11-09|Table|Added a separate /THEO/READ_TABLE transport request for SAP versions 6.40 to 7.03.|
|1.50.3 [L]|2023-11-09|BW Cube|Improved handling of list runtime parameters in MDX filter selections|
|1.50.2 [L]|2023-11-06|BAPI|Fixed a bug that caused invalid results when function modules contained DECFLOAT16/34 parameters or fields|
|1.50.1 [L]|2023-11-03|General|Do not fallback to default, if SNC environment variable is not set|
|1.49.2 [L]|2023-11-02|DeltaQ|Slightly refactored the DeltaQ extractor|
|1.49.1 [L]|2023-10-31|TableCDC|Added support for SAP systems below version 7.40SP05. Requires /THEO/READ_TABLE to be installed.|
|1.49.0 [M]|2023-10-26|Table|Released /THEO/READ_TABLE function module.|
|1.48.7 [L]|2023-10-25|TableCDC|The maximum allowed value for the log table size limit has been raised to 500.000 entries.|
|1.48.6 [L]|2023-10-19|DeltaQ|Fixed DeltaQ check window's help link|
|1.48.5 [L]|2023-10-11|BAPI|Fix tables in tables|
|1.48.4 [L]|2023-10-05|ODP|Fixed a bug that caused the preview button to be disabled after initial lookup regardless of whether previewing was supported by the provider|
|1.48.3 [L]|2023-09-28|General|Enable f1 help hotkey for extraction windows. These link to the online help entry.|
|1.48.2 [L]|2023-09-27|Table|Fixed a bug where changing function module in settings would in some cases cause an error.|
|1.48.1 [L]|2023-09-26|ODP|Fixed an issue that caused NotSupportExceptions for Hierarchy extractions|
|1.48.0 [M]|2023-09-01|Query|Added support for list parameters|
|1.47.1 [L]|2023-08-29|TableCDC|Added option to configure package size for initial load.|
|1.47.0 [L]|2023-08-22|DeltaQ|Ported the DeltaQ component from XtractKernel with new UI|
|1.46.6 [L]|2023-08-21|TableCDC|The maximum allowed value for the log table size limit has been raised to 200.000 entries.|
|1.46.5 [M]|2023-08-15|TableCDC|Fixed a bug that caused log table creation to fail when ".INCLUDE" structures were part of primary keys in source table.|
|1.46.4 [L]|2023-08-09|General|Fixed column encryption buffer writing validation|
|1.46.3 [L]|2023-08-03|General|Added clear option for grouped filter boxes.|
|1.46.2 [L]|2023-08-02|Hierarchy|Improved behaviour around DateTo property of Hierarchy extractor. Empty values are now considered invalid instead of falling back to SAP max date.|
|1.46.1 [L]|2023-08-02|BAPI|Function for BapiExtractor which communicates when data was received from the SAP system.|
|1.46.0 [L]|2023-08-02|ODP|Usage of all available contexts is now allowed. This enables SLT support.|
|1.45.2 [L]|2023-07-28|Query|Added support for runtime parameters|
|1.45.1 [M]|2023-07-27|ODP|TS_SEQUENCE_NUMBER is now a 64 bit integer and supports extractions with more than 2 billion rows. Additionally, it can also be selected for generation in full extractions. |
|1.45.0 [M]|2023-07-24|TableCDC|Added support for where conditions|
|1.44.10 [L]|2023-07-20|BW Cube|Fixed a bug that caused unexpected measure precision in MDX query extractions.|
|1.44.9 [L]|2023-07-17|Hierarchy|Improved error handling in refresh metadata; added validation to DateTo property; made DateTo property setter public so that it is available for runtime parameters|
|1.44.8 [L]|2023-07-14|Hierarchy|Enabled 'dateTo' property of Hierarchy catalog entry to be set by runtime parameter. Improved value validation and error handling.|
|1.44.7 [L]|2023-07-13|BW Cube|BICS: Fixed direct extraction of SNUMC InfoObjects|
|1.44.6 [L]|2023-07-12|BW Cube|BICS: Fixes for SNUMC characteristics|
|1.44.5 [L]|2023-07-10|Hierarchy|Fixed a bug where description texts were not extracted when the InfoObject name was shorter than expected.|
|1.44.4 [L]|2023-07-07|BW Cube|BICS: Improved safeguards against truncated decimal key figure values|
|1.44.3 [L]|2023-07-06|BW Cube|BICS: Added safeguards against truncated decimal key figure values|
|1.44.2 [L]|2023-07-06|BW Cube|BICS: Added support for time, date and null key figure values|
|1.44.1 [L]|2023-06-30|General|Added groupable filterboxes to filter a datagrid by multiple columns|
|1.44.0 [L]|2023-06-28|Table|Added support for list parameters |
|1.43.9 [L]|2023-06-18|BW Cube|BICS: Fixed integer, decimal and partial float key figure values|
|1.43.8 [L]|2023-06-15|BW Cube|MDX: Fixed legacy name conflict resolution|
|1.43.7 [L]|2023-06-04|BW Cube|BICS: Fixed data type of integer characteristics|
|1.43.6 [L]|2023-06-01|BW Cube|BICS: Fixed data type of timestamp characteristics|
|1.43.5 [L]|2023-05-26|BW Cube|MDX: fixed a bug that caused errors when deselecting all measures|
|[1.43.4 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.43.4.html)|2023-05-22|Table|Multiple UI fixes and usability improvements.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.43.4.html))|
|1.43.3 [L]|2023-05-17|BW Cube|BICS: Added safeguards against truncated CHAR / NUMC characteristic values|
|1.43.2 [L]|2023-05-16|BW Cube|BICS: Filter is applied for characteristics that are not selected for output|
|1.43.1 [L]|2023-05-16|BW Cube|BICS: Fix for result copying|
|1.43.0 [L]|2023-05-14|BW Cube|BICS: new implementation|
|1.42.9 [L]|2023-05-11|TableCDC|Added option to run initial load as background job|
|1.42.8 [M]|2023-05-11|ODP|Workaround for SAP returning dates in inconsistent formats |
|1.42.7 [L]|2023-05-09|BW Cube|Fix for "Dimension on columns" setting not working correctly for MDX Query extractions with "Only Structures" set to false.|
|1.42.6 [M]|2023-05-09|TableCDC|Fixed a bug that could cause multiple records with the same key to be included in a CDC extraction result|
|1.42.5 [L]|2023-05-03|BAPI|Fixed a bug that caused an IndexOutOfRangeException when incoming tables were disconnected previously|
|1.42.4 [M]|2023-05-01|BW Cube|BICS: Fixes for filter preview|
|1.42.3 [L]|2023-05-01|BW Cube|BICS: Improve session initialization|
|1.42.2 [L]|2023-04-28|BW Cube|MDX: Fixed result columns of converted extractions (was broken since 1.34)|
|1.42.1 [M]|2023-04-28|BW Cube|MDX: Fixed Hierarchy member filter|
|1.42.0 [L]|2023-04-28|Query|Added new query extractor|
|1.41.5 [L]|2023-04-21|Report|Improved report API for yunIO|
|1.41.4 [L]|2023-04-20|General|Fix metadata of decimal float as packed number|
|1.41.3 [L]|2023-04-13|Report|Separate Column Detection step for yunIO Report|
|1.41.2 [L]|2023-04-11|BW Cube|BICS: Removed redundant characteristics id serialization|
|1.41.1 [L]|2023-04-06|BW Cube|Dimensions are sorted alphabetically descending by description text in GUI|
|1.41.0 [L]|2023-04-06|General|Added surrogate key result table|
|1.40.5 [L]|2023-04-05|BW Cube|Fix in BICS mode for possible NullReferenceException during preview and extraction run|
|1.40.4 [L]|2023-04-04|BW Cube|In BICS mode it is now possible to deselect dimensions that are defined on rows in a query extraction.|
|1.40.3 [L]|2023-03-31|Report|Report improvement for coming feature in yunIO|
|1.40.2 [L]|2023-03-29|TableCDC|Fixed a bug where filtering for columns based on name or description was not possible|
|1.40.1 [L]|2023-03-27|BW Cube|BICS mode: Fixed dimension filter members not loading and filters with runtime parameter values not being applied.|
|1.40.0 [M]|2023-03-24|BW Cube|BICS: Row limit for preview|
|1.39.14 [L]|2023-03-24|TableCDC|Reduced max value for log table size limit to 100.000 rows.|
|1.39.13 [M]|2023-03-24|BAPI|Fixed a bug that caused errors with obsolete LIKE typed parameters|
|1.39.12 [L]|2023-03-21|TableCDC|The size limit feature for the log table is now obligatory. Value can range from 1 to 10.000.000 rows.|
|1.39.11 [L]|2023-03-20|BW Cube|Improved metadata load and refresh in the BICS component.|
|1.39.10 [L]|2023-03-15|General|Replaced the local byte buffer handling for column encryption with the ByteBufferManager from Theobald.Common (introduced on 2.22.0) |
|1.39.9 [L]|2023-03-10|TableCDC|Table CDC: Log table size can now be limited. Internal improvements.|
|1.39.8 [L]|2023-03-08|BW Cube|Fix for column order changes in MDX mode when adding filter selections or selecting and deselecting a dimension.|
|1.39.7 [L]|2023-03-07|BW Cube|Added Direct load button in cube look up window.|
|1.39.6 [L]|2023-03-06|BW Cube|Measure names in BICS mode now display the technical name instead of the enterprise ID if available.|
|1.39.5 [L]|2023-02-24|BW Cube|Fixed an issue that may cause errors when setting exclude filters or runtime parameters in filters when using MDX mode.|
|1.39.4 [L]|2023-02-21|BAPI|BapiCatalogEntry with functionGroup|
|1.39.3 [L]|2023-02-15|Report|Improved error message for when report lookup by TCODE fails.|
|1.39.2 [L]|2023-02-13|BW Cube|Fixed a bug in MDX metadata refresh that caused invalid selections when a selected measure or dimension does not exist after refresh anymore.|
|1.39.1 [L]|2023-02-06|Report|Report component UI improvements.|
|[1.39.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.39.0.html)|2023-01-27|BW Cube|Various improvements and new features in BICS cube extractor([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.39.0.html))|
|1.38.2 [L]|2023-01-26|Report|Report helper and Report tests|
|1.38.1 [M]|2023-01-23|BAPI|Only send scalar parameters if value has been provided|
|1.38.0 [L]|2023-01-16|General|Adjustments for new conversion architecture (internal changes)|
|1.37.1 [L]|2023-01-15|Security|Updated Bouncy Castle to version 2.0|
|1.37.0 [H]|2023-01-15|TableCDC|Added Table CDC extractor|
|[1.36.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.36.0.html)|2023-01-11|Report|Updated Z_XTRACT_IS_REMOTE_REPORT to version 1.2. (Breaking change)([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.36.0.html))|
|1.35.3 [L]|2023-01-11|BW Cube|Fix for possible error when saving dimension filters in MDX mode|
|1.35.2 [L]|2023-01-09|General|Added range checks for SapDateConverter|
|1.35.1 [L]|2023-01-09|BW Cube|Fix for error on InfoCube load in MDX mode|
|[1.35.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.35.0.html)|2023-01-04|Hierarchy|New Hierarchy Extractor([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.35.0.html))|
|1.34.1 [L]|2022-12-21|BW Cube|Fix for incorrect unit column values in MDX mode.|
|1.34.0 [L]|2022-12-20|BW Cube|Added the option to select a custom structure on the columns axis for MDX extractions.|
|1.33.5 [L]|2022-12-13|Table|Fix for Table preview's grid row header style|
|1.33.4 [L]|2022-11-15|BW Cube|Fix for possible conversion errors when formatted values option in MDX mode is enabled|
|1.33.3 [L]|2022-11-15|BW Cube|Cube legacy mode: fix for duplicate dimension column names|
|1.33.2 [L]|2022-11-08|General|Fixes for timestamps|
|1.33.1 [L]|2022-11-07|General|Fixes for TIMESTAMPL (bug introduced in 1.33.0)|
|1.33.0 [L]|2022-11-07|General|Added metadata retrieval for more date/time types|
|1.32.2 [L]|2022-11-04|General|Added more date/time result types|
|1.32.1 [L]|2022-11-03|Table|Values of RfcReadTableResult instances can now be accessed by column name.|
|1.32.0 [L]|2022-10-28|General|Added column mapping feature|
|[1.31.6 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.6.html)|2022-10-24|Table|Updated Z_THEO_READ_TABLE to version 2.15.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.6.html))|
|1.31.5 [L]|2022-10-21|BW Cube|Fixed a bug that caused measures in MDX mode being handled as strings instead of numbers when the formatted values option is enabled.|
|1.31.4 [L]|2022-10-19|General|The extractors now use the new ILog interface. The BAPIExtractor now can take a callback being called when the data has arrived from the SAP system.|
|[1.31.3 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.3.html)|2022-10-14|Table|Updated Z_THEO_READ_TABLE to version 2.14([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.3.html))|
|[1.31.2 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.2.html)|2022-10-14|Report|Non executable ABAP programs can't be selected in report lookup anymore.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.31.2.html))|
|1.31.1 [M]|2022-10-06|BAPI|Fixed a bug that caused errors during metadata retrieval if the function module contains include structures that don't exist|
|1.31.0 [L]|2022-09-26|Table|added support for function modules /BODS/RFC_STREAM_READ_TABLE and /SAPDS/RFC_STREAM_READ_TABLE|
|[1.30.12 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.30.12.html)|2022-09-14|Table|Updated Z_THEO_READ_TABLE to version 2.13.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.30.12.html))|
|1.30.11 [M]|2022-09-13|OHS|Fixed assembly version of Theobald.Extractors.Ohs.dll|
|1.30.10 [M]|2022-08-29|ODP|Fixed an issue where trailing zeros of RAW fields where truncated|
|1.30.9 [L]|2022-08-09|Report|Fixed a bug where TCODE lookup would not work with some newer SAP systems.|
|1.30.8 [L]|2022-08-09|Table|Fixed a bug in WHERE clause editor, where single quotes in value blocks would not be escaped when running the extraction, causing syntax errors.|
|1.30.7 [L]|2022-08-08|Table|Fixed a bug in WHERE clause editor where using numeric values in value blocks would in some cases not result a correct WHERE clause.|
|1.30.6 [H]|2022-08-04|BAPI|Fix for structure includes|
|1.30.5 [L]|2022-07-27|BW Cube|Fix for failing mdx extractions with packaging enabled and only dimensions selected.|
|[1.30.4 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.30.4.html)|2022-07-22|Table|Updated Z_THEO_READ_TABLE to version 2.12([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.30.4.html))|
|1.30.3 [L]|2022-07-18|BW Cube|Refactored all MDX RFC Functions to static creation; added support for non-unicode SAP systems.|
|1.30.2 [L]|2022-07-18|BW Cube|Cube BICS mode now supports list parameters in filters and variables.|
|1.30.1 [H]|2022-07-07|BW Cube|Fix for asynchronous processing problems|
|1.30.0 [M]|2022-06-24|General|Added IResultTables for value conversion|
|1.29.14 [L]|2022-06-13|BW Cube|Internal adjustments to BEx variable dialog button behavior in BICS mode.|
|1.29.13 [L]|2022-06-09|General|Added unit and integration tests for Table Extractor|
|1.29.12 [M]|2022-06-07|ODP|Fixed a bug that caused extractions to fail with "Expected new buffer marker" error|
|1.29.11 [L]|2022-06-02|BW Cube|MDX mode: invalid measure values 'X' are now written to the output as NULL.|
|1.29.10 [L]|2022-06-01|BW Cube|Fix for disabled measures/dimensions tree in MDX mode when a query does not have any measures.|
|[1.29.9 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.29.9.html)|2022-05-30|BW Cube|Support for Only_Structures behavior in MDX BEx Queries. Various bug fixes and general improvements for the Cube component.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.29.9.html))|
|1.29.8 [L]|2022-05-23|General|Extractors that implement the complex parameter interface must also implement scalar parameter interface|
|1.29.7 [L]|2022-05-12|BW Cube|Fix for date columns being 0 and in wrong format in date columns of BICS extractions.|
|1.29.6 [L]|2022-05-09|BW Cube|Fix for unavailable runtime parameters in dimension range filters.|
|1.29.5 [L]|2022-05-03|Table|Fix for STRING/XSTRING columns with NWRFC|
|1.29.4 [L]|2022-04-29|BW Cube|Fixed a bug that caused using the wrong function module for loading axis data in MDX extractions.|
|1.29.3 [L]|2022-04-29|BW Cube|Cube legacy mode: fix for duplicate property column names|
|1.29.2 [L]|2022-04-29|BW Cube|Fixed a bug that caused extractions with empty result sets to fail.|
|1.29.1 [L]|2022-04-25|Table|Fixed a bug where switching from WHERE clause editor mode to text mode would cause an error.|
|1.29.0 [L]|2022-04-25|Table|Added graphical WHERE clause editor. Fixed a bug where Count Rows function didn't take scripted expressions into account.|
|1.28.1 [L]|2022-04-21|BW Cube|Fixed a bug where BW Cube Extractions would return broken data when used with Classic RFC library|
|1.28.0 [L]|2022-04-11|ODP|Selections can now be parameterized with lists of strings|
|1.27.1 [L]|2022-04-07|BW Cube|Now allowing extractions without measure selections in MDX mode. Added support for additional options in interval/complex BEx variable selections.|
|1.27.0 [M]|2022-04-04|BW Cube|Updates to the BWCube component for increased stability, performance and compatibility.|
|1.26.1 [L]|2022-02-09|Report|Fixed a bug where the report lookup would throw an error when the new version of RFC_READ_TABLE was used.|
|1.26.0 [L]|2022-02-08|Table|Updated Z_THEO_READ_TABLE to version 2.11. Background job timeout can now be set manually in extraction settings.|
|[1.25.1 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.25.1.html)|2022-02-03|Table|Fixed a bug where metadata of views was not retrieved correctly.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.25.1.html))|
|1.25.0 [M]|2022-01-27|ODP|Metadata can now be refreshed without performing a new lookup|
|1.24.1 [L]|2021-12-08|General|Fix for BCD length conversion|
|1.24.0 [M]|2021-12-03|BAPI|Added description texts for data elements|
|1.23.2 [L]|2021-11-30|OHS|Fix for "undefined" status of process chain|
|1.23.1 [M]|2021-11-29|General|Table & ODP: Now set currency decimals to 4 when using "adjust currency decimals"|
|1.23.0 [L]|2021-11-12|BAPI|Reworked parameterization|
|1.22.1 [L]|2021-11-12|Report|Fixed a bug where report rows without pipes in them were being skipped even if the extraction was ran without dynamic column widths and offsets setting turned on. This change is breaking.|
|[1.22.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.22.0.html)|2021-11-03|General|Table and ODP: Added setting to automatically adjust currency decimals based on reference field([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.22.0.html))|
|1.21.1 [L]|2021-10-05|Report|Fixed a bug where fetching report selection parameters would not use the custom function module defined in extraction settings and would override that setting with the default value of Z_XTRACT_IS_REMOTE_REPORT.|
|[1.21.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.21.0.html)|2021-09-24|BW Cube|Updated cube component with new BICS mode (beta).([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.21.0.html))|
|1.20.27 [L]|2021-09-13|Report|Fixed a bug where automatic column detection didn't work for reports where rows don't begin with a pipe.|
|[1.20.26 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.20.26.html)|2021-09-08|Report|Fixed function module recognition based on signature.([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.20.26.html))|
|1.20.25 [L]|2021-09-06|Report|Output columns now have length of 255 characters when dynamic column widths and offsets is turned on. |
|1.20.24 [M]|2021-08-05|OHS|Third-party mode: Fix for empty packets|
|1.20.23 [L]|2021-07-30|OHS|Improved error handling for unsupported destination types|
|1.20.22 [L]|2021-07-27|ODP|Reverted default package size, this fixes an issue where the package size doubles leading to an error|
|1.20.21 [L]|2021-07-13|Table|Fixed a bug where fetching the metadata of certain views would run into an error.|
|1.20.20 [L]|2021-07-08|Report|Fixed report transport request.|
|1.20.19 [L]|2021-06-11|Report|Fixed a bug where the report ruler would stop scrolling horizontally with wider reports.|
|1.20.18 [L]|2021-05-26|Report|Fixed an issue with extracting reports that contain multiple tables.|
|1.20.17 [L]|2021-05-11|Table|Fix for *RFC_READ_TABLE2 variants with custom names|
|1.20.16 [M]|2021-05-06|OHS|Fix for variable length buffer (third party mode)|
|1.20.15 [L]|2021-05-05|Report|Fixed a bug where ABAP exceptions that occur when running preview would crash the UI.|
|1.20.14 [L]|2021-04-26|Table|Fixed ORDER BY special option for Z_XTRACT_IS_TABLE|
|1.20.13 [L]|2021-04-23|Table|Fixed a bug where metadata refresh would not work when more than one table was selected for extraction.|
|1.20.12 [L]|2021-04-22|Security|Update of BouncyCastle library to 1.8.10|
|1.20.11 [M]|2021-04-20|Table|Fixed a bug where fetching metadata for extended view did not work.|
|1.20.10 [L]|2021-04-16|Report|Improved error handling for automatic column detection. Fixed a bug where running if the report returned no rows during automatic column detection, the UI would crash.|
|1.20.9 [L]|2021-04-12|General|Fixed a bug on method SapTimeConverter.ConvertToTimeSpan(string), which would not allow values greater than "235959" to be converted to TimeSpan. Unit tests were introduced.|
|1.20.8 [L]|2021-04-12|ODP|Added setting to adjust package size |
|1.20.7 [L]|2021-04-09|Table|Fixed a bug where metadata refresh did not work.|
|1.20.6 [M]|2021-03-25|OHS|Fix for third party mode when columns are spread across table buffer rows|
|1.20.5 [L]|2021-03-22|Report|Report variant combobox is not editable anymore. Instead, the selected variant can be cleared with a button.|
|1.20.4 [L]|2021-03-15|OHS|Added book icon|
|1.20.3 [L]|2021-03-15|OHS|Set minimum width/height for tab control in settings window|
|1.20.2 [L]|2021-03-15|General|New conversion behaviour for SAP time|
|1.20.1 [L]|2021-03-15|Report|Fixed a bug where editing an existing report extraction would reset the "report rows per data row" setting back to 1.|
|1.20.0 [L]|2021-03-15|General|Added SAP time converter|
|1.19.7 [L]|2021-03-15|Report|Fixed a bug where performing automatic column detection after running a preview would enable dynamic column widths and offsets.|
|1.19.6 [L]|2021-03-05|Table|Fixed a bug where in certain cases not all fields of views would be shown in the extraction definition UI.|
|1.19.5 [L]|2021-03-04|General|Added possibility to signal success/failure of result processing after run|
|[1.19.4 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.19.4.html)|2021-03-04|Report|Multiple bug fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.19.4.html))|
|1.19.3 [L]|2021-03-02|Report|Added support for runtime parameters.|
|1.19.2 [M]|2021-03-02|General|Fixed two issues with runtime parameters where assigning selection parameters would not be saved and the default type was set to an invalid value|
|1.19.1 [L]|2021-02-23|Table|Fix for using Z_THEO_READ_TABLE (bug introduced in 1.18)|
|1.19.0 [M]|2021-02-23|OHS|Added OHS|
|1.18.0 [M]|2021-02-23|Report|Added report component|
|[1.17.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.17.0.html)|2021-02-10|BAPI|Several improvements and new features([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.17.0.html))|
|1.16.3 [M]|2021-02-05|Table|Fixed a bug where fetching the field metadata for views would not work if multiple fields of the view referenced the same table fields.|
|1.16.2 [L]|2021-02-05|Table|Fixed a bug where field descriptions of views would not be fetched on newer SAP BW systems.|
|1.16.1 [L]|2021-02-01|ODP|Fixed an issue where extractions would fail for big-endian SAP systems when NetWeaver libraries were used|
|1.16.0 [L]|2021-01-22|General|Column level encryption support|
|1.15.10 [L]|2021-01-18|Hierarchy|Fixed version numbers of Theobald.Extractors.Hierarchy.dll and Theobald.Extractors.Hierarchy.Gui.dll|
|1.15.9 [M]|2020-12-17|ODP|Fixed an issue where init simulations (delta initializations without extracting data) could cause subsequent delta requests to not load any data|
|1.15.8 [M]|2020-11-06|Table|Fix for empty packages when using NWRFC + Z_THEO_READ_TABLE|
|1.15.7 [L]|2020-10-29|General|Table and ODP: Reference fields (and tables) for currencies and quantities are now saved|
|[1.15.6 [M]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.15.6.html)|2020-10-09|Table|Various fixes & improvements for Table GUI([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.15.6.html))|
|1.15.5 [M]|2020-10-06|ODP|Improved logging on delta updates|
|1.15.4 [L]|2020-09-28|Table|Workaround for length problems when extracting integers with conversion routines and Z_XTRACT_IS_TABLE_COMPRESSION|
|1.15.3 [L]|2020-09-24|Table|Workaround for length problems when extracting floating point with conversion routines and Z_XTRACT_IS_TABLE_COMPRESSION|
|1.15.2 [L]|2020-09-23|Table|Workaround for length problems when extracting packed numbers with conversion routines and Z_XTRACT_IS_TABLE_COMPRESSION|
|[1.15.1 [L]](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.15.1.html)|2020-09-07|ODP|Added subscription suffix ([Release note](https://kb.theobald-software.com/release-notes/TheobaldExtractors-1.15.1.html))|
|1.15.0 [M]|2020-07-15|General|Support for new data types DATN, D34N, D16N, TIMN, UTCLONG. Corrected typing for decimal floating point values (now string) for ODP.|
|1.14.12 [L]|2020-06-12|General|Function module for internal table reads (metadata) can be specified now|
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
|0.2.8 [M]|2019-02-08|Table|Fixed a bug where certain ABAP versions were wrongly recognized as pre 7.40 SP05 versions. Fix for client-specific tables in JOINs.|
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
