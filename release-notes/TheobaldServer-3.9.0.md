---
layout: releaseNotes
---

# Theobald Server 3.9

Fixes and refactoring for new runtime. Fixes for CORS and error handling in HTTP server.

## New Runtime
- Refactor internals for simplicity and maintainability.
- Implement additional extraction types.
- Implement capability to start an extraction without waiting for it to finish.
- Fix internal clean up procedures.
- Fix logging.
- Implement new result cache.
- Rework parameter handling.
- Fix extraction status updates.

## HTTP server

- Fix CORS handling.
- Fix error handling for errors during the authentication step.
