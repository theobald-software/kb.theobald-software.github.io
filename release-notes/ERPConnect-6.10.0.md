---
layout: releaseNotes
---

This change was made to fix a bug where deserializing an RFCFunction via LoadFromXML would deserialize all the export parameters as `IsSupplied = true` causing an empty string to be sent to SAP. This in turn would cause SAP to not use the default values for those parameters.