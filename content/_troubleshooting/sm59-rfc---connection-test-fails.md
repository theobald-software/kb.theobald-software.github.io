---
layout: page
title: SM59 RFC - Connection Test fails
description: SM59 RFC - Connection Test fails
permalink: /:collection/:path
weight: 6
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

When clicking on 'Connection Test' in the RFC Destination I want to use, I get a Connection error like shown in the screenshot below:


![RFC ConnectionTest](/img/contents/RFC-ConnectionTest.png){:class="img-responsive"}


**Reason:**

This is no ERROR. A Connection Test is not possible, because Xtract IS is registering at the SAP System only when the package is running. When the package is not running, there is no connection between SSIS and SAP, and so the test will always fail.


**Solution:**

Please ignore it.