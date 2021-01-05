---
layout: page
title: Uploading CATS data by using Xtract IS BAPI
description: uploading-cats-data-by-using-xtract-is-bapi
permalink: /:collection/:path
weight: 110
---

### Content ###

This article shows, how to upload CATS data from a SQL server table by using SSIS and [Xtract IS BAPI](https://help.theobald-software.com/en/xtract-is/bapi).

### Introduction ###

For creating Time Sheet entries in SAP, we use BAPI_CATIMESHEETMGR_INSERT. The important input fields are PROFILE and TESTRUN (import parameters) and table CATSRECORDS_IN. The results will be available in tables CATSRECORDS_OUT and RETURN. <br>
The RETURN table contains different types of messages, for example warning, information, error etc. If the input records do not have any errors, then the table CATSRECORDS_OUT will be populated with the same number of input records, otherwise it will not contain any entries. <br>

{: .box-note }
**Note:** When we post records using this BAPI, it is to be noted that only records that do not contain errors are posted. If an error occurs during posting, none of the data – including records that do not contain errors – is posted. Therefeore it is advisable to include only a small number of records in each posting.

For example, let us populate 10 entries to CATSRECORDS_IN and execute the BAPI.

If there is no error then CATSRECORDS_OUT will contain 10 entries.

If two entries have errors, then CATSRECORDS_OUT will be empty, but we can identify the erroneous entries with the help of RETURN table. <br> 
The erroneous entries can be easily identified with the ROW fields of table RETURN. If the second and third entries have errors then the ROW of table RETURN will be populated as 2 and 3.

By using Xtract IS BAPI, with the help of three SQL tables, we can fill the input details and read the output tables.

The three tables, to be created in SQL database are for CATSRECORD_IN and for CATSRECORD_OUT and RETURN. We need to fill the import parameters PROFILE with an appropriate value and TESTRUN as SPACE too.

Here is an overview of the data flow task.
![CATS-Bapi_01](/img/contents/xis/CATS-Bapi_01.jpg){:class="img-responsive"}

### Step-by-step explanation ###

**Step 1: Prepare input Table in SQL Databse**
<br>
Create a SQL table for CATSRECORDS_IN with the following fields:

Table Name: BAPICATSINPUT
![CATS-Bapi_02](/img/contents/xis/CATS-Bapi_02.jpg){:class="img-responsive"}

Fill the table with sample data:
![CATS-Bapi_03](/img/contents/xis/CATS-Bapi_03.jpg){:class="img-responsive"}

**Step 2: Create Xtract IS BAPI Component**

For creating the Xtract IS BAPI component, we need to create the data flow task and necessary OLE DB and XTRACT connections.

After this, create an OLE DB Source and map it with the already created BAPICATSINPUT table.

Then create the BAPI component and assign the BAPI BAPI_CATIMESHEETMGR_INSERT .

For example, let us provide the PROFILE "TEST" and TESTRUN "SPACE"" as import parameters. We should map the input type of CATSRECORD_IN as "Pipeline" and also the output type of CATSRECORD_OUT and RETURN as "Pipeline".
![CATS-Bapi_04](/img/contents/xis/CATS-Bapi_04.jpg){:class="img-responsive"}
![CATS-Bapi_05](/img/contents/xis/CATS-Bapi_05.jpg){:class="img-responsive"}

Then map corresponding fields of CATSRECORD_IN with the fields of SQL table BAPICATSINPUT.

![CATS-Bapi_06](/img/contents/xis/CATS-Bapi_06.jpg){:class="img-responsive"}
![CATS-Bapi_07](/img/contents/xis/CATS-Bapi_07.jpg){:class="img-responsive"}
![CATS-Bapi_08](/img/contents/xis/CATS-Bapi_08.jpg){:class="img-responsive"}

**Step3: Prepare the output tables in the SQL Database:**

Create two OLE DB destinations for CATSRECORDS_OUT and RETURN tables of the BAPI.

Let us create BAPICATSRETURN and BAPICATSOUT tables for these OLE DB destinations and map the corresponding fields.

BAPICATSRETURN:
![CATS-Bapi_09](/img/contents/xis/CATS-Bapi_09.jpg){:class="img-responsive"}

![CATS-Bapi_10](/img/contents/xis/CATS-Bapi_10.jpg){:class="img-responsive"}

BAPICATSOUTPUT:
![CATS-Bapi_11](/img/contents/xis/CATS-Bapi_11.jpg){:class="img-responsive"}

![CATS-Bapi_12](/img/contents/xis/CATS-Bapi_12.jpg){:class="img-responsive"}

**Step 4: Execute the application**

Now that the design is finished let us execute the application.

The output will be as follows.
![CATS-Bapi_13](/img/contents/xis/CATS-Bapi_13.jpg){:class="img-responsive"}
From the above diagram, we would be able to see that for n number of records of CATSRECORDS_IN, there is exactly the same number of records in CATSRECORDS_OUT. So the data has been updated successfully.

Now let us check the SQL tables BAPICATSOUTPUT and BAPICATSRETURN. 

BAPICATSOUTPUT:
![CATS-Bapi_14](/img/contents/xis/CATS-Bapi_14.jpg){:class="img-responsive"}

BAPICATSRETURN:
![CATS-Bapi_15](/img/contents/xis/CATS-Bapi_15.jpg){:class="img-responsive"}

There is only an information message. 

**Step 5: Check the output and identify errors**

Now let us check the SAP transaction CAT3 (Time Sheet: Display Times)

We have to provide PROFILE, WORKDATE and EMPLOYEENUMBER.
![CATS-Bapi_16](/img/contents/xis/CATS-Bapi_16.jpg){:class="img-responsive"}
![CATS-Bapi_17](/img/contents/xis/CATS-Bapi_17.jpg){:class="img-responsive"}
![CATS-Bapi_18](/img/contents/xis/CATS-Bapi_18.jpg){:class="img-responsive"}
![CATS-Bapi_19](/img/contents/xis/CATS-Bapi_19.jpg){:class="img-responsive"}
![CATS-Bapi_20](/img/contents/xis/CATS-Bapi_20.jpg){:class="img-responsive"}

Let us now execute entries with errors.

Populate the table CATSRECORDS_IN with the following entries.
![CATS-Bapi_21](/img/contents/xis/CATS-Bapi_21.jpg){:class="img-responsive"}

Here the Attendance or Absence Type is 0005 instead of 0001 for the second and fourth entries. Let us check the output now.
![CATS-Bapi_22](/img/contents/xis/CATS-Bapi_22.jpg){:class="img-responsive"}

Here the CATSRECORDS_OUT does not have any entries. So it is clear that data is not updated.

Let us query the table RETURN to identify the error.

By checking the ROW numbers we can easily identify the erroneous records. From the message, it is clear that the attendance/absence type (0005) is not maintained.
![CATS-Bapi_23](/img/contents/xis/CATS-Bapi_23.jpg){:class="img-responsive"}

***********

#### References ####

[Xtract IS](https://theobald-software.com/en/xtract-is/) - product information <br>
[Xtract IS](https://help.theobald-software.com/en/xtract-is/) - OnlineHelp <br>
[Xtract IS](https://help.theobald-software.com/en/xtract-is/bapi) - BAPI component help section<br>
