---
layout: releaseNotes
---

# Xtract Universal Designer 5.4.17
* Fixed the logic loading existing destination settings in the destination settings dialog
  * Fix for some settings getting not loaded at all
  * Fix for a race condition when initially opening the dialog, causing an inconsistent representation
* Fixed an occasional crash in the run window, when an extraction with a SQL destination takes longer than 30 seconds
  * The run window now waits for the extraction to finish before loading the data from the server for the output view