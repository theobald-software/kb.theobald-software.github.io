|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|6.1.2 [L]|2024-01-30|General|Fixed an error that caused CSV output to fail when an empty result set (no rows or columns) was extracted|
|6.1.1 [L]|2024-01-25|BW Cube|Cube config converter: improved logging of warnings and fix for failing conversion of extractions created in Board Connector 2.11.4 or lower.|
|[6.1.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-6.1.0.html)|2023-12-04|General|Added the result columns custom order feature([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-6.1.0.html))|
|6.0.1 [L]|2023-11-29|General|Fixed a bug where the server would erroneously detect a version from version.txt as invalid and not start.|
|[6.0.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-6.0.0.html)|2023-11-15|General|*BREAKING CHANGES:* Please see release notes for more information.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-6.0.0.html))|
|5.14.0 [L]|2023-08-22|DeltaQ|Added the new DeltaQ component|
|5.13.6 [L]|2023-08-16|General|Fixed a bug where validation of a valid license file might fail.|
|5.13.5 [M]|2023-08-07|DeltaQ|Fixed conversion errors for some data types|
|5.13.4 [L]|2023-08-03|Hierarchy|Removed XML config converter code for Hierarchy in old XML file format.|
|5.13.3 [L]|2023-08-03|General|Filterboxes will now be cleared after disconnecting.|
|5.13.2 [L]|2023-06-30|General|Added filterboxes in the designer for name, type, source and destination. Changed initial sorting order for dates, removed the old filter tool and implemented right-click option in the datagrid to add keywords to several selected extractions|
|5.13.1 [L]|2023-06-22|Server|Fixed a bug where logging into the Designer with a valid AD-User would result in an authorization error.|
|[5.13.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.13.0.html)|2023-04-27|Hierarchy|New Hierarchy Extractor - POSSIBLE BREAKING CHANGES for Hierarchy extractions([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.13.0.html))|
|5.12.3 [L]|2023-04-26|General|Added update reminder that will periodically show a pop up asking for an update.|
|5.12.2 [L]|2023-04-20|Designer|Added hotkey (F1) to open online help of current window|
|5.12.1 [L]|2023-03-31|Setup|Setup now checks if there are any running processes and offers option to abort setup.|
|5.12.0 [H]|2023-03-29|TableCDC|Table CDC is now generally available.|
|5.11.7 [L]|2023-03-10|TableCDC|Table CDC: Log table size can now be limited.|
|5.11.6 [L]|2023-03-08|BW Cube|Fix for column order changes in MDX mode when adding filter selections or selecting and deselecting a dimension.|
|[5.11.5 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.11.5.html)|2023-03-07|Security|Custom authentication related security fixes and improvements.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.11.5.html))|
|5.11.4 [L]|2023-03-06|General|New EULA|
|5.11.3 [L]|2023-02-10|General|Fix extraction cache getting checked despite being disabled. Fix possible race condition in the RPC worker.|
|5.11.2 [L]|2023-02-10|General|Removed "Support Client" from Help menus. Added extraction type (Cube, Table, ...) being executed in extraction and server logs|
|5.11.1 [L]|2023-01-31|General|Fix a bug where empty lists in column transformation information would not correctly be serialized to JSON.|
|5.11.0 [L]|2023-01-16|General|New conversion architecture (internal changes)|
|5.10.0 [H]|2023-01-16|TableCDC|Added Table CDC extractor (preview)|
|[5.9.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.9.0.html)|2023-01-10|General|Removed config conversion of version 2.x([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.9.0.html))|
|5.8.1 [L]|2022-10-26|Server|Fixed a bug where extractions would run into an error if the source or destination parameter is set.|
|5.8.0 [M]|2022-09-08|OHS|New OHS component (with Table extraction mode and support for BW/4HANA 2.0)|
|5.7.3 [H]|2022-08-04|BAPI|Fix for structures with includes, please refresh metadata|
|5.7.2 [M]|2022-07-11|BOARD API|Fixed several issues that caused errors when retrieving metadata|
|5.7.1 [L]|2022-07-08|General|The clear result cache functionality does now use the new RPC server capabilities instead of the HTTP server.|
|5.7.0 [L]|2022-06-08|General|Removed support for legacy DLL licenses|
|5.6.3 [L]|2022-06-01|General|The RPC server and persistence do now support subdirectories. (Not implemented in Designer and Runtime)|
|5.6.2 [L]|2022-05-18|General|Fixed a bug where when changing the server configuration, the server would not restart when the user selected 'yes' when being asked for a restart|
|5.6.1 [L]|2022-05-17|Designer|Fix for change source window call|
|5.6.0 [L]|2022-04-28|Server|Enabled JSON metadata API|
|5.5.1 [M]|2022-04-07|BW Cube|Now allowing extractions without measure selections in MDX mode. Added support for additional options in interval/complex BEx variable selections.|
|[5.5.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.5.0.html)|2022-04-04|BW Cube|New BWCube extractor (breaking)([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.5.0.html))|
|5.4.0 [M]|2022-03-31|Table Join|Removed deprecated TableJoin component (JOINS are still supported by the Table component)|
|5.3.4 [L]|2022-03-28|Designer|About window was refactored|
|5.3.3 [L]|2022-03-25|General|Added upload check script in order to confirm if the setup file has the expected version|
|5.3.2 [L]|2022-03-16|BAPI|Fixed an issue where runtime parameters inside of table rows were not applied correctly (Bug introduced in 5.3.0)|
|5.3.1 [M]|2022-03-08|General|Fixed an issue where system clock changes could cause errors |
|5.3.0 [M]|2022-02-17|BAPI|Reworked BAPI component|
|5.2.0 [M]|2022-02-15|General|Added support for certificate SSO and reworked source details GUI|
|[5.1.1 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.1.1.html)|2022-02-15|Designer|Various fixes and improvements following the 5.1.0 release.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.1.1.html))|
|[5.1.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.1.0.html)|2022-02-08|Designer|Make sure to update designer AND server!([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.1.0.html))|
|5.0.5 [M]|2022-01-18|General|Support for DLL licenses will be removed in June 2022. Please download your JSON licenses from my.theobald-software.com.|
|5.0.4 [L]|2021-12-10|Designer|Fixed missing Theobald.Persistence.dll on designer-only installation|
|5.0.3 [L]|2021-11-09|Table Join|TableJoin will be removed March 2022|
|5.0.2 [M]|2021-11-09|Designer|Fix for license display and service restart (broken since 5.0)|
|5.0.1 [M]|2021-10-20|Setup|Config conversion is now performed before starting service during setup|
|[5.0.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-5.0.0.html)|2021-10-18|General|SAP passwords are encrypted in context of BC Service Account (breaking)([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-5.0.0.html))|
|4.9.4 [L]|2021-10-06|General|Fixed the preview mode setting, which was incorrectly disabled|
|4.9.3 [M]|2021-09-30|Report|Fixed a bug (introduced in 4.9.0) where fetching metadata of report extractions did not work.|
|4.9.2 [L]|2021-07-23|Designer|Designer startup logic refactored to WPF standards|
|4.9.1 [L]|2021-07-02|Server|Multi-process architecture for configuration server|
|4.9.0 [M]|2021-06-17|Report|Reworked the report component.|
|4.8.6 [L]|2021-05-19|Server|New web listener implementation|
|4.8.5 [L]|2021-04-26|Designer|Fix for General Settings window, in order to display cache configuration correctly|
|4.8.4 [M]|2021-04-23|General|Fixed bug that prevented cache creation when datetime conversion was enabled|
|4.8.3 [M]|2021-04-23|General|Fixed bug that prevented extraction's result to be cached when column level encryption was disabled|
|[4.8.2 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.8.2.html)|2021-04-23|BOARD API|Fix for column name style in API's response on method GetExtractionMetadata(string)([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.8.2.html))|
|4.8.1 [L]|2021-03-02|Designer|Fix for General Settings dialog, which had a checkbox for a feature, unavailable in BOARD Connector (column encryption)|
|[4.8.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.8.0.html)|2021-01-28|General|Added support for column name styling and date converting([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.8.0.html))|
|4.7.3 [L]|2021-01-27|Designer|Fix for Designer disconnection handling|
|4.7.2 [L]|2021-01-25|Designer|Column filter and several other improvements and fixes for the main window|
|4.7.1 [M]|2021-01-13|Server|Fix for ambiguous local timestamps during daylight saving time transition|
|4.7.0 [L]|2020-11-11|Setup|New Setup|
|[4.6.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.6.0.html)|2020-11-06|Server|Web server access can now be restricted to custom users([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.6.0.html))|
|4.5.5 [M]|2020-10-12|Table|New/removed/renamed columns are now properly updated in GUI during metadata refresh|
|4.5.4 [M]|2020-10-06|ODP|Added 'extractDataOnDeltaInit' run parameter|
|[4.5.3 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.5.3.html)|2020-09-29|Designer|New status bar([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.5.3.html))|
|4.5.2 [L]|2020-09-11|Designer|New about window|
|4.5.1 [L]|2020-09-07|ODP|Added 'subscription suffix' and 'update mode' run parameters|
|4.5.0 [L]|2020-08-07|Designer|General WPF migration for BoardConnectorDesigner and other small UI improvements|
|[4.4.11 [H]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.4.11.html)|2020-07-31|Security|Enforcement of access restriction for the web server([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.4.11.html))|
|4.4.10 [L]|2020-07-03|Server|Fixed a bug where web requests with invalid URLs did not get a proper response|
|4.4.9 [L]|2020-06-29|Designer|Fix for horizontal scrolling in log window|
|4.4.8 [L]|2020-06-26|Designer|Main window's title fix|
|4.4.7 [L]|2020-06-25|Designer|Remove of destination menu options|
|4.4.6 [M]|2020-06-17|General|Fixed a bug that could cause extractions to get stuck in a running state while not actually running anymore|
|4.4.5 [L]|2020-05-13|Designer|General designer bug fixes and improvements|
|4.4.4 [L]|2020-05-05|Designer|New WPF filter and log windows|
|4.4.3 [L]|2020-04-30|Designer|Fix for context menu item in main window|
|4.4.2 [L]|2020-04-29|General|Optimized internal dependencies.|
|4.4.1 [L]|2020-04-23|General|Increased RFC network timeouts to 5 seconds|
|4.4.0 [L]|2020-04-23|Designer|Main window migration to WPF|
|4.3.4 [L]|2020-03-17|BW Cube|Fix for auto slicing MDX syntax on older SAP BW systems.|
|4.3.3 [M]|2020-03-12|ODP|Added support for runtime parameters|
|4.3.2 [M]|2020-02-26|BAPI|Fix for STRING/XSTRING|
|4.3.1 [L]|2020-02-26|Server|Improved web server logging|
|4.3.0 [M]|2020-02-26|Security|Disabled TLS 1.1, enabled TLS 1.3|
|4.2.1 [M]|2020-02-18|Server|Fixed a bug that caused extractions to get stuck on "running"|
|4.2.0 [M]|2020-02-07|Server|Fixes & improvements for result cache.|
|4.1.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|4.0.13 [M]|2020-01-31|Server|Fix for extracting binary values via BAPI, OHS & Query (...unable to cast...)|
|4.0.12 [L]|2019-12-19|DeltaQ|Fix for scripted expressions in selections|
|4.0.11 [M]|2019-12-18|Server|Fix for server not accepting any connections after 99h runtime|
|[4.0.10 [H]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.10.html)|2019-12-03|ODP|Several fixes (Bugs introduced in 4.0.8.9)([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.10.html))|
|4.0.9 [L]|2019-11-14|Table Join|Fixes for creating deprecated Table Join extractions|
|4.0.8 [M]|2019-11-05|Server|Fixed a bug that caused column names to be converted to UPPERCASE which caused problems for Hierarchy, Report and DeltaQ extractions|
|[4.0.7 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.7.html)|2019-10-23|Table|Several fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.7.html))|
|4.0.6 [L]|2019-10-08|Server|Fixed a bug that caused the servers to crash when clients closed the connection before it could be handled|
|4.0.5 [L]|2019-09-20|Server|Fixes for chaching results of Table (Compression FM) and ODP (non-Hierarchy)|
|4.0.4 [M]|2019-09-06|Table|Fixed a bug that caused scripted expressions to not be evaluated for the preview|
|4.0.3 [M]|2019-09-04|Server|Fixed a bug that could cause some of multiple simultaneous extraction starts to fail |
|4.0.2 [L]|2019-08-20|General|Fix for converting date format of old (e. g. 2.12.6.1) extractions|
|4.0.1 [M]|2019-08-12|General|Fixed config conversion for primary keys when upgrading from versions before 4.0|
|[4.0.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.0.html)|2019-08-08|General|This release contains general changes, changes to the existing Table component as well as a new ODP component.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-4.0.0.html))|
|3.7.8 [M]|2019-07-23|General|Updated NW RFC to 7.50 PL 4|
|3.7.7 [L]|2019-06-25|General|Updated product icon|
|3.7.6 [M]|2019-06-03|Server|Fixes & improvements for logging|
|3.7.5 [M]|2019-06-03|General|Fixes & improvements for cloning extractions|
|3.7.4 [L]|2019-05-21|Setup|Fix for silent uninstaller|
|3.7.3 [M]|2019-05-21|Designer|Fix for TableJoin (broken since 3.7.0).|
|3.7.2 [M]|2019-05-16|Table|Updated Z_THEO_READ_TABLE to 1.11|
|3.7.1 [L]|2019-05-14|General|Using MSBuild 16|
|3.7.0 [M]|2019-05-09|General|Updated to .NET Framework 4.7.1|
|3.6.3 [L]|2019-05-08|Setup|Fixed FileNotFoundException that might occur after installing version 3.6.2.12.|
|3.6.2 [M]|2019-04-18|Server|Fixed a bug where starting multiple extractions at the same time caused some of them to fail|
|3.6.1 [L]|2019-03-29|Designer|UI improvements for Connect window|
|[3.6.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.6.0.html)|2019-03-26|General|Updated to .NET Framework 4.6.1([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.6.0.html))|
|3.5.1 [M]|2019-03-12|Server|Fix for aborting extractions and clearing result cache (Bug introduced in 3.5.0)|
|[3.5.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.5.0.html)|2019-03-08|Security|Access to the web server can now be restricted to Active Directory users with Designer read access.([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.5.0.html))|
|3.4.0 [L]|2019-03-01|General|Removed support for 32 bit versions of Windows|
|3.3.11 [M]|2019-02-18|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.3.10 [M]|2019-02-13|Table|Reverted back to Z_THEO_READ_TABLE 1.9|
|3.3.9 [M]|2019-02-13|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.3.8 [M]|2019-02-08|Table|Updated Z_THEO_READ_TABLE to 1.9|
|3.3.7 [M]|2019-02-07|Table|Updated Z_THEO_READ_TABLE to 1.7|
|3.3.6 [M]|2019-02-06|BW Cube|Fix for decimals in BEx mode|
|3.3.5 [M]|2019-01-28|Table|Updated Z_THEO_READ_TABLE to 1.6|
|3.3.4 [M]|2019-01-25|Table|Updated Z_THEO_READ_TABLE to 1.5|
|3.3.3 [L]|2019-01-23|Setup|Improved error message when Designer is still running during setup|
|3.3.2 [M]|2019-01-23|Table|Updated Z_THEO_READ_TABLE to 1.4|
|3.3.1 [L]|2019-01-23|Setup|Silent setup doesn't initiate config conversion|
|[3.3.0 [L]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.3.0.html)|2019-01-22|Table|Added ABAP code + transport request for Z_THEO_READ_TABLE, removed old ABAP files([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.3.0.html))|
|3.2.13 [M]|2019-01-16|Report|Fix for empty column descriptions|
|3.2.12 [M]|2018-11-22|Designer|Fixed links of question mark icons|
|3.2.11 [M]|2018-11-22|Designer|Fix for Designer/Server communication ("The output byte buffer is too small to contain the encoded data")|
|3.2.10 [M]|2018-10-15|Designer|Removed legacy HTTP filter GUI|
|3.2.9 [L]|2018-10-11|Server|Fix for converting primary keys of query extractions from versions before 3.0|
|3.2.8 [L]|2018-10-11|General|Fix for transport request with certain SAP releases|
|3.2.7 [L]|2018-10-10|Server|Fix for converting sources from BOARD Connector 2.x (bug introduced in 3.2.2)|
|3.2.6 [L]|2018-10-09|Server|Fix for timeout during startup with large number of extractions|
|3.2.5 [L]|2018-10-04|Table|Added auto detection of compression function modules|
|3.2.4 [L]|2018-10-02|Table|Added support for RFC_READ_TABLE2 function modules|
|3.2.3 [L]|2018-09-28|Designer|Added support for searching Active Directory users/groups in other domains|
|3.2.2 [M]|2018-09-28|Server|Fixes & improvements for converting configuration & logs from BOARD Connector before 3.0|
|3.2.1 [L]|2018-09-25|General|Reduced network timeout for opening SAP connections|
|3.2.0 [M]|2018-09-24|General|Duration of extraction runs is now recoreded and displayed in main window and log viewer|
|3.1.8 [M]|2018-09-17|Server|Fixed missing row restriction in live preview (Table, TableJoin)|
|3.1.7 [L]|2018-09-12|Designer|Editing the source of multiple extractions at once is now supported|
|3.1.6 [L]|2018-09-11|General|Updated NWRFC libraries to 7.50|
|3.1.5 [L]|2018-08-30|General|Updated NWRFC libraries to 720 patchlevel 49|
|3.1.4 [M]|2018-08-28|Table|Fix for "use conversion routines" checkbox|
|3.1.3 [L]|2018-08-09|DeltaQ|Removed Z_XTRACT_DELTAQ_CUST from transport request, because of problems with missing data types|
|3.1.2 [M]|2018-08-07|Security|Explicitly enabled TLS1.1 & 1.2, disabled TLS1.0 & SSL3|
|3.1.1 [M]|2018-08-03|Designer|Fixed help links (question mark button)|
|3.1.0 [M]|2018-07-24|General|Added support for non-Unicode multibyte systems (Asian characters), removed background extraction (Table)|
|3.0.8 [M]|2018-07-19|Server|Increased timeout for writing results to BOARD to 4h|
|3.0.7 [L]|2018-07-17|Report|Updated the function module for report extracting|
|3.0.6 [M]|2018-07-17|Server|Increased timeout for writing results to BOARD|
|3.0.5 [H]|2018-07-13|Server|Fix for chunked transfer encoding (caused invalid data in some cases, broken since 3.0.0)|
|3.0.4 [M]|2018-07-12|Server|Fix for selecting X.509 certificates|
|3.0.3 [L]|2018-07-05|Server|Server configuration: Fix for converting default Int values from V2.x (e. g. config server starting on port 0 in some cases)|
|3.0.2 [M]|2018-07-05|Server|Fix for BAPI, BWCube (Bex Mode), Hierarchy, OHS, Query (Specified cast is not valid)|
|3.0.1 [M]|2018-07-05|Designer|Added support for warnings to Log Viewer|
|[3.0.0 [M]](https://kb.theobald-software.com/release-notes/BOARDConnector-3.0.0.html)|2018-06-29|General|Improvements for network communication, security and configuration persistence([Release note](https://kb.theobald-software.com/release-notes/BOARDConnector-3.0.0.html))|
|2.30.20 [L]|2018-04-17|General|Updated EULA|
|2.30.18 [L]|2018-01-15|Server|Improved handling of multiple http requests to the board connector server.|
|2.30.17 [L]|2017-11-30|General|Updated transport for Z_XTRACT_IS_TABLE_JOIN|
|2.30.16 [L]|2017-11-20|Table Join|Adjustments in Z_XTRACT_IS_TABLE_JOIN function.|
|2.30.14 [L]|2017-09-15|Server|CSV: Improved error message|
|2.30.13 [L]|2017-09-13|Designer|Disabled "..." button when creating new extraction without admin privileges|
|2.30.12 [L]|2017-08-11|General|License: Added support for FQDN|
|2.30.11 [L]|2017-08-04|General|Updated ABAP code & transports|
|2.30.10 [L]|2017-08-04|DeltaQ|Fix for switching between non-Unicode and Unicode systems|
|2.30.9 [L]|2017-08-03|General|License: Added support for server names longer than 15 bytes|
|2.30.8 [L]|2017-07-12|Designer|Fix for "the specified network password is not correct"|
|2.30.7 [M]|2017-07-06|DeltaQ|Enabled automatic synchronization by default|
|2.30.6 [L]|2017-07-05|General|Fix for server license check in clusters|
|2.30.5 [L]|2017-07-04|General|Improved error message for license server mismatch|
|2.30.4 [L]|2017-07-03|Server|Fix for "the specified network password is not correct"|
|2.30.3 [M]|2017-06-22|Server|Server no longer runs separate app domain|
|2.30.2 [L]|2017-05-31|BW Cube|Added setting "legacy metadata retrieval"|
|2.30.1 [M]|2017-05-09|Table|Z_XTRACT_IS_TABLE_COMPRESSION: Added support for decimal floats|
|2.30.0 [M]|2017-04-26|DeltaQ|Moved server pool to separate process|
|2.29.7 [L]|2017-04-18|Table Join|Fixes for TableJoin data transfer|
|2.29.6 [L]|2017-03-29|BW Cube|Fix for buffer error when output column transformation exchanged measure with dimension or vice versa|
|2.29.5 [H]|2017-03-17|General|Fix for missing values (bug introduced in 2.29.3)|
|2.29.4 [L]|2017-03-16|Server|Reduced amount of messages in server log|
|2.29.3 [M]|2017-03-10|BW Cube|Fix for NULL values|
|2.29.2 [L]|2017-03-09|General|Updated build tools to MSBuild 15.0|
|2.29.1 [L]|2017-02-08|General|Fix for "Keyset does not exist" in certain AD environments|
|2.29.0 [M]|2017-01-23|General|Updated to .NET Framework 4.5.2|
|2.28.1 [M]|2017-01-11|Designer|Source: Fix for file/directory pickers|
|2.28.0 [L]|2017-01-11|General|Updated licensing to support json format.|
|2.27.5 [L]|2017-01-04|DeltaQ|Select options support either variables or scripted expression, but not both|
|2.27.4 [L]|2017-01-04|Table|WHERE-clause supports either variables or scripted expression, but not both|
|2.27.3 [L]|2016-12-22|BW Cube|Added detection of missing authorization for RFC_READ_TABLE|
|2.27.2 [L]|2016-12-14|BW Cube|BWCube date exception handling improved|
|2.27.1 [L]|2016-12-06|Designer|Removed columnSeparator and decimalSeparator from run parameters|
|2.27.0 [M]|2016-11-25|DeltaQ|Resending errors is deprecated now|
|2.26.1 [L]|2016-10-20|BW Cube|Improved lookup error handling|
|2.26.0 [M]|2016-10-18|Setup|Updated transport request thtrans.zip|
|2.25.1 [L]|2016-10-18|DeltaQ|Added update mode for activation only ('A')|
|2.25.0 [L]|2016-10-11|BW Cube|Output transformation allows removal of columns now|
|2.24.1 [L]|2016-10-08|Server|Added log entry for SAP application server / system number|
|2.24.0 [M]|2016-09-28|DeltaQ|All hierarchies may be activated now|
|2.23.0 [M]|2016-09-26|Server|Queued data packages are dropped now in case of errors|
|2.22.2 [L]|2016-09-15|Report|Fix for preview without columns but "automatic column detection" enabled|
|2.22.1 [M]|2016-08-25|BAPI|Fix for passing values to tables|
|2.22.0 [M]|2016-08-23|BAPI|Added support for export parameters & multiple tables in result|
|2.21.1 [L]|2016-08-03|Server|Improved handling of empty results|
|2.21.0 [L]|2016-08-02|BOARD API|Updated API for https support|
|2.20.6 [L]|2016-08-02|DeltaQ|Fix for DeltaQ hierarchy datasources|
|2.20.5 [M]|2016-07-12|DeltaQ|Fix for DeltaQ activation|
|2.20.4 [M]|2016-07-12|DeltaQ|Re-enabled result buffering|
|2.20.3 [L]|2016-07-05|Service|Service account settings are preserved during updates|
|2.20.2 [L]|2016-06-16|General|Reverted default RFC library to classic|
|2.20.1 [L]|2016-05-04|General|Replaced support client executable with download link|
|2.20.0 [M]|2016-04-20|General|Reverted back to classic RFC as default|
|2.19.1 [M]|2016-04-19|Designer|Fix for changes in General Settings|
|2.19.0 [M]|2016-04-18|General|NetWeaver RFC libraries are used by default now instead of classic RFC libraries|
|2.18.2 [L]|2016-02-15|Report|Added look up for report variants.|
|2.18.1 [M]|2016-01-13|General|License DLL does not need to be "unblocked" anymore|
|2.17.3 [M]|2015-11-24|Server|Undefined execution states are set to "finished with errors" at server startup|
|2.17.0 [M]|2015-11-10|BOARD API|Added support for Table Join|
|2.16.2 [L]|2015-11-10|Table Join|Fix for live data preview|
|2.16.1 [L]|2015-11-10|Table|Fix for live data preview|
|2.16.0 [L]|2015-10-27|Server|Added support for Content-Encoding: gzip|
|2.15.15 [L]|2015-09-29|Server|Improved logging for errors while loading extractions|
|2.15.14 [L]|2015-09-18|Table Join|Updated XtractKernel (TQB)|
|2.15.13 [L]|2015-09-15|Table Join|Updated dialog help links|
|2.15.12 [L]|2015-09-07|DeltaQ|Added new setting 'Accept Gaps In Data Package Id' for users who are using OLTP datasources where data is filtered in a way that it leads to gaps between the packet numbers. This setting turns off a certain consistency check. |
|2.15.11 [L]|2015-09-07|Report|Fixed bug in the search of reports|
|2.15.10 [L]|2015-08-13|BAPI|New ABAP sources for Z_XTRACT_IS_TABLE_COMPRESSION to improve performance especially on SAP system based on MAXDB. New function module Z_XTRACT_IS_TABLE_JOIN released as beta version.|
|2.15.9 [L]|2015-08-10|Table Join|Updated table join designer.|
|2.15.8 [L]|2015-08-04|BW Cube|Fix for error message when using the Show MDX link |
|2.15.7 [L]|2015-07-28|General|Support client shows logo and uses pre-defined password|
|2.15.6 [L]|2015-07-22|Table|Fixed bug in table lookup form|
|2.15.5 [L]|2015-07-21|DeltaQ|Fix for the edit selection link. It appeared sometimes even no selection is allowed according to SAP's metadata.|
|2.15.4 [L]|2015-07-18|Table Join|Updated TQB for Table Join component.|
|2.15.3 [L]|2015-07-17|General|Updated code to run on .NET 4.|
|2.15.2 [L]|2015-07-14|Setup|Updated support client to 10.0.43879.0|
|2.15.0 [M]|2015-06-30|General|Purchased license is preferred to demo license now|
|2.14.0 [L]|2015-06-30|Server|Removed HttpLocalOnly server setting (please use server security settings instead)|
|2.12.8 [L]|2015-05-21|Designer|Delete button & menu item is disabled in GUI if user does not has appropriate privileges|
|2.12.7 [M]|2015-05-20|Designer|Fixed extraction name validation|
|2.12.6 [L]|2015-04-29|Server|Reverted date format to yyyMMdd (accidentally changed to yyyy-MM-dd in 2.8.1)|
|2.12.5 [L]|2015-04-20|General|Improved logging of stack traces|
|2.12.4 [L]|2015-04-20|BW Cube|Addtional feature to add unit columns to each measure when using the OLAP mode|
|2.12.3 [L]|2015-04-13|General|SNC plus user name / password is supported in connection dialog to encrypt connection to SAP|
|2.12.1 [L]|2015-04-13|DeltaQ|Scripting expressions are evaluated in Selection parameters|
|2.12.0 [M]|2015-02-18|General|Removed 'custom connections' and renamed 'connection' to 'source' (legacy 'custom connections' are still supported, but read-only)|
|2.11.4 [L]|2015-01-27|BW Cube|Added new feature for manual slicing/filtering dimensions in an OLAP extraction|
|2.11.3 [L]|2015-01-26|BW Cube|Custom variables are supported now when using native MDX statements|
|2.11.2 [L]|2015-01-22|BW Cube|Added new feature "Automatic Slicing" which can be switched on in Settings dialog.|
|2.11.1 [L]|2015-01-22|BW Cube|Setting "Decimal Separator" withdrawn as it's not necessary anymore. The decimal separator is detected automatically.|
|2.11.0 [M]|2015-01-15|Table|New user interface for extraction settings|
|2.10.0 [L]|2015-01-12|Security|Added support for X.509 client certificate file for SNC|
|2.9.2 [L]|2015-01-07|Designer|DeltaQ / OHS extractions with shared connection could not be created since version 2.9.0|
|2.9.1 [L]|2014-12-09|Security|Added support for DNS SRV responses without additional A records (Active Directory authentication)|
|2.9.0 [L]|2014-12-08|General|SAP connections are stored in config/sources now, as JSON files|
|2.8.1 [L]|2014-12-04|General|Fixed default time format|
|2.8.0 [L]|2014-12-02|General|Removed "Force Codepage"|
|2.7.23 [L]|2014-11-28|BW Cube|Fixed re-ordering of columns (headers were not re-ordered)|
|2.7.22 [L]|2014-11-18|Security|Fixes and improvements for Active Directory authentication|
|2.7.21 [L]|2014-11-11|Service|Set start timeout to 3 minutes (for slow systems)|
|2.7.20 [L]|2014-11-04|Security|Fixes and improvements for Active Directory authentication|
|2.7.19 [M]|2014-10-20|Server|Server had to be restarted, if errors occurred while loading an extraction|
|2.7.17 [L]|2014-10-13|BW Cube|Fix for "Use Real Data for Preview"|
|2.7.16 [M]|2014-10-08|Server|In some cases extractions were run despite load errors|
|2.7.15 [L]|2014-10-07|DeltaQ|Correction for missing "Init without data"|
|2.7.14 [M]|2014-09-30|Security|Fix for friendly domain names / FQDN (Active Directory)|
|2.7.13 [M]|2014-09-16|Security|Users could not see restricted extractions if they had logged on with a name in different character casing than their actual name (e. g. logon as "User01" if actual name was "user01")|
|2.7.12 [M]|2014-09-16|Security|Not all administrator privileges were granted, if logon as "admin" was performed with different character casing (e. g. "Admin").|
|2.7.11 [L]|2014-09-09|General|Improved logon failure logging (Active Directory)|
|2.7.10 [H]|2014-09-02|Server|Double quotes in data were duplicated, if data was loaded from buffer|
|2.7.9 [L]|2014-08-05|Server|Removed byte-order mark from UTF-8 encoded data|
|2.7.8 [L]|2014-08-05|Designer|Updated address in product info|
|2.7.7 [L]|2014-06-13|BW Cube|New mode available for pure MDX extractions|
|2.7.5 [L]|2014-05-22|BW Cube|New BWCube look-up|
|2.7.4 [L]|2014-05-20|BAPI|New BAPI look-up|
|2.7.3 [L]|2014-05-20|Report|New report look-up|
|2.7.2 [L]|2014-04-17|Hierarchy|New hierarchy look-up|
|2.7.1 [L]|2014-04-17|Query|New Query look-up and metadata retrieval|
|2.7.0 [L]|2014-04-03|Designer|Fixed lookup button for trace directory in the connection manager|
|2.6.2 [L]|2014-02-20|Designer|Fix for "invalid value" error message if value of text parameter is empty (Run dialog)|
|2.6.0 [L]|2014-02-06|Security|SAP credentials can be supplied via Basic authentication (HTTPS recommended)|
|2.5.2 [L]|2014-02-06|Security|Removed user and passwd run parameters|
|2.5.1 [L]|2014-02-04|Server|Added query string option filterDebug=true to exclude debug log entries|
|2.5.0 [L]|2014-02-04|General|Buffer directory can be changed in Server Settings now|
|2.4.25 [L]|2014-02-04|Designer|Corrected some typos|
|2.4.24 [M]|2014-01-21|BAPI|Fix for "cannot assign value..."|
|2.4.23 [L]|2014-01-09|Server|Added support for HTTP HEAD requests|
|2.4.22 [L]|2014-01-08|BW Cube|Bugfix for tree view UI element on the left side. Double clicking lead to strange error message in rare cases|
|2.4.21 [L]|2014-01-07|General|Corrected the links to the OnlineHelp|
|2.4.20 [L]|2013-12-19|Server|Empty results do not create a dummy line anymore if read from buffer|
|2.4.19 [L]|2013-12-19|Service|Fix for Windows Server 2003 and XP|
|2.4.18 [L]|2013-12-03|Server|CSV: Values which contain row separator are enclosed in quote symbols now|
|2.4.17 [L]|2013-11-08|Report|Fix for using Header Pattern with Automatic Column Detection|
|2.4.16 [L]|2013-10-30|DeltaQ|Extractions crashed if url parameter "programId" was set|
|2.4.15 [L]|2013-10-08|Server|Server will start up even if extraction metadata is corrupted|
|2.4.14 [L]|2013-10-05|BW Cube|Fix for variable problems under BEX mode on certain BW release above rel. 7.01|
|2.4.13 [L]|2013-09-25|Server|Errors during extraction load do not create empty buffer entries anymore|
|2.4.11 [L]|2013-08-23|Server|Moved log entries of run parameters from server log to extraction log|
|2.4.9 [L]|2013-08-21|Server|Fix for extractions which have very short running times (<50ms)  |
|2.4.8 [L]|2013-08-08|Report|Correction for timeout issue when previewing a long running report|
|2.4.7 [L]|2013-07-25|Service|Errors which lead to server termination are written to Windows event log|
|2.4.6 [M]|2013-07-25|Server|Errors while writing extraction log do not lead to server termination anymore|
|2.4.5 [L]|2013-07-16|Table|Added scripting for where clause|
|2.4.4 [L]|2013-07-11|Setup|Added Visual C++ runtime to setup|
|2.4.3 [L]|2013-07-11|Setup|Fix for icon in "Progams and Features"|
|2.4.2 [L]|2013-07-11|Setup|Fix for error message during service start on 32-bit OS|
|2.4.1 [L]|2013-07-10|Report|Fix for crash on Report dialog when function module is not installed properly|
|2.4.0 [L]|2013-07-08|General|Added support for NetWeaver RFC libraries|
|2.3.8 [L]|2013-06-18|Report|New setting Report Width introduced in case there's more than one report line per data line|
|2.3.6 [L]|2013-06-09|DeltaQ|Released 4 additional settings: 'Don't resend..', 'Check IDoc state...', 'Serialization info...' and 'Data conversion...'|
|2.3.5 [L]|2013-06-04|General|.NET 4 is used, if available|
|2.3.4 [L]|2013-05-28|General|.NET 4 is used, if 3.5 SP1 is not installed|
|2.3.3 [L]|2013-05-21|General|Added 'Use SAPGUI' to connection settings|
|2.3.2 [L]|2013-04-19|Report|New setting added: Regex Pattern for skipping rows|
|2.3.1 [M]|2013-03-21|BW Cube|Output transformation did not work sometimes if result was read from buffer|
|2.3.0 [L]|2013-01-30|Security|Added access restriction for shared connections|
|2.2.26 [M]|2013-01-16|BAPI|Added support for structures/tables which contain alignment gaps caused by includes|
|2.2.25 [L]|2012-12-11|General|Fix: LogDir setting got lost when using a custom connection|
|2.2.24 [L]|2012-11-29|Security|Logged on user is automatically added to the list of allowed users/groups if he activates access restriction for an extraction|
|2.2.23 [L]|2012-11-28|Security|Access restriction changes performed by non-admin users were not saved correctly in some cases|
|2.2.22 [L]|2012-11-22|DeltaQ|Added "Auto Synchronisation" feature to settings|
|2.2.21 [L]|2012-11-19|General|New TeamViewer version for remote support|
|2.2.20 [L]|2012-11-15|Service|Increased start/stop timeouts|
|2.2.19 [L]|2012-10-26|DeltaQ|A new dialog for maintaining the Delta requests was added to the settings dialog|
|2.2.18 [L]|2012-10-24|BAPI|Fix for non-unicode systems (version 2.x and later)|
|2.2.17 [L]|2012-10-17|BAPI|Structure elements in GUI were missing in some rare cases|
|2.2.16 [L]|2012-10-17|Server|More detailed error messages for server startup problems|
|2.2.15 [L]|2012-10-16|Designer|Fix for HTTPS port in "Run" dialog|
|2.2.11 [L]|2012-09-28|Table|Fix for tables with emtpy column descriptions (since 2.2.10.x)|
|2.2.9 [L]|2012-09-24|Table|Correction in function module Z_XTRACT_IS_TABLE_COMPRESSION for timestamp/decimal columns|
|2.2.7 [L]|2012-08-29|BOARD API|Output column reordering (BW Cube) was ignored in metadata since 2.x|
|2.2.6 [L]|2012-08-27|General|All column names are now backward-compatible with data readers before 2.x|
|2.2.5 [L]|2012-08-08|Hierarchy|Fix for zero node ids with some hierarchies	|
|2.2.4 [L]|2012-08-08|BW Cube|Bugfix in UI when switch from BEX mode to non-BEX mode and back|
|2.2.3 [L]|2012-08-06|BW Cube|Fix for output transformation (did not work since version 2.0.0.x)|
|2.2.2 [L]|2012-08-06|Server|Sometimes extraction runs were declared 'successful' even though errors occured|
|2.2.1 [L]|2012-08-03|Service|Service did not start after reboot sometimes (service dependencies were missing)|
|2.2.0 [L]|2012-08-02|Setup|Fixed prerequisites check|
|2.1.0 [L]|2012-08-01|Service|New service implementation	|
|2.0.2 [L]|2012-07-18|General|Re-added decimalSeparator URL-parameter (was missing since version 2.0.0.x)|
|2.0.0 [M]|2012-05-30|General|Several fixes and improvements, major internal changes|
|1.8.17 [M]|2012-04-24|DeltaQ|Added various additional settings and functions for natural hierarchy representation|
|1.8.16 [L]|2012-04-23|Server|CSV: Column headers are written even if extraction result is empty|
|1.8.15 [L]|2012-04-17|Designer|Designer was not able to start if configuration file was corrupted|
|1.8.14 [L]|2012-04-02|General|Fix for Designer failing to connect in some environments|
|1.8.13 [L]|2012-03-22|Server|Fix for log entries containing mode "Console" if server was running as a service|
|1.8.12 [L]|2012-03-22|Designer|More space for licensee in "About" window|
|1.8.11 [L]|2012-03-21|Designer|Added some icons to main menu|
|1.8.10 [L]|2012-03-01|Table|Field exits can be switched on in the settings dialog when using the compression feature|
|1.8.9 [L]|2012-02-29|Server|Some fixes for CSV value formatting|
|1.8.8 [L]|2012-02-28|Table|Preview is using real data instead of dummy data (this was accidentally changed in 1.6.3).|
|1.8.7 [L]|2012-02-17|Table|Compression feature for faster data extraction released now for public use|
|1.8.6 [L]|2012-02-10|General|Added Preview Mode in General Settings|
|1.8.5 [L]|2012-02-09|General|Added padding for log entries in txt files and 'copy to clipboard' feature|
|1.8.4 [M]|2012-02-09|General|Fixes & improvements for extraction abort|
|1.8.3 [M]|2012-02-09|Server|Fix for buffer BufferLifespanMinutes|
|1.8.2 [L]|2012-01-26|Designer|Removed default values of client and language for new connections; changed tab order|
|1.8.1 [M]|2012-01-26|General|Change to avoid "Attempt to read or write protected memory" error immediately after start of extraction execution (occurred at arbitrary times)|
|1.8.0 [L]|2012-01-20|Server|New extraction abort mechanism|
|1.7.7 [M]|2012-01-15|BW Cube|Implemented new BEX mode for extraction|
|1.7.6 [L]|2012-01-12|Designer|Fix for extractions with reference to an non-existing shared connection (connection dialog did not open)|
|1.7.5 [L]|2012-01-05|BW Cube|Fix for output column reordering when adding dimension property|
|1.7.4 [L]|2012-01-05|BW Cube|Fix for output column reordering and metadata refresh|
|1.7.3 [L]|2012-01-05|BW Cube|Fix for invalid output column reordering (output window could not be opened)|
|1.7.2 [M]|2011-12-20|General|Fix for being unable to connect to server with many extractions (about 100 and above)|
|1.7.1 [L]|2011-12-13|BW Cube|Fix for metadata of extractions with output column transformation|
|1.7.0 [L]|2011-11-30|Server|Added extraction list via HTTP, name filter for logs via HTTP|
|1.6.8 [L]|2011-11-29|General|Fix for connections using Load Balancing|
|1.6.7 [L]|2011-11-09|Server|Changed behavior of min/max parameters for log retrieval via HTTP|
|1.6.6 [L]|2011-10-20|Report|Added pattern for detection of report header during autmatic column detection|
|1.6.5 [L]|2011-10-20|Query|Correction for the value help for variants (some variants were not displayed correctly)|
|1.6.4 [L]|2011-10-17|BW Cube|Support for new OLAP BAPIs (see SAP note 1232751). The feature can be switched on in the settings dialog.|
|1.6.3 [L]|2011-10-07|Service|Fix: Service stopped unexpectedly on certain power events|
|1.6.1 [L]|2011-10-04|Server|Fix: Sometimes server stopped to handle HTTP request after extractions had been aborted|
|1.6.0 [L]|2011-09-29|Server|Added version information retrieval via HTTP|
|1.5.5 [L]|2011-09-22|Server|Added 'DistributeSetup' server setting|
|1.5.4 [L]|2011-09-16|BW Cube|Added reordering of output columns|
|1.5.3 [M]|2011-09-02|Server|Server stability fix|
|1.5.2 [M]|2011-08-29|Designer|GUI improvements|
|1.5.0 [M]|2011-08-24|General|Several fixes & improvements|
|1.4.3 [L]|2011-08-10|Designer|Fix for extraction logs not beeing displayed since 1.4.0|
|1.4.2 [L]|2011-08-09|Table|Table packages are now always processed asynchronous|
|1.4.0 [M]|2011-08-04|Server|Server stability fixes & improvements|
|1.3.12 [L]|2011-08-04|Designer|Fix for Designer crash when right-clicking on extraction list header with empty extraction list|
|1.3.9 [L]|2011-08-02|Server|Fix for missing names in log retrieval via HTTP|
|1.3.8 [L]|2011-08-02|DeltaQ|Fix for missing RequestID column in metadata retrieval via HTTP (DeltaQ)|
|1.3.7 [L]|2011-07-18|BW Cube|Added extraction setting to disable dummy data for BWCube preview|
|1.3.6 [L]|2011-07-14|Server|Added metadata retrieval via HTTP for Table & DeltaQ|
|1.2.4 [M]|2011-06-03|BW Cube|Fix for BW Cube measures decimal separator if 'Use Caption for Pipline' is set|
|1.2.3 [M]|2011-05-19|General|Fix for logging fatal errors of versions >= 1.2.0|
|1.2.1 [M]|2011-05-16|Server|Fixes & improvements for buffer|
|1.2.0 [M]|2011-05-12|Server|Improved logging & buffer|
|1.1.2 [L]|2011-05-09|DeltaQ|Timeout value can be adjusted manually in the DeltaQ settings dialog|
|1.1.1 [L]|2011-05-02|DeltaQ|Improved sending of Request IDoc at DeltaQ extraction with timestamp|
|1.1.0 [L]|2011-04-28|Server|Added RequestID & RowCount columns to logs via HTTP|
|1.0.0 [H]|2011-04-28|General|BOARD Connector first public release|
