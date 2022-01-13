---
layout: page
title: Activating DataSources in the SAP OLTP System
description: Activating-DataSources-in-the-SAP-OLTP-System 
permalink: /:collection/:path
weight: 10
---

This article shows how to activate DataSources in your SAP system and make them available for Theobald Software products.

### About DataSources

A DataSource is a set of logically-related fields that are provided to transfer data into the BW.<br>
DataSources supply the metadata description of source data. 
They are used to extract data from a source system and to transfer the data to the BW system. 
For more information on DataSources, see [SAP Help: DataSource in the SAP Source System](https://help.sap.com/saphelp_nw73/helpdata/en/4a/0c98f779291b43e10000000a42189c/frameset.htm)

To find DataSources in your SAP system, the relevant DataSources must be activated.
To activate DataSources, follow the steps below. No SAP BW system is required.

### Activating DataSources

1. Run transaction *RSA9* to activate the Application Component Hierarchy.<br>
The Application Component Hierarchy is used to structure the DataSources in the Data Sources tree.<br>
Alternatively run the transaction *SBIW* and select **[Business Content DataSources] > [Transfer Application Component Hierarchy]**. 
2. Confirm the security check for the Application Component Hierarchy with **[YES]**. <br>
If a dialog box prompts you to enter a package, enter a package in the customer’s namespace and click **[Save]** or click **[Local object]**.
3. Run transaction *RSA5* to access Transfer Business Content DataSources.<br> 
Alternatively run transaction *SBIW*, and select **[Business Content DataSources] > [Transfer Business Content DataSources]**.
4. Select a DataSource or a Node you want to activate from the overview tree.
5. Click **Activate DataSources** to activate the selected DataSources.

For more information on the activation process, see [Set Up and Activate DataSources](https://help.sap.com/viewer/7a60944343e543a1ab99e9b2904dab09/CLOUD/en-US/e5d447257a95416190d29638a64a5dfa.html).

### How to Access a DataSource in Theobald Products

DataSources can be extracted using the ODP or DeltaQ component of any Theobald Software product.

*****
#### Related Links
- [Set Up and Activate DataSources](https://help.sap.com/viewer/7a60944343e543a1ab99e9b2904dab09/CLOUD/en-US/e5d447257a95416190d29638a64a5dfa.html)
- [SAP Help: Application Component Hierarchy](https://help.sap.com/viewer/107a6e8a38b74ede94c833ca3b7b6f51/2.0.9/en-US/bd594782b57c4c0db445752e31519e31.html)
- [Copying BI Content DataSources to the Active Version](http://saphelp.ucc.ovgu.de/NW750/EN/4a/0c98f779291b43e10000000a42189c/frameset.htm)
- [SAP Help: Editing DataSources and Application Component Hierarchies](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/49/ae67401d4988448036b180dc9ec1e6/frameset.htm)