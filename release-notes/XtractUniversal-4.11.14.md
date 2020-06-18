---
layout: releaseNotes
---

# Xtract Universal 4.11.14

Fixes for timeouts and connection issues

- Fixed a bug that could cause extractions to get stuck in a running state while not actually running anymore
- Increased initial connection timeout for xu.exe from 10 to 60 seconds
- Introduced a new return code for timeouts in xu.exe (1040)