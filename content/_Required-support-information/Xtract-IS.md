---
layout: page
title: Using Xtract IS
description: Using Xtract IS
weight: 2
permalink: /:collection/:path
---

Should you encounter a problem or error when using our software, please submit a support ticket via our [ticket system]( https://support.theobald-software.com/helpdesk) . 
Please make sure to provide as much information as possible in order for the Theobald Software support team to understand and analyze the issue you are facing. Any screenshots, SSIS logs, the version of Xtract IS and your SAP system, etc. are helpful.


---

## Mandatory

The following information is required to process a support ticket. Please do always provide the **complete** SSIS log. An excerpt will not do.

### SSIS Log within Visual Studio/SSDT

When executing an SSIS package in Visual Studio/SSDT, please copy the content of the *Output* window into a text file (CTRL + A/C/V) and attach the file to the ticket.

![XIS-Support](/img/contents/xis_view_output.png){:class="img-responsive"}

![XIS-Support](/img/contents/xis_output.png){:class="img-responsive"}

### SSIS Log/Report in SSIS

- Open *Integration Services Catalog* (1)
- Right click on the package (2)
- Select *Reports* -> *Standard Reports* -> *All Executions* (3)
- Go to View Overview and View Messages (4)
- Right click on the canvas -> Export -> Excel (5)
- Attach the Excel file to the ticket

![XIS-Support](/img/contents/excel-export-ssdt.png){:class="img-responsive"} 

![XIS-Support](/img/contents/export_excel_ssdt.png){:class="img-responsive"} 

---

## Optional

The following information is optional and can be requested by the support consultant. Please do always provide the **complete** log (an excerpt will not do).

### Trace files 

- Activate the trace function , see [knowledge-base article](https://kb.theobald-software.com/general/how-to-activate-tracing-for-xtract-products) 
 
### Installation Log

- Run *installXtractIS.exe* in the Xtract IS installation directory
- Got to *Edit* - *Select All*
- Select *Copy*
- The content will be copied to the clipboard. Please paste and save to a text file (*Ctrl + V*)
- Attach the file to the ticket.

![Installation-log](/img/contents/installXISexe.png){:class="img-responsive"}

### Version of Xtract IS without log

- Double click on any Xtract IS component
- XtractIS Info -> Version History -> Xtract IS Main Product -> copy to a text file or make a screenshot
![XIS-Version](/img/contents/xis_version_ohne_log.png){:class="img-responsive"}
 
### Version of Visual Studio (VS) or SSDT

- call *Help* -> *About Microsoft Visual Studio* 
- save the data as a text file via *Copy Info* 

![SSDT-Version](/img/contents/vs_hepl_about.png){:class="img-responsive"}

![SSDT-Version](/img/contents/vs_version_anleitung.png){:class="img-responsive"}
 

