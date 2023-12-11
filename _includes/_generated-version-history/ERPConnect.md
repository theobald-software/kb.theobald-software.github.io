|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|7.8.1 [L]|2023-12-11|General|Fixed a bug that may cause missing fields in RFCFunction parameters if they contain table types with one unique key component.|
|7.8.0 [M]|2023-12-07|NWRFC|Changed the default R3Connection Protocol to NWRFC as announced in 7.6.0. Added support for RFC over WebSocket.|
|7.7.3 [L]|2023-11-15|NWRFC|Added TraceLevel property to R3Connection|
|7.7.2 [L]|2023-10-25|NWRFC|Fixed a parallelization issue caused by limitations in the callback handling when using NWRFC.|
|7.7.1 [L]|2023-07-12|General|Replaced AbapSignedNumericCharacter.ToLong() with AbapSignedNumericCharacter.ToDecimal()|
|7.7.0 [L]|2023-06-04|General|Added AbapSignedNumericCharacter|
|7.6.1 [L]|2023-04-05|RFC Client|R3Connection.GetSSOTicket() now supports SNC SSO with NWRFC|
|[7.6.0 [M]](https://kb.theobald-software.com/release-notes/ERPConnect-7.6.0.html)|2023-03-31|RFC Client|Various breaking changes to R3Connection API([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-7.6.0.html))|
|7.5.8 [M]|2023-03-22|RFCServer|Classic RFC: Fixed a bug that caused import parameters in server and callback functions to be filled with garbage values when the application server did not supply them in the call |
|7.5.7 [M]|2023-03-21|RFCServer|Classic RFC: Fixed a bug that caused an AccessViolationException when adding rows to a table that is defined in the server function, but not actually part of the call initiated by the SAP application server|
|7.5.6 [L]|2023-03-15|General|Replaced the local byte serialization/deserialization on Ewkb with the ByteSerialization from Theobald.Common (introduced on 2.22.0)|
|7.5.5 [L]|2023-02-18|SNC|Added SNCSettings.RunImpersonated|
|7.5.4 [L]|2023-02-18|General|Added Global.SetCpicConnectTimeout()|
|7.5.3 [L]|2023-02-10|General|Added doc strings to interface IR3Connection. Cleanup, corrections, and some see and seealso references added to comments on both IR3Connection and R3Connection|
|7.5.2 [L]|2023-01-21|SNC|Detect ineffective attempts to change SNC library after it has already been loaded|
|7.5.1 [L]|2023-01-18|General|BWCube: fix for invalid MDX when selecting a hierarchy and a property on the same dimension|
|7.5.0 [L]|2023-01-17|SNC|Added support for External ID|
|7.4.0 [L]|2023-01-11|LINQtoERP|Removed LINQtoERP VS2012|
|7.3.0 [L]|2022-12-23|General|Added classes to convert geometry EWKB to WKB and WKT|
|7.2.1 [L]|2022-11-11|General|AbapDate.ToString() now returns ABAP string representations of dates.|
|7.2.0 [L]|2022-11-11|General|Added AbapDate, removed ConversionUtils, renamed UtcLong to AbapTimestamp|
|7.1.2 [L]|2022-11-05|General|Added UtcLong.Parse()|
|7.1.1 [M]|2022-10-06|General|Packed numbers that exceed the range of System.Decimal throw an exception instead of being cut off silently|
|7.1.0 [L]|2022-08-30|RFC Client|Introduced Execute(RFCFunction) method to IR3Connection interface to improve testability of R3Connection dependent code|
|7.0.0 [M]|2022-06-15|General|Removed ERPConnect45.dll - please use ERPConnectStandard20.dll or ERPConnect35.dll instead|
|[6.14.19 [L]](https://kb.theobald-software.com/release-notes/ERPConnect-6.14.19.html)|2022-05-17|Idoc|Fixed a bug where saving an Idoc schema incorrectly changed field names([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-6.14.19.html))|
|6.14.18 [L]|2022-05-10|RFC Client|Fixed a bug where tables with built-in types were not created correctly using R3Connection.CreateFunction|
|6.14.17 [L]|2022-03-25|General|Introduced Interface IR3Connection to make consumers of R3Connection testable.|
|6.14.16 [L]|2021-12-28|General|Fix for tracing null values|
|6.14.15 [L]|2021-12-03|General|Derived classes of ERPException are Serializable now|
|6.14.14 [L]|2021-09-22|Idoc|Fix for loading schema documentation|
|6.14.13 [M]|2021-09-21|RFCServer|Fixed an issue where an RFCServer would not update its code page when using NWRFC|
|6.14.12 [M]|2021-08-26|General|Fix for tables in tables|
|6.14.11 [L]|2021-08-02|Idoc|Added TemplateSegments property to access IDoc schema information|
|6.14.10 [M]|2021-06-15|Idoc|Fix for LoadPlainData(): RCVLAD and following fields|
|6.14.9 [M]|2021-06-15|RFCServer|Fix for receiving empty tables via NWRFC (previous non-empty result was returned)|
|6.14.8 [L]|2021-04-13|RFC Client|Classic: Fix for reading structures in response with less members than defined in local function object|
|6.14.7 [L]|2021-01-20|RFCServer|Improvements for NWRFC multithreading|
|6.14.6 [L]|2021-01-04|LINQtoERP|BWCube: Fix for SingleRange.Option|
|6.14.5 [L]|2020-12-17|General|Workaround for Tables containing empty lines, when using NWRFC libraries with big endian systems|
|6.14.4 [M]|2020-12-16|RFCFunction.Tables|Fixed a bug where setting IsSupplied to false for at least one table in a function module with multiple tables caused errors when using classic RFC|
|6.14.3 [L]|2020-11-06|General|Added RFCTable.NewRows()|
|6.14.2 [L]|2020-10-24|RFC Client|Fix for parsing escaped backslash in connection string|
|6.14.1 [L]|2020-10-08|General|Added RFCTable.IsSupplied and RFCStructure.SetValueInternal()|
|6.14.0 [L]|2020-08-19|General|Added support for Linux and macOS (ERPConnectStandard20.dll with NWRFC only)|
|6.13.1 [L]|2020-08-11|General|Only update R3Connection.SID after connection has been established, if no SID was set|
|[6.13.0 [L]](https://kb.theobald-software.com/release-notes/ERPConnect-6.13.0.html)|2020-07-23|General|Various small API changes (see release notes for details)([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-6.13.0.html))|
|6.12.0 [M]|2020-07-15|General|Added support for new ABAP type utclong|
|6.11.0 [L]|2020-07-09|LINQtoERP|Removed LINQ to ERP support for Visual Studio 2010|
|6.10.1 [L]|2020-06-23|NWRFC|Fix for nested structures in export parameters when using NWRFC|
|[6.10.0 [M]](https://kb.theobald-software.com/release-notes/ERPConnect-6.10.0.html)|2020-06-17|General|IsSupplied Property is now also persisted when serializing RFCParameter.([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-6.10.0.html))|
|6.9.0 [L]|2020-05-26|Setup|New setup|
|6.8.9 [M]|2020-01-16|RFCServer|Fix for parallel RFC servers using NWRFC|
|6.8.8 [M]|2020-01-14|RFCServer|Fix for "Cannot execute NwFunction more than once" (NWRFC)|
|6.8.7 [M]|2019-12-06|RFC Client|Classic RFC: Fixed memory leak in tRFC (e. g. Idoc.Send())|
|6.8.6 [M]|2019-12-06|RFC Client|NWRFC: Fixed memory leak in tRFC / qRFC (e. g. Idoc.Send())|
|6.8.5 [L]|2019-12-05|General|Adjustments for demo licenses.|
|6.8.4 [L]|2019-11-13|Idoc|Fix for loading iDoc Schema after loading plain data|
|6.8.3 [L]|2019-11-13|Setup|Improvements for the uninstalling script|
|6.8.2 [L]|2019-11-06|Setup|Improvements for the uninstalling script|
|6.8.1 [L]|2019-09-19|General|Added RFCTYPE.DECF16 and RFCTYPE.DECF34|
|6.8.0 [M]|2019-08-16|LINQtoERP|Added support for Visual Studio 2019|
|6.7.3 [M]|2019-08-14|RFC Client|ReadTable: Fix for determining lengths of columns|
|6.7.2 [L]|2019-08-13|RFC Client|ReadTable: Workaround for SAP 4.6C bug with WHERE clauses containing IN condition|
|6.7.1 [L]|2019-08-08|RFC Client|Fixes for connecting as external program to gateway (classic RFC)|
|6.7.0 [M]|2019-08-07|General|Added support for INT8|
|6.6.1 [M]|2019-07-12|NWRFC|Fixed a memory leak that affected RFC functions that contain deep structures or tables|
|6.6.0 [L]|2019-07-12|General|TransactionRecorder: Added support for NWRFC & SNC|
|6.5.10 [M]|2019-07-08|RFCServer|NWRFC: Fixes for character encoding on Big Endian systems (broken since 6.5.0)|
|6.5.9 [L]|2019-05-08|General|Using MSBuild 16.0|
|6.5.8 [M]|2019-05-06|RFC Client|Connection strings: Fix for backslashes inside quotes (broken since 6.5.2)|
|6.5.7 [M]|2019-03-22|NWRFC|Fixed a bug where an exception that occurred while calling a client function could be replaced by a NullReferenceException|
|6.5.6 [M]|2019-03-06|NWRFC|Fix for receiving nested tables|
|6.5.5 [M]|2019-02-26|RFC Client|NWRFC: Fixed alignment issue related to includes|
|6.5.4 [L]|2019-02-25|NWRFC|Fix for sequential execution of functions with same callback names but different metadata|
|6.5.3 [M]|2019-02-22|RFC Client|Fix for R3Connection IDisposable implementation|
|6.5.2 [L]|2019-02-13|RFC Client|Fix for quotes in passwords|
|6.5.1 [L]|2019-01-25|RFC Client|NWRFC: Fix for connection strings on localized systems|
|6.5.0 [M]|2019-01-15|RFC Client|NWRFC: Added support for RFC callbacks|
|6.4.10 [L]|2019-01-08|RFC Client|ReadTable: Fix for Big Endian + NWRFC|
|6.4.9 [M]|2019-01-07|RFC Client|NWRFC: Fix for table / deep structure imports (bug introduced in 6.4.5)|
|6.4.8 [L]|2018-12-18|RFC Client|Changed the behavior of the new ReadTable implementation to be more consistent with the old implementation in terms of RowState of the resulting DataTable|
|6.4.7 [L]|2018-12-11|RFC Client|R3Connection.ParseConnectionString() parses SNC_MYNAME now|
|6.4.6 [L]|2018-12-11|RFC Client|R3Connection.Clone() copies SNCSettings.OwnName now|
|6.4.5 [M]|2018-11-28|RFCServer|NWRFC: Fix for table / deep structure exports|
|6.4.4 [M]|2018-11-28|RFCServer|Fixes for unknown server functions  (bug introduced in 6.3.0)|
|6.4.3 [L]|2018-11-28|General|Changed default length from 0 to 1 for RFCParameters|
|6.4.2 [L]|2018-11-26|RFCServer|Removed RFCServer.Ping() (was marked for "internal use only", had various issues)|
|6.4.1 [L]|2018-11-14|Setup|Changed default install directory to "Program Files\ERPConnect" on x64 systems|
|6.4.0 [L]|2018-11-14|LINQtoERP|Removed support for VS2008|
|[6.3.0 [M]](https://kb.theobald-software.com/release-notes/ERPConnect-6.3.0.html)|2018-11-04|General|Some collections are implementing generic IList<T> now instead of non-generic interfaces([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-6.3.0.html))|
|6.2.3 [M]|2018-10-29|RFC Client|Another fix for R3Connection.CreateFunction() on some non-Unicode systems (TABLE_NOT_ACTIVE, bug introduced in 6.2.1).|
|6.2.2 [M]|2018-10-16|RFC Client|Fix for R3Connection.CreateFunction() on some non-Unicode systems (TABLE_NOT_ACTIVE, bug introduced in 6.2.1).|
|6.2.1 [L]|2018-10-09|Idoc|Fix for sending Idocs via qRFC|
|6.2.0 [M]|2018-10-01|RFC Client|Added support for RFC_READ_TABLE2 function modules in ReadTable|
|6.1.5 [L]|2018-09-19|RFC Client|Added R3Connection.ReadTableFunctionName|
|6.1.4 [L]|2018-08-31|RFCServer|Fix for RFCServer when using NetWeaver 7.50|
|6.1.3 [M]|2018-08-27|General|Improved error message for missing/corrupt librfc32.dll|
|6.1.2 [L]|2018-08-15|General|Fix for WHERE clause on some SAP releases that don't support splitting of string literals (e. g. 740 SP 4)|
|6.1.1 [M]|2018-07-31|LINQtoERP|Fix for Idoc code generator (broken since 5.7.0)|
|[6.1.0 [M]](https://kb.theobald-software.com/release-notes/ERPConnect-6.1.0.html)|2018-07-24|General|New implementation of ReadTable class & support for non-Unicode multibyte codepages([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-6.1.0.html))|
|6.0.2 [L]|2018-06-28|General|Updated EULA|
|6.0.1 [L]|2018-06-19|General|NWRFC: Fix for non-structure line types in imports/exports/changings (e. g. STRINGTAB)|
|6.0.0 [M]|2018-05-18|General|Added support for .NET Standard 2.0 (ERPConnectStandard20.dll) and RFC callbacks, fixed SQL Server support|
|5.7.6 [L]|2018-04-23|General|Improvements for trimming and error message|
|5.7.5 [L]|2018-04-17|General|Updated EULA|
|5.7.4 [L]|2018-04-17|General|Improvements for error handling (classic RFC)|
|5.7.3 [L]|2018-04-03|General|Adjustments for FIPS compliance|
|5.7.2 [M]|2018-03-29|RFC Client|Fixed text encoding of TIDs (NWRFC)|
|5.7.1 [L]|2018-03-23|RFC Client|Added support for setting SNCSettings.OwnName on client connections|
|5.7.0 [L]|2018-03-13|RFC Client|Added support for qRFC (NetWeaver libraries only)|
|5.6.5 [L]|2018-02-05|NWRFC|Updated error message for missing NW libraries (NWSDK 7.50)|
|5.6.4 [L]|2018-01-30|LINQtoERP|Fixed a bug where INT1 was being cast to Int32 instead of Byte in generated code|
|5.6.3 [L]|2018-01-24|RFCServer|Made the behaviour for when a non-registered function on RFCServer is called consistent across RFC and NW. Improved the corresponding error message for RFC.|
|5.6.2 [L]|2018-01-24|RFC Client|Fix for logon properties check|
|5.6.1 [L]|2017-12-18|RFC Client|Fix for X509 certificate logon option (SNC is required to be disabled now instead of enabled)|
|5.6.0 [L]|2017-12-01|RFCServer|Improved error handling for tRFC. Changed TRFCCommit signature.|
|5.5.6 [L]|2017-11-09|RFC Client|NWRFC: Fix for ambigous import/export parameters|
|5.5.5 [L]|2017-11-09|General|Classic RFC: Improved error messages|
|5.5.4 [M]|2017-10-18|RFC Client|RFCTable.Rows is cleared after call now, if function in SAP clears the table|
|5.5.3 [M]|2017-10-11|LINQtoERP|Function: Fix for empty tables - pass (bug introduced in 5.4.9)|
|5.5.2 [M]|2017-10-09|LINQtoERP|Function: Fix for empty tables - return (bug introduced in 5.4.9)|
|5.5.1 [M]|2017-10-05|RFCServer|Classic: Fix for unsupplied XML parameters|
|5.5.0 [M]|2017-09-27|LINQtoERP|Function: Inconsistent metadata of existing structures can be updated now (VS2015, VS2017)|
|5.4.9 [M]|2017-09-25|LINQtoERP|Function: Fixes for metadata mismatch in structures/tables|
|5.4.8 [L]|2017-09-20|RFC Client|Added R3Connection.CpicConversationId|
|5.4.7 [M]|2017-09-12|General|Big Endian: Fix for overflow exceptions when receiving negative values|
|5.4.6 [L]|2017-08-29|RFC Client|NWRFC: Added R3Connection.InitialEncoding for special characters in passwords|
|5.4.5 [L]|2017-08-16|RFCServer|Fixes & improvements for logging|
|5.4.4 [L]|2017-08-14|RFCServer|Classic RFC: Fix for spaces in SNC library path|
|5.4.3 [L]|2017-08-10|RFC Client|Added R3Connection.ToConnectionString() and R3Connection.AppendToConnectionString()|
|5.4.2 [L]|2017-08-08|RFC Client|Marked ReadTable.AddCriteria() as obsolete|
|5.4.1 [L]|2017-08-03|RFC Client|Added R3Connection.ParseConnectionString()|
|5.4.0 [M]|2017-08-03|General|Added support for variable default values (e. g. SY-SAPRL). Added property RFCParameter.IsSupplied|
|5.3.5 [L]|2017-07-24|LINQtoERP|Fix for BWCube column positions|
|5.3.4 [M]|2017-07-12|RFC Client|Classic RFC: Fix for table memory leak (bug introduced in 5.3.3.0).|
|5.3.3 [M]|2017-07-10|General|Reduced peak memory consumption while receiving tables|
|5.3.2 [M]|2017-07-05|General|Fix for missing table data (bug introduced in 5.3.1)|
|5.3.1 [M]|2017-07-04|General|Classic RFC: Fixed memory leak (receiving STRING/XSTRING/XMLDATA)|
|5.3.0 [M]|2017-06-16|RFCServer|Added Started/Stopped events|
|5.2.3 [M]|2017-05-25|General|Fix for sending certain Unicode characters to big endian systems|
|5.2.2 [M]|2017-05-17|General|Fixes for BWCube.RefreshMetaData()|
|5.2.1 [M]|2017-04-27|General|Classic RFC: Fixed memory leak|
|5.2.0 [L]|2017-04-26|RFCServer|Classic: Removed queueing of tRFC requests/dynamic server registration|
|5.1.1 [M]|2017-03-31|General|Fixes & improvements for SaveToXML() and LoadFromXML() |
|5.1.0 [M]|2017-03-31|LINQtoERP|Added LINQ to SAP support to Visual Studio 2017|
|5.0.13 [L]|2017-03-28|RFCServer|Classic RFC: Minor improvements for registering new servers|
|5.0.12 [M]|2017-03-23|RFCServer|Improved exception handling|
|5.0.11 [L]|2017-03-20|General|Classic RFC: Fix for missing ABAP exception names with old RFC libraries|
|5.0.10 [L]|2017-03-16|RFCServer|RFCServerFunction.SaveToXML(): replacing invalid control characters with space instead of dropping them to preserve lengths & offsets|
|5.0.9 [L]|2017-03-14|RFC Client|Classic RFC: Improved error message for failures while waiting for function results|
|5.0.8 [M]|2017-03-13|RFCServer|Classic RFC: Fix for TimeoutException when invalid connection parameters are used|
|5.0.7 [L]|2017-03-09|General|ERPConnect35.dll and ERPConnnect45.dll are built by MSBuild 15.0 now|
|5.0.6 [M]|2017-03-02|General|Fix for sending nested structures|
|5.0.5 [M]|2017-02-28|RFC Client|Classic RFC: Fix for changing parameters (string, xstring, table types, deep structures)|
|5.0.4 [M]|2017-02-28|LINQtoERP|Fixes for removal of SOAP support|
|5.0.3 [L]|2017-02-22|LINQtoERP|Removed references to old ERPConnect versions.|
|5.0.2 [L]|2017-02-22|Query|INT2 and INT1 values are converted to int instead of short/byte to match QueryFields before Execute()|
|5.0.1 [L]|2017-02-10|LINQtoERP|Set max rows of Query to 200.000|
|[5.0.0 [M]](https://kb.theobald-software.com/release-notes/ERPConnect-5.0.0.html)|2017-01-27|General|Removed ERPConnect20.dll & ERPConnect40.dll, updated ERPConnect45.dll to .NET Framework 4.5.2, removed support for SOAP([Release note](https://kb.theobald-software.com/release-notes/ERPConnect-5.0.0.html))|
|4.43.7 [L]|2017-01-09|Setup|Removed old example code|
|4.43.6 [M]|2017-01-09|General|Improved error messages for nonexistent column names|
|4.43.5 [M]|2016-12-23|General|NW: Fix for null-terminators in imports/exports/changings of ABAP type string|
|4.43.4 [M]|2016-12-22|General|Introduced NoAuthorityException, improved error messages|
|4.43.3 [M]|2016-12-20|RFC Client|Improved error message for missing table authorization|
|4.43.2 [L]|2016-12-19|General|Improved exception handling in BWCube for BW dates|
|4.43.1 [L]|2016-12-14|General|Added new ERPException - NotAuthorizedException  Optimized BWCube exception handling for dates|
|4.43.0 [M]|2016-11-25|RFCServer|tRFC: Added support for queuing parallel connections|
|4.42.5 [M]|2016-11-23|General|Fixed default value of R3Connection.MultithreadingEnvironment (was false)|
|4.42.4 [M]|2016-11-07|General|Fix for receiving strings with more than 255 characters inside of deep structures/table types (NW)|
|4.42.3 [M]|2016-10-31|General|Fix for transferring empty NUMC/DATS/TIMS parameters to non-Unicode systems|
|4.42.2 [L]|2016-10-21|LINQtoERP|Fixed bug in changing parameter handling in VS2013+|
|4.42.1 [M]|2016-10-17|RFCServer|Fix for more than one call per LUW (classic, tRFC)|
|4.42.0 [L]|2016-10-15|RFCServer|Fixes and improvements for parallel RFC servers (classic)|
|4.41.3 [L]|2016-10-10|RFCServer|Added property RFCServer.SAPEncodingInfo|
|4.41.2 [L]|2016-10-06|General|Setting R3Connection.Host/R3Connection.SystemNumber  for monitoring of load balancing scenarios|
|4.41.1 [L]|2016-09-28|RFCServer|Improved error handling for IDocs|
|4.41.0 [L]|2016-09-28|General|BWCube: Added fallback mechanism for undefined decimals|
|4.40.9 [L]|2016-09-28|RFCServer|Workaorund for invalid codepage announcement on Unicode RFC destination|
|4.40.7 [H]|2016-09-09|RFC Client|Classic: Errors during execution are no longer ignored (bug introduced in 4.40.1.0)|
|4.40.6 [L]|2016-09-05|LINQtoERP|Updated LINQtoSAP to support .NET4.5+|
|4.40.5 [L]|2016-08-29|RFC Client|Fix for big endian non-Unicode systems|
|4.40.4 [L]|2016-08-25|SNC|Fix for incomplete logon data in some rare cases|
|4.40.3 [M]|2016-08-18|General|Fix for structures in table columns (NW)|
|4.40.2 [M]|2016-08-17|General|Fix for structures in structure elements|
|4.40.1 [L]|2016-08-01|General|Fix for tables larger than 2 GB (64-bit only)|
|4.40.0 [M]|2016-08-01|General|Performance improvements for tables processing|
|4.39.4 [M]|2016-07-13|RFCServer|Classic: Fix for codepage/endianess|
|4.39.3 [L]|2016-07-08|RFC Client|Classic: Workaround for opening/closing SNC connections multiple times in a row (missing language etc.)|
|4.39.2 [L]|2016-07-07|RFC Client|BWCube: Fixes for metadata retrieval/update|
|4.39.1 [L]|2016-07-06|General|Fix for very big tables|
|4.39.0 [M]|2016-07-05|RFC Client|Added R3Connection.IsOpen|
|4.38.3 [L]|2016-06-15|General|Improved exceptions for logon/communication|
|4.38.2 [M]|2016-06-14|RFC Client|NW: Fix for table structures with padding at the end|
|4.38.1 [L]|2016-06-13|RFC Client|R3Connection.UserName is set to the actual name of the logged on user|
|4.38.0 [L]|2016-06-08|RFCServer|Added support for SNC (NW)|
|4.37.0 [L]|2016-06-08|RFCServer|Added support for automatic detection of SNC own name (classic)|
|4.36.1 [L]|2016-06-06|General|Fix for Unicode big endian systems|
|4.36.0 [M]|2016-06-03|LINQtoERP|Linq to SAP designer supports Netweaver libary now.|
|4.35.15 [M]|2016-06-01|Idoc|Idocs with column names like metadata columns now supported.|
|4.35.14 [L]|2016-05-31|RFC Client|NW: Workaround for import/export parameters with same name|
|4.35.13 [L]|2016-05-27|General|NW: Improved error message for SetABAPDebug()|
|4.35.12 [M]|2016-05-27|General|NW: Improvements for dev_rfc.trc handling|
|4.35.11 [M]|2016-05-19|General|classic: Fix for XSTRINGs|
|4.35.10 [L]|2016-05-17|General|NW: improvements for logging and release of native resources|
|4.35.9 [L]|2016-05-10|General|XML dumps are only created if R3Connection.Logging = true|
|4.35.8 [M]|2016-05-10|RFC Client|NW: Fix for non-Unicode systems|
|4.35.7 [M]|2016-05-09|RFCServer|NW: Fix for RFCServer restarts|
|4.35.6 [M]|2016-05-07|RFC Client|NW: Fix for codepage detection|
|4.35.5 [M]|2016-05-05|RFC Client|Calling R3Connection.Ping() after ABAP exception: workaround for connection breakdown (NW library bug)|
|4.35.4 [L]|2016-05-04|RFC Client|SOAP: Added support for X509 client certificates|
|4.35.3 [L]|2016-05-03|RFCServer|NW: Added error message for unsupported non-Unicode destinations |
|4.35.2 [L]|2016-05-02|General|NW: Added CPIC tracing|
|4.35.1 [L]|2016-05-02|General|NW: improved handling of ABAP messages/exceptions|
|4.35.0 [L]|2016-04-27|RFC Client|Query: added support for INT2 and INT1|
|4.34.6 [M]|2016-04-25|General|Fixes for tables in Import/Export/Changing parameters, structures with STRING/XSTRING etc.|
|4.34.5 [M]|2016-04-21|General|Fix for sending NUMC, DATS, TIMS to non-Unicode systems|
|4.34.4 [L]|2016-04-20|RFCServer|Re-added support for iDocs (NW)|
|4.34.3 [L]|2016-04-20|General|Fix for deadlock by incoming RFC server calls during tRFC client call (NW)|
|4.34.2 [L]|2016-04-20|RFC Client|Fix for manually generated TIDs (NW)|
|4.34.1 [M]|2016-04-19|General|Fix for tables in import/export/changing parameters, STRING/XSTRING components in structures, deep structures etc. (NW)|
|4.34.0 [M]|2016-04-18|General|Re-added support for tables in import/export/changing parameters, STRING/XSTRING components in structures, deep structures etc. (NW)|
|4.33.3 [L]|2016-04-08|RFC Client|Fix for X characters in measures of BW queries|
|4.33.2 [L]|2016-04-07|General|Fix for dev_rfc.trc files (NW)|
|4.33.1 [L]|2016-04-07|RFCServer|Fix for error handling / ABAP exceptions (NW)|
|4.33.0 [L]|2016-04-07|RFCServer|Added support for multiple parallel RFC servers in same process (NW)|
|4.32.0 [L]|2016-03-24|RFCServer|Re-added support for non-Unicode RFC server (NW)|
|4.31.4 [L]|2016-03-23|RFCServer|Fix for garbage collection of static delegates (NW)|
|4.31.3 [L]|2016-03-23|RFCServer|Fix for empty imports/exports/tables (NW)|
|4.31.2 [L]|2016-03-23|RFCServer|Fix for imports (NW)|
|4.31.1 [L]|2016-03-23|RFCServer|Fix for logging (NW)|
|4.31.0 [L]|2016-03-21|General|Client fully supports multi-threading with both Classic and NetWeaver libraries|
|4.30.0 [L]|2016-03-18|General|New implementation of RFC library interfaces. ERPConnectNWxy.dll is no longer needed.|
|4.29.0 [M]|2016-01-07|NWRFC|NWException now derives from ERPException. Added INWException interface|
|4.28.5 [L]|2015-10-12|General|In case of 0 records the IncomingPackage event was fired twice accidently when using the ReadTable class|
|4.28.4 [M]|2015-09-29|General|Fix for XSTRING import parameters (NWRFC)|
|4.28.3 [L]|2015-09-28|LINQtoERP|Added UnicodeAdjustment flag to VS2015 ERP context file  to support different unicode SAP systems (UC/NonUC) with one auto-generated context class.|
|4.28.2 [L]|2015-09-28|LINQtoERP|Added UnicodeAdjustment flag to VS2013 ERP context file  to support different unicode SAP systems (UC/NonUC) with one auto-generated context class.|
|4.28.1 [L]|2015-09-28|LINQtoERP|Added UnicodeAdjustment flag to VS2012 ERP context file  to support different unicode SAP systems (UC/NonUC) with one auto-generated context class.|
|4.28.0 [M]|2015-09-22|General|Added support for XSTRING import parameters (NWRFC)|
|4.27.10 [L]|2015-09-16|LINQtoERP|Updated BWCube code generation to support row indexes instead of names (VS2015).|
|4.27.9 [L]|2015-09-16|LINQtoERP|Updated BWCube code generation to support row indexes instead of names (VS2013).|
|4.27.8 [L]|2015-08-30|LINQtoERP|Updated LINQtoERP 2015 support.|
|4.27.7 [M]|2015-08-19|General|dev_rfc.trc files which contain only messages about changing the global trace directory are not generated any more (NW RFC)|
|4.27.6 [L]|2015-08-08|LINQtoERP|Added CommitWork and RollbackWork methods to ERPDataContext for LINQtoERP.|
|4.27.5 [L]|2015-08-04|LINQtoERP|Added LINQtoERP support to Visual Studio 2015.|
|4.27.4 [L]|2015-08-04|RFCServer|Fixed tracing (NWRFC)|
|4.27.3 [L]|2015-07-28|General|Updated support client to 10.0.43879.0 and added shortcut|
|4.27.2 [L]|2015-07-21|RFC Client|Fix for cookies (SOAP)|
|4.27.1 [L]|2015-07-21|General|Fix for sending integers & floats to big endian systems|
|4.27.0 [L]|2015-07-14|RFCServer|Added support for non-Unicode destinations on big endian systems|
|4.26.3 [L]|2015-07-02|General|Added flag for BW DATS datatypes|
|4.26.2 [L]|2015-05-15|LINQtoERP|Updated property naming in LINQ code generation to suppress names starting with underscore|
|4.26.1 [L]|2015-05-15|Idoc|Bug fix for escaping // characters in SavePlainData function|
|4.26.0 [L]|2015-05-06|RFC Client|Removed R3Connection.IsBusy (has been marked as obsolete since 27.03.2014)|
|4.25.0 [L]|2015-05-06|RFC Client|Marked ClientProtocol.HttpSoap as obsolete|
|4.24.6 [L]|2015-04-30|General|Correction for using BWCube.RefreshMetaData() with queries that contain structures|
|4.24.5 [M]|2015-04-27|RFCServer|Fix for invalid unicode characters with dispatcher service|
|4.24.4 [L]|2015-04-17|General|Fix for sending integers & floats in tables to big endian systems|
|4.24.3 [L]|2015-04-13|General|Property ReadTable.RowSkips is not ignored anymore when using packaging|
|4.24.2 [L]|2015-03-23|General|Improved release of unmanged resources (NW RFC)|
|4.24.1 [L]|2015-03-23|General|Added some internal checks (NW RFC)|
|4.24.0 [L]|2015-03-19|General|Concurrent calls from different AppDomains within the same process are no longer supported (classic RFC)|
|4.23.11 [L]|2015-03-17|General|Another fix for multiple AppDomains in the same process (classic RFC)|
|4.23.10 [M]|2015-03-02|RFC Client|Fix for receiving STRING values|
|4.23.9 [L]|2015-03-02|RFC Client|R3Connection.GetSSOTicket() and R3Connection.OpenSSO() are now supported for use with NW RFC library|
|4.23.8 [L]|2015-03-02|RFC Client|Improved exception message in case of invalid property values|
|4.23.7 [L]|2015-03-02|RFC Client|Fix for R3Connection constructor (SOAP)|
|4.23.6 [L]|2015-02-26|General|Improved handling for structures in BW Queries|
|4.23.5 [L]|2015-02-18|General|Fix for multiple AppDomains in the same process (classic RFC)|
|4.23.4 [L]|2015-02-17|LINQtoERP|Add logic to support OData query options $top, $skip and $count.|
|4.23.3 [L]|2015-01-26|RFC Client|Correction for BW.MDXExecuter class. Dataset object was not disposed correctly in BW which lead to increased memory consumption in BW|
|4.23.2 [L]|2015-01-22|General|Added UAC manifest to installer|
|4.23.1 [L]|2015-01-16|RFCServer|Bug fix for persisting RFCServerFunction objects with INT2 data types|
|4.23.0 [L]|2014-12-10|RFC Client|Added support for X.509 client certificates (classic RFC, NW RFC)|
|4.22.17 [L]|2014-12-09|RFC Client|Fix for integer/float export parameters and big endian systems (classic RFC)|
|4.22.16 [L]|2014-12-01|General|Fix for STRING/XSTRING in export parameters (classic RFC, broken since 4.22.9)|
|4.22.15 [L]|2014-11-25|RFCServer|Fix for codepages (classic RFC, partially broken since 4.22.9)|
|4.22.14 [L]|2014-11-11|LINQtoERP|Added Web API OData support for simple string comparison filter functions in LINQ provider.|
|4.22.13 [L]|2014-11-11|LINQtoERP|Added support for String.Compare method in LINQ provider.|
|4.22.12 [L]|2014-11-11|General|Fix for loading INT2 values from XML (broken since 4.22.10)|
|4.22.11 [M]|2014-11-04|RFCServer|New lines of tables were appended in reverse order (classic RFC)|
|4.22.10 [L]|2014-10-28|General|Changed type mapping for INT2 from int to short|
|4.22.9 [L]|2014-10-20|General|All data conversion is performed by ERPConnect now (classic RFC)|
|4.22.7 [L]|2014-10-13|General|Correction for line feed symbols in OLAP cells|
|4.22.6 [L]|2014-10-09|Idoc|Correction for escaping special characters when saving/loading IDoc data from plain files |
|4.22.5 [L]|2014-09-25|RFC Client|Connection is closed properly when receiving an SSO ticket|
|4.22.4 [L]|2014-09-23|General|Lowered probability of name collisions for XML trace files|
|4.22.3 [L]|2014-09-16|General|Fix for assigning localized strings (e. g. "23,5") to numeric parameters / structure elements (was broken since 4.19.3)|
|4.22.2 [M]|2014-09-16|RFC Client|Improved error message for conversion errors before sending values to SAP|
|4.22.1 [L]|2014-09-16|General|Fix for range check of BCD values|
|4.22.0 [M]|2014-09-07|RFC Client|New algorithm for creating TIDs|
|4.21.1 [L]|2014-09-07|RFC Client|Fix for manually created string TIDs with less than 24 characters|
|4.21.0 [M]|2014-08-26|RFC Client|R3Connection.CreateFunction() now supports ABAP types decfloat16 and decfloat34 (transferred as byte arrays)|
|4.20.4 [L]|2014-08-11|Idoc|Bug fix for using < or > sign in IDoc segment description texts while saving the Schema to an XML file|
|4.20.3 [L]|2014-07-23|General|Bug fix for using MEMBER_CAPTION keyword in MDX with MDXExecuter class|
|4.20.2 [L]|2014-07-18|General|Bug fix when executing MDX and using two properties of different dimensions with the same name|
|4.20.1 [L]|2014-07-15|RFC Client|Fix for deserialization of empty XSTRINGs (RFCFunction.LoadFromXML(), R3Connection.CacheMetadata)|
|4.20.0 [L]|2014-07-15|RFC Client|If SNC is enabled and a password is provided, logon via SNC without SSO is performed (NWRFC only)|
|4.19.3 [L]|2014-07-09|General|Obsolete method ERPException.GetObjectData() withdrawn|
|4.19.2 [L]|2014-07-08|RFC Client|SOAP requests are compressed with gzip if they exceed 8192 bytes, Accept-Encoding: gzip is sent|
|4.19.1 [L]|2014-07-08|RFC Client|SOAP request/response logs are written to R3Connection.LogDir now instead of working directory|
|4.19.0 [L]|2014-06-30|RFC Client|Added XML tracing for SOAP connections|
|4.18.4 [L]|2014-06-25|General|Bug fix for using MDXExecuter class with packaging but without MEMBER_CAPTION addition in MDX|
|4.18.3 [L]|2014-06-24|General|Invalid control characters (XML 1.0) are dropped when building XML for SOAP and RfcServerFunction.SaveToXML()|
|4.18.1 [L]|2014-06-20|LINQtoERP|Added support for IDoc Send methods with TID parameter in LINQtoSAP; updated escaping logic for IDoc descriptions|
|4.18.0 [L]|2014-06-03|RFC Client|Added support for table types in RFCFunction.Imports (SOAP)|
|4.17.21 [L]|2014-05-20|General|NWErrorInfo is now marked with SerializableAttribute|
|4.17.20 [L]|2014-05-19|General|Correction for query API in case of multiple, internal lists |
|4.17.19 [L]|2014-05-13|General|New implementation for passing RFCTYPE.BYTE values as hexadecimal strings|
|4.17.18 [M]|2014-05-08|General|Fix for non-unicode systems (NW RFC)|
|4.17.17 [M]|2014-05-06|RFC Client|Fix for system numbers 1 to 9 (NW RFC)|
|4.17.16 [L]|2014-04-24|General|Added constructor RFCTable(string name, RFCTableColumnCollection columns)|
|4.17.15 [L]|2014-04-17|RFC Client|Fix for sending Table parameters to big endian systems|
|4.17.14 [L]|2014-04-17|General|Strong name signature for ERPConnectNW40_x86.dll was missing|
|4.17.13 [L]|2014-04-15|General|All data conversion/parsing of Table parameters is now performed by ERPConnect instead of the classic RFC SDK.|
|4.17.12 [L]|2014-04-10|General|Updated logic to set MaxLength property for result data tables in XtractQL.|
|4.17.11 [L]|2014-04-08|RFC Client|Reverted changes from 4.17.10|
|4.17.10 [L]|2014-04-03|RFC Client|Fix for receiving INT in table parameters from big endian systems (classic RFC)|
|4.17.9 [L]|2014-04-03|General|Disabled code signing for ERPConnect DLLs (signature check leads to high latency in some cases)|
|4.17.8 [L]|2014-03-27|RFC Client|Temporarily re-added R3Connection.IsBusy (deprecated, will be removed again)|
|4.17.7 [L]|2014-03-25|RFC Client|R3Connection.Close() does not throw exceptions anymore (SOAP)|
|4.17.6 [L]|2014-03-25|General|ERPConnect DLLs are signed now|
|4.17.5 [L]|2014-03-24|General|Added support for SAP Codepage 6300 (Eurojapan)|
|4.17.1 [H]|2014-01-16|General|Fix for negative INT2 values (classic RFC)|
|4.17.0 [L]|2014-01-07|RFC Client|Added support for connection strings (NW RFC)|
|4.16.0 [L]|2014-01-07|RFC Client|Added XML logging (NW RFC)|
|4.15.2 [L]|2014-01-07|RFC Client|Fix for missing BCD values (NW RFC)|
|4.15.1 [L]|2013-12-16|LINQtoERP|Fixed bug with manifest file for LINQ to SAP.|
|4.15.0 [L]|2013-12-16|LINQtoERP|LINQ to SAP now supports Visual Studio 2013.|
|4.14.2 [M]|2013-12-10|General|Fix for include structures (calculated offsets were wrong in some cases)|
|4.14.1 [L]|2013-12-04|General|Fix for XML unescaping (error introduced in 4.14.0)|
|4.14.0 [L]|2013-12-03|General|New implementation for table types and structures which contain STRING/XSTRING members in Import/Export/Changing parameters (classic SDK)|
|4.13.11 [L]|2013-11-21|General|RFCTable.ToString() returns raw XML even if errors occur|
|4.13.10 [L]|2013-11-18|General|Control characters are now allowed in lines of table type import/export/changing parameters|
|4.13.9 [L]|2013-11-12|General|Added SAP codepage 1610 (ISO 8859-9 Turkish)|
|4.13.8 [L]|2013-11-12|RFC Client|Improved error message for unkown SAP codepage|
|4.13.7 [L]|2013-11-11|General|LIC is sealed now|
|4.13.6 [L]|2013-11-11|General|ReadTableField is sealed now|
|4.13.5 [L]|2013-11-11|General|ReadTable is sealed now|
|4.13.4 [L]|2013-11-11|General|RFCParameterCollection is sealed now|
|4.13.3 [L]|2013-11-11|General|RFCStructureCollection is sealed now|
|4.13.2 [L]|2013-11-11|General|RFCStructureCollection no longer implements ITypedList|
|4.13.1 [L]|2013-11-11|General|RFCTable no longer implements ITypedList, IBindingList|
|4.13.0 [L]|2013-11-11|General|RFCStructure no longer implements ICustomTypeDescriptor, IEditableObject  |
|4.12.9 [L]|2013-10-31|Idoc|Fix for using LoadIdocSchema() function with segment suffix of more than 3 characters (e.g. _001)|
|4.12.8 [L]|2013-10-24|RFC Client|R3Connection.UseGui works with NW RFC SDK now|
|4.12.7 [L]|2013-10-18|General|Correction for ReadTable class when using PrimaryKeyPackaging|
|4.12.6 [L]|2013-10-15|RFC Client|R3Connection.UserName and R3Connection.Password are no longer ignored if SNC is used|
|4.12.5 [L]|2013-10-08|RFC Client|Improved error message if SetAbapDebug() is called on invalid R3Connection objects|
|4.12.2 [L]|2013-09-17|General|Fix for tracing|
|4.12.1 [L]|2013-09-10|RFC Client|Fix for EBCDIC systems|
|4.12.0 [L]|2013-09-06|SNC|Added SNC support RFC Server (classic RFC SDK)|
|4.11.6 [L]|2013-09-03|NWRFC|Fix for ERPConnectNW35 and ERPConnectNW40 assembly version numbers|
|4.11.5 [L]|2013-07-12|General|ERPConnectNW can be installed to GAC now|
|4.11.4 [L]|2013-07-10|General|Exception message is more informative now if NetWeaver RFC libraries are used |
|4.11.3 [L]|2013-07-03|General|Added 32-bit support for NW RFC API|
|4.11.2 [L]|2013-07-03|RFCServer|Implemented RFCServer.Ping() over NW RFC API|
|4.11.1 [L]|2013-07-03|RFC Client|Implemented R3Connection.Ping() over NW RFC API|
|4.11.0 [L]|2013-06-28|RFCServer|Added support for tRFC over NW RFC API|
|4.10.15 [L]|2013-06-28|General|Added RFCAPI.RequestWaitTime and RFCAPI.SynchronizationEnabled for classic RFC SDK performance tuning|
|4.10.14 [L]|2013-06-28|General|Improved call times for classic RFC SDK|
|4.10.13 [L]|2013-06-28|General|Property DecimalSeparator of MDXExecuter class is withdrawn. It's not necessary anymore to set this value.|
|4.10.12 [L]|2013-06-21|RFC Client|Added support for tRFC over NW RFC API|
|4.10.11 [L]|2013-06-21|General|System.Byte, System.Int16 and System.Int64 can now also be used for integer parameters |
|4.10.10 [L]|2013-06-21|General|IDisposable interface was removed from ReadTable class because it's not necessary anymore|
|4.10.8 [L]|2013-06-20|General|BCD values in tables are now initialized to 0 for new rows|
|4.10.7 [L]|2013-06-17|RFC Client|Fix for default values for DATS parameters that have an invalid date (e.g. L_TO_CREATE_SINGLE)|
|4.10.6 [L]|2013-06-12|Idoc|Added support for IDocs over NW RFC API|
|4.10.5 [L]|2013-06-12|General|Added support for nested tables and structures for NW RFC API|
|4.10.4 [L]|2013-06-12|General|Fix for MDX statements that result in non-unique column names|
|4.10.3 [L]|2013-06-09|RFC Client|Added Contains() function to parameter collection to check, if a parameter is available after creating the RFCFunction object with CreateFunction()|
|4.10.2 [L]|2013-06-05|RFC Client|Fix for receiving tables over NW RFC API|
|4.10.1 [L]|2013-06-05|RFC Client|Added support for sending tables over NW RFC API|
|4.10.0 [L]|2013-06-04|RFCServer|Added support for NW RFC API|
|4.9.2 [L]|2013-06-04|General|Better Exception in case MDXExecuter or BWCube classes receive an error from SAP|
|4.9.1 [L]|2013-05-22|RFCServer|Fix for IDocs|
|4.9.0 [L]|2013-05-21|RFCServer|Added full support for parallel RFCServers in the same application domain|
|4.8.11 [L]|2013-05-15|NWRFC|Added support for BCD, STRING and XSTRING|
|4.8.10 [L]|2013-05-14|RFCServer|Authorization can now be checked via Authorizing event before accepting a function call |
|4.8.9 [L]|2013-05-13|RFCServer|Added UnknownIncomingFunction event to RFCServer to enable adding items to RegisteredFunctions collection dynmically.|
|4.8.8 [L]|2013-05-08|General|Fix and improvements for encodings and byte order|
|4.8.7 [L]|2013-05-01|RFCServer|BCD in tables were not sent correctly in some cases since version 4.7.2|
|4.8.6 [L]|2013-04-30|RFCServer|Some fixes for big endian systems|
|4.8.5 [L]|2013-04-29|General|Default values of parameters of type BYTE were wrong since 4.7.0|
|4.8.4 [L]|2013-04-25|RFCServer|Fix for InternalException event (was not fired in some cases since 4.7.1)|
|4.8.3 [L]|2013-04-25|General|Fix for non-existent/inactive includes in structures/tables|
|4.8.2 [L]|2013-04-24|RFCServer|Fix for RFCServer with big endian systems (Integers & Float)|
|4.8.1 [L]|2013-04-22|General|Libraries for NetWeaver RFC SDK support are loaded dynamically only when needed|
|4.8.0 [L]|2013-04-22|General|Changed NetWeaver RFC SDK support from one library to dedicated libraries for each .NET Framework version|
|4.7.3 [L]|2013-04-21|General|R3Connection.Ping() was returning inverse value since 4.7.x|
|4.7.2 [L]|2013-04-12|General|New implementation for BCD/Decimal conversion|
|4.7.1 [L]|2013-04-12|RFCServer|New internal implementation of RFCServer|
|4.7.0 [L]|2013-04-12|General|Added synchronization for classic RFC SDK API calls|
|4.6.9 [L]|2013-04-08|Idoc|TEST flag was not transmitted correctly when sending IDocs|
|4.6.8 [L]|2013-04-04|General|Bugfix in IDisposable implementation (ReadTable class).|
|4.6.7 [L]|2013-04-03|LINQtoERP|Updated logic to display additional error information when SAP object structures are created within the LINQ designer.|
|4.6.6 [L]|2013-03-28|General|Bug fix for R3Connection.Clone() function used together with SNC|
|4.6.5 [L]|2013-03-25|General|Updated IDisposable interface logic in a couple of RFC classes to pass MSOCAF code analysis.|
|4.6.4 [L]|2013-03-25|RFCServer|Improved multithreading behaviour when using RFCServer class|
|4.6.3 [L]|2013-03-19|RFCServer|Improved logging for general errors in RFCServer class when logging is switched on (RFCServer.LogDir is set to valid path)|
|4.6.2 [L]|2013-03-14|General|R3Connection.Close() did not work since 4.6.0 if NetWeaver DLLs were missing even with classic RFC or SOAP |
|4.6.1 [L]|2013-03-12|General|New table lines are zero filled now to avoid random data if actual row contains less columns than defined in metadata|
|4.6.0 [L]|2013-02-28|General|Added support for NetWeaver RFC SDK|
|4.5.33 [L]|2013-02-06|General|Replaced 'obsolete' API calls for table handling with new ones|
|4.5.31 [L]|2013-01-22|General|Added support for floating point components in Imports/Exports/Changings structures with big endian systems|
|4.5.30 [L]|2013-01-18|General|Added HTML5 web demos to the samples VS2012 folder.|
|4.5.29 [L]|2013-01-17|General|Fix for CreateFunction() for older SAP releases (bug accidentally introduced in 4.5.21)|
|4.5.28 [L]|2013-01-10|General|Added structure alignment calculation for includes|
|4.5.26 [L]|2013-01-08|General|Added support for integer components in export structures with big endian systems|
|4.5.25 [L]|2013-01-07|LINQtoERP|Bugfix for LINQToERP when installing for Visual Studio 2010 in French language|
|4.5.24 [L]|2012-12-27|General|New property MDXExecuter.MaxRows introduced to be used to limit the number of rows|
|4.5.22 [L]|2012-12-06|General|Fix for integer table row members with big endian systems|
|4.5.21 [L]|2012-12-05|General|Fix for integer import structure members with big endian systems|
|4.5.20 [L]|2012-12-05|General|Bugfix for MDXExecuter class when packaging is turned on and no measure is selected in MDX|
|4.5.19 [L]|2012-12-05|General|Bugfix for MDXExecuter class when using MEMBER_UNIQUE_NAME within MDX statement|
|4.5.18 [L]|2012-12-05|General|Bugfix for certain MDX statements used with MDXExecuter class|
|4.5.17 [L]|2012-11-20|General|Fix for R3Connection.Ping() and ERPDataContext.Dispose()|
|4.5.16 [L]|2012-10-31|General|Correction for misleading error message when using BWCube class with packaging while an empty resultset is returned from SAP|
|4.5.15 [L]|2012-10-25|LINQtoERP|Updated logic in code generation for SAP queries (MaxRows setting) of the LINQ designers.|
|4.5.14 [L]|2012-10-16|General|Performance tweak for character-like values in tables/structures|
|4.5.11 [L]|2012-10-05|General|Performance tweaks for tables/structures |
|4.5.10 [M]|2012-10-04|General|Fix for memory leaks in R3Connection.ConfirmTID() and RFCFunction.Execute(tid)|
|4.5.9 [L]|2012-09-19|General|Fix for parameters which use a projection view as data type|
|4.5.8 [L]|2012-09-15|Idoc|Idoc.SendAndWait() returned the wrong value. This is fixed now. In case of succes true is returned.|
|4.5.7 [L]|2012-09-11|General|Fix for ERPException.ABAPException with Changing parameters (was always null since 4.5.1.x)|
|4.5.6 [L]|2012-09-01|General|Removed Support for UseWrapper function of RFCFunction object|
|4.5.5 [L]|2012-09-01|General|Removed Support for AskUserAndOpen() function of R3Connection object|
|4.5.4 [L]|2012-09-01|General|Added support for loading and saving RFCServerFunction objects from/to an XML string|
|4.5.3 [L]|2012-09-01|General|Added support for unknown dimensions in BWCube (dimension type 0)|
|4.5.2 [L]|2012-09-01|General|Added support for non-aggregation dimensions in BWCube (dimension type 4)|
|4.5.1 [L]|2012-09-01|General|Improved support for changing parameters|
|4.5.0 [L]|2012-09-01|General|First build for Release 4.5 with Support for .NET 4.5 and Visual Studio 2012|
|4.2.19 [L]|2012-07-04|General|License reactivation|
|4.2.18 [L]|2012-06-21|General|All trace files can be configured via R3Connection.Logging and R3Connection.LogDir now|
|4.2.17 [L]|2012-05-18|RFCServer|Fix for parallel RFC function call handling|
|4.2.16 [L]|2012-05-15|General|Import params with a default value and data type DATS were not set correctly|
|4.2.15 [L]|2012-05-08|LINQtoERP|Fixed bug in IDOC code generation (String data types und double quotes).|
|4.2.14 [L]|2012-05-06|LINQtoERP|Fixed bug in IDOC code generation in UpdateChildSegmentList method (ChildSegments) and extended reserved names list for VB.NET.|
|4.2.13 [L]|2012-04-26|LINQtoERP|Fixed bug in code generation for skipped properties.|
|4.2.12 [L]|2012-04-24|General|Updated Function Template Generator to .NET 2.0|
|4.2.11 [L]|2012-04-24|RFCServer|XML traces are now written to log directory if logging is enabled|
|4.2.10 [L]|2012-04-03|RFCServer|Calls on multiple RFCServers were not processed in parallel since version 4.2.2.0|
|4.2.9 [L]|2012-03-13|Idoc|Fix for missing segment values in some cases if schema and XML data were loaded|
|4.2.8 [L]|2012-03-07|Idoc|Saving and loading plain text now supports segment values with new lines|
|4.2.7 [M]|2012-01-26|General|Changed R3Connection.Ping() to avoid "Attempt to read or write protected memory" error which occurred at arbitrary times|
|4.2.6 [L]|2011-12-15|General|BWCube works with queries without dimensions now....|
|4.2.5 [L]|2011-11-29|General|Fix for crash at BWCube.CreateCube() function when using with certain SAP BW patch levels|
|4.2.4 [L]|2011-11-29|General|Added property R3Connection.UsesLoadBalancing|
|4.2.3 [L]|2011-11-24|SNC|Moved SNC properties to separate class, added QoP property|
|4.2.2 [L]|2011-11-21|RFCServer|Fix for multiple RFCServers with multiple threads|
|4.2.1 [L]|2011-11-21|RFCFunction.Tables|Workaround for missing data at the end of some very wide table lines (librfc32.dll bug)|
|4.2.0 [M]|2011-10-17|General|Added support for new OLAP BAPIs in the classes BWCube and MDXExecuter (see property UseNewOlapBapis for details), see SAP note 1232751|
|4.1.59 [L]|2011-09-28|General|Added properties for SNC authentication to R3Connection class|
|4.1.58 [L]|2011-08-22|General|Extension for MDXExecuter class to include the measure's units in the resultset|
|4.1.57 [L]|2011-08-19|General|Idoc.SaveXMLData() saves values without trailing spaces|
|4.1.56 [L]|2011-08-17|General|R3Connection closes connection to SAP when disposed/finalized|
|4.1.55 [L]|2011-08-12|General|RFCServer.LogDir is also used for RFC traces now|
|4.1.54 [L]|2011-08-04|General|Fix for RFCFunction.LoadFromXML() and characters with enconding value < 0x20|
|4.1.53 [L]|2011-08-03|General|Added XML logging for tRFC calls|
|4.1.52 [L]|2011-08-03|General|R3Connection.LogDir is also used for RFC traces now|
|4.1.51 [L]|2011-07-19|General|Fix for missing Messages resource in ERPConnect40.dll|
|4.1.50 [L]|2011-07-19|General|Workaround for librfc32 bug with SAP EBCDIC code page 0700|
|4.1.49 [L]|2011-07-19|General|Fix for SAP EBCDIC code page 0700|
|4.1.48 [L]|2011-07-07|General|Added support for pooled tables in function modules|
|4.1.47 [L]|2011-06-29|General|Fix of small memory leak in R3Connection.Ping()|
|4.1.46 [L]|2011-06-29|General|Added connection string for SOAP|
|4.1.45 [L]|2011-06-22|General|Bugfix for BCD values in tables|
|4.1.44 [L]|2011-06-14|General|Bugfix for BCD values in certain system environments|
|4.1.43 [L]|2011-05-02|General|Licence reactivation|
|4.1.42 [L]|2011-03-22|General|Fix for names starting with numbers in Table Types|
|4.1.41 [L]|2011-03-11|General|Fix for Greek non-Unicode systems (SAP codepage 1700)|
|4.1.40 [L]|2011-03-02|General|Idoc.LoadIdocSchema() and Idoc.SaveIdocSchema() now support names/types containing slashes|
|4.1.39 [L]|2011-03-01|General|Fix for structures with SOAP connections|
|4.1.38 [L]|2011-02-24|General|Added support of table types for changing parameters (limited data volume)|
|4.1.37 [L]|2011-02-23|General|Added ITAB support to changing parameters of function modules in LINQ to SAP (only VS2010), but this is currently not supported by ERPConnect|
|4.1.36 [L]|2011-02-09|General|Idoc.SaveXMLData() and Idoc.LoadXMLData() now support Message Types and Segment Names containing slashes|
|4.1.35 [L]|2011-02-06|General|Fix: MessageType (MEYTYP) was set incorrectly when loading IDoc schemas|
|4.1.34 [L]|2011-02-01|General|Added support for Japanese language in LINQToERP setup|
|4.1.33 [L]|2011-01-25|General|Added new logic to differentiate the target .NET version while adding a new ERP file in LINQ to SAP (LINQToERPVS project with IWizard interface)|
|4.1.32 [L]|2011-01-11|General|Fix for Reuse Classes logic for function modules (with nested structures) in LINQ to SAP|
|4.1.31 [L]|2011-01-04|General|Fix for MDX queries with hierarchies to be executed with MDXExecuter class|
|4.1.30 [L]|2010-12-15|General|Fix for RFCFunction XML loading with slashes in parameter names |
|4.1.29 [L]|2010-12-14|General|Fix for LINQ to SAP in Korean Visual Studio|
|4.1.28 [L]|2010-12-07|General|Added new Add(ItemStructure) method in Table object to support serialization (e.g. for WebServices) in LINQ to SAP (only VS2010)|
|4.1.27 [L]|2010-12-01|General|Fix for non-ASCII characters in structures with STRING/XSTRING components/table types on non-Unicode systems|
|4.1.26 [L]|2010-11-23|General|Added support for table types with key components|
|4.1.25 [L]|2010-11-18|General|Improved XML logging of RFC_SYSTEM_INFO, fix for SAP_BASIS 72L|
|4.1.24 [L]|2010-11-17|General|Fix for fetching metadata on systems with SAP_BASIS 72L|
|4.1.23 [L]|2010-11-16|General|Fix for ReadTable extraction with more than 20 mio rows|
|4.1.22 [L]|2010-11-08|General|Increased performance of ConversionUtils.SAPDate2NetDate() for invalid SAP date values|
|4.1.21 [L]|2010-10-11|General|Fix for IdocSchemaGenerator for SAP user names that contain a blank|
|4.1.20 [L]|2010-10-08|General|Fix for manually created nested parameters if offsets & structure lengths are not set manually|
|4.1.19 [L]|2010-10-05|General|All assemblies are signed now|
|4.1.18 [L]|2010-10-05|General|Changed modifiers of RFCTableColumn.IsNonStructureLineType and RFCTableColumnCollection.Align() to public for manual creating of some types of structures|
|4.1.17 [L]|2010-09-30|General|Added nested structure and table support for LINQ to SAP (only VS2010)|
|4.1.16 [L]|2010-09-20|General|Fix for CreateFunction() with SAP 4.7 systems|
|4.1.15 [L]|2010-09-20|General|Corrected typo: R3Connection.SetAbabDebug() is now R3Connection.SetAbapDebug()|
|4.1.14 [L]|2010-09-20|General|Added Property R3Connection.PartnerRelease|
|4.1.13 [L]|2010-09-19|General|Fixed resizing bug in SQP Query dialog for LINQ to SAP (VS2008 and VS2010)|
|4.1.12 [L]|2010-09-15|General|Improved error message for metadata parsing failures|
|4.1.11 [L]|2010-09-13|General|Fix for CreateFunction() with ECC5.0 and older systems|
|4.1.10 [L]|2010-09-09|General|Another fix for structures with includes|
|4.1.9 [L]|2010-09-02|General|Fix for structures with includes|
|4.1.8 [L]|2010-09-02|General|Fix for IntegerType intial value (RFCServer)|
|4.1.7 [L]|2010-09-02|General|Fix for manually created structures with alignment gaps|
|4.1.6 [L]|2010-09-02|General|Fixes for SaveToXml (control characters & Tables collection)|
|4.1.4 [L]|2010-08-26|General|Fix for manually created tables|
|4.1.3 [L]|2010-08-25|General|Bugfix for Thai characters in non-Unicode systems|
|4.1.2 [L]|2010-08-23|General|Bugfix for certain Hebrew Characters in non-unicode SAP systems|
|4.1.1 [L]|2010-08-23|General|Added RowSkip and RowCount display to LINQ logging (ERPTable)|
|4.1.0 [L]|2010-08-20|General|Added API support for nested Structures and Tables, misc. fixes|
|4.0.12 [L]|2010-08-15|General|New feature (CreateObjectsOutsideOfContextClass) for LINQtoERP (only VS2010)|
|4.0.11 [L]|2010-06-01|General|Fix for RFC Wrapper with BDC columns within a table|
|4.0.10 [L]|2010-05-12|General|Fix for XSTRING parameters in RFCServer|
|4.0.9 [L]|2010-05-12|General|Option is available for LINQ classes to be partial|
|4.0.8 [L]|2010-05-08|General|R3Connection.IsUnicode is writeable for PI systems|
|4.0.7 [L]|2010-05-07|General|Fix for ITAB in STRUCTURE.|
|4.0.6 [L]|2010-05-06|General|Fix for code generation with LINQ under VS 2010 and VB.net|
|4.0.5 [L]|2010-05-05|General|Fix for BW queries with a name that starts with a slash|
|4.0.4 [L]|2010-04-30|General|Fix for using WITH statement together with MDXExecuter class|
|4.0.3 [L]|2010-04-28|General|Fix for strings with 0-characters in SAP PI|
|4.0.2 [L]|2010-04-22|General|Second fix for integer types on Unix servers|
|4.0.1 [L]|2010-04-19|General|Fix for OutOfMemory-exception with certain UNIX-based SAP ERP-kernels|
|4.0.0 [L]|2010-04-15|General|Switching to .NET 4 and VS2010 and creating of ERPConnectVS2010 folder|
|3.0.153 [L]|2010-04-15|General|Fix for an Integer Bug under Unix SAP system with certain patch levels|
|3.0.152 [L]|2010-04-08|General|Bugfix for STRING Import parameters in RFCServer|
|3.0.151 [L]|2010-04-08|General|Corrected memory deallocation for RFCServer Export parameters|
|3.0.150 [L]|2010-04-06|General|Improvement for connecting to external gateway servers (Connection Type E)|
|3.0.149 [L]|2010-03-10|General|Improved checking and error message if ERPConnect is used without a proper librfc32.dll|
|3.0.148 [L]|2010-02-16|General|Adjustment for Visual Studio 2010 RC (LINQ Designer)|
|3.0.147 [L]|2010-02-08|General|Fix für MDX queries that contain NULL values in their measure's cells|
|3.0.146 [L]|2010-02-06|General|Preparations for Visual Studio 2010|
|3.0.145 [L]|2010-02-02|General|Bugfix for RAW values when using SOAP instead of RFC|
|3.0.144 [L]|2010-02-01|General|Small improvement for multi nested export structures (e.g. SXMSADMINRESULT)|
|3.0.143 [L]|2010-01-28|General|Bugfix fpr Queries with mixed Chinese and Western characters|
|3.0.142 [L]|2010-01-20|General|Bugfix for BCD values in deep structures (e.g. in SXMB_GET_MESSAGE_LIST)|
|3.0.141 [L]|2010-01-20|General|Internal code review|
|3.0.140 [L]|2010-01-12|General|Bugfix for BWCube class when using properties with special characters in the caption value while persisting the object to XML (SaveToXML method)|
|3.0.139 [L]|2009-12-29|General|Byte[] values are handled correctly when converting an RFCTable object to a DataTable object with the usage of ToADOTable()|
|3.0.138 [L]|2009-12-18|General|Updated SAPDate2NetDate to handle "00000000" and "99999999" values|
|3.0.137 [L]|2009-12-16|General|Fix for special characters in the description texts for table columns under LINQ|
|3.0.136 [L]|2009-12-16|General|Reference to System.Web does not longer exist. So it's easier to handle ERPConnect within the SQL Server CLR|
|3.0.135 [L]|2009-12-16|General|Improvement / bugfixes for sessions handling when using SOAP instead of RFC|
|3.0.134 [L]|2009-12-15|General|Bugfix for multi-nested structures in the Imports collection, that contain only one single element within the structure|
|3.0.133 [L]|2009-12-15|General|Fix: R3Connection.CacheMetaData was not working properly in some situations.|
|3.0.132 [L]|2009-12-14|General|Fix for apostrophe characters within the column decription of an SAP table used in LINQ dialog|
|3.0.131 [L]|2009-12-14|General|Fix: Queries with obligatory parameters caused an exception when the parameter was set through a variant|
|3.0.130 [L]|2009-12-14|General|Fix for logon data that contains a ; character in the UserName property|
|3.0.129 [L]|2009-12-11|General|Automatic removal of Xml declaration when ParamValue of Table Type parameters is set to a string|
|3.0.128 [L]|2009-12-08|General|Fix for multi-nested export parameters under SOAP (no impact on RFC protocol)|
|3.0.127 [L]|2009-12-02|General|Fix for ABAP type v within a structure (multiple table types within a structure)|
|3.0.126 [L]|2009-11-23|General|Fix for Multiple Single variables in the LINQ dialogs for BW queries|
|3.0.125 [L]|2009-11-19|General|Added support for IDoc enhancements in LINQ|
|3.0.124 [L]|2009-11-13|General|Added support for all BMP Unicode Characters in Table Type Import/Export Parameters|
|3.0.123 [L]|2009-11-05|General|Fix for multi-nested import parameters under SOAP (no impact on RFC protocol)|
|3.0.122 [L]|2009-11-03|General|: Correction for XSTRING parameters within ERPConnect Pocket |
|3.0.121 [L]|2009-10-19|General|The IDoc receiver now also supports very old 3.X IDoc formats|
|3.0.120 [L]|2009-10-13|General|Fix for DATS and TIMS Export parameters with Unicode RFC Servers|
|3.0.119 [L]|2009-10-08|General|Fix for memory leak when using multi nested XML based export parameters|
|3.0.118 [L]|2009-10-08|General|Data type XSTRING does not lead to exceptions anymore when using the pocket dll (ERPConnectPocket20.dll)|
|3.0.117 [L]|2009-10-06|General|Fix: BWCube.RefreshMetaData didn't refresh the variables collection properly|
|3.0.116 [L]|2009-10-05|General|New Method Transaction.SetCustomFunctionName(...) for customers who want to implement their own transaction RFCs|
|3.0.115 [L]|2009-10-05|General|RFCFunction with SOAP: Fix for import / export values that contain XML escape sequences (e.g. &amp;)|
|3.0.114 [L]|2009-09-09|General|BWCube.RefreshMetaData crashed under some BW releases|
|3.0.113 [L]|2009-08-30|General|Correction for for AutoCloseConnection property of LINQ context, which did not work properly in some cases|
|3.0.112 [L]|2009-08-27|General|Additional properties for Table LINQ object: Description Text in designer item and multibyte / non-unicode support|
|3.0.111 [L]|2009-08-19|General|Property AutoCloseConnection added to the LINQ context class, which can be used to avoid automatic closing of the SAP connection|
|3.0.110 [L]|2009-08-17|General|Improvement in behaviour for multiple LINQ queries with multiple WHERE statements|
|3.0.109 [L]|2009-08-13|General|Fix for SSO tickets in certain CRM systems|
|3.0.108 [L]|2009-07-23|General|Added SegmentType and GRP_OCCMAX (as MaxOccur) for class IdocSegment; Changes also to RFCConnection (InternalCreateIdoc)|
|3.0.107 [L]|2009-07-16|General|Idoc-MaxOccur flag was not set correctly when saving and loading XML schemas|
|3.0.106 [L]|2009-07-03|General|Better encoding for transaction IDs when using SAP XI / PI|
|3.0.105 [L]|2009-07-02|General|Transaction ID is better readable (e.g. when sending IDocs)|
|3.0.104 [L]|2009-06-08|General|Internal Fix (Detailed debugging for MDX execution)|
|3.0.103 [L]|2009-06-02|General|Fix for codepage conversion for "ISO-8859-5" characters (e.g.Croatian)|
|3.0.102 [L]|2009-05-29|General|Fix for crash when executing RFCs with internal tables within an export structure|
|3.0.101 [L]|2009-05-19|General|Additional function for inverted date value in the ConversionUtils class|
|3.0.100 [L]|2009-05-04|General|Workaround for 1 byte data loss resulting from incorrect lengths of table columns (datatype raw) in Unicode environments|
|3.0.99 [L]|2009-04-17|General|Fix for LINQ to SAP code generation with complex table elements (IndexOutOfRange exception during execution)|
|3.0.98 [L]|2009-04-16|General|Fix for ToTable() function when RFCParameter class is used with nested XML tables|
|3.0.97 [L]|2009-03-31|General|Internal Performance Improvement for Data Binding of RFCTable objects|
|3.0.96 [L]|2009-03-24|General|SaveToXML(), LoadFromXML() and LoadFromXMLString() now support STRING and XSTRING|
|3.0.95 [L]|2009-03-15|General|Fix for LINQ to SAP: Using the LINQ dialogs under XP with Silver Theme caused strange behaviour|
|3.0.94 [L]|2009-03-12|General|The property SID of the R3Connection class is filled always, even if a connection string is used for logon|
|3.0.93 [L]|2009-03-05|General|Fix: SaveToXML() and LoadFromXML() didn't work properly for function with multi-nested import parameters|
|3.0.92 [L]|2009-03-05|General|Fix for BCD values with small length and no decimals on Chinese systems|
|3.0.91 [L]|2009-03-02|General|LINQ to SAP: Modifier Public / Internal for context class|
|3.0.90 [L]|2009-03-02|General|Fix for LINQ to SAP with RFC function: Offset value is provided during code generation |
|3.0.89 [L]|2009-02-24|General|Fix for LINQ to IDoc (crash in designer with certain description texts)|
|3.0.88 [L]|2009-02-20|General|Logon crashed with passwords containing ; or , characters |
|3.0.87 [L]|2009-02-17|General|Fix for LINQ to IDoc dialog (when a segment's name is a key word of the programming language)|
|3.0.86 [L]|2009-02-16|General|Small fix for RFCServer class and tables (crash when defining a table when no table is provided by SAP)|
|3.0.85 [L]|2009-02-05|General|Fix for structure elements type decimal with more than 11 decimals digits (index must not be zero length exception)|
|3.0.84 [L]|2009-02-04|General|NULL values in IDoc fields are now generating an ERPException |
|3.0.83 [L]|2009-01-30|General|Fix for BWCube: method SaveToXML() crashed with hierarchies that contain a & character|
|3.0.82 [L]|2009-01-29|General|Fix for LINQ: Code generation produced syntax error with parameters that contain a slash in the name|
|3.0.81 [L]|2009-01-18|General|Fix for possible memory leak|
|3.0.80 [L]|2009-01-09|General|Fix for queries: Units are sometimes not properly processed|
|3.0.79 [L]|2009-01-05|General|ERPConnectPocket will always throw ERPException instead of regular Exceptions|
|3.0.78 [L]|2008-12-22|General|Fix for binding LINQ sources to controls: No other columns than the original source columns will appear in control|
|3.0.77 [L]|2008-12-19|General|CreateEmptyIdoc() failed on some systems when using a long IDoc name|
|3.0.76 [L]|2008-12-19|General|Fix for queries with negative integer columns|
|3.0.75 [L]|2008-12-12|General|LINQ to SAP setup now supports Italien version of Visual Studio|
|3.0.74 [L]|2008-12-07|General|Improvement for loading hierarchies with BWLoader class|
|3.0.73 [L]|2008-12-05|General|Fix for queries with more than one list ID|
|3.0.72 [L]|2008-12-04|General|The ISerializable interface is added to the ERPException class (in addition to the Serializable attribute)|
|3.0.71 [L]|2008-11-25|General|ReuseClass flag can be set in LINQ context to enable reuse of generated classes (e.g. two functions that have the same table parameter now can share one single structure class)|
|3.0.70 [L]|2008-11-25|General|Improvement for error messages when conversion errors occur while executing a query|
|3.0.69 [L]|2008-11-25|General|Improvement for RFCServerException handling when throwing an exception during the IncomingIDoc event|
|3.0.68 [L]|2008-11-24|General|New method RefreshMetaData() implemented for BWCube class|
|3.0.67 [L]|2008-11-24|General|Fix: Double columns in MDX resultset when two dimension are to be extracted with properties of the same name|
|3.0.66 [L]|2008-11-07|General|Fix for LINQToERP setup on 64 bit|
|3.0.65 [L]|2008-10-30|General|Bugfix for logging function modules that contain slashes in their name|
|3.0.64 [L]|2008-10-27|General|Bugfix for BW Loader when using Continuation Flag in wide datasets|
|3.0.63 [L]|2008-10-24|General|Automatic name conversion in LINQ when dropping two functions into the same context with structures that are named equally|
|3.0.62 [L]|2008-10-23|General|German special characters (Umlaute) are now correctly converted within nested structures|
|3.0.61 [L]|2008-10-02|General|Fix for SAP codepage 300 and ReadTable class|
|3.0.60 [L]|2008-10-02|General|Fix for structures under LINQ AddOn|
|3.0.59 [L]|2008-09-23|General|Correction for BWCube extraction with MultiSingle variables with default values|
|3.0.58 [L]|2008-09-22|General|Correct date and time conversion when using SOAP XML in mutlinested parameters|
|3.0.57 [L]|2008-09-16|General|Fix: SaveToXML and LoadFromXML crashed with Byte[] parameters|
|3.0.56 [L]|2008-09-15|General|BWCube is now supporting multiple single values|
|3.0.55 [L]|2008-09-11|General|Fix for very big decimals like 111111111111111.111111111111111|
|3.0.54 [L]|2008-09-04|General|LoadBalancing is now supported by the LINQ classes / dialogs|
|3.0.53 [L]|2008-09-02|General|Fix for crash of converting decimal data from SAP to .NET on Chinese systems|
|3.0.52 [L]|2008-08-30|General|Fix for nested structures (table types) in changing parameters|
|3.0.51 [L]|2008-08-29|General|AImproved logging messages for BWLoader class|
|3.0.50 [L]|2008-08-26|General|Another fix for Chinese BCD data|
|3.0.49 [L]|2008-08-26|General|Fix for crash with BCD data types on windows with chinese language settings|
|3.0.48 [L]|2008-08-26|General|Fix for uploading data to more than one single BI InfoPackage at the same time (BWLoader class)|
|3.0.47 [L]|2008-08-20|General|Improved handling for rfc function modules default values|
|3.0.46 [L]|2008-08-20|General|Fix: Tables that don't have multinested structures but are used as Import / Export parameters stay empty after the call|
|3.0.45 [L]|2008-08-20|General|Fix for Crash when reading DEBMAS IDoc shemas together with an IDoc XML data file|
|3.0.44 [L]|2008-08-19|General|Fix for receiving AND sending unicode data within the same thread (e.g. when calling a client function within the IncomingIDoc event)|
|3.0.43 [L]|2008-08-08|General|LINQ resultsets can be easily bound to DatagGridView object directly; SELECT statements can be executed without a WHERE statement|
|3.0.42 [L]|2008-07-30|General|Corrected error message in ERPConnectPocket.dll when trying to log on with a wrong password|
|3.0.41 [L]|2008-07-28|General|Visual Studio crashed under Vista when using ERPConnect in a Visual Studio related PlugIn (that is based on VS SDK)|
|3.0.40 [L]|2008-07-24|General|R3Connection.SetEncoding() didn't work for Kyrillian codepage 1251|
|3.0.39 [L]|2008-07-22|General|RFCServer.Ping() established to force the component to check, if the RFCServer is available|
|3.0.38 [L]|2008-07-21|General|Bugfix for using floating point columns in a LINQ table|
|3.0.37 [L]|2008-07-21|General|Bugfix: Using RFC server together with an RFC client in the same process on a unicode SAP system may lead to conversion errors|
|3.0.36 [L]|2008-07-20|General|Conversion error in LINQ tables fixed for negative decimal numbers|
|3.0.35 [L]|2008-07-17|General|New IDoc function SaveIdocSchema() to create IDoc schema files by program, not only by IDoc Schema Generator|
|3.0.34 [L]|2008-07-15|General|LINQ fixes: InList() extension method won't crash anymore, LINQ enabled RFC functions won't produce a syntax error under VB.NET anymore|
|3.0.31 [L]|2008-06-27|General|LINQ Tables can be used even if there are slahes (namespaces) included in the table element's name|
|3.0.30 [L]|2008-06-24|General|Bugfix for non-remote-enabled function with meta data with length = 0 on unicode systems|
|3.0.29 [L]|2008-06-24|General|Bugfix for non-remote-enabled function with meta data with length = 0 (e.g. AIPA_READ_VALUES_SINGLE)|
|3.0.28 [L]|2008-06-24|General|Bugfix for non-remote-enabled functions that doesn't consist of correct meta data (e.g. AIPA_READ_VALUES_SINGLE). Exception: TABLE_NOT_ACTIVE|
|3.0.27 [L]|2008-06-23|General|Introduced R3Connection.AllowStartProgram to enable SAP to start an application via RFC (Required for CAD-Dektop-Integration)|
|3.0.26 [L]|2008-06-23|General|Bugfix in SSO process when not using a connection string|
|3.0.25 [L]|2008-06-23|General|Bugfix with data type INT in RFC server structures|
|3.0.24 [L]|2008-06-23|General|RFCServer.CallbakServer introduced to enable RFCServer callback during a client call|
|3.0.18 [L]|2008-04-28|General|Delimeter property for ReadTable class (for UTF7 Japanese extractions)|
|3.0.17 [L]|2008-04-22|General|Small improvements for 64-Bit usage|
|3.0.16 [L]|2008-04-19|General|On some BI 7.0 systems the BWLoader class crashes because of unicode <-> non-unicode conversion errors in RequestID|
|3.0.15 [L]|2008-03-27|General|BugFix: Several Improvements for LINQ-Provider|
|3.0.14 [L]|2008-03-26|General|Bugfix: Crash when loading or saving RFCFunction objects to xml that contain elements (Imports, Exports, Tables) with slashes in it|
|3.0.13 [L]|2008-03-25|General|Bugfix: System Exception with ReadTable.RetrieveAllFieldsOfTable() function under rel. 4.6c|
|3.0.12 [L]|2008-03-23|General|Bugfix: Wrong mapping between query fields and result columns when the query contains a currency field / column|
|3.0.11 [L]|2008-03-21|General|Several Improvements and BugFixes for LINQ (ERPConnect35 only)|
|3.0.10 [L]|2008-03-20|General|Bug: Sometimes Integers in Rows of tables are not transferred correctly|
|3.0.9 [L]|2008-03-17|General|Strange behaviour with very large structures on SAP systems that a run on old Unix hardware|
|3.0.8 [L]|2008-03-14|General|Exception when using IDoc segments with fields that contain /|
|3.0.7 [L]|2008-03-12|General|Corrections in LINQ Designer|
|3.0.6 [L]|2008-03-10|General|Problems with dynamic ABAP code on unicode systems (ECC 6.0)|
|3.0.5 [L]|2008-02-28|General|Data type STRING now supported in structures|
|3.0.4 [L]|2008-02-27|General|LogDir function in RFCServer|
|3.0.3 [L]|2008-02-24|General|Corrections when using STRING and XSTRING parameters in RFC server projects|
|3.0.2 [L]|2008-02-22|General|Corrections when using STRING and XSTRING parameters|
|3.0.1 [L]|2008-02-12|General|Wrong resultset when call ReadTable class together with Primary Key Packaging and Z-function module|
|3.0.0 [M]|2008-02-11|General|New LINQ-class integrated in ERPConnect35.dll|
|1.6.57 [L]|2008-02-02|General|Problems with length of FLTP fields in ReadTable class when using a custom function for extraction|
|1.6.56 [L]|2008-01-31|General|New constructor for ERPException class (without parameters)|
|1.6.55 [L]|2008-01-31|General|ERPException class is now serializable (for customers who use ERPConnect in a remoting environment)|
|1.6.54 [L]|2008-01-29|General|Bug Fix: Strange characters when storing IDocs with eastern characters to disk|
|1.6.53 [L]|2008-01-14|General|Bug Fix: Crash when template saved to XML with function module parameter contains ?|
|1.6.50 [L]|2008-01-08|General|Complete project is now localized|
|1.6.49 [L]|2007-11-29|General|Strange IDoc characters in unicode IDocs with SendAndWait()|
|1.6.48 [L]|2007-11-29|General|IDOC_NOT_SAVED was thrown when using IDoc.SendAndWait() with ECC 6.0 / Unicode|
|1.6.47 [L]|2007-11-22|General|Removed Application.DoEvents() in CreateFunction() method|
|1.6.46 [L]|2007-11-12|General|RFCServer connection broke down when connection to other server within the same process could not be established|
|1.6.45 [L]|2007-11-09|General|Avoid InternalException call when RFCServer is stopped when using RFCServer.Stop()|
|1.6.44 [L]|2007-11-09|General|Avoid HashTable exception when SAP sends inconsistant IDocs|
|1.6.43 [L]|2007-11-02|General|Transaction classes converted field values to upper case when it should not do|
|1.6.42 [L]|2007-10-11|General|Another fix for MDXExecuter flat data and BI 7.0|
|1.6.41 [L]|2007-09-25|General|MDXExecuter fixed BI 7.0 bug (Flat Data)|
|1.6.40 [L]|2007-09-25|General|E_HANDLE ComException fixed. Occured when trying to use XML strings as import parameter with Length = 0|
|1.6.39 [L]|2007-09-10|General|Memory leaked fixed with scalar parameters|
|1.6.38 [L]|2007-08-25|General|ReadTable class fix: Leading space was automatically deleted from table cells. This may cause duplicated primary keys.|
|1.6.37 [L]|2007-08-25|General|Packaging for BW Queries is now available (PackageSize & IncomingPackage event)|
|1.6.36 [L]|2007-08-20|General|ArgumentOutOfRangeException in case of some RETURN structures (Problem with fixed length)|
|1.6.35 [L]|2007-08-20|General|Error in MDXExecuter when using empty values with UseFormattedValues property set to true|
|1.6.34 [L]|2007-08-19|General|Bugfix for using RFC Server functions together with import structures (null reference exception, e.g. function module SX_OBJECT_RECEIVE)|
|1.6.33 [L]|2007-08-16|General|BWCube and MDXExecuter class now support formatted measures (use property UseFormattedValue to turn this feature on)|
|1.6.32 [L]|2007-07-26|General|Fix: Primary Key Packaging crashed when a language key was contained in primary key columns|
|1.6.31 [L]|2007-07-23|General|Idoc.SaveToXML and Idoc.LoadFromXML now support TextReader / TextWriter objects not only file names|
|1.6.30 [L]|2007-07-11|General|It is now possible to extract BWQueries without (!) key figures in it.|
|1.6.29 [L]|2007-07-10|General|PrimaryKeyPackaging in ReadTable class is available for table with more than 6 primary key columns|
|1.6.28 [L]|2007-07-08|General|Codepage bug fixed (strange characters in idoc file when having a client connection open at the same time|
|1.6.27 [L]|2007-07-08|General|Packaging with primary key available in ReadTable class|
|1.6.26 [L]|2007-07-06|General|New Function BWCube.Variables[X].GetMembers() to obtain valid values for a BW variable|
|1.6.25 [L]|2007-06-26|General|Very, very large tables (>70.000 rows) caused crash in 64 Bit environment|
|1.6.24 [L]|2007-06-24|General|Added looging functions (R3Connection.LogDir and R3Connection.Log())|
|1.6.23 [L]|2007-06-24|General|Incorrect format when saving an IDoc to XML that has segments that start with blanks|
|1.6.22 [L]|2007-05-25|General|Transaction class was unusable with SAP ECC 600 or higher and unicode|
|1.6.21 [L]|2007-05-23|General|Process-Deadlock when trying to load XML idoc files without having loaded a XSD file before|
|1.6.20 [L]|2007-05-22|General|InfoPackage triggering failed on unicode systems with NotifyOnly property set to true|
|1.6.19 [L]|2007-05-16|General|Bug in decimal digit handling within nested XML structure while calling ToTable() method|
|1.6.18 [L]|2007-05-16|General|New Constructor in RFCServer class (Connection string)|
|1.6.17 [L]|2007-05-11|General|XML-Handling in nested structures when structures are empty failed with XMLException|
|1.6.16 [L]|2007-05-11|General|XML-Handling in nested structures|
|1.6.15 [L]|2007-04-29|General|Problems when trying to upload negative decimal data to BW via InfoPackage|
|1.6.14 [L]|2007-04-24|General|Fix: StackOverflow-Exception when converting BCDRawBytes to Decimal in very large structures|
|1.6.13 [L]|2007-04-13|General|Problems with CreateBAPI method on SAP Release ECC 600 and Unicode (case-sensitive method name spelling)|
|1.6.12 [L]|2007-04-04|General|Problem with large internal tables on x64 os|
|1.6.11 [L]|2007-04-03|General|"Returns" property of Transaction class  not accessible due to error in obfuscator tool|
|1.4.10 [L]|2005-10-21|General|Fix: Idoc.SaveXMLData generated buggy XML-File which could not be processed via LoadXMLData|
