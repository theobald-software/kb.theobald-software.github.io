---
layout: page
title: Skipping Rows in Reports
description: Skip Rows in Reports
permalink: /:collection/:path
weight: 132
---

This articles shows how to skip certain rows in a Report extraction.<br>
The **Row Skip Pattern** option provided by Xtract Universal's Report component only works with database destinations, e.g., Azure Storage, Snowflake, SQl Server, etc.

### About Row Skip Patterns

The *Extraction Settings* of Xtract Universal's Report component contains the **Row Skip Pattern** option.
All report rows that contain the pattern are removed from the result set. 
**Row Skip Pattern** can be used for skipping ... e.g., header rows that are repeated in the output body of reports.

Rows are being removed after the report data was extracted from SAP. 
This means that the live preview in the Report component does not include the **Row Skip Pattern** option.

- Regular expressions are supported
- Multiple row skip patterns can be entered, separated by the pipe symbol "`|`".
- Only works with database destinations, e.g., Azure Storage, Snowflake, SQl Server, etc.

{: .box-tip }
**Tip:** To skip header and/or footer rows that do not follow any pattern, use the *Row settings* in the main window of the component.
The *Row settings* allows skipping rows at the top and at the bottom of the report.

### How to Use Row Skip Patterns

In the following example, the report RFITEMGL contains rows that totals the content of the rows before. 
These rows are marked with an * symbol: <br>
![report-no-skip-rows](/img/contents/xu/report-no-skip-rows.png){:class="img-responsive"}

To remove all rows that contain the * symbol, follow the instructions below:

1. dew
2. ![report-no-skip-rows](/img/contents/xu/report-skip-rows-preview.png){:class="img-responsive"}
3. ![report-no-skip-rows](/img/contents/xu/report-skip-rows-settings.png){:class="img-responsive"}
4. ... Note that the live preview does not include skip patterns. The skip pattern is only executed when running the extraction.
5. Click **[OK]** to save the extraction.
6. Run the extraction. 
5. Check the extracted report. The rows that contain the * symbol are not written to the destination.<br>
![report-no-skip-rows](/img/contents/xu/report-skip-rows.png){:class="img-responsive"}

### Example Patterns

Row Skip pattern | Description
----------------|-------------
`2020|2021|-|Sum`| Removes all rows containing ‘2020’, ‘2021’, ‘-‘ and ‘Sum’.
`regex`| Removes ...