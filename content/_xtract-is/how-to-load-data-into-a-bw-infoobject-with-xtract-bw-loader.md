---
layout: page
title: How to load data into a BW Infoobject with Xtract BW Loader
description: how-to-load-data-into-a-bw-infoobject-with-xtract-bw-loader
permalink: /:collection/:path
weight: 50
---

The following article shows how to use the Xtract BW Loader component with an InfoPackage to load data into InfoObject Texts.

{: .box-tip }
**Tip:** Xtract BWLoader can load data to InfoPackages that can be forwarded to other SAP BW objects like InfoObject attributes, hierarchies or InfoCubes.

### Creating an InfoObject

In the depicted example an InfoObject ZCUSTOMER. <br>
If you have already an InfoObject, skip to [Setup in SAP](#setup-in-sap).

1. Create an InfoObject using transaction RSA1.<br>
![data-into-a-bw_01](/img/contents/xis/data-into-a-bw_01.jpg){:class="img-responsive"}
2. Set a name, e.g.s ZCUSTOMER.<br>
![data-into-a-bw_02](/img/contents/xis/data-into-a-bw_02.jpg){:class="img-responsive"}
3. Set data type and length.<br>
![data-into-a-bw_03](/img/contents/xis/data-into-a-bw_03.jpg){:class="img-responsive"}
4. On the Master data/texts tab select the following options.<br>
![data-into-a-bw_04](/img/contents/xis/data-into-a-bw_04.jpg){:class="img-responsive"}

### Setup in SAP 

#### RFC Destination

Create an RFC Destination (XTRACT 01) using transaction SM59. <br>
![data-into-a-bw_05](/img/contents/xis/data-into-a-bw_05.jpg){:class="img-responsive"}

#### InfoSource

1. Create an InfoSource 3.x.<br>
![data-into-a-bw_06](/img/contents/xis/data-into-a-bw_06.jpg){:class="img-responsive"}
2. Select the option **[Direct Update of Master Data]** and select the InfoObject ZCUSTOMER.<br>
![data-into-a-bw_07](/img/contents/xis/data-into-a-bw_07.jpg){:class="img-responsive"}
3. Create the transfer rules for ZCUSTOMER.<br>
![data-into-a-bw_09](/img/contents/xis/data-into-a-bw_09.jpg){:class="img-responsive"}
4. Select the Source System XTRACT01.
![data-into-a-bw_10](/img/contents/xis/data-into-a-bw_10.jpg){:class="img-responsive"}
5. Click **[Save]**. <br>
![data-into-a-bw_11](/img/contents/xis/data-into-a-bw_11.jpg){:class="img-responsive"}

#### InfoPackage

1. Create an InfoPackage.<br>
![data-into-a-bw_13](/img/contents/xis/data-into-a-bw_13.jpg){:class="img-responsive"}
2. Enter the description, select the Destination and click **[Save]**.
![data-into-a-bw_14](/img/contents/xis/data-into-a-bw_14.jpg){:class="img-responsive"}
3. In the tab "Schedule", select **[Start later in Background]** and click **[Scheduling options] > [immediate]**.
![data-into-a-bw_15](/img/contents/xis/data-into-a-bw_15.jpg){:class="img-responsive"}
4. Click **[Save]**. <br>
![data-into-a-bw_16](/img/contents/xis/data-into-a-bw_16.jpg){:class="img-responsive"}


### Setup in Xtract IS

1. Create a data flow task and [define an SAP connection](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager).
2. Optional: add an OLE DB Source for the SQL table to the workflow.
The following SQL table is used as input for the InfoObject:<br>
![data-into-a-bw_17](/img/contents/xis/data-into-a-bw_17.jpg){:class="img-responsive"}
![data-into-a-bw_18](/img/contents/xis/data-into-a-bw_18.jpg){:class="img-responsive"}
3. Add an Xtract BW Loader component to the workflow.<br>
![data-into-a-bw_19](/img/contents/xis/data-into-a-bw_19.jpg){:class="img-responsive"}
4. Look up InfoObject ZCUSTOMER.<br>
![data-into-a-bw_20](/img/contents/xis/data-into-a-bw_20.jpg){:class="img-responsive"}
5. Map pipeline elements to the InfoObject fields.<br>
![data-into-a-bw_21](/img/contents/xis/data-into-a-bw_21.jpg){:class="img-responsive"}
6. Execute the data flow in SSIS.<br>
![data-into-a-bw_22](/img/contents/xis/data-into-a-bw_22.jpg){:class="img-responsive"}
7. Check the log in SAP.<br>
![data-into-a-bw_23](/img/contents/xis/data-into-a-bw_23.jpg){:class="img-responsive"}
8. Check the content of the InfoObject ZCUSTOMER. <br>
![data-into-a-bw_24](/img/contents/xis/data-into-a-bw_24.jpg){:class="img-responsive"}

*****

##### Related Links 
- [Xtract BW Loader](https://help.theobald-software.com/en/xtract-is/bw-loader) 

