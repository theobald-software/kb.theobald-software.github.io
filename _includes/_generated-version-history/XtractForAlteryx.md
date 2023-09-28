|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|1.20.5 [L]|2023-09-28|Designer|Enable f1 hotkey to link window specific online help entry.|
|1.20.4 [M]|2023-09-27|General|Fixed a bug that caused errors on the Alteryx Server when DCM connections were used (Bug introduced in 1.20.3)|
|1.20.3 [M]|2023-09-13|Designer|Improved error handling for Alteryx DCM integration|
|1.20.2 [M]|2023-09-01|General|Fixed a bug where no new connections could be created with Alteryx Designer versions below 2022.3|
|1.20.1 [L]|2023-08-10|Setup|Fixed a bug where a error was displayed after choosing to cancel the setup because of a running process (e.g. Alteryx Server or Designer currently running/busy).|
|1.20.0 [M]|2023-07-20|General|New and edited SAP connections are now saved within the Alteryx DCM when possible|
|1.19.4 [L]|2023-06-28|Table|Runtime parameters of type list can now be used for (NOT) IN operators in the where builder|
|1.19.3 [L]|2023-06-26|General|Assert uniqueness of output column names|
|1.19.2 [L]|2023-06-20|General|Fixed a bug that causes errors in subsequent tools when copying Xtract tools and using the old Alteryx engine|
|1.19.1 [L]|2023-06-14|BAPI|Fixed a bug that caused errors when passing pipeline tables into the BAPI tool (Bug introduced in 1.19.0)|
|1.19.0 [L]|2023-06-12|General|Runtime parameters can now be provided from the workflow pipeline using input connection 'P'|
|1.18.2 [L]|2023-05-03|BAPI|Fixed a bug that caused the Alteryx Designer to close in case of an error|
|1.18.1 [M]|2023-05-03|BAPI|Fixed a bug that caused the tool to not run when an input connection existed and the AMP Engine was used|
|1.18.0 [M]|2023-04-28|Query|Added query extractor|
|1.17.4 [L]|2023-04-14|Setup|Added option to abort setup in case of running processes (Alteryx Designer and Server). Fixed bug where the wrong version number was displayed in the about window of the BAPI tool.|
|1.17.3 [L]|2023-03-23|General|The setup can now be run without admin privileges to install for user-only Alteryx instances|
|1.17.2 [L]|2023-03-06|General|New EULA|
|1.17.1 [L]|2023-02-23|BW Cube|Added refresh metadata button and fixed an issue where some property texts may not be displayed in MDX extractions created with Xtract for Alteryx versions older than 1.15.0.|
|[1.17.0 [L]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.17.0.html)|2023-01-04|Hierarchy|Improved Hierarchy Extractor. Now full support for Links, Intervals, and all variants of time dependent Hierarchy structure. Performance tested for Hierarchies with up to 1 million rows.([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.17.0.html))|
|1.16.6 [L]|2022-11-16|General|Switched default RFC library to NWRFC|
|1.16.5 [L]|2022-09-26|Table|added support for function modules /BODS/RFC_STREAM_READ_TABLE and /SAPDS/RFC_STREAM_READ_TABLE|
|1.16.4 [L]|2022-05-30|BW Cube|Support for Only_Structures behavior in MDX BEx Queries. Various bug fixes and general improvements for the Cube component.|
|1.16.3 [L]|2022-05-23|General|Fixed a bug where scalar parameters disappeared from the tool properties|
|1.16.2 [L]|2022-05-03|Report|Report component is now out of beta.|
|1.16.1 [L]|2022-04-27|ODP|Fixed a bug where the advanced settings button was disabled for providers that do not support deltas|
|1.16.0 [L]|2022-04-25|Table|Added graphical where clause editor.|
|1.15.1 [L]|2022-04-07|BW Cube|Now allowing extractions without measure selections in MDX mode. Added support for additional options in interval/complex BEx variable selections.|
|1.15.0 [M]|2022-04-04|BW Cube|Updated BWCube component with multiple improvements regarding stability, performance and compatibility.|
|1.14.2 [L]|2022-03-28|Designer|About window was refactored|
|1.14.1 [L]|2022-03-25|General|Added upload check script in order to confirm if the setup file has the expected version|
|1.14.0 [M]|2022-02-17|BAPI|General Availability (end of beta)|
|1.13.1 [M]|2021-11-17|BAPI|Fix for data types when using workflow tables as input|
|[1.13.0 [L]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.13.0.html)|2021-09-24|BW Cube|Updated cube component adding BICS extraction mode.([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.13.0.html))|
|1.12.3 [L]|2021-04-06|ODP|Added HierarchyName property to allow parameterization|
|1.12.2 [L]|2021-04-01|Setup|Fix for message displaying when no Alteryx installation is found during setup|
|1.12.1 [M]|2021-03-04|General|Fixed a bug where message dialogs would not show properly.|
|1.12.0 [M]|2021-02-23|Report|Added report tool (beta)|
|1.11.0 [M]|2021-02-10|BAPI|The tool now supports EXPORT parameters that will be merged and output into the E pipeline. Table EXPORT parameters will be mapped to connections 1-5.|
|1.10.0 [L]|2020-11-03|Setup|New Setup|
|1.9.6 [L]|2020-09-11|Designer|New about window|
|1.9.5 [L]|2020-09-07|ODP|Added 'update mode' run parameter|
|1.9.4 [L]|2020-08-10|Designer|Windows' titles standardization|
|1.9.3 [L]|2020-05-20|General|License forward compatibility improvement for supported components.|
|1.9.2 [L]|2020-05-14|General|Fix for name validation in edit connection window.|
|1.9.1 [M]|2020-02-05|Designer|Fixes for showing error messages while retrieving available Table function modules (e. g. missing authorizations for ENLFDIR)|
|1.9.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|[1.8.0 [M]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.8.0.html)|2020-01-28|BAPI|Input and output improvements([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.8.0.html))|
|1.7.9 [L]|2020-01-22|Setup|Improvement for uninstalling script|
|[1.7.8 [M]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.8.html)|2019-12-03|ODP|Several fixes (Bugs introduced in 1.7.6.1)([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.8.html))|
|1.7.7 [L]|2019-11-22|General|Removed unnecessary call to RFC_PING during connection test|
|1.7.6 [L]|2019-11-06|Setup|Improvements for the uninstalling script|
|1.7.5 [L]|2019-11-04|ODP|Selections can now be parameterized |
|[1.7.4 [M]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.4.html)|2019-10-23|General|Fixed the preview GUI. Removed the broken alias functionality from table tool([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.4.html))|
|1.7.3 [L]|2019-10-15|BAPI|The tool can now accept incoming connections which can be mapped to table parameters (beta)|
|[1.7.2 [L]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.2.html)|2019-09-27|BW Cube|Improvements to cube dimension property naming.([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.7.2.html))|
|1.7.1 [L]|2019-09-24|General|Updated TheobaldExtractors to version 1.10.4|
|1.7.0 [L]|2019-09-20|BAPI|Added BAPI tool (beta)|
|1.6.0 [L]|2019-09-11|Hierarchy|Added hierarchy tool (beta).|
|1.5.5 [M]|2019-09-03|Table|WHERE clause can now be dynamically updated using Alteryx Actions|
|1.5.4 [L]|2019-09-02|BW Cube|Fix for cube properties with same names on different dimensions.|
|1.5.3 [L]|2019-08-30|BW Cube|Fix for selecting cube properties.|
|1.5.2 [M]|2019-08-20|General|Version history can now be viewed on the About dialog|
|1.5.1 [M]|2019-08-14|BW Cube|Various fixes for variables|
|1.5.0 [M]|2019-08-07|General|Added support for INT8|
|1.4.3 [L]|2019-08-05|General|GUI no longer prevents the saving of incomplete configurations|
|1.4.2 [M]|2019-07-23|General|Updated NW RFC to 7.50 PL 4|
|1.4.0 [L]|2019-07-12|BW Cube|Added cube filters.|
|1.3.4 [L]|2019-07-10|General|Improved license check.|
|1.3.3 [M]|2019-07-03|ODP|Fixed a bug that would reset the segments to extract when editing an existing extraction|
|1.3.2 [M]|2019-07-01|Designer|Textbox for connection name is read-only now for existing connections|
|1.3.1 [L]|2019-07-01|Table|Fix for error messages during preview|
|1.3.0 [M]|2019-07-01|ODP|General Availibility (end of beta)|
|1.2.2 [M]|2019-06-17|Designer|Fixes and improvements for error handling|
|1.2.1 [M]|2019-05-20|General|Fixes & improvements for SAP connections (ticket issuer, timeouts)|
|1.2.0 [M]|2019-05-20|General|Improved logging (timestamps, more details)|
|1.1.2 [L]|2019-05-20|Setup|Fix for Alteryx installation folder detection|
|1.1.1 [L]|2019-05-08|General|Using MSBuild 16|
|1.1.0 [M]|2019-05-08|General|Updated to .NET Framework 4.7.1|
|1.0.2 [M]|2019-05-06|General|Fix for NetWeaver RFC|
|1.0.1 [M]|2019-04-23|Table|Fix for function module dropdown not showing available modules|
|[1.0.0 [M]](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.0.0.html)|2019-04-10|General|General Availibility (end of beta)([Release note](https://kb.theobald-software.com/release-notes/XtractForAlteryx-1.0.0.html))|
|0.0.14 [L]|2019-03-21|Designer|Fixed license check.|
|0.0.13 [L]|2019-01-29|BW Cube|Fixed an error in cube filter serialization.|
|0.0.12 [L]|2019-01-29|General|Fixed an issue that may have caused errors when using snc authentication.|
|0.0.11 [M]|2019-01-18|General|Fixed a bug that may have caused license errors with valid licenses.|
|0.0.10 [L]|2019-01-07|Table|Added structure files for Z_THEO_READ_TABLE.|
|0.0.9 [M]|2018-12-21|BW Cube|Fixed an error that caused cubes not to be loaded after selection.|
|0.0.8 [M]|2018-12-13|General|Improved result column size calculation for cube and table extractions. Added automatic detection of unit of measurement of cube measures.|
|0.0.7 [L]|2018-12-07|General|Fixed output metadata of tools to improve compatibility with other tools.|
|0.0.6 [L]|2018-12-07|Table|Improvements and fixes in Table Join UI, performance and stability.|
|0.0.5 [L]|2018-11-30|Table|Added the custom function module for full table join support.|
|0.0.4 [L]|2018-11-28|General|Compatibility fix for Alteryx 11.7|
|0.0.3 [M]|2018-11-14|Table|Using table name for tool instead of RFC function, fix for ABAP strings vs. NET|
|0.0.2 [L]|2018-10-19|General|UI update.|
|0.0.1 [L]|2018-10-02|General|Initial Release|
