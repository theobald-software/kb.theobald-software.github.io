---
layout: releaseNotes
---

## XtractUniversal 6.4.0 
This release introduces two new API endpoints which allow the execution of extractions. Therefore the extraction 
name is provided as part of the URL path. This leads to the following structure:

- /run/$extractionName/
  - This endpoint runs the extraction and waits for it to finish 
- /start/$extractionName/
  - This endpoint starts the extraction and doesn't wait for the extraction to finish 

- Run window uses the new endpoints 
- xu.exe uses the new endpoints 
  
- Improvements 
  - Improved structure of URLs with different endpoints for waiting or just starting an extraction 

- Bug fixes 
  - Fixed a bug where the user-agent was expected as URL parameter instead of http header 
