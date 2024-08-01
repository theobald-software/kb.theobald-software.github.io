---
layout: page
title: TCP/IP Ports of SAP
description: SAP TCP/IP Ports
permalink: /:collection/:path
weight: 50
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base.<br>
Make sure to use the knowledge base within the new [Theobald Software HelpCenter](https://helpcenter.theobald-software.com/).


### SAP Ports

The following ports between the Windows server that runs Theobald Software products and the SAP server from which data is extracted, must be open:

| SAP NetWeaver Component | Port<br> (NN = System number of the SAP system) |
| ------------- |----------|
| SAP Application Server | 33\<NN> |
| SAP Message Server | 36\<NN> |
| Secure Network Communication (SNC)| 48\<NN\> |
| SAP-Router | 3299 |

*****
#### Related Links
- [SAP Documentation: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports)
- [Route Strings](https://help.sap.com/doc/saphelp_nw75/7.5.5/en-us/48/6a169d31c34e6ee10000000a421937/content.htm?no_cache=true)
