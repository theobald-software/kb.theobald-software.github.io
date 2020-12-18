---
layout: page
title: Slowly Changing Dimensions in SSIS
description: Slowly Changing Dimensions in SSIS
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

One of the main problems extracting SAP Tables is, that the incoming data is already existing in the destination table. In this case a check is needed to decide what to do with the data. With the Data Flow Transformation "*Slowly Changing Dimension*", the possibility is given to set Changing Types and to change the data regarding to the Changing Types.

The KNA1 is the customer table in SAP and going to be extracted into the destination table. An initial load of the destination table is needed to start this sample to have the SAP System and the SQL Server at the same level. Later on some data of a customer in SAP is changed and one is added, to have different incoming data as the existing ones.

A new created package with the needed Connection Manager and a Data Flow Task is the base for this sample to build up a "*Slowly Changing Dimension*". The Xtract IS Table Component is set up in the Data Flow Task to extract the Table KNA1. The Output of the Xtract IS Table Component is connected with the input of the *Slowly Changing Dimension* Transformation.

A Double Click on the "*Slowly Changing Dimension*" starts the Wizard. The first screen is not so necessary and skipped with the next button.

The next screen of the Wizard is to select the destination table and to map the fields of the incoming table with the corresponding fields of the destination table. The definition of the Key Columns is also made here.

The field "KUNNR" (AccountNo) is defined as a Key Column (see screenshot).

![SCD03](/img/contents/SCD03.jpg){:class="img-responsive"}

For each column a definition of the Changing Type is needed. Changing Attribute is the right choice for this sample. Changing Attribute is used to overwrite existing data. The "*Slowly Changing Dimension*" Transformation checks if the incoming record is existing in the table. If so, the defined fields (see screenshot below) are overwritten with the new data. If not, the new record set is inserted in the destination table.

All the fields are going to be checked for any changing:

![Scd1](/img/contents/Scd1.jpg){:class="img-responsive"}

In the next dialog of the Wizard the checkbox has to be checked to Changing Attribute. This is to instruct the component to overwrite the data if different data arrives as it was in the fields.

The next screens can be skipped, let them at the default values and finish the wizard. The "*Slowly Changing Dimension*" Transformation Wizard creates then the following Data Flow:

![Scd2](/img/contents/Scd2.jpg){:class="img-responsive"}

To see the effect of the "*Slowly Changing Dimension*" Transformation in this sample, a customer needs to be changed and one new customer is needed to be created in SAP.

After this is made and the package is started, 2 rows are the result. One is the Changing Attributes Update Output, the Record set updated in SAP. The other record set is the new created customer on SAP as a New Row.

![Scd4](/img/contents/Scd4.jpg){:class="img-responsive"}

There are more changing Attributes, please have a look here:

[http://msdn.microsoft.com/en-us/library/ms141715.aspx](http://msdn.microsoft.com/en-us/library/ms141715.aspx)
