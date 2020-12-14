---
layout: page
title: Extracting data from SAP BW/BI via Export DataSources with Xtract IS
description: Extracting-data-from-SAP-BW/BI-via-Export-DataSources-with-Xtract-IS
permalink: /:collection/:path
weight: 105
---

To extract data from an **SAP BW/BI** system, [Xtract IS](https://theobald-software.com/en/xtract-is-productinfo.html) provides three different components supporting the following interfaces:

#### MDX engine #### 

The **Xtract IS BWCube** component supports the MDX engine and enables the extraction of **InfoCubes** and **BEx Queries**.


#### Open Hub Services ####

The **Xtract IS OHS** component supports the Open Hub Services that allow you to distribute data from BW/BI systems using **Infospokes** or **Open Hub Destinations**.

#### Export DataSources ####

An **Export DataSource** enables the extraction of the following InfoProviders: InfoCubes, DataStores and InfoObjects. <br>
In contrast to Export DataSources, **DataSources** are provided to transfer data from SAP ERP or an external System to BI. The **Xtract IS DeltaQ** component supports both DataSources. <br>

In this article the focus is on Export DataSources. It is described how to generate these DataSources in SAP BW/BI and how to use them with Xtract IS DeltaQ.


#### InfoCubes and DataStores ####

Export DataSources for InfoCubes and DataStores objects contain all the characteristics and key figures of the InfoProvider. The technical name of the Export DataSource is made up of the number 8 together with the name of the
InfoProvider: *0D_COPA > DataSource: 80D_COPA*.

#### InfoObjects (master data) ####

You can generate Export DataSources for master data, and thus for individual InfoObjects. An Export DataSource for master data contains the metadata for all attributes, texts, and hierarchies for 
an **InfoObject**. The length of the technical name of the InfoObject must not be longer than 28 characters. The technical name of the Export DataSource is "8xxxM", "8xxxT" and "8xxxH" respectively for attributes (master data), 
texts and hierarchies, where "xxx" stands for the InfoObject. <br>

Using Export DataSource, you can transfer large amounts of data from SAP BW/BI by full upload as well by delta requests. 

{: .box-note }
**Note:** Changes to the metadata of the InfoProvider can only be added to the Export DataSources by regenerating the Export DataSources.

#### Delta Process ####

A distinction is made between InfoCubes and DataStore objects:

The InfoCube used as an Export DataSource is first initialized. When the next extraction is performed, only those requests are transferred that have come in since initialization.

For DataStore objects, the requests in the change log of the DataStore object are used as the basis for determining the delta. Only the change log requests that have arisen from reactivating the DataSource object data are transferred.

### How to generate an Export DataSource ###

The InfoProvider must be activated at first. To generate an Export DataSource, go to the **Data Warehousing Workbench (transactions RSA1)** in the BW/BI system, choose **Modeling** and select your InfoProvider. <br>

Use the context menu to choose **Additional Functions > Generate Export DataSource**. In this sample the SAP Demo Cube **0D_COPA** is used (InfoProvider > SAP Demo > SAP Demo Profitability analysis). <br>

The Export DataSource **80D_COPA** will be generated.

### How to extract Export DataSources ###

Drag an Xtract DeltaQ component to the data flow task and link it to an Xtract Connection. Search for your Export DataSource.

Fill in the fields for the technical settings and select the desired columns. Then activate the Export DataSource.

The Xtract IS DeltaQ component has two outputs: Data and protocol, therefore we use 2 OLE DB destinations. Now execute the package.

The data are successfully extracted from SAP BW/BI and saved in the SQL server.

***********

#### Related Links ####

[Xtract IS product info](https://theobald-software.com/en/xtract-is-productinfo.html) <br>
[Xtract IS OnlineHelp](https://help.theobald-software.com/en/xtract-is/) <br>
[SAP BW help](http://help.sap.com/saphelp_nw70/helpdata/en/4e/4a75b87fe211d4b2c50050da4c74dc/frameset.htm) <br>