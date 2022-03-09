---
layout: releaseNotes
---

** XtractUniversal - 5.4.14 **

Fix for Snowflake destination transaction control for RowProcessingOnly extraction step.
Because Snowflake does not support explicit transaction control for DDL statements, RowProcessingOnly is the only option available for this destination.