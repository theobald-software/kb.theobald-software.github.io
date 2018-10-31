---
layout: page
title: How to run multiple Xtract IS extractions in one package in real parallel mode
description: How to run multiple Xtract IS extractions in one package in real parallel mode
permalink: /:collection/:path
weight: 10
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To run multiple Xtract IS Components in parallel mode it's not sufficient to have the DataFlows/Xtract IS Components in parallel. You also need one Xtract IS Connection Manager for every Xtract IS Component to get real parallel extractions.

If running multiple extractions with one Connection Manager, the provision of data on SAP side and the delivery of the data is handled sequentially. With multiple Connection Managers you have one process for every component, and the provision and delivery of data is faster. Also if only one Xtract IS Connection Manger is used by many Xtract IS Components, problems with the connection can occur in some cases (timeouts, cuts, instable connection, etc.) So we recommend to use one Connection for every Xtract IS Component.

For the DeltaQ Component we also recommend to use one logical system and one Connection Manager for every DeltaQ Component in the package to accomplish a fast and stable extraction process.

The assigned Xtract IS Connection Managers can be changed with a right click on the Xtract Component and selection of "Show Advanced Editor...". In the Advanced Editor the available Xtract IS Connection Managers can be found  in the "Connection Manager" dropdown box.

Please have a look at this sample of parallel Connection Managers. In every data flow is an Xtract IS Component with different assigned Xtract IS Connection Managers:

![DeltaQP1](/img/contents/DeltaQP1.png){:class="img-responsive"}

The Advanced Editor (right click on the Xtract IS Component)

![DeltaQP2](/img/contents/DeltaQP2.png){:class="img-responsive"}

Successful extraction of parallel Connection Managers:

![DeltaQP3](/img/contents/DeltaQP3.png){:class="img-responsive"}

Please consider we recommend not to run more than 5 DeltaQ extractions with the same RFC Destination and one Connection Manager depending on your IT environment. The best results are achieved with one Connection Manager and one RFC Destination per extraction.
