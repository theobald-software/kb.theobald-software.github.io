---
layout: releaseNotes
---

## TheobaldServer 4.0.19

- Fixed a bug where the HttpServer would append `realm=simple` to the `Negotiate` scheme in the `WWW-Authenticate` header.
- Fixed a bug in the parsing logic of ad-hoc parameters in the whereClause of Table extractions.
- Improved logging of parameter, source, destination and connection information when running an extraction.