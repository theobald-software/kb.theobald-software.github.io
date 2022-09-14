---
layout: releaseNotes
---

*Changes in Z_THEO_READ_TABLE*:
- Shared memory area now expires after 1 minute without read access, instead of 1 minute without write access. This prevents extractions that take longer that 1 minute to fetch or process one package from failing.