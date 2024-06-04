---
layout: releaseNotes
---

## Theobald Server 4.3.4

- HTTP server
    - *Security:* Fixed a bug where closing the connection at a certain point in time during error handling of a failed request would cause the log to grow heavily, filling up the disk.
    - HTTP error response codes are now logged in the web server log.
- Cache
    - Fixed clean up of cache entries for extractions in sub-directories.
    - Fixed a bug where one cache entry would always be left during cleanup, even if it was outdated already.
- Aborting extractions
    - Fixed a bug where extractions read from cache could not be aborted.
    - Fixed several inconsistencies which could occur when aborting an extraction.