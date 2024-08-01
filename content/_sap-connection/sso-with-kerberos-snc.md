---
layout: page
title: SSO with Kerberos SNC
description: SSO with Kerberos SNC
permalink: /:collection/:path
weight: 152
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base.<br>
Make sure to use the knowledge base within the new [Theobald Software HelpCenter](https://helpcenter.theobald-software.com/).

The following article describes the required steps for setting up Single Sign-On (SSO) with Secure Network Communication (SNC) and Kerberos encryption.

{: .box-warning }
**Warning! SAP officially does not support the Kerberos Wrapper Library (gx64krb5.dll) anymore.** 

{: .box-warning }
**Warning!  Single Sign-On availability** <br> 
ABAP application server has to run on a Windows OS and SNC with Kerberos encryption setup on SAP. <br>

### Requirements
- The SAP ABAP application server runs under a Windows operating system. 
- The BI client (which calls the extraction) runs under Windows.
- The SAP Kerberos Wrapper Library (gsskrb5) is used as the SNC solution.

### "Double Hop" Issue

SNC solution must support the Windows credentials being passed on by an Xtract product. 
Since Active Directory is based on Kerberos, a "Double Hop" issue may occur. 
Here is a possible solution to the "Double Hop" issue:<br>

For security reasons, Kerberos does not allow credentials to be passed on. 
But there are Kerberos extensions from Microsoft (S4U extensions) that allow credentials passing on. 
These extensions are also known as "constrained delegation".
Because the Kerberos Wrapper Library uses the Microsoft extensions for Kerberos to work around the "Double Hop" issue, it is only available for Windows. 
It therefore only works with SAP application servers under Windows and clients under Windows.

Unlike the Kerberos Wrapper Library (gsskrb5) from SAP (according to SAP), SAP's Common Crypto Library does not explicitly support credentials to be passed on. 
The Kerberos Wrapper Library (gsskrb5) used by multiple customers of Theobald Software products.

When using an SNC solution from a third-party vendor, use either the Kerberos Wrapper Library or a corresponding solution of the third-party vendor.


### Activation of HTTPS 

1. Enable access control protocol HTTPS (1) within the tab *Web Server* settings.
2. Reference an existing [X.509 certificate](https://help.theobald-software.com/en/xtract-universal/security/install-x.509-Certificate) (2).<br>
3. Click **[OK]** to confirm (3)<br>

{: .box-note }
**Note:** Make sure to check the default ports depending on your product. HTTPS port *8165* is e.g., set up by default in Xtract Universal. BOARD Connector's default HTTPS port *8197*.

![XU_WebServerSettings_https](/img/contents/XU_Server_Settings_Webserver_HTTPS.png){:class="img-responsive"}


### Configuration of Windows AD service account
Using SSO with Kerberos SNC, the Xtract Universal service must run under a dedicated service account.  
To do so, follow the steps as outlined in [Running the Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).

{: .box-note }
**Note:** As of Xtract Universal version 5.0 SAP passwords are encrypted with a key that is derived from the Windows account that runs the XU service.
The passwords can only be accessed from the same service account, when restoring a backup or moving the files to a different machine. 
If the service account changes, passwords need to be re-entered manually.

### Server Settings

{: .box-warning}
**Warning! Incompatible library**  <br>
Xtract products run on 64bit OS only. Kerberos Wrapper Library gx64krb5.dll(64-Bit version) is required. <br>
Download `gx64krb5.dll` from [SAP Note 2115486](https://launchpad.support.sap.com/#/notes/2115486).

1. Copy the Kerberos Wrapper Library to the file system, e.g., to `C:\SNC\gx64krb5.dll` of the machine, where the service is running.
2. Place the downloaded .dll file on each machine, where the Designer is running.
3. Open "Computer Management" by entering the following command: `compmgmt.msc`.
4. Under **Local Users and Groups** select **Groups > Administrators**.
5. Click **[Add]** (4) to add the service account to the local admin group (5).<br>
![XU_SSO_WinAD_SPN](/img/contents/admin_groups_xu_service_account.png)
6. Open "Local Security policy" by entering the following command: `secpol.msc`. <br>
![XU_SSO_LocSecPol](/img/contents/XU_SSO_LocSecPol.png){:class="img-responsive"}
7. Select **[Local Policies > User Rights Assignment]**
    - Act as part of the operating system 
    - Impersonate a client after authentication
8. Change the registry settings of the server machine:

**Field** | **Registry Entry**
------------ | -------------
SubKey | HKEY_LOCAL_MACHINE\SOFTWARE\SAP\gsskrb5
Entry | ForceIniCredOK
Type | REG_DWORD
Value | 1


### SAP Source Settings

{: .box-note }
**Note:** An existing [SAP connection](https://help.theobald-software.com/en/xtract-universal/getting-started/sap-connection) to a Single Application Server or Message Server is the prerequisite for using SSO with SNC.

1. In the main menu of the Designer, navigate to **[Server > Manage Sources]**. The window "Source Details" opens.<br>
![XU_SSO_SAPSource](/img/contents/XU_SSO_SAP_Source.png){:class="img-responsive"}
2. Select an existing SAP source and click **[Edit]** (pencil symbol).<br>
![Edit-SAP-source](/img/contents/edit_sap_source.png){:class="img-responsive"}
3. Enable the **SNC** option (1) in the subsection *Authentication*.
4. Enable the checkbox *Impersonate authenticated caller (SSO)* (2).
5. Enter the complete path of the Kerberos library in the field *SNC library*
e.g., `C:\SNC\gx64krb5.dll` (3).
6. Enter the SPN of the SAP service account in the field *Partner name*. Use the following notation: *p:[SPN]@[Domain-FQDN-Uppercase]* (4). 
7. Click **[Test Connection]** to verify your connection settings.
8. Click **[OK]** to confirm.

{: .box-note}
**Note:** The SAP Logon Pad SNC settings for partner name differ from the ones used in Xtract products. SAP Logon Pad uses the UPN of the SAP service accounts and Xtract products use the Service Principal Name (SPN). Use the following notation: *p:[SAP Service Account]@[domain]*. SPN's are case sensitive in the SNC partner name.

### SNC Activation in SAP

In SAP, apply the Kerberos SNC settings as described in the [SAP Help](https://help.sap.com/viewer/e815bb97839a4d83be6c4fca48ee5777/7.5.9/EN-US/440ebf6c9b2b0d1ae10000000a114a6b.html).

### Related Links
- [Online Help: SSO and SNC with Kerberos Wrapper Library](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/sap-single-sign-on#sso-and-snc-with-kerberos-wrapper-library)
- [Online Help: X.509 certificate](https://help.theobald-software.com/en/xtract-universal/security/install-x.509-Certificate)
- [Running the Xtract Universal Service under a Windows Service Account](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/service-account).
