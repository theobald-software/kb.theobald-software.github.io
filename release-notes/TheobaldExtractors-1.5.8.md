---
layout: releaseNotes
---

The changes contained in this release only affect the GUI and do not change behavior of extractions.

### Join detection
Upon adding a new table to the extraction the GUI will attempt to automatically create joins based on the references in the SAP system. Detection will take the following steps to map fields with matching names:

1. Primary keys that directly reference another table
2. Primary keys that both reference the same table which does not exist in the extraction
3. All fields that directly reference another table
4. All fields that both reference the same table which does not exist in the extraction

### Bug fixes
- fixed a bug where editing of joins was not possible after saving an extraction