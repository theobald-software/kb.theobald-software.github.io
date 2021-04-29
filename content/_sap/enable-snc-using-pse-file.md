---
layout: page
title: Enabling Secure Network Communication (SNC) via X.509 certificate
description: Enabling Secure Network Communication (SNC) via X.509 certificate 
permalink: /:collection/:path
weight: 11
---
### About this approach

The following article describes how an SNC connection to an SAP source system can be established with the Xtract products. 

A workflow with X.509 certificate is used as the basis, which provides the logon data of the Windows AD user. The correctness of this X.509 certificate is ensured via the company's internal certification authority (ca).

#### Workflow

1. Upon connection start, the Secure Login Client retrieves the SNC name from the SAP NetWeaver AS ABAP.
2. The Secure Login Client uses the authentication profile for this SNC name.
3. The user unlocks the security token, for example, by entering the PIN or password.
4. The Secure Login Client receives the X.509 certificate from the user security token. 
5. The Secure Login Client provides the X.509 certificate for single sign-on and secure communication between SAP GUI or Web GUI and the AS ABAP.
6. The user is authenticated and the communication is secured.

{: .box-tip }
**Tip:** The necessary configuration of the X.509 certificate should be implemented by the network & SAP Basis team and requires basic knowledge in this area.

### Requirements

The following system settings are a prerequisite for using this SNC solution:

- Installed [Secure Login Client](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/da610fd072e4409baa8b6a96973b5c67.html).
- The SAP application server is configured and activated for Secure Network Communication (SNC).
- The SNC standard library *sapcryptolib* is used as the SNC solution.
- The following SNC parameters are configured as mentioned.

SNC parameter | Value | Example
------------ | ------------- | ----------
snc/gssapi_lib | Path and file name where the SAP Cryptographic Library is located. | *$(DIR_EXECUTABLE)\sapcrypto.dll*
snc/identity/as | Application server's SNC name Syntax: p:\<Distinguished_Name\> <br> The Distinguished Name part must match the Distinguished Name that you specify when creating the SNC PSE.| *p:CN=saperp.theobald.local*

### Step-by-Step Guide

- Generate certificate for the application server and AD-user context from common Certificate Authority (ca).
![X.509 Certificate Details](/img/contents/x509-certificate_example.png){:class="img-responsive"}

{: .box-note }
**Note** X.509 certificate will be available when placed in folder **Certmgr > Personal > Certificates** within Windows certificate store (user).

- Convert pfx file to SAP PSE format e.g., `sapgenpse.exe import_p12 -p cert.pse cert.pfx`.
- Import the created PSE file via **TA STRUST > Edit mode > PSE Import > PSE Save as SNC Libcrypto**
- Edit the SNC configuration of the corresponding SAP user via transaction **SU01** (1), **SNC** (2), **SNC Name** (3) = p:\<Full Distinguished_Name\> <br> e.g., `p:EMAIL="RandomUser@domain",CN="Random User",OU="Users",OU="TheobaldSoftware",DC="theobald",DC="local"`
![SNC User Settings](/img/contents/snc_user_settings.png){:class="img-responsive"}
- Set up SNC authentication in the SAP sources e.g., [Xtract Universal](https://help.theobald-software.com/en/xtract-universal/introduction/sap-connection#authentication), [Xtract IS](https://help.theobald-software.com/en/xtract-is/sap-connection/sap-connection-with-snc), [BOARD Connector](https://help.theobald-software.com/en/board-connector/introduction/sap-connection#authentication)


****
#### Releated Link
- [Workflow with X.509 Certificate without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/06d9e59a0fd44aa4aa082ffad7d618e3.html)
- [Secure Network Communications (SNC)](https://help.sap.com/doc/saphelp_nw70/7.0.31/en-us/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [Configuring SNC: External Programs AS ABAP Using RFC ](https://help.sap.com/doc/saphelp_nwpi71/7.1/en-US/d9/e8a740bbaa4d8f8bee6f7b173bd99f/content.htm?loaded_from_frameset=true)
- [Setting the SNC Profile Parameters](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/19/164442c1a1c353e10000000a1550b0/content.htm?no_cache=true)
- [List of SNC Error Codes](https://wiki.scn.sap.com/wiki/display/Security/List+of+SNC+Error+Codes)
- [Configuring SAP GUI and SAP Logon for Single Sign-On](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/44/0ea40dc6970d1ce10000000a114a6b/content.htm?no_cache=true)
- [Secure Login Client](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/ba21970855064e54a9246b6c6de67fb2.html)
