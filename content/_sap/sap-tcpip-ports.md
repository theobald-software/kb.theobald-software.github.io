---
layout: page
title: TCP/IP Ports of SAP
description: TCP/IP Ports of SAP
permalink: /:collection/:path
weight: 21
---


### SAP Ports

The following ports between the Windows server that runs Theobald Software products and the SAP server from which data is extracted, must be open:

| SAP NetWeaver Component | Port<br> (NN = System number of the SAP system) |
| ------------- |----------|
| SAP Application Server | 33\<NN> |
| SAP Message Server | 36\<NN> |
| Secure Network Communication (SNC)| 48\<NN\> |
| SAP-Router | 3399 |

*****
#### Related Links
- [SAP Documentation: TCP/IP Ports of All SAP Products](https://help.sap.com/viewer/ports)