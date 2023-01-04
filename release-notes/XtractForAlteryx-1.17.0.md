---
layout: releaseNotes
---

* Reworked extraction algorithm for Hierarchies. Removed limitations and improved performance for hierarchies up to 1 million entries. Now full support for Intervals and all variations of Time Dependent Hierarchy structure.
* Order of Hierarchy rows now identical to order shown in SAP
* Ids of Hierarchy rows now identical to Ids shown in SAP
* New Representation: ParentChildWithNodeNames (beta)
* New extractions get two new columns: Link and Row. Link indicates the Id of the original Node if the current row represents a link node. Row represents a row number. This can be used as primary key in database destinations while preserving the order of rows. Existing extractions are not changed and will not show these columns
* Support for newer SAP systems (HANA) and extra long strings.