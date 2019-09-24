---
layout: page
title: ERPConnect Exception - DATA_BUFFER_EXCEEDED
description: ERPConnect Exception - DATA_BUFFER_EXCEEDED
permalink: /:collection/:path
weight: 16
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

I try to extract a table from SAP using the ReadTable class and get the DATA_BUFFER_EXCEEDED exception. But only some tables cause this problem.

**Reason:**

Unfortunately following restrictions apply if you read tables with the ReadTable class:

- Tables that should be read from may not have any floating point number (FLTP) type of column (as in the case of e.g. the VBAK table). 
- The overall width of the columns to be extracted may not exceed 512 bytes. 
- Some special tables like TCURR return false values.

If anyone of these cases occur, the table call will throw an exception.

**Solution:**

There are two ways to avoid this error:

- It is possible to install a Z-module in the SAP system, please see chapter  Installing the Z-function module.
To enable an installed Z-module, e.g. Z_XTRACT_IS_TABLE, when using the ReadTable class, use the method
ReadTable.SetCustomFunctionName("Z_XTRACT_IS_TABLE"). 

- Create a view in SAP over the table that causes the error. Leave out all columns that cause the Problem and use the ReadTable class of ERPConnect to run the view instead of the table. (But the limitation of the 512 Bytes still exists)