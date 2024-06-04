---
layout: releaseNotes
---

## yunIO 1.32.14

- HTTP server
    - *Security:* Fixed a bug where closing the connection during a certain point in time during error handling of a failed request would cause the log to grow heavily, filling up the disk.
    - HTTP error response codes are now logged in the web server log.