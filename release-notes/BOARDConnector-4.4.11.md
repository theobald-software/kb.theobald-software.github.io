---
layout: releaseNotes
---

# BOARDConnector 4.4.11

Enforcement of access restriction for the web server

## Source

The web server now correctly enforces source-level permissions. 
To run an extraction the user needs to have read access for the extraction and the source. 

## Bugs

- Fixed a bug where the extraction list API would list extractions the user was not allowed to read