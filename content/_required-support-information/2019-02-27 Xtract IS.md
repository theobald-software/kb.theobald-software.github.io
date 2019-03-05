---
layout: page
title: Using Xtract IS
description: Using Xtract IS
weight: 2
permalink: /:collection/:path
---

In the event of a problem or error in connection with the use of our software, customers, partners and interested <br>

parties have the opportunity to submit support tickets via our [ticket system]( https://support.theobald-software.com/helpdesk) . 

In order to offer our customers and prospects a competent service, we need the following information about the use of our software and the architecture used in your system landscape.

The most important information about errors or problems is ensured by the transmission of complete logs in text / excel format. <br>

The customer-specific settings can be visualized as screenshots. All of the following information can be determined independently by the user of our Xtract products.


---

## Mandatory

The following information is required to process a support ticket. Transmit entire log and no excerpts.

### SSIS Log within Visual Studio

- for execution from *visual Studio*
- display the *output* of the package via *view*
- *output* save the SSIS log in text file

![XIS-Support](/img/contents/xis_view_output.png){:class="img-responsive"}

![XIS-Support](/img/contents/xis_output.png){:class="img-responsive"}

### SSIS Log within SSDT

- open integration services catalog (1)
- Right click on the package (2)
- report -> standard report -> all execution (3)
- open overview (4)
- view messages
- view context -> right click -> export -> excel (5)

![XIS-Support](/img/contents/excel-export-ssdt.png){:class="img-responsive"} 

![XIS-Support](/img/contents/export_excel_ssdt.png){:class="img-responsive"} 

---

## Optional

This information is optional and can be requested by the technician. Please always send the complete log and no excerpts.

### Trace files 

- activate the trace function , see [knowledge-base article](https://kb.theobald-software.com/general/how-to-activate-tracing-for-xtract-products) 
 
### Installation Log

- run *installXtractIS.exe* in the Xtract IS installation directory
- under *Edit* Tab
- select all (*Ctrl + A*)
- copy (*input*)
- save to a text file (*Ctrl + V*)

![Installation-log](/img/contents/installXISexe.png){:class="img-responsive"}

### Version of Xtract IS without log

- Double-click on the XIS component
- XtractIS Info => Version History => Xtract IS Main Product => Text File Copy

![XIS-Version](/img/contents/xis_version_ohne_log.png){:class="img-responsive"}
 
### Version of Visual Studio (VS) or SSDT

- call *Help* -> *About Microsoft Visual Studio* 
- save the data as a text file via *Copy Info* 

![SSDT-Version](/img/contents/vs_hepl_about.png){:class="img-responsive"}

![SSDT-Version](/img/contents/vs_version_anleitung.png){:class="img-responsive"}
 

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTg2MDMwMTA5MV19
-->