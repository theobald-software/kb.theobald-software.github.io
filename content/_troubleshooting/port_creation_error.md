---
layout: page
title: DeltaQ Customizing - PORT_CREATION_ERROR
description: DeltaQ Customizing - PORT_CREATION_ERROR
permalink: /:collection/:path
weight: 6
---

**Error:**

When doing the DeltaQ Customizing Step 3 (RSAP_BIW_CONNECT_40 ) you get a PORT_CREATION_ERROR in the SE37.

![ScreenOutputWithoutConnectioToUser](/img/contents/portcreationerror.png){:class="img-responsive"}

**Reason:**

SAP tries to create a port with a port number which is already existing in the Table EDIPORT. This is a bug in the SAP process. This behavior is also described in the SAP Note - 110849 - "Error during insert in port table" (create
source system).

**Solution:**

1. Choose transaction SNUM and object "EDIPORT".
2. Select "Number ranges" from the menu "Goto" and here the button "Status".
(or click on Interval Editing -> NR Status)
3. Change the CURRENT NUMBER of the ranges to the next free number you noted from table EDIPORT.
