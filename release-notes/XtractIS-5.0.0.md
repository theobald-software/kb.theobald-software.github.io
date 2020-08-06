---
layout: releaseNotes
---

# Xtract IS 5.0

This release contains general changes, changes to the existing Table component as well as a new ODP component.

### General

- .NET Framework version has been updated to 4.7.1
- support for SQL Server 2008 has been discontinued

### ODP

- using SAP's ODP 2.0 API
- several contexts
- full and delta extractions
- merging hierarchy segments 

### Table

- new UI
- now supports table joins (requires TableJoin license)
- new date conversion with more replacement settings

#### Compatibility:

- Existing Table extractions will automatically refresh metadata on execution for legacy compatibility. To avoid this, you can manually refresh the metadata in the component UI and save the changes.
- NVarChar and VarChar conversion has been removed, existing extractions will respect this setting, but it will always be NVarChar for new extractions

### Connection Handling

- Adjustments and improvements for internal SAP connection handling. This fixes several connection related issues.

### Miscellaneous

##### OHS
- Introduced flag for OHS to asynchronously start process chains. The flag can be set by using the `AsyncProcessStart` property of the OHS component.