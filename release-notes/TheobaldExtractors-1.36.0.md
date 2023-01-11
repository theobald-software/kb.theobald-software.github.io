---
layout: releaseNotes
---

*Changes in Z_XTRACT_IS_REMOTE_REPORT*:
- Added Z_TS_PROG authorization object
- Authority check on Z_TS_PROG is now performed at the beginning of extraction. Should the authority check fail and the report is assigned to an authorization group, another authority check on S_PROGRAM is performed. If both authority checks fail, the extraction is aborted with an error.
- *IMPORTANT:* Reports not assigned to an authorization group can't be extracted anymore without having an appropriate Z_TS_PROG authorization object assigned to user.