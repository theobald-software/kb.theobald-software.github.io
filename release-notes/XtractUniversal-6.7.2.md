---
layout: releaseNotes
---

## XtractUniversal 6.7.2

- HTTP server
    - *Security:* Fixed a bug where closing the connection during a certain point in time during error handling of a failed request would cause the log to grow heavily, filling up the disk.
    - HTTP error response codes are now logged in the web server log.
- Cache
    - Fixed clean up of cache entries for extractions in sub-directories.
    - Fixed a bug where one cache entry would always be left during cleanup, even if it was outdated already.
- Additions for the sub-directory support
    - The web API does now provide extraction names in the format `path,to,extraction`.
    - The names can be plugged into subsequent API calls without change.
    - This enables consumers of the API to work with extractions in sub-directories.
        - Qlik (You will have to update the script.)
        - Alteryx
        - Knime
        - PowerBI
        - SSRS
    - Script expressions now allow to use the full extraction name with `#{Extraction.ExtractionName}#`.
        - The format is also `path,to,extraction`.
            Depending on the destination this might be replaced with a different character.
- Abort extractions
    - Extractions running from cache can now be aborted correctly.
    - Aborting behavior for extractions during startup is more consistent.
    - The logging for aborted extractions has been cleaned up.