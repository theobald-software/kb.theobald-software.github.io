---
layout: releaseNotes
---

## YunIO 1.15.3
- Fixed a path traversal vulnerability in the designer server which enabled fetching arbitrary files accessible to the server on file system level.
- All previous versions are affected and an immediate update is recommended
- No authentication or authorization is required
- It is not possible to enumerate directory structures and/or their contents
- However, it is possible to guess file names and their location and craft a specific request for them
- Possibly affected types of directories (if the server runs with sufficient privileges):
  - local file system
  - local drives (c:, d:, etc.)
  - network drives (SMB)