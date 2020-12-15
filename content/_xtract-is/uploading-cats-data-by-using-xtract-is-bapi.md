---
layout: page
title: Uploading CATS data by using Xtract IS BAPI
description: uploading-cats-data-by-using-xtract-is-bapi
permalink: /:collection/:path
weight: 103
---
This article shows, how to upload CATS data from a SQL server table by using SSIS and Xtract IS BAPI.

For creating Time Sheet entries in SAP, we use BAPI_CATIMESHEETMGR_INSERT. The important input fields are PROFILE and TESTRUN (import parameters) and table CATSRECORDS_IN. The results will be available in tables **CATSRECORDS_OUT** and **RETURN**. The RETURN table contains different types of messages, for example warning, information, error etc. **If the input records do not have any errors, then the table CATSRECORDS_OUT will be populated with the same number of input records, otherwise it will not contain any entries.**


