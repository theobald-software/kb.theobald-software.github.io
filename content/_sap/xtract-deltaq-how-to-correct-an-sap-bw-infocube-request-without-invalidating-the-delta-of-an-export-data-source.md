---
layout: page
title: Xtract DeltaQ – How to correct an SAP BW InfoCube request without invalidating the Delta of an Export Data Source
description: Xtract DeltaQ – How to correct an SAP BW InfoCube request without invalidating the Delta of an Export Data Source
permalink: /:collection/:path
weight: 5
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Scenario**: You have created an Export Data Source on a BW InfoCube. You are using this Data Source to extract the InfoCube content via the Theobald Xtract Delta Q component. As you don’t want to extract the complete InfoCube content every time new data is loaded into the cube, you are extracting the InfoCube data in Delta Update mode


**Question**: I need to delete one or several requests in the InfoCube, for example because incorrect data was loaded into the cube. In what way does this affect the Delta update process of the Xtract Delta Q component and what are the recommended steps to handle this situation?
 

In the following we will go through three steps to simulate this scenario:

1. Preparatory steps for setting up the scenario’s starting point

2. Deleting the erroneous data from the InfoCube and the Xtract destination

3. Loading new (corrected) data into the BW cube and the Xtract destination.

 
**1. Preparatory steps for setting up the scenario’s starting point:**

Let’s go ahead and set up this scenario using SAP’s Demo content. We create an Export Data Source from InfoCube 0D_PU_C01 and load some dummy data into the cube. As you can see, a request with request id 152 is generated loading 990 records into the cube.

![1](/img/contents/1.png){:class="img-responsive"}

Next we create an extraction based on this Export Data Source using Xtract Universal’s (or any other tool of the Xtract family) Delta Q component.

![2](/img/contents/2.png){:class="img-responsive"}

Using this extraction we do an init load of the cube data (Update Mode: C- Delta Initialisation) thereby initializing the Delta process. All 990 records have been successfully extracted by the extraction.

![3](/img/contents/3.png){:class="img-responsive"}

In the InfoCube administration within SAP BW we can see that the cube’s Data Mart status has changed. A little icon in column “Data Mart Status of the Request” is reflecting the extraction we just performed in Xtract Universal.

![4](/img/contents/4.png){:class="img-responsive"}

In the next step we will load another request with request ID 154 and 498 records in total into the BW cube. It is yet missing the little icon in the Data Mart column as the data has not yet been fetched by an Xtract extraction.

![5](/img/contents/5.png){:class="img-responsive"}

We’ll do another extraction in Theobald Xtract, but this time we’ll switch the update mode to “D - Delta Update”.

![6](/img/contents/6.png){:class="img-responsive"}

All 498 records get extracted successfully. 

![7](/img/contents/7.png){:class="img-responsive"}

The Data Mart status in the SAP InfoCube changes again (notice the little icon in the Data Mart column of request 154).

![8](/img/contents/8.png){:class="img-responsive"}

We have finished the setup of the starting point of our scenario. Let’s proceed to deleting requests from the BW InfoCube.


**2. Deleting the erroneous data from the InfoCube and the Xtract destination**

In the following we’ll show how to proceed in case you need to delete a request from the InfoCube, say because you realize that for some reason incorrect data has been loaded into the cube.

Let’s start by first taking a look at table RSDMDELTA. We can see that InfoCube requests 152 and 154 have been loaded to the XTRACT01 destination through requests REQU_XTRACTIS_20141124111328 and REQU_XTRACTIS_20141124113241.

![9](/img/contents/9.png){:class="img-responsive"}

Of course those requests can be found in the Xtract destination as well (we used Xtract Universal’s MSSQL destination). 

![10](/img/contents/10.png){:class="img-responsive"}

In the next step we’ll delete request 154 from the BW InfoCube. However, before doing so we need to reset the delta management for this request. This is necessary, as the data or rather the request we intend to delete, has already been written into our Xtract data target.

The reset is done by clicking on the button with that little Data Mart icon in the InfoCube administration

![11](/img/contents/11.png){:class="img-responsive"}

![12](/img/contents/12.png){:class="img-responsive"}

When resetting the delta management, we get a warning message, saying that request 154 has been written into target system XTRACT01. In order to avoid a data discrepancy between the BW InfoCube and the Xtract destination, that very same request needs to be delete from our MSSQL table as well. 

![13](/img/contents/13.png){:class="img-responsive"}

![14](/img/contents/14.png){:class="img-responsive"}

Finally we can delete the request.

![15](/img/contents/15.png){:class="img-responsive"}

Only request 152 is left.

![16](/img/contents/16.png){:class="img-responsive"}

**3. Loading new (corrected) data into the BW cube and the Xtract destination.**

So now that we have deleted the erroneous request from the BW InfoCube we have loaded a new request (Request ID 157) with corrected data into our Cube.

![17](/img/contents/17.png){:class="img-responsive"}

Once the request has been loaded to the BW Cube, we can further extract it to our Xtract destination using update type D (Delta upload).

![18](/img/contents/18.png){:class="img-responsive"}

NOTE: The extraction runs in Delta update mode. There is no necessity of re-initializing the Delta. 

![19](/img/contents/19.png){:class="img-responsive"}

As a result we can see, that request 157 has been marked as updated to Data Mart. 

![20](/img/contents/20.png){:class="img-responsive"}

The request is visible in the data target.

![21](/img/contents/21.png){:class="img-responsive"}

Table RSDMDELTA has been updated as well.

![22](/img/contents/22.png){:class="img-responsive"}
