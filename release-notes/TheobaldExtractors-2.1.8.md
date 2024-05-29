---
layout: releaseNotes
---

- The extractor now makes use of the **ORDER BY** feature introduced in /THEO/READ_TABLE version **3.5**
- Increased extraction performance over extractor side sorting which could take a long time
- Existing extraction definitions using Z_THEO_READ_TABLE **do not need to be adjusted**. The extractor will automatically choose /THEO/READ_TABLE for extracting data
- Improved logging for result optimization