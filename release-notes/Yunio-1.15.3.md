---
layout: releaseNotes
---

- It is not possible to enumerate directory structures and/or their contents
- However, it is possible to guess files and their locations and craft a specific request for them
- Directories include (if the server runs with sufficient privileges):
  - local file system
  - local drives (c:, d:, etc.)
  - network drives (SMB)