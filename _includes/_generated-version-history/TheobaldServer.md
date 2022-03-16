|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
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
