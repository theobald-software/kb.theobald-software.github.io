---
layout: page
title: DeltaQ Troubleshooting Guide
description: DeltaQ Troubleshooting Guide
permalink: /:collection/:path
homepage-weight: 8
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This document is a collection of possible problems, pitfalls and common problems when setting up or running DeltaQ. It is based on lots of support cases and will be extended on a regular basis.

 

**I have crippled characters in the output, especially non-latin characters (like Chinese, Czech, etc.)**

Go to transaction SM59 and change the unicode flag from non-Unicode to Unicode.

 

**The customizing check is showing red indicators that are not related to missing authority objects.**

The steps of customizing a DeltaQ are not done properly in SAP. Start from the beginning and do exactly (!) what is written in the documentation. If an error occurs during a step don't consider the step as done.

 

**The customizing check is completely green but during extraction no messages and no data packages are received from SAP. I can find red entries in transaction SM58 OR red IDocs in transaction WE02.**

The gateway host / gateway service settings in SM59 are not maintained properly. If you have a message server try to insert the message server details there, if not, put in the application server. Check carefully that these settings fit to the entries in the DeltaQ dialog.

 

**I have strange errors in general that happen sometimes for no good reason.**

First step is always to download the latest Xtract version. Maybe SAP changed something and you need a new version. Even if it is only 2 weeks old. The second step is always to exchange the 32- and 64-Bit version of the librfc32.dll on the system which might be unstable. Please check the knowledge base for download options for stable librfc32.dll versions.

 

**I get an "Error in Data Selection" from SAP**

If you use selection values, please check if the values are formatted properly. If this error only happens during delta updates, check if your OLTP source is able to handle delta updates (see transaction RSA2 for details). If this doesn't help, check the log output of the job in transaction SM37.

 

**During extraction I get an "Not Authorized for XXX" error even though I carefully applied all the authority objects listed in the knowledge base article for authority objects**

Some extractors add additional authority checks within the extractor that are not foreseeable. So the missing authority objects must be added. 

