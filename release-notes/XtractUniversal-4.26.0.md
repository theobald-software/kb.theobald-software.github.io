---
layout: releaseNotes
---

# Supported custom script variables for folder names

* `Source.Name`
* `Extraction.ExtractionName`
* `Extraction.Type`
* `Extraction.SapObjectName`
* `Extraction.Context` (only contains values for ODP extractions)
* `Extraction.Timestamp`

# Additional changes

* File splitting uses the JEDEC definition of MB now, i. e. it counts powers of two instead of ten (all destinations)
* Folder name for Azure Storage is written to extraciton log