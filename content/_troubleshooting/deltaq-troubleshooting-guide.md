---
layout: page
title: DeltaQ Troubleshooting Guide
description: DeltaQ Troubleshooting Guide
permalink: /:collection/:path
weight: 23
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This document is a collection of possible problems, pitfalls and common problems when setting up or running DeltaQ. It is based on common errors reported to us in support cases and will be extended on a regular basis.

## Errors during DeltaQ extraction
**I get entries in the extraction log like *No progress for n seconds, but data is not complete yet. Waiting...* which eventually result in a timeout**

This happens, when the extraction job on the SAP side is finished (SM37) but IDocs and/or tRFC data packages got stuck on the SAP side or were sent to a different RFC destination. Here is a list of possible reasons:

* You are running DeltaQ extractions on the same RFC destination in parallel. Go to transaction SMQS and increase the *Max.Conn.* value to at least 10. With single DeltaQ extractions, that value should be at least 2.
* If only data packages are coming through but no IDocs, please go to transaction WE20, select your RFC destination (under *Partner Type LS*), double click on *RSINFO* and *RSSEND* and change the output mode to *Transfer IDoc Immed.*.
* Another reason could be, that you are running DeltaQ extractions on the same RFC destination (e.g. XTRACT01) in parallel from different computers. In this case IDocs and data packages are sent to the wrong computer.
* The gateway host / gateway service settings in SM59 are not maintained properly. If you have a message server try to insert the message server details there, if not, put in the application server. Check carefully that these settings fit to the entries in the DeltaQ dialog.
* You are running SAP's auxiliary test program called "rfcexec". This program intercepts outgoing IDocs/tRFC calls. Please stop this program.

**I have crippled characters in the output, especially non-latin characters (like Chinese, Czech, etc.)**
* Go to transaction SM59 and change the unicode flag from non-Unicode to Unicode.

**The extraction log is showing a number of  _No job found in SAP_ entries**
* Please go to transaction WE20, select your RFC destination (under *Partner Type LS*) and check the *Part. Status* on the *Classification* tab. The status needs to be *Active*. 

**I get an "Error in Data Selection" from SAP**
* If you use selection values, please check if the values are formatted properly. If this error only happens during delta updates, check if your OLTP source is able to handle delta updates (see transaction RSA2 for details). If this doesn't help, check the log output of the job in transaction SM37.

**During extraction I get an "Not Authorized for XXX" error even though I carefully applied all the authority objects listed in the knowledge base article for authority objects**
* Some extractors add additional authority checks within the extractor that are not foreseeable. So the missing authority objects must be added. 


**SSIS _Project Connection Manager_ vs. _Package Connection Manager_ with parallel DeltaQ extractions**
* When running DeltaQ extractions within one SSIS package in parallel, we recommend using a package connection manager for each DeltaQ component. A single project connection manager may work, as well. 
However, with short interval scheduling and heavy parallelism, dedicated package connection managers will add to extraction stability. 
<br>

## Errors during DeltaQ setup
**When doing the DeltaQ Customizing Step 3 (RSAP_BIW_CONNECT_40 ) you get a PORT_CREATION_ERROR in transaction SE37.**
* Please see this [kb article](https://kb.theobald-software.com/sap/PORT_CREATION_ERROR)


**The customizing check is showing red indicators that are not related to missing authority objects.**
* The steps of customizing a DeltaQ are not done properly in SAP. Start from the beginning and do exactly (!) what is written in the documentation. If an error occurs during a step don't consider the step as done.
* Registration of RFC server program is not allowed on the SAP gateway. Please refer to this [kb article](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher)


**The RFC connection check in SAP transaction SM59 fails** 
* Please see this [kb article](https://kb.theobald-software.com/troubleshooting/sm59-rfc---connection-test-fails)


**Error after SAP system upgrade**
* You get an error message similar to this: *Error while trying to obtain information about source and destination in table RSBASIDOC..Object ERPCLN800 / XTRACT01 inactive*
* Please see our online-help on *Customizing for DeltaQ* and perform step 5 (execute RSAS_RBWBCRL_STORE)

**RFC server test failed:  Error when opening an RFC connection (CPIC-CALL: 'ThSAPOCMINIT', communication rc: CM_ALLOCATE_FAILURE_RETRY (cmRc=2))**
* Please make sure, the RFC server program, e.g. XTRACT01, is allowed to [register on the SAP gateway](https://kb.theobald-software.com/sap/registering-rfc-server-in-sap-releases-in-kernel-release-720-and-higher).

**Error ISOURCE_NOT_EXIST or GENERATION_ERROR when activating a DataSource**
* Please re-run function module RSAS_RBWBCRL_STORE as described in the DeltaQ customizing guide.
