---
layout: page
title: Delta Mechanism of TableCDC
description: Delta Mechanism of TableCDC
permalink: /:collection/:path
weight: 15
progressstate: 5
---

The following article illustrates the process of delta table extractions using the TableCDC component.

### Table CDC Process

The depicted graphic illustrates the processes in both the Xtract product and in SAP.
Open the graphic in a new tab to zoom in.

![Report-Workflow](/img/contents/tablecdc-process.png){:class="img-responsive"}

The delta mechanism of TableCDC includes the following processes:
- lookup process to read SAP metadata for the definition of the TableCDC extraction.
- CDC watch process to create and start tracking the TableCDC log table in SAP.
- synchronize data process to run the TableCDC extractions regularly.


{: .box-tip }
**Tip:** Use the SAP transaction DB02 to view all triggers of TableCDC log tables in SAP. 

