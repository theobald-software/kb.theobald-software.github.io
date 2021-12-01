---
layout: page
title: Migrating from Xtract RS to Xtract Universal (with SSRS destination)
description: Migrating from Xtract RS to Xtract Universal (with SSRS destination)
permalink: /:collection/:path
weight: 53
---

### About
Both Xtract RS and [Xtract Universal with SSRS destination](https://help.theobald-software.com/en/xtract-universal/destinations/server-report-services) enable access from SSRS/PBIRS reports to SAP. Xtract RS will be discontinued in 2022(no further development or support). Xtract Universal acts as a replacement.

This article is intended to make the transition from Xtract RS to Xtract Universal easier by giving a brief explanation about Xtract Universal and by pointing out helpful online resources.

#### Target Audience
Companies currently running Xtract RS.


### Why migrate?
Xtrat Universal has undergone massive developments in the past years. New extraction types, like ODP, have been added. Existing extraction types, like Table, have undergone many improvements.
Xtract Universal is more versatile in a sense that data can be written to various other data targets, besides SSRS.
All future development efforts will take place in Xtract Universal, not Xtract RS.

### Main differences between Xtract RS and Xtract Universal when creating an SSRS report

Both Xtract RS and Xtract Universal add an additional Data Source Type to SSRS.

![SSRS-1](/img/contents/xu/xu_migrating_from_XRS_1.png){:class="img-responsive"}


#### Xtract RS
Xtract RS comes with a single setup which is installed in Visual Studio and on the SSRS server. This adds an additional Data Source Type called *Xtract RS* to SSRS. This lets you specify the connection to an SAP system.
The Data Set's Query Designer lets you specify an SAP extraction, e.g. a Table or ABAP Report extraction.

{: .box-note}
**Note:**  Connection to SAP as well as SAP extractions are created using Visual Studio.

![SSRS-5](/img/contents/xu/xu_migrating_from_XRS_5.png){:class="img-responsive"}

![SSRS-2](/img/contents/xu/xu_migrating_from_XRS_2.png){:class="img-responsive"}


#### Xtract Universal
Xtract Universal with SSRS destination consists of two setups: One setup to install Xtract Universal (XU Designer and Server), a second setup to install the XU SSRS plugin in Visual Studio and on the SSRS server. This adds an additional Data Source Type called *Xtract Universal* to SSRS. This lets you specify a connection to the Xtract Universal server. The XU Designer lets you specify an SAP extraction, e.g. a Table or ABAP Report extraction.

{: .box-note}
**Note:** Connection to SAP as well as SAP extractions are created using the XU Designer. SAP extractions created in XU Designer are called from SSRS Data Sets.

![SSRS-3](/img/contents/xu/xu_migrating_from_XRS_3.png){:class="img-responsive"}
![SSRS-4](/img/contents/xu/xu_migrating_from_XRS_4.png){:class="img-responsive"}
![SSRS-6](/img/contents/xu/xu_migrating_from_XRS_6.png){:class="img-responsive"}


#### Main differences overview

|                  | Data Source in SSRS                   | Data Set Query Designer in SSRS                           |
|------------------|---------------------------------------|-----------------------------------------------------------|
| Xtract RS        | Connection string to SAP                     | Creation of an SAP extraction (Table, Report, etc.)                             |
| Xtract Universal | Connection string to Xtract Universal server | Calling a specific extraction on Xtract Universal server, SAP extraction already created via XU Designer  |



### Migration 
Ideally, only the Data Source needs to be exchanged.

### Online resources on Xtract Universal

#### Online help
- [Introduction to Xtract Universal](https://help.theobald-software.com/en/xtract-universal/introduction) 
- [Getting Started with Xtract Universal](https://help.theobald-software.com/en/xtract-universal/getting-started)
- [Xtract Universal with SSRS destination](https://help.theobald-software.com/en/xtract-universal/destinations/server-report-services)

#### Donwload of Xtract Universal
- [Download page of Theobald Software solutions](https://theobald-software.com/en/download-trial/)




### Xtract Universal License

Migration from Xtract RS to Xtract Universal with SSRS destination is free of charge, provided you have an active maintenance agreement for Xtract RS.  

Please contact [Theobald Software sales team](mailto:sales@theobald-software.com). They will issue a new license file for Xtract Universal.
<br>
For technical questions contact [Theobald Software support team](support@theobald-software.com).






