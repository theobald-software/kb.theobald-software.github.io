---
layout: releaseNotes
---

As recommended by Microsoft, the XU Data Extension plugin to Power Bi Report Server used a static instance of HttpClient to make requests to the XU web server when generating reports. When multiple users were generating reports at the same time, HttpClient reused existing connections as long as they made requests to the same destination (the XU web server).

The result was that the connection was authenticated using the credentials of the first user to generate a report. If another report was generated (by a different user) while that connection was still open, the credentials of the new user were ignored and the data was fetched in the name of the first user. Additionally, HttpClient was at liberty to keep connections open for an undefined amount of time. The XU webserver was not expecting this behaviour and was not enforcing a new authentication. Both issues have now been fixed.

A new instance of HttpClient is now created for every connection object that the report server creates using the plugin. This guarantees a new connection being opened for each report generation.