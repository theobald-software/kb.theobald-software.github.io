---
layout: page
title: Transaction Record & Execute feature 
description: Transaction Record & Execute feature 
permalink: /:collection/:path
weight: 3
---

A new feature for transaction recording has recently been released for our cloud connector ECS Core.
The capabilities of the feature are explained in this blog article and demonstrated with two videos, the first showing the basic functionality of 
the feature and the second showing a real-life integration scenario for journal entry creation in SAP.

**ECS Core SAP integration approach**

With ECS Core, you can choose which integration approach is most suitable for your solution and your environment. Customers benefit from the ability to combine different integration approaches, all within one solution.

ECS Core comes with a tool called the WebService Designer that allows you to create REST web services for the different SAP integration approaches.
- **API integration:** Until now it was possible with the WebService Designer to address so-called function modules or BAPIs in SAP, which is what we call “API integration”. This approach made it possible to extract data from and write data to SAP, but required some knowledge from the service architect about the SAP functions and their configuration. API integration provides a very reliable and well-defined way of connecting to SAP functionality.
- **Table Query Integration:** Furthermore, the access of SAP tables was supported, which is what we call “Table Query Integration”. With this approach SAP table data could be queried and returned with a web service. While Table Query integration is read-only, it provides a performant way to read an SAP data set, e.g. in use cases where a drop-down list on a form needs to be populated with SAP values.
- **UI integration:** Now there is a third approach we summarize under “UI integration”. This is the new “Transaction Record & Execute” feature.

With this option, transactional processes in SAP can be recorded and then configured and executed as a web service. This approach is very helpful if there is no standard function in SAP available f
or API integration, or if a standard function in SAP is not very well documented and therefore difficult to configure. With UI integration, virtually any transaction screen in SAP can be accessed through a standard web service.

**How does the feature work?**

Recording a transaction and configuring the resulting web service is easy. Just drag and drop the action to the WebService Designer canvas and enter the requested SAP transaction code. 
The SAP GUI will automatically open and you can start navigating through the process. After the process is finished (usually by clicking the save button), the application closes, and you find yourself again in the 
WebService Designer. There the recorded transaction can be configured and mapped to parameters that work as input fields for the end-users later.

See how easy this is:

 <iframe width="560" height="315"
src="https://www.youtube.com/embed/A5sELnaxnD8"
frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

**Practical example**

In practice there are numerous use cases where the transaction recorder feature can add some value. In the depicted example we demonstrate, how transaction recording can be used for journal entry creation in SAP.
Journal entries are a term from the SAP FI module and represent debit and credit postings in the General Ledger. A practical example we used for demo purposes here, are so called “petty cash” transactions denoting small amounts of cash to cover minor expenditures such as transportation costs.

Such petty cash postings and journal entries in general are handled in SAP through transaction code FB50, if a document shall be posted right away, or transaction FBV0 respectively, if the journal entry shall be “parked” first for further review.

In our example we record these transactions and embed the resulting web service in Microsoft Power Automate as a custom connector. The workflow is triggered through a SharePoint Online list, where the journal entries are created as list items and then routed for approval. Have a look at the following video where the scenario is demonstrated and explained:

 <iframe width="560" height="315"
src="https://www.youtube.com/embed/vXjYmYgiazI"
frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>