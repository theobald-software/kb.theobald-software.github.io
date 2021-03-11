---
layout: page
title: Using Xtract IS
description: Using Xtract IS
weight: 2
permalink: /:collection/:path
---
Should you encounter a problem or error when using our software, please submit a support ticket via our [ticket system]( https://support.theobald-software.com/helpdesk).<br> 

Please make sure to provide as much information as possible in order for the Theobald Software support team to understand and analyze the issue you are facing e.g.<br>
- Screenshots of the component settings 
- SSIS logs as .txt or .xlsx file format
- Xtract IS version number 
- SAP system release 
- used Visual Studio or SSDT version

### SSIS Log using Visual Studio/SSDT (mandatory)

The following information is required to process a support ticket. Please do always provide the **complete** SSIS-log instead of excerpts.

1. Display the SSIS output windows within VS / SSDT using **View > Output** (1).
![XIS-SupportI](/img/contents/xis_view_output.png){:class="img-responsive"}
2. Execute an SSIS package in Visual Studio/SSDT.
3. Copy the content of the *Output* window into a text file (CTRL + A/C/V) and attach the file to the ticket (2).
![XIS-SupportII](/img/contents/xis_output.png){:class="img-responsive"}

### SSIS Log/Report using SSMS (mandatory)

1. Open *Integration Services Catalog* (3).
2. Right click on the package (4).
3. Select **Reports > Standard Reports > All Executions** (5).
![XIS-Support](/img/contents/excel-export-ssdt.png){:class="img-responsive"}
4. Go to View Overview and View Messages (6).
5. Right click on the canvas **Export > Excel** (7).
![XIS-Support](/img/contents/export_excel_ssdt.png){:class="img-responsive"}
6. Attach the Excel file to the ticket.

### Trace files (optional)

The following information is optional and can be requested by the support consultant. Please do always provide the **complete** SSIS-log instead of excerpts.

- Activate the trace function , see [Trace Directory](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager#trace-directory-2) 
 
### Version of Xtract IS without log (optional)

1. Double click on any Xtract IS component.
2. Click on **XtractIS Info (8) > Version History (9) > Product Tab (10)**.
![XIS-Version](/img/contents/xis_version_ohne_log.png){:class="img-responsive"}
![xis_version_history_window](/img/contents/xis_version_history_window.png){:class="img-responsive"}
3. Copy to a text file or make a screenshot.

### Version of Visual Studio (VS) or SSDT (optional)

1. Open **Help > About Microsoft Visual Studio** (11).
![SSDT-Version](/img/contents/about_ms_visual_studio.png){:class="img-responsive"}
2. Save the data as a text file via **[Copy Info]** (12).
![SSDT-Version](/img/contents/vs_version_anleitung.png){:class="img-responsive"}




 

