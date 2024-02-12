---
layout: page
title: Log Access via Web Service
description: Log Access via Web Service
permalink: /:collection/:path
weight: 105
---

The Xtract Universal server allows accessing meta data and logging information through web calls. 

{: .box-note }
**Note:** This article uses the syntax of the Xtract Universal Webserver before version 6.0.0. and before version 6.3.0.
When using the latest Xtract Universal version, refer to [Online Help: Log Access via Web Service](https://help.theobald-software.com/en/xtract-universal/logging/logging-access-via-http).

## Basic URL

The basic URL for web calls uses the following format: `[protocol]://[host or IP address]:[port]/`.<br>
Make sure to use the correct protocol:

| Protocol | Syntax       | Example                                                                  |
|-------|------------------|--------------------------------------------------------------------|
| HTTP   | `http://[host].[domain]:[port]`         | `http://todd.theobald.local:8065`  |
| HTTP | `http://[host]:[port]` | `http://localhost:8065` |
| HTTPS  | `https://[host].[domain]:[port]` | `https://todd.theobald.local:8165`<br> Requires a dedicated host name and X.509 certificate, see [web server settings](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server). |

{: .box-note }
**Note:** Make sure to use the correct ports, see [Server Ports](https://help.theobald-software.com/en/xtract-universal/server/ports). 


## Before Version 6.0.0

### Query all Logs

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=all` | Returns all extraction and server logs. |

{: .box-note }
**Note:** Server logs files are deleted after a defined period of days, see [Server Setting - Web Server](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server).

#### Response

The web call returns the following information:

- **LineCount**: row number of the log entry.
- **Name**:  name of the extraction / name of the server.
- **Timestamp**: timestamp of the extraction or server log.
- **State**: returns a number between 2 and 4 for a server extraction or the number 5 for a server log, see table below.
- **StateDescr**: description of the state, see table below.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

| State | StateDescr       | Description                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                                 |
| 3     | FinishedNoErrors | Extraction succeeded without errors.                                     |
| 4     | FinishedErrors   | Extraction is finished with at least one error. |
| 5     | NotAvailable     | The status for a server log.                                              |


For information on how to read extractions logs, see [Extraction Logs](https://help.theobald-software.com/en/xtract-universal/logging#reading-logs---extraction-log).


#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/log/?req_type=all</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,MAKT,2023-02-20_09:49:23.941,3,FinishedNoErrors,Info,LiveDataExtraction,Product version 5.21.10.14
2,MAKT,2023-02-20_09:49:23.942,3,FinishedNoErrors,Info,LiveDataExtraction,Using Theobald.Extractors Interface
3,MAKT,2023-02-20_09:49:23.999,3,FinishedNoErrors,Info,LiveDataExtraction,Theobald.Extractors version 1.39.3.13
4,MAKT,2023-02-20_09:49:23.999,3,FinishedNoErrors,Info,LiveDataExtraction,Executing Table extraction
...
1,[server],2023-02-20_09:49:10.208,5,NotAvailable,Warning,VersionStore,Configuration was created by a development build. This can lead to unexpected behaviour.
2,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Trying to listen on [::]:8065...
3,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Listening on [::]:8065
4,[server],2023-02-20_09:49:23.353,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51531 connected
...
</pre></div></td></tr></tbody>
</table>


### Query Logs at Specific Timestamps

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=all&timestamp=[yyyy-MM-dd]`  |   Returns all logs of the specified date. |
| `http(s)://[host]:[port]/log/?req_type=all&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Returns all logs of the specified timestamp. |
| `http(s)://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd]`  |   Returns all logs after the specified date. |
| `http(s)://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Returns all logs after the specified timestamp. |
| `http(s)://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd]`  |   Returns all logs before the specified date. |
| `http(s)://[host]:[port]/log/?req_type=all&max=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Returns all logs before the specified timestamp. |
| `http(s)://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd]&max=[yyyy-MM-dd]`| Returns all logs between two dates.|
| `http(s)://[host]:[port]/log/?req_type=all&min=[yyyy-MM-dd_HH:mm:ss.SSS]&max=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Returns all logs between two timestamps. |
| `http(s)://[host]:[port]/log/?req_type=all&past_days=[number_of_days]`  |   Returns all logs since n days. |

<!---
{: .box-note }
**Note:** When the parameter `?req_type` is set to `server` instead of `all`, the web call returns timestamps of server logs, see [Query all Server Logs](#query-all-server-logs).
-->

#### Response

The web call returns the following information:

- **LineCount**: row number of the log entry.
- **Name**:  name of the extraction / name of the server.
- **Timestamp**: timestamp of the extraction or server log.
- **State**: returns a number between 2 and 4 for a server extraction or the number 5 for a server log, see table below.
- **StateDescr**: description of the state, see table below.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

| State | StateDescr       | Description                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                                 |
| 3     | FinishedNoErrors | Extraction succeeded without errors.                                     |
| 4     | FinishedErrors   | Extraction is finished with at least one error. |
| 5     | NotAvailable     | The status for a server log.                                              |

For information on how to read extractions logs, see [Reading Extraction Logs](https://help.theobald-software.com/en/xtract-universal/logging#reading-logs---extraction-log).

#### Example

<table>
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/log/?req_type=all&past_days=2</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,MAKT,2023-02-20_09:49:23.941,3,FinishedNoErrors,Info,LiveDataExtraction,Product version 5.21.10.14
2,MAKT,2023-02-20_09:49:23.942,3,FinishedNoErrors,Info,LiveDataExtraction,Using Theobald.Extractors Interface
3,MAKT,2023-02-20_09:49:23.999,3,FinishedNoErrors,Info,LiveDataExtraction,Theobald.Extractors version 1.39.3.13
4,MAKT,2023-02-20_09:49:23.999,3,FinishedNoErrors,Info,LiveDataExtraction,Executing Table extraction
...
1,[server],2023-02-20_09:49:10.208,5,NotAvailable,Warning,VersionStore,Configuration was created by a development build. This can lead to unexpected behaviour.
2,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Trying to listen on [::]:8065...
3,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Listening on [::]:8065
4,[server],2023-02-20_09:49:23.353,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51531 connected
...
</pre></div></td></tr>
<tr><td><code>https://todd.theobald.local:8165/log/?req_type=all&min=2023-02-20_09:49:24.500&max=2023-02-20_09:50:00.000</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
22,MAKT,2023-02-20_09:49:24.500,3,FinishedNoErrors,Debug,TheoReadTableExtractor,Data will be extracted in dialog work process
23,MAKT,2023-02-20_09:49:24.501,3,FinishedNoErrors,Debug,TheoReadTableExtractor,"Fetching packages (50,000 rows per package)"
24,MAKT,2023-02-20_09:49:24.653,3,FinishedNoErrors,Debug,TheoReadTableExtractor,Z_THEO_READ_TABLE version 1.x
25,MAKT,2023-02-20_09:49:24.653,3,FinishedNoErrors,Debug,TheoReadTableExtractor,Received package #1 (1 rows)
26,MAKT,2023-02-20_09:49:24.657,3,FinishedNoErrors,Info,LiveDataExtraction,Starting to write 1 rows to destination...
27,MAKT,2023-02-20_09:49:24.668,3,FinishedNoErrors,Info,LiveDataExtraction,Finished writing rows to destination
28,MAKT,2023-02-20_09:49:24.712,3,FinishedNoErrors,Info,TheoReadTableExtractor,Extraction finished - received 1 rows in total
29,MAKT,2023-02-20_09:49:24.714,3,FinishedNoErrors,Debug,LiveDataExtraction,Writing results to destination completed
6,[server],2023-02-20_09:49:24.802,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16240) exited with 0x0 - The operation completed successfully
7,[server],2023-02-20_09:49:36.257,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51533 connected
8,[server],2023-02-20_09:49:36.262,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16368) started
</pre></div></td></tr>
</table>

### Query all Server Logs

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=server` | Returns a list of timestamps that correspond to server logs. |

#### Response

The web call returns timestamps in the format `[yyyy-MM-dd_HH:mm:ss.SSS]`.<br>
Use the timestamps to query the content of the logs, see [Query Server Logs at a Specific Timestamp](#query-server-logs-at-specific-timestamps).

{: .box-note }
**Note:** Server log files are deleted after a defined period of days, see [Server Setting - Web Server](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server).

#### Example

<table>
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/log/?req_type=server</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Timestamp
2023-02-20_09:49:10.055
2023-02-15_13:49:38.401
</pre></div></td></tr>
</table>


### Query Server Logs at Specific Timestamps

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the server logs of the specified timestamp. |

{: .box-tip }
**Tip:** Query timestamps that correspond to server logs, see [Query all Server Logs](#query-all-server-logs).<br>
To query server logs before, after or between timestamps, see [Query Logs at Specific Timestamps](#query-logs-at-specific-timestamps).

{: .box-note }
**Note:** Server log files are deleted after a defined period of days, see [Server Setting - Web Server](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server).

#### Response

The web call returns the following information:

- **LineCount**: row number of the log entry.
- **Name**:  name of the server.
- **Timestamp**: timestamp of the server log.
- **State**: returns the number 5 to indicate that the log is a server log.
- **StateDescr**: description of the state.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/?req_type=server&timestamp=2023-02-20_09:49:10.228</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message 
1,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Trying to listen on [::]:8065... 
2,[server],2023-02-20_09:49:10.258,5,NotAvailable,Info,AsyncTcpServer,Listening on [::]:8065 
3,[server],2023-02-20_09:49:23.353,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51531 connected 
4,[server],2023-02-20_09:49:23.372,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16240) started 
5,[server],2023-02-20_09:49:24.802,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16240) exited with 0x0 - The operation completed successfully 
6,[server],2023-02-20_09:49:36.257,5,NotAvailable,Info,AsyncTcpServer,Client [::1]:51533 connected 
7,[server],2023-02-20_09:49:36.262,5,NotAvailable,Debug,ProcessAsync,Theobald.Xu.Web.Worker.exe (16368) started
</pre></div></td></tr></tbody>
</table>

### Query a List of all Defined Extractions

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/extractions` | Returns a list of all defined extractions. |
| `http(s)://[host]:[port]/config/extractions/` | Returns a list of all defined extractions with more details and in JSON format. |

#### Response

The web calls return the following information:

- **Name**: name of the extraction.
- **Type**: extraction type, e.g., Table, Report, ODP, etc.
- **Source**: name of the SAP source connection.
- **Destination**: name of the destination.
- **LastRun**: timestamp of the last execution. 
- **RowCount**: number of the last extracted data records. 
- **LastChange**: timestamp of the last change. 
- **Created**: timestamp of the creation.

#### Example

<table width="900px">
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/extractions</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Name,Type,Source,Destination,LastRun,RowCount,LastChange,Created
MAKT,Table,ec5,csv,2022-12-15_13:30:08.921,177318,2023-02-15_13:49:38.401,2022-12-12_08:39:27.407
2LIS,ODP,ec5,AzureStorageAD,2022-08-18_10:55:00.189,59058,2023-01-20_11:26:05.641,2022-08-18_10:46:50.721
COUNTRY,Hierarchy,bw2,http-csv,2022-12-01_12:53:57.098,8,2022-12-01_12:53:53.599,2022-10-05_10:41:43.848
RLT10010,Report,ec5,csv,2023-01-12_11:11:48.975,21,2022-12-13_11:07:36.437,2022-06-30_08:24:47.755
</pre></div></td></tr>
<tr><td><code>https://todd.theobald.local:8165/config/extractions/</code></td>
<td><div style="width:600px;overflow:auto"><pre>
{
    "extractions": 
    [
        {
            "name": "MAKT",
            "type": "Table",
            "source": "ec5",
            "destination": "csv",
            "latestRun": {
                "started": "20221215T133008.921Z",
                "duration": "PT00H00M02.850S",
                "rowsCount": 177318,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20230215T134938.401Z"
            },
            "created": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20221212T083927.407Z"
            }
        }
    ]
}			
</pre></div></td></tr>
</table>

### Query a Specific Extraction at a Specific Timestamp

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log/?req_type=extraction&name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`  |   Returns detailed logs of the specified extraction at the specified timestamp. |

{: .box-tip }
**Tip:** Query the timestamp of the last run of an extraction as described in [Query a List of all Defined Extractions](#query-a-list-of-all-defined-extractions) or query timestamps using the logs as described in [Query all Logs](#query-all-logs).<br>

#### Response

The web call returns the following information:
- **LineCount**: row number of the log entry.
- **Name**:  name of the extraction.
- **Timestamp**: timestamp of the extraction.
- **State**: returns a number between 2 and 4 for a server extraction, see table below.
- **StateDescr**: description of the state, see table below.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

| State | StateDescr       | Description                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                                 |
| 3     | FinishedNoErrors | Extraction succeeded without errors.                                     |
| 4     | FinishedErrors   | Extraction is finished with at least one error. |


For information on how to read extractions logs, see [Extraction Logs](https://help.theobald-software.com/en/xtract-universal/logging#reading-logs---extraction-log).

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/log/?req_type=extraction&name=makt&timestamp=2023-02-20_09:49:23.807</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,makt,2023-02-21_11:04:33.765,3,FinishedNoErrors,Info,LiveDataExtraction,Product version 5.21.10.14
2,makt,2023-02-21_11:04:33.766,3,FinishedNoErrors,Info,LiveDataExtraction,Using Theobald.Extractors Interface
3,makt,2023-02-21_11:04:33.817,3,FinishedNoErrors,Info,LiveDataExtraction,Theobald.Extractors version 1.39.3.13
4,makt,2023-02-21_11:04:33.817,3,FinishedNoErrors,Info,LiveDataExtraction,Executing Table extraction
5,makt,2023-02-21_11:04:33.882,3,FinishedNoErrors,Info,LiveDataExtraction,Found license.
6,makt,2023-02-21_11:04:33.930,3,FinishedNoErrors,Debug,R3ConnectorServerWindows,'Use SAPGUI' expert option is disabled
7,makt,2023-02-21_11:04:33.931,3,FinishedNoErrors,Debug,R3ConnectorServerWindows,"Connecting to SAP application server, using Classic RFC SDK"
8,makt,2023-02-21_11:04:33.931,3,FinishedNoErrors,Debug,R3ConnectorServerWindows,"Client '800',  language 'EN'"
9,makt,2023-02-21_11:04:33.931,3,FinishedNoErrors,Debug,R3ConnectorServerWindows,"User ALICE, Password has been provided"
10,makt,2023-02-21_11:04:33.931,3,FinishedNoErrors,Debug,R3ConnectorServerWindows,Using plain authentication
11,makt,2023-02-21_11:04:34.291,3,FinishedNoErrors,Info,R3ConnectorServerWindows,"Connected to SAP host 'sap-erp-as05.example.com', instance 00, release 740, codepage 4103, user 'ALICE'"
...
</pre></div></td></tr></tbody>
</table>

### Query the Extraction Status

| URL       | Description  | 
|-----------|--------------|
| ```http(s)://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the status of the specified extraction at the specified timestamp. |

Follow the steps below to create a status check routine:

1. Run your extraction in asynchronous mode using the following URL schema:<br>
`http(s)://[host]:[port]/?name=[extraction_name]&wait=false`<br>
The asynchronous extraction immediately returns an HTTP-response, while the extraction is still running. 
For more information on how to trigger extractions, see [Execute and Automate - Call via Webservice](https://help.theobald-software.com/en/xtract-universal/execute-and-automate-extractions/call-via-webservice).
2. Copy the timestamp that is returned in the HTTP-response header and body of the asynchronous extraction. <br>Example: *X-XU-Timestamp: 2023-01-28_09:58:47.312*.
3. Use the extraction name and the timestamp to query the status of the extraction using the following URL schema:<br>
`http(s)://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`<br>
4. The status of an extraction changes in time. 
Query the status of the extraction in a loop to trigger follow-up actions once the extraction is finished.

{: .box-note }
**Note:** Triggering an extraction in asynchronous mode and querying the extraction status is only possible with push-destinations, e.g.s databases or file destinations. 

#### Response

The web call returns one of the following statuses:

| State      | Description                                                                    |
|------------------|------------------------------------------------------------------------------|
| Running          | The extraction is running.                                                 |
| FinishedNoErrors | Extraction succeeded without errors.                                     |
| FinishedErrors   | Extraction is finished with at least one error. |

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/status/?name=makt&timestamp=2023-02-21_11:06:16.314</code></td>
<td><div style="width:600px;overflow:auto"><pre>
FinishedNoErrors
</pre></div></td></tr></tbody>
<tbody><tr><td><code>https://todd.theobald.local:8165/status/?name=mara&timestamp=2023-02-21_13:11:27.327</code></td>
<td><div style="width:600px;overflow:auto"><pre>
FinishedErrors
</pre></div></td></tr></tbody>
</table>

## Before Version 6.3.0

### Query All Server Logs

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=server` | Returns a list of timestamps that correspond to server logs. |

#### Response

The web call returns timestamps in the format `[yyyy-MM-dd_HH:mm:ss.SSS]`.<br>
Use the timestamps to query the content of the server logs, see [Query Server Logs at Specific Timestamps](#query-server-logs-at-specific-timestamps).

{: .box-note }
**Note:** Server log files are deleted after a defined period of days, see [Server Setting - Web Server](../server/server-settings#web-server).

#### Example

<table>
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/log?req_type=server</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Timestamp
2023-09-08_09:49:10.055
2023-09-08_13:49:38.401
</pre></div></td></tr>
</table>


### Query Server Logs at Specific Timestamps


| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=server&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns the server logs of the specified timestamp. |


{: .box-tip }
**Tip:** Query timestamps of all server logs, see [Query All Server Logs](#query-all-server-logs) or query timestamps that correspond to an extraction run, see [Query Extraction Runs of a Specific Extraction](#query-extraction-runs-of-a-specific-extraction).

{: .box-note }
**Note:** Server log files are deleted after a defined period of days, see [Server Setting - Web Server](../server/server-settings#web-server).

#### Response

The web call returns the following information:

- **LineCount**: row number of the log entry.
- **Name**:  name of the server.
- **Timestamp**: timestamp of the server log.
- **State**: returns the number 5 to indicate that the log is a server log.
- **StateDescr**: description of the state.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/log?req_type=server&timestamp=2023-09-08_10:21:46.390</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,[server],2023-09-06_08:38:12.519,5,NotAvailable,Info,XtractWebServer,Client [fe80::d3ac:77ba:ce0f:83b1%8]:54421
2,[server],2023-09-06_08:38:12.823,5,NotAvailable,Info,XtractWebServer,Request URI: http://sherri.theobald.local:8065/?name=MARA&quiet-push=true
3,[server],2023-09-06_08:38:17.458,5,NotAvailable,Info,RunParameter,Parameter 'quiet-push' overriden (new value: 'true')
4,[server],2023-09-06_08:38:17.553,5,NotAvailable,Info,XtractWebServer,Running Table extraction 'MARA'...
</pre></div></td></tr></tbody>
</table>

### Query a List of all Defined Extractions

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/config/extractions/` | Returns a list of all defined extractions with more details and in JSON format. |

#### Response

The web calls return the following information:

- **Name**: name of the extraction.
- **Type**: extraction type, e.g., Table, Report, ODP, etc.
- **Source**: name of the SAP source connection.
- **Destination**: name of the destination.
- **LastRun**: timestamp of the last execution. 
- **RowCount**: number of the last extracted data records. 
- **LastChange**: timestamp of the last change. 
- **Created**: timestamp of the creation.

#### Example

<table width="900px">
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/config/extractions/</code></td>
<td><div style="width:600px;overflow:auto"><pre>
{
    "extractions": 
    [
        {
            "name": "MAKT",
            "type": "Table",
            "source": "ec5",
            "destination": "csv",
            "latestRun": {
                "started": "20221215T133008.921Z",
                "duration": "PT00H00M02.850S",
                "rowsCount": 177318,
                "state": "FinishedNoErrors"
            },
            "lastChange": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20230215T134938.401Z"
            },
            "created": {
                "machine": "SHERRI",
                "user": "alice",
                "timestamp": "20221212T083927.407Z"
            }
        }
    ]
}			
</pre></div></td></tr>
</table>


### Query Extraction Runs of a Specific Extraction


| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=extraction&name=[extractionname]` | Returns information and timestamps of extractions runs of the specified extraction.|

#### Response

The web call returns timestamps in the format `[yyyy-MM-dd_HH:mm:ss.SSS]`.<br>
Use the timestamps to query the content of the extraction logs, see [Query Extraction Logs at Specific Timestamps](#query-extraction-logs-at-specific-timestamps).

The web call returns the following information:

- **Timestamp**: timestamp of the extraction.
- **State**: returns a number between 2 and 4 for a server extraction or the number 5 for a server log, see table below.
- **StateDescr**: description of the state, see table below.
- **RequestID**: ID that is specific to ODP extractions.
- **RowCount** number of the last extracted data records. 
- **WebLog**: timestamp of the corresponding server log.

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/log?req_type=extraction&name=KNA1</code></td>
<td><div style="width:600px;overflow:auto"><pre>
Timestamp,State,StateDescr,RequestID,RowCount,WebLog
2023-09-08_10:43:38.288,3,FinishedNoErrors,,9895,2023-09-08_10:43:37.832
2023-09-08_10:53:27.074,3,FinishedNoErrors,,9895,2023-09-08_10:53:26.616
</pre></div></td></tr></tbody>
</table>


### Query a Specific Extraction at a Specific Timestamp

| URL       | Description  | 
|-----------|--------------|
| `http(s)://[host]:[port]/log?req_type=extraction&name=[extractionname]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]` | Returns extraction logs of the specified extraction at the specified timestamp. |

{: .box-tip }
**Tip:** Query the timestamp of extraction runs of a specific extraction, see [Query Extraction Runs of a Specific Extraction](#query-extraction-runs-of-a-specific-extraction).<br>
Query the timestamp of the last extraction run, see [Query a List of all Defined Extractions](#query-a-list-of-all-defined-extractions).

#### Response

The web call returns the following information:

- **LineCount**: row number of the log entry.
- **Name**:  name of the extraction / name of the server.
- **Timestamp**: timestamp of the extraction or server log.
- **State**: returns a number between 2 and 4 for a server extraction, see table below.
- **StateDescr**: description of the state, see table below.
- **LogLevel**: type of the log ("Error", "Info" "Warning" or "Debug").
- **Source** technical name of the component that generates the log info. 
- **Message**: content of the log.

| State | StateDescr       | Description                                                                    |
|-------|------------------|------------------------------------------------------------------------------|
| 2     | Running          | The extraction is running.                                                 |
| 3     | FinishedNoErrors | Extraction succeeded without errors.                                     |
| 4     | FinishedErrors   | Extraction is finished with at least one error. |

For information on how to read extractions logs, see [Reading Extraction Logs](../logging#reading-logs---extraction-log).

#### Example

<table>
<tr><th>Example URL</th><th>Example Response</th></tr>
<tr><td><code>https://todd.theobald.local:8165/log?req_type=extraction&name=KNA1&timestamp=2023-09-08_10:43:13.234</code></td>
<td><div style="width:600px;overflow:auto"><pre>
LineCount,Name,Timestamp,State,StateDescr,LogLevel,Source,Message
1,KNA1,2023-09-08_10:43:13.241,3,FinishedNoErrors,Debug,Table,Attempting to load Theobald.Extractors.Table.TableExtractionDefinition information for extraction KNA1
2,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,Table,Starting extraction without cache.
3,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,TheoReadTableExtractor,Starting extraction - using function module Z_THEO_READ_TABLE
4,KNA1,2023-09-08_10:43:13.465,3,FinishedNoErrors,Info,TheoReadTableExtractor,Extracting table KNA1
...
</pre></div></td></tr>
</table>


### Query the Extraction Status

| URL       | Description  | 
|-----------|--------------|
| ```http(s)://[host]:[port]/status/?name=[extractionname]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]``` | Returns the status of the specified extraction at the specified timestamp. |

Follow the steps below to create a status check routine:

1. Run your extraction in asynchronous mode using the following URL schema:<br>
`http(s)://[host]:[port]/?name=[extraction_name]&wait=false`<br>
The asynchronous extraction immediately returns an HTTP-response, while the extraction is still running. 
For more information on how to trigger extractions, see [Execute and Automate - Call via Webservice](../execute-and-automate-extractions/call-via-webservice).
2. Copy the timestamp that is returned in the HTTP-response header of the asynchronous extraction. <br>Example: *X-XU-Timestamp: 2023-01-28_09:58:47.312*.
3. Use the extraction name and the timestamp to query the status of the extraction using the following URL schema:<br>
`http(s)://[host]:[port]/status/?name=[extraction_name]&timestamp=[yyyy-MM-dd_HH:mm:ss.SSS]`<br>
4. The status of an extraction changes in time. 
Query the status of the extraction in a loop to trigger follow-up actions once the extraction is finished.

{: .box-note }
**Note:** Triggering an extraction in asynchronous mode and querying the extraction status is only possible with push-destinations, e.g.s databases or file destinations. 

#### Response

The web call returns the following information:

- **Duration**: duration of the extraction run.
- **rowCount**:  number of extracted rows.
- **State**: returns the status of the extraction run.
- **WebLog Timestamp**: timestamp of the corresponding server log.

| State      | Description                                                                    |
|------------------|------------------------------------------------------------------------------|
| Running          | The extraction is running.                                                 |
| FinishedNoErrors | Extraction succeeded without errors.                                     |
| FinishedErrors   | Extraction is finished with at least one error. |

#### Example

<table>
<thead><tr><th>Example URL</th><th>Example Response</th></tr></thead>
<tbody><tr><td><code>https://todd.theobald.local:8165/status/?name=KNA1&timestamp=2023-11-22_10:15:32.390</code></td>
<td><div style="width:600px;overflow:auto"><pre>
FinishedNoErrors
</pre></div></td></tr></tbody>
</table>
