---
layout: page
title: How to import an SAP Transport Request
description: How to import an SAP Transport Request with the Transport Management System STMS
permalink: /:collection/:path
weight: 35
---

The following article shows how to import transport requests for custom functions modules that are included in the installation directory of your product, e.g., `C:\Program Files\[XtractProduct]\ABAP`.

<!---
### Upload SAP Transport Requests to SAP Via Transactions

If you have access to the file system of SAP, you can copy and paste the files of your transport request directly into the `data` and `cofiles` folders of your SAP system. <br>
If you don't have access to the file system, follow the steps below to upload the files of your transport request using SAP transactions:

1. Unzip the transport request provided in the installation directory of your product, e.g., `C:\Program Files\[XtractProduct]\ABAP`.
2. Open SAP and go to transaction AL11.
3. Find the entry DIR_TRANS in the column *Name of Directory Parameter*.
Note or copy the path shown in the column *Directory*.<br>
![SAP-AL11](/img/contents/sap-al11.png){:class="img-responsive"}
4. Go to transaction CG3Z. The window "Upload File: Parameters" opens.
5. In the field **Source file on front end** you select your request file from from step 1. The name of the file starts with an "R", e.g., R900472.
6. In the field **Target file on application server** you construct your target path using the following pattern: `{copied path from step 2}\data\{request file name}`.<br>
![SAP-Upload-File](/img/contents/sap-upload-files.png){:class="img-responsive"}
7. Click **[Upload]** (![Import icon](/img/contents/icons/upload.png){:style="display:inline"} icon). When prompted, confirm the upload. A confirmation message about the successful upload is displayed at the bottom of the window.
8. In the field **Source file on front end** you select your cofile from from step 1. The name of the file starts with a "K", e.g., K900472.
9. In the field **Target file on application server** you construct your target path using the following pattern: `{copied path from step 2}\cofiles\{cofile name}`.<br>
![SAP-Upload-File](/img/contents/sap-upload-files2.png){:class="img-responsive"}
10. Click **[Upload]** (![Import icon](/img/contents/icons/upload.png){:style="display:inline"} icon). When prompted, confirm the upload. 

If the upload was successful, a confirmation message is displayed at the bottom of the SAP window.<br>
The files are now available in SAP.

-->

### Upload SAP Transport Requests to SAP

If you have access to the file system of SAP, you can copy and paste the files of your transport request directly into the `data` and `cofiles` folders of your SAP system. <br>
If you don't have access to the file system, follow the steps below to upload the files of your transport request using the SAP function module ARCHIVFILE_CLIENT_TO_SERVER:

1. Unzip the transport request provided in the installation directory of your product, e.g., `C:\Program Files\[XtractProduct]\ABAP`.
2. Open SAP and go to transaction AL11.
3. Find the entry DIR_TRANS in the column *Name of Directory Parameter*.
Note or copy the path shown in the column *Directory*.<br>
![SAP-AL11](/img/contents/sap-al11.png){:class="img-responsive"}
4. Go to transaction SE37.
5. Enter name of function module ARCHIVFILE_CLIENT_TO_SERVER and click **[Test/Execute]**.
![SAP-FuBa](/img/contents/sap-fuba.png){:class="img-responsive"} 
6. In the field **PATH** you select your request file from from step 1. The name of the file starts with an "R", e.g., R900472.
7. In the field **TARGET PATH** you construct your target path using the following pattern: `{copied path from step 2}\data\{request file name}`.<br>
8. Enable case-sensitivity and click **[Execute]**. When prompted, confirm the upload. <br>
![SAP-Upload-File](/img/contents/sap-fuba-upload.png){:class="img-responsive"}
9. In the field **PATH** you select your cofile from from step 1. The name of the file starts with a "K", e.g., K900472.
10. In the field **TARGET PATH** you construct your target path using the following pattern: `{copied path from step 2}\cofiles\{cofile name}`.<br>
11. Enable case-sensitivity and click **[Execute]**. When prompted, confirm the upload. 

The files are now available in SAP.

{: .box-note }
**Note:** Another method for uploading files to SAP is the SAP transaction CG3Z. This transaction is only available on ERP systems. 

### Import SAP Transport Requests

Follow the steps below to add the transport requests to the import queue and import them:

1. Go to transaction STMS to open the transport management system.
2. Click **[Import Overview]** (![Import icon](/img/contents/icons/sap-imports.png){:style="display:inline"} icon).<br>
![SAP-Upload-File](/img/contents/sap-transport-management-system.png){:class="img-responsive"}
3. Double click on the import queue in which you want to load the transport request into.<br>
![SAP-Queues](/img/contents/sap-import-queues.png){:class="img-responsive"}
4. Open the transport request selection dialog via **More > Extras > Other Requests > Add**.
5. Select the transport request and confirm. If prompted, confirm the import.
![SAP-Queues](/img/contents/sap-import-queue.png){:class="img-responsive"}
6. Select your transport request from the list and click **[Import Request]** (![Import icon](/img/contents/icons/sap-import-requests.png){:style="display:inline"} icon). The window "Import Transport Request" opens.
7. Enter the target client. 
If the version of the SAP system where the transport request was created differs from your SAP system version, select the option **Ignore Invalid Component Version**.<br>
![SAP-Import-Requests](/img/contents/sap-import-transport-request.png){:class="img-responsive"}
8. Confirm your settings. 

