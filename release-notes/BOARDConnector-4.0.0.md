---
layout: releaseNotes
---

# BOARD Connector 4.0

## General 
- New table component. **Table Join component is now obsolete**. Please use the new Table component for joins.
- New ODP component
- Introduced new column name style `PrefixedCode`. Column names will be in the format `SAPObject~ColumnName` (or adjusted to valid destination name).
- Improvements for UI and UX
- Minor bug fixes

## Compatibility
The setup will automatically (unless started in silent mode or manually changed during installation) start the conversion of legacy configuration files. You can also manually run the `ConfigConverter.exe` after installation.

## Bug fixes
- Fixed a bug that prevented the Designer from clearing the result cache and aborting extractions when Active Directory Access Control was activated on the web server