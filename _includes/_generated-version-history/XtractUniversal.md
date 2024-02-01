|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|6.2.11 [L]|2024-02-01|Destinations|Power BI: Fixed an issue that caused extractions to be missing or authentication errors in the connector UI due to caching issues|
|6.2.10 [L]|2024-01-31|Server|Fixed a bug which would crash the configuration converter when an unhandled property was read in a legacy server file.|
|6.2.9 [L]|2024-01-30|Destinations|Fixed an error that caused CSV destinations to fail when an empty result set (no rows or columns) was extracted|
|6.2.8 [L]|2024-01-25|BW Cube|Cube config converter: improved logging of warnings and fix for failing conversion of extractions created in Xtract Universal 2.46.0 or lower.|
|6.2.7 [L]|2024-01-23|Destinations|Upgraded SQL driver for PostgreSql destination to version 8.0.1. Fixed a bug that was present in build 6.2.6.12 released on 22.01.2024 - if you have that version installed and if you are using the PostgreSql destination, please upgrade to a newer version.|
|6.2.6 [L]|2024-01-16|Destinations|Google Cloud Storage: added support for Script Expressions in destination folder field.|
|6.2.5 [L]|2024-01-16|BW Cube|Fixed a bug for BWCube extractions with filters on dimensions that have a slash in their name.|
|[6.2.4 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-6.2.4.html)|2024-01-15|DeltaQ|Fixed some bugs related to legacy DeltaQ extractions conversion (see release notes for more details)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-6.2.4.html))|
|6.2.3 [L]|2023-12-18|Server|Fixed source impersonation with Kerberos authentication when running extractions.|
|6.2.2 [L]|2023-12-07|General|Fixed a bug where custom parameters in the finalization step in snowflake destinations would not be evaluated. The columns in the Designer's main view now allow more flexibility when resizing. The run window does not show an error anymore when trying to abort an extraction, which just finished.|
|6.2.1 [L]|2023-12-05|BW Cube|Fix an issue that made ConfigConverter fail to upgrade some extractions containing orphaned filters|
|[6.2.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-6.2.0.html)|2023-12-04|General|Added the result columns custom order feature([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-6.2.0.html))|
|6.1.12 [L]|2023-11-24|BW Cube|Fixed a bug causing failed extractions when using Not Assigned (#) member in MDX cube filter.|
|6.1.11 [L]|2023-11-20|Server|Fixed a bug where a cache entry would not be invalidated when aborting the extraction. Fixed an error when invalidating the cache for an extraction after editing.|
|6.1.10 [L]|2023-11-15|Server|Fixed a bug causing cache entries of failed extractions to not be invalidated correctly. Fixed the timestamp format for script expression of `Extraction.Timestamp`.|
|6.1.9 [L]|2023-11-14|xu-config|Updated remaining XtractKernel DeltaQ definition in xu-config.exe|
|6.1.8 [H]|2023-11-13|General|Fixed a bug where all extractions would fail with a license expired error. **Issue affects all XU releases since 6.0.0** If you have any version of XtractUniversal starting with 6.x.x please update immediately to this or any newer version.|
|6.1.7 [L]|2023-11-09|Destinations|Added the OneTransaction transaction style in the Snowflake destination|
|6.1.6 [L]|2023-11-09|Destinations|Fixed a bug where custom SQL ad-hoc parameters were not evaluated.|
|6.1.5 [L]|2023-11-09|BW Cube|Fixed an issue that caused errors when using MDX cube selections with list runtime parameters in script expressions |
|6.1.4 [L]|2023-11-02|DeltaQ|Slightly refactored some DeltaQ windows|
|6.1.3 [L]|2023-10-31|Query|Fixed a bug that caused legacy queries with obligatory selection parameters to not be converted correctly.|
|6.1.2 [L]|2023-10-31|Destinations|Changed Snowflake definition window to list only internal stages to be selected|
|[6.1.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-6.1.1.html)|2023-10-27|Server|Small fixes and improvements for error handling, scripting and logging.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-6.1.1.html))|
|6.1.0 [L]|2023-10-19|Destinations|Removed the Hadoop destination|
|6.0.24 [L]|2023-10-17|General|Fixed RequestSize error in xu.exe. Removed an external dependency of xu.exe.|
|6.0.23 [L]|2023-10-13|Server|Fixed a bug where the web worker would not send a response when running an extraction in case of errors occurring at destination setup. Fixed the xu.exe command in the Run Dialog, which could get out of sync with the actual command used.|
|6.0.22 [L]|2023-10-12|Designer|Fixed a bug that would not allow changing source for multiple extractions|
|6.0.21 [L]|2023-10-11|General|Fixed the abort endpoint routing. Fixed various cache clean up and invalidation issues. Improved behavior of the run dialog when fetching extraction logs. Fixed timeout in xu.exe and xu.elf.|
|6.0.20 [L]|2023-10-05|Destinations|Fixed SSRS destination writing invalid JSON.|
|6.0.19 [L]|2023-10-04|Destinations|Fix incorrect link to online help in Huawei destination window|
|6.0.18 [L]|2023-09-28|Designer|Enable destination settings to link their entry in the online help when pressing f1.|
|6.0.17 [L]|2023-09-28|Destinations|Salesforce: Fixed a bug that caused the extraction to fail when multiple primary keys were selected|
|6.0.16 [L]|2023-09-25|Server|Fixed a bug causing parameters to be ignored in ODP extractions. Fixed parameter handling in table and query extractions causing issue in Alteryx Designer. Fixed errors when fetching parameter information for some extraction types.|
|6.0.15 [L]|2023-09-25|Destinations|Alteryx: Improved detection for installed Alteryx instances when installing the plugin|
|6.0.14 [L]|2023-09-22|Server|Fixed crashes when fetching parameter and result column information for various extraction types.|
|6.0.13 [L]|2023-09-22|Server|Parameters for table and query extractions with values larger than allowed do now default to the configured values from the extraction.|
|[6.0.12 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-6.0.12.html)|2023-09-15|Destinations|SSRS / Power BI Report Server Data Extension: fixed crash due a bad assembly reference that was introduced in XtractUniversal 6.0 ([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-6.0.12.html))|
|6.0.11 [L]|2023-09-15|Designer|Added sort option on designer's main window's state column|
|6.0.10 [L]|2023-09-15|Destinations|Added role setting on Snowflake destination|
|6.0.9 [L]|2023-09-14|General|Fixed web server issues causing responses to be in the wrong format. This affected Qlik and Knime destinations. Fixed a confusing error message when opening the destination settings for a malformed extraction.|
|6.0.8 [L]|2023-09-14|Setup|Fixed a bug which deleted all Tableau hyper sdk files before installation|
|6.0.7 [L]|2023-09-13|General|Fixed a bug which caused the AzureBlob destination to stop working when the data format was Parquet.|
|6.0.6 [L]|2023-09-13|Destinations|Oracle: Added support for INT8 (Int64) types as NUMBER(19)|
|6.0.5 [L]|2023-09-12|Server|Fixed a bug where the xu.exe cli tool got confused by an ambiguous 'WWW-Authenticate' header from the server. Fixed an error which could occur during database destination clean up procedures and hide another original error.|
|6.0.4 [L]|2023-09-11|Server|Fixed an issue where the web server would expect authentication credentials despite authentication being turned off.|
|6.0.3 [L]|2023-09-11|Server|Fixed a bug which could cause the server start to fail because of inconsistent state.|
|6.0.2 [L]|2023-09-08|General|Fixed the default setting of the config converter for the XU 6 upgrade. Fixed the web worker log window not showing any logs. Fixed some typos in the XU 6.0.0 release notes.|
|6.0.1 [L]|2023-09-08|Server|Fixed a bug where the web server port was not known after the update to version 6.|
|[6.0.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-6.0.0.html)|2023-09-07|General|**Breaking Changes!** We have rewritten the web API and runtime to improve long term ergonomics, stability and maintainability.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-6.0.0.html))|
|[5.27.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.27.0.html)|2023-08-22|DeltaQ|Added the new DeltaQ component([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.27.0.html))|
|5.26.6 [L]|2023-08-08|Destinations|Fixed Snowflake connection test for non-default schemas|
|5.26.5 [M]|2023-08-07|DeltaQ|Fixed conversion errors for some data types|
|5.26.4 [L]|2023-08-07|Destinations|Hana destination: upgraded data provider to version 2.17.22.0 and added support for BIGINT.|
|5.26.3 [L]|2023-08-03|Hierarchy|Removed XML config converter code for Hierarchy in old XML file format.|
|5.26.2 [L]|2023-08-03|General|Filterboxes will now be cleared after disconnecting.|
|5.26.1 [L]|2023-08-02|Destinations|Fix for rollback in Exasol destination not working properly when using transaction style OneTransaction.|
|5.26.0 [L]|2023-08-01|Query|New Query Extractor (config conversion required)|
|5.25.14 [L]|2023-07-27|Designer|Fixed a bug where the duration of extractions was displayed incorrectly when the extraction took longer than 24 hours|
|5.25.13 [L]|2023-07-18|General|Added support for BW Cube selection values in Script Expressions|
|5.25.12 [L]|2023-07-17|Hierarchy|Fixed a bug where runtime parameter "dateTo" was ignored|
|5.25.11 [L]|2023-07-14|Hierarchy|Fixed the 'hierarchyName' runtime parameter for Hierarchy extractions being ignored.|
|5.25.10 [L]|2023-07-14|Designer|Fixed a bug on displaying entries on the log window|
|5.25.9 [L]|2023-07-11|Destinations|Fixed escaping of table names that contain brackets|
|5.25.8 [L]|2023-07-10|Hierarchy|Fixed a bug where description texts were not extracted when the InfoObject name was shorter than expected.|
|5.25.7 [L]|2023-07-07|Destinations|Fix for not correctly escaped column names in Qlik scripts.|
|5.25.6 [L]|2023-06-30|General|Added filterboxes in the designer for name, type, source and destination. Changed initial sorting order for dates, removed the old filter tool and implemented right-click option in the datagrid to add keywords to several selected extractions|
|5.25.5 [L]|2023-06-22|Server|Fixed a bug where logging into the Designer with a valid AD-User would result in an authorization error.|
|5.25.4 [L]|2023-06-21|General|Added removed tablecdc component to xu-config|
|5.25.3 [L]|2023-06-16|Destinations|Added support for VS 2022 for SSRS/Power BI Report Server Plugin|
|5.25.2 [L]|2023-06-01|Designer|Fixed bug on extraction settings window when extraction was not yet fully configured|
|5.25.1 [L]|2023-05-31|Service|Added option to clone and delete extractions in the xu-config tool.|
|5.25.0 [L]|2023-05-26|Destinations|Added Huawei Cloud OBS destination (preview).|
|5.24.4 [L]|2023-05-17|BW Cube|Fix for missing columns after running config converter on old BW Cube MDX extractions.|
|5.24.3 [L]|2023-05-11|TableCDC|Added option to run initial load as background job|
|5.24.2 [M]|2023-05-09|TableCDC|Fixed a bug that could cause multiple records with the same key to be included in a CDC extraction result|
|5.24.1 [M]|2023-05-04|General|Table CDC extractions can now be created using xu-config|
|[5.24.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.24.0.html)|2023-04-27|Hierarchy|New Hierarchy Extractor - POSSIBLE BREAKING CHANGES for Hierarchy extractions([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.24.0.html))|
|5.23.4 [L]|2023-04-26|General|Added update reminder that will periodically show a pop up asking for an update.|
|5.23.3 [L]|2023-04-20|Designer|Added hotkey (F1) to open online help of current window|
|5.23.2 [L]|2023-04-13|Destinations|Fix for missing type handling on Snowflake destination (would crash with surrogate key)|
|[5.23.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.23.1.html)|2023-04-12|Destinations|Tableau destination now uses personal access tokens for authentication on Tableau Server/Cloud([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.23.1.html))|
|5.23.0 [L]|2023-04-06|General|Added surrogate key feature|
|5.22.1 [L]|2023-03-31|Setup|Setup now checks if there are any running processes and offers option to abort setup.|
|5.22.0 [H]|2023-03-29|TableCDC|Table CDC is now generally available.|
|[5.21.17 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.17.html)|2023-03-23|General|Fixed Kerberos Authentication issue in Power BI Report Server plugin for Report Server caused by connection pooling of net framework([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.17.html))|
|5.21.16 [L]|2023-03-13|Designer|Fix for server name validation on connect window|
|5.21.15 [L]|2023-03-10|TableCDC|Table CDC: Log table size can now be limited.|
|[5.21.14 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.14.html)|2023-03-07|Security|Custom authentication related security fixes and improvements.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.14.html))|
|5.21.13 [L]|2023-03-06|General|New EULA|
|5.21.12 [L]|2023-02-24|Designer|Fix for column mapping validation on designer, which would not allow to change the destination settings|
|5.21.11 [L]|2023-02-23|Destinations|Added support for key pair authentication on Snowflake destination|
|5.21.10 [L]|2023-02-14|Designer|Fix for designer unexpectedly closing the server connection when opening an unconverted extraction.|
|[5.21.9 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.9.html)|2023-02-10|Destinations|Oracle data provider updated and added support for connections to Oracle Autonomous DB.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.21.9.html))|
|5.21.8 [L]|2023-02-10|General|Fix extraction cache getting checked despite being disabled. Fix possible race condition in the RPC worker.|
|5.21.7 [L]|2023-02-10|General|Removed "Support Client" from Help menus. Added extraction type (Cube, Table, ...) being executed in extraction and server logs|
|5.21.6 [L]|2023-02-02|Destinations|GCS-Destination with file split: Aborting extraction deletes all uploaded parts.|
|5.21.5 [L]|2023-01-31|General|Fix a bug where empty lists in column transformation information would not correctly be serialized to JSON.|
|5.21.4 [L]|2023-01-30|Designer|S3 Destination: fixed a bug where when file splitting was turned on and a folder path specified, only the first part file would end up in the correct folder in S3.|
|5.21.3 [L]|2023-01-30|Destinations|Azure Storage: Added option to specify custom name for manifest file. Data will be placed in a separate folder that has the same name as the entity name.|
|5.21.2 [L]|2023-01-27|Destinations|Parquet: Added option to not replace some special characters in column names when using Spark compatibility mode|
|5.21.1 [L]|2023-01-21|Designer|Added support for server side RFC connection test with SSO configurations|
|5.21.0 [L]|2023-01-19|Security|Added support for External ID SSO|
|5.20.2 [M]|2023-01-18|Destinations|Azure Storage: Added option to generate and upload CDM files alongside the data. (preview)|
|5.20.1 [L]|2023-01-17|TableCDC|added icon for table cdc extractions shown in extractions list|
|5.20.0 [L]|2023-01-16|General|New conversion architecture (internal changes)|
|5.19.1 [L]|2023-01-15|Destinations|Fixes for column encryption metadata|
|5.19.0 [H]|2023-01-15|TableCDC|Added Table CDC extractor (preview)|
|5.18.3 [L]|2023-01-12|Destinations|Fixes for column name style|
|5.18.2 [L]|2023-01-11|Designer|Fix for minor displaying bug on the log window|
|5.18.1 [L]|2023-01-10|Destinations|Added append operation for Hadoop destination (only valid for csv files)|
|[5.18.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.18.0.html)|2023-01-10|General|Adjustments for ConfigConverter and date conversion (config conversion required)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.18.0.html))|
|5.17.2 [L]|2023-01-09|Destinations|Fix for ConfigConverter auto detection during setup|
|5.17.1 [L]|2023-01-09|Destinations|Fix for date zero replacement default (bug introduced in 5.17.0)|
|[5.17.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.17.0.html)|2023-01-08|Destinations|Internal changes for extraction-specific file destination settings (config conversion required)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.17.0.html))|
|5.16.15 [L]|2023-01-07|Destinations|Internal changes to destination setting serialization|
|[5.16.14 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.14.html)|2023-01-02|Destinations|Snowflake now deletes the remote staged file automatically([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.14.html))|
|[5.16.13 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.13.html)|2022-12-29|Destinations|Added support for Snowflake organization account identifier([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.13.html))|
|5.16.12 [L]|2022-12-20|Destinations|Fix for a possible collation issue when using the Prepare Merge statement in the Microsoft SQL Server destination.|
|5.16.11 [L]|2022-12-20|Destinations|Power BI Connector: Fixed an issue that caused the connector .pqx file to not be recognized by Power BI Desktop (Bug introduced in November 2022)|
|5.16.10 [L]|2022-12-19|General|SSRS Plugin now writes xml files with "pretty" formatting enabled.|
|5.16.9 [L]|2022-12-15|Server|Fixed a bug where RPC calls to fetch the most recent extraction runs would have an invalid format when log files for runs were missing.|
|5.16.8 [L]|2022-12-09|Designer|Fix for opening correctly the destination settings window (bug introduced in 5.16.7)|
|5.16.7 [L]|2022-12-02|Designer|Fix for bug that would crash the designer when opening extraction's settings with deleted destination|
|5.16.6 [L]|2022-11-30|Destinations|Fix for table names containing single quotes from script expressions in SQL Server destination.|
|5.16.5 [L]|2022-11-28|Server|Fixed a bug introduced in 5.14.1 where the JSON representation of the API for extractions sources and destinations erroneously was an array.|
|5.16.4 [L]|2022-11-25|Destinations|Azure Storage destination now logs WebExceptionStatus when an error in network communication with Azure occurs.|
|5.16.3 [L]|2022-11-23|Destinations|Qlik Sense: connection variable in script now automatically adapts to server settings.|
|[5.16.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.2.html)|2022-11-23|Destinations|Snowflake custom SQL fix and removal of timestamp on staged csv file name([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.16.2.html))|
|5.16.1 [L]|2022-11-21|Destinations|Tableau definition window now can display the site's projects hierarchy|
|5.16.0 [L]|2022-11-09|Setup|Added logic to abort setup due to running processes.|
|[5.15.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.15.0.html)|2022-10-28|General|Added column mapping feature, enabled for the file csv and Tableau destinations([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.15.0.html))|
|5.14.3 [L]|2022-10-26|Server|Fixed a bug where extractions would run into an error if the source or destination parameter is set.|
|5.14.2 [L]|2022-10-26|Destinations|Fixed an error that caused parquet to always use the column name style Code|
|5.14.1 [L]|2022-10-20|Designer|Fixed an error, which made it impossible to create new extractions. Fixed the handling of default values for the source of a new extraction.|
|5.14.0 [L]|2022-10-18|General|Removed Sources restriction check during license validation logic. Existing licenses will continue to work but the Sources restriction will not have any effect anymore.|
|5.13.2 [M]|2022-10-14|Designer|Various fixes for file extensions|
|5.13.1 [M]|2022-10-12|Destinations|Azure: Fixed a bug where using the Parquet Spark compatibility mode would not replace special characters in column names (breaking change)|
|5.13.0 [L]|2022-09-28|Destinations|Custom object names in destination settings now support script expressions.|
|5.12.5 [L]|2022-09-26|Table|added support for function modules /BODS/RFC_STREAM_READ_TABLE and /SAPDS/RFC_STREAM_READ_TABLE|
|5.12.4 [L]|2022-09-21|BW Cube|Fixed a bug that might cause the BWCube edit window to close unexpectedly when opening the General Settings.|
|5.12.3 [L]|2022-09-14|DeltaQ|GUI: Fix for "No valid name prefix defined"|
|5.12.2 [M]|2022-09-14|General|Fixed a bug where extractions of type Query, DeltaQ and Hierarchy could not be ran. (Bug introduced in 5.11.20)|
|5.12.1 [L]|2022-09-13|OHS|Removed "Refresh metadata" button|
|5.12.0 [M]|2022-09-08|OHS|New OHS component (with Table extraction mode and support for BW/4HANA 2.0)|
|5.11.22 [L]|2022-09-08|Designer|The Designer users privilege level is now correctly fetched from the server.|
|5.11.21 [L]|2022-09-06|Destinations|Qlik Sense: Script generator now creates a fail safe script|
|[5.11.20 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.20.html)|2022-09-06|Destinations|Where clause is now accessible through script expressions in destination folder path.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.20.html))|
|5.11.19 [M]|2022-08-29|BAPI|Fixed a bug that caused errors during metadata retrieval if the BAPI contains parameters where the same structure is included multiple times (bug introduced in 5.11.15)|
|5.11.18 [L]|2022-08-26|Designer|Fixed a bug where Primary Key settings would not be stored when editing an extraction.|
|5.11.17 [L]|2022-08-26|Destinations|Google Cloud Storage: Fixed a bug where users would not be able to run extractions when using service account authentication if XU Designer runs on different machine than XU Server.|
|5.11.16 [L]|2022-08-24|Destinations|Google Cloud Storage: Service account authentication is now supported.|
|5.11.15 [L]|2022-08-23|BAPI|Fixed a bug that caused legacy conversion for BAPI extractions to be skipped (introduced in 5.11.6)|
|[5.11.14 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.14.html)|2022-08-19|Destinations|Introduced empty value as null setting for the Snowflake destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.14.html))|
|5.11.13 [L]|2022-08-18|Designer|Fixed a bug causing an error on no fields being selected when editing a table extraction.|
|5.11.12 [L]|2022-08-17|Designer|Fixed a bug where deselecting all primary keys would result in restoring the default configuration for the primary keys|
|5.11.11 [L]|2022-08-17|Destinations|MySQL data provider updated to latest version (8.0.30)|
|5.11.10 [L]|2022-08-15|Designer|Fixed the behavior in the log on of the designer, which made it impossible to specify the domain name for windows authentication with different user.|
|5.11.9 [L]|2022-08-12|Server|Fixed an issue where the configuration server would send inconsistent data upon reading extraction runs if the user does not have access to the extraction.|
|5.11.8 [L]|2022-08-09|Destinations|Fixed a bug on Tableau destination that broke the communication with Tableau Server|
|5.11.7 [L]|2022-08-08|Designer|Fixed an issue where editing an extraction could cause the primary key information to get out of sync with the source system. Fixed an issue where when using AD-Authentication unnecessary AD-requests would slow down some designer actions|
|5.11.6 [H]|2022-08-04|BAPI|Fix for structures with includes, please refresh metadata|
|5.11.5 [L]|2022-07-28|Report|Fixed a bug where converting report extractions from pre 4.31.0 version would fail, if range selection options (between / not between) were defined on report parameters.|
|[5.11.4 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.4.html)|2022-07-26|Destinations|Introduced Tableau column mapping for existing .hyper files. It is required to update the Tableau Export Library folder.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.4.html))|
|5.11.3 [L]|2022-07-26|Destinations|Parquet: Added compatibility for BigQuery naming requirements|
|5.11.2 [L]|2022-07-21|BW Cube|Fix for converting ranges in variable and filter selections when running the config converter on BW Cube extractions.|
|[5.11.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.1.html)|2022-07-21|General|Added a popup on run window to get SAP credentials from caller([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.11.1.html))|
|5.11.0 [L]|2022-07-20|Destinations|Removed MicroStrategy destination|
|5.10.5 [L]|2022-07-08|General|Cleaning the result cache does now use the new RPC server/client capabilities instead of the Web server, which cause issues with custom authentication in the past.|
|5.10.4 [L]|2022-07-06|Destinations|Azure Storage destination: fixed a bug where connection to Azure didn't work. (Bug introduced in 5.9.4)|
|[5.10.3 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.10.3.html)|2022-07-04|Destinations|Introduced ODBC command timeouts for the Snowflake destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.10.3.html))|
|5.10.2 [M]|2022-07-01|Security|Fix for requesting SAP credentials at runtime|
|5.10.1 [M]|2022-07-01|Server|Fixed a bug that caused list runtime parameters to be ignored (Bug introduced in 5.8.4)|
|[5.10.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.10.0.html)|2022-07-01|General|Added extractions limit check([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.10.0.html))|
|5.9.4 [L]|2022-06-30|Destinations|Fixed a bug in S3 destination, where manually input bucket name would not be saved when IAM role authentication was selected.|
|5.9.3 [L]|2022-06-23|Destinations|Alteryx: Fixed a bug that caused errors when disabling date conversion|
|5.9.2 [L]|2022-06-17|Designer|Fixed a bug which cause threading related exceptions in various dialogs.|
|5.9.1 [L]|2022-06-10|Destinations|Fix for Snowflake settings serialization|
|5.9.0 [L]|2022-06-08|General|Removed support for legacy DLL licenses|
|5.8.15 [L]|2022-06-07|Designer|Azure Storage destination now logs the requests made to Azure.|
|5.8.14 [L]|2022-06-03|Designer|Fixed a bug, where after changing the service account sources would no longer be editable.|
|5.8.13 [L]|2022-06-02|Destinations|Introduced truncate only statement for Snowflake destination|
|5.8.12 [M]|2022-06-02|BAPI|Fixed a bug where primary keys where missing after upgrading|
|5.8.11 [L]|2022-05-31|Designer|Subdirectory support for the RPC server connection. (Not yet enabled in the UI and runtime)|
|5.8.10 [L]|2022-05-31|Destinations|Removed validation on Snowflake destination which forbade custom regions|
|5.8.9 [L]|2022-05-30|BW Cube|Support for Only_Structures behavior in MDX BEx Queries. Various bug fixes and general improvements for the Cube component.|
|5.8.8 [L]|2022-05-30|Designer|Fixed a bug where during authentication the users groups where not checked correctly.|
|5.8.7 [L]|2022-05-25|Destinations|Fix for truncate statement and introduced handling for multiple statements in the Snowflake destination|
|5.8.6 [L]|2022-05-24|Destinations|Added missing Snowflake legacy Azure region "North Europe (legacy)"|
|5.8.5 [L]|2022-05-20|General|Added parameter context on xu-config for ODP extractions|
|5.8.4 [L]|2022-05-18|Destinations|Fixed a bug where the SSRS/Power BI Report Server Destination would output rows multiple times. Was caused by an unfortunate combination of the buffer size used and a bug in the internal CSV parsing.|
|5.8.3 [L]|2022-05-18|Designer|The Designer does now correctly resolve IPv6 addresses.|
|5.8.2 [L]|2022-05-18|Designer|Readded former Snowflake Azure regions to keep backward compatibility|
|5.8.1 [L]|2022-05-16|Destinations|The flat-file CSV destination does now support file splitting.|
|5.8.0 [L]|2022-05-09|Destinations|Introduced KNIME destination|
|5.7.2 [L]|2022-05-05|Designer|Fix for displaying list runtime parameters, which affected source and destination parameters on run window|
|[5.7.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.7.1.html)|2022-05-04|General|New features for xu-config.exe([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.7.1.html))|
|5.7.0 [L]|2022-04-25|Table|Added graphical where clause editor.|
|5.6.3 [L]|2022-04-11|ODP|Selections can now be parameterized with lists of strings|
|5.6.2 [M]|2022-04-07|BW Cube|Now allowing extractions without measure selections in MDX mode. Added support for additional options in interval/complex BEx variable selections.|
|5.6.1 [L]|2022-04-05|Destinations|Exasol destination: fixed support for INT8 columns & data provider update to version 7.1.4|
|[5.6.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.6.0.html)|2022-04-04|BW Cube|New BWCube extractor (breaking)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.6.0.html))|
|5.5.0 [M]|2022-03-31|Table Join|Removed deprecated TableJoin component (JOINS are still supported by the Table component)|
|5.4.22 [L]|2022-03-28|Designer|About window was refactored|
|[5.4.21 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.21.html)|2022-03-28|Designer|Improvement on change source and change destination windows' click flows.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.21.html))|
|[5.4.20 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.20.html)|2022-03-25|Designer|Fix for log window's date filters([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.20.html))|
|5.4.19 [L]|2022-03-23|General|Added upload check script in order to confirm if the setup file has the expected version|
|5.4.18 [L]|2022-03-16|BAPI|Fixed an issue where runtime parameters inside of table rows were not applied correctly (Bug introduced in 5.4.0)|
|[5.4.17 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.17.html)|2022-03-15|Designer|Fix for the destination settings dialog, which was not correctly loading existing settings. Fix for an issue in the run window, where long running extraction involving a SQL destination would crash the designer.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.17.html))|
|5.4.16 [L]|2022-03-14|General|TLS errors when opening a Postgres connection are now more descriptive.|
|5.4.15 [L]|2022-03-10|General|Fixed occasional crashes in cached Cube and Bapi extractions. These Extraction types can contain empty cells, even in numeric columns. The cache did not handle this case and tried parse the empty string a a number. Added special cases to the cache reader.|
|[5.4.14 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.14.html)|2022-03-10|Destinations|Fix for Snowflake destination transaction control([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.14.html))|
|5.4.13 [M]|2022-03-08|General|Fixed an issue where system clock changes could cause errors |
|[5.4.12 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.12.html)|2022-03-07|Setup|Python setup script([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.12.html))|
|5.4.11 [L]|2022-02-28|Designer|Fixed the destination settings window, which did not load existing configurations. Improved error handling for corrupted extractions.|
|5.4.10 [L]|2022-02-25|Destinations|Azure Storage destination: fixed a bug where extraction would run into an error when using Append Blob type (bug introduced in 5.1.17)|
|[5.4.9 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.9.html)|2022-02-25|Designer|Various UI/UX improvements([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.9.html))|
|5.4.8 [M]|2022-02-24|Designer|Improvements for Designer authentication|
|5.4.7 [M]|2022-02-24|Designer|Source settings: Fix for checkboxes in Plain/Ticket Issuer tab getting unticked|
|[5.4.6 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.6.html)|2022-02-24|Designer|Fixes for handling corrupt/empty directories and files in the config and logs directories([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.6.html))|
|5.4.5 [L]|2022-02-24|Server|Fix for clearing result cache of extractions without source.json|
|[5.4.4 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.4.html)|2022-02-22|Designer|Fixed issues on the run window regarding the output displayer for Sql Server destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.4.html))|
|5.4.3 [L]|2022-02-21|Designer|Fix for log window refreshing bug when no run is selected|
|[5.4.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.2.html)|2022-02-18|General|Destination settings window uses the SAP object's name again and improvements on handling the designer disconnecting.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.4.2.html))|
|5.4.1 [L]|2022-02-17|Destinations|Fixed possible IndexOutOfRangeException in Oracle destination when using custom parameters e.g. in table where clauses.|
|5.4.0 [M]|2022-02-17|BAPI|Reworked BAPI component|
|[5.3.3 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.3.3.html)|2022-02-16|General|Fix for a connection issue and the designer becoming unresponsive in the destination settings.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.3.3.html))|
|[5.3.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.3.2.html)|2022-02-15|Designer|Various fixes and improvements following the 5.2.0 release.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.3.2.html))|
|5.3.1 [M]|2022-02-15|General|Fix for possibility of server not starting on fresh installations (broken since 5.2.0)|
|5.3.0 [M]|2022-02-15|General|Added support for certificate SSO and reworked source details GUI|
|5.2.1 [L]|2022-02-10|Designer|Fixed a bug where the log viewer for the web server would show the wrong logs.|
|[5.2.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.2.0.html)|2022-02-08|Designer|Make sure to update designer AND server!([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.2.0.html))|
|5.1.17 [L]|2022-02-07|Destinations|S3, Azure Storage, Google Cloud Storage: Removed unused certificate pinning from code.|
|5.1.16 [L]|2022-02-03|Destinations|Improved error message in SSRS Destination if an Extraction did not finish successfully.|
|5.1.15 [L]|2022-01-24|Designer|Disabling the output displaying for Sql Server destination on the run window|
|5.1.14 [M]|2022-01-18|General|Support for DLL licenses will be removed in June 2022. Please download your JSON licenses from my.theobald-software.com.|
|5.1.13 [M]|2022-01-17|Designer|Fix for run window that could not display the output for extractions with certain characters in their names|
|[5.1.12 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.12.html)|2022-01-14|Destinations|Parquet: Fix for Spark compatibility mode column names that contain not supported symbols([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.12.html))|
|5.1.11 [L]|2022-01-07|Destinations|Updated Tableau destination to VC++ 2015|
|5.1.10 [L]|2022-01-03|Destinations|Hadoop destination now supports script expressions in its remote folder setting|
|[5.1.9 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.9.html)|2022-01-03|Setup|Tableau's files are not anymore shipped along with XtractUniversal's setup([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.9.html))|
|5.1.8 [L]|2021-12-22|Designer|Introducing combo runtime parameters (source and destination) and URL copy notification on run window|
|5.1.7 [M]|2021-12-15|Designer|Fixed daylight saving time transition issue on log window|
|5.1.6 [L]|2021-12-10|Destinations|Adding column comments for tables created by the Snowflake destination|
|[5.1.5 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.5.html)|2021-12-09|Destinations|Introducing file size limit setting for the Snowflake destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.5.html))|
|5.1.4 [L]|2021-12-02|Destinations|Fix for uploading data into Snowflake when path or file have white spaces or special characters|
|[5.1.3 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.3.html)|2021-12-01|Designer|Improvements and fixes for the run window([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.1.3.html))|
|5.1.2 [L]|2021-11-09|Table Join|TableJoin will be removed March 2022|
|5.1.1 [L]|2021-11-05|Destinations|Fixed intermittent Deadlocks/Timeouts in the SSRS/PBIRS Data Extension in Visual Studio.|
|5.1.0 [L]|2021-11-04|Destinations|Introduced the Hadoop destination|
|5.0.3 [L]|2021-11-04|Setup|Fixed missing library issue (Theobald.Persistence) for Designer-only installation|
|5.0.2 [H]|2021-10-28|Designer|Fixed a bug that caused seemingly arbitrary error messages and erroneous dialog output after viewing extraction logs |
|5.0.1 [M]|2021-10-20|Server|Fixes & improvements for configuration version check|
|[5.0.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-5.0.0.html)|2021-10-18|General|SAP passwords are encrypted in context of XU service account (breaking)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-5.0.0.html))|
|4.32.19 [L]|2021-10-13|General|Added timestamp to the metadata API. Each extraction now shows when the last run was started, too.|
|4.32.18 [L]|2021-10-13|Destinations|Fix for handling correctly stage name's case sensitiveness on Snowflake destination|
|[4.32.17 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.17.html)|2021-10-11|Destinations|Fixed a Bug in the PowerBI Report Server (SSRS) Destination. All pending HttpRequests were cancelled everytime the DataExtension finished generating a Report. This caused intermittent failures when multiple reports were rendered at the same time by the Report Server.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.17.html))|
|4.32.16 [L]|2021-10-06|General|Fixed the preview mode setting, which was incorrectly disabled|
|4.32.15 [L]|2021-09-28|Destinations|Fixed a Bug in the SSRS Plugins for the Power BI Report Server (and VS). When the connection was configured to use the identity of the user viewing the report, the credentials of the Report Server (or VS) process were used instead. This caused the HTTPS/Kerberos authentication against XU to fail.|
|4.32.14 [L]|2021-09-23|Destinations|Power BI Destination: Fixed a bug where an error would occur in Power BI when an extraction returns 0 rows|
|4.32.13 [L]|2021-09-22|Server|Fix for log file collision when running many extractions at once. Fix for timeout when starting more extractions than cores in the machine at once.|
|4.32.12 [L]|2021-09-22|Destinations|Alteryx: Fixed a bug where RAW types changed from String to Blob and caused extractions to fail (introduced in 4.27.1). Updated the Alteryx SDK dependency version|
|4.32.11 [L]|2021-09-22|Destinations|MySQL destination allows entering custom server ports and was updated to use the latest data provider for MySQL (8.0.26.0) |
|[4.32.10 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.10.html)|2021-09-15|Destinations|S3 destination: fixed a bug in the rollback logic. Multiple internal changes.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.10.html))|
|4.32.9 [L]|2021-08-18|Destinations|Snowflake can read runtime parameters on custom sql statements|
|4.32.8 [M]|2021-08-12|Server|Increased timeouts for starting worker processes|
|4.32.7 [L]|2021-08-07|Designer|Option to set the bucket owner as object owner in S3 destination. (Beta) If listing S3 buckets failed, the name can now be set directly.|
|4.32.6 [L]|2021-07-29|General|xu.exe/xu.elf: Improved error message when directory is provided instead of file for option -f|
|4.32.5 [L]|2021-07-23|Designer|Designer startup logic refactored to WPF standards|
|4.32.4 [L]|2021-07-07|Destinations|Fixed a bug in MicroStrategy Attributes and Metrics generator.|
|4.32.3 [L]|2021-07-02|Destinations|Fixed CSV Parsing Bug in SSRS Data Extension|
|4.32.2 [L]|2021-07-02|Destinations|Fix for displaying the modes for Parquet files in Google Cloud Storage destination definition window|
|[4.32.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.1.html)|2021-07-01|Designer|Several UI/UX changes([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.32.1.html))|
|4.32.0 [L]|2021-06-25|General|xu.exe/xu.elf: Added support for HTTP Basic authentication|
|4.31.1 [L]|2021-06-23|Server|Multi-process architecture for configuration server|
|4.31.0 [M]|2021-06-16|Report|Report component has been reworked.|
|4.30.0 [L]|2021-06-10|Destinations|Added Query Builder UI for Reporting Services (SSRS) Data Extension in Visual Studio. Includes option to parameterize the Query String with dynamic runtime parameters. This is a breaking change for old reports (if query parameters were used). Added support for HTTPS authentication methods.|
|[4.29.6 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.6.html)|2021-05-28|Destinations|MicroStrategy folders are now entered by their ID instead of their name. This change is breaking.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.6.html))|
|4.29.5 [L]|2021-05-20|Designer|Fix for setting the target principal automatically on the connect window|
|4.29.4 [L]|2021-05-19|Server|New web listener implementation|
|4.29.3 [L]|2021-05-19|Destinations|S3 destination: when using file splitting, the uploaded part files will now be deleted when an error occurs during extraction.|
|[4.29.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.2.html)|2021-05-18|Destinations|S3, Azure Storage & Google Cloud Storage destination now prepend an 'x' to object names if they don't begin with a letter. This change is breaking.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.2.html))|
|4.29.1 [L]|2021-05-07|Destinations|S3 destination: fixed an issue where after creating a new S3 destination or editing an existing one, the destination could not be saved.|
|[4.29.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.0.html)|2021-05-07|Destinations|Added new Destination "Sql Server Reporting Services" and corresponding Data Extension Plug-ins for Visual Studio and Power BI Report Server.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.29.0.html))|
|4.28.8 [L]|2021-05-06|Security|Better TLS error messages for cloud destinations, Xu.exe/ Xu.elf and the ConnectWindow CertificatePinning for the ConnectWindow (ConfigServer) Several behavior fixes for the ConnectWindow|
|4.28.7 [L]|2021-04-27|ODP|Added package size setting as run parameter|
|4.28.6 [M]|2021-04-26|General|Various fixes for date conversion|
|4.28.5 [L]|2021-04-26|Designer|Fix for General Settings window, in order to display cache configuration correctly|
|4.28.4 [M]|2021-04-23|General|Fixed bug that prevented cache creation when datetime conversion was enabled|
|4.28.3 [M]|2021-04-23|General|Fixed bug that prevented extraction's result to be cached when column level encryption was disabled|
|4.28.2 [L]|2021-04-22|Destinations|MicroStrategy: Fixed an error in JSON creation|
|4.28.1 [L]|2021-04-22|Destinations|Column encryption - dynamic metadata file names|
|[4.28.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.28.0.html)|2021-04-21|Destinations|Extended script expressions in folder paths (Amazon S3 & Azure Storage)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.28.0.html))|
|4.27.18 [L]|2021-04-19|Designer|Fix for SharePoint on Premise connection test|
|4.27.17 [M]|2021-04-08|Destinations|Fixed bug for handling invalid TIME value on PostgreSql destination|
|4.27.16 [L]|2021-04-07|Destinations|AzureDWH destination has been renamed to Azure Synapse Analytics (SQL pool)|
|4.27.15 [L]|2021-04-06|ODP|Added hierarchyName run parameter|
|4.27.14 [L]|2021-03-31|General|Update license check.|
|4.27.13 [M]|2021-03-30|Destinations|Alteryx Plugin: Fixed a bug where enabling date conversion would result in errors during extraction|
|4.27.12 [L]|2021-03-29|Destinations|Private endpoint support for PostgreSQL destination|
|4.27.11 [M]|2021-03-24|General|Fixed an issue where the custom primary key selections were ignored |
|4.27.10 [L]|2021-03-19|Destinations|Upgrade of PostgreSql driver, Npgsql, to version 4.1.8|
|4.27.9 [L]|2021-03-16|Designer|Improvements for the run window and fix for displaying not handled errors|
|4.27.8 [L]|2021-03-02|Server|Fix for handling date type in deprecated CSV metadata API (please use JSON API instead)|
|4.27.7 [M]|2021-03-02|Destinations|Fix for HTTP - JSON destination|
|[4.27.6 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.27.6.html)|2021-03-02|Setup|Fixed an Alteryx plugin installation issue and added service start conditions([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.27.6.html))|
|4.27.5 [L]|2021-03-01|Destinations|Exasol: fix for invalid character error when writing DATE fields.|
|4.27.4 [L]|2021-02-25|Server|Added referenceTable field to result columns JSON HTTP API|
|4.27.3 [M]|2021-02-23|Destinations|Salesforce: Fixed two issues that caused extractions to fail when description texts of fields were empty or when date conversion was enabled.|
|4.27.2 [M]|2021-02-22|Server|Fixed a bug where the parameter HTTP-API failed for BAPI, BW Cube and TableJoin extractions. This also affected the Power BI connector and Alteryx plugin (Bug introduced in 4.27.1)|
|[4.27.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.27.1.html)|2021-02-17|Server|Added JSON HTTP API for extractions([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.27.1.html))|
|4.27.0 [L]|2021-02-11|Designer|New run extraction window|
|4.26.2 [H]|2021-02-08|Destinations|Parquet: Fixed a bug where NULL values could cause invalid files|
|4.26.1 [L]|2021-01-29|Server|xu-config (experimental): Fix for "License has expired" error|
|[4.26.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.26.0.html)|2021-01-29|Destinations|Azure Storage: Added support for script expressions in folder names([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.26.0.html))|
|4.25.3 [L]|2021-01-27|General|Fixed a bug where an unsupported file type was selectable in S3 and Azure Storage destinations. Fixed an issue in the Destination-Details window, where the resizing did not work properly. Fixed the logging when running extractions with column encryption enabled.|
|4.25.2 [M]|2021-01-27|Server|Fixed a bug where the /metadata HTTP API did not work when date conversion was enabled in the destination settings. This affected our external plugins (i.e. Alteryx & Power BI Connector/Script) (Bug introduced in 4.25.0)|
|4.25.1 [L]|2021-01-27|Designer|Fix for Designer disconnection handling|
|4.25.0 [L]|2021-01-22|Security|Column level encryption for the Destinations File-CSV, AWS S3 (CSV) and Azure Storage (CSV)|
|4.24.3 [L]|2021-01-22|Designer|Column filter and several other improvements and fixes for the main window|
|4.24.2 [L]|2021-01-14|Designer|General improvements for the certificate select window|
|4.24.1 [M]|2021-01-13|Server|Fix for ambiguous local timestamps during daylight saving time transition|
|4.24.0 [L]|2021-01-08|Destinations|Removed OData destination|
|[4.23.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.23.0.html)|2021-01-07|Destinations|Removed support for Tableau TDE([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.23.0.html))|
|4.22.1 [L]|2020-12-18|Destinations|Updated Exasol data provider to version 7.0.4 and improved write performance to support larger packages.|
|4.22.0 [M]|2020-12-10|Destinations|Qlik: It is now possible to select "Column Name Styles" in the settings of the destination to avoid duplicate column names in Qlik. The "use description text for column names" option was removed.|
|4.21.8 [L]|2020-12-02|Destinations|Performance improvements in HANA destination.|
|[4.21.7 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.7.html)|2020-12-02|Destinations|Added support for SAP Data Warehouse Cloud.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.7.html))|
|[4.21.6 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.6.html)|2020-12-01|Destinations|Snowflake destination driver change: SnowSql was replaced with ODBC([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.6.html))|
|4.21.5 [M]|2020-11-30|Destinations|Fix for Alteryx Plugin to support authentication with custom and windows AD users|
|4.21.4 [L]|2020-11-27|Designer|Included vertical scroll bar in source definition window|
|[4.21.3 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.3.html)|2020-11-20|Designer|UI fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.21.3.html))|
|4.21.2 [L]|2020-11-13|Destinations|Added new AWS regions to S3 destination.|
|4.21.1 [L]|2020-11-13|Designer|Fix for displaying extraction's primary key settings correctly |
|4.21.0 [L]|2020-11-11|Setup|New Setup|
|[4.20.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.20.0.html)|2020-11-06|Server|Web server access can now be restricted to custom users([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.20.0.html))|
|4.19.10 [L]|2020-11-05|Designer|Fixed an issue where certain UI elements in some windows looked blurry.|
|4.19.9 [M]|2020-11-02|Destinations|Fix for connecting to Tableau Online|
|4.19.8 [L]|2020-10-30|Destinations|S3 destination now supports splitting for Parquet and CSV files.|
|4.19.7 [L]|2020-10-24|Designer|Renamed Server->Logs to Server->Log (Run)|
|4.19.6 [L]|2020-10-22|Designer|Fix for setting Tableau Server configurations in definition window |
|4.19.5 [M]|2020-10-14|Destinations|Azure Storage destination: fixed connectivity issues to Azure Storage. Fixed a bug where if connection issues occurred during the upload of the last package, the data would not get sent again during retry.|
|4.19.4 [L]|2020-10-13|General|xu-config can create sources now|
|4.19.3 [M]|2020-10-12|Table|New/removed/renamed columns are now properly updated in GUI during metadata refresh|
|4.19.2 [M]|2020-10-06|ODP|Added 'extractDataOnDeltaInit' run parameter|
|4.19.1 [L]|2020-10-06|Destinations|Fixed a bug where Azure Storage destination didn't properly react to extractions failing.|
|4.19.0 [L]|2020-10-05|General|Added xu-config (experimental)|
|4.18.11 [L]|2020-10-02|Destinations|Google Cloud Storage: A progress dialog is now shown during the communication with Google auth servers while going through the OAuth procedure.|
|4.18.10 [L]|2020-09-30|Destinations|Fix for Snowflake row delimiter constant in the default file format creation statement|
|4.18.9 [M]|2020-09-28|Destinations|Qlik, PowerBI: Fixed a bug where extractions would fail when no data arrives.|
|[4.18.8 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.8.html)|2020-09-22|Designer|New status bar and other UI improvements([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.8.html))|
|4.18.7 [L]|2020-09-18|Designer|Qlik Sense: script generator now considers all possible parameters when creating the script.|
|4.18.6 [M]|2020-09-18|Server|Fix for cleaning Tableau temporary files|
|4.18.5 [L]|2020-09-17|Designer|Fix for custom sql window to accept new line and tab space creation|
|[4.18.4 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.4.html)|2020-09-16|Destinations|Various fixes and improvements for Tableau([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.4.html))|
|4.18.3 [L]|2020-09-16|Designer|Fix for access restriction grid control, which was requiring a double click to change its combo boxes check state|
|[4.18.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.2.html)|2020-09-15|Destinations|Included Google Cloud Platform regions for Snowflake destination ([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.2.html))|
|[4.18.1 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.1.html)|2020-09-14|Destinations|Implemented retry logic for web requests in Azure Storage destination and in AWS S3 destination.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.18.1.html))|
|4.18.0 [M]|2020-09-14|Destinations|Added Google-Cloud-Storage destination.|
|4.17.1 [L]|2020-09-11|Designer|New about window|
|[4.17.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.17.0.html)|2020-09-10|Destinations|The Parquet destination now offers a compatibility mode for Apache Spark([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.17.0.html))|
|4.16.7 [L]|2020-09-07|ODP|Added 'subscription suffix' and 'update mode' run parameters|
|4.16.6 [L]|2020-09-03|Destinations|UI fix for escape character parameter in CSV destination|
|[4.16.5 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.5.html)|2020-08-26|Destinations|SnowSql driver version 1.2.9 is now recommended for the Snowflake destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.5.html))|
|4.16.4 [M]|2020-08-21|Designer|Fix for bug on saving bucket in S3 definition window when using IAM role authentication mode|
|4.16.3 [L]|2020-08-17|Designer|General UI improvements and fixes|
|[4.16.2 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.2.html)|2020-08-17|Destinations|Qlike(Sense): Fixed a bug where QlikSense timed out after 5 minutes on the initial request ([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.2.html))|
|[4.16.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.1.html)|2020-08-13|Destinations|S3 destination now logs the requests to AWS S3 API.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.16.1.html))|
|4.16.0 [L]|2020-08-07|Designer|General WPF migration for XtractDesigner and other small UI improvements|
|4.15.0 [L]|2020-08-04|Destinations|OData destination is deprecated now. Creating/modifying destinations of type OData Atom is no longer possible. Running existing extractions is still supported until 2020-12-31.|
|[4.14.3 [H]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.14.3.html)|2020-07-31|Security|Enforcement of access restriction for the web server([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.14.3.html))|
|4.14.2 [L]|2020-07-30|Designer|Qlik Sense Script: Single quotes in where statements are now escaped; Run parameters now only appear in the script if they are selected in the Run-Dialogue.|
|4.14.1 [L]|2020-07-27|Designer|Qlik Sense script now formats fields of type decimal and minds date conversion checkbox when formatting dates.|
|[4.14.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.14.0.html)|2020-07-23|Destinations|Several improvements related to Parquet([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.14.0.html))|
|[4.13.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.13.1.html)|2020-07-16|Destinations|Azure Storage now has folder path setting in both destination definition settings and in extraction specific destination settings. Fixed a bug where using special characters in folder paths would cause an error during upload to Azure Storage.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.13.1.html))|
|4.13.0 [M]|2020-07-14|Setup|Removed SnowSQL installer|
|4.12.1 [M]|2020-07-10|Destinations|Salesforce: Fixes for merge row processing and column name style CodeAndText with multiple primary keys|
|4.12.0 [L]|2020-07-09|Destinations|Removed Alteryx Connect destination|
|4.11.26 [L]|2020-07-08|Destinations|http-odata-atom destination is no longer created by default|
|4.11.25 [L]|2020-07-08|Destinations|Several improvements and fixes for the Snowflake destination|
|4.11.24 [L]|2020-07-06|Destinations|Salesforce: Floating point values are now supported (they will be of type Text in Salesforce due to Number limitations)|
|4.11.23 [L]|2020-07-03|Designer|Qlik Sense script generation is now supported for the Qlik destination.|
|4.11.22 [L]|2020-07-03|Server|Fix for result caching on "Int8" data type.|
|4.11.21 [L]|2020-06-29|Designer|Fix for horizontal scrolling in log window|
|4.11.20 [M]|2020-06-26|Destinations|Remove line breaks from Snowflake's statements|
|4.11.19 [H]|2020-06-24|Destinations|Snowflake's driver auto upgrade disabled|
|4.11.18 [L]|2020-06-23|Destinations|Snowflake's regions list update|
|4.11.17 [M]|2020-06-22|Destinations|PowerBI & Alteryx plugins: Fixes & improvements for data type mapping|
|4.11.16 [L]|2020-06-22|Server|HTTP metadata API: Fixed letter case of ABAP type IDs|
|4.11.15 [H]|2020-06-22|Destinations|Enhancements in the communication between XtractUniversal and Snowflake's driver, SnowSql|
|[4.11.14 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.11.14.html)|2020-06-17|General|Fixes for timeouts and connection issues([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.11.14.html))|
|4.11.13 [L]|2020-06-12|Destinations|Salesforce: Added support for sandbox systems|
|4.11.12 [H]|2020-06-10|Destinations|Fix for Snowflake PUT command execution and increase of log verbosity for the same destination|
|4.11.11 [L]|2020-06-09|Destinations|Fixes for Salesforce destination|
|4.11.10 [M]|2020-06-08|Designer|New rules for names of extractions, sources and destinations: Letters a-z, numbers 0-9, minus (-) or underscore (_). Names no longer have to start with a letter.|
|4.11.9 [L]|2020-05-26|Server|ConfigConverter: Fix for Console buffers wider than 120|
|4.11.8 [L]|2020-05-26|Server|ConfigConverter now fixes invalid 3.x Table extractions using Z_THEO_READ_TABLE and conversion routines|
|4.11.7 [L]|2020-05-26|Designer|Fix in log window to show datetime using the 24 hours format|
|4.11.6 [L]|2020-05-20|Designer|License forward compatibility improvement for supported destinations.|
|4.11.5 [L]|2020-05-18|Designer|Fix for server name typing in connect window|
|4.11.4 [L]|2020-05-13|Designer|General designer bug fixes and improvements|
|4.11.3 [L]|2020-05-08|Destinations|Fix for Snowflake row counting |
|4.11.2 [L]|2020-05-05|Designer|New WPF log window|
|4.11.1 [M]|2020-05-04|Designer|GUI fixes for partially invisible destination settings (e. g. File CSV)|
|4.11.0 [L]|2020-04-29|General|Optimized internal dependencies.|
|4.10.0 [L]|2020-04-27|Destinations|Added Parquet destination|
|4.9.5 [L]|2020-04-27|Designer|Fix for disconnect designer|
|4.9.4 [L]|2020-04-23|General|Increased RFC network timeouts to 5 seconds|
|4.9.3 [L]|2020-04-23|Destinations|Azure Storage destination now support authentication with Azure Active Directory|
|4.9.2 [L]|2020-04-22|Designer|Fix for quit button in connect window|
|4.9.1 [L]|2020-04-21|Designer|Extraction filter window migration to WPF|
|4.9.0 [L]|2020-04-20|Designer|Main window migration to WPF|
|4.8.5 [L]|2020-03-30|Destinations|Snowflake driver SnowSql upgrade to version 1.2.5|
|4.8.4 [L]|2020-03-17|BW Cube|Fix for auto slicing MDX syntax on older SAP BW systems.|
|4.8.3 [M]|2020-03-12|ODP|Added support for runtime parameters|
|4.8.2 [L]|2020-03-11|Server|Added 'KEY' column to /metadata API |
|4.8.1 [M]|2020-02-27|Destinations|Added default destination 'http-json'|
|4.8.0 [M]|2020-02-26|Destinations|Added HTTP - JSON and Flat File - JSON destinations|
|4.7.2 [M]|2020-02-26|BAPI|Fix for STRING/XSTRING|
|4.7.1 [L]|2020-02-26|Server|Improved web server logging|
|4.7.0 [M]|2020-02-26|Security|Disabled TLS 1.1, enabled TLS 1.3|
|4.6.3 [L]|2020-02-24|Designer|Fix for editing empty extractions|
|4.6.2 [M]|2020-02-24|Destinations|Fix for editing/adding OData Atom destinations|
|4.6.1 [M]|2020-02-18|Server|Fixed a bug that caused extractions to get stuck on "running"|
|4.6.0 [M]|2020-02-07|Server|Fixes & improvements for result cache. Result cache is restricted to pull destinations now.|
|4.5.1 [L]|2020-02-05|Setup|Fix for silent installation not to hang when some prerequisites do not meet|
|4.5.0 [M]|2020-02-04|General|Updated to .NET Framework 4.7.2|
|4.4.4 [L]|2020-02-04|Destinations|Azure Storage destination now sets the MD5 hash of the blob when extracting to block blobs. This allows the uploaded files to be processed by AzCopy without having to turn off the MD5 check.|
|4.4.3 [M]|2020-02-03|Destinations|Power BI: Fixed a bug in packaging that caused extractions to fail on the client side|
|4.4.2 [M]|2020-01-31|Server|Fix for extracting binary values via BAPI, OHS & Query (...unable to cast...)|
|4.4.1 [M]|2020-01-30|Destinations|Fixed an arithmetic overflow issue in CSV-based destinations.|
|4.4.0 [L]|2020-01-28|Destinations|Removed Teradata destination|
|4.3.3 [L]|2020-01-28|Destinations|Azure Storage destination now allows splitting the output into multiple CSV files.|
|4.3.2 [M]|2020-01-28|Designer|Fixes for showing error messages while retrieving available Table function modules (e. g. missing authorizations for ENLFDIR)|
|4.3.1 [M]|2020-01-24|Destinations|Power BI: Dates before 01.01.0100 are now considered as invalid and converted accordingly|
|4.3.0 [L]|2020-01-14|Destinations|Removed Vertica destination|
|4.2.34 [L]|2020-01-10|Destinations|Upgrade of Oracle data provider. The provider is now included in setup.|
|4.2.33 [L]|2020-01-09|Destinations|Support for 64-bit signed integer in Sql Server destination|
|4.2.32 [L]|2020-01-08|Destinations|Support for 64-bit signed integer in Tableau destination|
|4.2.31 [L]|2019-12-30|Destinations|Snowflake region list updated|
|4.2.30 [L]|2019-12-19|DeltaQ|Fix for scripted expressions in selections|
|4.2.29 [M]|2019-12-18|Server|Fix for server not accepting any connections after 99h runtime|
|4.2.28 [M]|2019-12-17|DeltaQ| Fix for serialization info|
|4.2.27 [L]|2019-12-17|Destinations|Enhancements and fixes for the Snowflake destination|
|4.2.26 [L]|2019-12-16|Destinations|Updates for Exasol and MySQL destination. Their data providers are now included in setup.|
|4.2.25 [L]|2019-12-10|Destinations|Power BI: Adjusted the loading script so runtime parameters can be defined more easily|
|4.2.24 [M]|2019-12-05|Destinations|Tableau fix for integer type handling and general enhancements|
|[4.2.23 [H]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.23.html)|2019-12-03|ODP|Several fixes (Bugs introduced in 4.2.15.2)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.23.html))|
|4.2.22 [L]|2019-12-02|Destinations|Renamed "Azure Blob Storage" to "Azure Storage (Blob / Data Lake)"|
|4.2.21 [L]|2019-11-27|Destinations|Azure Blob Storage destination: Block Blob is now the default setting (previously Append Blob)|
|4.2.20 [M]|2019-11-22|Setup|Fixed installation of Tableau API|
|4.2.19 [L]|2019-11-21|Setup|Improvement for uninstalling script|
|[4.2.18 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.18.html)|2019-11-15|General|A portable version of the xu.exe running on x64 Linux can now be downloaded([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.18.html))|
|4.2.17 [L]|2019-11-14|Table Join|Fixes for creating deprecated Table Join extractions|
|4.2.16 [L]|2019-11-13|Destinations|Azure Blob destination now allows saving blobs in folders inside containers.|
|4.2.15 [M]|2019-11-12|Destinations|Snowflake's driver, SnowSql, upgraded to version 1.2.0|
|[4.2.14 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.14.html)|2019-11-11|Server|This version fixes two issues related to primary keys([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.14.html))|
|4.2.13 [M]|2019-11-05|Server|Fixed a bug that caused column names to be converted to UPPERCASE which caused problems for Hierarchy, Report and DeltaQ extractions|
|4.2.12 [M]|2019-11-04|Server|Fixed a bug that caused preview runs to fail (Bug introduced in 4.2.8)|
|4.2.11 [L]|2019-10-28|Destinations|Fix for slow performance on some Oracle destination extractions.|
|[4.2.10 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.10.html)|2019-10-25|Destinations|Several fixes and enhancements for Snowflake destination([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.10.html))|
|4.2.9 [M]|2019-10-24|Server|Fixed a bug that caused results of delta extractions (ODP and DeltaQ) to be cached and loaded from cache (Bug introduced in 4.0.0)|
|[4.2.8 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.8.html)|2019-10-23|Table|Several fixes and improvements([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.2.8.html))|
|4.2.7 [M]|2019-10-21|Server|Fixed a bug that caused the metadata API to yield an empty list of columns. This also affects the Alteryx Plugin and Power BI Connector|
|4.2.6 [L]|2019-10-14|Designer|Fixed a bug where updating multiple destinations would not update the last selected destination (introduced in 4.0.0) and improved destination settings UI|
|4.2.5 [L]|2019-10-10|Destinations|Fixed the UI for CSV based destinations|
|4.2.4 [L]|2019-10-08|Server|Fixed a bug that caused the servers to crash when clients closed the connection before it could be handled|
|4.2.3 [L]|2019-10-07|Destinations|Power BI Connector: Compatibility fix for older systems where all cells had conversion errors|
|4.2.2 [M]|2019-10-02|Destinations|Fix for column name style in the Alteryx plugin.|
|4.2.1 [M]|2019-10-01|Designer|Fixed a bug that prevented editing of freshly created extractions until the designer was refreshed (Bug introduced in 4.1.6.0)|
|4.2.0 [M]|2019-09-27|Destinations|Added Snowflake destination|
|[4.1.6 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.1.6.html)|2019-09-27|Destinations|Fixes for column names of database destinations and improved XSTRING support.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.1.6.html))|
|4.1.5 [L]|2019-09-26|Destinations|Power BI Connector: Workaround for a timeout bug in Power BI|
|4.1.4 [M]|2019-09-20|Server|Fixes for chaching results of Table (Compression FM) and ODP (non-Hierarchy)|
|4.1.2 [L]|2019-09-19|Destinations|Azure Blob and AWS S3: fixed a bug where column name style option was not respected.|
|[4.1.1 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.1.1.html)|2019-09-19|Destinations|Power BI Connector is now signed and can be trusted to keep the Power BI security settings on the recommended level([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.1.1.html))|
|4.1.0 [L]|2019-09-10|Destinations|Removed Power BI Service Destination (has been replaced by Power BI Connector Destination)|
|[4.0.9 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.9.html)|2019-09-09|Destinations|Fixes for Column Name Style related issues introduced in version 4.0.0([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.9.html))|
|4.0.8 [M]|2019-09-06|Table|Fixed a bug that caused scripted expressions to not be evaluated for the preview|
|4.0.7 [M]|2019-09-06|Destinations|Fixed a bug that caused extractions with custom SQL statements that contain variables to fail|
|4.0.6 [H]|2019-09-05|Destinations|Power BI Connector: Fixed an issue where Power BI would confuse regional settings causing conversion errors. Please update the .mez connector file|
|4.0.5 [M]|2019-09-04|Server|Fixed a bug that could cause some of multiple simultaneous extraction starts to fail |
|4.0.4 [L]|2019-09-04|Destinations|S3 destination now has the option to inherit the credentials from IAM role that is assigned to the EC2 instance where Xtract Universal server is running.|
|4.0.3 [L]|2019-08-29|Destinations|New encryption option for PostgreSql destination|
|4.0.2 [M]|2019-08-12|General|Fixed config conversion for primary keys when upgrading from versions before 4.0|
|4.0.1 [L]|2019-08-09|Destinations|Azure Blob Storage destination now supports extractions to block blobs.|
|[4.0.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.0.html)|2019-08-08|General|This release contains general changes, changes to the existing Table component as well as a new ODP component.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-4.0.0.html))|
|3.14.22 [L]|2019-08-07|Setup|Fixes for portable Designer zip|
|[3.14.21 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.14.21.html)|2019-07-29|Destinations|Power BI Connector: General Availibility (end of beta)([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.14.21.html))|
|3.14.20 [M]|2019-07-23|General|Updated NW RFC to 7.50 PL 4|
|3.14.19 [L]|2019-07-18|Destinations|Friendly message for failed destinations that require extra components and PostgreSQL full server version. |
|3.14.18 [L]|2019-07-15|General|Alteryx Plugin: Fixed app.config for plugin setup|
|3.14.17 [L]|2019-07-11|Destinations|Fixed a bug where CSV settings in S3 destination were not displayed correctly.|
|3.14.16 [L]|2019-07-09|Destinations|S3 destination now allows to save the files to folders and subfolders inside buckets.|
|3.14.15 [L]|2019-07-09|Destinations|Added support for Exasol 6.1.3|
|3.14.14 [H]|2019-07-01|Destinations|Redshift destination: Fixed TLS certificate validation (security fix)|
|3.14.13 [L]|2019-06-26|Report|Increased the row skip limit from 25 to 100.|
|3.14.12 [L]|2019-06-12|Setup|Update .NET framework download link for version 4.7.1|
|3.14.11 [L]|2019-06-06|Setup|Fix on message for .Net Framework installation check on setup, according to validation for version 4.7.1|
|3.14.10 [M]|2019-06-03|Server|Fixes & improvements for logging|
|3.14.9 [L]|2019-06-03|Designer|Renamed "PowerBI" destination to "Power BI Service"|
|3.14.8 [M]|2019-06-03|General|Fixes & improvements for cloning extractions|
|3.14.7 [L]|2019-05-27|Destinations|Small fixes for PostgreSQL destination|
|3.14.6 [L]|2019-05-21|Setup|Fixed silent uninstaller|
|3.14.5 [M]|2019-05-21|Designer|Fix for TableJoin (broken since 3.14.0).|
|3.14.4 [M]|2019-05-16|Table|Updated Z_THEO_READ_TABLE to 1.11|
|3.14.3 [M]|2019-05-14|Server|Fixed a bug that caused Kerberos requests to be rejected|
|3.14.2 [L]|2019-05-09|General|Using MSBuild 16|
|3.14.1 [M]|2019-05-09|Destinations|Fix for Azure Blob & S3 Destination (Could not load System.Net.Http)|
|3.14.0 [M]|2019-05-08|General|Updated to .NET Framework 4.7.1|
|3.13.4 [L]|2019-05-07|Destinations|Added a warning to the log, when bulk operations are disabled|
|3.13.3 [L]|2019-05-06|Destinations|Added PostgreSQL destination|
|3.13.2 [L]|2019-04-30|General|Added support for extraction variables in Power BI custom connector|
|3.13.1 [M]|2019-04-18|Server|Fixed a bug where starting multiple extractions at the same time caused some of them to fail|
|3.13.0 [L]|2019-04-15|General|Added Power BI Connector destination, extension & loading script (preview/beta)|
|3.12.5 [M]|2019-04-10|OData|Fixed a bug that caused $metadata requests to be rejected (Bug introduced in 3.11.0)|
|3.12.4 [L]|2019-03-29|Destinations|SQLServer / AzureDWH: Set command timeouts to 4h|
|3.12.3 [L]|2019-03-29|Designer|UI improvements for Connect window|
|3.12.2 [L]|2019-03-29|Destinations|Fixed a bug in the Exasol destination that caused invalid casts.|
|3.12.1 [L]|2019-03-28|Destinations|Fix for handling empty key fields in Redshift destination.|
|[3.12.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.12.0.html)|2019-03-26|General|Fixes & improvements for text encodings (CSV, OData) and xu.exe, updated to .NET Framework 4.6.1([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.12.0.html))|
|3.11.2 [L]|2019-03-15|Destinations|ConfigConverter renames old destinations containing space or @-symbol|
|3.11.1 [M]|2019-03-12|Server|Fix for aborting extractions and clearing result cache (Bug introduced in 3.11.0)|
|[3.11.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html)|2019-03-08|Security|Access to the web server can now be restricted to Active Directory users with Designer read access([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.11.0.html))|
|3.10.1 [L]|2019-03-06|Destinations|Fixes for compatibility to MicroStrategy 2019.|
|3.10.0 [L]|2019-03-01|General|Removed support for 32 bit versions of Windows|
|3.9.1 [L]|2019-02-22|Destinations|Fixed a bug where the extracted row count was calculated wrong in Azure Blob destination|
|[3.9.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.9.0.html)|2019-02-22|Server|The server can now impersonate Active Directory users using Kerberos([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.9.0.html))|
|3.8.7 [M]|2019-02-18|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.8.6 [L]|2019-02-18|Destinations|Fixes for value conversion in Redshift destination.|
|3.8.5 [M]|2019-02-13|Table|Reverted back to Z_THEO_READ_TABLE 1.9|
|3.8.4 [M]|2019-02-13|Table|Updated Z_THEO_READ_TABLE to 1.10|
|3.8.3 [L]|2019-02-08|Table|Updated Z_THEO_READ_TABLE to 1.9|
|3.8.2 [M]|2019-02-07|Table|Updated Z_THEO_READ_TABLE to 1.7|
|3.8.1 [M]|2019-02-06|BW Cube|Fix for decimals in BEx mode|
|3.8.0 [L]|2019-02-05|Destinations|Removed GoodData destination|
|3.7.10 [M]|2019-01-30|General|xu.exe: Fixed timeout while waiting for extraction to finish|
|3.7.9 [M]|2019-01-28|Table|Updated Z_THEO_READ_TABLE to 1.6|
|3.7.8 [L]|2019-01-28|General|Extraction log displays overridden parameter values again (entries missing since version 3.6.0)|
|3.7.7 [M]|2019-01-25|Table|Updated Z_THEO_READ_TABLE to 1.5|
|3.7.6 [L]|2019-01-24|Destinations|Fix for timeouts in Alteryx plugin.|
|3.7.5 [L]|2019-01-23|Setup|Tableau Extract API is automatically selected for re-installations|
|3.7.4 [M]|2019-01-23|Setup|Improved error message when Designer is still running during setup|
|3.7.3 [M]|2019-01-23|Table|Updated Z_THEO_READ_TABLE to 1.4|
|3.7.2 [L]|2019-01-23|Setup|Silent setup installs Tableau API and doesn't initiate config conversion|
|3.7.1 [L]|2019-01-23|Destinations|Changed isolation level to READ COMMITTED for Oracle destination to fix an error that may occur in some recent db releases.|
|[3.7.0 [L]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.7.0.html)|2019-01-22|Table|Added ABAP code + transport request for Z_THEO_READ_TABLE, removed old ABAP files([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.7.0.html))|
|3.6.6 [M]|2019-01-16|Report|Fix for empty column descriptions|
|[3.6.5 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.6.5.html)|2019-01-16|Destinations|Updated data provider support for the HANA and Oracle destinations.([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.6.5.html))|
|3.6.4 [L]|2019-01-10|Destinations|Alteryx: Fix for column name style|
|3.6.3 [L]|2019-01-07|Server|Fixed a bug where the libraries for Tableau destination could not be found|
|3.6.2 [M]|2019-01-03|DeltaQ|Fix for empty column description texts|
|3.6.1 [M]|2018-12-10|Security|Fix for converting old extractions that were restricted to built-in admin/administrators only|
|[3.6.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.6.0.html)|2018-12-04|General|Improved server robustness and parallelization([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.6.0.html))|
|3.5.14 [M]|2018-11-22|Designer|Fixed links of question mark icons|
|3.5.13 [M]|2018-11-22|Designer|Fix for Designer/Server communication ("The output byte buffer is too small to contain the encoded data")|
|3.5.12 [L]|2018-10-19|Query|Fixed a bug that caused queries without selection parameters to fail|
|3.5.11 [L]|2018-10-11|Destinations|SQLServer/AzureDWH: Increased timeouts to 4 hours|
|3.5.10 [L]|2018-10-11|Server|Fix for converting primary keys of query extractions from versions before 3.0|
|3.5.9 [L]|2018-10-11|General|Fix for transport request with certain SAP releases|
|3.5.8 [L]|2018-10-10|Server|Fix for converting sources from version 2.x (bug introduced in 3.5.2)|
|3.5.7 [L]|2018-10-09|Server|Fix for timeout during startup with large number of extractions|
|3.5.6 [L]|2018-10-04|Table|Added auto detection of compression function modules|
|3.5.5 [L]|2018-10-02|Table|Added support for RFC_READ_TABLE2 function modules|
|3.5.4 [M]|2018-10-01|Destinations|Database destinations: Fix for NULLs /  empty strings in SAP source values|
|3.5.3 [L]|2018-09-28|Designer|Added support for searching Active Directory users/groups in other domains|
|3.5.2 [M]|2018-09-28|Server|Fixes & improvements for converting configuration & logs from Xtract Universal before 3.x and Xtract QV|
|3.5.1 [L]|2018-09-25|General|Reduced network timeout for opening SAP connections|
|3.5.0 [M]|2018-09-24|General|Duration of extraction runs is now recoreded and displayed in main window and log viewer|
|3.4.1 [L]|2018-09-21|Destinations|Oracle: Fix for binary types larger than 1000 bytes (BLOB, e. g. table STXL), updated ODP.NET to 12.2|
|3.4.0 [M]|2018-09-19|Destinations|Alteryx Plugin: SAP credentials and run parameters can now be mapped to input fields for dynamic population at workflow runtime|
|3.3.15 [M]|2018-09-17|Server|Fixed missing row restriction in live preview (Table, TableJoin)|
|3.3.14 [M]|2018-09-13|Designer|Fix for changing primary key of Query and Table extractions|
|3.3.13 [L]|2018-09-12|Designer|Editing the source of multiple extractions at once is now supported|
|3.3.12 [L]|2018-09-11|General|Updated NWRFC libraries to 7.50|
|3.3.11 [L]|2018-08-30|General|Updated NWRFC libraries to 720 patchlevel 49|
|3.3.10 [M]|2018-08-28|Table|Fix for "use conversion routines" checkbox|
|3.3.9 [L]|2018-08-17|Destinations|MicroStrategy destination: Added ability to define folder name. |
|3.3.8 [L]|2018-08-15|Setup|Tableau: Added VC++2015 for Hyper|
|3.3.7 [M]|2018-08-14|General|Fix for primary key with all extraction types except Hierarchy, Table and Query (broken since 3.0).|
|3.3.6 [L]|2018-08-14|Setup|Installation of Tableau Extract API is now optional|
|3.3.5 [M]|2018-08-13|Destinations|Tableau: Updated Hyper SDK to 2018.2|
|3.3.4 [L]|2018-08-13|Destinations|Tableau: Fix for multiple instances of TDE SDK on same machine|
|3.3.3 [L]|2018-08-09|DeltaQ|Removed Z_XTRACT_DELTAQ_CUST from transport request, because of problems with missing data types|
|3.3.2 [L]|2018-08-09|Server|Added support for converting old xml destinations|
|3.3.1 [L]|2018-08-09|Destinations|Tableau Destination: Fixed connectivity issues with default sites|
|3.3.0 [M]|2018-08-08|Destinations|Added Alteryx Connect Destination|
|3.2.4 [L]|2018-08-08|Destinations|Tableau Destination: fixed an error when trying to select a project from default site|
|3.2.3 [M]|2018-08-07|Security|Explicitly enabled TLS1.1 & 1.2, disabled TLS1.0 & SSL3|
|3.2.2 [L]|2018-08-06|Destinations|Fix for missing log run in browser (Azure Blob & S3)|
|3.2.1 [M]|2018-08-03|Designer|Fixed help links (question mark button)|
|3.2.0 [M]|2018-07-24|General|Added support for non-Unicode multibyte systems (Asian characters), removed background extraction (Table)|
|3.1.15 [L]|2018-07-17|Report|Updated the function module for report extracting|
|3.1.14 [L]|2018-07-12|Destinations|SQLServer: TLS encryption can be enforced now|
|3.1.13 [M]|2018-07-12|Server|Fix for run parameter 'destination'|
|3.1.12 [M]|2018-07-12|Server|Fix for selecting X.509 certificates|
|3.1.11 [L]|2018-07-05|Server|Server configuration: Fix for converting default Int values from V2.x (e. g. config server starting on port 0 in some cases)|
|3.1.10 [L]|2018-06-29|Destinations|Tableau Destination: now supports Hyper extracts and Tableau 10.5+ project structure|
|3.1.9 [L]|2018-06-26|Destinations|Added support for MicroStrategy 10.11.|
|3.1.8 [L]|2018-06-22|Server|Fix for metadata API (e. g. Alteryx)|
|3.1.7 [L]|2018-06-21|Designer|Fix for connect window showing when connected|
|3.1.6 [M]|2018-06-21|Table|Fix for scripted expressions in WHERE (not working since 3.0.0.0)|
|3.1.5 [M]|2018-06-21|Server|Stability improvements for broken extractions (Alteryx, CSV API)|
|3.1.4 [M]|2018-06-21|General|Designer communication: Stability improvements|
|3.1.3 [M]|2018-06-21|Designer|GUI fixes (buttons not visible at some screen resolutions etc.)|
|3.1.2 [L]|2018-06-14|Destinations|Fixed a bug in the MicroStrategy destination, that caused cubes to be unintentionally replaced in some situations.|
|3.1.1 [L]|2018-06-08|Destinations|Added definition of MicroStrategy attributes and metrics.|
|3.1.0 [M]|2018-05-30|Security|Added "Require SAP credentials" to source, removed X.509 certificate path (please configure via SNC solution)|
|3.0.8 [M]|2018-05-30|BW Cube|Set package size to 20.000 for new extractions|
|3.0.7 [L]|2018-05-30|Destinations|SQLServer/AzureDWH: Increased timeouts to 60 minutes|
|3.0.6 [M]|2018-05-24|General|Fixes & improvements for Designer/Server communication|
|3.0.5 [M]|2018-05-24|Designer|Fix for sorting columns|
|3.0.4 [M]|2018-05-24|Designer|Main form scrolls to selected row after refresh|
|3.0.3 [M]|2018-05-24|Security|Option "Require SAP credentials" implicitly disables result cache now|
|3.0.2 [H]|2018-05-24|Security|Option "Require SAP credentials" could not be modified for all extraction types except for Hierarchy, Query and Table|
|3.0.1 [M]|2018-05-22|Server|Fix for converting security settings|
|[3.0.0 [M]](https://kb.theobald-software.com/release-notes/XtractUniversal-3.0.0.html)|2018-05-17|General|Improvements for Designer/Server communication, security and configuration persistence([Release note](https://kb.theobald-software.com/release-notes/XtractUniversal-3.0.0.html))|
|2.109.7 [M]|2018-05-16|BW Cube|Fix for decimal count in MDX mode|
|2.109.6 [L]|2018-04-17|General|Updated EULA|
|2.109.5 [L]|2018-04-06|Destinations|Extended error logging in exasol destination.|
|2.109.4 [L]|2018-03-06|Destinations|Alteryx Plugin: adjustment for Alteryx SDK for columns with more than 15 decimals places|
|2.109.3 [L]|2018-02-07|Server|Fixed a bug with extraction metadata.|
|2.109.2 [L]|2018-02-01|Destinations|Fix for Drop And Create update policy in MicroStrategy destination.|
|2.109.1 [L]|2018-01-15|Server|Improved handling of multiple http requests to the xtract universal server.|
|2.109.0 [L]|2017-12-22|Destinations|Added MicroStrategy destination.|
|2.108.8 [M]|2017-12-05|Destinations|OData: Fix for Excel/PowerPivot 2016|
|2.108.7 [L]|2017-12-04|Destinations|Fixed an issue in S3 destination where extracting a large amount of rows would cause an overflow|
|2.108.6 [L]|2017-12-04|Destinations|Improved error handling in S3 destination|
|2.108.5 [L]|2017-12-01|Destinations|Added basic authentication to Alteryx plugin|
|2.108.4 [L]|2017-11-30|Designer|Fixes for GUI scaling|
|2.108.3 [L]|2017-11-30|General|Updated transport for Z_XTRACT_IS_TABLE_JOIN|
|2.108.2 [L]|2017-11-27|Destinations|Improved error handling for S3 destination|
|2.108.1 [M]|2017-11-21|Destinations|Fix for Alteryx plugin setup|
|2.108.0 [M]|2017-11-20|Destinations|Added Azure Blob Storage destination|
|2.107.11 [L]|2017-11-20|Table Join|Adjustments in Z_XTRACT_IS_TABLE_JOIN function.|
|2.107.9 [M]|2017-10-02|Destinations|EXASOL: Fix for DBNull values|
|2.107.8 [L]|2017-09-15|Destinations|CSV: Improved error message|
|2.107.7 [L]|2017-09-13|Designer|Disabled "..." button when creating new extraction without admin privileges|
|2.107.6 [L]|2017-09-12|Destinations|SQLServer - Prepare Merge: Fix for collations|
|2.107.5 [M]|2017-09-12|Destinations|Fix for "Finalize Merge"|
|2.107.4 [M]|2017-09-08|Destinations|Fixes & improvements for Oracle destination|
|2.107.3 [L]|2017-09-08|Destinations|Fix for Oracle Destination (bug introduced in 2.107.0.0)|
|2.107.2 [M]|2017-09-08|Destinations|EXASOL: Fix for DBNull values|
|2.107.1 [M]|2017-09-06|BW Cube|Fix for BWCube|
|2.107.0 [M]|2017-09-05|Destinations|Merge with staging table is now available for all database destinations|
|2.106.0 [M]|2017-09-05|Destinations|Added Amazon S3 Destination|
|2.105.17 [L]|2017-08-11|General|License: Added support for FQDN|
|2.105.16 [L]|2017-08-04|General|Updated ABAP code & transports|
|2.105.15 [L]|2017-08-04|BAPI|Fix for switching between non-Unicode and Unicode systems|
|2.105.14 [L]|2017-08-03|General|License: Added support for server names longer than 15 bytes|
|2.105.13 [L]|2017-07-12|Designer|Fix for "the specified network password is not correct"|
|2.105.12 [M]|2017-07-06|DeltaQ|Enabled automatic synchronization by default|
|2.105.11 [L]|2017-07-05|General|Fix for server license check in clusters|
|2.105.10 [L]|2017-07-04|General|Improved error message for license server mismatch|
|2.105.9 [L]|2017-07-03|Server|Fix for "the specified network password is not correct"|
|2.105.8 [M]|2017-06-22|Server|Server no longer runs separate app domain|
|2.105.7 [L]|2017-06-02|Server|Fixes & improvements for result cache|
|2.105.6 [L]|2017-05-31|BW Cube|Added setting "legacy metadata retrieval"|
|2.105.5 [L]|2017-05-24|Destinations|SharePoint: Fix of the merge operation for some users (GetListItems failed).|
|2.105.4 [M]|2017-05-09|Table|Z_XTRACT_IS_TABLE_COMPRESSION: Added support for decimal floats|
|2.105.3 [L]|2017-05-08|General|Fix for Alteryx and Qlik support in xu.exe|
|2.105.2 [L]|2017-05-02|General|Fix in xu.exe for extraction names with length of 1 character.|
|2.105.1 [L]|2017-04-27|Destinations|Added support for Tableau server 10.2|
|2.105.0 [M]|2017-04-26|DeltaQ|Moved server pool to separate process|
|2.104.2 [L]|2017-04-18|Table Join|Fixes for TableJoin data transfer|
|2.104.1 [M]|2017-04-06|Designer|Fixes for destination multiselect|
|2.104.0 [L]|2017-04-03|Designer|Destination of more than one extractions can be changed at once|
|2.103.9 [L]|2017-03-29|BW Cube|Fix for buffer error when output column transformation exchanged measure with dimension or vice versa|
|2.103.8 [L]|2017-03-28|General|xu.exe: Increased error tolerance|
|2.103.7 [L]|2017-03-23|OHS|Ignoring SAP error 307 (empty result)|
|2.103.6 [H]|2017-03-17|Destinations|CSV: Fix for missing values (bug introduced in 2.103.3)|
|2.103.5 [M]|2017-03-16|Server|Reduced amount of messages in server log|
|2.103.4 [M]|2017-03-16|General|Fixed wrong xu.exe exit code when extraction was aborted|
|2.103.3 [M]|2017-03-10|Destinations|CSV: Fix for NULL values|
|2.103.2 [L]|2017-03-09|Destinations|EXASOL: Fix for null values and improved error message|
|2.103.1 [L]|2017-03-09|General|Updated build tools to MSBuild 15.0|
|2.103.0 [L]|2017-03-01|General|Improvements to XtractUniversal command line tool.|
|2.102.0 [L]|2017-02-23|Destinations|Added transaction selection dropdown to table destinations. Switched to the Redshift ODBC driver. Fixed HANA transaction commit issues.|
|2.101.1 [M]|2017-02-14|Destinations|Comparison of project names on Tableau Server is case-insensitive now|
|2.101.0 [L]|2017-02-10|Destinations|Added Extraction.RunState and Extraction.Timestamp for scripted expressions|
|2.100.3 [L]|2017-02-08|General|Fix for "Keyset does not exist" in certain AD environments|
|2.100.2 [L]|2017-01-27|Service|Fixed serviceLog.txt|
|2.100.1 [L]|2017-01-24|Destinations|Destination name and type is written to extraction log now|
|2.100.0 [M]|2017-01-23|General|Updated to .NET Framework 4.5.2|
|2.99.4 [L]|2017-01-19|Destinations|Improved error messages for failed HANA connection tests.|
|2.99.3 [L]|2017-01-18|Destinations|Bug fix in data conversion for HANA destinations.|
|2.99.2 [L]|2017-01-12|Setup|VC++2013 installer is silent now|
|2.99.1 [M]|2017-01-11|Designer|Source: Fix for file/directory pickers|
|2.99.0 [L]|2017-01-11|General|Updated licensing to support json format.|
|2.98.7 [L]|2017-01-09|BW Cube|Fix for missing primary key when order of output columns is modified|
|2.98.6 [L]|2017-01-04|DeltaQ|Select options support either variables or scripted expression, but not both|
|2.98.5 [L]|2017-01-04|Table|WHERE-clause supports either variables or scripted expression, but not both|
|2.98.4 [L]|2016-12-22|BW Cube|Added detection of missing authorization for RFC_READ_TABLE|
|2.98.3 [M]|2016-12-21|Setup|Tableau: VC++2013 is now optionally installed at the end|
|2.98.2 [M]|2016-12-20|Setup|Tableau: Added VC++2013 redistributable to setup|
|2.98.1 [L]|2016-12-14|BW Cube|BWCube date exception handling improved|
|2.98.0 [M]|2016-11-25|DeltaQ|Resending errors is deprecated now|
|2.97.4 [L]|2016-11-22|Designer|Renamed "Upsert" statment to "Merge (Upsert)"|
|2.97.2 [M]|2016-11-17|Destinations|CSV: Date conversion uses empty string as NULL replacement instead of "NULL"-string|
|2.97.1 [L]|2016-11-17|Destinations|Fixed wrong table name generation in HANA destination|
|2.97.0 [M]|2016-11-14|Destinations|Fixes for name-delimiters in column names (DB destinations)|
|2.96.0 [L]|2016-11-14|Destinations|Extraction errors are passed to alteryx now|
|2.95.0 [L]|2016-11-11|Destinations|Added HANA destination.|
|2.94.2 [L]|2016-11-09|Destinations|Optimized the MySQL library warning|
|2.94.1 [L]|2016-11-02|Report|Fix for report preview with parameters|
|2.94.0 [L]|2016-10-31|Destinations|Added support for undeclared parameters (e. g. for custom SQL)|
|2.93.1 [L]|2016-10-20|BW Cube|Improved lookup error handling|
|2.93.0 [M]|2016-10-18|Setup|Updated transport request thtrans.zip|
|2.92.3 [L]|2016-10-18|DeltaQ|Added URL-parameter logicalDestination|
|2.92.2 [L]|2016-10-18|DeltaQ|Added update mode for activation only ('A')|
|2.92.1 [L]|2016-10-18|DeltaQ|Fix for updateType URL-parameter|
|2.92.0 [L]|2016-10-14|Destinations|Added new MySQL ADO.NET driver support|
|2.91.0 [L]|2016-10-11|BW Cube|Output transformation allows removal of columns now|
|2.90.4 [L]|2016-10-08|General|Added log entry for SAP application server / system number|
|2.90.3 [L]|2016-10-04|General|Fixed a licensing bug in the SharePoint destination.|
|2.90.2 [L]|2016-10-04|Destinations|Fix for preparation command timeout (DB destinations)|
|2.90.1 [L]|2016-09-28|Destinations|Fixed timeout error for alteryx destination.|
|2.90.0 [M]|2016-09-28|DeltaQ|All hierarchies may be activated now|
|2.89.0 [M]|2016-09-26|Server|Finalization statement is skipped now in case of errors|
|2.88.0 [M]|2016-09-26|Server|Queued data packages are dropped now in case of errors|
|2.87.3 [L]|2016-09-24|Destinations|File CSV: Date conversion is disabled for extractions from previous versions|
|2.87.2 [L]|2016-09-19|Destinations|Fixes for Tableau destination (older Windows versions, 32-bit)|
|2.87.1 [L]|2016-09-15|Report|Fix for preview without columns but "automatic column detection" enabled|
|2.87.0 [L]|2016-09-12|Server|Added HTTP/CSV API for destinations|
|2.86.2 [L]|2016-08-30|Server|Fix for HTTP content type when running extractions with push destinations|
|2.86.1 [M]|2016-08-25|BAPI|Fix for passing values to tables|
|2.86.0 [M]|2016-08-23|BAPI|Added support for export parameters & multiple tables in result|
|2.85.2 [L]|2016-08-22|Table|Removed 'bg' run parameter|
|2.85.1 [M]|2016-08-22|General|Removed client, mshost, r3name, group, ashost, sysnr, ashost connection parameters|
|2.85.0 [M]|2016-08-22|General|Added 'source' and 'destination' run parameters|
|2.84.4 [L]|2016-08-22|Destinations|Increased timeout for finalization statement to 30 minutes|
|2.84.3 [M]|2016-08-19|Destinations|Updated Tableau SDK to 10.0.0|
|2.84.2 [M]|2016-08-12|Destinations|Updated Tableau SDK to 9.3.4|
|2.84.0 [L]|2016-08-05|Destinations|Fix for Power BI authentication|
|2.83.4 [L]|2016-08-03|Server|Improved handling of empty results|
|2.83.3 [L]|2016-08-02|Destinations|Fix for Power BI with an old access token|
|2.83.2 [L]|2016-08-02|Server|Using wait=false returns timestamp of run now|
|2.83.1 [L]|2016-08-02|DeltaQ|Fix for DeltaQ hierarchy datasources|
|2.83.0 [L]|2016-07-28|Destinations|Alteryx: added support for description texts of columns|
|2.82.3 [L]|2016-07-25|Hierarchy|DataTo attribute can be set through a variable|
|2.82.2 [M]|2016-07-22|DeltaQ|Disabled caching for all update types except "full"|
|2.82.0 [L]|2016-07-21|Server|Added "wait" parameter for running extractions|
|2.81.16 [L]|2016-07-21|Destinations|SQLServer/AzureDWH: Increased timeouts to 30 minutes|
|2.81.15 [L]|2016-07-18|Destinations|Increased SQL server command timeout to 600 sec.|
|2.81.14 [M]|2016-07-12|DeltaQ|Fix for DeltaQ activation|
|2.81.13 [M]|2016-07-12|DeltaQ|Re-enabled result buffering|
|2.81.12 [L]|2016-07-11|Destinations|Added OpenUrlTimeout to Qlik script generator|
|2.81.11 [L]|2016-07-05|Service|Service account settings are preserved during updates|
|2.81.9 [M]|2016-06-27|Server|Increased default for ListenerThreads to 8|
|2.81.8 [L]|2016-06-16|Destinations|CSV: Empty column/row/decimal separtors and quote symbol are replaced with defaults|
|2.81.7 [L]|2016-06-16|General|Reverted default RFC library to classic|
|2.81.6 [L]|2016-06-08|Destinations|Increased maximum length of custom SQL|
|2.81.5 [L]|2016-06-07|Destinations|SharePointDestination: Improved error messages for invalid sites and access restrictions.|
|2.81.4 [L]|2016-06-06|Designer|Improved "Edit SQL" window|
|2.81.3 [L]|2016-05-31|Destinations|Increased size of Oracle data source text box for clusters etc.|
|2.81.2 [L]|2016-05-31|Destinations|SharePointDestination: Fixed exception handling in connection test for SharePoint Online.|
|2.81.0 [L]|2016-05-27|Destinations|Fix in Power BI convert|
|2.80.0 [M]|2016-05-24|Destinations|Description texts can be used in column names now|
|2.79.0 [M]|2016-05-24|Destinations|Improvements and fixes for Power BI destination|
|2.78.0 [L]|2016-05-24|Destinations|Added Azure DWH destination|
|2.77.0 [M]|2016-05-24|Destinations|SQL Server: Bulk inserts are enbaled by default|
|2.76.1 [L]|2016-05-20|Destinations|DB2 & Vertica: improved SQL lengths for NUMC and RAW (were larger than neccessary)|
|2.76.0 [L]|2016-05-19|Destinations|Removed XML destination|
|2.75.5 [L]|2016-05-18|Destinations|SharePointDestination: Changed mode 'Drop & Create' to 'Drop, Create & Insert', set as default for newly created destinations.|
|2.75.4 [L]|2016-05-17|Destinations|Fix for DB2 destination|
|2.75.3 [L]|2016-05-11|Destinations|SharePointDestination: Added more detailed error message for the connection test.|
|2.75.2 [L]|2016-05-09|Table Join|Updated Join dialog logic|
|2.75.1 [L]|2016-05-06|Destinations|XML: Fix for INT1 and INT2|
|2.75.0 [L]|2016-05-04|Destinations|Added Qlik destination|
|2.74.1 [L]|2016-05-04|General|Replaced support client executable with download link|
|2.74.0 [L]|2016-05-03|Destinations|Added support for run parameters to Alteryx destination|
|2.73.1 [M]|2016-04-26|Destinations|File CSV & Alteryx: Fix for InvalidCast while reading from buffer|
|2.73.0 [M]|2016-04-20|General|Reverted back to classic RFC as default|
|2.72.0 [L]|2016-04-19|General|Added Alteryx destination|
|2.71.0 [M]|2016-04-18|General|NetWeaver RFC libraries are used by default now instead of classic RFC libraries|
|2.70.3 [L]|2016-04-18|Destinations|Fixes and improvements for GoodData|
|2.70.2 [L]|2016-03-16|Destinations|File CSV: Fix for 'column separator after last row'|
|2.70.1 [L]|2016-03-14|Destinations|Fix for custom variables in row processing statements|
|2.70.0 [L]|2016-02-19|Setup|Added Tableau libraries to main setup|
|2.69.6 [L]|2016-02-15|Report|Added look up for report variants.|
|2.69.5 [L]|2016-02-11|Destinations|Broken extraction files don't break OData $metadata anymore|
|2.69.4 [L]|2016-02-11|Destinations|Bug fix in Redshift destination.|
|2.69.3 [M]|2016-02-09|Destinations|Fix for OData metadata (was broken since 2.65.0)|
|2.69.2 [L]|2016-01-27|Destinations|SharePointDestination: Fixed URL handling and connection test|
|2.69.1 [L]|2016-01-26|Destinations|TableauDestination: Added option to delete local files after upload, added remote replace when 'append' is selected, minor UI changes.|
|2.69.0 [L]|2016-01-26|General|Removed DateFormat server setting|
|2.68.0 [M]|2016-01-22|Destinations|Added date conversion settings to CSV destination|
|2.67.0 [L]|2016-01-22|Destinations|Added new settings to Power BI destination|
|2.66.0 [M]|2016-01-21|Destinations|Extended TableauDestination to allow uploads to Tableau Server|
|2.65.3 [L]|2016-01-18|Destinations|Fix for PowerBI Connection|
|2.65.0 [L]|2015-12-01|Destinations|Destinations are stored as JSON files now|
|2.64.2 [L]|2015-11-24|Destinations|Fix for Tableau Destination on Server 2008|
|2.64.1 [M]|2015-11-24|Server|Undefined execution states are set to "finished with errors" at server startup|
|2.64.0 [M]|2015-11-24|Destinations|Migrated from unmanaged to managed ODP.NET driver (Oracle)|
|2.63.0 [L]|2015-11-11|Destinations|Added Salesforce destination|
|2.62.6 [M]|2015-11-10|Destinations|Updated Oracle reference to ODAC 12.1.0.2.4, ODP.NET 4|
|2.62.5 [M]|2015-11-10|Server|Workaround for PowerPivot 2010 bug (no HTTP compression while retrieving service document)|
|2.62.4 [L]|2015-11-10|Table Join|Fix for live data preview|
|2.62.3 [L]|2015-11-10|Table|Fix for live data preview|
|2.62.2 [M]|2015-10-30|General|Added default server and port for xu.exe|
|2.62.1 [M]|2015-10-28|Table|Uses better custom functions as default|
|2.62.0 [M]|2015-10-27|Server|Added support for Content-Encoding: gzip|
|2.61.29 [L]|2015-10-21|BW Cube|Fix for BW Cube dates|
|2.61.28 [L]|2015-10-20|Destinations|Fix for "Prepare Merge" (broken since 2.61.24)|
|2.61.25 [L]|2015-09-29|Server|Improved logging for errors while loading extractions|
|2.61.24 [L]|2015-09-22|Destinations|Fix for create statements (Teradata)|
|2.61.23 [L]|2015-09-22|Destinations|Updated Teradata provider to 15.11.00.00|
|2.61.22 [L]|2015-09-18|Table Join|Updated XtractKernel (TQB)|
|2.61.21 [L]|2015-09-15|Table Join|Updated dialog help links|
|2.61.20 [L]|2015-09-07|DeltaQ|Added new setting 'Accept Gaps In Data Package Id' for users who are using OLTP datasources where data is filtered in a way that it leads to gaps between the packet numbers. This setting turns off a certain consistency check. |
|2.61.19 [L]|2015-09-07|Report|Fixed bug in the search of reports|
|2.61.18 [M]|2015-09-03|Destinations|Release version of Vertica destination finished|
|2.61.17 [L]|2015-08-11|Destinations|Bugfix in SharePoint float values|
|2.61.16 [L]|2015-08-10|Destinations|Bugfix for merging BW Cube extractions with SharePoint destinations|
|2.61.15 [L]|2015-08-10|Table Join|Updated table join designer.|
|2.61.14 [L]|2015-08-05|Destinations|Fixes in the converter classes|
|2.61.13 [L]|2015-08-04|General|Primary key was not reset if SAP object changed|
|2.61.12 [L]|2015-08-04|Destinations|Fix for OData metadata document and Code+Text, Text+Code settings|
|2.61.11 [L]|2015-08-04|BW Cube|Fix for error message when using the Show MDX link |
|2.61.10 [L]|2015-08-04|BW Cube|Fix for error message when using the Show MDX link |
|2.61.9 [L]|2015-08-03|BAPI|All ADO Destinations use the converter classes now|
|2.61.8 [L]|2015-07-28|General|Support client shows logo and uses pre-defined password|
|2.61.7 [L]|2015-07-22|Destinations|Added name conversion to Power BI destination|
|2.61.6 [L]|2015-07-22|Table|Fixed bug in table lookup form|
|2.61.5 [L]|2015-07-21|Destinations|Existing extractions were broken, if the type of their assigned destination had changed to HTTP - CSV|
|2.61.4 [L]|2015-07-21|Destinations|Fix for error on buffer and preview extractions from BAPI, BW Cube OLAP, DeltaQ non-hierarchy, Hierarchy parent/child, OHS or Query to EXASOL and Tableau destinations|
|2.61.3 [L]|2015-07-21|DeltaQ|Fix for the edit selection link. It appeared sometimes even no selection is allowed according to SAP's metadata.|
|2.61.2 [L]|2015-07-18|Table Join|Updated TQB for Table Join component.|
|2.61.1 [L]|2015-07-17|General|Updated code to run on .NET 4.|
|2.61.0 [M]|2015-07-17|BW Cube|Added date format for BW Cube dates|
|2.60.7 [L]|2015-07-14|Destinations|Fix for Tableau on 32-bit systems|
|2.60.6 [L]|2015-07-14|Setup|Updated support client to 10.0.43879.0|
|2.60.5 [L]|2015-07-09|Destinations|Added support for Exasol ADO.NET Driver 5.0|
|2.60.4 [L]|2015-07-08|Destinations|Fixed wrong decimal precision error in Exasol destination|
|2.60.3 [L]|2015-07-01|Destinations|Fixed wrong field length for table fields containing data with SAP type RAW|
|2.60.0 [M]|2015-06-30|General|Purchased license is preferred to demo license now|
|2.59.0 [L]|2015-06-30|Server|Removed HttpLocalOnly server setting (please use server security settings instead)|
|2.57.1 [L]|2015-06-09|Designer|Improved error message for trying to run an extraction which has no destination|
|2.57.0 [M]|2015-06-01|Designer|Moved extraction-specific settings to destination form|
|2.56.2 [L]|2015-06-01|Destinations|Fix in Power BI Authentication|
|2.56.1 [L]|2015-05-28|Designer|Button for managing destinations is disabled if user does not have admin privileges|
|2.56.0 [M]|2015-05-26|Destinations|Added http-csv, http-odata-atom and http-xml as default destinations|
|2.55.0 [M]|2015-05-26|Destinations|Removed custom destinations. Legacy custom destinations are read-only.|
|2.54.7 [L]|2015-05-26|Security|Fix for Active Directory login (failed always)|
|2.54.6 [L]|2015-05-22|Designer|Added "abort" to context menu|
|2.54.5 [L]|2015-05-21|Server|Fixed OData service document for /OData.svc/ URLs|
|2.54.4 [L]|2015-05-21|Designer|Fixed keyboard shortcut for "run in xu.exe"|
|2.54.3 [L]|2015-05-21|Designer|Added menu items Extraction -> Destination and Server -> Manage Destinations|
|2.54.2 [L]|2015-05-21|Designer|Delete button & menu item is disabled in GUI if user does not has appropriate privileges|
|2.54.1 [M]|2015-05-20|Designer|Fixed extraction name validation|
|2.53.3 [L]|2015-05-18|Destinations|Removed workaround for OData consumer timeouts (2.48.0)|
|2.53.2 [M]|2015-05-12|Destinations|Optimized merge process for SharePoint destinations|
|2.53.0 [M]|2015-05-07|Destinations|Added HP Vertica destination|
|2.52.0 [M]|2015-05-04|Destinations|Changed default for table/file name to name of extraction (DB2, EXASOL, MySQL, Oracle, Redshift, SQLServer, Tableau, Teradata)|
|2.51.0 [M]|2015-04-23|Server|Extractions are terminated if client closes HTTP connection (non-HTTP destinations)|
|2.50.2 [L]|2015-04-20|General|Improved logging of stack traces|
|2.50.0 [M]|2015-04-20|Destinations|New implementation of Tableau Destination|
|2.49.5 [L]|2015-04-20|BW Cube|Additional feature to add unit columns to each measure when using the OLAP mode|
|2.49.4 [L]|2015-04-13|General|SNC plus user name / password is supported in connection dialog to encrypt connection to SAP|
|2.49.3 [L]|2015-04-13|DeltaQ|Scripting expressions are evaluated in Selection parameters|
|2.49.2 [L]|2015-04-01|Designer|Fix for GUI bugs when the first shared destination is created and selected|
|2.49.1 [L]|2015-04-01|Destinations|Workaround for "blocked" Oracle assemblies|
|2.49.0 [M]|2015-03-31|Destinations|Added MySQL as a new destination|
|2.48.0 [M]|2015-03-20|Destinations|Workaround for OData consumer timeouts (e. g. Power Query)|
|2.47.3 [M]|2015-03-09|Destinations|Fix for column/table names which are longer than 30 characters|
|2.47.2 [M]|2015-03-05|General|Fix for Hierarchy or OHS extractions with DB2, EXASOL, Oracle, SQLServer or Teradata destinations|
|2.47.1 [L]|2015-02-24|General|Fix for xu.exe and .NET CLR 4|
|2.47.0 [M]|2015-02-18|General|Removed 'custom connections' and renamed 'connection' to 'source' (legacy 'custom connections' are still supported, but read-only)|
|2.46.0 [L]|2015-02-12|General|IPv4 addresses can be passed directly to command line utility|
|2.45.4 [L]|2015-01-27|BW Cube|Added new feature for manual slicing/filtering dimensions in an OLAP extraction|
|2.45.3 [L]|2015-01-26|BAPI|Custom variables are supported now when using native MDX statements|
|2.45.2 [L]|2015-01-22|BW Cube|Added new feature "Automatic Slicing" which can be switched on in Settings dialog.|
|2.45.1 [L]|2015-01-22|BW Cube|Setting "Decimal Separator" withdrawn as it's not necessary anymore. The decimal separator is detected automatically.|
|2.45.0 [L]|2015-01-21|General|Added command line parameters and more detailed exit codes to Xtract Universal Command Line Utility.|
|2.44.0 [M]|2015-01-15|Table|New user interface for extraction settings|
|2.43.0 [L]|2015-01-12|Security|Added support for X.509 client certificate file for SNC|
|2.42.1 [L]|2015-01-07|Designer|DeltaQ / OHS extractions with shared connection could not be created since version 2.41.0|
|2.42.0 [L]|2014-12-10|Security|Added URL parameter "logonTicket" for SAP authentication via logon tickets|
|2.41.2 [L]|2014-12-10|Destinations|Updated SharePoint destination: Removed 'Title' field from default view and added primary keys as new required fields in edit forms.|
|2.41.1 [L]|2014-12-09|Security|Added support for DNS SRV responses without additional A records (Active Directory authentication)|
|2.41.0 [L]|2014-12-08|General|SAP connections are stored in config/sources now, as JSON files|
|2.40.2 [L]|2014-12-05|Destinations|Updated SharePoint destination: Added list creation in sub-sites. Optimized key matching. New columns are added to default view in SharePoint.|
|2.40.1 [L]|2014-12-04|Destinations|Fixed default time format (CSV, XML)|
|2.40.0 [L]|2014-12-02|General|Removed "Force Codepage"|
|2.39.13 [L]|2014-11-28|BW Cube|Fixed re-ordering of columns (headers were not re-ordered)|
|2.39.12 [L]|2014-11-25|Destinations|Fixed license check for file CSV destination|
|2.39.11 [L]|2014-11-18|Security|Fixes and improvements for Active Directory authentication|
|2.39.10 [L]|2014-11-11|Service|Set start timeout to 3 minutes (for slow systems)|
|2.39.9 [L]|2014-11-04|Security|Fixes and improvements for Active Directory authentication|
|2.39.8 [M]|2014-10-20|Destinations|Oracle: Values were inserted into the wrong columns in some cases, if bulk operations had been disabled |
|2.39.7 [M]|2014-10-20|Server|Server had to be restarted, if errors occurred while loading an extraction|
|2.39.5 [L]|2014-10-13|Designer|Destination of an extraction could not be changed from a non-existing shared destination to a valid one|
|2.39.4 [M]|2014-10-13|Designer|Extraction-specific settings were reverted to defaults, if "Manage"-button was clicked|
|2.39.3 [L]|2014-10-13|BW Cube|Fix for "Use Real Data for Preview"|
|2.39.2 [L]|2014-10-10|General|Fix for custom parameters when using the xu.exe button to execute the extraction|
|2.39.1 [M]|2014-10-08|Server|In some cases extractions were run despite load errors|
|2.39.0 [M]|2014-10-07|Designer|Replaced "Run"-button with "Run in xu.exe" and added context menu entry|
|2.38.8 [L]|2014-10-07|DeltaQ|Correction for missing "Init without data"|
|2.38.7 [L]|2014-10-01|Destinations|Correction for "Cannot convert" error message when using Tableau Destination with BEX queries|
|2.38.6 [M]|2014-09-30|Security|Fix for friendly domain names / FQDN (Active Directory)|
|2.38.5 [L]|2014-09-25|Destinations|Bug fix for time formatting in CSV destinations|
|2.38.4 [M]|2014-09-16|DeltaQ|Removed "Key" column from main form (designer)|
|2.38.3 [M]|2014-09-16|Security|Users could not see restricted extractions if they had logged on with a name in different character casing than their actual name (e. g. logon as "User01" if actual name was "user01")|
|2.38.2 [M]|2014-09-16|Security|Not all administrator privileges were granted, if logon as "admin" was performed with different character casing (e. g. "Admin").|
|2.38.1 [L]|2014-09-09|General|Improved logon failure logging (Active Directory)|
|2.38.0 [M]|2014-09-04|Destinations|Added SharePoint destination for beta testing|
|2.37.0 [M]|2014-09-02|Designer|Added "Primary Key" tab to "General Settings"|
|2.36.8 [H]|2014-09-02|Server|Double quotes in data were duplicated, if data was loaded from buffer|
|2.36.7 [L]|2014-08-28|Destinations|Bug fix for broken connections in Redshift destination.|
|2.36.6 [L]|2014-08-26|Designer|Added functionality to define custom formats for time data in CSV destinations.|
|2.36.5 [L]|2014-08-21|Destinations|Default file name is now derived from SAP object name in Tableau destination|
|2.36.4 [L]|2014-08-21|Destinations|Fixed: Empty date fields no longer throw an exception in Tableau destination|
|2.36.3 [M]|2014-08-18|Destinations|Fixed data duplication when skipping Null values in Tableau destination|
|2.36.2 [L]|2014-08-08|Destinations|Bug fix for Null values in Tableau destination|
|2.36.1 [L]|2014-08-07|Destinations|Fix for File - CSV (didn't work since version 2.35.0)|
|2.36.0 [M]|2014-08-05|General|New name and implementation of command line client: XtractUniversalCmd.exe is xu.exe now|
|2.35.3 [L]|2014-08-05|Server|Removed byte-order mark from UTF-8 encoded data|
|2.35.2 [M]|2014-08-05|Server|Fix for possible server hang with non-HTTP destinations, if client disconnects at a certain time before extraction is finished|
|2.35.1 [L]|2014-08-05|Designer|Updated address in product info|
|2.35.0 [L]|2014-07-22|Destinations|New extraction-specific setting for OData Atom: Column names|
|2.34.0 [L]|2014-07-08|Destinations|Custom parameters are available in SQL statements as SQL parameters|
|2.33.1 [L]|2014-06-13|BW Cube|New mode available for pure MDX extractions|
|2.33.0 [L]|2014-06-12|Destinations|Removed custom parameters from scripted expressions for security reasons|
|2.32.0 [L]|2014-06-10|Destinations|Custom parameters are available in scripted expressions now (Extraction.CustomParameters)|
|2.31.9 [L]|2014-05-22|Designer|'Info' displays licensed servers and destinations|
|2.31.8 [L]|2014-05-22|BW Cube|New BWCube look-up|
|2.31.7 [L]|2014-05-20|BAPI|New BAPI look-up|
|2.31.6 [L]|2014-05-20|Report|New report look-up|
|2.31.5 [L]|2014-05-19|DeltaQ|Bug fix for corrupted serialisation info when using DeltaQ in a push destination|
|2.31.4 [L]|2014-04-17|Hierarchy|New hierarchy look-up|
|2.31.3 [L]|2014-04-17|Query|New Query look-up and metadata retrieval|
|2.31.2 [L]|2014-04-09|Designer|Tableau destination: Output directory textbox is now editable|
|2.31.1 [L]|2014-04-07|Designer|Optimized order of destinations|
|2.31.0 [L]|2014-04-03|Designer|Fixed lookup button for trace directory in the connection manager|
|2.30.0 [L]|2014-04-02|Designer|Fixed order of destinations in drop-down-list to be consistent with documentation|
|2.29.0 [M]|2014-04-01|Destinations|Added Tableau destination|
|2.28.2 [L]|2014-03-28|Destinations|Added backward compatibility for very old extractions with columns which contain special characters (like slashes, dashes, etc.) and use custom HTTP - CSV destinations|
|2.28.1 [L]|2014-03-04|Server|Fix for PowerQuery for non-Table extractions|
|2.28.0 [L]|2014-02-25|Server|List of parameters for an extraction can be retrieved via HTTP/CSV now|
|2.27.7 [L]|2014-02-20|Designer|Fix for "invalid value" error message if value of text parameter is empty (Run dialog)|
|2.27.6 [L]|2014-02-18|Destinations|Special characters (like slashes) are no longer replaced with underscores in column names (HTTP - CSV, Flat File - CSV, GoodData)|
|2.27.5 [L]|2014-02-13|Destinations|Added $top=n to generate n preview rows (OData)|
|2.27.4 [L]|2014-02-13|Destinations|Fix for PowerQuery (OData)|
|2.27.2 [L]|2014-02-11|Server|filterDebug=true is also available for live log of non-HTTP destinations now|
|2.27.1 [L]|2014-02-11|Server|Fix for Power Pivot Excel 2010 (was broken since 2.24.0)|
|2.27.0 [L]|2014-02-06|Security|SAP credentials can be supplied via Basic authentication (HTTPS recommended)|
|2.26.3 [L]|2014-02-06|Security|Removed user and passwd run parameters|
|2.26.2 [M]|2014-02-06|Server|Buffer was not working with OData URLs (added in 2.22.0)|
|2.26.1 [L]|2014-02-04|Server|Added query string option filterDebug=true to exclude debug log entries|
|2.26.0 [L]|2014-02-04|General|Buffer directory can be changed in Server Settings now|
|2.25.2 [L]|2014-02-04|Designer|Corrected some typos|
|2.25.1 [L]|2014-01-30|Destinations|Improved error messages for row processing (DB2, Oracle, SQL Server, Teradata)|
|2.25.0 [M]|2014-01-30|Destinations|Bulk operations can be disabled via extractions-specific settings for debugging (Oracle, SQL Server)|
|2.24.4 [L]|2014-01-30|Designer|Value of destination column in extraction list was missing after cloning|
|2.24.3 [M]|2014-01-23|Destinations|Oracle: Disabled connection pooling to make sure no inactive sessions are left behind|
|2.24.2 [M]|2014-01-21|BAPI|Fix for "cannot assign value..."|
|2.24.1 [L]|2014-01-14|Designer|For custom destinations, type of destination is shown in extraction list|
|2.24.0 [L]|2014-01-09|Server|Added Import Wizard Detection for PowerPivot 2013|
|2.23.1 [L]|2014-01-09|Server|Added support for HTTP HEAD requests|
|2.23.0 [L]|2014-01-09|Destinations|Added support for Visual Studio LightSwitch (OData)|
|2.22.5 [L]|2014-01-08|BW Cube|Bugfix for tree view UI element on the left side. Double clicking lead to strange error message in rare cases|
|2.22.4 [L]|2014-01-07|General|Corrected the links to the OnlineHelp|
|2.22.3 [L]|2014-01-02|Designer|Fix for generated OData URL (run dialog)|
|2.22.2 [L]|2013-12-19|Server|Empty results do not create a dummy line anymore if read from buffer|
|2.22.1 [L]|2013-12-19|Service|Fix for Windows Server 2003 and XP|
|2.22.0 [L]|2013-12-17|Destinations|HTTP - OData Atom: added new URL-Schema and Metadata Document|
|2.21.1 [L]|2013-12-15|DeltaQ|Fix: In rare cases the select options were deleted completely when pressing the cancel button in the Range dialog|
|2.21.0 [L]|2013-12-12|Destinations|Added Redshift beta destination|
|2.20.5 [L]|2013-12-03|Server|CSV: Values which contain row separator are enclosed in quote symbols now|
|2.20.4 [L]|2013-11-28|Server|Added DataServiceVersion HTTP-header|
|2.20.3 [M]|2013-11-12|Destinations|Fixed live-log via HTTP|
|2.20.2 [L]|2013-11-12|Destinations|Disabled connection pooling in Teradata to make sure all volatile tables are deleted|
|2.20.1 [L]|2013-11-12|Destinations|Tables for extractions without primary key are created as MULTISET tables in Teradata now |
|2.20.0 [M]|2013-11-12|Destinations|Added primary key constraint to CREATE TABLE SQL|
|2.19.0 [L]|2013-11-12|Destinations|Added GoodData destination|
|2.18.4 [M]|2013-11-08|Destinations|SQL is generated according to SQL identifier restrictions of destination database|
|2.18.3 [L]|2013-11-08|Report|Fix for using Header Pattern with Automatic Column Detection|
|2.18.2 [L]|2013-10-31|General|XtractUniversalCmd.exe tool now returns 100 in case of an error|
|2.18.1 [L]|2013-10-30|DeltaQ|Extractions crashed if url parameter "programId" was set|
|2.18.0 [L]|2013-10-22|Destinations|Added Extraction.TableName and Extraction.RowsCount to Scripted Expressions|
|2.17.0 [L]|2013-10-22|Destinations|Changed names of SQL-Parameters for cases in which column names cannot be used (can break existing Custom SQL)|
|2.16.3 [L]|2013-10-08|Server|Server will start up even if extraction metadata is corrupted|
|2.16.2 [L]|2013-10-05|BW Cube|Fix for variable problems under BEX mode on certain BW release above rel. 7.01|
|2.16.1 [L]|2013-09-27|Destinations|Fixed SQL for DB2 (increased length of string types)|
|2.16.0 [L]|2013-09-26|Destinations|More settings for Flat File destination|
|2.15.4 [L]|2013-09-25|Server|Errors during extraction load do not create empty buffer entries anymore|
|2.15.2 [L]|2013-08-23|Server|Moved log entries of run parameters from server log to extraction log|
|2.15.0 [L]|2013-08-21|Destinations|SQL Server destination now supports bulk inserts|
|2.14.6 [L]|2013-08-21|Server|Fix for extractions which have very short running times (<50ms)  |
|2.14.5 [M]|2013-08-14|Destinations|Time values could not be written to database destinations if data was read from buffer|
|2.14.4 [L]|2013-08-14|Destinations|Changed data type for ABAP type RAW to SQL type CHARACTER|
|2.14.3 [L]|2013-08-13|Destinations|Improved mapping of data types (ABAP / databases)|
|2.14.2 [L]|2013-08-13|Designer|Improved GUI for destinations|
|2.14.1 [L]|2013-08-08|Report|Correction for timeout issue when previewing a long running report|
|2.14.0 [L]|2013-08-02|Destinations|Added scripting for custom SQL preparation statements|
|2.13.12 [L]|2013-08-02|Destinations|Fix for "Extraction-Specific Settings" GUI and SQL Editor|
|2.13.11 [L]|2013-07-31|Destinations|Improved generated SQL|
|2.13.10 [L]|2013-07-25|Destinations|Fix for 'unexpected )' (EXASOL, error introduced in 2.13.7)|
|2.13.9 [L]|2013-07-25|Service|Errors which lead to server termination are written to Windows event log|
|2.13.8 [M]|2013-07-25|Server|Errors while writing extraction log do not lead to server termination anymore|
|2.13.7 [L]|2013-07-17|Destinations|Improved generated SQL|
|2.13.5 [L]|2013-07-16|Table|Added scripting for where clause|
|2.13.4 [L]|2013-07-11|Setup|Added Visual C++ runtime to setup|
|2.13.3 [L]|2013-07-11|Setup|Fix for icon in "Programs and Features"|
|2.13.2 [L]|2013-07-11|Setup|Fix for error message during service start on 32-bit OS|
|2.13.1 [L]|2013-07-10|Report|Fix for crash on Report dialog when function module is not installed properly|
|2.13.0 [L]|2013-07-08|General|Added support for NetWeaver RFC libraries|
|2.12.2 [L]|2013-06-20|Destinations|Date values from the SAP source are treated as real date by default for any destination|
|2.12.1 [L]|2013-06-20|Destinations|Fix for Date and Decimal values in EXASOL destination|
|2.12.0 [L]|2013-06-18|Destinations|Added date conversion for DB2, EXASOL, Oracle and SQLServer|
|2.11.17 [L]|2013-06-18|Report|New setting Report Width introduced in case there's more than one report line per data line|
|2.11.15 [L]|2013-06-11|Destinations|Fix for Oracle 10g (PL/SQL must not contain carriage-return characters) |
|2.11.14 [L]|2013-06-09|DeltaQ|Released 4 additional settings: 'Don't resend..', 'Check IDoc state...', 'Serialization info...' and 'Data conversion...'|
|2.11.13 [L]|2013-06-05|Destinations|IBM DB/2 destination available for beta test|
|2.11.12 [L]|2013-06-04|General|.NET 4 is used, if available|
|2.11.11 [L]|2013-05-28|General|.NET 4 is used, if 3.5 SP1 is not installed|
|2.11.10 [L]|2013-05-21|General|Added 'Use SAPGUI' to connection settings|
|2.11.9 [L]|2013-05-17|Destinations|Renamed 'Truncate & Create' to 'Truncate Or Create' to clarify the meaning |
|2.11.8 [L]|2013-05-17|Destinations|In case of extraction errors, Oracle Destination was sometimes left in a locked state (ORA-00054)|
|2.11.7 [L]|2013-05-17|Destinations|Fix for missing backslash at the end of FlatFileDestination directory|
|2.11.6 [L]|2013-05-14|Destinations|Correction for extractions to flat files with a backslash in the OLTP source name|
|2.11.5 [L]|2013-05-03|Destinations|Several improvements concerning datatypes in EXASOL destination|
|2.11.4 [L]|2013-05-02|DeltaQ|It's now possible to define primary key columns for automatic incremental updates in all push destinations|
|2.11.3 [L]|2013-04-19|Report|New setting added: Regex Pattern for skipping rows|
|2.11.2 [M]|2013-04-18|Destinations|Changing destination from shared to custom without clicking on the settings button left the extraction without destination|
|2.11.1 [L]|2013-04-05|General|Added tool to run extractions from command-line|
|2.11.0 [L]|2013-04-05|Destinations|Added EXASOL destination|
|2.10.1 [M]|2013-03-21|BW Cube|Output transformation did not work sometimes if result was read from buffer|
|2.10.0 [L]|2013-01-30|Security|Added access restriction for shared connections|
|2.9.2 [M]|2013-01-16|BAPI|Added support for structures/tables which contain alignment gaps caused by includes|
|2.9.1 [L]|2013-01-08|Destinations|Flat File destination officially released for beta usage|
|2.9.0 [L]|2012-12-26|Destinations|SQL Server Destination Beta Release|
|2.8.3 [L]|2012-12-18|Destinations|Fix for merge if primary consists of more than one column (Oracle)|
|2.8.2 [L]|2012-12-12|Destinations|Fix for single quotes in description texts (Oracle)|
|2.8.1 [L]|2012-12-11|General|Fix: LogDir setting got lost when using a custom connection|
|2.8.0 [L]|2012-12-07|Destinations|Added merge statement|
|2.7.6 [L]|2012-11-29|Security|Logged on user is automatically added to the list of allowed users/groups if he activates access restriction for an extraction|
|2.7.4 [L]|2012-11-28|Security|Access restriction changes performed by non-admin users were not saved correctly in some cases|
|2.7.2 [L]|2012-11-22|DeltaQ|Added "Auto Synchronisation" feature to settings|
|2.7.1 [L]|2012-11-19|General|New TeamViewer version for remote support|
|2.7.0 [L]|2012-11-16|Destinations|Added Teradata destination|
|2.6.1 [L]|2012-11-15|Service|Increased start/stop timeouts|
|2.4.1 [L]|2012-10-26|DeltaQ|A new dialog for maintaining the Delta requests was added to the settings dialog|
|2.4.0 [L]|2012-10-24|General|Added shared destinations|
|2.3.11 [L]|2012-10-24|BAPI|Fix for non-unicode systems (version 2.x and later)|
|2.3.10 [L]|2012-10-17|BAPI|Structure elements in GUI were missing in some rare cases|
|2.3.9 [L]|2012-10-17|Server|More detailed error messages for server startup problems|
|2.3.8 [L]|2012-10-16|Designer|Fix for HTTPS port in "Run" dialog|
|2.3.4 [L]|2012-09-28|Table|Fix for tables with emtpy column descriptions (since 2.3.3.x)|
|2.3.2 [L]|2012-09-24|Table|Correction in function module Z_XTRACT_IS_TABLE_COMPRESSION for timestamp/decimal columns|
|2.3.0 [M]|2012-09-05|General|Added Oracle destination|
|2.2.8 [L]|2012-08-28|Server|Fix for "DateFormat" server setting (didn't work since 2.x)|
|2.2.7 [L]|2012-08-27|General|All column names are now backward-compatible with CSV output before 2.x|
|2.2.6 [L]|2012-08-08|Hierarchy|Fix for zero node ids with some hierarchies	|
|2.2.5 [L]|2012-08-08|BW Cube|Bugfix in UI when switch from BEX mode to non-BEX mode and back|
|2.2.4 [L]|2012-08-06|BW Cube|Fix for output transformation (did not work since version 2.0.0.x)|
|2.2.3 [L]|2012-08-06|General|Bug fix for exception when using ADO.NET provider together with Layer2 Sharepoint integration|
|2.2.2 [L]|2012-08-06|Server|Sometimes extraction runs were declared 'successful' even though errors occured|
|2.2.1 [L]|2012-08-03|Service|Service did not start after reboot sometimes (service dependencies were missing)|
|2.2.0 [L]|2012-08-02|Setup|Fixed prerequisites check	|
|2.1.0 [L]|2012-08-02|Service|New service implementation 	|
|2.0.1 [L]|2012-07-18|General|Re-added decimalSeparator URL-parameter (was missing since version 2.0.0.x)|
|2.0.0 [M]|2012-05-30|General|Several fixes and improvements, major internal changes|
|1.3.18 [M]|2012-04-24|DeltaQ|Added various additional settings and functions for natural hierarchy representation|
|1.3.17 [L]|2012-04-23|Server|CSV: Column headers are written even if extraction result is empty|
|1.3.16 [L]|2012-04-17|Designer|Designer was not able to start if configuration file was corrupted|
|1.3.15 [L]|2012-04-10|General|Added query string parameter "decimalSeparator"|
|1.3.14 [L]|2012-04-02|General|Fix for Designer failing to connect in some environments|
|1.3.13 [L]|2012-03-22|Server|Fix for log entries containing mode "Console" if server was running as a service|
|1.3.12 [L]|2012-03-22|Designer|More space for licensee in "About" window|
|1.3.11 [L]|2012-03-21|Designer|Added some icons to main menu|
|1.3.10 [L]|2012-03-01|Table|Field exits can be switched on in the settings dialog when using the compression feature|
|1.3.9 [L]|2012-02-29|Server|Some fixes for CSV value formatting|
|1.3.8 [L]|2012-02-28|Table|Preview is using real data instead of dummy data|
|1.3.7 [L]|2012-02-17|Table|Compression feature for faster data extraction released now for public use|
|1.3.6 [L]|2012-02-10|General|Added Preview Mode in General Settings|
|1.3.5 [L]|2012-02-09|General|Added padding for log entries in txt files and 'copy to clipboard' feature|
|1.3.4 [M]|2012-02-09|General|Fixes & improvements for extraction abort|
|1.3.3 [M]|2012-02-09|Server|Fix for buffer BufferLifespanMinutes|
|1.3.2 [L]|2012-01-26|Designer|Removed default values of client and language for new connections; changed tab order|
|1.3.1 [M]|2012-01-26|General|Change to avoid "Attempt to read or write protected memory" error immediately after start of extraction execution (occurred at arbitrary times)|
|1.3.0 [L]|2012-01-20|Server|New extraction abort mechanism|
|1.2.7 [M]|2012-01-15|BW Cube|Implemented new BEX mode for extraction|
|1.2.6 [L]|2012-01-12|Designer|Fix for extractions with reference to an non-existing shared connection (connection dialog did not open)|
|1.2.5 [L]|2012-01-05|BW Cube|Fix for output column reordering when adding dimension property|
|1.2.4 [L]|2012-01-05|BW Cube|Fix for output column reordering and metadata refresh|
|1.2.3 [L]|2012-01-05|BW Cube|Fix for invalid output column reordering (output window could not be opened)|
|1.2.2 [M]|2011-12-20|General|Fix for being unable to connect to server with many extractions (about 100 and above)|
|1.2.1 [L]|2011-12-13|BW Cube|Fix for metadata of extractions with output column transformation|
|1.2.0 [L]|2011-11-30|Server|Added extraction list via HTTP, name filter for logs via HTTP|
|1.1.8 [L]|2011-11-29|General|Fix for connections using Load Balancing|
|1.1.7 [L]|2011-11-09|Server|Changed behavior of min/max parameters for log retrieval via HTTP|
|1.1.6 [L]|2011-11-06|Query|Fix for using variables in low/high values of the selection table|
|1.1.5 [L]|2011-10-20|Query|Correction for the value help for variants (some variants were not displayed correctly)|
|1.1.4 [L]|2011-10-17|BW Cube|Support for new OLAP BAPIs (see SAP note 1232751). The feature can be switched on in the settings dialog.|
|1.1.3 [L]|2011-10-07|Service|Fix: Service stopped unexpectedly on certain power events|
|1.1.1 [L]|2011-10-04|Server|Fix: Sometimes server stopped to handle HTTP request after extractions had been aborted|
|1.1.0 [L]|2011-09-29|Server|Added version information retrieval via HTTP|
|1.0.3 [L]|2011-09-22|Server|Added 'DistributeSetup' server setting|
|1.0.2 [L]|2011-09-16|BW Cube|Added reordering of output columns|
|1.0.0 [H]|2011-09-05|General|First official release|
