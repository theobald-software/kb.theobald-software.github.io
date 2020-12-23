---
layout: page
title: How to load data into a BW Infoobject with Xtract BW Loader
description: how-to-load-data-into-a-bw-infoobject-with-xtract-bw-loader
permalink: /:collection/:path
weight: 50
---

**Xtract BW Loader** is one out of the ten components of [Xtract IS](https://theobald-software.com/en/xtract-is/),  the SAP Connector for the SQL Server Integration Services (SSIS) by Theobald Software.

BW Loader allows to load data to SAP BW objects using an InfoPackage (refer to [SAP help](http://help.sap.com/saphelp_nw04/helpdata/en/2e/20d704d45be7458582cdfcc5487090/frameset.htm) to know more about InfoPackages).

In this article I will show you how to use BW Loader in conjunction with an Infopackage to load data into  InfoObject Texts. <br> You can use BW Loader in conjunction with other Infopackages too, to load data to other BW objects, like InfoObject attributes, hierarchies or InfoCubes.

In this scenario I have created the InfoObject ZCUSTOMER with the following settings. If you have already an InfoObject you can skip to **[STEP 1](https://kb.theobald-software.com/xtract-is/how-to-load-data-into-a-bw-infoobject-with-xtract-bw-loader#step-1-create-an-rfc-destination)**.

Create an InfoObject (using transaction code RSA1).
![data-into-a-bw_01](/img/contents/xis/data-into-a-bw_01.jpg){:class="img-responsive"}

Set a name (e.g. ZCUSTOMER).
![data-into-a-bw_02](/img/contents/xis/data-into-a-bw_02.jpg){:class="img-responsive"}

Set data type and length.
![data-into-a-bw_03](/img/contents/xis/data-into-a-bw_03.jpg){:class="img-responsive"}


On the Master data/texts tab select the following options.
![data-into-a-bw_04](/img/contents/xis/data-into-a-bw_04.jpg){:class="img-responsive"}

### **Step 1:** Create an RFC Destination ###

Create an RFC Destination XTRACT 01 using the transaction code SM59 (for more information refer to [SAP help](http://help.sap.com/saphelp_nw04/helpdata/en/2e/20d704d45be7458582cdfcc5487090/frameset.htm)).
![data-into-a-bw_05](/img/contents/xis/data-into-a-bw_05.jpg){:class="img-responsive"}

### **Step 2:** Create an InfoSource 3.x ###
<br>
Create an IfoSource 3.x (for more information refer to [SAP help](http://help.sap.com/saphelp_nw04/helpdata/en/2e/20d704d45be7458582cdfcc5487090/frameset.htm)).
![data-into-a-bw_06](/img/contents/xis/data-into-a-bw_06.jpg){:class="img-responsive"}

Set the option "Direct Update of Master Data" und select the InfoObject ZCUSTOMER.
![data-into-a-bw_07](/img/contents/xis/data-into-a-bw_07.jpg){:class="img-responsive"}

Confirm the message.
![data-into-a-bw_08](/img/contents/xis/data-into-a-bw_08.jpg){:class="img-responsive"}

### **Step 3:** Create Transfer Rules ###

Now create the transfer rules (for more information refer to [SAP help](http://help.sap.com/saphelp_nw04/helpdata/en/2e/20d704d45be7458582cdfcc5487090/frameset.htm)).
![data-into-a-bw_09](/img/contents/xis/data-into-a-bw_09.jpg){:class="img-responsive"}

Select the Source System XTRACT01.
![data-into-a-bw_10](/img/contents/xis/data-into-a-bw_10.jpg){:class="img-responsive"}

Confirm the message.
![data-into-a-bw_11](/img/contents/xis/data-into-a-bw_11.jpg){:class="img-responsive"}

Click on the save button.
![data-into-a-bw_12](/img/contents/xis/data-into-a-bw_12.jpg){:class="img-responsive"}

### **Step 4:** Create an InfoPackage ###

Create an InfoPackage.
![data-into-a-bw_13](/img/contents/xis/data-into-a-bw_13.jpg){:class="img-responsive"}

Set the description, select the Destination and click on Save.
![data-into-a-bw_14](/img/contents/xis/data-into-a-bw_14.jpg){:class="img-responsive"}

On the tab Schedule, select "Start later in Background", click on Scheduling options, then on immediate and on the save button.
![data-into-a-bw_15](/img/contents/xis/data-into-a-bw_15.jpg){:class="img-responsive"}

Save the InfoPackage.
![data-into-a-bw_16](/img/contents/xis/data-into-a-bw_16.jpg){:class="img-responsive"}

### **Step 5:** Use Xtract BW Loader component ###
<br>
As a source I will use an SQL table with 2 columns definied as following:
![data-into-a-bw_17](/img/contents/xis/data-into-a-bw_17.jpg){:class="img-responsive"}
![data-into-a-bw_18](/img/contents/xis/data-into-a-bw_18.jpg){:class="img-responsive"}

In SSIS create a data flow task, define the connections to the SQL database and to SAP, and add two components: an OLE DB Source for the SQL table and Xtract BW Loader.
![data-into-a-bw_19](/img/contents/xis/data-into-a-bw_19.jpg){:class="img-responsive"}

Define the BW Loader component and map pipeline elements to the InfoObject fields.
![data-into-a-bw_20](/img/contents/xis/data-into-a-bw_20.jpg){:class="img-responsive"}
![data-into-a-bw_21](/img/contents/xis/data-into-a-bw_21.jpg){:class="img-responsive"}

Execute the data flow in SSIS.
![data-into-a-bw_22](/img/contents/xis/data-into-a-bw_22.jpg){:class="img-responsive"}

Check the log in SAP.
![data-into-a-bw_23](/img/contents/xis/data-into-a-bw_23.jpg){:class="img-responsive"}

Check the content of the InfoObject ZCUSTOMER.
![data-into-a-bw_24](/img/contents/xis/data-into-a-bw_24.jpg){:class="img-responsive"}

In this article I showed how to use Xtract BW Loader to load data from an SQL table into SAP BW InfoObject Texts. SSIS allows to use other Sources (e.g. FlatFiles). <br> BWLoader can load data to Infopackages that can be forwarded to other SAP BW objects like InfoObject attributes, hierarchies or InfoCubes.


