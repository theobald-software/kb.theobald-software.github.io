---
layout: page
title: Change Data Capture with CDHDR
description: Change Data Capture with CDHDR
permalink: /:collection/:path
weight: 22
progressstate: 5
---

This article shows how to load data incrementally from an SAP Table with no delta pointers / date fields.
The following example scenario uses two tables:
- MAKT (Material Descriptions), which has no date fields.
- CDHDR (Change Documents Header), which holds the header information of the changed records.
CDHDR is used to determine the delta information of MAKT and other tables.

### Prerequisites

- Prepare a record for the delta extraction:<br>
Change the description of a material in MAKT, e.g., change the description “ABC” of material 2593 to "Test_delta”.<br>
![MAKT-change](/img/contents/MAKT-change.png){:class="img-responsive"}
- Check if CDHDR registered the change:<br>
Filter the field UPDATE for today's date. The change made in MAKT should be listed.<br>
![CDHDR-change](/img/contents/CDHDR-change.png){:class="img-responsive"}

### Daily Data Extraction

The following steps describe how to only extract the data from MAKT that has been changed on today’s date.

1. Create a new Table extraction.
2. Look up the tables MAKT and CDHDR.<br>
![CDHDR-MAKT](/img/contents/CDHDR-MAKT.png){:class="img-responsive"}
3. Select the fields OBJECTID and UDATE from CDHDR for the output.<br>
- OBJECTID contains information about the Key on which the changes are made. 
This field is used for joining the tables and to get the delta data from MAKT.
- UDATE contains the date on which updates occurred. This field is used to filter the data for specific dates.
4. Select the fields you want to extract from MAKT for the output (MATNR is mandatory).
5. Open the tab *Joins* and click **[Add]**. The window "Join" opens. <br>
![CDHDR-MAKT-Join](/img/contents/CDHDR-MAKT-Join.png){:class="img-responsive"}
6. Select the join type *INNER_JOIN* to combine the tables CDHDR and MAKT.
The OBJECTID from CDHDR and MATNR from MAKT have same entries and thus form an inner join condition.<br>
7. Click **[Add]** and confirm your selection with **[OK]**.
8. Open the tab *WHERE Clause* and enter the following filter criteria:
`CDHDR~UDATE = '#{ DateTime.Now.AddDays.ToString(\"yyyyMMdd\") }#'`. <br>
This criteria uses script expressions to get the current date in the SAP format ("yyyyMMdd").
![CDHDR-MAKT-where](/img/contents/CDHDR-MAKT-where.png){:class="img-responsive"}
9. Click **[Load live review]** to check the results.
Only the data in MAKT that has been changed on today's date is extracted.
10. Schedule the extraction daily. 

{: .box-tip }
**Tip:** To extract all changes of the day before, change the WHERE clause to `CDHDR~UDATE >= '#{ DateTime.Now.AddDays(-1).ToString(\"yyyyMMdd\") }#'` and schedule the extraction every night at 1p.m. or later. 

*****

#### Related Links
- [Delta Table Extraction](https://kb.theobald-software.com/xtract-universal/delta-table-extraction)
- [Table: WHERE Clause](https://help.theobald-software.com/en/xtract-universal/table/where-clause)
- [Xtract Universal: Script Expressions](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/script-expressions)