---
layout: releaseNotes
---

# Xtract for Alteryx 1.7.8

- Fix for *"XML format  currently not supported"* error when result was empty
- Fix for very wide (~200+ columns) extractors that caused the extraction to fail
- RAW byte arrays with all bytes set to **0** now have correct values instead of `null`