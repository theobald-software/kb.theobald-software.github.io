---
layout: page
title: Merge in a DeltaQ Extraction
description: Merge in a DeltaQ Extraction
permalink: /:collection/:path
weight: 6
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In a Delta Extraction with the Xtract IS DeltaQ Component it is possible to download records that are earlier transfered with a full-update. Since the release of SQL Server 2008 you can use the command called Merge at this point to perform Insert and Update commands easily in one step. In our next example we want to update an updated Customer (TA VD02), which is present in our Database, with the Merge command. We can also use this package to insert a new customer in our table in our Database.

In this sample we work with 2 tables. The first one (Raw) is going to be used to store the values coming from SAP, either to update them later in the next table (Staging) with the merge command, or, if the record is not present, to insert them.

In the first Screenshot we see the whole Control Flow. First we need a "Execute SQL Task". We rename the task to "Empty Raw Table"

![MergeControlFlow](/img/contents/MergeControlFlow.jpg){:class="img-responsive"}

Delete the records in the Raw-Table to be ready for the incoming Data.

![MergeControlFlow2](/img/contents/MergeControlFlow2.jpg){:class="img-responsive"}

The first step is to get the Data out of SAP. Insert a Data-Flow-Task in the Control Flow, as you can see in the Screenshot, and rename it in "Get Delta from Customer". In this task the extraction from SAP is handled by Xtract IS DeltaQ. The changed or new records are inserted in the Raw-Table.

![MergeControlFlow3](/img/contents/MergeControlFlow3.jpg){:class="img-responsive"}

The third and last "Execute SQL Task" contains the merge command. We insert the Data for the connection.

![MergeControlFlow4](/img/contents/MergeControlFlow4.jpg){:class="img-responsive"}

and then the following Merge command in the field SQLStatement.

![MergeControlFlow5](/img/contents/MergeControlFlow5.jpg){:class="img-responsive"}

```
Merge Staging
using  Raw on Staging.KundenNo = Raw.KUNNR

when matched then update
set Staging.Name =  Raw.Name1,    
Staging.City =  Raw.ORT01

when not matched then insert 
(KundenNo,Name,City) 
values(KUNNR,NAME1,ORT01);
```

In SAP we change a record in the transaction VD02. As we can see on the Image, we append two X and save the customer.

![MergeControlFlow6](/img/contents/MergeControlFlow6.jpg){:class="img-responsive"}

In our Staging-Table we have exactly 7706 Records and our customer with the number 0000001172 has no X in this name.

![MergeControlFlow7](/img/contents/MergeControlFlow7.jpg){:class="img-responsive" style="display: inline"}
![MergeControlFlow8](/img/contents/MergeControlFlow8.jpg){:class="img-responsive" style="display: inline"}

We execute the package and see the changed record in the DataViewer.

![MergeControlFlow9](/img/contents/MergeControlFlow9.jpg){:class="img-responsive"}

As we can see in our Staging-Table the count of records has not been changed, only the name is changed.

![MergeControlFlow10](/img/contents/MergeControlFlow10.jpg){:class="img-responsive"}
![MergeControlFlow11](/img/contents/MergeControlFlow11.jpg){:class="img-responsive"}

See also : [http://msdn.microsoft.com/library/cc280522.aspx](http://msdn.microsoft.com/library/cc280522.aspx)