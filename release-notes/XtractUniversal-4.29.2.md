---
layout: releaseNotes
---

- If the name of an uploaded object does not begin with letter, it will be prefixed with an 'x'. 
E.g. an object that would normally be called `_namespace_tabname.csv` will now be called
`x_namespace_tabname.csv` when uploaded to S3, Azure Storage or Google Cloud Storage.
- This change is to make sure that all uploaded object are compatible with Azure Data Factory, 
Hadoop and Spark, which require object names to begin with a letter or give special meaning to 
objects whose name starts with certain non-alphabetic characters. E.g. in Spark all objects that
begin with an `_` or `.` are hidden.
- This change is breaking.