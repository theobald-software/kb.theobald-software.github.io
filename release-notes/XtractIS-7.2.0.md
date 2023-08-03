---
layout: releaseNotes
---

* The algorithm for Hierarchy extractions has been completely rewritten. It's now much faster, displays results as shown in SAP GUI and the extraction results can be used more flexibly. Depending on your use case, upgrading to the new extractor could cause some issues.
* Hierarchies with up to 1 million rows can now be extracted within minutes
* New Hierarchy extraction editor window with option to retrieve a live preview
* Order of entries is now identical to order shown in SAP GUI. This includes the Node Ids (for Parent-Child representation) that are now also identical to those shown in SAP GUI.
* Additional Representation: Parent-Child with Node Names. This Representation is somewhere in the middle between Parent-Child and Natural Representation. It contains the Id of each Node and the Id of that Node's parent. It also contains the Name of the parent Node and the InfoObject name of the parent Node.
* Added two additional columns: Link and Row (see below).
  * The Row column indicates the row number of that row. You can use this as a primary key in database and/or ordering criterium. This allows you to restore the order as shown in SAP just by sorting by the row column.
  * The Link column is relevant for Hierarchies with link nodes. It shows the Node Id (Parent-Child, Parent-Child with Node Names representation) or Row Number (Natural representation) of the "original" Node that this Node is linking to. Otherwise this column will be zero.
* Natural Representation now correctly extracts zero SAP dates ("00000000") as such instead of an invalid date. If you are using Date Conversion, this could yield different results than before.
* Added support for new SAP systems for Node Names and Node Texts up to 1333 characters in length. These new columns widths also apply to the Level and LevelText columns in Natural Representation.
* Breaking change: the previous "Legacy Mode" feature has been removed. Existing extractions may yield different results then before. A warning is written into the log if that feature was enabled in an extraction.
* Breaking change: The "Automatic String Conversion" features has been removed. All strings are now always extracted as NVarChars. A warning is written into the log if that feature was set to VarChar.
* Any existing extractions will continue to work in backwards compatibility mode as much as possible as long as they are not edited and saved. After saving an extraction, the extraction is saved in a new internal format that can not be used by the old version. This will also enable the Link and Row columns and switch to new column widths.