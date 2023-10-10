|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|5.7.0 [L]|2023-10-09|Query|Removed Query|
|5.6.0 [L]|2023-08-03|Hierarchy|Removed Hierarchy|
|5.5.1 [L]|2023-03-15|DeltaQ|Replaced the local byte serialization/deserialization on IpcChannel with the ByteSerialization from Theobald.Common (introduced on 2.22.0)|
|5.5.0 [M]|2022-09-08|OHS|Removed OHS|
|5.4.0 [M]|2022-09-08|Report|Removed Report|
|5.3.0 [M]|2022-03-31|Table Join|Removed TableJoin|
|5.2.0 [M]|2022-02-17|BAPI|Removed BAPI extractor|
|5.1.9 [L]|2021-12-01|General|Removed translations|
|5.1.8 [L]|2021-09-14|DeltaQ|Server pool: Improvements for error handling|
|5.1.7 [M]|2021-09-10|DeltaQ|Log RFC server registration errors to extraction log|
|5.1.6 [M]|2021-09-10|DeltaQ|Aborting extraction if errors occur while sending request IDoc|
|5.1.5 [L]|2021-05-04|Hierarchy|Fixed an issue where hierarchies in natural representation had no object name specified|
|5.1.4 [L]|2020-11-23|OHS|Re-enabled NWRFC for OHS|
|5.1.3 [M]|2020-11-09|DeltaQ|Incoming Info IDocs reset timeout now|
|5.1.2 [L]|2020-03-23|DeltaQ|Fix for "timeout while trying to lock server list"|
|5.1.1 [L]|2020-03-17|BW Cube|Fix for auto slicing MDX syntax on older SAP BW systems.|
|5.1.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|5.0.7 [L]|2019-12-19|Table Join|Fix for some ABAP types|
|5.0.6 [L]|2019-09-24|Theobald.Extractors|Updated to 1.10.6|
|5.0.5 [L]|2019-09-24|Theobald.Extractors|Updated to 1.10.5|
|5.0.4 [L]|2019-09-20|Theobald.Extractors|Theobald.Extractors 1.9.5.0|
|5.0.3 [L]|2019-09-11|Theobald.Extractors|Updated to 1.9.1|
|5.0.2 [L]|2019-08-20|Theobald.Extractors|Updated to 1.8.0|
|5.0.1 [L]|2019-08-20|Theobald.Extractors|Updated to 1.7.4.3|
|5.0.0 [L]|2019-08-13|Table|Removed Table component (it's part of Theobald.Extractors now)|
|4.3.1 [L]|2019-08-13|Theobald.Extractors|Updated to 1.7.2.1|
|4.3.0 [M]|2019-08-07|DeltaQ|Added support for INT8|
|4.2.8 [M]|2019-08-02|Theobald.Extractors|Updated to 1.6.0.0|
|4.2.7 [L]|2019-08-01|Theobald.Extractors|Updated to 1.5.10.0|
|4.2.6 [M]|2019-07-30|Theobald.Extractors|Updated to 1.5.8.1|
|4.2.5 [L]|2019-07-29|Theobald.Extractors|Updated to 1.5.7.0|
|4.2.4 [M]|2019-07-29|Theobald.Extractors|Updated to 1.5.6.0|
|4.2.3 [M]|2019-07-25|Theobald.Extractors|Updated to 1.5.5.0|
|4.2.2 [M]|2019-07-17|Theobald.Extractors|Updated to 1.5.4.1|
|4.2.1 [L]|2019-06-28|OHS|Introduced flag to asynchronously start process chains|
|4.2.0 [M]|2019-06-21|Table|Added support for SSTRING/STRING/RAWSTRING (Z_THEO_READ_TABLE 1.12).|
|4.1.6 [M]|2019-06-21|Theobald.Extractors|Updated to 1.4.1.1|
|4.1.5 [L]|2019-05-29|Theobald.Extractors|Updated to 1.3.6.16|
|4.1.4 [L]|2019-05-14|Table|Fixes for Conversion Routines|
|4.1.3 [L]|2019-05-14|Theobald.Extractors|Updated to 1.3.3.1|
|4.1.2 [L]|2019-05-08|General|Using MSBuild 16|
|4.1.1 [L]|2019-05-08|Theobald.Extractors|Updated to 1.3.2.0|
|4.1.0 [M]|2019-05-08|General|Updated to .NET Framework 4.7.1|
|4.0.3 [L]|2019-05-06|Theobald.Extractors|Updated to 1.2.2.0|
|4.0.2 [M]|2019-05-06|BW Cube|Fix for Auto Slicing feature (MDX_ALLOW_DUPLICATE_USE / SAP note 2398275)|
|4.0.1 [M]|2019-04-29|Theobald.Extractors|Updated to 1.2.1.0|
|4.0.0 [M]|2019-04-26|General|Updated to .NET Framework 4.6.1, included Theobald.Extractors|
|3.3.15 [L]|2019-04-15|ERPConnect|Updated to 6.5.7.13|
|3.3.14 [L]|2019-03-25|ERPConnect|Updated to 6.5.7.2|
|3.3.13 [L]|2019-03-22|General|Removed "copy" button from Info message box|
|3.3.12 [M]|2019-03-21|DeltaQ|Fixes & improvements for large packages|
|3.3.11 [M]|2019-02-26|ERPConnect|Updated to 6.5.5.0|
|3.3.10 [L]|2019-02-25|ERPConnect|Updated to 6.5.4.1|
|3.3.9 [L]|2019-02-25|DeltaQ|Fixed a bug where the number of max connections was determined incorrectly on little endian systems|
|3.3.8 [M]|2019-02-22|Table|Improved function module detection for Z_THEO_READ_TABLE|
|3.3.7 [L]|2019-02-20|General|Fixed a bug that caused hex strings with uneven length to be parsed incorrectly|
|3.3.6 [M]|2019-02-04|DeltaQ|Added various warnings during initial parameter check|
|3.3.5 [L]|2019-02-04|DeltaQ|Logging Gateway Host, Gateway Service and Program ID before connecting to server pool|
|3.3.4 [L]|2019-02-04|DeltaQ|Removed IDocs status check (obsolete)|
|3.3.3 [M]|2019-01-23|DeltaQ|Request maintenance GUI: requests are only deleted when answering 'Yes'|
|3.3.2 [L]|2019-01-22|Table|Adjustments for new ABAP structure in Z_THEO_READ_TABLE |
|3.3.1 [M]|2019-01-18|Table|Fix for data types when using Z_THEO_READ_TABLE|
|3.3.0 [M]|2019-01-15|Table|Added support for Z_THEO_READ_TABLE|
|3.2.25 [L]|2019-01-15|ERPConnect|Updated to 6.5.0.2|
|3.2.24 [M]|2019-01-08|ERPConnect|Updated to 6.4.10.0|
|3.2.23 [M]|2018-12-14|DeltaQ|Fix for Delta Init with selection filter|
|3.2.22 [L]|2018-12-10|OHS|Stopping RFC server earlier (was running longer than required)|
|3.2.21 [L]|2018-11-26|ERPConnect|Updated to 6.4.2.0|
|3.2.20 [L]|2018-11-19|ERPConnect|Updated to 6.4.1.1|
|3.2.19 [L]|2018-11-05|DeltaQ|Changed "Received tRFC call / data IDoc" and consistency check messages to "debug" log level|
|3.2.18 [L]|2018-11-05|ERPConnect|Updated to 6.3.0.2|
|3.2.17 [L]|2018-11-02|Table|Added detection of Z_XTRACT_IS_TABLE_ZHAW during lookup|
|3.2.16 [M]|2018-10-29|ERPConnect|Updated to 6.2.3.1|
|3.2.15 [M]|2018-10-16|ERPConnect|Updated to 6.2.2.0|
|3.2.14 [L]|2018-10-09|ERPConnect|Updated to 6.2.1.0|
|3.2.13 [L]|2018-10-04|Table|Removed data compression flag and added auto detection for compression function modules|
|3.2.12 [L]|2018-10-02|ERPConnect|Updated to 6.2.0.5|
|3.2.11 [L]|2018-09-25|General|Fix for showing error dialogs during lookup (e. g. missing authorization for DD02V).|
|3.2.10 [L]|2018-09-24|ERPConnect|Updated to 6.1.5.2|
|3.2.9 [L]|2018-09-19|ERPConnect|Updated to 6.1.5.1|
|3.2.8 [L]|2018-09-19|ERPConnect|Updated to 6.1.4.6|
|3.2.7 [M]|2018-09-11|Table|Fix for very wide tables (e. g.  STXL with all fields selected)|
|3.2.6 [L]|2018-08-31|ERPConnect|Updated to 6.1.4.0|
|3.2.5 [L]|2018-08-27|ERPConnect|Updated to 6.1.3.2|
|3.2.4 [L]|2018-08-15|ERPConnect|Updated to 6.1.2.0|
|3.2.3 [M]|2018-08-07|BW Cube|Variable editor is resizable now|
|3.2.2 [L]|2018-08-06|ERPConnect|Updated to 6.1.1.2|
|3.2.1 [M]|2018-07-30|DeltaQ|Fix for DeltaQ customizing check (RFC server)|
|3.2.0 [M]|2018-07-24|General|Updated ERPConnect to 6.1.0.0, removed old Table features|
|3.1.32 [L]|2018-06-29|ERPConnect|Updated to 6.0.2.3|
|3.1.31 [L]|2018-06-21|Table|Compression: Fix for column positions with multibyte encodings on non-Unicode systems (e. g.  Korean)|
|3.1.30 [L]|2018-06-20|Table|Compression: Fix for newlines with multibyte encodings on non-Unicode systems (e. g.  Korean)|
|3.1.29 [M]|2018-05-30|DeltaQ|Fix for DeltaQ customizing check (RFC server connection)|
|3.1.28 [M]|2018-05-29|DeltaQ|Fix for hierarchies (bug introduced in 3.1.24)|
|3.1.27 [L]|2018-05-21|ERPConnect|Updated to 6.0.0.1|
|3.1.26 [L]|2018-05-11|General|Fix for SSTRING length|
|3.1.25 [L]|2018-05-01|DeltaQ|Hierarchy lookup - fix for empty language|
|3.1.24 [M]|2018-05-01|DeltaQ|Performance improvements|
|3.1.23 [L]|2018-04-23|ERPConnect|Updated to 5.7.6.0|
|3.1.22 [L]|2018-04-18|General|Improved error and info dialogs|
|3.1.21 [L]|2018-04-17|ERPConnect|Updated to 5.7.4.0|
|3.1.20 [M]|2018-04-10|DeltaQ|Fix for langauge key during lookup|
|3.1.19 [M]|2018-04-06|BW Cube|Fix for uppercase column names|
|3.1.18 [L]|2018-04-03|ERPConnect|Updated to 5.7.3.0|
|3.1.17 [L]|2018-03-05|Table|Enabled custom order by for compression feature|
|3.1.16 [L]|2018-02-26|General|Fix for checking program Id|
|3.1.15 [M]|2018-02-21|DeltaQ|Fix for selections on columns that are not part of the result|
|3.1.14 [L]|2018-02-09|DeltaQ|Hierarchy backward-compatibility: Fix for legacy date selection|
|3.1.13 [L]|2018-02-09|DeltaQ|Hierarchy metadata retrieval: Fix for date selection|
|3.1.12 [L]|2018-02-09|DeltaQ|Hierarchy lookup now also selects version|
|3.1.11 [L]|2018-02-07|DeltaQ|Fix for reading max. connections from QSENDDEST on old systems|
|3.1.10 [M]|2018-01-31|DeltaQ|Fix for casing of SSIS variables (broken since 3.1.6)|
|3.1.9 [L]|2018-01-27|DeltaQ|Improved logging|
|3.1.8 [M]|2018-01-27|DeltaQ|Fixes & improvements for RFC destination Unicode check|
|3.1.7 [M]|2018-01-27|DeltaQ|Server pool is re-used for sequential extractions|
|3.1.6 [M]|2018-01-27|DeltaQ|Some case-sensitivity fixes (source/target system, gateway host/service)|
|3.1.5 [L]|2018-01-23|Table|Fix for ArgumentNullException in rare cases|
|3.1.4 [L]|2018-01-18|Table|Fix for custom function without compression|
|3.1.3 [L]|2018-01-11|General|Fixes for error dialog|
|3.1.2 [L]|2018-01-10|DeltaQ|Hierarchy: Backward-compatibility fix (broken since 3.1.1)|
|3.1.1 [L]|2018-01-09|DeltaQ|Fix for legacy hierarchy detection|
|3.1.0 [M]|2017-12-05|DeltaQ|Changed request Id format to REQU_pppppppp_yyyyMMddHHmmss to support SAP BW export data sources |
|3.0.11 [L]|2017-12-01|ERPConnect|Updated ERPConnect to 5.6.0.0|
|3.0.10 [L]|2017-11-30|General|Fixes for GUI scaling|
|3.0.9 [M]|2017-11-28|General|Improved error dialogs|
|3.0.8 [L]|2017-11-22|DeltaQ|Fix for errors during hierarchy lookup|
|3.0.7 [L]|2017-11-21|Table|Fixed the issue in table component with column lengths of raw datatypes|
|3.0.6 [L]|2017-11-13|DeltaQ|Improved error message of pool connections.|
|3.0.5 [M]|2017-11-09|DeltaQ|Fix for integer overflow|
|3.0.4 [L]|2017-11-09|XtractQL|Added support for SNC with load balancing|
|3.0.3 [M]|2017-11-09|ERPConnect|Updated to 5.5.6.0|
|3.0.2 [M]|2017-11-07|Query|Fix for standard area|
|3.0.1 [M]|2017-11-07|Report|Fix for automatic column detection|
|3.0.0 [M]|2017-11-03|General|Added JSON serialization for Table, Query & Hierarchy. Various fixes & improvements.|
|2.5.13 [L]|2017-10-18|ERPConnect|Updated to 5.5.4.0|
|2.5.12 [L]|2017-09-15|BW Cube|Fix for MDX extraction without metadata|
|2.5.11 [M]|2017-09-12|ERPConnect|Updated to 5.4.7.0|
|2.5.10 [L]|2017-08-28|ERPConnect|Updated to 5.4.5.11|
|2.5.9 [M]|2017-08-28|DeltaQ|Fix for merging hierarchy texts|
|2.5.8 [M]|2017-08-17|DeltaQ|Fix for lengths (bug introduced in 2.4.8)|
|2.5.7 [L]|2017-08-16|DeltaQ|Fix for tracing|
|2.5.6 [L]|2017-08-16|ERPConnect|Updated to 5.4.5.4|
|2.5.5 [L]|2017-08-14|DeltaQ|Fix for customizing check (NetWeaver RFC)|
|2.5.4 [L]|2017-08-14|ERPConnect|Updated to 5.4.4.0|
|2.5.3 [L]|2017-08-10|ERPConnect|Updated to 5.4.3.0|
|2.5.2 [L]|2017-08-08|ERPConnect|Updated to 5.4.2.1|
|2.5.1 [L]|2017-08-08|DeltaQ|Fix for checking activation timestamp with multiple source systems|
|2.5.0 [L]|2017-08-08|DeltaQ|Added support for NetWeaver RFC libraries|
|2.4.8 [L]|2017-08-04|DeltaQ|Fix for switching between non-Unicode and Unicode systems|
|2.4.7 [L]|2017-08-03|ERPConnect|Updated to 5.4.1.0|
|2.4.6 [L]|2017-08-03|ERPConnect|Updated to 5.4.0.1|
|2.4.4 [L]|2017-07-13|DeltaQ|Hierarchy: Fixes for "unknown segment name"|
|2.4.3 [M]|2017-07-12|ERPConnect|Updated to 5.3.4.0|
|2.4.2 [M]|2017-07-10|ERPConnect|Updated to 5.3.3.0|
|2.4.1 [L]|2017-07-07|Table Join|Added error message for cluster tables|
|2.4.0 [M]|2017-07-06|DeltaQ|Improved automatic synchronization|
|2.3.14 [M]|2017-07-05|ERPConnect|Updated to 5.3.2.0|
|2.3.13 [M]|2017-07-04|ERPConnect|Updated to 5.3.1.0|
|2.3.12 [L]|2017-06-13|DeltaQ|Workaround for legacy metadata|
|2.3.11 [M]|2017-06-12|DeltaQ|Increased timeout for registering RFC servers|
|2.3.10 [L]|2017-06-08|Table|Fix for delta inits for 0UC* datasources.|
|2.3.9 [M]|2017-06-01|DeltaQ|Fixed race condition: Request IDoc could be sent, before RFC servers had been registered|
|2.3.8 [M]|2017-05-31|ERPConnect|Updated to 5.2.3.0|
|2.3.7 [L]|2017-05-31|BW Cube|Added support for legacy metadata retrieval|
|2.3.6 [M]|2017-05-16|DeltaQ|Fix for missing registration in transaction SMQS|
|2.3.5 [M]|2017-05-16|DeltaQ|Fix for auto-sync|
|2.3.4 [M]|2017-05-16|DeltaQ|Fixes & improvements for parallel extractions|
|2.3.3 [M]|2017-05-15|Table|Compression feature: Fix for parallel extractions on shared connection|
|2.3.2 [L]|2017-05-09|Table|Compression feature: Added trimming for D16R and D16D types|
|2.3.1 [L]|2017-05-09|Table|Compression feature: Improved error messages|
|2.3.0 [M]|2017-05-09|Table|Performance improvements (compression feature)|
|2.2.3 [M]|2017-04-27|ERPConnect|Updated to 5.2.1.0|
|2.2.2 [M]|2017-04-26|DeltaQ|Removed option for resending errors|
|2.2.1 [M]|2017-04-26|DeltaQ|Removed Dispatcher Service (no longer needed)|
|2.2.0 [M]|2017-04-26|DeltaQ|DeltaQ server pool is run in separate process now|
|2.1.9 [L]|2017-04-18|Table Join|Fixes for TableJoin data transfer|
|2.1.8 [M]|2017-04-06|DeltaQ|Fixes for OLTP timestamps|
|2.1.7 [L]|2017-03-31|ERPConnect|Updated to 5.1.1.1|
|2.1.6 [L]|2017-03-28|ERPConnect|Updated to 5.0.13.0|
|2.1.5 [L]|2017-03-23|OHS|Ignoring SAP error 307 (empty result)|
|2.1.4 [M]|2017-03-23|DeltaQ|Server pool: improved error handling|
|2.1.3 [M]|2017-03-23|ERPConnect|Updated to 5.0.12.0|
|2.1.2 [M]|2017-03-20|DeltaQ|Fix for NullReferenceException during early/late abort|
|2.1.1 [L]|2017-03-20|ERPConnect|Updated to 5.0.11.0|
|2.1.0 [L]|2017-03-20|DeltaQ|Fixes and improvements for DeltaQ dispatcher service|
|2.0.8 [M]|2017-03-13|ERPConnect|Updated to 5.0.8.0|
|2.0.7 [L]|2017-03-09|ERPConnect|Updated to 5.0.7.2|
|2.0.6 [L]|2017-03-09|General|Updated build tools to MSBuild 15.0|
|2.0.5 [L]|2017-03-03|ERPConnect|Updated to 5.0.6.1|
|2.0.4 [L]|2017-03-01|ERPConnect|Updated to 5.0.5.1|
|2.0.3 [M]|2017-02-22|ERPConnect|Updated to 5.0.2.1|
|2.0.2 [M]|2017-02-22|Query|Fix for integers with non-default output lengths|
|2.0.1 [M]|2017-01-30|DeltaQ|Fixes & improvements for server pool|
|2.0.0 [M]|2017-01-27|General|Kernel is based on .NET 3.5SP1/4.5.2 now|
|1.30.0 [M]|2017-01-17|OHS|Checking process chain log for errors every five minutes|
|1.29.0 [M]|2017-01-12|DeltaQ|Zombie RFC server connections are terminated before extraction starts|
|1.28.7 [L]|2017-01-09|ERPConnect|Updated to 4.43.6.0|
|1.28.6 [M]|2016-12-22|ERPConnect|Updated to 4.43.4.0|
|1.28.5 [H]|2016-12-20|DeltaQ|Fix for race condition (first data package got lost in some cases)|
|1.28.4 [M]|2016-12-20|ERPConnect|Updated to 4.43.3.0|
|1.28.3 [L]|2016-12-19|ERPConnect|Updated to 4.43.2.0|
|1.28.2 [M]|2016-12-19|OHS|Added support for Unicode RFC destinations|
|1.28.1 [M]|2016-12-05|DeltaQ|Backward compatibility for old extractions with erroneous field lengths|
|1.28.0 [M]|2016-12-02|DeltaQ|Added verification of column lengths in transfer structure|
|1.27.0 [M]|2016-11-25|DeltaQ|Several fixes and improvements|
|1.26.2 [M]|2016-11-25|ERPConnect|Updated to 4.43.0.0|
|1.26.1 [M]|2016-11-23|ERPConnect|Updated to 4.42.5.0|
|1.25.0 [L]|2016-11-09|General|Connection test now supports logon tickets|
|1.24.0 [M]|2016-11-02|DeltaQ|New algorithm for generating names of transfer structures|
|1.23.9 [M]|2016-11-01|DeltaQ|Fix for trimming spaces at the beginning|
|1.23.8 [M]|2016-10-31|DeltaQ|Fix for trimming spaces at the end|
|1.23.7 [M]|2016-10-31|ERPConnect|Updated to 4.42.3.1|
|1.23.6 [L]|2016-10-31|OHS|Receiving an empty data package won't result in canceling the whole extraction anymore.|
|1.23.5 [M]|2016-10-19|ERPConnect|Updated to 4.42.1.0|
|1.23.4 [L]|2016-10-18|DeltaQ|Added update mode A (activation only)|
|1.23.3 [L]|2016-10-10|ERPConnect|Updated to 4.41.3.1|
|1.23.2 [L]|2016-10-06|ERPConnect|Updated to 4.41.2.0|
|1.23.1 [L]|2016-09-28|ERPConnect|Updated to 4.41.1.0|
|1.23.0 [M]|2016-09-28|DeltaQ|Several fixes and improvements (esp. hierarchies)|
|1.22.8 [M]|2016-09-15|General|Fix for "connection closed"|
|1.22.7 [L]|2016-09-12|BW Cube|Fix for number of decimals in BW cubes with data type CURR. Set to 3 regardless of SAP BW metadata.|
|1.22.6 [H]|2016-09-09|ERPConnect|Updated to 4.40.7|
|1.22.5 [L]|2016-08-31|DeltaQ|Fix for serialization info in hierarchy extractions|
|1.22.4 [L]|2016-08-29|ERPConnect|Updated to 4.40.5.1|
|1.22.3 [L]|2016-08-29|DeltaQ|Added new Update Mode I to DeltaQ (e.g. fo data source 2LIS_03_BX)|
|1.22.2 [L]|2016-08-25|Report|Fix for long where statements in report variant lookup|
|1.22.1 [L]|2016-08-25|ERPConnect|Updated to 4.40.4.0|
|1.22.0 [M]|2016-08-23|BAPI|Added support for multiple tables/exports in result|
|1.21.0 [M]|2016-08-23|BAPI|Added support for export parameters in result|
|1.20.9 [M]|2016-08-18|ERPConnect|Updated to 4.40.3.0|
|1.20.8 [M]|2016-08-18|ERPConnect|Updated to 4.40.2.0|
|1.20.7 [M]|2016-08-05|OHS|Reduced CPU load while waiting for notification|
|1.20.6 [L]|2016-08-03|BW Cube|Fix for empty results|
|1.20.5 [M]|2016-08-01|ERPConnect|Updated to 4.40.1.0|
|1.20.4 [L]|2016-07-28|DeltaQ|Sets correct primary key in DeltaQ Hierarchy|
|1.20.3 [M]|2016-07-28|DeltaQ|Fix for DeltaQ Hierarchy getting wrong formatted data|
|1.20.2 [L]|2016-07-28|Query|Improved error message for metadata/result mismatch|
|1.20.1 [L]|2016-07-28|BW Cube|Integrated Exclude option to filter|
|1.20.0 [M]|2016-07-20|Hierarchy|"Remove leading zeros" now supports compounds|
|1.19.8 [M]|2016-07-13|ERPConnect|Updated to 4.39.4.0|
|1.19.7 [L]|2016-07-11|BW Cube|Fix for order of currency columns|
|1.19.6 [L]|2016-07-08|ERPConnect|Updated to 4.39.3.0|
|1.19.5 [L]|2016-07-07|BW Cube|Fixes for column order|
|1.19.4 [L]|2016-07-07|ERPConnect|Updated to 4.39.2.0|
|1.19.3 [L]|2016-07-06|ERPConnect|Updated to 4.39.1.0|
|1.19.2 [L]|2016-07-05|ERPConnect|Updated to 4.39.0.0|
|1.19.1 [M]|2016-06-30|General|Bugfix for number conversions with negative exponents.|
|1.19.0 [M]|2016-06-27|DeltaQ|Performance improvements|
|1.18.6 [M]|2016-06-16|BW Cube|Fix for DBNulls|
|1.18.5 [L]|2016-06-16|OHS|Marked NWRFC as not supported at the moment|
|1.18.4 [L]|2016-06-16|DeltaQ|Marked NWRFC as not supported at the moment|
|1.18.3 [L]|2016-06-15|ERPConnect|Updated to 4.38.3.0|
|1.18.2 [L]|2016-06-14|ERPConnect|Updated to 4.38.2.0|
|1.18.1 [L]|2016-06-08|ERPConnect|Updated to 4.38.0.0|
|1.18.0 [L]|2016-06-08|OHS|Added support for SNC RFC destination|
|1.17.0 [L]|2016-06-08|DeltaQ|Added support for SNC RFC destination|
|1.16.10 [L]|2016-06-07|General|Fix for NW RFC customizing check|
|1.16.9 [L]|2016-06-06|ERPConnect|Updated to 4.36.1.0|
|1.16.8 [L]|2016-05-31|General|Improved error messages in look-up forms|
|1.16.7 [L]|2016-05-31|ERPConnect|Updated to 4.35.14.0|
|1.16.5 [L]|2016-05-11|Table Join|Added script expressions to table join queries|
|1.16.4 [L]|2016-05-10|ERPConnect|Updated to 4.35.9.0|
|1.16.3 [L]|2016-05-03|DeltaQ|Lock timeout in case of multiple DeltaQ processes increased from 10 to 30 seconds.|
|1.16.2 [M]|2016-05-03|TQB|Updated TQB table metadata creation logic|
|1.16.1 [L]|2016-05-03|ERPConnect|Updated to 4.35.2.0|
|1.16.0 [M]|2016-05-03|Hierarchy|Added DateFrom/DateTo for temporal hierarchy join|
|1.15.8 [L]|2016-04-29|DeltaQ|Improved checks for unicode and RFC protocol in DeltaQ extractions and Customizing check|
|1.15.7 [M]|2016-04-25|ERPConnect|Updated to 4.34.6.0|
|1.15.6 [M]|2016-04-21|ERPConnect|Updated to 4.34.5.0|
|1.15.5 [M]|2016-04-20|DeltaQ|Fix for non-Unicode RFC destinations|
|1.15.4 [L]|2016-04-20|ERPConnect|Updated to 4.34.4.0|
|1.15.3 [M]|2016-04-20|ERPConnect|Updated to 4.34.2.0|
|1.15.2 [L]|2016-04-19|Table|Fix for multiple languages in table look-up|
|1.15.1 [M]|2016-04-19|ERPConnect|Updated to 4.34.1.0|
|1.15.0 [L]|2016-04-19|Hierarchy|Added JSON serialization|
|1.14.22 [L]|2016-04-18|ERPConnect|Updated to 4.34.0.0|
|1.14.21 [L]|2016-04-14|DeltaQ|Correction for delta inits for 0ME_ISM* OLTP datasources. A timestamp was not set correctly.|
|1.14.20 [L]|2016-04-08|BW Cube|Fix for X in measures|
|1.14.19 [L]|2016-03-21|DeltaQ|Fix for missing values in extractor 0EPM_EMPLOYEE_ORG_HIER|
|1.14.18 [L]|2016-03-11|OHS|Correction for Decimal numbers that were converted to 0 in rare cases|
|1.14.17 [L]|2016-02-24|BW Cube|Fix for BEX mode. Commands are ignored when resultset is empty to prevent short dump in SAP.|
|1.14.14 [L]|2016-02-03|General|Fixed "position" in metadata of Table and OHS (was 1-based instead of 0-based)|
|1.14.11 [L]|2016-01-27|OHS|Correction and fix for customers who have not yet implemented SAP note 1273946|
|1.14.5 [L]|2016-01-07|ERPConnect|Updated to 4.29.0.3|
|1.14.4 [L]|2016-01-07|Hierarchy|Duplicates in basic characteristic are ignored now|
|1.14.3 [L]|2016-01-04|Hierarchy|Improved error message for node conflicts|
|1.14.2 [L]|2015-12-22|OHS|Implemented SAP note 1866743 for error message "Cannot lock request", increased parameter I_ENQUEUE_LOOP_COUNT to 300|
|1.13.32 [L]|2015-11-04|DeltaQ|Fix for customizing check that failed accidently when using NW libraries instead of librfc32|
|1.13.30 [L]|2015-11-02|DeltaQ|Fix for certain cost center hierarchies (e.g. CSKS_S_HIENODE_0101) |
|1.13.29 [L]|2015-10-28|Table|Uses better custom functions as default|
|1.13.28 [L]|2015-10-15|DeltaQ|The output of the customizing check can be sent directly to the clipboard.|
|1.13.27 [L]|2015-10-07|BW Cube|The number of elements shown in the filter dialog hierarchy was increased from 10K to 500K|
|1.13.26 [L]|2015-09-22|ERPConnect|Updated to 4.28.0.0|
|1.13.25 [L]|2015-09-18|Table Join|Updated criteria designer to catch enter key in editing mode for value text box.|
|1.13.24 [L]|2015-09-17|TQB|Changed SQL text box in SQL dialog to be read only in TQB.|
|1.13.23 [L]|2015-09-16|TQB|Added special About dialog to designer.|
|1.13.22 [L]|2015-09-10|Table|Fix for table columns with datatype SSTRING and defined max length. SSTRING columns without a maximum length are still unsupported.|
|1.13.21 [L]|2015-09-10|Table|Fix for tables that contain an apostroph in the values of the primary key while using the compression feature. This situation could lead to a shortdump due to syntax error in generic ABAP code.|
|1.13.20 [L]|2015-09-08|DeltaQ|Increased performance of dispatcher service|
|1.13.19 [L]|2015-09-07|Report|Fixed bug in the search of reports|
|1.13.18 [L]|2015-08-26|Table Join|Correction for certain SSTRING columns|
|1.13.17 [L]|2015-08-14|TQB|Added logic to scroll last added output field into view once it got added.|
|1.13.16 [L]|2015-08-14|TQB|Updated logic to highlight output field during moving actions (move up/down).|
|1.13.15 [L]|2015-08-14|TQB|Added logic to add and delete all table fields from the output field selection list.|
|1.13.14 [L]|2015-08-13|TQB|Updated validation logic to check table references in criteria clauses once a table will be deleted.|
|1.13.13 [L]|2015-08-13|Table Join|New ABAP sources for Z_XTRACT_IS_TABLE_COMPRESSION to improve performance especially on SAP system based on MAXDB. New function module Z_XTRACT_IS_TABLE_JOIN released as beta version.|
|1.13.12 [L]|2015-08-13|TQB|Updated logic to autosize table field widths.|
|1.13.11 [L]|2015-08-13|TQB|Updated selection logic of output field list to highlight moving fields.|
|1.13.10 [L]|2015-08-12|TQB|Updated logic to autosize table field columns in designer surface.|
|1.13.9 [L]|2015-08-12|TQB|Updated internal table join structure handling.|
|1.13.8 [L]|2015-08-12|Table Join|Updated table join structure to handle alias field names in extraction results.|
|1.13.7 [L]|2015-08-10|TQB|Fixed minor bugs.|
|1.13.6 [L]|2015-08-10|TQB|Updated keyboard and selection handling in table lookup dialog and within the table field list (return selection).|
|1.13.5 [L]|2015-08-08|TQB|Updated keyboard and selection handling in table lookup dialog.|
|1.13.4 [L]|2015-08-06|Report|Fix for using automatic column detection with reports that have a line break|
|1.13.3 [L]|2015-08-05|OHS|Fix for OHS meta data handling|
|1.13.2 [L]|2015-08-04|OHS|Fixed metadata check (length)|
|1.13.1 [L]|2015-07-30|BW Cube|Fix for bad column captions during preview when adding units to the measure columns|
|1.13.0 [L]|2015-07-28|Hierarchy|SID structure is extracted for all hierarchies instead of table|
|1.12.19 [L]|2015-07-24|TQB|Updated logic for table filterbox to allow searching descriptions.|
|1.12.18 [L]|2015-07-24|TQB|Fixed bug in table filterbox to disable drops.|
|1.12.17 [L]|2015-07-24|TQB|Updated import logic to display error messages for invalid models.|
|1.12.16 [L]|2015-07-23|TQB|Added additional validation logic.|
|1.12.15 [L]|2015-07-23|General|Correction for handling certain BCD datatypes which were calculated too small (e.g. LIPS-UEBTO)|
|1.12.14 [L]|2015-07-22|Table|Fixed bug in table lookup form|
|1.12.13 [L]|2015-07-21|TQB|Fixed bug in table filterbox to allow deleting text input.|
|1.12.11 [L]|2015-07-19|TQB|Updated the table field filter box to support clear button.|
|1.12.10 [L]|2015-07-18|TQB|Updated table join dialog in TQB.|
|1.12.9 [L]|2015-07-18|TQB|Added support to display dynamic tooltips for table join definitions in TQB.|
|1.12.8 [L]|2015-07-18|TQB|Added support to import and export query in TQB|
|1.12.7 [L]|2015-07-16|BW Cube|Added date recognition for BW Cubes|
|1.12.6 [L]|2015-07-16|TQB|Fixed minor bugs,|
|1.12.5 [L]|2015-07-15|TQB|Added support for variable definition used by Xtract IS for grouping criteria in TQB.|
|1.12.4 [L]|2015-07-15|TQB|Fixed bug in drag and drop logic of the table filterbox in TQB.|
|1.12.3 [L]|2015-07-15|TQB|Now auto-join feature is supported for pasted tables in TQB.|
|1.12.2 [L]|2015-07-15|TQB|Added support to sort table fields by name in TQB.|
|1.12.1 [L]|2015-07-15|TQB|Updated auto-join feature in TQB.|
|1.12.0 [L]|2015-07-14|OHS|Added support for non-unicode RFC destinations on big endian systems|
|1.11.11 [L]|2015-07-14|ERPConnect|Updated to 4.27.0.0|
|1.11.10 [L]|2015-07-14|TQB|Changed recent used objects (RUO) sorting in table lookup dialog.|
|1.11.9 [L]|2015-07-14|TQB|Added new auto-join feature in TQB.|
|1.11.8 [L]|2015-07-14|TQB|Added new filterbox to filter table fields if table contains a large number of fields,|
|1.11.7 [L]|2015-07-14|TQB|Fixed bugs with aggregate function combobox in output field selection panel.|
|1.11.6 [L]|2015-07-14|TQB|Fixed bugs with alias naming in TQB.|
|1.11.5 [L]|2015-07-12|TQB|Updated resource loading problem once TQB is referenced in related products.|
|1.11.4 [L]|2015-07-08|OHS|RFC Server logging is switched on automatically when client logging/tracing active|
|1.11.3 [L]|2015-07-07|General|Fix for function module Z_XTRACT_IS_TABLE_COMPRESSION. Conversion exit for ALPHA conversion was not called correctly.|
|1.11.1 [L]|2015-06-25|Table|Correction for fields of type decimal with 0 decimal digits|
|1.10.5 [L]|2015-06-09|BW Cube|Added new Hierarchy Command feature for BEx mode|
|1.10.4 [L]|2015-05-26|Table|Fix for lengths in metadata|
|1.10.3 [L]|2015-04-30|Hierarchy|Fixed hierarchy metadata (parent/child)|
|1.10.2 [L]|2015-04-30|BW Cube|Correction for using BWCube's Refresh button with queries that contain structures|
|1.10.1 [L]|2015-04-17|ERPConnect|Updated to 4.24.4.0|
|1.8.55 [L]|2015-04-15|DeltaQ|Correction for trimming behaviour: If a column is a non-CHAR field (e.g. CURR or DEC) leading spaces are trimmed|
|1.8.54 [L]|2015-03-24|ERPConnect|Updated to 4.24.2.0|
|1.8.53 [L]|2015-03-23|BW Cube|Variable value help is now hierarichal if the member has hierarchies|
|1.8.52 [L]|2015-03-17|DeltaQ|Bug fix for selecting a hierarchy object from value help dialog after having resorted the hierarchy list|
|1.8.51 [L]|2015-03-06|DeltaQ|Leading blanks were accidently trimmed under certain circumstances|
|1.8.50 [L]|2015-03-05|Table|Fix for delimiter handling in table extraction.|
|1.8.49 [L]|2015-02-26|BW Cube|Improved handling for structures in measures|
|1.8.48 [L]|2015-02-25|DeltaQ|More details in log when resending failed calls while using the debug details switched on|
|1.8.47 [L]|2015-02-21|BW Cube|The applied filters are reflected in the MDX dialog (in earlier versions the filters were ignored)|
|1.8.46 [L]|2015-02-21|BW Cube|"Uncheck All" button available in members filter dialog|
|1.8.45 [L]|2015-02-21|BW Cube|The parent entries of the selected members in the members filter dialog are now highlighted in blue|
|1.8.44 [L]|2015-02-18|ERPConnect|Updated to 4.23.5.0|
|1.8.43 [L]|2015-02-16|Report|It's possible now to select a report directly by typing in the report's name in the look up dialog and press ok without the need to perform a search operation.|
|1.8.42 [L]|2015-02-06|BW Cube|Added tree view and search to selection of member filters|
|1.8.41 [L]|2015-01-27|BW Cube|Addded support for manual slicing/filtering|
|1.8.40 [L]|2015-01-26|BW Cube|New functions for manual slicing/filtering added|
|1.8.39 [L]|2015-01-22|BW Cube|Option "Use new OLAP BAPIs" is withdrawn as the new OLAP BAPIs are checked automatically and will be used if available|
|1.8.38 [L]|2015-01-22|BW Cube|Added new feature "Automatic Slicing" |
|1.8.37 [M]|2015-01-21|Hierarchy|Texts of leaves were missing for info objects with compounds|
|1.8.36 [L]|2015-01-20|Hierarchy|Fix for lookup if pattern doesn't match any entries|
|1.8.35 [L]|2015-01-08|ERPConnect|Updated to 4.23.0.5|
|1.8.34 [L]|2015-01-02|BW Cube|Correction for column naming in case of using description texts for naming with multiple columns with the same description|
|1.8.33 [L]|2014-12-09|ERPConnect|Updated to 4.22.17.0|
|1.8.32 [L]|2014-12-03|Table|Fix for DF* data types in table extraction|
|1.8.31 [L]|2014-12-02|ERPConnect|Updated to 4.22.16.2|
|1.8.30 [L]|2014-12-01|ERPConnect|Updated to 4.22.16.0|
|1.8.29 [L]|2014-12-01|Table|Fix for empty nodetable in tree browser|
|1.8.27 [L]|2014-11-25|ERPConnect|Updated to 4.22.15.1|
|1.8.26 [L]|2014-11-12|DeltaQ|Added missing authority check for object S_RO_OSOA to customizing check|
|1.8.25 [L]|2014-11-11|DeltaQ|New Create() method for DeltaQDefinition|
|1.8.24 [L]|2014-11-10|BW Cube|Correction for using query views under BW rel. 7.4 and above|
|1.8.23 [L]|2014-11-04|DeltaQ|The setting "RFC Server tracing" is withdrawn. To trace the RFC Server activity switch the logging of the client connection on.|
|1.8.22 [L]|2014-10-24|DeltaQ|General improvement for the handling of incoming calls under certain SAP releases|
|1.8.21 [L]|2014-10-15|DeltaQ|Fix for certain hierarchy extractors with special hierarchy segments (e.g. 0DF_IS_DFS_24)|
|1.8.20 [L]|2014-10-15|DeltaQ|Fix for certain hierarchy extractors with special hierarchy segments (e.g. 0DF_IS_DFS_24)|
|1.8.19 [L]|2014-10-13|BW Cube|Correction for carriage return symbols in certain resultsets|
|1.8.18 [L]|2014-10-13|BW Cube|Correction for empty cells at the end of resultsets produced by BEX mode extractions|
|1.8.17 [L]|2014-10-01|DeltaQ|Added authority object B_ALE_RECV to customizing check|
|1.8.16 [L]|2014-09-03|BW Cube|Correction for inadequate info message when receiving an empty resultset "Failing to rename column..." |
|1.8.15 [L]|2014-09-02|ERPConnect|Updated to 4.21.0.3|
|1.8.13 [L]|2014-08-25|Table|Correction for tables with columns with an unlimited output length (e.g. XML strings). These columns are ignored now and doesn't lead to a meta data error anymore.|
|1.8.12 [L]|2014-08-19|XtractQL|Bug fix for DESCRIBE BWQUERY CATALOG command.|
|1.8.11 [L]|2014-08-11|Hierarchy|Better error message in case of authorisation issues|
|1.8.10 [L]|2014-08-06|BW Cube|Added better error message in case a non-existent query view is trying to be executed in BEX mode|
|1.8.9 [L]|2014-07-21|Hierarchy|Added columns Version and Date To to search dialog|
|1.8.8 [L]|2014-07-10|BW Cube|Fix for using cubes or queries with namespace slashes in BEX mode|
|1.8.7 [L]|2014-06-24|ERPConnect|Updated to 4.18.3.0|
|1.8.6 [L]|2014-06-17|DeltaQ|Improved error message for DeltaQ dispatcher operations|
|1.8.5 [L]|2014-05-23|DeltaQ|Improved automatic activation|
|1.8.4 [L]|2014-05-20|BW Cube|New BWCube look-up|
|1.8.2 [L]|2014-05-19|Query|Fix for queries with multiple internal lists|
|1.8.1 [L]|2014-05-15|BAPI|New BAPI look-up|
|1.8.0 [M]|2014-05-13|Query|Workaround for result column length of some queries|
|1.7.7 [L]|2014-05-08|Query|Some fixes for new query look-up|
|1.7.5 [L]|2014-05-08|ERPConnect|Updated to 4.17.18.0|
|1.7.4 [L]|2014-05-07|DeltaQ|Fix for using unicode RFC destinations together with DeltaQ Dispatcher Service|
|1.7.2 [L]|2014-05-06|ERPConnect|Updated to 4.17.17.0|
|1.7.1 [L]|2014-05-02|BW Cube|Fix for wrong variable value help when sorting the entries within the grid of the variables dialog|
|1.7.0 [L]|2014-04-30|Hierarchy|Added support for SAP Release 7.4|
|1.6.13 [L]|2014-04-17|Hierarchy|New hierarchy look-up|
|1.6.12 [L]|2014-04-15|Query|New query look-up and metada retrieval|
|1.6.11 [L]|2014-04-15|ERPConnect|Updated to 4.17.13.0|
|1.6.10 [L]|2014-04-12|BW Cube|Workaround for variable usage with Bex mode under BW release 7.4|
|1.6.9 [L]|2014-04-11|XtractQL|Updated XQLDataReader logic in XtractQL.|
|1.6.7 [L]|2014-04-10|DeltaQ|Fix for issues with S init with certain OLTP sources: Setting the I_INITSIMU param to X when calling RSA1_OLTPSOURCE_GET_SELECTIONS|
|1.6.6 [L]|2014-04-10|XtractQL|Updated logic to set MaxLength property for result data tables in XtractQL.|
|1.6.2 [L]|2014-04-08|Table|Optimized initial loading time of tree browser|
|1.6.1 [L]|2014-04-08|Table|Optimized table lookup and filtering in tree browser|
|1.6.0 [L]|2014-04-01|Table|Added tree browser for table lookup|
|1.5.15 [L]|2014-03-25|ERPConnect|Updated to 4.17.7.0|
|1.5.13 [L]|2014-02-25|ERPConnect|Updated to 4.17.4.3|
|1.5.12 [L]|2014-02-22|Report|Correction for automatic column detection when header rows occur multiple times in the report's output|
|1.5.11 [L]|2014-02-21|BW Cube|Fix for a typo in variables dialog|
|1.5.10 [L]|2014-02-20|Scripting|Evaluating scripted expressions no longer appends a new line|
|1.5.9 [L]|2014-02-20|Scripting|Exception is thrown if }# is missing|
|1.5.7 [L]|2014-02-11|ERPConnect|Updated to 4.17.4.1|
|1.5.6 [L]|2014-01-30|DeltaQ|Fix for using Delta Init with data sources like 0FI_GL_10 and 0FI_GL_14|
|1.5.5 [L]|2014-01-22|General|Fix for parsing empty strings|
|1.5.4 [H]|2014-01-16|ERPConnect|Updated to 4.17.1.0|
|1.5.3 [L]|2013-12-15|DeltaQ|Fix for value help for logical destination: Destinations are now also shown, when the description in logon language is not maintained|
|1.5.1 [L]|2013-11-17|DeltaQ|Correction for certain hierarchries likes 0FUNCT_LOC_HIER or 0EQUIPMENT_HIER|
|1.4.61 [L]|2013-10-29|DeltaQ|Fix for metadate issue when using DeltaQ hierarchies in natural representation|
|1.4.60 [L]|2013-10-05|BW Cube|Fix for variable handling in BEX mode under certain release > 7.01|
|1.4.59 [L]|2013-09-12|BW Cube|Added support for pure MDX execution|
|1.4.57 [L]|2013-06-26|BW Cube|Fix for BEX extractions that contain line break in caption (column name)|
|1.4.56 [L]|2013-06-26|DeltaQ|RequestID is not re-used when doing a repair request. A new ID is generated.|
|1.4.55 [L]|2013-06-17|Report|Fix for settings Report Rows per Data Row (with values greater than 1)|
|1.4.54 [L]|2013-06-09|DeltaQ|Improved meta data handling|
|1.4.53 [L]|2013-06-06|DeltaQ|Fix for wrong job state detection when performing repairs to delta updates which failed with an aborted job|
|1.4.52 [L]|2013-06-04|BW Cube|Improved error message in case of SAP errors|
|1.4.51 [L]|2013-06-03|BW Cube|Improvement for BEX mode in BW Cube component when using older releases (3.5 or lower)|
|1.4.50 [L]|2013-04-24|Table|Improved logging in case of syntax error in WHERE clause|
|1.4.49 [L]|2013-04-23|DeltaQ|Fix for known issue that resending tRFC calls fail when RFC destination and Program ID have different values|
|1.4.48 [L]|2013-04-19|Report|Option added to enable row skipping via a regular expression|
|1.4.47 [L]|2013-04-05|DeltaQ|RFC Server Ping removed in customizing check to avoid trouble with certain SAP patches|
|1.4.46 [L]|2013-03-28|Table|Bugfix for Recycle SAP Connection message when using compression and multiple table extraction with only one connection manager|
|1.4.45 [L]|2013-03-28|Report|Bugfix for reporst with empty column header while using Automatic Column Detection|
|1.4.44 [L]|2013-03-25|DeltaQ|Bug fix when DeltaQ background job is trying to call RSS1_QUEUE_DELETED_IN_OLTP|
|1.4.43 [L]|2013-03-22|DeltaQ|Bugfix for Delta inits without data|
|1.4.42 [L]|2013-03-16|Report|Correction for using * in the report's Select Options|
|1.4.41 [L]|2013-03-12|BW Cube|Bugfix for BEX extraction with empty column headers|
|1.4.40 [L]|2013-03-05|DeltaQ|Fix for using Exclude as Sign in selections|
|1.4.39 [L]|2013-02-26|Table|Maximum Packagesize was increased from 100000 to 500000|
|1.4.38 [L]|2013-02-18|Report|Correction for XXX column with automatic column detection|
|1.4.37 [L]|2013-02-14|DeltaQ|Improvement for DeltaQ Inits and filters (e.g. with 0FI_GL_4)|
|1.4.36 [L]|2013-01-19|Table|Disabled .NET Code in WHERE clause|
|1.4.35 [L]|2013-01-18|DeltaQ|Improvement for Dispatcher Service|
|1.4.34 [M]|2013-01-16|BAPI|Added support for structures/tables which contain alignment gaps caused by includes|
|1.4.33 [L]|2013-01-02|DeltaQ|Improved logging for DeltaQ Dispatcher Service|
|1.4.32 [L]|2012-12-25|Table|New feature: .NET code can be used within a WHERE clause to enable dynamic WHERE statements with or without variables|
|1.4.30 [L]|2012-12-12|BW Cube|Fix for metadata: Changed length of measures from 256 to 15, changed length of dimensions from 256 to 255|
|1.4.29 [L]|2012-12-05|BW Cube|Various bugfixes within the low level MDX generator unit|
|1.4.27 [L]|2012-11-28|Table|Correction for misformated PERIO field like in CE1* tables when using compression|
|1.4.25 [L]|2012-11-14|Hierarchy|Added support for alternative BAPI for reading tables|
|1.4.23 [L]|2012-10-30|BW Cube|Correction for renaming columns in OLAP mode (error message: Cannot find column XX)|
|1.4.22 [L]|2012-10-26|DeltaQ|A new dialog for maintaining the Delta requests was added to the settings dialog|
|1.4.21 [L]|2012-10-23|BAPI|Fix for packed numbers (DEC, QUAN, etc.)|
|1.4.20 [L]|2012-10-18|Table|Correction for incorrect negative currency conversion fields when using compression and field exits at the same time|
|1.4.18 [L]|2012-09-24|DeltaQ|Automatic detection of Request ID when doing a Repair Request|
|1.4.16 [L]|2012-09-19|BAPI|Fix for parameters of ABAP type p|
|1.4.15 [L]|2012-09-14|DeltaQ|Added addtional checks for Data Package Verification|
|1.4.14 [L]|2012-09-10|Hierarchy|Added feature to always use the raw hierarchy table for backward-compatiblity|
|1.4.13 [M]|2012-09-10|DeltaQ|New feature was added to enable two additional columns in DeltaQ output: DataPackageID and RowCounter|
|1.4.12 [L]|2012-09-04|Hierarchy|Yet another fix for hierarchies with multiple matching entries in RSRHIEDIR_OLAP|
|1.4.11 [L]|2012-09-04|Hierarchy|Another fix for hierarchies with multiple matching entries in RSRHIEDIR_OLAP|
|1.4.10 [L]|2012-08-29|Hierarchy|Fix for hierarchies with multiple matching entries in RSRHIEDIR_OLAP|
|1.4.8 [L]|2012-08-23|BW Cube|Bug fix for non-aggregated dimensions (dimension type 4)|
|1.4.7 [L]|2012-08-08|Hierarchy|Links are also resolved in hierarchies which are neither time-dependent nor contain intervals|
|1.4.6 [L]|2012-08-07|Hierarchy|Fix for duplicated children of characteristic nodes in parent/child representation of hierarchies which have either a time-dependent structure or contain intervals|
|1.4.5 [M]|2012-08-06|BW Cube|Fix for missing data / errors related to asynchronous processing|
|1.4.2 [L]|2012-07-12|Table|Fix for table fields that contain a currency conversion number which is 0 like in field VBRK-KURRF (together with compression feature turned on)|
|1.4.0 [L]|2012-07-10|BAPI|New BAPI implementation|
|1.3.29 [L]|2012-07-06|Hierarchy|Fix for some hierarchies with time-dependent structure since version 1.3.15.x|
|1.3.27 [L]|2012-06-17|Table|Fix for BadFormatException when extracting table TCURR with field UKURS with compression switched to on|
|1.3.25 [L]|2012-06-08|DeltaQ|Fix for natural hierarchies (DBNull cast)|
|1.3.24 [L]|2012-06-01|Hierarchy|Fix for missing nodes at first level|
|1.3.23 [L]|2012-06-01|Hierarchy|Fix for description texts of text nodes of language-independent InfoObjects|
|1.3.21 [L]|2012-05-27|Table|It's now possible to use GetDate() to point to the current date within a WHERE clause. Attention! The term GetDate() is case-sensitive!|
|1.3.20 [L]|2012-05-25|Hierarchy|Descriptions of text nodes where missing in some cases for hierarchies which are not language dependent|
|1.3.18 [L]|2012-05-04|DeltaQ|Added authority object S_IDOCMONI to customizing check|
|1.3.17 [L]|2012-05-02|DeltaQ|Correction for certain hierarchies with special tRFC segments (e.g. 0GL_ACCOUNT_T011_HIER)|
|1.3.16 [L]|2012-04-27|Hierarchy|Fix for DBNull conversion error|
|1.3.12 [L]|2012-04-12|BW Cube|Correction for > sign in complex ranges of the BW Cube component|
|1.3.9 [L]|2012-03-29|Table|Fix for incorrect conversion of decimal fields with more than 4 decimal digits (Slash sign lead to error) when extracted with compression|
|1.3.8 [L]|2012-03-23|Hierarchy|Fix for node names which begin with spaces|
|1.3.7 [M]|2012-03-22|BW Cube|Correction for "2" character in property's name|
|1.3.6 [L]|2012-03-21|Hierarchy|Added option "Leaves Only" for natural representation|
|1.3.5 [L]|2012-03-21|Hierarchy|Renamed option "Repeat Leaves" to "Fill Empty Levels" because the repeated nodes are no leaves but the last node of the current path|
|1.3.4 [L]|2012-03-21|Hierarchy|Fix for counting merged text rows|
|1.3.3 [L]|2012-03-21|Query|Bug Fix for != (NE) operator in range|
|1.3.2 [L]|2012-03-08|Table|Correction for wrong conversion with FiscPer fields together with data compression|
|1.3.1 [L]|2012-03-03|DeltaQ|Bugfix for incorrect output length with columns of type RAW in tRFC mode|
|1.3.0 [L]|2012-02-29|Table|When using compression, it is possible to activate the field exits in SAP (Conversion Routines)|
|1.2.4 [M]|2012-02-13|BW Cube|Bug fix for renaming of column when the original column contains a LEVEL01 or any other level stuff|
|1.2.3 [L]|2012-02-13|DeltaQ|Addtional authority checks during customizing check|
|1.2.2 [M]|2012-02-02|General|Fix for aborting extractions|
|1.2.1 [L]|2012-02-01|DeltaQ|Correction for timeout behaviour when SAP sends a large number of Info IDocs while the data transfers are done after all Info IDocs are sent|
|1.1.5 [L]|2012-01-26|ERPConnect|Updated to 4.2.7.0|
|1.1.4 [L]|2012-01-23|DeltaQ|Bug fix for automatic activation in case the transfer structure is already active|
|1.1.2 [L]|2012-01-17|Table|Compression feature is released|
|1.1.1 [M]|2012-01-15|BW Cube|Implemented new BEX mode for extraction|
|1.0.76 [L]|2012-01-12|DeltaQ|Bug fix for certain exotic hierarchies like 0GLACCEXT_T011_HIER that are transferred with DTFIGL_HIERNODE_1 segments|
|1.0.75 [L]|2012-01-11|DeltaQ|Bug fix for missing bytes in columns of type Floating Point|
|1.0.74 [L]|2011-12-06|DeltaQ|Corection for special hierarchy 0REOBJECT_HIER (error message unkown segment)|
|1.0.71 [L]|2011-11-29|ERPConnect|Updated to 4.2.4.0|
|1.0.70 [L]|2011-11-28|ERPConnect|Updated to  4.2.3.0|
|1.0.68 [L]|2011-11-26|Table|Package ordinal number now printed in log output|
|1.0.67 [L]|2011-11-16|DeltaQ|Correction in RFC Destination Look Up dialog. The correct entry is now selected after re-sorting|
|1.0.66 [L]|2011-11-16|Query|Bugfix for query extractions in local workspace|
|1.0.65 [L]|2011-11-12|DeltaQ|Fix: Request ID is now available in the resultset|
|1.0.64 [M]|2011-11-10|General|Fix for invalid error log entries|
|1.0.63 [L]|2011-11-07|Hierarchy|Fix for systems which do not support intervals|
|1.0.62 [L]|2011-11-07|Hierarchy|Fix for systems which do not support "temporal hierarchy join" option|
|1.0.60 [L]|2011-10-20|Report|Added pattern for detection of report header during automatic column detection|
|1.0.58 [L]|2011-10-07|Report|Attribute 'Skip Rows' is now also working together with automatic column detection|
|1.0.57 [L]|2011-10-06|ERPConnect|Updated to 4.1.1.0|
|1.0.56 [L]|2011-10-05|DeltaQ|DeltaQ migrated to Kernel|
|1.0.54 [L]|2011-09-12|Query|Using long column names|
|1.0.53 [L]|2011-09-12|Hierarchy|Fix for wrong hierarchy node name in Natural representation since version 1.0.44|
|1.0.48 [L]|2011-08-25|Hierarchy|Corrected position of NodeText column in parent/child representation (Hierarchy)|
|1.0.47 [L]|2011-08-23|BW Cube|Bugfix for LookUp dialog for BW queries|
|1.0.45 [L]|2011-08-09|Query|Performance improvements for SAP Queries|
|1.0.44 [L]|2011-08-07|Hierarchy|Added optional description texts of levels for natural hierarchy representation|
|1.0.43 [M]|2011-08-07|Query|Performance optimization for Query extractions|
|1.0.42 [L]|2011-08-04|Hierarchy|Fix for hierarchy description texts of nodes names which contain non-alphanumeric characters|
|1.0.41 [L]|2011-08-02|Hierarchy|Fix for description texts of hierarchies with external characteristics without hierarchies|
|1.0.40 [L]|2011-07-20|Hierarchy|Fix for hierarchies with external characteristics without hierarchies|
|1.0.39 [L]|2011-07-19|Table|Fix for table look up dialog for tables which description text is not available in the logon language|
|1.0.38 [L]|2011-07-19|General|Fix for Greek characters|
|1.0.37 [L]|2011-07-19|OHS|Fix for OHS in general|
|1.0.36 [L]|2011-07-19|OHS|Fix for OHS look up dialog|
|1.0.35 [L]|2011-07-19|General|Fix for Greek characters|
|1.0.34 [L]|2011-07-15|Hierarchy|Added support of time-dependent hierarchies|
|1.0.33 [L]|2011-07-06|Report|Consolidation of report extraction to kernel|
|1.0.32 [L]|2011-06-22|Hierarchy|Added description texts for hierarchies with external characteristics and description texts of text nodes|
|1.0.30 [L]|2011-06-22|BAPI|Correction for decimals in BAPI tables|
|1.0.29 [L]|2011-06-22|Hierarchy|Implemented removal for leading zeros in hierarchy names|
|1.0.28 [L]|2011-06-17|Hierarchy|Fix for natural representation of some hierarchies and some hierarchies with intervals|
|1.0.27 [L]|2011-06-10|Hierarchy|Fix for hierarchies which have invalid Rest Top SID entries in RSRHIEDIR_OLAP|
|1.0.26 [L]|2011-06-06|Hierarchy|New Hierarchy implementation|
|1.0.25 [L]|2011-05-16|Hierarchy|Supports BW Hierarchy Intervals|
