---
layout: page
title: Foreach Loop Contanier
description: Foreach Loop Contanier
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Sometimes data is stored in master and detail tables. This example shows, how to query data from the master table, loop over the result and fetch the details for each row. We're fetching each material row (master table) before the Date X, then select the item table (storage location data) and insert this data into an existing destination table.

First 2 variables are created in the SSIS-Project that we need later on.

![FEL0](/img/contents/FEL0.jpg){:class="img-responsive"}

The change date (LAEDA) is located in the header table "*MARA*". The item data in the Table "*MARD*". A For each Loop Container is used to process data from both tables.

The first data flow gets all material numbers, which are changed before 2003-01-01.

![FEL00](/img/contents/FEL00.jpg){:class="img-responsive"}

The result of the table MARA is stored in a Record set Destination. A so called In-Memory Dataset. In this dataset you can store material numbers in a table within a variable.

![FEL02](/img/contents/FEL02.jpg){:class="img-responsive"}

A For each Loop Container is needed in the Control Flow to loop over the material numbers which are in the dataset.

![FEL01](/img/contents/FEL01.jpg){:class="img-responsive"}

The For each Loop Container is configured as shown below:

![FEL04](/img/contents/FEL04.jpg){:class="img-responsive"}

...so the material number is written in the variable @MATNR for every row of the loop.

![FEL05](/img/contents/FEL05.jpg){:class="img-responsive"}

In the For each Loop Container, the following data flow will be executed:

![FEL03](/img/contents/FEL03.jpg){:class="img-responsive"}

The Xtract IS Table component contains a where clause where the variable @MATNR is filled by the For each Loop Container. In every loop, the material number which was filtered in the header data, can be found there.

![FEL08](/img/contents/FEL08.jpg){:class="img-responsive"}

If the package is started, the first data flow fills the dataset (which is stored in the variable "@MARA") with the material numbers of the *MARA* table. This variable is used by the For each Container to store the actual material number in the variable @MATNR in every loop. The @MATNR variable is used in the where clause inside the data flow within the container to get the related rows from the table *MARD* and write them into the destination table.

Successful executed package:

![FEL07](/img/contents/FEL07.jpg){:class="img-responsive"}