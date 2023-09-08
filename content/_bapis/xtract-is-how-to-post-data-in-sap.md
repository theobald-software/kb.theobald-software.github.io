---
layout: page
title: Xtract IS - How to Post Data in SAP with Xtract BAPI
description: How to Post Data in SAP with Xtract BAPI
permalink: /:collection/:path
weight: 24
---

The following article shows how to use the Xtract BAPI component to post data to SAP.<br>
The depicted example uses the custom function module Z_ECS_PRODUCT_CREATE_MULTI to add new products to SAP.
A table that contains the product information and is stored on an SQL Server is used as input for the function module.


### SAP Function Module
The SAP custom function module Z_ECS_PRODUCT_CREATE_MULTI has a table parameter *T_PRODUCTS* that can be used for input. <br>
The table has the following structure:<br>
![ssis-write-sap-01](/img/contents/ssis-write-sap-01.png){:class="img-responsive" }

### Input Table

The format of an input table must be compatible with the parameters of the function module, see [Online Help: Mapping Input Tables](https://help.theobald-software.com/en/xtract-is/bapi/parameters#mapping-input-tables).<br>
The following table is stored on an SQL Server: 

```
CREATE TABLE [SAP Products] (
    [MANDT] nvarchar(3), 
    [PRODUCTNR] nvarchar(18),
    [DESCTEXT] nvarchar(40),
    [PRODTYPE] nvarchar(4),
    [STOCKQUAN] numeric(18,3),
    [MEINS] nvarchar(3),
    [ERDAT] nvarchar(8),
    [ERZET] nvarchar(6)
)
```

The table has the following content:<br>
![ssis-write-sql-01](/img/contents/ssis-write-sql-01.png){:class="img-responsive" }

### Setup in SSIS

For information on how to use Xtract components, see [Online Help: Getting Started with Xtract IS](https://help.theobald-software.com/en/xtract-is/getting-started).

1. Add a source to your Data Flow Task. In this example, the source is a table stored on an SQL Server.
2. Add the Xtract BAPI component to your Data Flow Task and assign a Connection Manager that contains the connection details to your SAP system. 
For more information, see [Connection Manager](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager).
3. Look up the function module Z_ECS_PRODUCT_CREATE_MULTI.<br>
![ssis-write-xtractis-fuba-01](/img/contents/xis/BAPI-table-input.png){:class="img-responsive" }
4. Connect the source component to the Xtract BAPI component. <br>
The data in the source is automatically mapped to the corresponding table in the Xtract BAPI component.<br>
![ssis-write-xtractis-fuba-02](/img/contents/xis/ssis-write-xtractis-fuba-02.png){:class="img-responsive" }
5. Run the SSIS Package and check the results in SAP.<br>

*****
#### Related Links
- [Online Help: Xtract BAPI](https://help.theobald-software.com/en/xtract-is/bapi)
- [Knowledge Base Article: Uploading CATS data using Xtract BAPI](./xtract-is-uploading-cats-data)