The transport request is imported.

### Check the Status of Transport Requests

The import overview of the transport management system (transaction STMS) lists all transport requests.<br>
The status of the transport requests is displayed in the column "RC".

A green bar indicates that the import was successful.
In case of warnings or errors, double click on the icon to view the error messages.<br>
![SAP-Import-Rewuests](/img/contents/sap-check-transport-requests.png){:class="img-responsive"}

<!---
### Add Transport Request to the Import Queue
1. Unzip and copy the file R900141.ECC into the data folder and the file K900141.ECC into the co-files folder of our SAP System, e.g., `\\SAPServer\c$\usr\sap\trans\`
Note that the last 3 digits of the transport numbers may be different in recent versions.<br>
Alternative: Use the transaction code CG3Z to upload the files to SAP. Use the transaction AL11 to check if the files are in the correct directory.
2. Start the transaction STMS and click on ![STMSIcon03](/img/contents/STMSIcon03.png){:class="img-responsive" style="display:inline"}<br>
![STMS](/img/contents/STMS.png){:class="img-responsive"}
3. In the next screen we see the import queues in our SAP domain. Doubleclick on our system EC5 to see the details of the import queue. <br>
![STMS02](/img/contents/STMS02.png){:class="img-responsive"}
4. In the import queue screen click on **Extras -> Other Requests -> Add** to continue the procedure.<br>
![STMS03](/img/contents/STMS03.png){:class="img-responsive"}
5. Click  ![STMSIcon02](/img/contents/STMSIcon02.png){:class="img-responsive" style="display:inline"}.<br>
![STMS04](/img/contents/STMS04.png){:class="img-responsive"}
6. Select the transport request you copied in step 1.<br>
![STMS05](/img/contents/STMS05.png){:class="img-responsive"}
7. Confirm the request and the attachment to the import queue.<br>
![STMS06](/img/contents/STMS06.png){:class="img-responsive" style="display:inline"}
![STMS07](/img/contents/STMS07.png){:class="img-responsive" style="display:inline"}
8. Back in the import queue click on ![STMSIcon01](/img/contents/STMSIcon01.png){:class="img-responsive" style="display:inline"}<br>
![STMS08](/img/contents/STMS08.png){:class="img-responsive"}
9. Confirm the next screen.<br>
![STMS09](/img/contents/STMS09.png){:class="img-responsive"}
10. Click **[Yes]** to start the import.<br>
![STMS10](/img/contents/STMS10.png){:class="img-responsive"}

The checkmark ![STMSIcon04](/img/contents/STMSIcon04.png){:class="img-responsive" style="display:inline"} shows that the import finished successfully.<br>
![STMS11](/img/contents/STMS11.png){:class="img-responsive"}
your comment goes here
-->

------

#### Related Links

Find more information on Theobald Software transport requests in the Online Help.

Xtract Universal:
- [Custom function module for Table extractions](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-table-extraction)
- [Custom function module for TableCDC extractions](https://help.theobald-software.com/en/xtract-universal/sap-customizing/custom-function-module-for-tablecdc)
- [Custom function module for Report extractions](https://help.theobald-software.com/en/xtract-universal/sap-customizing/install-report-custom-function-module)

Xtract IS:
- [Custom function module for Table extractions](https://help.theobald-software.com/en/xtract-is/sap-customizing/custom-function-module-for-table-extraction)
- [Custom function module for Report extractions](https://help.theobald-software.com/en/xtract-is/sap-customizing/install-report-custom-function-module)

Xtract for Alterx:
- [Custom function module for Table extractions](https://help.theobald-software.com/en/xtract-for-alteryx/sap-customizing/custom-function-module-for-table-extraction)
- [Custom function module for Report extractions](https://help.theobald-software.com/en/xtract-for-alteryx/sap-customizing/install-report-custom-function-module)

Board Connector:
- [Custom function module for Table extractions](https://help.theobald-software.com/en/board-connector/sap-customizing/custom-function-module-for-table-extraction)
- [Custom function module for TableCDC extractions](https://help.theobald-software.com/en/board-connector/sap-customizing/custom-function-module-for-tablecdc)
- [Custom function module for Report extractions](https://help.theobald-software.com/en/board-connector/sap-customizing/install-report-custom-function-module)
