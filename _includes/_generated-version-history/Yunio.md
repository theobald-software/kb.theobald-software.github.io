|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
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
