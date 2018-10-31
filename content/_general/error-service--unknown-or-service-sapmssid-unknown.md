---
layout: page
title: ERROR service ‚?‘ unknown or service sapms<SID> unknown
description: ERROR service ‚?‘ unknown or service sapms<SID> unknown
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

It could be that you get the following error while connecting to SAP:

      ERROR service ‚?‘ unknown

The problem is that there are sapdp* (eg. sapdp00  3200/tcp) entries missing in the file services  in the folder "\Windows\System32\drivers\etc".

Please append the entries in the file services.txt you can find at the bottom of this article to your services file.

If you get the error service sapms<SID> unknown, you have to append the following line to the file services:

sapms<SID>  3600/tcp  

For exapmle, if your SID is ECC for example, the line looks like the following one:

sapmsECC  3600/tcp  