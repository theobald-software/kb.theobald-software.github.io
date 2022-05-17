---
layout: releaseNotes
---

# ERPConnect 6.14.19

Idoc segment field names had `ST_` and `FZ_` at their beginning replaced with `USTU-` and `UFZU-`. This is due to a bug in the internal name escaping logic. This fix might break existing code that already circumvents this bug. 