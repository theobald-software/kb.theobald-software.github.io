---
layout: releaseNotes
---

## Theobald Server 3.8

- Added common base for web worker, HTTP server backend and running extractions.
- An accompanying framework for writing tests for this stack was added as well.
- Fixed some authentication and authorization issues in the new web server backend.
- Fixed a bug in the HTTP server causing it to carry state to a new request if the previous one ran into an error.
- Added service and source level support for the new runtime and web server.
- Refactored the handling of parameters for running extractions.