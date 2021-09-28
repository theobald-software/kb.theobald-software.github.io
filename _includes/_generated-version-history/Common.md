|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|2.16.0 [L]|2021-09-28|General|Added WaitRegistration class |
|2.15.7 [L]|2021-09-28|General|ProcessAsync flags set to create no console window|
|2.15.6 [L]|2021-09-28|General|ProcessAsync added support for arguments|
|2.15.5 [L]|2021-09-22|General|Fix for starving the threadpool while waiting for spawned thread|
|2.15.4 [L]|2021-09-20|WPF|Added removeable drive icon.|
|2.15.3 [L]|2021-09-20|WPF|Added drive icon, network drive icon, folder icon, red folder icon and open folder icon.|
|2.15.2 [L]|2021-08-12|Licensing|Backward-compatibility for default destinations (new licenses on old XU versions)|
|2.15.1 [L]|2021-08-12|General|Client handles of StdIn, StdOut and StdErr in the Process-Wrapper are now closed correctly on the server side after sending them to the client.|
|2.15.0 [M]|2021-07-08|General|Start processes using P/Invoke instead of System.Diagnostics.Process|
|2.14.16 [L]|2021-07-01|WPF|Introduction of ShowConfirmation4All message box|
|2.14.15 [L]|2021-06-10|General|Byte token support for line reader Performance optimization for line reader|
|2.14.14 [M]|2021-05-20|WPF|Fix for displaying messages when no possible window owner is found for the message dialog|
|2.14.13 [L]|2021-05-06|General|Message box for showing certificates Webrequest wrapper for better tls error messages certificate pinning and tls error handling infrastructure|
|2.14.12 [L]|2021-05-03|WPF|Added WarningConfirmation dialog to TheoMessageHelper|
|2.14.11 [L]|2021-05-03|WPF|Added colored icons for custom message boxes|
|2.14.10 [L]|2021-04-16|WPF|Fixed a bug which would cause the whole About Window to stretch together with the destinations list|
|2.14.9 [L]|2021-03-31|Licensing|Added sources limit.|
|2.14.8 [L]|2021-03-23|General|Some additions for reading/writing JSON and file I/O|
|2.14.7 [L]|2021-03-02|General|CsvReader overhaul|
|[2.14.6 [L]](https://kb.theobald-software.com/release-notes/Common-2.14.6.html)|2021-02-22|WPF|Introduced new messaging system([Release note](https://kb.theobald-software.com/release-notes/Common-2.14.6.html))|
|2.14.5 [L]|2021-02-10|General|Added custom Number struct and ReadNumber method to JsonReader|
|2.14.4 [L]|2021-01-28|Licensing|Added new License Destination for Sql Server Reporting Services|
|2.14.3 [L]|2021-01-22|General|7Bit encoding stream extensions for i32 and BigInteger|
|2.14.2 [L]|2021-01-20|General|Fixed a bug where the CSVReader would not correctly signal a new line, Fixed a bug where the CSVReader would ignore a line break after a quoted cell|
|[2.14.1 [L]](https://kb.theobald-software.com/release-notes/Common-2.14.1.html)|2021-01-19|General|Fix for writing TimeSpan on JsonWriter class([Release note](https://kb.theobald-software.com/release-notes/Common-2.14.1.html))|
|2.14.0 [L]|2021-01-15|General|CsvReader class which implements reading CSV data as specified in RFC4180. (Beta)|
|2.13.12 [M]|2021-01-13|General|Fix for ambiguous timestamps during daylight saving time transition|
|2.13.11 [L]|2021-01-07|General|JsonReader ReadBooleans() and ReadDoubles() added for arrays|
|2.13.10 [L]|2020-12-03|General|Fix for CrLf handling in CharsToLines, including UnitTests; LineToCells for splitting CSV lines into the cells.|
|2.13.9 [L]|2020-11-30|WPF|Added "refresh" icon.|
|2.13.8 [L]|2020-11-26|General|Fix for creating lines from chars in specific condition where some lines could have their content overwritten by others'|
|2.13.7 [L]|2020-11-09|Licensing|Added sources limit to license|
|2.13.6 [L]|2020-11-06|General|Updated NW RFC libraries to 750 patch level 7|
|2.13.5 [L]|2020-11-03|WPF|Added new icon.|
|2.13.4 [L]|2020-11-02|General|IoHelper.OpenFileRetryWrite() now has FileMode parameter instead of bool|
|2.13.3 [L]|2020-10-26|General|Added JSON support for ushort|
|2.13.2 [L]|2020-09-24|WPF|Fix for a bug where the new progress dialog would pop up as the top most window instead of a modal dialog.|
|2.13.1 [L]|2020-09-24|WPF|Added new ProgressDialog class for running tasks with a progress dialog.|
|2.13.0 [M]|2020-09-14|Licensing|Added Google Cloud Storage to Licensing Enum|
|2.12.0 [L]|2020-09-11|WPF|Generic about window created|
|2.11.0 [L]|2020-08-26|General|Added generic read buffer|
|2.10.0 [L]|2020-08-13|General|Added helper for processes|
|2.9.2 [L]|2020-08-13|General|IoHelper.DeleteFileRetry no longer retries on DirectoryNotFoundExceptions|
|2.9.1 [M]|2020-07-29|General|Updated NW RFC libraries to 750 patch level 6|
|2.9.0 [M]|2020-07-23|General|Added basic support for bulky async data processing|
|2.8.0 [M]|2020-07-15|General|Added TimeStamp data type (utclong)|
|2.7.6 [L]|2020-07-03|WPF|Fix for cut off version numbers in the version history window.|
|2.7.5 [L]|2020-05-20|Licensing|License forward compatibility improvement for supported components and destinations.|
|2.7.4 [M]|2020-05-04|General|Added ReadDecimal, ReadDouble, ReadInt64 to JsonReader. Fixed double in JsonWriter|
|2.7.3 [M]|2020-04-28|Licensing|Added Parquet destination to XU default destinations|
|2.7.2 [M]|2020-04-27|Licensing|Added Parquet destination|
|2.7.1 [L]|2020-03-23|Licensing|Fixed forward compatibility of licensed components.|
|2.7.0 [M]|2020-02-26|Licensing|All XU licenses implicitly contain the default destinations now|
|2.6.0 [M]|2020-02-26|Licensing|Added JSON destination to XU default licenses|
|2.5.0 [M]|2020-02-20|General|Added retry logic for accessing files in use|
|2.4.1 [L]|2020-02-06|General|Extended JSON Writer|
|2.4.0 [M]|2020-02-04|WPF|Updated to .NET Framework 4.7.2|
|2.3.1 [H]|2020-01-16|General|RemoveControlCharacters() accidentally removed everything except ASCII since version 2.2.1|
|2.3.0 [M]|2019-12-18|General|Moved log splitting to LoggerMulti to properly support XU config / web server logs|
|[2.2.4 [L]](https://kb.theobald-software.com/release-notes/Common-2.2.4.html)|2019-11-26|General|New DeleteFile method in IOHelper([Release note](https://kb.theobald-software.com/release-notes/Common-2.2.4.html))|
|2.2.3 [M]|2019-11-15|General|Updated gacutil to 4.7.2558.0|
|2.2.2 [M]|2019-11-15|General|Updated Installer for XIS/XRS|
|2.2.1 [L]|2019-11-15|General|RemoveControlCharacters now also removes chars from the C1 range|
|2.2.0 [M]|2019-11-13|General|Logger throws InvalidOperationException if used without calling Start()|
|2.1.0 [L]|2019-11-13|General|Logging now supports 24h and more in one log (but still restricted to < 100h)|
|2.0.0 [M]|2019-09-23|General|Updated to .NET Standard 2.0|
