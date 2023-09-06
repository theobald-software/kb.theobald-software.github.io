---
layout: page
title: SSO with Client Certificates
description: SSO with Logon-Ticket
permalink: /:collection/:path
weight: 150
---

The following article describes the process of setting up Single-Sign-On (SSO) via Secure Network Communication (SNC) with SAP client certificates. <br>
For more information on using SSO with Xtract Universal, refer to [Online Help: SAP Single-Sign-On](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on).

{: .box-note }
**Note:** SSO with Client Certificates is only supported by Xtract Universal and Board Connector.

### Requirements

The usage of *SSO Certificate* requires the correct characteristics of the architecture:
- Implement SAP SSO  with X.509 certificates without Secure Login Server, see [SAP-Documentation: Authentication Methods without Secure Login Server](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/LATEST/en-US/7c45fe620ab9469083f7ab50a9008c37.html).
- Implement Microsoft Certificate Store and Active Directory Certificate Templates for SAPGUI/RFC, see [Microsoft TechNet: Certificate Template](https://social.technet.microsoft.com/wiki/contents/articles/53249.active-directory-certificate-services-enterprise-ca-architecture.aspx#Certificate_Template).
- Set up an enrollment agent for Xtract Universal in AD, see [Microsoft TechNet: Establish Restricted Enrollment Agents](https://social.technet.microsoft.com/wiki/contents/articles/10942.ad-cs-security-guidance.aspx#Establish_Restricted_Enrollment_Agents).
- Install the SAP Secure Login Client on the server that runs Xtract Universal, see [SAP-Dokumentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html).<br>
The Secure Login Client ensures that the correct SNC library is available for *SSO Certificate*.
This library is used to open the SAP connection.
- The XU service must run under a Windows AD Service account, see [Run an Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
- Set up access restrictions for the Xtract Universal Designer and the XU server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](https://help.theobald-software.com/en/xtract-universal/security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>

### Process

The following graphic illustrates the process of authentication via *SSO Certificate*:

![SSO-Certificate](/img/contents/sso-certificate.png){:class="img-responsive"}

1. The user of the BI tool (caller) triggers an extraction by calling the XU webservice of your Xtract product.
The caller uses their Active Directory identity to authenticate against the XU webservice via HTTPS and SPNEGO.
2. The XU server checks if a certificate for the caller is available in the Windows Certificate Store.
If no certificate is available for the caller, a new certificate is issued by the Windows enrollment agent.<br>
a) The XU server requests the Client certificate from the Windows Certificate Store via the Windows API.
If a certificate is available, the process continues with step 3.
If no certificate is available steps 2b) to 2e) are executed.<br>
b) The XU server requests an enrollment agent certificate from the Windows Certificate Store via the Windows API.
The enrollment agent certificate can be used to issue client certificates.<br>
c) The XU server receives the enrollment agent certificate from the Windows Certificate Store.<br>
d) If the requested certificate from 2a) is not found in the Windows Certificate Store, the XU server enrolls a new client certificate for the caller using the enrollment agent certificate.<br>
e) The Windows Certificate Store receives the new client certificate from the Active Directory Services via MSRPC.
3. The XU server receives the client certificate of the caller from the Windows Certificate Store.
4. The XU server configures the SAP Secure Login Client via the Windows Registry.
5. The Secure Login Client receives the caller's client certificate as specified by the XU server in step 4 from the Windows Certificate Store.
6. The Secure Login Client uses the client certificate of the caller to authenticate the caller's identity via SNC against SAP.
7. The XU server extracts data with the identity and privileges of the caller.
8. The XU server loads the extracted data from 7 to the tool that triggered the extraction.

### Setting up SSO and SNC with Client Certificates

Create a new SAP source system in your Xtract product to set up SSO with client certificates:
1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
2. Click **[Add]** to create a new SAP source.
3. Open the tab *General* and enter the connection details of your SAP system. <br>
![SAP-Source-Details](/img/contents/xu/sap_source-details.png){:class="img-responsive"}
4. Open the tab *Authentication* and activate the option **SNC**.<br>
![sso-certificate-auth](/img/contents/sso-certificate-auth.png){:class="img-responsive"}
5. Enter the path to the 64bit version of the SAP Crypto Library in the field *SNC library*, e.g., `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`.
The SAP Crypto Library is installed as part of the SAP Secure Login Client.
6. Enter the SNC partner name of the SAP system in the field **SNC partner name**. 
This is the same partner name as the SNC name used to set up the SAP GUI.
7. Activate the option **Enroll certificate on behalf of caller (Certificate SSO)**.<br>
![sso-certificate-auth2](/img/contents/sso-certificate-auth2.png){:class="img-responsive"}
8. Enter the technical name of the Active Directory Certificate Template used to authenticate SAP users.
9. Enter the thumbprint of the certificate of the enrollment agent.
If you don't know the name or thumbprint, consult the IT department that manages the Active Directory Certificate Services.
10. Click **[Test Designer Connection]** to test your connection settings.
11. Click **[OK]** to confirm your input.

{: .box-tip }
**Tip:** Create new extractions in the test environment with an SAP connection that uses **Plain Authentication**.
Change the SAP source when moving the extraction to the productive environment.

### Related Links
- [SAP Documentation: Secure Network Communications](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/e6/56f466e99a11d1a5b00000e835363f/content.htm?no_cache=true)
- [SAP-Documentation: Secure Login Client](https://help.sap.com/viewer/8ac26ac20064447ba9e65b18e1bb747e/Cloud/en-US/b304e57f6393461dafd7affc2760b05b.html)
- [SAP Documentation: Logging on with Secure Login Client Using SNC](https://help.sap.com/viewer/df185fd53bb645b1bd99284ee4e4a750/3.0/en-US/68a6caca798e4adbba5608fb69ea6398.html)
