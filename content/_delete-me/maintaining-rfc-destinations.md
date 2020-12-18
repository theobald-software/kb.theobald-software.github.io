---
layout: page
title: Maintaining RFC Destinations
description: Maintaining RFC Destinations
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To create a new destination, please use transaction SM59 and click the Create button. The fields have to be filled in with following values:

- Unique name of the new destination (e.g. ERPTEST)
- Connection Type = T (forTCP/IP)
- Description
- ProgramID: A unique name that the server program uses to register itself on the SAP gateway (can be the same as the destination name).
- Choose option 'Registered Server Program'

You have to save the destination first before the connection can be tested.

Click the button Test Connection while the program is running. If everything works well, you should see a screen as the one below.