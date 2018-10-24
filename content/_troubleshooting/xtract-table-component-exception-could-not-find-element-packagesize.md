---
layout: page
title: Xtract Table Component Exception Could not find Element 'PACKAGESIZE''
description: Xtract Table Component Exception Could not find Element 'PACKAGESIZE'
permalink: /:collection/:path
homepage-weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

The following Exception occurs when running the table component 

![couldnotfindpackagesize](/img/contents/couldnotfindpackagesize.png){:class="img-responsive"}

(This screenshot is showing the Xtract IS Table Component Progress Output in SSIS. The Error could also happen in the following Products: Xtract QV, Xtract Univeral, BOARD Connector. The Errormessage in the Logfiles of these products is similar)

**Reason:**

This Exception occurs when the option Data Compression is checked and the custom function in the settings is not the Z_XTRACT_IS_TABLE_COMPRESSION function. 

**Solution:**

1. Uncheck the Data Compression option if you want to use the Z_XTRACT_IS_TABLE function.

2. Fill in the name of the Data Compression Function Module in the custom function field if you want to use the Data Compression functionality.