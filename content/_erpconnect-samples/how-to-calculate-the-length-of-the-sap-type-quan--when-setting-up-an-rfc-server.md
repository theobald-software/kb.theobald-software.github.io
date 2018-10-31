---
layout: page
title: How to calculate the length of the SAP type QUAN when setting up an RFC-Server
description: How to calculate the length of the SAP type QUAN when setting up an RFC-Server
permalink: /:collection/:path
weight: 32
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If you have to define the SAP type QUAN in your RFC Server you have to define it as BCD on .NET side. But you can't just take over the length from SAP.

Every digit from SAP needs a half byte. Then you have to round up to a complete byte.

4 digits: 4 * 0.5 + 0.5 = 2.5 -> 3 byte Length<br>
13 digits: 13 * 0.5 + 0.5 = 7 -> 7 byte Length

So the codeline looks like this if you have a QUAN field in SAP with the length 13,3:

MYRFCTable.Columns.Add("BREIT", 7, 3, RFCTYPE.BCD);