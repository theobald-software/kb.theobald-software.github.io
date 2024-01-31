---
layout: releaseNotes
---

## TheobaldServer 4.0.26

- The runtime will now retry to write the extractions status information if it fails. Retries will end after 15 seconds
- Fixed the logic of whether to use the cache or not for delta extractions (ODP and DeltaQ)
- Fixed a but where finalization of a failed extraction would not complete correctly due to follow up errors