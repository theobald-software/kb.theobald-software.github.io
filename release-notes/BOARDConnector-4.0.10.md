---
layout: releaseNotes
---

# BOARD Connector 4.0.10

- Fix for hierarchies in **merged** mode where caching could possibly cause data loss
- Fix for *"XML format  currently not supported"* error when result was empty
- Fix for very wide (~200+ columns) extractors that caused the extraction to fail
- RAW byte arrays with all bytes set to **0** now have correct values instead of `null`