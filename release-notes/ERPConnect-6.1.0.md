---
layout: releaseNotes
---

# ERPConnect 6.1

This release adds support for multibyte codepages on non-Unicode SAP systems.
Furthermore, the ReadTable class has been re-engineered, which includes a few breaking changes:

### Removed ReadTable.AddCriteria()
This method had several unexpected consquences. Please use the WhereClause property instead.

### Removed ReadTable.Delimiter
This used to be a workaround for non-Unicode multibyte codepages. Full multibyte support has been implemented, therefore the delimiter is not needed anymore.

### Removed ReadTable.UsePrimaryKeyPackaging
Packaging is primarily performed on the ABAP side. Please use custom function modules if you have special requirements for packaging.

### ReadTable.Fields behaves differently
The Fields collection is used for both field selection and result metadata. Calling ReadTable.AddField() will add a field to this collection. In previous versions, the collection had only been used for result metadata.

In combination with RetrieveAllFieldsOfTable() that means, you can remove the fields that you don't want to extract from the Fields collection. If you want to use AddField(), please clear the collection after calling RetrieveAllFieldsOfTable() or use separate ReadTable instances.

### Removed UseMultibyteExtraction flag from LINQtoERP
This flag has no use anymore, since multibyte codepages are fully supported without setting any flags or using other workarounds.

### IncomingPackage & PackageProgress
PackageProgress is fired always - RaiseIncomingPackageEvent no longer disables PackageProgress event.

IncomingPackage is no longer fired  if package is empty.