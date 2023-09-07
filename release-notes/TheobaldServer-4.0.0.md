---
layout: releaseNotes
---

## Theobald Server 4.0.0

- the new runtime enters general availability
- refactoring and simplification of the new runtime
- server code unification for running extractions against the new runtime
- a new extraction cache for the new runtime was implemented
- removed old HTTP server
- the HTTP server now supports compression (gzip)
- fixed some HTTP server bugs
  - CORS headers did not always have the correct value
- extractors clean up step is now correctly called after all data was processed and in any case of errors