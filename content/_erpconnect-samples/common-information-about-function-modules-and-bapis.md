---
layout: page
title: Common Information about function modules and BAPIs
description: Common Information about function modules and BAPIs
permalink: /:collection/:path
weight: 12
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Function modules are single functions that are managed by the SAP Function Builder (transaction SE37) and developed in SAP's own programming language, ABAP. The function module should have the attribute Remote Enabled to be called from outside the SAP system via the RFC protocol. It's very easy to call these functions with the help of ERPConnect.net.

Every function module provides import and export parameters. These parameters are either given to or from the function module. Besides these scalar parameters, there can be also an exchange of tables. The figure below shows the principle of the object hierarchy that is provided by ERPConnect.net to manage the exchange of imports, exports and table parameters.

The following examples show how to log on to a SAP system, and how to use these objects to call function modules within the SAP system.

- Call a simple function module: SD_RFC CUSTOMER GET
- Retrieving Stock Quantity via BAPI
- ERPConnect in a web application: Creating a Purchase Order via BAPI

![FunctionObject](/img/contents/FunctionObject.jpg){:class="img-responsive"}