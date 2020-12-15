---
layout: page
title: Generate SAP Integration Packages with SSIS and Xtract IS using BIML
description: generate-sap-integration-packages-with-ssis-and-xtract-is-using-biml
permalink: /:collection/:path
weight: 100
---

SQL Server Integration Services (SSIS) is a component of the Microsoft SQL Server database that can be used to perform a broad range of data integration and data extraction, transformation, and loading (ETL) tasks.

Xtract IS is an SAP Integration solution for SSIS that provides all kinds of integration with SAP ERP and SAP BW in a secure and type-safe way with a graphical editor.

Business Intelligence Markup Language (Biml) is a domain-specific XML dialect for defining business intelligence (BI) assets. Biml authored BI assets can currently be used by the BIDS Helper add-on for Microsoft SQL Server Business Intelligence Development Studio (BIDS) and the Varigence Mist integrated development environment; both tools translate Biml metadata into SQL Server Integration Services (SSIS) and SQL Server Analysis Services (SSAS) assets for the Microsoft SQL Server platform. However, emitters can be created to compile Biml for any desired BI platform, see [Wikipedia](https://en.wikipedia.org/wiki/Business_Intelligence_Markup_Language).

In this article I will show you how to use a BIML script to generate an SSIS package that extracts SAP table data using Xtract IS and loads it to an SQL Server.

In the BIML script I will define an SSIS Package (SSIS version 2014) with two connection managers and two tasks:
- An OLE DB connection manager to an existing SQL Database BIMLTest and an Xtract Connection manager to an SAP ERP system.
- An SQL Task to truncate the SQL table and a data flow task.

In the data flow task I will define two components:

- An Xtract Table component to extract three columns from the SAP customer table KNA1 .
- An OLE DB Destination to load the extracted SAP data into the SQL Server table. The table should exist before, refer to the comments in the BIML script.

**Step 1.** Add a new Biml File
![xis-ssis-biml_01](/img/contents/xis/xis-ssis-biml_01.jpg){:class="img-responsive"}

**Step 2.** Write the BIML Script code
![xis-ssis-biml_02](/img/contents/xis/xis-ssis-biml_02.jpg){:class="img-responsive"}

Here you can find the BIML Script Code.
Check the requirements and the comments for more details.
