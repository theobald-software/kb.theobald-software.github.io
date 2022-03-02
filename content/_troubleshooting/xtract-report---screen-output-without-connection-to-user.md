---
layout: page
title: Xtract Report - Screen output without connection to user
description: Xtract Report - Screen output without connection to user
permalink: /:collection/:path
weight: 3
---

This article describes common error messages and how to handle them when working with the Xtract Report component of Theobald products.

### Screen Output Error

When trying to run the preview in the Xtract Report component, the following Exception occurs: <br> 
*Screen output without connection to user:*

#### Reason

There are reports that try to show a screen output e.g., another dynpro. 
This is not possible when running reports in RFC, because no SAP GUI is involved. 

#### Solution

Running the report in the background suppresses screen outputs and redirects the output from the Report to the spool. 
Xtract Report fetches the data from the spool of SAP without any additional settings.

To run a report in background mode, activate the option "Use Batch" in the settings of your Xtract product as shown in the following screenshot:

![UseBatch](/img/contents/UseBatch.png){:class="img-responsive"}

{: .box-note }
**Note:** This solution is only applicable if the pop up dynpro is only for information purposes. 
If the dynpro is awaiting any input, this report is not compatible with our product and cannot be executed. 

### SAP GUI Error

When trying to run the preview in the Xtract Report component, the following Exception occurs: <br> 
*RfcListen failed(RFC_INVALID_HANDLE) (RFC_ERROR_SYSTEM_FAILURE) Exception condition "CNTL_ERROR" triggered.*

#### Reason

There are ABAP reports that expect an installed SAP GUI. 
The error occurs when calling such a report from a remote machine without an installed SAP GUI. 

#### Solution

Activate the option *Use SAPGUI* in the connection settings of your Xtract product.
In Xtract IS, set the *AttachesSapGui* property of the Connection Manager to *True*.

![xu-sap-gui-option](/img/contents/xu-sap-gui-option.png){:class="img-responsive"}
