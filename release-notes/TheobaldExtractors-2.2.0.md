---
layout: releaseNotes
---

## General
- In order for the changes to apply "Refresh metadata" is required or the creation of a new CDC extraction

## /THEO/CDC* (version 1.7)
- Triggers now insert timestamps (as chars) for every database in a unified format (yyyy-MM-dd HH24:mm:ss.FFF)
- Triggers now only insert data into the log table if the source table change was caused on the same client that was used when initializing CDC. This does not apply for client independent source tables