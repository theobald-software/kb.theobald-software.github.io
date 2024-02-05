|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|4.0.28 [L]|2024-02-05|General|Fixed a bug where an extractions directory would not be deleted entirely when deleting the extraction in the designer. Fixed the error message sent by the HTTP-server if supplied parameters are ambiguous.|
|4.0.27 [L]|2024-02-02|General|Fixed a bug in the HTTP server causing the request to hang and massive memory usage.|
|[4.0.26 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.26.html)|2024-01-31|General|Fixed multiple run information and cache issues.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.26.html))|
|4.0.25 [M]|2024-01-25|General|Fixed DeltaQ update mode runtime parameter handling|
|4.0.24 [L]|2024-01-24|General|Fixed a bug where cleaning up old cache entries would not correctly purge all obsolete entries.|
|4.0.23 [L]|2024-01-23|General|Fixed a bug causing authentication in the webserver to fail when the username had different casing.|
|4.0.22 [L]|2024-01-10|General|Fixed a bug where the server would try to read the SAP password from json file even though SSO is enabled and fail if none is found. Fixed a bug where destination settings would not be applied correctly when switching the parameter with the "destination" parameter in a web API call.|
|4.0.21 [L]|2023-12-18|General|Fixed authentication logic for extractions when using source impersonation with Kerberos authentication.|
|4.0.20 [L]|2023-12-04|General|Added the mapping for the result columns custom order file and its logic for column transformation in runtime|
|[4.0.19 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.19.html)|2023-11-24|General|Fixes for HTTP based Windows authentication and Table runtime parameters and logging improvements for extraction runs.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.19.html))|
|4.0.18 [L]|2023-11-24|General|Fixed a bug causing failed extractions when using Not Assigned (#) member in MDX cube filter.|
|4.0.17 [L]|2023-11-20|General|Fixed a bug where a cache entry would not be invalidated when aborting the extraction. Fixed a bug where the cache entries for an extraction would not get deleted due to wrong directory operations.|
|4.0.16 [L]|2023-11-15|General|Fixed a bug causing cache entries of failed extractions to not be invalidated correctly. Fixed the timestamp format for script expression of `Extraction.Timestamp`.|
|4.0.15 [L]|2023-11-09|General|Fixed a bug where runtime parameters were not passed on to the destination.|
|4.0.14 [L]|2023-11-03|General|Only override SNC library path for Designer connections, if environment variable is set|
|[4.0.13 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.13.html)|2023-10-27|General|Small fixes and improvements to error handling, scripting and logging.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.13.html))|
|4.0.12 [L]|2023-10-24|General|Fixed a bug that caused custom runtime parameter values to not be passed to the Query extractor.|
|4.0.11 [L]|2023-10-13|General|Fix & improve parameter output processing|
|4.0.10 [L]|2023-10-13|General|Fixed a bug, where the runtime would hang if an error happened at a specific time. Improved logging for certain errors.|
|4.0.9 [L]|2023-10-11|General|Fixed and improve behavior and logging of the extraction cache, its clean up and when aborting extractions.|
|4.0.8 [L]|2023-09-26|General|Fixed SAP connection management in the new runtime. This caused severe performance regression under high load. Fixed a deadlock which could occur under high load in the HTTP server.|
|4.0.7 [L]|2023-09-25|General|Fixed the handling of invalid parameters for table and query extractions.|
|4.0.6 [L]|2023-09-22|General|Use the default values if a parameter value is too large in a table or query extraction.|
|4.0.5 [L]|2023-09-22|General|Fixed a bug causing the HTTP server to send incomplete data, when using compression.|
|4.0.4 [L]|2023-09-20|General|Improved error messages of the HTTP server when invalid values were provided for parameters.|
|4.0.3 [L]|2023-09-12|General|Fixed the value of the 'WWW-Authenticate' header for the extraction run endpoint.|
|4.0.2 [L]|2023-09-11|General|Fixed inconsistencies in the authentication logic and connection handling|
|4.0.1 [L]|2023-09-11|General|Fixed a bug which caused failed extractions to contain in "running" state.|
|[4.0.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.0.html)|2023-09-07|General|The new runtime is now feature complete and generally available.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-4.0.0.html))|
|3.9.3 [L]|2023-09-05|General|Fixed a bug where the new runtime would use the wrong extraction method for BAPI extractions.|
|3.9.2 [L]|2023-08-14|General|Fixed a bug where parameters supplied as JSON to table extractions would be ignored. Reworked the license check of the new runtime.|
|3.9.1 [L]|2023-08-03|General|Fixed an error when wrapping up transaction extraction execution.|
|[3.9.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-3.9.0.html)|2023-08-02|General|Fixes and refactoring for new runtime. Fixes for CORS and error handling in HTTP server.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-3.9.0.html))|
|3.8.8 [M]|2023-08-02|General|Non-admin users can now set their own password|
|3.8.6 [L]|2023-07-24|General|Fixed a bug which caused the server to not attach the www-authenticate header on invalid credentials.|
|3.8.5 [L]|2023-07-07|General|Fixed CORS for specific domains|
|3.8.4 [L]|2023-07-07|General|Fixed handling of extractions with empty result sets.|
|3.8.3 [L]|2023-07-06|General|Fix auth / cors sequence, logic|
|3.8.2 [L]|2023-06-30|General|Fix clean up logic for HTTP bytes responses.|
|3.8.1 [L]|2023-06-22|General|Fixed a bug where the authorization procedure for AD-users would not use the correct identifier.|
|[3.8.0 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-3.8.0.html)|2023-06-06|General|Added common base for web worker, HTTP server backend and running extractions. An accompanying framework for writing tests for this stack was added as well. Various bug fixes.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-3.8.0.html))|
|3.7.0 [L]|2023-06-01|General|Common log cleanup base|
|3.6.20 [L]|2023-05-05|General|Fixed a bug where the requested resource of a HTTP request would not get decoded properly.|
|3.6.19 [L]|2023-04-27|General|Improved logging for Logon Ticket SSO|
|3.6.18 [L]|2023-04-27|General|New Hierarchy Extractor merged into master|
|3.6.17 [L]|2023-04-21|General|Report improvement for coming feature in yunIO|
|3.6.16 [L]|2023-04-13|General|Report improvement for coming feature in yunIO|
|3.6.15 [L]|2023-03-31|General|Report improvement for coming feature in yunIO|
|3.6.14 [H]|2023-03-23|General|Security fix: Negotiate authentication is required for all requests instead of only for the first request of each TCP connection|
|3.6.13 [L]|2023-03-21|General|Fixed a bug, where the WWW-Authenticate HTTP header would be sent anymore.|
|3.6.12 [M]|2023-03-09|General|Transaction: Fixed a bug that caused errors on special compression scenarios|
|[3.6.11 [M]](https://kb.theobald-software.com/release-notes/TheobaldServer-3.6.11.html)|2023-03-07|General|Custom authentication related security fixes and improvements.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-3.6.11.html))|
|3.6.10 [L]|2023-03-06|General|Fix a bug where the HTTP server would not attach CORS headers on failed authentication attempts. Rework the handling of parameters in the new runtime.|
|3.6.9 [L]|2023-02-23|General|License check for number of extractions|
|3.6.8 [L]|2023-02-21|General|RPC bapi / report metadata|
|3.6.7 [L]|2023-02-18|General|Fix for SNC with Windows impersonation (broken since 3.6.0)|
|[3.6.6 [L]](https://kb.theobald-software.com/release-notes/TheobaldServer-3.6.6.html)|2023-02-09|General|Logging consistency and SAP authentication fixes for the new runtime.([Release note](https://kb.theobald-software.com/release-notes/TheobaldServer-3.6.6.html))|
|3.6.5 [L]|2023-02-01|General|Report Exchange|
|3.6.4 [L]|2023-01-25|General|experimental rpc exchange: get-license-status|
|3.6.3 [L]|2023-01-21|General|Using logged in Designer user for server RFC connection test|
|3.6.2 [L]|2023-01-20|General|Fixes & improvements for opening RFC Designer connections with SSO|
|3.6.1 [L]|2023-01-20|General|External ID SSO: Using CommonCryptoLib SNC name format instead of Kerberos Wrapper Library format|
|3.6.0 [L]|2023-01-19|General|Added support for External ID SSO|
|3.5.18 [L]|2023-01-15|General|Added Table CDC as new extraction type|
|3.5.17 [L]|2022-12-15|General|Fixed a bug where RPC calls to fetch the most recent extraction runs would have an invalid format when log files for runs were missing.|
|3.5.16 [L]|2022-12-14|General|Fixed a bug in the HTTP server which caused CORS headers to be omitted in certain error cases. The new runtime is now able to execute Report extractions. The new runtime does now create dedicated logs and status information for each extraction execution.|
|3.5.15 [L]|2022-11-18|General|Rpc server now checks all payload for illegal bytes before sending|
|3.5.14 [L]|2022-11-17|General|Fixed an occasional deadlock when writing an HTTP response to the network. Fixed a bug where an error during transaction execution would not be communicated properly.|
|3.5.13 [L]|2022-11-15|General|Changed default RFC library to NWRFC|
|3.5.12 [L]|2022-11-09|General|Improved move-exchange handling|
|3.5.11 [L]|2022-11-08|General|Product OpenApi PathMapping changed to Endpoint.|
|3.5.10 [L]|2022-10-20|General|Removed a senseless default for the associated source of an extraction.|
|3.5.9 [L]|2022-10-19|General|A new runtime was implemented. It provides only a subset of the current runtime but will grow its feature set in the near future. Various modules use the new ILog interface.|
|3.5.8 [L]|2022-09-08|General|A Rpc client can now request its current privilege level.|
|3.5.7 [L]|2022-09-07|General|Added OpenAPI config to known exchanges|
|3.5.6 [L]|2022-08-12|General|Fixed an issue where the configuration server would send inconsistent data upon reading extraction runs if the user does not have access to the extraction|
|3.5.5 [L]|2022-07-15|General|Update transaction component|
|3.5.4 [L]|2022-07-08|General|The RPC Server does now support cleaning the result cache. The RPC client does now support requesting to clean the result cache.|
|3.5.3 [L]|2022-06-03|General|Added Access-Control-Allow-Origin header in responses for legacy implementation|
|3.5.2 [L]|2022-06-03|General|Fixed a bug, where receiving an RPC error message would crash the client reader.|
|3.5.1 [L]|2022-06-01|General|Fixed a bug where the HTTP server would not send a valid HTTP response when the chunk encoded body was empty.|
|3.5.0 [L]|2022-05-31|General|Subdirectory support for persistence and RPC server/client.|
|3.4.9 [L]|2022-05-12|General|Transaction worker executable files are now signed |
|3.4.8 [L]|2022-05-06|General|Fix for transaction deserialization|
|3.4.7 [M]|2022-03-25|General|Fixed timezone of Date header (was local time), nice reaon phrase for HTTP status 304|
|3.4.6 [L]|2022-03-23|General|Replaced Swabian HTTP status reason phrases with English ones|
|3.4.5 [L]|2022-03-16|General|Locked account is also considered a general authentication problem now|
|3.4.4 [L]|2022-03-14|General|Usage of the new certificate pinning and TLS error handling interface|
|3.4.3 [M]|2022-02-24|General|Improvements for designer authentication|
|3.4.2 [L]|2022-02-21|General|Fix for some errors not being communicated to the caller.|
|3.4.1 [L]|2022-02-16|General|KeepAlive support for connection using the new authentication.|
|3.4.0 [M]|2022-02-15|General|TheoAuth: Added support for WebSockets|
|3.3.1 [L]|2022-02-15|General|Fixed issues where the Rpc client did not correctly close the connection when asked to.|
|3.3.0 [M]|2022-02-15|General|Added support for certificate SSO and reworked logic for opening SAP connections|
|3.2.0 [L]|2022-02-08|General|Client side implementation to match Xtract Universal server; Fixes for client side notification handling; Server error information is now a JSON object |
|3.1.0 [L]|2021-12-07|General|Transaction component and pass-through mode |
|3.0.3 [M]|2021-12-02|General|Fix for storing passwords with non-ASCII characters|
|3.0.2 [L]|2021-11-02|General|RPC: Requesting non-existent extraction logs is no longer an error|
|3.0.1 [M]|2021-10-28|General|Fix for reading unit errors in legacy RPC|
|3.0.0 [L]|2021-10-21|General|Added new web server implementation|
|2.0.3 [M]|2021-10-20|General|Names are checked after converting from paths, and logged/filtered when enumerating|
|2.0.2 [M]|2021-10-20|General|Fix for retrieving latest runs|
|2.0.1 [M]|2021-10-20|General|Fixes & improvements for configuration version check|
|2.0.0 [M]|2021-10-18|General|New RPC Server implementation|
|1.2.2 [M]|2021-09-28|General|Fix for timeout while stopping servers|
|1.2.1 [L]|2021-09-22|General|Performance improvement for ForkingWaitHandleServer on machines with few cores.|
|1.2.0 [L]|2021-09-09|General|Rpc server rust port|
|1.1.2 [M]|2021-07-06|General|Fixed serialization of X.509 certificate info|
|1.1.1 [L]|2021-06-23|General|Improved logging for graceful shutdown|
|1.1.0 [L]|2021-05-19|General|Added new async servers|
|1.0.13 [L]|2021-05-06|General|CertificatePinning support and better TLS error message support for AuthClient|
|1.0.12 [L]|2021-04-06|General|Catch SocketException during shutdown|
|1.0.11 [L]|2021-01-22|General|Rpc commands for column level encryption configuration|
|1.0.10 [L]|2021-01-19|General|Fix for bug introduced in 1.0.9 when running as Windows Application|
|1.0.9 [L]|2021-01-14|General|Fix for default console encoding with preambles|
|1.0.8 [M]|2020-06-08|General|Fixed a bug that allowed dots in names|
|1.0.7 [L]|2020-05-19|General|TheoAuth implementation is async now|
|1.0.6 [M]|2020-05-18|General|Fix for AggregateException in StreamExtensions|
|1.0.5 [L]|2020-05-08|General|HttpWebServer basic support for http POST |
|1.0.4 [M]|2020-04-29|General|rpc lib added, theo.net uses framework, nugets not in output, web has websocket over http class|
|1.0.3 [M]|2020-03-03|General|Moved CertificateInfo class to Theobald.Net (previously Theobald.Web)|
|1.0.2 [M]|2020-02-26|General|Added better error message when using HTTPS & .NET Framework below 4.8|
|1.0.1 [M]|2020-02-26|General|Fix for HTTPS|
|1.0.0 [M]|2020-02-24|General|Added Theobald.Persistence, Theobald.Net and Theobald.Web|
