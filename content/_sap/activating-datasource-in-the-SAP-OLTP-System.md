---
layout: page
title: Activating DataSources in the SAP OLTP System
description: Activating-DataSources-in-the-SAP-OLTP-System 
permalink: /:collection/:path
weight: 10
---

### Content ###

To be able to extract **OLTP DataSources** from SAP ERP, you first of all have to activate the relevant DataSources in the SAP OLTP system. After activating the DataSources you can extract data from all the active DataSources using the DeltaQ component.

Those steps have to be carried out in the SAP ERP system (OLTP). No SAP BW system is required.

### Step-by-step explanation ###

**Step 1: Transferring the Application Component Hierarchy**

You use this function to install and activate the application component hierarchy.

Run transaction RSA9 in the OLTP system (or alternatively SBIW).
Go to transaction SBIW, and choose Business Content DataSources and Transfer Application Component Hierarchy. Alternatively, you may also use transaction RSA5. The procedure is the same.

Confirm the security check ("Do you want the content application Transfer Component Hierarchy?") with **[YES]**. <br>
If a dialog box appears requesting the user to enter a package, enter a package in the customer’s namespace and choose **[Save]** or choose **[Local object]**. <br>

**Step 2: Transferring Business Content DataSources**

Use this function to transfer DataSources in SAP OLTP systems. <br>

Go to transaction SBIW, and choose **[Business Content DataSources]** and **[Transfer Business Content DataSources]**.<br> 
Alternatively, you may also use transaction RSA5. The procedure is the same.

The overview tree is structured in accordance with the application components assigned to you.

** Step 3: Activating DataSources**

To activate a DataSource from the delivery version to the active version, select it in the overview tree and choose **[Activate DataSources]**.

** Step 4: Activating a Node**

In the application component hierarchy, select the nodes for which you want to install DataSources in the active version.<br> 
To do this, position the cursor on the node and choose **[Activate DataSources]**. The DataSources and subtrees below the node are activated.