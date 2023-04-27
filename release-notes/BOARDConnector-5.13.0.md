---
layout: releaseNotes
---

* The algorithm for Hierarchy extractions has been completely rewritten. It's now much faster, displays results as shown in SAP GUI and the extraction results can be used more flexibly. Depending on your use case, upgrading to the new extractor could cause some issues.
* Hierarchies with up to 1 million rows can now be extracted within minutes
* New Hierarchy extraction editor window with option to retrieve a live preview
* Order of entries is now identical to order shown in SAP GUI. This includes the Node Ids (for Parent-Child representation) that are now also identical to those shown in SAP GUI.
* Additional representation: Parent-Child with Node Names. This representation is somewhere in the middle between Parent-Child and Natural representation. It contains the Id of each Node and the Id of that Node's parent. It also contains the Name of the parent Node and the InfoObject name of the parent Node.
* Newly created Hierarchy extractions now contain two additional columns: Link and Row (see below). These new columns are only enabled for newly created Hierarchy extractions. Existing extractions will not contain these columns (to avoid breaking existing extractions due to new columns).
* The row column indicates the row number of that row. You can use this as a primary key in databases and/or ordering criterium. This allows you to restore the order as shown in SAP just by sorting by the row column.
* The Link column is relevant for Hierarchies with link nodes. It shows the Node Id (Parent-Child, Parent-Child with Node Names representation) or Row Number (Natural representation) of the "original" Node that this Node is linking to. Otherwise this column will be zero.
* Natural Representation now correctly extracts zero SAP dates ("00000000") as such instead of an invalid date. If you are using Date Conversion, this could yield different results than before.
* The configuration files of existing extractions are backwards-compatible to previous versions, even when you edit them, as long as you choose Parent-Child or Natural representation.