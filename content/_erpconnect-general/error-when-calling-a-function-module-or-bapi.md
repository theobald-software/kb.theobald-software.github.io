---
layout: page
title: Error when calling a Function Module or BAPI
description: Error when calling a Function Module or BAPI
permalink: /:collection/:path
weight: 13
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

When calling a Function Module (FM) or BAPI no error, or no value is returned.

**Reason:**

This could have many reasons. Here are some of the them:

- No leading zeroes in FM Import Params

- Date Format is wrong

- Missing Parameter

- BAPI needs Commit

- No authoritiy to run FM


**Solution:**

- Please fill in the values with leading zeroes. E.g. MATNR (18 Chars).

  wrong:    424642456

  correct:   000000000424642456

- Date Format must be in the SAP internal Format :

   wrong : 13.01.2014

   correct: 20140113

- Some BAPIs need an Commit after the call to finish the execution of the BAPI:

  You can find an example [here](https://kb.theobald-software.com/erpconnect-samples/post-goods-movement).

- Please check if you have the authority to run this FM. Some FM in SAP return no errormessage after an not successful authority Check.


We recommend also first to run the FM/BAPI in SAP in the T-CODE SE37 to check the needed parameters with the same user as in the .NET Code. But leading zeroes and other formats are not considered in the SE37.
