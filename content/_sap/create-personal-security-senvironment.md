---
layout: page
title: PSE to create Trust to SAP Cloud Systems
description: SAP TCP/IP Ports
permalink: /:collection/:path
weight: 50
---

The following article shows how to create trust between a client and an SAP S/4AHANA cloud system.<br>
Trusting the SAP cloud is a prerequisite for connecting to SAP via WebSocket RFC. 

### Prerequisites

- Communication scenario SAP_COM_0636 (Communication Management - RFC Metadata Integration) must be set up on the SAP cloud system.
- Correct SAP Cloud API URL. The URL is displayed in the **API-URL** field of the communication arrangement set up for communication scenario SAP_COM_0193., e.g., https://my123456-api.s4hana.ondemand.com
- Command line tool sapgenpse.exe. The tool can be downloaded as part of the SAP Cryptographic Library in the SAP Service Marketplace.

### Creating a Client PSE

SAP uses a proprietary file format for storing client and server certificate (chains), called [PSE (Personal Security Environment)](https://help.sap.com/saphelp_nw73/helpdata/en/4c/61a6c6364012f3e10000000a15822b/frameset.htm). 
Follow the steps below to trust the server certificate. 

{: .box-note }
**Note:** The client certificate authentication is not covered in this article.

1. Enter the SAP Cloud API URL in Mozilla Firefox browser.
2. View the certificate in the browser.<br>
**Firefox**: Click the pad lock icon left of the URL, navigate to **Connection secure > More information**, then click **[View Certificate]**.<br>
![sap-cloud-view-certificate](/img/contents/sap-cloud-view-certificate.png){:class="img-responsive"}
3. Download the chain certificate from the browser.<br>
**Firefox**: Scroll to the *Miscellaneous* section of the certificate and in the download row, click *PEM (chain)*.<br>
![sap-cloud-download-certificate](/img/contents/sap-cloud-download-certificate.png){:class="img-responsive"}
4. Use the sapgenpse tool to create a client PSE file: 

	```
	sapgenpse.exe gen_pse -p <client.pse> -v [Distinguished name]
	```
	Replace `[Distinguished name]` with the distinguished name of the server that runs the Xtract product, e.g., "CN=COMPUTER.theobald.local, C=DE, S=BW, O=TS, OU=DEV". 
	The tool creates its own repository in a standard path, unless changed via environment variable SECUDIR or specifying an absolute path. 
	The PSE must be created without a password/pin, otherwise reading is not possible. 
	
6. Use the following command to add the certificate chain from step 3 to the client PSE:

	```
	sapgenpse.exe maintain_pk -a <[certificate.pem]> -p <client.pse>
	```
	Replace `[certificate.pem]` with the name of the downloaded certificate.
	
{: .box-tip }
**Tip:** For more information on how to use the sapgenpse.exe, run the command `sapgenpse -h`.

<!---
### Usage in Xtract Universal

- Because Xtract Universal is running as the local SYSTEM user, specify the absolute path to the PSE file, e.g.: C:\Users\<USER>\AppData\Local\sec\client.pse.
- Instead of using the default user field used for all other SAP systems, cloud systems require the usage of the Alias user field. Do not specify a user.
-->


