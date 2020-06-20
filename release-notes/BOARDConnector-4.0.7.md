---
layout: releaseNotes
---

### ODP/Table GUI Preview
- Correctly displays records again
- Column names now match the selected column name style

### Table
- The Alias for table fields was removed as it was not working correctly. To prevent naming conflicts when joining tables please use the *PrefixedCode* column name style.
- Aggregated fields now have a generated column name with the aggregate function name preceeding the column name (e.g. *Minimum_MARA~BRGEW*). **This could break existing workflows that use aggregate functions.** 