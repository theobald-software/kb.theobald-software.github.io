---
layout: page
title: Xtract Table Component Exception Could not find Element 'LENGTH'
description: Xtract Table Component Exception Could not find Element 'LENGTH'
permalink: /:collection/:path
homepage-weight: 12
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

When running Xtract Table with the Custom Function Data Compression the Exception Could not find Element 'LENGTH' occurs like shown in the screenshot below:


![couldnotfindlength](/img/contents/couldnotfindlength.png){:class="img-responsive"}

(This screenshot is showing the Xtract IS Table Component Progress Output in SSIS. The Error could also happen in the following Products: Xtract QV, Xtract Univeral, BOARD Connector. The Errormessage in the Logfiles of these products is similar)

**Reason:**

This Exception occurs when trying to use the Data Compression Function Module without Data Compression option is checked in the Settings.

**Solution:**

Please check the Option Data Compression in the Settings of the Table component. 


![DataCompressionChecked](/img/contents/DataCompressionChecked.png){:class="img-responsive"}
 

(This is the screenshot of the Xtract IS Table component, the Settings in the other products could vary)