---
layout: page
title: IDoc test environment
description: IDoc test environment
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If you want to receive some test IDocs, please follow the steps below to set up a test envi-ronment in your SAP system that can send MATMAS IDocs for distributing material master data.

**Define a Logical System**

First off, we need to define a logical system to which the IDocs can be sent. Please go the customizing (transaction SPRO) and follow the path SAP Web Application Server -> ALE -> Sending and Receiving Systems -> Logical Systems -> Define Logical System. Create a new line and fill in the name of the system  and a short description.

**Create an RFC Destination**

Please refer to this page and set up a new RFC destination.

**Create an IDoc Port**

Please use transaction WE21 to configure an IDoc port. The port type must be 'transac-tional'. The name of the port must be unique and refer to the RFC destination defined in step 2.

**Create a Partner Profile**

Use transaction WE20 to create a new partner profile for the logical system that was created in step 1. We also need to add one outbound parameter (use the green plus to create one). As shown in the figure below, please select MATMAS as message type and MATMAS01 as the IDoc basic type. You also have to define the logical receiver port for this outbound parame-ter. Please fill in the name of the port created in step 3.

**Send a Test IDoc**

When all steps are completed, please use transaction BD10 to send a test IDoc for a speci-fied material number. Before you run the program (F8) you have to fill in the logical system as shown in the figure below.
