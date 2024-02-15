---
layout: releaseNotes
---

## XtractUniversal 6.3.0
This release introduces a new log API returning payloads in JSON format. The API has the following structure:
- /logs/web
  - web server log names  
- /logs/web/$timestamp
  - log entries for web server log $timestamp
- /logs/extractions 
  - extraction run and status information 
- /logs/extractions/$name
  - run and status information for extraction $name 
- /logs/extractions/$name/$timestamp
  - run and status information for run $timestamp 
- /logs/extractions/$name/$timestamp/log
  - run information and log entries for run $timestamp 

**https://help.theobald-software.com/en/xtract-universal/web-api**

- Improvements
  - Improved structure of the URLs where resources are identified by paths instead of URL parameters 
  - Improved error messages when logs contain corrupted data  
  
- Bug fixes 
  - Fixed a bug where the `/CurrentVersion` API endpoint would return invalid CSV
  - Fixed a bug where subsequent requests for the favicon would fail