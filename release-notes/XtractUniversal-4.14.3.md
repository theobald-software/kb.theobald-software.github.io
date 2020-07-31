---
layout: releaseNotes
---

# Xtract Universal 4.14.3

Enforcement of access restriction for the web server

## Source

The web server now correctly enforces source-level permissions. 
To run an extraction the user needs to have read access for the extraction and the source. 

## Bugs

- [H] Fixed a bug where the extraction list API would list extractions the user was not allowed to read
- [L] Fixed a bug where the /status web API would not respond to requests with a missing timestamp argument