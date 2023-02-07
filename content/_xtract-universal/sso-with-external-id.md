---
layout: page
title: SSO with External ID
description: SSO with External ID
permalink: /:collection/:path
weight: 154
---

This article describes the required steps for setting up Single Sign-On (SSO) with Secure Network Communication (SNC) and External IDs.

{: .box-warning }
**Warning!  Single Sign-On availability** <br> 
ABAP application server has to run on a Windows OS and SNC with Kerberos encryption setup on SAP. <br>

### Requirements

The usage of SSO with External ID requires:
- Installation of the SAP Cryptographic Library, see [SAP Documentation: Downloading and Installing the SAP Cryptographic Library](https://help.sap.com/docs/SAP_IDENTITY_MANAGEMENT/4773a9ae1296411a9d5c24873a8d418c/3d4ece540ae64e30997498025e37f686.html?locale=en-US) is installed on your ABAP system.
- The environment variable SECUDIR must be set to the PSE directory of the service account that runs Xtract Universal.
- Windows AD users must be mapped to SAP users in the SAP table USRACL.
- The Xtract Universal service must run under a Windows AD Service account, see [Run an Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
- Set up access restrictions for the Xtract Universal Designer and the Xtract Universal server, see [Restrict Access to Windows AD Users (Kerberos Authentication)](https://help.theobald-software.com/en/xtract-universal/security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>

### The Process

SSO with External ID uses an X.509 certificate & PSE to create a trust relationship between the SAP application server and the service account that runs Xtract Universal.
This allows Xtract Universal to impersonate any SAP user.
<!---
Xtract Universal first logs into SAP as a technical communication user and checks for an SNC mapping of the caller's Windows identity in SAP table USRACL.
If the Windows user is found, Xtract Universal logs in as the mapped SAP user and performs the actual extraction.
--->

1. Users authenticate themselves against Xtract Universal via Active Directory (Kerberos) and request data from SAP.
2. Xtract Universal opens an RFC connection via SNC und uses the X.509 certificate of the PSE for authentication.
3. Xtract Universal impersonates the SAP technical communication user using the External ID mechanism of SAP.
4. Xtract Universal reads the SAP table USRACL to determine the SAP user that is mapped to the Active Directory user from step 1.
5. Xtract Universal then impersonates the SAP user from the USRACL table using the External ID mechanism of SAP.
6. Xtract Universal retrieves the requested SAP data.


### Setup in SAP

An SAP technical communication user with privileges to read table USRACL via the function module RFC_READ_TABLE.

1. Use the [SAPGENPSE](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-US/48/4cf29fdac612e8e10000000a42189b/frameset.htm) command like tool to generate an X.509 certificate for the Windows service account that runs Xtract Universal. 
Use the following format: <br>`sapgenpse get_pse <additional_options> -p <PSE_Name> –r <cert_req_file_name> -x <PIN> <Distinguished_Name>`.
2. Use SAP transaction [STRUST](https://help.sap.com/saphelp_ewm900/helpdata/en/4c/5bdb17f85640f1e10000000a42189c/frameset.htm) to add the certificate to the list of trusted certificates.
3. Use SAP transaction SNC0 to create an access control list that allows RFC and external IDs for the certificate created in step 1.

### Setup in Xtract Universal

Create a new SAP source system in your Xtract product to set up SSO with External ID:

1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
2. Click **[Add]** to create a new SAP source.
3. Open the tab *General* and enter the connection details of your SAP system. <br>
![SAP-Source-Details](/img/contents/xu/sap_source-details.png){:class="img-responsive"}
4. Open the tab *Authentication* and activate the option **Secure Network Communications (SNC)**.<br>
![sso-certificate-auth](/img/contents/sso-certificate-auth.png){:class="img-responsive"}
4. Enter the name of the technical communication user in the field **User**, see step 4 in [Process](#process).
5. Enter the complete path to the SAP cryptographic library in the field **SNC Library**, e.g. `C:\Program Files\SAP\FrontEnd\SecureLogin\lib\sapcrypto.dll`
6. Enter the SPN of the SAP service account in the field **SNC partner name**. Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`. 
7. Enable the option **SSO - Log in as caller via External ID**.
8. Click **[Test Connection]** to verify your connection settings.
9. Click **[OK]** to save your changes.
10. Make sure that access to the Xtract Universal Designer and the Xtract Universal server is restricted to Windows AD users, see [Restrict Access to Windows AD Users (Kerberos Authentication)](https://help.theobald-software.com/en/xtract-universal/security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>


<!---
#### Server Settings in Xtract Universal

The following configuration is required in Xtract Universal:

1. Navigate to **[Server > Settings]** in the main menu of the Designer. The window "Server Settings" opens.
2. Open the *Web Server* tab.
3. Select **HTTPS - Restricted to AD users with Designer read access**.
4. Open to the *Configuration Server* tab.
5. Select **Restrict Designer access to the following users/groups**.
6. Add the Windows AD users that are allowed to execute an extraction and assign access rights. Assign at least Read permission to the Windows AD users. 
For more information on access management in Xtract Universal see [Online Help: Access Management](https://help.theobald-software.com/en/xtract-universal/security/access-management#server-settings). 
7. Click **[OK]**. When propted, restart the server to save your changes.

For more information on restricting access to Xtract Universal to Windows AD users, see [Online Help: Server Security](https://help.theobald-software.com/en/xtract-universal/security/server-security).
--->

### Related Links
- [Online Help: X.509 certificate](https://help.theobald-software.com/en/xtract-universal/security/install-x.509-Certificate)
- [Running the Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
