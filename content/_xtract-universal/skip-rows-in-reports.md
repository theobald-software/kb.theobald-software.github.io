---
layout: page
title: Skipping Rows in Reports
description: Skip Rows in Reports
permalink: /:collection/:path
weight: 132
---

This articles shows how to skip certain rows in a Report extraction.<br>
The example application provided in this article uses the **Row Skip Pattern** option in Xtract Universal's Report component to remove rows that contain the * symbol from extracted reports.

### About Row Skip Patterns

The *Extraction Settings* of Xtract Universal's Report component include the **Row Skip Pattern** option.
**Row Skip Pattern** allows you to define a pattern that removes all rows that contain the pattern from the extracted report.
This can be used to remove header rows that are repeated in the output body of reports.

- Regular expressions are supported
- Multiple row skip patterns can be entered, separated by the pipe symbol "`|`".
- Only works with database destinations, e.g., Azure Storage, Snowflake, SQl Server, etc.

{: .box-note }
**Note:** Rows are removed after the report data was extracted from SAP. 
This means that the live preview in the Report component does not include the **Row Skip Pattern** option.

{: .box-tip }
**Tip:** To skip header and/or footer rows that do not follow any pattern, use the *Row settings* in the main window of the component.
The *Row settings* allows skipping rows at the top and at the bottom of the report.

### How to Use Row Skip Patterns

In the following example, the report RFITEMGL contains rows that totals the content of the rows before. 
These rows are marked with an * symbol: <br>
![report-no-skip-rows](/img/contents/xu/report-no-skip-rows.png){:class="img-responsive"}

To remove all rows that contain the * symbol, follow the instructions below:

1. Look up the report. This example uses the report RFITEMGL. 
2. Define the columns of the report, see [Online Help: Defining a Report Extraction](https://help.theobald-software.com/en/xtract-universal/abap-reports/report-extraction-define). <br>
![report-no-skip-rows](/img/contents/xu/report-skip-rows-preview.png){:class="img-responsive"}
3. Click **Extraction Settings**. The window "Extraction Settings" open.<br>
![report-no-skip-rows](/img/contents/xu/report-skip-rows-settings.png){:class="img-responsive"}
4. Enter a **Row skip pattern**. To process special symbols, add `/ `before the symbol, e.g., to remove rows that contain the sum * symbol, enter `\*`. 
5. Click **[OK]** to close the extraction settings. 
5. Click **[OK]** to save the extraction. Note that the live preview of the report component does not include the **Row skip pattern** option. 
**Row skip pattern** is only executed when running the extraction.
6. Run the extraction. 
5. Check the extracted report. The rows that contain the * symbol are not written to the destination.<br>
![report-no-skip-rows](/img/contents/xu/report-skip-rows.png){:class="img-responsive"}

The extracted report does not include rows that contain a * symbol.

<!---
### Example Patterns

Row Skip pattern | Description
----------------|-------------
`2020|2021|-|Sum`| Removes all rows containing ‘2020’, ‘2021’, ‘-‘ and ‘Sum’.
`regex`| Removes ...
-->