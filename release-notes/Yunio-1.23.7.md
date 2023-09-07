---
layout: releaseNotes
---

## yunIO 1.23.7

- enabled URI parameters (in GET requests) for transaction services
- fixed a bug where the Designer HTTP server would attach unnecessary CORS headers
- the WWW-Authenticate header is now included in the allowed CORS headers if the response is a 401
- service payload for report, table and function module services is now sent with compression if the client signals gzip support