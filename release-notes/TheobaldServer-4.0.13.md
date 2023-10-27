---
layout: releaseNotes
---

## Theobald Server 4.0.13

### Fixes

- Fixed errors being suppressed in certain situations
- Fixed the scripting object types to be backwards compatible
- Fixed inconsistencies in handling the runtimes state in the error path
- The HTTP Server will handle errors caused by the client closing the connection more gracefully now

### Features

- Exposed Odp UpdateMode to the scripting engine
- The runtime now logs an application header right after creating the run log
