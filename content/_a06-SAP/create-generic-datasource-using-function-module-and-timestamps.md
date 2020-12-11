---
layout: page
title: Create Generic Datasource using Function Module and Timestamps
description: create-generic-datasource-using-function-module-and-timestamps
permalink: /:collection/:path
weight: 11
---

To be able to extract OLTP Datasources from SAP ERP, you first of all have to activate the relevant DataSources in the SAP OLTP system. After activating the DataSources you can extract data from all the active DataSources using the DeltaQ component.

Thoses steps have to be carried out in the SAP ERP system (OLTP). No SAP BW system is required.

### Transferring Application Component Hierarchy
You use this function to install and activate the application component hierarchy.

Runtransaction RSA9 in the OLTP system (or alternatively SBIW).
Go to transaction SBIW, and choose Business Content DataSources and Transfer Application Component Hierarchy. Alternatively, you may also use transaction RSA5. The procedure is the same.

Confirm the security check: Do you want the content application Transfer Component Hierarchy? with YES.
If a dialog box appears requesting the user to enter a package, enter a package in the customer’s namespace and choose Save or choose Local object.

### Activating DataSources
You use this function to activate DataSources in SAP OLTP systems.

Go to transaction SBIW, and choose Business Content DataSources and Transfer Business Content DataSources.<br> Alternatively, you may also use transaction RSA5. The procedure is the same.

The overview tree is structured in accordance with the application components assigned to you.

### Activate a Datasource
To activate a DataSource from the delivery version to the active version, select it in the overview tree and choose Activate DataSources.

### Activate a Node
In the application component hierarchy, select the nodes for which you want to install DataSources in the active version.<br> To do this, position the cursor on the node and choose Activate DataSources. The DataSources and subtrees below the node are activated