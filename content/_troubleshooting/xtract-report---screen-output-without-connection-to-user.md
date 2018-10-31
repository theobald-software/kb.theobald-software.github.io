---
layout: page
title: Xtract Report - Screen output without connection to user
description: Xtract Report - Screen output without connection to user
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

When trying to run the preview in the Xtract Report component, the following Exception occurs - Screen output without connection to user:

![ScreenOutputWithoutConnectioToUser](/img/contents/ScreenOutputWithoutConnectioToUser.png){:class="img-responsive"}

**Reason:**

The Report tries to show a Screen Output. This could be another Dynpro for example. This is not possible when running reports in RFC because no SAPGui is involved. 

**Solution:**

Running the report in the background suppresses screen outputs and redirects the output from the Report to the spool. Xtract Report fetches the data from the spool of SAP wihout any additional settings to be done, except the option "Use Batch" in the settings of the Xtract product you are using, like shown in the following screenshot:

![UseBatch](/img/contents/UseBatch.png){:class="img-responsive"}

(This is the screenshot of the Xtract IS Table component, the Settings in the other products could vary)

Please consider, that this is only a solution if the pop up Dynpro is only for information purposes. If the Dynpro is awaiting any input, this report is not compatible with our product and cannot be executed. 