---
layout: page
title: SharePoint lists notification thanks to intelligent merge procedure
description: SharePoint lists notification thanks to intelligent merge procedure
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

First of all, customer master data in table KNA1 will be loaded into SharePoint.

![Screenshot1](/img/contents/Screenshot1.png){:class="img-responsive"}

Afterwards, the alert functionality for the SharePoint list will be set up.
This functionality is available in SharePoint 2013 as well as SharePoint Online by default.

![Screenshot2](/img/contents/Screenshot2.png){:class="img-responsive"}

Now we will change the customer master data in SAP:

![Screenshot3](/img/contents/Screenshot3.png){:class="img-responsive"}

After doing so the complete table KNA1 will be extracted again.

Xtract Universal’s intelligent merge procedure identifies and sends only those data records to SharePoint that have either been changed or added since the last upload.

![Screenshot4](/img/contents/Screenshot4.png){:class="img-responsive"}

The SharePoint list now contains the updated data set.

![Screenshot5](/img/contents/Screenshot5.png){:class="img-responsive"}

The embedded user in the SharePoint alert will be informed by email about the changed records

![Screenshot6](/img/contents/Screenshot6.png){:class="img-responsive"}