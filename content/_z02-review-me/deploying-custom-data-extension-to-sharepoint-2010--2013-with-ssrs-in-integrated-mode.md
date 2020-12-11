---
layout: page
title: Deploying Custom Data Extension to SharePoint 2010 / 2013 with SSRS in integrated mode
description: Deploying Custom Data Extension to SharePoint 2010 / 2013 with SSRS in integrated mode
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To use a report with Xtract RS in a SharePoint 2010 / 2013 environment which is installed with SSRS in integrated mode you have to do some modifications additionally to the setup routine. 
Otherwise you get an error, that the data extension is unknown when running the report.

To run the cmdlets you need to open the SharePoint 2010 / 2013 Management Shell, and run the following cmdlet first:

**Get-SPRSServiceApplication**

So you get the UEAccountName. You need this at the second cmdlet.

![XtratRSPowershell00](/img/contents/XtratRSPowershell00.png){:class="img-responsive"}

The next cmdlet is :

**new-sprsextension**

After executing this cmdlet you have to fill in some data (also the UEAccountName from the first cmdlet).

![XtratRSPowershell02](/img/contents/XtratRSPowershell02.png){:class="img-responsive"}

You can copy and paste the last line :

For SP2010:

XtractRS.DataExtension.XtractRSConnection,XtractRS.DataExtension, Version=1.0.0.0, Culture=neutral, PublicKeyToken=3ae23c572629ca3b

For SP2013:

XtractRS.DataExtension.XtractRSConnection,XtractRS.DataExtension2012, Version=1.0.0.0, Culture=neutral, PublicKeyToken=3ae23c572629ca3b


After this you are able to run a report with Xtract RS data extensions in SharePoint 2010 / 2013 with SSRS in integrated mode without any problems.

![XtratRSPowershell03](/img/contents/XtratRSPowershell03.png){:class="img-responsive"}
