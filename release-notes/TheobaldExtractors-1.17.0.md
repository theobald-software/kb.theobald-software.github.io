---
layout: releaseNotes
---

# Improvements for BAPI extractor

The internal representation has changed, **old extractions will no longer work and need to be recreated.** The new BAPI component packs several new features:

- EXPORTS
- CHANGINGS
- nested structures and tables
- transaction commit by calling `BAPI_TRANSACTION_COMMIT`
- values for tables can now be entered or parameterized per row
- Now specifies whether a parameter is supplied or requested from the SAP system. This allows for optimizations when using NWRFC and for the function modules default values to be used.