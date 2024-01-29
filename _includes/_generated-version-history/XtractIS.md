|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|7.4.13 [L]|2024-01-29|DeltaQ|Fixed a bug introduced in version 7.4.10, which crashed VS on new extraction creation.|
|7.4.12 [L]|2024-01-15|TableCDC|Fixed a bug that prevented the extractor from being notified about successful processing of result table|
|7.4.11 [L]|2024-01-11|Setup|Fixed a bug that caused XtractExtensions.xml file to not get updated during setup|
|7.4.10 [M]|2024-01-11|DeltaQ|Fixed a date conversion bug on DeltaQ|
|7.4.9 [L]|2023-12-29|DeltaQ|Fixed parametrization of request id|
|7.4.8 [L]|2023-12-15|DeltaQ|Fixed date conversion handling for DeltaQ|
|7.4.7 [L]|2023-11-30|DeltaQ|Changed DeltaQ legacy reader to skip selection filters without corresponding field|
|7.4.6 [L]|2023-11-13|BAPI|Fixed a bug that caused errors while converting old tasks (created in versions earlier than 6.10.0) that assigned a single variable to multiple parameters|
|7.4.5 [M]|2023-11-06|DeltaQ|Fixed legacy update mode variable|
|7.4.4 [L]|2023-11-02|License Manager|Removed UninstallDllLicense.bat|
|7.4.3 [L]|2023-11-02|DeltaQ|Replaced the XtractKernel.DeltaQ component with Theobald.Extractors.DeltaQ|
|7.4.2 [L]|2023-11-02|Query|Fixed a bug where data was not converted to XIS data types.|
|7.4.1 [L]|2023-10-25|Table|Fixed crashes occurring when running table extractions in parallel.|
|7.4.0 [L]|2023-10-09|Query|New Query Extractor|
|7.3.0 [M]|2023-09-05|TableCDC|Added Table CDC component|
|7.2.2 [L]|2023-08-31|General|Added additional check in the setup for process DTExec|
|7.2.1 [L]|2023-08-10|Setup|Improved wording in setup dialog when SSIS server seems to be currently busy|
|[7.2.0 [L]](https://kb.theobald-software.com/release-notes/XtractIS-7.2.0.html)|2023-08-02|Hierarchy|New Hierarchy Extractor - POSSIBLE BREAKING CHANGES for Hierarchy extractions([Release note](https://kb.theobald-software.com/release-notes/XtractIS-7.2.0.html))|
|7.1.6 [L]|2023-06-12|General|Fixed a bug that caused the connection manager to not be saved when multiple XTRACT connection managers exist|
|7.1.5 [L]|2023-04-17|BAPI|Connection managers can now be changed using the tool editor GUI|
|7.1.4 [L]|2023-03-31|Setup|Setup now checks if there are any running processes and offers option to abort setup.|
|7.1.3 [L]|2023-03-07|BW Cube|Fixed a bug where Cube extractions might fail because of a FormatException.|
|7.1.2 [L]|2023-03-06|General|New EULA|
|7.1.1 [L]|2023-02-07|Table|Exposed table background job parameter as a custom property.|
|7.1.0 [L]|2023-01-16|General|Added Support for SQL Server 2022 (no support yet for Visual Studio 2022)|
|7.0.4 [L]|2022-11-15|General|Changed default RFC library to NetWeaver|
|7.0.3 [L]|2022-09-26|Table|added support for function modules /BODS/RFC_STREAM_READ_TABLE and /SAPDS/RFC_STREAM_READ_TABLE|
|7.0.2 [H]|2022-08-04|BAPI|Fix for structures with includes, please refresh metadata|
|7.0.1 [L]|2022-07-12|BAPI|Fixed an issue that caused the component to get stuck when using pipeline inputs inside of loops|
|7.0.0 [M]|2022-07-08|General|Removed support for SQL Server 2012|
|6.14.2 [M]|2022-07-07|BAPI|Fixed problems that caused extractions to fail after upgrading from versions before 6.10.0|
|6.14.1 [M]|2022-06-23|General|Fixed a bug that caused "method not found" errors when editing components|
|6.14.0 [L]|2022-06-08|General|Removed support for legacy DLL licenses|
|6.13.1 [M]|2022-06-02|BAPI|Fixed several issues related to the conversion of legacy BAPI tables |
|6.13.0 [L]|2022-04-25|Table|Added graphical where clause editor.|
|6.12.1 [M]|2022-04-11|BAPI|Fixed an issue where the component could not be edited when there are variables/parameters of type DateTime defined in the package|
|[6.12.0 [M]](https://kb.theobald-software.com/release-notes/XtractIS-6.12.0.html)|2022-04-11|BAPI|Fixed two issues related to parameterization when upgrading from versions before 6.10.0([Release note](https://kb.theobald-software.com/release-notes/XtractIS-6.12.0.html))|
|6.11.1 [M]|2022-04-01|BAPI|Fixed a bug where some BAPI settings might not be converted correctly when updating from versions prior to 6.10.0|
|6.11.0 [M]|2022-03-31|Table Join|Removed deprecated TableJoin component (JOINS are still supported by the Table component)|
|6.10.3 [L]|2022-03-28|General|About window was refactored|
|6.10.2 [L]|2022-03-25|General|Added upload check script in order to confirm if the setup file has the expected version|
|6.10.1 [L]|2022-03-16|BAPI|Fixed an issue where runtime parameters inside of table rows were not applied correctly (Bug introduced in 6.10.0)|
|6.10.0 [M]|2022-02-17|BAPI|Reworked BAPI component|
|6.9.4 [M]|2022-01-18|General|Support for DLL licenses will be removed in June 2022. Please download your JSON licenses from my.theobald-software.com.|
|6.9.3 [L]|2021-12-01|General|Removed French translation|
|6.9.2 [L]|2021-11-09|Table Join|TableJoin will be removed March 2022|
|[6.9.1 [L]](https://kb.theobald-software.com/release-notes/XtractIS-6.9.1.html)|2021-11-08|Report|Report component: multiple fixes.([Release note](https://kb.theobald-software.com/release-notes/XtractIS-6.9.1.html))|
|6.8.0 [M]|2021-09-07|Report|Reworked the report component.|
|6.7.6 [L]|2021-09-01|General|Updated license check.|
|6.7.5 [L]|2021-04-27|ODP|Added package size setting as component property|
|6.7.4 [L]|2021-04-27|General|Fixed an issue that caused failed license checks in some Azure IR environments.|
|6.7.3 [L]|2021-04-14|ODP|Fixed a bug that caused the selected hierarchy to be reset (Bug introduced in 6.7.2)|
|6.7.2 [L]|2021-04-06|ODP|Added HierarchyName property to allow parameterization|
|6.7.1 [L]|2021-03-31|General|Update license check.|
|6.7.0 [M]|2021-03-16|OHS|Added conversion for date and time|
|6.6.1 [L]|2021-03-15|OHS|Adjustments for window size|
|6.6.0 [M]|2021-03-10|OHS|New OHS component (with Table extraction mode and support for BW/4HANA 2.0)|
|6.5.13 [L]|2021-01-28|General|Fix for instance number check on connection manager window, which was not allowing the value 98 for this property|
|6.5.12 [L]|2020-11-09|Table|WHERE clause property of legacy extractions can be modified now|
|6.5.11 [L]|2020-10-24|General|Connection Manager: Various GUI fixes for legacy storage mode|
|6.5.10 [L]|2020-10-13|Setup|Components are now defined in a custom file (XtractExtensions.xml) instead of the default file (Extensions.xml)|
|6.5.9 [L]|2020-10-12|License Manager|Various GUI fixes|
|6.5.8 [M]|2020-10-12|Table|New/removed/renamed columns are now properly updated in GUI during metadata refresh|
|6.5.7 [M]|2020-10-06|ODP|Added 'ExtractDataOnDeltaInit' property|
|6.5.6 [L]|2020-09-24|General|Fix for Theobald.Extractors tab displaying wrong entries in Version History window|
|6.5.5 [L]|2020-09-22|Setup|Removed --silent argument; Renamed --no-gui argument to --unattended|
|6.5.4 [L]|2020-09-11|General|New about window|
|6.5.3 [L]|2020-09-07|ODP|Added 'subscription suffix' property|
|6.5.2 [M]|2020-08-13|Setup|Fixed the installation for 64 bit SQL Server versions (Bug introduced in 6.5.0)|
|6.5.1 [L]|2020-08-10|General|Windows' titles standardization|
|[6.5.0 [L]](https://kb.theobald-software.com/release-notes/XtractIS-6.5.0.html)|2020-07-09|Setup|New Setup([Release note](https://kb.theobald-software.com/release-notes/XtractIS-6.5.0.html))|
|6.4.2 [L]|2020-05-20|General|License forward compatibility improvement for supported components.|
|6.4.1 [L]|2020-05-14|OHS|Main window is resizable now.|
|6.4.0 [L]|2020-05-14|OHS|Removed preview button|
|6.3.4 [L]|2020-04-17|Table|Backward compatibilty fix: Compression function module was ignored in old packages, that had only "Use Compression" enabled, but not "Use custom function"|
|6.3.3 [L]|2020-03-17|BW Cube|Fix for auto slicing MDX syntax on older SAP BW systems.|
|6.3.2 [L]|2020-02-21|Report|Increased max. top/bottom row skip to 9999|
|6.3.1 [M]|2020-02-05|General|Fixes for showing error messages while retrieving available Table function modules (e. g. missing authorizations for ENLFDIR)|
|6.3.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|6.2.0 [M]|2020-01-27|General|Added support for VS2019|
|6.1.4 [M]|2020-01-11|DeltaQ|Fix for saving Hierarchy Class & Language (bug introduced in 6.1.0)|
|6.1.3 [L]|2020-01-09|BINotificationServer| Fix for wrong "no OHS destination found" log entries|
|6.1.2 [L]|2020-01-09|BINotificationServer|Fix for processing OHS notifications|
|6.1.1 [M]|2019-12-19|DeltaQ|Fix for editing DeltaQ component after adding (bug introduced in 6.1.0)|
|6.1.0 [M]|2019-12-11|DeltaQ|Added support for expression properties|
|6.0.0 [M]|2019-12-05|General|Support for SQLServer 2019|
|5.4.0 [L]|2019-12-04|Table|Added UsesWideStrings property & backward-compatibility for StringConversion|
|[5.3.24 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.3.24.html)|2019-12-03|ODP|Several fixes (Bugs introduced in 5.3.15.1)([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.3.24.html))|
|5.3.23 [L]|2019-11-27|Setup|Added XtractISVersionInfo.exe|
|5.3.22 [M]|2019-11-26|Setup|Another fix for overwriting old versions (bug introduced in 5.3.14)|
|5.3.21 [L]|2019-11-22|Setup|Installer removes some unnecessary files of old XIS versions|
|5.3.20 [L]|2019-11-20|Setup|Removed "Convert Date to Int"|
|5.3.19 [M]|2019-11-20|Setup|Another fix for overwriting existing versions of Xtract IS (bug introduced in 5.3.14)|
|5.3.18 [M]|2019-11-15|Setup|Fix for overwriting existing versions of Xtract IS|
|5.3.17 [M]|2019-11-15|ODP|Fixed a bug that prevented new ODP components from being added (Bug introduced in 5.3.15)|
|5.3.16 [L]|2019-11-14|Setup|Improvement for installing script|
|5.3.15 [L]|2019-11-12|ODP|Fixed a bug that caused the update mode to reset to Full when updating from versions before 5.1.0|
|5.3.14 [L]|2019-11-12|General|SSIS log contains version of Theobald.Extractors, version numbers are logged in output of InstallXtractIS|
|5.3.13 [L]|2019-11-12|DeltaQ|More fixes for String Conversion to VARCHAR|
|[5.3.12 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.3.12.html)|2019-11-07|Table|Fixed several issues with date conversion and legacy behavior([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.3.12.html))|
|5.3.11 [L]|2019-11-06|Setup|Improvements for the uninstalling script|
|5.3.10 [L]|2019-11-04|ODP|Selections can now be parameterized |
|5.3.9 [L]|2019-10-29|DeltaQ|Fix for String Conversion to VARCHAR|
|[5.3.8 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.3.8.html)|2019-10-23|Table|Several fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.3.8.html))|
|5.3.7 [M]|2019-10-08|Table|Fix for MaxRows & PackageSize properties (bug introduced in 5.3.0)|
|5.3.6 [L]|2019-10-07|BW Loader|Main form is now resizable|
|5.3.5 [L]|2019-10-07|BW Loader|Fix for uploading hierarchies to 7.X data sources|
|5.3.4 [M]|2019-10-02|General|Fix for old extractions with conversion routines enabled|
|5.3.3 [M]|2019-09-25|Table|Fixed a bug that caused recent changes to the where clause to be ignored in the editor preview|
|5.3.2 [M]|2019-09-20|Table|Backward-compatibility fixes for packages from before XIS 5.0|
|5.3.1 [L]|2019-09-11|BINotificationServer|Fixed installation of BINotificationService|
|[5.3.0 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.3.0.html)|2019-09-09|Table|Added support for property expressions / parameterization, backward-compatibility fixes([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.3.0.html))|
|5.2.6 [M]|2019-08-30|Table|Fixed a bug that caused "Conversion Routines" to be disabled when editing table components that previously had this setting enabled|
|5.2.5 [M]|2019-08-20|General|Version history dialog now also shows Theobald.Extractors history|
|5.2.4 [M]|2019-08-15|Setup|Fixed a bug that caused packages containing ODP components to fail after upgrading to 5.x without previously uninstalling the older version|
|5.2.3 [L]|2019-08-14|BINotificationServer|BI Notification Server now supports to answer the calls of BAPI_DSOURCE_IS_SUPPORTED correctly which is necessary to setup external systems on newer BW instances.|
|5.2.2 [L]|2019-08-12|Report|Fix for missing resources in SQL Server 2012|
|5.2.1 [M]|2019-08-12|Table Join|Table Join component is now deprecated. Please use the Table component for joining tables|
|5.2.0 [M]|2019-08-07|General|Added support for INT8|
|[5.1.0 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.1.0.html)|2019-08-02|ODP|Added recovery mode([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.1.0.html))|
|5.0.8 [L]|2019-07-30|General|ODP and Table GUI: Adjusted minimum size of windows to fit smaller resolutions|
|5.0.7 [M]|2019-07-23|General|Updated NW RFC to 7.50 PL 4|
|[5.0.6 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.0.6.html)|2019-07-23|Table|Fixed issues related to legacy table extraction function modules when editing table components([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.0.6.html))|
|5.0.5 [L]|2019-07-22|Table|Fixed a bug that caused the preview to fail when SSIS parameters were used in the where clause|
|5.0.4 [M]|2019-07-16|Table|Added property to choose from various column name styles |
|5.0.3 [L]|2019-07-15|Setup|Removed .NET version check from InstallXtractIS.exe (already checked by setup)|
|5.0.2 [M]|2019-07-15|General|Fixed app.config files|
|5.0.1 [H]|2019-07-05|ODP|Fixed a bug that caused extractions to fail and possible data loss in the SSIS pipeline (only affects the ODP component)|
|[5.0.0 [M]](https://kb.theobald-software.com/release-notes/XtractIS-5.0.0.html)|2019-07-01|General|This release contains general changes, changes to the existing Table component as well as a new ODP component.([Release note](https://kb.theobald-software.com/release-notes/XtractIS-5.0.0.html))|
|4.13.3 [L]|2019-06-17|Table|Fix for custom function module usage after upgrading from 2.x |
|4.13.2 [M]|2019-05-16|Table|Updated Z_THEO_READ_TABLE to 1.11|
|4.13.1 [L]|2019-05-08|General|Using MSBuild 16|
|4.13.0 [L]|2019-04-23|Setup|Added support for SQL Server Management Studio Deployment Wizard 2017|
|4.12.16 [M]|2019-04-03|General|Fix for connection manager related to parallelization|
|4.12.15 [L]|2019-03-15|Table Join|Fix for upgrading Table Join components to newer SQL Server target|
|4.12.14 [L]|2019-02-20|Table|Fix for updating old packages containing DT_I8 fields to Z_THEO_READ_TABLE|
|4.12.13 [M]|2019-02-18|Table|Updated Z_THEO_READ_TABLE to 1.10|
|4.12.12 [M]|2019-02-14|General|Extraction is aborted if errors occur during package processing|
|4.12.11 [L]|2019-02-14|Table|Fix for updating old packages containing DT_DATE and DECIMAL fields to Z_THEO_READ_TABLE|
|4.12.10 [M]|2019-02-13|Table|Reverted back to Z_THEO_READ_TABLE 1.9|
|4.12.9 [M]|2019-02-13|Table|Updated Z_THEO_READ_TABLE to 1.10|
|4.12.8 [M]|2019-02-08|Table|Updated Z_THEO_READ_TABLE to 1.9|
|4.12.7 [M]|2019-02-07|Table|Updated Z_THEO_READ_TABLE to 1.7|
|4.12.6 [M]|2019-02-04|Table|Fix for wide columns (> 2000 bytes)|
|4.12.5 [L]|2019-02-04|DeltaQ|Date 00000000 can be replaced with custom defined values now|
|4.12.4 [L]|2019-02-04|DeltaQ|Request ID variable is also updated in case of failure |
|4.12.3 [M]|2019-01-28|Table|Updated Z_THEO_READ_TABLE to 1.6|
|4.12.2 [M]|2019-01-25|Table|Updated Z_THEO_READ_TABLE to 1.5|
|4.12.1 [M]|2019-01-23|Table|Updated Z_THEO_READ_TABLE to 1.4|
|[4.12.0 [L]](https://kb.theobald-software.com/release-notes/XtractIS-4.12.0.html)|2019-01-22|Table|Added ABAP code + transport request for Z_THEO_READ_TABLE, removed old ABAP files([Release note](https://kb.theobald-software.com/release-notes/XtractIS-4.12.0.html))|
|4.11.5 [L]|2019-01-18|Table|Fix for data types when using Z_THEO_READ_TABLE|
|4.11.4 [M]|2019-01-16|Report|Fix for empty column descriptions|
|4.11.3 [M]|2018-12-20|BAPI|Fix for table types in import parameters|
|4.11.2 [L]|2018-11-27|Report|Backward-compatibility fix (components created in older versions could not be edited)|
|4.11.1 [M]|2018-11-26|General|Fixed links of question mark icons|
|4.11.0 [L]|2018-11-19|General|Licensed server is ignored in VS runtime now, instead of client OS|
|4.10.2 [L]|2018-11-19|Setup|Uninstaller removes license now|
|4.10.1 [L]|2018-11-16|Setup|Fix for silent uninstall|
|4.10.0 [L]|2018-11-14|General|Added support for Azure Integration Runtime licenses|
|4.9.10 [L]|2018-11-08|General|Fix for license check|
|4.9.9 [L]|2018-11-07|General|Added "Internal Table Function" to connection manager additions|
|4.9.8 [M]|2018-11-07|General|Added error messages when using connection manager properties in legacy storage mode|
|4.9.7 [L]|2018-11-02|General|Fixes & improvements for RFC library loading error messages|
|4.9.6 [L]|2018-10-11|General|Fix for transport request with certain SAP releases|
|4.9.5 [L]|2018-10-08|DeltaQ|Fixed a bug that prevented required libraries from being loaded|
|4.9.4 [L]|2018-10-08|Table|Added auto detection of compression function modules|
|4.9.3 [L]|2018-10-02|Table|Added support for RFC_READ_TABLE2 function modules|
|4.9.2 [L]|2018-09-24|General|Added InternalTableFunction property to ConnectionManager|
|4.9.1 [L]|2018-09-11|General|Updated NWRFC libraries to 7.50, Libraries are no longer loaded from system directories|
|4.9.0 [L]|2018-08-31|Hierarchy|Added support for natural / flattened hierarchy representation|
|4.8.6 [L]|2018-08-30|General|Updated NWRFC libraries to 720 patchlevel 49|
|4.8.5 [L]|2018-08-10|Setup|InstallXtractIS.exe - fix for low resolutions / large console fonts|
|4.8.4 [L]|2018-08-09|DeltaQ|Removed Z_XTRACT_DELTAQ_CUST from transport request, because of problems with missing data types|
|4.8.3 [M]|2018-08-03|General|Fixed help links (question mark button)|
|4.8.2 [M]|2018-07-30|Report|Fix for report width setting|
|4.8.1 [L]|2018-07-25|General|Connection manager properties: added expert option to attach SAPGUI|
|4.8.0 [M]|2018-07-24|General|Added support for non-Unicode multibyte systems (Asian characters), removed legacy Table features (background extraction, primary key packaging, multibyte flag)|
|4.7.5 [L]|2018-07-17|Report|Updated the function module for report extracting|
|4.7.4 [M]|2018-06-20|DeltaQ|Fix for NullReferenceException at DeltaQ_NewLogEntry|
|4.7.3 [L]|2018-05-30|BAPI|Fix for RAW columns in exports|
|4.7.2 [M]|2018-05-14|Table|Fix for type & length of SSTRING columns|
|4.7.1 [L]|2018-04-23|BINotificationServer|Fixes & improvements|
|4.7.0 [L]|2018-04-23|BW Loader|Fix for uploading records with more than 250 characters to a 7.x datasource|
|4.6.1 [L]|2018-04-17|General|Updated EULA|
|4.6.0 [M]|2018-04-11|BINotificationServer|Improved restart, added support for Unicode, NWRFC, trace|
|4.5.0 [M]|2018-04-03|BW Loader|Added support for 7.x data sources|
|4.4.8 [L]|2018-03-27|DeltaQ|Fix for GUI|
|4.4.7 [M]|2018-03-12|BAPI|Fixes & improvements|
|4.4.6 [M]|2018-03-06|BAPI|Fix for input pipeline|
|4.4.5 [L]|2018-03-06|BW Cube|Fixed an error in BWCube column order handling when using measure structures.|
|4.4.4 [L]|2018-02-26|Table|Re-enabled OrderBy property (backward-compatibility)|
|4.4.3 [L]|2018-02-21|Table|Removed UseCustomFunction property|
|4.4.2 [L]|2018-02-20|Table|Columns of type RAW now use the correct code page|
|4.4.1 [L]|2018-02-16|Table|Fixed a bug with the length of columns of type RAW|
|4.4.0 [M]|2018-02-14|General|Fixes & improvements for opening/closing connections|
|4.3.0 [M]|2018-02-13|General|Convert date 00000000 to NULL, if conversion is enabled (Table & DeltaQ)|
|4.2.5 [L]|2018-02-09|DeltaQ|Hierarchy metadata retrieval: Fix for date selection|
|4.2.4 [M]|2018-02-07|Setup|Workaround  for VS2017 / SQLServer 2017 conflict|
|4.2.3 [L]|2018-02-07|Setup|Updated VS2017 Configuration SDK to 1.16.30|
|4.2.2 [M]|2018-01-27|DeltaQ|Fixed timestamp & rows count in log output|
|4.2.1 [M]|2018-01-16|Setup|Another fix for detecting VS2017 instances|
|4.2.0 [L]|2018-01-15|BW Cube|Fixed a bug where SSIS variables weren't working for BW Cube in MDX mode|
|4.1.23 [M]|2018-01-15|Setup|Fix for VS2017|
|4.1.22 [L]|2018-01-11|DeltaQ|Backward-compatibility for broken data types in hierarchy extractions|
|4.1.21 [M]|2018-01-11|Setup|Fixes for VS2017 with SQLServer 2017|
|4.1.20 [L]|2017-12-13|Table|Fix for GUI scaling|
|4.1.19 [M]|2017-12-11|DeltaQ|Fix for DATS columns when switchting on data type conversion (bug introduced in 3.3.8)|
|4.1.18 [L]|2017-11-30|General|Fixes for GUI scaling|
|4.1.17 [L]|2017-11-30|General|Updated transport for Z_XTRACT_IS_TABLE_JOIN|
|4.1.16 [M]|2017-11-28|General|Improved error dialogs|
|4.1.15 [M]|2017-11-22|General|Fix for empty description texts|
|4.1.14 [L]|2017-11-20|Table Join|Adjustments in Z_XTRACT_IS_TABLE_JOIN function.|
|4.1.13 [M]|2017-11-13|DeltaQ|Fix for hierarchy column selection|
|4.1.12 [L]|2017-11-13|DeltaQ|Fix for running DeltaQ in a loop container|
|4.1.10 [L]|2017-11-09|DeltaQ|Improvements for Log Output|
|4.1.9 [L]|2017-11-07|Table|Fix for column lengths (e. g. DD08L-CARDLEFT)|
|4.1.8 [L]|2017-11-03|Table|Fix for "Convert Strings To VarChar"|
|4.1.7 [L]|2017-11-03|DeltaQ|Fix for "Convert Strings To VarChar"|
|4.1.6 [L]|2017-11-03|Table|Fix for preview (max rows)|
|4.1.5 [L]|2017-11-03|Query|Fix for preview (max rows, connection closed)|
|4.1.4 [L]|2017-11-03|OHS|Fix for preview (connection closed)|
|4.1.3 [L]|2017-11-03|BW Cube|Fix for preview (connection closed)|
|4.1.2 [M]|2017-11-03|Hierarchy|Fix for preview|
|4.1.1 [M]|2017-11-03|DeltaQ|Added default replacement for invalid dates |
|4.1.0 [M]|2017-11-03|General|Adjustments for Xtract Kernel 3.0|
|4.0.16 [L]|2017-10-30|DeltaQ|Fixes & improvements for truncating values & warnings|
|4.0.15 [L]|2017-10-19|DeltaQ|Replaced more error messages with warnings for truncated values|
|4.0.14 [L]|2017-10-19|DeltaQ|Fix for request Id variable|
|4.0.13 [M]|2017-10-19|DeltaQ|Fix for log message text in log output|
|4.0.12 [L]|2017-10-18|Setup|Uninstaller removes assembly files from DTS directory now|
|4.0.11 [L]|2017-10-18|DeltaQ|Fix for data types of RowCounter and DataPackageID if data type conversion is disabled|
|4.0.10 [L]|2017-10-18|General|Truncated values lead to warnings instead of errors|
|4.0.9 [M]|2017-10-17|DeltaQ|Fix for missing error messages in log output|
|4.0.8 [M]|2017-10-17|Report|Fixed a bug that caused an error when adding a report source.|
|4.0.7 [M]|2017-10-05|General|Fixes for saving changes in BWCube, Hierarchy, OHS and Report|
|4.0.6 [M]|2017-10-05|DeltaQ|Fix for variable OLTP source name|
|4.0.5 [M]|2017-10-02|DeltaQ|Fix for field lengths (automatic data conversion disabled)|
|4.0.4 [M]|2017-10-02|DeltaQ|Fix for automatic type conversion|
|4.0.3 [M]|2017-10-02|DeltaQ|Fix for long error messages in log output|
|4.0.2 [M]|2017-09-28|DeltaQ|Fix for request maintenance when logical system uses variable|
|4.0.1 [L]|2017-09-26|Report|Fix for width/multiline|
|4.0.0 [M]|2017-09-26|General|Support for SQLServer 2017, multi-targeting, connection properties|
|3.4.17 [L]|2017-09-14|BW Loader|Fix for GUI|
|3.4.16 [L]|2017-08-31|General|Improved error message|
|3.4.15 [L]|2017-08-11|General|License: Added support for FQDN|
|3.4.14 [L]|2017-08-04|General|Updated ABAP code & transports|
|3.4.13 [L]|2017-08-04|DeltaQ|Fix for switching between non-Unicode and Unicode systems|
|3.4.12 [L]|2017-08-03|General|License: Added support for server names longer than 15 bytes|
|3.4.11 [L]|2017-07-13|BW Loader|Improved error messages|
|3.4.10 [M]|2017-07-07|General|Fix for missing .NET 3.5|
|3.4.9 [L]|2017-07-07|License Manager|Fix for installing old DLL licenses|
|3.4.8 [M]|2017-07-06|DeltaQ|Enabled automatic synchronization by default|
|3.4.7 [L]|2017-07-05|General|Fix for server license check in clusters|
|3.4.6 [L]|2017-07-04|General|Improved error message for license server mismatch|
|3.4.5 [L]|2017-06-27|General|Fix for some changes not being saved (bug introduced in 3.4.2)|
|3.4.4 [L]|2017-06-08|DeltaQ|Fix for delta inits for 0UC* datasources.|
|3.4.3 [L]|2017-06-08|Table|Fixed an error that caused packages with table sources in loops to fail.|
|3.4.2 [M]|2017-06-01|DeltaQ|Fix for empty OLTP timestamps (occurred with some hierarchies)|
|3.4.1 [L]|2017-05-31|BW Cube|Added setting "legacy metadata retrieval"|
|3.4.0 [M]|2017-05-17|Table|Optimizations to increase table extraction speed.|
|3.3.8 [L]|2017-05-16|DeltaQ|Backward-compatibility for DATS as strings with type conversion enabled (cMORE/Connect)|
|3.3.7 [L]|2017-05-11|BAPI|Fix for editing report criteria in French|
|3.3.6 [M]|2017-05-09|Setup|Fixes for detection of SSIS|
|3.3.5 [M]|2017-05-09|Table|Z_XTRACT_IS_TABLE_COMPRESSION: Added support for decimal floats|
|3.3.4 [L]|2017-05-08|BW Loader|Fix for Unicode detection|
|3.3.3 [L]|2017-05-04|Query|Fix for editing criteria in French|
|3.3.2 [L]|2017-04-27|BW Loader|Added support for Unicode RFC destinations|
|3.3.1 [L]|2017-04-26|DeltaQ|Removed XISDispatcher service|
|3.3.0 [M]|2017-04-26|DeltaQ|Added support for parallel SSIS packages on same RFC destination without XISDispatcher service. Changed format of request Ids.|
|3.2.9 [M]|2017-04-21|BW Cube|Fixed filter variables|
|3.2.8 [L]|2017-04-18|Table Join|Fixes for TableJoin data transfer|
|3.2.7 [L]|2017-04-18|DeltaQ|Fix for unwanted serialization info in DeltaQ result tables.|
|3.2.6 [L]|2017-04-16|OHS|ProcessChain and DestinationName in OHS component can now be set through SSIS variable|
|3.2.5 [L]|2017-04-11|DeltaQ|Bug fix for DeltaQ column order.|
|3.2.4 [L]|2017-03-30|DeltaQ|Fix for NullReferenceExcpetions that may have occured on editing some DeltaQ packages.|
|3.2.3 [L]|2017-03-23|OHS|Fixed an error that sometimes caused an extraction to abort with error when extraction result has 0 rows and 0 packages|
|3.2.2 [L]|2017-03-23|Setup|Updated .Net framework check in setup.|
|3.2.1 [L]|2017-03-23|BW Loader|Added support for SNC RFC destination|
|3.2.0 [L]|2017-03-20|DeltaQ|Fixes and improvements for DeltaQ dispatcher service|
|3.1.3 [L]|2017-03-17|DeltaQ|Fix for update type A|
|3.1.2 [L]|2017-03-09|General|Updated build tools to MSBuild 15.0|
|3.1.1 [M]|2017-03-02|DeltaQ|Only entries with request id are sent to log output|
|3.1.0 [M]|2017-03-01|General|Added French localization|
|3.0.4 [M]|2017-02-21|BW Cube|Fix for BEX mode lookup (missing variables)|
|3.0.3 [L]|2017-02-10|General|Column check boxes were not visible on some systems|
|3.0.2 [M]|2017-02-01|General|Fixed SSIS icons|
|3.0.1 [M]|2017-02-01|General|Fixed a bug in the ConnectionManager|
|3.0.0 [M]|2017-01-27|General|Removed support for SSIS 2005, updated .NET Frameworks|
|2.16.1 [L]|2017-01-19|Setup|Setup works now if .NET 4.0 or above is available but .NET 2.0/3.5 is not installed|
|2.16.0 [L]|2017-01-11|General|Updated licensing to support json format.|
|2.15.3 [L]|2016-12-22|BW Cube|Added detection of missing authorization for RFC_READ_TABLE|
|2.15.2 [M]|2016-12-20|BAPI|Fix for table types in import parameters|
|2.15.1 [L]|2016-12-19|BW Cube|Improved error handling for BW cube date conversion (during lookup)|
|2.15.0 [M]|2016-11-25|DeltaQ|Resending errors is deprecated now|
|2.13.1 [L]|2016-11-03|Table Join|Fixed an error that caused a wrong result string length, when the source value is a byte sequence.|
|2.13.0 [M]|2016-10-18|Setup|Updated transport request thtrans.zip|
|2.12.4 [L]|2016-10-18|DeltaQ|Added update mode for activation only ('A')|
|2.12.3 [M]|2016-10-17|DeltaQ|Fix for activation & update mode 'V'|
|2.12.2 [L]|2016-10-08|General|Added log entry for SAP application server / system number|
|2.12.1 [L]|2016-09-29|BW Cube|CURR key figures respect backend decimal places setting now|
|2.12.0 [M]|2016-09-28|DeltaQ|All hierarchies may be activated now|
|2.11.2 [L]|2016-09-01|DeltaQ|Dispatcher Log upgraded|
|2.11.1 [L]|2016-08-25|Table Join|Fix for non-existant column description texts that lead to a crash when pressing OK button|
|2.11.0 [L]|2016-08-15|Setup|Added tool to cleanup the Gac|
|2.10.1 [M]|2016-08-12|Query|Fix for "expected 0 columns"|
|2.10.0 [M]|2016-07-26|DeltaQ|Fix for DeltaQ hierarchy datasources|
|2.9.0 [M]|2016-07-25|DeltaQ|Fix for DeltaQ activation|
|2.8.4 [L]|2016-07-14|BW Cube|OLAP: Fix for "expected 0 columns"|
|2.8.3 [M]|2016-07-04|BW Cube|Fix for FormatException|
|2.8.1 [L]|2016-06-15|General|Fix for SNC connections|
|2.8.0 [L]|2016-06-13|OHS|Added support for SNC RFC destinations|
|2.7.0 [L]|2016-06-13|DeltaQ|Added support for SNC RFC destinations|
|2.6.34 [L]|2016-05-09|Table Join|Updated Join dialog logic|
|2.6.33 [L]|2016-05-06|General|Replaced support client executable with download link|
|2.6.32 [L]|2016-05-03|Report|Number of rows per data row increased from 3 to 4|
|2.6.31 [M]|2016-04-20|Conversion Preparer|Added SQL Server 2016 to the Conversion Preparer|
|2.6.30 [L]|2016-04-11|DeltaQ|Fix for CURR values that are extremely big (greater than a length of 13). These were truncated sometimes accidently.|
|2.6.29 [L]|2016-03-23|DeltaQ|Correction in timestamp format in Request Log. New format is yyyy-mm-dd HH:mm:ss:ff"|
|2.6.28 [L]|2016-03-15|DeltaQ|Additional option for hierarchy extraction to collect all data before sending to avoid text loss|
|2.6.27 [L]|2016-02-24|BW Cube|Fix: In BEX mode the name of the query got lost under certain circumstances.|
|2.6.26 [L]|2016-02-09|DeltaQ|0ORGUNIT_HIER can now be activated through GUI|
|2.6.25 [L]|2016-01-08|General|SQL Server 2016 CTP 3.2 is supported|
|2.6.24 [L]|2015-12-21|Report|Added functionality to look up report variants.|
|2.6.23 [L]|2015-12-08|DeltaQ|Correction for length value for DEC data types. The length was calculated too short in some cases which lead to lost sign.|
|2.6.22 [L]|2015-12-07|BW Cube|Fix for BW Query variables when using the BEX mode (variables got lost under certain circumstances)|
|2.6.21 [L]|2015-12-02|BAPI|Correction for handling of data type XSTRING in export structures|
|2.6.20 [L]|2015-11-10|BW Cube|Added new property MDXVariable to provide a SSIS variable's name to store the MDX command in (for customers who want to create their own logging)|
|2.6.19 [L]|2015-11-03|General|Test connection button was not working correctly when using NW libraries|
|2.6.18 [L]|2015-10-28|Table|Uses better custom functions as default|
|2.6.17 [L]|2015-09-18|Table Join|Updated XtractKernel (TQB)|
|2.6.16 [L]|2015-09-14|General|Added support for RFC Netweaver library in Connection Manager|
|2.6.15 [L]|2015-09-08|DeltaQ|Increased performance of dispatcher service|
|2.6.14 [L]|2015-09-07|Report|Fixed bug in report lookup form|
|2.6.13 [L]|2015-08-10|Table Join|Updated table join designer.|
|2.6.12 [L]|2015-07-31|DeltaQ|DeltaQ preview functionality is deactivated as it sometimes lead to excessive generation of background jobs when used not responsibly especially with large extractions.|
|2.6.11 [L]|2015-07-28|General|Updated support client to 10.0.43879.0|
|2.6.10 [L]|2015-07-22|Table|Fixed bug in table lookup form|
|2.6.9 [L]|2015-07-18|Table Join|Updated TQB for Table Join component.|
|2.6.8 [L]|2015-07-17|DeltaQ|Fix for the edit selection link. It appeared sometimes even no selection is allowed according to SAP's metadata.|
|2.6.7 [L]|2015-07-16|Table Join|Fixed minor bugs.|
|2.6.6 [L]|2015-07-15|Table Join|Added support to auto-join new tables in Table Join component.|
|2.6.5 [L]|2015-07-15|Table Join|Added support to sort table fields by name in Table Join component.|
|2.6.4 [L]|2015-07-14|Table Join|Added support for variables in Table Join component|
|2.6.1 [L]|2015-06-29|Table Join|Added new Table Join source|
|2.5.27 [L]|2015-06-09|DeltaQ|Big fix for decimal conversion which produced NULL values under certain circumstances.|
|2.5.26 [L]|2015-06-09|DeltaQ|Improved warning message when using the preview button.|
|2.5.25 [L]|2015-05-22|DeltaQ|Fix for NULL entries in Request Log under certain circumstances|
|2.5.24 [M]|2015-04-28|Setup|Fix with ERPConnect library|
|2.5.23 [L]|2015-04-27|DeltaQ|Fixes in dispatcher with invalid special characters and swap files|
|2.5.22 [L]|2015-04-09|DeltaQ|Fixed performance issues with dispatcher service|
|2.5.21 [L]|2015-03-30|DeltaQ|Added support for multiple Dispatcher Service instances|
|2.5.20 [L]|2015-03-30|DeltaQ|Improved memory handling for Dispatcher Service|
|2.5.19 [L]|2015-03-18|BW Cube|Activation for filter functionality in OLAP mode|
|2.5.18 [L]|2015-03-10|BW Cube|BEX mode variables now work also with multiple SSIS variables by using the delimiter|
|2.5.17 [L]|2015-01-22|BW Cube|Added new feature "Automatic Slicing" which can be switched on in Settings dialog.|
|2.5.16 [L]|2015-01-21|Query|Correction for handling data types Integer and Decimal correctly (where converted to String accidently in rare cases)|
|2.5.15 [L]|2015-01-16|DeltaQ|Correction for crashing DeltaQDispatcher Service (e.g. 0MATERIAL_TEXT)|
|2.5.14 [L]|2015-01-16|DeltaQ|Correction for crashing DeltaQDispatcher Service (e.g. 0MATERIAL_TEXT)|
|2.5.13 [L]|2014-12-19|DeltaQ|Bug fix for using Selection Set variables with DeltaQ Premium Edition|
|2.5.11 [L]|2014-12-18|Report|Fix for crashing value help when looking up a report while the custom function module in SAP is missing or not remote enabled|
|2.5.10 [L]|2014-11-26|General|Fixed URL for BW Cube help button|
|2.5.9 [L]|2014-11-11|BW Cube|Query View SSIS variable applies to preview mode as well as to regular execution|
|2.5.8 [L]|2014-11-10|BW Cube|Query Views can be set through an SSIS variable now|
|2.5.7 [L]|2014-10-07|DeltaQ|Correction for missing "Init without data"|
|2.5.6 [L]|2014-09-29|BW Loader|Max. number of threads increased from 10 to 64|
|2.5.5 [L]|2014-08-26|Table|Better handling for automatic date conversion for dates between 9999-01-01 and 9999-12-31|
|2.5.4 [L]|2014-08-05|General|Updated address in product info|
|2.5.3 [L]|2014-07-23|Report|Maximum value of Skip Rows attribute increased from 35 to 50|
|2.5.2 [L]|2014-06-18|DeltaQ|Correction for decimal fields with NULL when using automatic data type conversion|
|2.5.1 [L]|2014-04-10|Conversion Preparer|Conversion Preparer now supports SSIS 2014|
|2.5.0 [L]|2014-04-08|Setup|Xtract IS released for SQL Server 2014 RTM|
|2.4.11 [L]|2014-04-01|Report|Fix when using a variable to fill InternalXML property of Report component|
|2.4.10 [L]|2014-03-26|DeltaQ|Fix when using a variable to fill InternalXML property|
|2.4.9 [L]|2014-03-11|DeltaQ|Correction for date to int conversion in case of emtpy date|
|2.4.8 [L]|2014-03-10|DeltaQ|New feature in premium version: Convert date columns to integer|
|2.4.7 [L]|2014-02-25|General|Renamed "Encrypt Password" to "Obfuscate Password"|
|2.4.5 [L]|2014-02-23|OHS|Time out setting can be set through SSIS variable|
|2.4.4 [L]|2014-01-29|General|Fix for setup for SQL Server 2014 and Visual Studio 2012|
|2.4.3 [L]|2014-01-07|General|Corrected the links to the OnlineHelp	|
|2.4.2 [L]|2013-10-28|DeltaQ|Correction for automatic date conversion for dates between 9999-01-01 and 9999-12-31. These dates are now not consolidated to 9999-12-31 anymore.|
|2.4.1 [L]|2013-10-24|Conversion Preparer|Fix for multi-line XML nodes|
|2.4.0 [L]|2013-10-23|General|Pre-release for SQL Server 2014 CTP 2|
|2.3.47 [L]|2013-10-05|BW Cube|Fix for variable problems under BEX mode on certain BW release above rel. 7.01|
|2.3.46 [L]|2013-09-30|BW Cube|Correction for multiple measures with the same name when using caption for pipeline element name|
|2.3.45 [L]|2013-09-12|BW Cube|Added support for pure MDX execution|
|2.3.44 [L]|2013-09-02|General|Added memory information for Dispatcher Service|
|2.3.43 [L]|2013-08-15|Report|Fix for batch timeout when previewing the report|
|2.3.42 [L]|2013-07-15|BW Cube|Using Query Views is now supported (Beta state)|
|2.3.41 [L]|2013-06-26|DeltaQ|RequestID can be now be set through a SSIS variable|
|2.3.40 [L]|2013-06-26|Table|Settings Max Rows, Package Size and Custom Function can be set now through SSIS variables|
|2.3.39 [L]|2013-06-26|Table|Support for OHS table extraction is withdrawn. Please use Compression instead (which is faster anyway)|
|2.3.38 [L]|2013-06-17|Report|New setting Report Width introduced in case there's more than one report line per data line|
|2.3.37 [L]|2013-05-24|General|Fix for SNC settings which contain spaces|
|2.3.36 [L]|2013-05-14|General|Setting LogDir activates RFC tracing now|
|2.3.35 [L]|2013-04-25|BINotificationServer|BINotificationServer binaries are not signed anymore due to timeout issues with Windows server manager|
|2.3.34 [L]|2013-04-23|Security|SNC authentification available in connection manager|
|2.3.33 [L]|2013-04-19|DeltaQ|Fix for AccessViolationException in certain environments when heavy parallelism is involved|
|2.3.32 [L]|2013-03-17|Table|New setting "Use field exits" added|
|2.3.31 [L]|2013-03-07|DeltaQ|Improvement for automatic date conversion: Empty dates are now converted into NULL with error message|
|2.3.30 [L]|2013-03-05|General|Added help buttons to all main dialogs and preferences dialogs|
|2.3.29 [L]|2013-01-31|Table|Bugfix for table fields with RAW(1) as in table TSTC|
|2.3.28 [L]|2013-01-31|BAPI|Bug fix for export params with data type Byte[] that are sent to the pipe|
|2.3.27 [L]|2013-01-18|BAPI|Fix for wrong conversion from RAW export parameters to String SSIS variables|
|2.3.26 [L]|2012-12-20|General|Bugfix and improved logging DeltaQ Dispatcher Service|
|2.3.25 [L]|2012-12-18|General|Correction for OutOfMemory exception in certain SAP environments|
|2.3.24 [L]|2012-12-11|Report|Report selections are now supporting semicolon separated multiple values|
|2.3.23 [L]|2012-12-04|DeltaQ|Fix: Dialog for request maintenance didn't work properly when logical system was set through a SSIS variable|
|2.3.22 [L]|2012-12-03|DeltaQ|Small Bugfix for customers who want to migrate from very old versions to the latest version with their existing packages (message: Wrong input string format)|
|2.3.21 [L]|2012-11-19|General|New TeamViewer version for remote support|
|2.3.20 [L]|2012-11-16|Query|Bugfix for using variants through variables|
|2.3.19 [L]|2012-11-11|OHS|Improved data type conversion (especially data type X (Integer) and F (Float))|
|2.3.18 [L]|2012-11-08|Table|Bug fix for very large double precision floating point columns|
|2.3.17 [L]|2012-10-22|Query|Improved preview function|
|2.3.16 [M]|2012-10-10|Table|Bug fix for wrong data type conversion|
|2.3.15 [L]|2012-09-28|Table|Fix for tables with emtpy column descriptions (since 2.3.14.6)|
|2.3.14 [L]|2012-09-24|Table|Correction in function module Z_XTRACT_IS_TABLE_COMPRESSION for timestamp/decimal columns|
|2.3.13 [L]|2012-09-22|Report|Batch job name can be set through a SSIS variable|
|2.3.12 [L]|2012-09-18|BW Loader|BW Loader is now released for BW 7.3|
|2.3.11 [L]|2012-09-10|Hierarchy|Added legacy extraction mode for backward-compatibility|
|2.3.10 [L]|2012-09-10|DeltaQ|New feature was added in the settings dialog to enable two additional columns in DeltaQ output: DataPackageID and RowCounter. These columns can be used for serialization purpose|
|2.3.9 [L]|2012-08-13|Table|Correction for metadata support for FLOAT data types (which were accidently converted to STRING in SSIS)|
|2.3.8 [L]|2012-07-02|General|New help access available for Connection Manager and Table component|
|2.3.7 [L]|2012-06-18|BW Cube|Correction for misplaced decimal separator in BEX mode under SSIS 2008|
|2.3.6 [L]|2012-06-12|DeltaQ|OLTP timestamp can be set through a variable|
|2.3.5 [L]|2012-06-04|BW Cube|Bugfix: Variables are no substituted correctly when previewing the query in BEX mode|
|2.3.4 [L]|2012-05-03|Table|Correction for negative numbers in currency conversion fields ( e.g. table VBRK with field KURRF) |
|2.3.3 [L]|2012-04-18|Conversion Preparer|Xtract IS XML nodes with multiple lines are supported now|
|2.3.2 [L]|2012-04-18|Table|Correction for type conversion for table columns with type INT1|
|2.3.1 [L]|2012-04-09|BAPI|Correction for Thai codepages in SSIS|
|2.3.0 [L]|2012-04-01|BW Cube|BEX extraction option is available in the settings dialog|
|2.2.53 [L]|2012-03-21|Table|Correction for length of DATS fields (corrected from 10 to 8 characters)|
|2.2.52 [L]|2012-03-19|Query|Correction for long text fields (error DoesNotFitBufferException)|
|2.2.51 [L]|2012-02-23|Conversion Preparer|Conversion preparer now supports SSIS 2012|
|2.2.50 [L]|2012-02-08|General|Product version number and kernel version number are printed to the log output....|
|2.2.49 [L]|2012-01-18|DeltaQ|Bug fix for automatic synchronisation under certain releases|
|2.2.48 [L]|2012-01-18|Report|Report name can be set dynamically through a variable (place @ before report to indentify variable)|
|2.2.47 [L]|2012-01-17|Table|New compression feature is released for public beta test|
|2.2.46 [L]|2012-01-11|DeltaQ|Bug fix for missing bytes in columns of type Floating Point|
|2.2.45 [M]|2012-01-10|DeltaQ|DeltaQ performance improvement|
|2.2.43 [L]|2012-01-04|Table|Fix for tables with RAW data types like SXMSPFADDRESS|
|2.2.42 [L]|2011-12-27|Table|Fix for AccessViolationException within certain system constellations|
|2.2.41 [L]|2011-12-17|General|Release for usage under SQL Server 2012 RC0. (SQL Server Denali CTP3 is not supported anymore)|
|2.2.40 [L]|2011-12-14|BAPI|Fix for strange error message that was popping up when filling BAPI static table cells with empty values and pushing the preview button|
|2.2.39 [L]|2011-12-06|DeltaQ|Corection for special hierarchy 0REOBJECT_HIER (error message unkown segment)|
|2.2.38 [L]|2011-11-26|Table|Fix for setup routine under SQL Server 2012 Denali on 64 bit os|
|2.2.36 [L]|2011-11-23|DeltaQ|Correction for tRFC based data sources with a length of exact 1000 bytes|
|2.2.35 [L]|2011-10-31|DeltaQ|Added substitution date to the settings to replace bad date values during automatic date conversion|
|2.2.34 [L]|2011-10-31|DeltaQ|Added Hierarchy Version to the settings dialog|
|2.2.33 [L]|2011-10-25|BW Cube|Fix for Carriage Return values within a measure's caption when using the setting 'Use Caption for Pipeline'|
|2.2.32 [L]|2011-10-21|Report|Added pattern for detection of report header during autmatic column detection|
|2.2.31 [L]|2011-10-17|BW Cube|Support for new OLAP BAPIs (see SAP note 1232751). The feature can be switched on in the settings dialog.|
|2.2.30 [L]|2011-10-14|Hierarchy|Fix for DateFrom / DateTo columns |
|2.2.27 [M]|2011-09-15|Report|Additional setting available to ignore ABAP exceptions within the report|
|2.2.26 [L]|2011-09-14|BAPI|Fix for problem with buffer, when the export params are sent to a pipeline that is followed by a Derived Column item|
|2.2.25 [M]|2011-08-23|BINotificationServer|BAPI_BW_FUNCTION_EXISTS now implemented|
|2.2.24 [M]|2011-08-23|BW Cube|Additional setting for putting the units of the measures into the resultset|
|2.2.23 [L]|2011-08-16|Report|Fix for incorrect Timeout setting|
|2.2.22 [L]|2011-08-08|General|Kernel version 1.0.0.44|
|2.2.21 [L]|2011-08-04|General|Kernel version 1.0.0.42|
|2.2.20 [L]|2011-08-03|Setup|Added missing XtractLoadLicense.dll|
|2.2.19 [L]|2011-08-02|Setup|Added support for setting installation directory for silent install|
|2.2.18 [L]|2011-08-02|BAPI|Fix for RAW datatype in tables|
|2.2.17 [L]|2011-07-28|License Manager|Added support for silent license installation|
|2.2.16 [L]|2011-07-20|Table|Fix for table look up dialog for tables which description text is not available in the logon language|
|2.2.15 [L]|2011-07-19|General|Bugfix for Greek characters (codepage 0700)|
|2.2.14 [L]|2011-07-17|General|Support for SQL Server Denali CTP3|
|2.2.13 [L]|2011-07-07|DeltaQ|Look up dialog works well in any language, not only in the language in which the source was created|
|2.2.12 [L]|2011-06-21|General|Bugfix for Excel documentation generation|
|2.2.11 [L]|2011-06-14|DeltaQ|Bugfix when filling the RequestID for a Repair run through a variable|
|2.2.10 [L]|2011-06-14|Table|It's possible now to substitute an invalid SAP data with a given date automatically|
|2.2.9 [L]|2011-06-02|Setup|Improvements for several environments|
|2.2.8 [L]|2011-05-16|Table|Improvement for date values, that have not a 19 or 20 prefix in the year (e.g. 12 is converted to 2012 automatically)|
|2.2.7 [L]|2011-05-05|General|Bugfix for accounts with user name containing the characters LANG|
|2.2.6 [L]|2011-04-13|DeltaQ|Excel Documentation for meta data available|
|2.2.5 [L]|2011-03-22|DeltaQ|Date in automatic type conversion is now converted into DT_DBTIMESTAMP|
|2.2.4 [L]|2011-03-11|General|Fix for Greek non-Unicode source systems|
|2.2.3 [M]|2011-02-25|Table|Automatic date conversion available|
|2.2.2 [L]|2011-01-17|DeltaQ|Bugfix for transfers with unicode double byte characters, where RFC destination is set to Unicode|
|2.2.1 [L]|2011-01-11|DeltaQ|Bugfix for RequestIDs that are provided within a variable for non-Repair-Requests|
|2.2.0 [L]|2010-12-30|General|First Preparations for new SQL Server 2011, code-named Denali in setup procedure|
|2.1.24 [M]|2010-12-28|DeltaQ|Additional Maintenance dialog for deleting init requests available through settings dialog|
|2.1.23 [L]|2010-12-27|DeltaQ|Additional dynamisation options available in Premium Edition|
|2.1.22 [L]|2010-12-16|Hierarchy|Fix for variable substitution for hierarchy version and hierarchy name|
|2.1.21 [M]|2010-12-14|DeltaQ|Automatic type conversion now available in settings|
|2.1.20 [L]|2010-12-06|Report|Maximum number of rows to be skipped increased from 25 to 35|
|2.1.19 [M]|2010-11-27|BAPI|Fix for table columns type FLOAT. The data type was not mapped correctly|
|2.1.18 [M]|2010-10-08|DeltaQ|Correction for 2.0.0.17|
|2.1.17 [M]|2010-10-05|DeltaQ|Timeouts during the resending of tRFC errors don't lead to an SSIS exception anymore|
|2.1.16 [L]|2010-09-16|DeltaQ|Internal Revision|
|2.1.15 [L]|2010-09-02|General|Internal Revision|
|2.1.14 [L]|2010-08-24|General|Bugfix for Hebrew and Thai characters in non-unicode SAP systems|
|2.1.13 [M]|2010-08-16|DeltaQ|Improved Debug Details: tRFC commits/rollbacks are also shown when switched on|
|2.1.12 [M]|2010-08-11|DeltaQ|Bugfix: Activation crashed when using OLTP sources with a namespace in the source's name (e.g. /XXX/YYYY)|
|2.1.11 [M]|2010-08-07|BAPI|Bugfix for usage of variables in static tables|
|2.1.10 [L]|2010-07-23|DeltaQ|Correction for component behavior in case of lost Info IDocs|
|2.1.9 [L]|2010-07-23|DeltaQ|Bugfix: Automatic activation leads to an error, when activation was already done under another client|
|2.1.8 [L]|2010-07-15|DeltaQ|Wrong fields lengths in DeltaQ metadata which might lead to column shifting is now repaired automatically during extraction|
|2.1.7 [L]|2010-07-07|DeltaQ|RSINFO Idocs with status 02 are detected and resent automatically....|
|2.1.6 [M]|2010-07-05|DeltaQ|Auto Synchronsiation will now activate the data source if it is not activated yet|
|2.1.5 [M]|2010-06-24|DeltaQ|Improved Timestamp detection|
|2.1.4 [M]|2010-06-22|DeltaQ|Auto Synchronsiation was added to get the time stamp of a Data Source on a generic basis|
|2.1.3 [M]|2010-06-14|BAPI|Fix for connection loss when using BAPIs within a SSIS loop with no outbound, but only inbound tables|
|2.1.1 [L]|2010-05-04|DeltaQ|Hierarchy Name and Hierarchy Class can be filled via variable|
|2.1.0 [L]|2010-05-04|DeltaQ|Update mode S for Delta Init without data transfer|
|2.0.12 [L]|2010-04-27|DeltaQ|Fix for LookUp dialog for RFC destinations|
|2.0.11 [M]|2010-03-19|BAPI|Additional option available to suppress ABAP exceptions to lead to an SSIS exception|
|2.0.10 [L]|2010-03-13|General|Improved error message if no or a corrupt version of librfc32.dll resides on the system|
|2.0.9 [M]|2010-03-02|DeltaQ|Two new fields added for Hierarchy extractions: Leaf From/To|
|2.0.8 [L]|2010-02-08|BW Cube|Bugfix for measures, that contain a NULL value (not 0 but NULL)|
|2.0.7 [M]|2010-01-26|DeltaQ|Output columns sometimes where mixed up when component instances where copied within the data flow without re-selecting the OLTP source in the dialog |
|2.0.6 [M]|2010-01-26|General|NULLIn the Connection Manager Additions it is possible now to apply another table read BAPI than RFC_READ_TABLE (for customers who don't allow RFC_READ_TABLE due to security policy)|
|2.0.5 [L]|2010-01-20|Table|new setting Buffer Location for customers who want to buffer their data snapshots in files and not in table ZXTRACTBUFFER|
|2.0.4 [M]|2010-01-11|BAPI|Bugfix for BAPIs without any tables while using the setting 'Send Exports to Pipeline'. No doubled entries anymore|
|2.0.3 [M]|2010-01-04|BW Cube|SSIS Variables where not resolved properly in the High Value field of complex BW Cube variables|
|2.0.2 [M]|2010-01-03|DeltaQ|Additional setting available to surpress resending of tRFC errors. This feature might be used by customers to avoid the ARFC-Jobs that are created automatically during communication failure. |
|1.0.88 [L]|2009-12-14|Query|	Fix for exception that was thrown when setting an obligatory parameter through a variant|
|1.0.87 [L]|2009-10-28|OHS|Variables for GatewayHost, GatewayService and ProgramID are now supported|
|1.0.86 [L]|2009-10-28|DeltaQ|Improvement for table columns with width greater than 4000 |
|1.0.85 [L]|2009-10-28|DeltaQ|Additional setting for sending scalar export params to a data flow pipeline|
|1.0.84 [L]|2009-10-15|BAPI|Fix for MetaData Refresh. Variables were not refreshed correctly|
|1.0.83 [L]|2009-10-15|DeltaQ|	Fix for crash when NOT using the RequestLog pipeline under 64-Bit SQLAgent|
|1.0.82 [L]|2009-10-13|DeltaQ|Added a couple of missing authority objects to customizing check|
|1.0.81 [L]|2009-10-12|DeltaQ|Variables for GatewayHost, GatewayService and ProgramID are now supported|
|1.0.80 [L]|2009-10-12|BAPI|Additional setting for sending scalar export params to a data flow pipeline|
|1.0.79 [L]|2009-10-09|BW Cube|	Fix for MetaData Refresh. Variables were not refreshed correctly|
|1.0.78 [L]|2009-10-08|OHS|Improved Customizing Check for EDI Inbound / Outbound parameters|
|1.0.77 [L]|2009-10-08|DeltaQ|Synchronous state check possible for Request IDoc|
|1.0.76 [L]|2009-09-29|Table|Improvement for table columns with width greater than 4000|
|1.0.75 [L]|2009-09-29|Query|Variables for GatewayHost, GatewayService and ProgramID are now supported|
|1.0.74 [L]|2009-09-22|BAPI|Metadata Refresh feature added|
|1.0.73 [L]|2009-09-21|DeltaQ|	Improved memory management for tRFC data transfers|
|1.0.72 [L]|2009-09-14|BAPI|Fix for values with type RAW in BAPI tables|
|1.0.71 [L]|2009-09-10|BW Cube|	MetaData Refresh did not work under some BW releases|
|1.0.70 [L]|2009-08-27|DeltaQ|	Improved activation procedure for sources which are wider|
|1.0.69 [L]|2009-08-23|DeltaQ|Improved Customizing Check|
|1.0.68 [L]|2009-08-19|DeltaQ|Improvement for variable handling (Pipes in variable values generate multiple lines in range table)|
|1.0.67 [L]|2009-08-10|Table|Fix for multiple, parallel table extractions in background (better management for timestamps|
|1.0.66 [L]|2009-07-28|Table|	Fix for columns that contain RAW data (e.g. when using GUID-columns)|
|1.0.65 [L]|2009-06-08|BW Cube|Improved debugging when "Debug Details" is switched on in settings |
|1.0.64 [L]|2009-05-20|BW Cube|Multiple values in one variable are supported now.The values must be separated by a delimiter.|
|1.0.63 [L]|2009-05-15|DeltaQ|More test pings implemented for the DeltaQ server pool (for slow network connections)|
|1.0.62 [L]|2009-04-19|Table|New extension to enable mixed single-byte / multi-byte extractions from non-Unicode systems|
|1.0.61 [L]|2009-04-07|Report|Automatic column detection for reports based on ALV Grid|
|1.0.60 [L]|2009-04-03|OHS|Fix for uncomplete packets when using the component with Mode E under BI 7.1|
|1.0.59 [L]|2009-04-02|DeltaQ|Improved authority / customizing check for Rel. 4.7|
|1.0.58 [L]|2009-03-31|DeltaQ|	Fix for crash when using more than one DeltaQ instance with the same |
|1.0.57 [L]|2009-03-30|BW Loader|Parallel Package preparation und sending supported to improve performance|
|1.0.56 [L]|2009-03-27|DeltaQ|tRFC transfer option officially activated. This can be used to improve |
|1.0.55 [L]|2009-03-23|OHS|	Preview left the RFC Server connection open in case of errors during extraction|
|1.0.54 [L]|2009-03-23|OHS|OHS preview left the RFC Server connection open in case of errors during extraction|
|1.0.53 [L]|2009-03-10|DeltaQ|Checks for all authority objects are included in customizing check|
|1.0.52 [L]|2009-03-02|Query|	Preview crashed when displaying more than 650 columns|
|1.0.51 [L]|2009-02-24|OHS|	Additional button for manual RFC server check in Customizing Check Dialog |
|1.0.50 [L]|2009-02-23|OHS|Customizing check added to check RFC server / Gateway settings without executing an OHS extraction....|
|1.0.49 [L]|2009-02-22|Table|Fix for data loss when table component is used in parallel DataFlows together |
|1.0.48 [L]|2009-02-03|Table|	INT4 columns on very old SAP system caused a crash due to hexadecimal formatting|
|1.0.47 [L]|2009-01-31|BW Cube|Fix for crash when an InfoObject of a cube contains an & sign in the name of its hierarchy|
|1.0.46 [L]|2009-01-22|DeltaQ|New transfer method tRFC released for beta use|
|1.0.45 [L]|2009-01-22|DeltaQ|Fix for timestamp issue. Sometimes the timestamp was not updated when moving a DeltaQ instance from one SAP system to another|
|1.0.44 [L]|2009-01-19|Table|Warning message in Xtract IS Table appears when field MANDT is used in WHERE clause|
|1.0.43 [L]|2009-01-14|General|Conversion Preparer added to Xtract Suite for converting VS2005 package to VS2008|
|1.0.42 [L]|2009-01-07|DeltaQ|Bugfix for DeltaQ: Sometimes data was shifted between columns when adding additional columns |
|1.0.41 [L]|2009-01-05|DeltaQ|Asynchronous, non-blocking preview function for DeltaQ|
|1.0.40 [L]|2009-01-02|DeltaQ|Improvement for request idocs generation with DeltaQ (UNKNOWN_OBJECT exception), |
|1.0.39 [L]|2008-12-30|DeltaQ|	Metadata synchronisation check added to DeltaQ to make sure, that non-activated metadata |
|1.0.38 [L]|2008-12-30|Query|Fix for query with negative integer values|
|1.0.37 [L]|2008-12-19|Table|Asynchronous table extraction job added to Xtract IS table (see manual for details)|
|1.0.36 [L]|2008-12-08|DeltaQ|	Fix: Under certain circumstances variables within a DeltaQ selection |
|1.0.35 [L]|2008-12-08|DeltaQ|Timeout message with DeltaQ processes, that are processed extremely fast by SAP|
|1.0.34 [L]|2008-12-07|BW Loader|Fix for hierarchy upload with BW Loader under BI 7.0|
|1.0.33 [L]|2008-12-05|Query|Fix: Xtract IS Query crashed in preview with queries with more than one list ID|
|1.0.32 [L]|2008-12-05|DeltaQ|Fix: In some situations DeltaQ fetched the wrong timestamp from SAP|
|1.0.31 [L]|2008-11-28|BAPI|	Fix: SSIS Variables in BAPI output structures crashed with source type BCD|
|1.0.30 [L]|2008-11-25|BW Cube|Meta Data Refresh für BW Cube is activated for BETA test|
|1.0.29 [L]|2008-11-23|BW Cube|It is now possible, to drag and drop properties from different dimensions into the resultset |
|1.0.28 [L]|2008-11-23|BW Cube|BWCube: It is now possible, to drag and drop properties from different dimensions into the resultset which are based on the same InfoObject (this was refused in the past)|
|1.0.27 [L]|2008-11-18|BW Loader|Fix: BW Loader crashed with exception when trying to upload an empty resultset|
|1.0.26 [L]|2008-11-15|General|Version history added to Xtract IS Component Suite|
|1.0.25 [L]|2008-09-15|BW Cube|	Support for Multiple Single Values added|
|1.0.24 [L]|2008-09-02|BW Loader|Dynamic properties with variables for flexible configuration|
|1.0.23 [L]|2008-08-10|BW Loader|Improved asynchronous Preview function|
|1.0.22 [L]|2008-08-02|OHS|Improved asynchronous Preview function|
|1.0.21 [L]|2008-07-15|BW Loader|BugFix: Data flow with BW Loader component together with|
|1.0.20 [L]|2008-06-25|BW Loader|	The tool BI Notification Receiver is shipped with Xtract IS |
|1.0.19 [L]|2008-04-24|OHS|One-Byte-Shift in resultset (not on all systems, only some patch levels)|
|1.0.18 [L]|2008-03-13|DeltaQ|Short dump caused by DeltaQ in rel. 4.6C is now fixed |
|1.0.17 [L]|2008-02-22|DeltaQ|The extraction mode (Delta, Full...) can now be set dynamically with a variable|
|1.0.16 [L]|2008-02-02|General|The LogDir property is available in connection manager which enables |
|1.0.15 [L]|2008-01-15|DeltaQ|	IDocs that are hanging in tRFC layer because of package crash, |
|1.0.14 [L]|2007-12-12|General|	Fix in connection manager when using Load Balancing with a group name with blanks|
|1.0.13 [L]|2007-10-25|Table|Correction in ABAP code of Z_XTRACT_IS_TABLE function module |
|1.0.12 [L]|2007-09-11|General|	Installation routine improved for SQL Server 2008 on 64 bit|
|1.0.11 [L]|2007-08-31|BW Cube|Packaging is available for Queries with up to 1 mio rows|
|1.0.10 [L]|2007-08-05|General|Xtract IS will work on SQL Server 2008|
|1.0.9 [L]|2007-07-26|Table|Bug fix for Primary Key Packaging when extracting tables with |
|1.0.8 [L]|2007-07-19|Table|Search in table description texts when looking up a table is now possible|
|1.0.7 [L]|2007-07-16|OHS|BI 7.0 information (OHS Destination handling) added to English manual|
|1.0.6 [L]|2007-07-13|BW Loader|Cube creation rejected when there are no source columns available|
|1.0.5 [L]|2007-07-10|General|	Description texts are shown in look up dialog / Transfer type is |
|1.0.4 [L]|2007-07-10|General|	Meta data of input pipeline is refreshed each time the editor is opened |
|1.0.3 [L]|2007-07-10|BW Loader|	Metadata checked right before upload. Upload rejected when metadata |
|1.0.2 [L]|2007-07-01|Table|Primary key packaging is now available. please note that the code of the |
|1.0.1 [L]|2007-06-21|Table|Fix: Table component crashed on 64 bit windows when using package sizes greater |
|1.0.0 [L]|2007-06-03|BW Cube|Value help when using variables|
