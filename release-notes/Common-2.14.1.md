---
layout: releaseNotes
---

##2.14.1 - Fix for writing TimeSpan on JsonWriter class

* Fixed bug for writing TimeSpan on JsonWriter class, which caused an addition of an extra hour to its total time when the minutes property had its value greater or equal to 30
* Centralization of TimeSpan serialization to string in StringHelper.ToIso8601Duration(TimeSpan)
* Addition of unit tests for JsonWriter.Write(string, Timespan) and StringHelper.ToIso8601Duration(TimeSpan)