---
layout: page
title: How to check the accessibility to a SAP System
description: How to check the accessibility to a SAP System
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Sometimes the firewall is blocking the traffic to the SAP System. This could be a local Firewall, but also a Firewall in the destination network.

You can use the tool [paping.exe](https://code.google.com/archive/p/paping) to ping the port and to check if the Firewall is open.

The syntax to use paping.exe is:

*paping.exe SAPServer -p port -c 3*

SAPServer is your SAPsystem you want to ping.
If a SAP-Router is used, the ports are 3299 and 3399. If not, the ports are 32XX and 33XX. XX is usually the system number (like 00, or 05).

e.g.

paping.exe 192.168.0.9 -p 3305 -c 3

![paping](/img/contents/paping.png){:class="img-responsive"}

Some important Portnumbers:

sapdp00 3200/tcp # SAP Dispatcher. 3200 + Instance-Number

sapgw00 3300/tcp # SAP Gateway. 3300 + Instance-Number

sapsp00 3400/tcp # 3400 + Instance-Number

sapms00 3500/tcp # 3500 + Instance-Number

sapmsSID 3600/tcp # SAP Message Server. 3600 + Instance-Number

sapgw00s 4800/tcp # SAP Secure Gateway 4800 + Instance-Number