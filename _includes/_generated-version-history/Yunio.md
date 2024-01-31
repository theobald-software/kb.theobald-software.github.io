|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|1.32.0 [L]|2024-01-31|Designer|Added payload loading and saving in the Run Dialog. The runtime parameter values of last run are saved in the browser.|
|1.31.0 [L]|2024-01-18|Designer|Better consistency for read-only permissions throughout the designer. Popup with an error includes complete error on copy now.|
|1.30.2 [M]|2024-01-17|Runtime|transaction: Fixed an issue that caused errors when starting services with table inputs from the run dialog.|
|1.30.1 [L]|2024-01-15|General|Fixed a bug that caused errors on transaction recording or replay when specific tables were present|
|[1.30.0 [H]](https://kb.theobald-software.com/release-notes/Yunio-1.30.0.html)|2024-01-11|Designer|The new parts of yunIO's UI following the new Style Guide.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.30.0.html))|
|1.29.3 [L]|2024-01-11|Designer|Fixed a bug in the designer's source details.|
|1.29.2 [L]|2023-12-20|Designer|Hotfix designer function-service save-button permissions, improved service permission diialog.|
|1.29.1 [L]|2023-12-20|Designer|Fixed a bug in the designer run dialog, which serialized service payload's number type as string to JSON .|
|1.29.0 [L]|2023-12-20|Designer|Designer: respecting current user's permissions and hiding unavailable actions.|
|1.28.0 [L]|2023-12-06|Designer|Designer improvements: user management (respects current user's permissions, password strength hint). Explicit removal of connection password. Clearer messages for issues with connection password. Better support for long service names.|
|1.27.2 [L]|2023-11-30|Designer|Added a setting to download OpenAPI definition for Nintex Gateway.|
|1.27.1 [L]|2023-11-16|Designer|Fixed a bug in the designer for table service, column sort now respects the selection set by select-all checkbox|
|1.27.0 [L]|2023-11-15|Designer|Designer: added a Run button in the header to conveniently switch from the edit mode.|
|1.26.4 [L]|2023-11-15|Designer|Designer improvement: addressed flickering on page navigation.|
|1.26.3 [L]|2023-11-13|Designer|Swagger filename, pre-support for Nintex xtensions OpenApi format.|
|1.26.2 [L]|2023-11-09|Designer|Designer Run Dialog Input Parameters: improved nested arrays of scalars.|
|1.26.1 [L]|2023-11-09|General|Fixed an error caused by a missing library.|
|1.26.0 [L]|2023-11-09|Designer|Designer Run Dialog: UI for Input Parameters|
|1.25.4 [L]|2023-11-08|General|Improved toast pop up in case of showing exceptions, so you can now copy the stacktrace of the excpetion to the clipboard.|
|1.25.3 [L]|2023-10-27|Runtime|yunIOs server version will now be logged to the services log after its creation.|
|1.25.2 [L]|2023-10-26|Designer|Service filtering UI improvement.|
|1.25.1 [L]|2023-10-18|Designer|Designer run dialog output buttons fix.|
|1.25.0 [L]|2023-10-17|Designer|Run dialog: output with a browsable results|
|1.24.0 [M]|2023-10-13|General|Function: Add support for various scenarios with nested output tables|
|1.23.23 [L]|2023-10-06|Designer|Fixed deletion in edit view. Improved error handling on TCODE search (Report).|
|1.23.22 [M]|2023-09-29|Designer|Function: add support for table types in tables|
|[1.23.21 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.23.21.html)|2023-09-26|General|Performance and stability fixes.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.23.21.html))|
|1.23.20 [L]|2023-09-26|Runtime|Transaction: Reduced the amount of data written to logs |
|1.23.19 [L]|2023-09-22|Theobald.Server|Fixed a bug causing incomplete response data when executing a service.|
|1.23.18 [M]|2023-09-22|Gateway|Addressing race conditions on high frequency requests over Azure relay.|
|1.23.17 [L]|2023-09-20|Runtime|Disabled a conversion routine for date types which was erroneously applied in table services.|
|1.23.16 [L]|2023-09-18|Gateway|Mitigation/fix for high frequency requests running via Azure.|
|1.23.15 [L]|2023-09-18|General|Transaction: Fixed a bug that caused errors with special table cell values|
|1.23.14 [L]|2023-09-15|Runtime|Fixed DateTime data types in table services.|
|1.23.13 [L]|2023-09-11|Theobald.Server|Fixed some inconsistencies in the authentication logic|
|1.23.12 [L]|2023-09-08|Designer|Table saving flow improved.|
|1.23.11 [L]|2023-09-08|Designer|Designer, table service: improved flow for connection validation and extraction functions.|
|1.23.10 [L]|2023-09-08|Designer|New service creation: fixed notifications on problems while searching for items.|
|1.23.9 [L]|2023-09-08|Designer|Run dialog return types handling improved.|
|1.23.8 [L]|2023-09-08|Designer|Run credentials inputs clarification text.|
|[1.23.7 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.23.7.html)|2023-09-07|Runtime|Compression support for the HTTP server and some bug fixes.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.23.7.html))|
|1.23.6 [L]|2023-09-05|Runtime|Fixed a bug where Bapi extraction output would not be handled correctly.|
|1.23.5 [M]|2023-09-05|Runtime|Transaction: Fixed an issue that could cause (semi-)infinite loops when "skip popups" was enabled|
|1.23.4 [L]|2023-09-04|Management|Added ABAP transport request for report.|
|1.23.3 [L]|2023-09-01|Designer|Run dialog better error handling.|
|1.23.2 [L]|2023-08-29|Designer|Designer run dialog minor refactoring.|
|1.23.1 [M]|2023-08-29|Designer|Run dialog improvements for table (limited UI output, performance)|
|1.23.0 [M]|2023-08-24|Designer|Connections support SNC login.|
|1.22.3 [L]|2023-08-17|Designer|Initial implementations for upcoming SNC support.|
|1.22.2 [L]|2023-08-14|Runtime|Fixed a bug where parameters supplied as JSON to table extractions would be ignored.|
|1.22.1 [M]|2023-08-12|Runtime|Fixed: missing dependency|
|1.22.0 [M]|2023-08-11|Designer|Run dialog for testing the services.|
|1.21.16 [L]|2023-08-03|Runtime|Fixed an error when wrapping up transaction extraction execution.|
|1.21.15 [L]|2023-08-02|Theobald.Server|Fixes for CORS handling. Fixes for error handling for errors during the HTTP authentication step.|
|1.21.14 [M]|2023-08-02|General|Non-admin users can now set their own password|
|1.21.13 [L]|2023-07-27|Designer|Consolidated duplicated code for deleting services/sources functionality (part of the big refactoring task)|
|1.21.12 [L]|2023-07-27|Runtime|Transaction: Fixed a bug that caused the service execution to fail when the result contained non-ascii data|
|1.21.11 [L]|2023-07-24|Theobald.Server|Fixed a bug where the browser would not ask for username and password again if the credentials were invalid.|
|1.21.10 [L]|2023-07-21|Gateway|Improved Azure logic for long running requests|
|1.21.9 [L]|2023-07-20|Designer|Search and sort for columns in table services|
|1.21.8 [M]|2023-07-17|Runtime|Transaction: Improved "skipPopups" behavior to only skip unexpected popups |
|1.21.7 [L]|2023-07-13|Gateway|Relay: fixed request content type header.|
|1.21.6 [L]|2023-07-07|Theobald.Server|CORS: improved allowed origins header|
|1.21.5 [L]|2023-07-07|Runtime|Fixed a bug where a service with an empty result set would run into a timeout.|
|1.21.4 [L]|2023-07-06|Theobald.Server|Resolved issue with CORS.|
|1.21.3 [L]|2023-07-05|Designer|Improved behaviour for undefined services|
|1.21.2 [L]|2023-07-04|Designer|Small fixes for search input in services list.|
|1.21.1 [L]|2023-06-30|Theobald.Server|Fixed download behavior for OpenApi/Swagger files. Fixed internal server error when requesting the servers version information.|
|1.21.0 [M]|2023-06-27|Designer|Service based access control.|
|1.20.4 [L]|2023-06-15|Designer|Preparations for Service Access Control|
|1.20.3 [L]|2023-06-09|Designer|Delete button inside services fix|
|1.20.2 [L]|2023-06-09|Designer|Filtering services list by type and source|
|1.20.1 [L]|2023-06-07|Management|Fixed a bug where the windows service could not be stopped when Azure Relay was active.|
|[1.20.0 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.20.0.html)|2023-06-06|Runtime|Refactored the services server backend to enable future development. Various bug fixes.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.20.0.html))|
|1.19.0 [M]|2023-06-01|General|Old logs are now automatically deleted when executing a service|
|1.18.0 [M]|2023-06-01|Gateway|Azure Relay Manager decides more reliability when to reconnect.|
|1.17.2 [L]|2023-05-31|General|Added check in the setup to prevent that the designer gets started in browser after installation without running service.|
|1.17.1 [L]|2023-05-26|Designer|Filtering by names in services list.|
|1.17.0 [M]|2023-05-26|Designer|Logs for services runs.|
|1.16.3 [M]|2023-05-23|Runtime|Transaction: Fixed a bug that caused a less detailed error message to be displayed when the service run failed|
|1.16.2 [M]|2023-05-17|General|Azure Relay: Enable log file switching every 24h|
|1.16.1 [L]|2023-05-11|Gateway|Hotfix Azure Relay|
|1.16.0 [M]|2023-05-06|Designer|This release adds the Report component in the Preview stage.|
|[1.15.3 [H]](https://kb.theobald-software.com/release-notes/Yunio-1.15.3.html)|2023-05-05|General|**Security:** Fixed a path traversal vulnerability in the designer server which enabled it to serve any file from any accessible directory. Please update immediately.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.15.3.html))|
|1.15.2 [L]|2023-05-03|Designer|Improvements for server settings UI|
|1.15.1 [L]|2023-05-02|Designer|Transaction: Fixed a bug where the menu and toolbar would disappear after popup dialogs|
|1.15.0 [M]|2023-04-27|Gateway|Improved handling of network failures for AzureRelay|
|1.14.4 [L]|2023-04-15|Designer|Preview (yet disabled) for report service type with constant input values.|
|1.14.3 [L]|2023-03-31|General|Setup now checks if there are any running processes and offers option to abort setup.|
|1.14.2 [M]|2023-03-21|Designer|Function: Fixes & improvements for lists|
|1.14.1 [L]|2023-03-21|Theobald.Server|Fixed a bug where the browser would not ask for credentials anymore when running a service.|
|1.14.0 [M]|2023-03-17|Designer|Function: Added support for constant values and parameter renaming (experimental)|
|[1.13.1 [M]](https://kb.theobald-software.com/release-notes/Yunio-1.13.1.html)|2023-03-07|Theobald.Server|Custom authentication related security fixes and improvements.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.13.1.html))|
|[1.13.0 [M]](https://kb.theobald-software.com/release-notes/Yunio-1.13.0.html)|2023-03-07|General|This release adds full support for the Transaction component. It is now generally available and no longer in Preview.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.13.0.html))|
|1.12.3 [L]|2023-03-06|Runtime|Fixed a bug where the HTTP server would not attach CORS headers on failed authentication attempts. Rework the handling of parameters in the new runtime. Services with scalar runtime parameters now support the GET request type. Values for the scalar parameters can be supplied as query parameter.|
|1.12.2 [L]|2023-03-06|General|New EULA|
|1.12.1 [L]|2023-03-01|Designer|WhereClause Builder improvement.|
|1.12.0 [L]|2023-02-24|Designer|Stability and usability improvements. Preparation for Report component.|
|1.11.9 [L]|2023-02-17|Designer|default/last used connection pre-selection when creating new service|
|1.11.8 [L]|2023-02-10|Designer|Transaction logs|
|1.11.7 [L]|2023-01-27|Runtime|Root services URL returns version|
|1.11.6 [M]|2023-01-24|Runtime|Fix for JSON if more than one structure is selected for output|
|1.11.5 [L]|2023-01-20|General|Transaction: Input and output fields can now be selected. Existing transaction services need to be re-created.|
|1.11.4 [L]|2023-01-19|Designer|Log UI for services|
|1.11.3 [L]|2022-12-14|General|Fixed a bug where an error during a CORS request would not send CORS headers. This would cause the client to not be able to access the error information sent in the response. Service executions now have their dedicated log file. Fixed a bug where table services would not finish if the result set was empty.|
|1.11.2 [M]|2022-12-08|Designer|Fixes & improvements for disabling TLS|
|1.11.1 [M]|2022-12-08|Designer|Fix for login (bug introduced int 1.11.0)|
|1.11.0 [L]|2022-12-07|Gateway|Azure Relay Hybrid Connection Support. Editing Service Name. Improved OpenAPI.|
|1.10.1 [L]|2022-12-01|Theobald.Server|Fixed the logging of the service, which was too verbose.|
|[1.10.0 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.10.0.html)|2022-11-28|General|Updated transaction, existing transaction services need to be re-created.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.10.0.html))|
|1.9.10 [L]|2022-11-24|Theobald.Server|Fixed an issue where the service would not start and quit with an error in case of missing designer files instead of fixing them.|
|1.9.9 [L]|2022-11-18|Designer|Fix for edit URLs|
|1.9.8 [L]|2022-11-18|Designer|Fix for RPC error handling|
|1.9.7 [M]|2022-11-18|Designer|Table - Swagger/OpenAPI fixes for some data types|
|1.9.6 [M]|2022-11-17|Theobald.Server|Fixed an issue where the new runtime would not find the transaction workers due to incorrect paths.|
|1.9.5 [L]|2022-11-15|General|Changed default RFC library to NWRFC|
|1.9.4 [L]|2022-11-09|Theobald.Server|The self-managing windows service executable was ported to rust, replacing a Windows-only C++ implementation. The same was done for the listeners, which accept incoming network connections.|
|1.9.3 [L]|2022-11-09|Designer|Fixes & improvements for license UI|
|1.9.2 [L]|2022-11-09|Designer|Delete button in service/connection details|
|1.9.1 [L]|2022-11-07|Designer|License UI|
|1.9.0 [L]|2022-10-27|Designer|Added WHERE clause editor.|
|[1.8.0 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.8.0.html)|2022-10-19|Runtime|New runtime.([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.8.0.html))|
|1.7.6 [L]|2022-09-12|Designer|Styling for Toasts|
|1.7.5 [L]|2022-09-07|Designer|Settings support custom hostname for OpenAPI|
|1.7.4 [L]|2022-08-03|Designer|Removed detailed CORS settings|
|1.7.3 [L]|2022-08-02|Designer|Fix for redirecting unknown Designer URLs|
|1.7.2 [L]|2022-07-15|General|Update transaction component|
|1.7.1 [M]|2022-07-08|Designer|Fixes for deleting users|
|1.7.0 [H]|2022-07-06|Designer|Access control added|
|1.6.2 [M]|2022-06-24|Designer|Big css refactoring|
|1.6.1 [M]|2022-06-03|Designer|Swagger/OpenAPI: Removed writeOnly from whereClause|
|1.6.0 [M]|2022-06-03|Designer|Improved the OpenAPI for usage with Nintex Cloud.|
|1.5.8 [L]|2022-06-01|Designer|Fixed a bug where searching for tables and BAPIs in SAP would throw an error due to broken javascript references.|
|1.5.7 [L]|2022-06-01|General|Fixed a bug where loading the source for transaction would result in an error.|
|1.5.6 [L]|2022-05-31|General|Subdirectory support for the websocket server connection. (Not yet enabled in the UI and runtime)|
|1.5.5 [L]|2022-04-30|General|Option to enable .NET Runtime update over Windows Update (for Windows Server Editions).|
|1.5.4 [L]|2022-04-26|General|Improved dependencies resources (.NET 6.0)|
|1.5.3 [L]|2022-04-22|General|Improved opening custom designer web page.|
|[1.5.2 [L]](https://kb.theobald-software.com/release-notes/Yunio-1.5.2.html)|2022-04-21|Designer|Introduced progress dialog([Release note](https://kb.theobald-software.com/release-notes/Yunio-1.5.2.html))|
|1.5.1 [L]|2022-03-31|Designer|Improved layout of transaction component and added support for several new controls|
|1.5.0 [M]|2022-03-31|Designer|Function: Aggregate parameter controls for all table/structure members|
|1.4.0 [M]|2022-03-25|Designer|Added cache modification check for static files|
|1.3.3 [L]|2022-03-25|General|Added upload check script in order to confirm if the published setup file has the expected version|
|1.3.2 [M]|2022-03-22|Designer|Fixed logos, CSS refactoring, completely removed 'Chota.css' library|
|1.3.1 [L]|2022-03-19|Designer|Fixes & improvements for connection details|
|1.3.0 [M]|2022-03-17|Designer|Dynamic page load, fixes for settings, fix for deleting user|
|1.2.5 [H]|2022-03-16|Runtime|Security fix: "User is allowed to log in" is also checked when running services now|
|1.2.4 [M]|2022-03-10|Designer|Improvements for entering SAP password & console logging|
|1.2.3 [L]|2022-03-10|Designer|RPC refactoring (should not change behaviour)|
|1.2.2 [M]|2022-03-10|Designer|Improvements for texts and anonymous access checkbox|
|1.2.1 [M]|2022-03-08|Designer|Fix for creating/deleting users without enabling TLS first.|
|1.2.0 [M]|2022-03-07|Management|User management. Login for the designer and basic authentication for the web services. TLS must be enabled.|
|1.1.1 [L]|2022-02-15|Runtime|Improvements for opening SAP connections|
|1.1.0 [M]|2022-02-11|Designer|Function module: support for a table parameter defined with TYPE keyword.|
|1.0.5 [L]|2022-02-10|Designer|Small fix for previous release, so the Services can be created.|
|1.0.4 [M]|2022-02-09|Designer|Implemented column "select-all"/"de-select all" for table services.|
|1.0.3 [L]|2022-02-08|Designer|More concise display of some error messages (e. g. connection test)|
|1.0.2 [L]|2021-12-20|General|Fixes for OpenApi-file generation and input validation. Rework of password handling when editing a Connection.|
|1.0.1 [L]|2021-12-14|Runtime|Output improved for parameter sequences of different types.|
|1.0.0 [M]|2021-12-09|General|First official relase, end of public beta|
|0.8.0 [L]|2021-12-07|General|Added Transaction (experimental), fixes & improvements|
|0.7.0 [L]|2021-11-30|General|Various fixes & improvements|
|0.6.0 [L]|2021-11-24|General|Various fixes & improvements|
|0.5.0 [L]|2021-09-24|General|.NET 5.0 Migration|
|0.4.0 [L]|2021-09-16|General|Beta Release|
|0.3.0 [M]|2021-08-26|General|Various fixes & improvements |
|[0.2.0 [L]](https://kb.theobald-software.com/release-notes/Yunio-0.2.0.html)|2021-07-13|General|Various fixes & improvements (see release note for details)([Release note](https://kb.theobald-software.com/release-notes/Yunio-0.2.0.html))|
|0.1.0 [M]|2021-07-01|General|Public Beta|
