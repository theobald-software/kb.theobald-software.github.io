---
layout: page
title: ODP based Delta Extraction of Sales and Customer Data from an SAP ERP System 
description: Test
permalink: /:collection/:path
weight: 180
---

This article shows how to use the Xtract ODP component of Xtract for Alteryx to load sales documents and customer master data from an SAP ERP system.<br>
You can download the Alteryx workflow for this application in the [Alteryx Community - Gallery title and link here]().

| SAP System | SAP Objects | Xtract for Alteryx Component |
| :------ |:--- | :--- |
| SAP ERP | BW Extractors: <br>2LIS_11_VAITM (Sales Document Item Data) <br>0CUSTOMER_ATTR (Customer Master Data) | Xtract ODP |

### About this Workflow

This workflow uses the Xtract ODP component of the 'Xtract for Alteryx' connector to load the following objects from an SAP ERP system: 
- sales documents (transaction data)
- customer master data
The sales documents only include data that was added or altered after the last run of the workflow (delta load). The data is then combined, cleaned, and prepared for further analysis.


This article leads you through all necessary steps to set up the following workflow:

When an account in the Sales Console of Salesforce is modified, a Power Automate workflow is triggered.
The workflow checks if the type of the account is set to Customer - Direct and if the customer exists in SAP.
If both conditions are true, a yunIO service that writes customer data from Salesforce to SAP is executed.
Once the customer is created in SAP, the newly created SAP customer number is written back to the Salesforce sales account

### Delta Extraction of Sales Documents

### Extraction of Customer Master Data

### Processing Extracted Data