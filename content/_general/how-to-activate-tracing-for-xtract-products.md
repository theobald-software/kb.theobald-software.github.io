---
layout: page
title: How to activate tracing for Xtract Products
description: How to activate tracing for Xtract Products
permalink: /:collection/:path
weight: 3
---


## About
A Theobald Software support technician may request you to record an Xtract trace and send the recorded trace files for further analysis. This article explains what you need to do to record an Xtract trace.

## Required steps to activate tracing

1. Create a new directory on your file system. This is the directory trace files will be written to. Alternatively, use an existing directory and make sure it is empty.
2. Go to the Xtract Connection Manager/SAP source definition in Xtract and enter the path to the trace directory from step 1 in the input field *Trace directory*. See example screenshot below. 

    ![XtractConnectionLog](/img/contents/XtractConnectionLog.png){:class="img-responsive"} 

3. Execute the steps that led to the error message. This could mean running an extraction or pulling extraction meta data in the Xtract component's GUI. 
4. Go to the trace directory and make sure that trace files (xml files and .trc files) were written. 
5. Make sure to delete the entry in Xtract connection's *Trace directory* field after the tracing is not needed anymore. 
6. Zip the **complete** trace folder and send it to the Theobald Software support technician.


<!--
****
#### Related Links

-->
