---
layout: releaseNotes
---

### Indexed table fields
- This function displays an icon indicating whether the field is indexed and the sort direction (ascending/descending).


### Counting / Estimating number of rows
- When using **Z_THEO_READ_TABLE** the result rows will be counted using a real query. This means, the resulting row count respects current *joins* and the *where clause*.
- Other function modules will use the function module **EM_GET_NUMBER_OF_ENTRIES** to get the maximum number of available rows.

### Required persmissions
Those two new features require following permissions on the SAP system
- **Indexed fields**: Read from table **DD17S**
- **Estimate row count (other than *Z_THEO_READ_TABLE*)**: Execute function module **EM_GET_NUMBER_OF_ENTRIES**