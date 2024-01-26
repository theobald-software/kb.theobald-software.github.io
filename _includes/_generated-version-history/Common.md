|Version|Date    |Component   |Description|
|:-----:|:------:|:----------:|:----------|
|2.23.17 [L]|2024-01-26|Licensing|Removed internal references of defunct products (XtractPPV, XtractQV, XtractRS) and destinations (AlteryxConnect, GoodData, MicroStrategy, ODataAtom, PowerBI, TableauConnector, Teradata, Vertica) from code base|
|2.23.16 [L]|2024-01-23|General|Allow for dynamic buffers in encoding classes. Add helper functions for ignoring exceptions.|
|2.23.15 [L]|2023-10-19|Licensing|Removed Hadoop from license library|
|2.23.14 [L]|2023-10-04|Licensing|Removed optional business rule ServerNameShouldBeSet for XtractForAlteryx Designer ("Desktop") licenses. Since we can't enforce this limit it doesnt make sense to save it into the licenses. With this business rule gone, the automated license tool can now create new XfA Designer licenses without a server name (field is entirely optional now).|
|2.23.13 [L]|2023-09-28|WPF|Added a hotkey window|
|2.23.12 [L]|2023-09-12|General|Added JsonReader.ReadObjectDynamicObject() and JsonReader.ReadDynamicArray()|
|2.23.11 [L]|2023-08-14|Licensing|Marked LicenseLoader as obsolete; introduced new LicenseValidator class instead which can perform license validation checks; added method CheckProductAndKind to ProductLicense; added unit tests|
|2.23.10 [L]|2023-08-11|Licensing|Updated & improved texts for various licensing error messages; fixed possible bugs|
|2.23.9 [L]|2023-08-11|WPF|Added NumericTextBox|
|2.23.8 [L]|2023-08-09|General|Fixed byte buffer manager empty string writing|
|2.23.7 [L]|2023-08-02|General|DateTime to/from string conversion helpers. Function for opening a file with timeout.|
|2.23.6 [L]|2023-06-06|General|Added some ergonomics for arrays and DateTime formats. Added JSON serialization for various classes.|
|2.23.5 [L]|2023-06-01|Licensing|Moved some licensing code to a separate project. Marked outdated licensing enum members as obsolete.|
|2.23.4 [L]|2023-06-01|General|Add win32 job API |
|2.23.3 [L]|2023-05-11|WPF|New FolderBrowserDialog: Increased search depth, changed icons to windows stock icons, hide system entries and hidden folders, added manual path input field and improved perfomance.|
|2.23.1 [L]|2023-04-26|General|Added Update-Reminder feature|
|2.23.0 [L]|2023-03-29|Licensing|Internal changes due to changed licensing model for TableCdc component.|
|2.22.1 [L]|2023-03-23|General|VC++ 2013 setup was replaced by directly used DLLs (msvcp120.dll and msvcr120.dll)|
|[2.22.0 [L]](https://kb.theobald-software.com/release-notes/Common-2.22.0.html)|2023-03-15|General|Added ByteSerialization and ByteBufferManager classes([Release note](https://kb.theobald-software.com/release-notes/Common-2.22.0.html))|
|2.21.15 [L]|2023-03-07|General|Increased the number of iterations for PBKDF2. Implemented constant time byte array comparison. Added test cases for constant time array comparison.|
|2.21.14 [L]|2023-02-15|General|Logging cleanup & refactoring|
|2.21.13 [L]|2023-01-31|General|Method for JSON serialization of empty array|
|2.21.12 [L]|2023-01-30|General|Updated librfc32 64-bit to 753 PL700|
|2.21.11 [M]|2023-01-30|General|Updated NW RFC SDK to 750 PL11|
|2.21.10 [L]|2023-01-15|General|Support for writing ULEB128 encoding of 64-bit unsigned integer to byte array|
|2.21.9 [L]|2023-01-15|Licensing|Added Table CDC as new LicenseComponent|
|2.21.8 [L]|2023-01-06|General|Made ReadJsonProperty() and WriteJsonFields() public|
|2.21.7 [L]|2022-12-14|General|Introduced a new type for ergonomic handling of the logger. Extended JSON writer to write ulong types. Introduced a new interface for the LicenseLoader.|
|2.21.6 [L]|2022-12-13|WPF|Fix for XtractDataGridRowHeader style|
|2.21.5 [L]|2022-12-01|General|Added a 64bits version for the Fnv1a hash generator|
|2.21.4 [L]|2022-11-14|General|Moved SlimXml + Language Key to ERPConnect|
|2.21.3 [L]|2022-11-05|General|Moved Abap* classes to ERPConnect|
|2.21.2 [L]|2022-11-05|General|Added more date/time ABAP types|
|2.21.1 [L]|2022-10-19|General|Introduced ILog interface to reduce coupling with specific log implementations.|
|2.20.6 [M]|2022-10-13|General|Packed numbers that exceed the precision of System.Decimal throw an exception instead of being rounded|
|2.20.5 [L]|2022-09-07|General|Updated gacutil|
|2.20.4 [L]|2022-07-20|General|Support for writing Date/Time JSON array elements|
|2.20.3 [L]|2022-07-19|General|Updated NWRFC SDK to 7.50 Patch-Level 10|
|2.20.2 [L]|2022-07-08|General|Non-blocking (async) versions of the IO helper functions were added|
|2.20.1 [L]|2022-07-01|WPF|Added extractions limit on about window|
|2.20.0 [M]|2022-06-24|General|JSON serialization for date/time|
|2.19.2 [L]|2022-06-23|Licensing|Fixed Bug around License Business Rules for YunIO licenses.|
|2.19.1 [L]|2022-06-14|Licensing|Added new field Extractions to ProductLicense and updated Tests and LicenseBuilders accordingly. Moved shared code from License creation applications to Common.|
|2.19.0 [L]|2022-06-08|Licensing|Removed support for legacy DLL licenses|
|2.18.0 [L]|2022-06-03|Licensing|Added new field Extractions to ProductLicense. Fixed property Sources not to be nullable anymore. Moved common code from Licensing Tools to Theobald.Licensing|
|2.17.15 [L]|2022-05-31|WPF|The progress dialog now always runs the work load on a background thread.|
|2.17.14 [L]|2022-05-18|General|Fixed a bug where the CsvLineReader would return lines multiple times if the buffer is small enough.|
|2.17.13 [L]|2022-05-11|Licensing|Added integration tests for real-world ProductLicenses|
|2.17.12 [L]|2022-05-06|Licensing|Added overload to ProductLicense.Sign which allows to specify a CreationDate. |
|2.17.11 [L]|2022-03-28|WPF|About window was refactored|
|2.17.10 [L]|2022-03-23|General|Added a LoggerTrace which logs to the Debug Console. That allows to debug GUI applications because they don't have a console to write to.|
|2.17.9 [L]|2022-03-14|General|Refactoring for the certificate pinning and TLS error handling interfaces|
|2.17.8 [L]|2022-02-25|WPF|Fix for about window to display server or cluster info correcly according to the license|
|2.17.7 [L]|2022-02-09|WPF|Added SnapsToDevicePixels=true to Style|
|2.17.6 [M]|2022-02-02|WPF|Fix for ProgressDialog error handling|
|2.17.5 [L]|2022-02-02|WPF|Added ControlNotInitializedException, marked TaskRunner as obsolete|
|2.17.4 [L]|2022-01-13|WPF|Added text box icon.|
|2.17.3 [L]|2022-01-06|General|Improvements for certificate enrollment|
|2.17.2 [L]|2021-12-21|Licensing|Improvements from Code Review for License Creation logic.|
|2.17.1 [L]|2021-12-16|WPF|Introducing style for readonly textboxes|
|2.17.0 [L]|2021-12-13|General|Added Theobald.CertificateEnrollment|
|2.16.9 [L]|2021-12-02|General|Support to have an instance of ProcessAsync |
|2.16.8 [L]|2021-11-22|Licensing|Added method to ILicenseBusinessRule that indicates whether the Rule applies to a certain Property of  a ProductLicense. This is helpful in a UI to highlight the input fields where a user has made bad inputs.|
|2.16.7 [L]|2021-11-12|Licensing|Added static methods to ProductLicense which indicate whether a License CanHaveComponents and CanHaveDestinations based on LicenseProduct and LicenseKind. This is helpful for the new LicenseTools. Also added a class LicenseFileWriter which encapsulates some directory and filename logic which is shared beteen LicenseTool and AutomatedLicenseCreation.|
|2.16.6 [L]|2021-11-04|General|16-Bit character code points are now correctly displayed in JSON strings|
|2.16.5 [L]|2021-10-26|WPF|Added folder browser.|
|2.16.4 [L]|2021-10-05|Licensing|Added LicenseSerialNumber and tests to Theobald.Licensing. Contains all business rules to create a LicenseSerialNumber as it is used in CRM. For automation of the License File creation, this code should be centrally available.|
|2.16.3 [L]|2021-10-04|Licensing|Added PersistedCounter to library to centralize all relevant code around License Creation into Theobald.Licensing.|
|2.16.2 [L]|2021-10-01|General|Delimiter for rows can now be set in CsvReader |
|2.16.1 [L]|2021-09-30|General|Add constructor to initialize NamedList from IEnumerable|
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
