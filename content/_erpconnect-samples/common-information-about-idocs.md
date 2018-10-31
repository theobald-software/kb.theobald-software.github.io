---
layout: page
title: Common information about IDocs
description: Common information about IDocs
permalink: /:collection/:path
weight: 18
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

IDocs are electronic documents that can be sent from or to SAP systems. It is possible to exchange IDocs between SAP systems or between one SAP system and an external application. ERPConnect.net provides a set of classes to send, receive, and construct IDocs very easily. An IDoc consists of one control record and several data records. The control record contains routing data and information about the sending and the receiving system. The data records are arranged hierarchically. A single data record is also called a segment. One segment itself consists of several fields. Please use transaction WE60 to refer to the structure of several IDoc types, or have a look at ifr.sap.com. The figure below shows the IDoc object structure of ERPConnect.net. Each segment can contain several child segments and every segment contains several field objects.

- Send a simple STATUS IDoc
- Sending an ORDER IDoc by using CreateEmptyIdoc method
- XML Support for IDocs
- Receiving an IDoc

![IdocObjekte](/img/contents/IdocObjekte.jpg){:class="img-responsive"}