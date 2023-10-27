---
layout: releaseNotes
---

## Xtract Universal 6.1.1

### Fixes

- Fixed extraction errors being suppressed in certain situations
- Fixed the script expressions which were trying to access source information
- The Web Server will handle error caused by the client closing the connection more gracefully now

### Features

- The "X-XU-Is-Pull-Destination" header will now always be sent by the web server
- The runtime now logs the servers version after creating the extraction log
