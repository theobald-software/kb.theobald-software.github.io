---
layout: page
title: DeltaQ Customizing System Change Options
description: DeltaQ Customizing System Change Options
permalink: /:collection/:path
weight: 21
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The customization for the DeltaQ component needs some parts of the SAP System to be modifiable.

These are the needed steps to do so:

In the Transaction SE03 you have to switch the Software Component with the technical name ***LOCAL*** to modifiable.
In the lower part of the screen you will find the Name Range ***Customer Name Range***. This has to be set to modifiable as well.

When you click ***Client Settings*** you get to the Client selection screen.<br>
Click on the edit symbol then double click the client and you get to the settings screen.

In the section Cross-Client Object changes set the option to:

***Changes to Repository and cross-client Customizing allowed***

After successfully finished all steps of customization for DeltaQ you can change the settings to their default value.