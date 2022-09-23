---
layout: page
title: Changes in a customer account from an SAP system in realtime.
description: Changes in a customer account from an SAP system in realtime.
permalink: /:collection/:path
weight: 22
---
### About
This article shows how changes to a customer entry in SAP systems can be transferred to Mircosoft CRM Dynamics 365 system in realtime.

### Procedure
Creation of a small CDC (Change Data Capture) program using ERPConnect. 

This application monitors changes to the following SAP tables:
- CDHDR (Change Document Header) 
- CDPOS (Change Document Items)

In the example video below, SAP transaction *VD02 - Change Customer (Sales)* is called and changes are made to customer entries. 

These changes are stored internally in SAP by the above-mentioned SAP standard tables. 

The application written in .NET checks the change entries and automatically adjusts them in Microsoft CRM Dynamics 365.


### Sample Video

<iframe width="640" height="360"
src="https://www.youtube.com/embed/TdNGq8KwFs0"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

****
#### Related Links
- [Download ERPConnect Trial Version](https://theobald-software.com/en/download-trial)
- [ERPConnect Online-help](https://help.theobald-software.com/en/erpconnect/)
- [ERPConnect API](https://help.theobald-software.com/en/erpconnect/misc#erpconnect-api)


