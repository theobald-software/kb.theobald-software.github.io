---
layout: page
title: How to import an SAP Transport Request with the Transport Management System STMS
description: How to import an SAP Transport Request with the Transport Management System STMS
permalink: /:collection/:path
weight: 35
---

This article shows how to import a Transport Request for the custom functions modules that are included in the ABAP subdirectory of the installation directory, e.g., `C:\Program Files\[XtractProduct]\ABAP`.

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
