---
layout: releaseNotes
---

**Xtract Universal 5.10.3**

Since the query_timeout parameter passed in the Snowflake connection string seems to be ignored when running commands from the ODBC driver, we started to use the ODBC.CommandTimout property.