---
layout: releaseNotes
---

## Xtract Universal 6.0.0

### Breaking changes

- Web API
  - /log?req_type=all has been removed
    - To fetch the full logs for an extraction the prefered workflow is:
      - Get the timestamp for the extraction from the xu.exe output or the header of the HTTP response.
      - Request the run log for the extraction with log?req_type=extraction&name=extractionname&timestamp=extractionTimestamp
      - If that does not hold the desired information:
        - There now is a 'WebLog' column when listing the extractions runs with log?req_type=extraction&name=extractionname
        - Use this timestamp to request the corresponding server log for the extraction with log?req_type=server&timestamp=serverTimestamp
  - /log?req_type=server now yields the worker instead of listener log
  - /metadata?name=extractionName has been removed
    - Use [json endpoint](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http-json) instead
  - /parameters?name=extractionName has been removed
    - Use [json endpoint](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/metadata-access-via-http-json) instead
  - /clearResultCache has been removed
  - /CurrentVersion does now serve a json payload
    - it also does only serve one version, since the kernel dependency was dropped

We aim to provide a more consistent and useful Web API as part of upcoming releases.

### Deprecations

- The 'clearBuffer' parameter for extraction requests was renamed to 'ignoreCache' and does just that instead of purging the whole cache
  - 'clearBuffer' will be removed in a future release

### Other

- Web server, result cache and the engine which runs the extractions (runtime) were rewritten.
- When running extractions the web server now responds with an HTTP error code and an error message instead of a 200 without any data or information if the SAP system yielded an error or preparing the destination failed
  - an error while writing the data to the destination will still only show up in the logs
- Web server authentication: HTTPS + Designer Read access is now the same as HTTPS + Anonymous if Designer access is not restricted
  - Before one had to supply (any) Basic credentials but they were not checked.