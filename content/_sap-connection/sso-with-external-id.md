---
layout: page
title: SSO with External ID
description: SSO with External ID
permalink: /:collection/:path
weight: 154
---

The following article shows how to set up Single Sign-On (SSO) with Secure Network Communication (SNC) and External ID.<br>
*SSO with External ID* uses a Personal Security Environment (PSE) to create a trust relationship between the SAP application server and the service account that runs Xtract Universal.
This allows Xtract Universal to impersonate any SAP user.<br>

### Requirements

The usage of *SSO with External ID* requires:
- The Xtract Universal service must run under a Windows AD Service account, see [Run an Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
- Access to the Xtract Universal Designer and the Xtract Universal server must be restricted to Windows AD users, see [Restrict Access to Windows AD Users (Kerberos Authentication)](https://help.theobald-software.com/en/xtract-universal/security/server-security#restrict-access-to-windows-ad-users-kerberos-authentication).<br>
- Windows AD users must be mapped to SAP users in the SAP table USRACL, see [SAP Help: User Authentication and Single Sign-On](https://help.sap.com/docs/SAP_NETWEAVER_750/e815bb97839a4d83be6c4fca48ee5777/e54344b6d24a05408ca4faa94554e851.html?locale=en-US). <!---[SAP Help: Mapping Windows Users to SAP Users for Kerberos SSO](https://help.sap.com/saphelp_ewm900/helpdata/en/44/0efeafb9920d1be10000000a114a6b/frameset.htm)--->
- The SAP CommonCryptoLib must be installed on the machine that runs Xtract Universal, see [SAP Note 1848999](https://launchpad.support.sap.com/#/notes/1848999).<br>
Copy the library (sapcrypto.dll) and the command line tool (sapgenpse.exe) to a local directory, e.g. `C:\PSE\`.
For more information, see [SAP Help: Downloading and Installing the SAP Cryptographic Library](https://help.sap.com/docs/SAP_IDENTITY_MANAGEMENT/4773a9ae1296411a9d5c24873a8d418c/3d4ece540ae64e30997498025e37f686.html?locale=en-US).
- The environment variables SECUDIR and SNC_LIB must be set to the PSE directory that contains the SAP CommonCryptoLib.

For more information on PSE, see [SAP Help: Creating PSEs and Maintaining the PSE Infrastructure](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-us/59/6b653a0c52425fe10000000a114084/frameset.htm).
<!---For more information on environment variables, see [Microsoft Documentation: ]().--->

### The Process

SSO with External ID uses an X.509 certificate & PSE to create a trust relationship between the SAP application server and the service account that runs Xtract Universal.
This allows Xtract Universal to impersonate any SAP user.

![sap-external-id](/img/contents/xu/sso-with-external-id.png){:class="img-responsive" width="700px"}

1. Users authenticate themselves against Xtract Universal via Active Directory (Kerberos) and request data from SAP.
2. Xtract Universal opens an RFC connection via SNC and uses PSE & External ID for authentication.
3. Xtract Universal reads the SAP table USRACL to determine the SAP user that is mapped to the Active Directory user from step 1.
4. Xtract Universal then impersonates the mapped SAP user to request the SAP data via SNC.
5. Xtract Universal retrieves the requested SAP data with the privileges of the caller.
6. Xtract universal loads the extracted SAP data to the tool that triggered the extraction.


### Setup in SAP

1. Use the SAPGENPSE command line tool to generate an X.509 certificate for the Windows service account that runs Xtract Universal. <br>
Use the following command to create the certificate: `sapgenpse gen_pse -p theo-xu.pse`.<br>
The distinguished name of the PSE owner can be the fully qualified hostname of the Xtract Universal server, e.g., `CN=xuserver.example.com`. 
2. Use the command `sapgenpse export_own_cert -v -p theo-xu.pse -o theo-xu.crt` to export the certificate.<br>
3. Use SAP transaction STRUST to add the certificate to the list of trusted PSE certificates, see [SAP Help: Adding Certificates to PSE Certificate Lists](https://help.sap.com/docs/SAP_NETWEAVER_750/280f016edb8049e998237fcbd80558e7/798e9421e00b4dc1ade3d4199ac60837-35.html?locale=en-US).
4. Use SAP transaction SNC0 to create an access control list item that allows RFC and external IDs for the Common Name (CN) of the certificate created in step 1.<br>
![sap-external-id](/img/contents/sap-external-id.png){:class="img-responsive"}
5. Use SAP transaction STRUST to export the server certificate of the SAP server, see [SAP Help: Exporting the AS ABAP's Public-Key Certificate](https://help.sap.com/saphelp_SNC700_ehp01/helpdata/en/47/d84e3c719d1742e10000000a11405a/frameset.htm).
6. Copy the exported server certificate to the PSE directory of the machine that runs Xtract Universal.
7. Use the SAPGENPSE command line tool to import the server certificate to the client PSE.<br>
Example: `sapgenpse maintain_pk -v -a server.crt -p theo-xu.pse`
8. Use the command `sapgenpse seclogin -p theo-xu.pse –O SAPServiceUser` to create a credentials file (cred_v2), see [SAP Help: Creating the Server's Credentials Using SAPGENPSE](https://help.sap.com/saphelp_snc70/helpdata/en/32/ce2e3ad962a51ae10000000a11402f/frameset.htm). 
The credentials file gives Xtract Universal access to the PSE without providing the password for the PSE.

The PSE directory should now contain the following files:
- the client PSE `theo-xu.pse`
- the client certificate `theo-xu.crt`
- the server certificate that was exported from your SAP system `[server].crt`
- the credentials file `cred_v2`

### Setup in Xtract Universal

Create a new SAP source system in your Xtract product to set up SSO with External ID:

1. Navigate to **[Server > Manage Sources]** in the main menu of the Designer. The window "Manage Sources" opens.
2. Click **[Add]** to create a new SAP source.
3. Open the tab *General* and enter the connection details of your SAP system. <br>
![SAP-Source-Details](/img/contents/xu/sap_source-details.png){:class="img-responsive"}
4. Open the tab *Authentication* and activate the option **Secure Network Communications (SNC)**.<br>
![sso-certificate-auth](/img/contents/xu/sso-external-id-source.png){:class="img-responsive"}
5. Enter the name of an SAP user in the field **User** for the initial login with Xtract Universal. <br>
This user must be a technical user (SAP user with security policy set to *Technical User*) and must have privileges to read the SAP table USRACL via the function module RFC_READ_TABLE. 
6. Enter the complete path to the SAP cryptographic library in the field **SNC Library**, e.g. `C:\PSE\sapcrypto.dll`.
7. Enter the SPN of the SAP service account in the field **SNC partner name**. Use the following notation: `p:[SPN]@[Domain-FQDN-Uppercase]`. 
8. Enable the option **SSO - Log in as caller via External ID**.
9. Click **[Test Connection]** to verify your connection settings.
10. Click **[OK]** to save your changes. 


#### Related Links
- [Online Help: SAP Single-Sign-On](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on).<br>
- [Online Help: Running the Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account)
- [SAP Help: Creating PSEs and Maintaining the PSE Infrastructure](https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-us/59/6b653a0c52425fe10000000a114084/frameset.htm)