---
layout: page
title: SNC Connection with SSO
description: SNC Connection with SSO
permalink: /:collection/:path
homepage-weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Single Sign-On with encryption of network connections is enabled with SNC over the SNC Adapter and is using the authentication protocol Kerberos v5

These prerequisites are needed to setup the SSO environment:

- An Active Directory is required in your landscape
- The SAP System accounts (SAPServiceSID and sbiadm) must be created and running under the AD Domain.
- On the Domaincontroller of the SAP System run SETSPN -A SAPServiceSID/hostname.SERVER.MYDOMAIN MYDOMAIN\SAPServiceSID
- Download the [win32sso.zip](http://www.theobald-software.com/download/sap/win32sso.zip) or [win64sso.zip](http://www.theobald-software.com/download/sap/win64sso.zip) (OSS Note 352295) according to the platform where the SAP System is installed.
- Unzip it and place the kerberos file on %SYSTEMROOT%\System32 (e.g. on x64 the file should be gx64krb5.dll).
- Download [SAPSSO.MSI](http://theobald-software.com/download/SAP/SAPsso.msi) (OSS Note 595341) for the client computers

**Setting up your SAP System Server**

Create a system environment called "SNC_LIB". The value depends on the OS you are having.<br>
In a 64-Bit environment for example you have to point to the 64-Bit library.<br>
"C:\Windows\System32\gx64krb5.dll".  (Win 32-Bit system gsskrb5.dll)

Set the following parameters on your instance profile (TX RZ10 -> Instance profile -> Extended maintenance add):

snc/enable = 1<br>
snc/gssapi_lib = C:\Windows\System32\gx64krb5.dll   (Win 32-Bit system gsskrb5.dll)<br>
snc/identity/as = p:SAPServiceSID@SERVER.MYDOMAIN.COM

snc/accept_insecure_cpic = 1<br>
snc/accept_insecure_rfc = 1<br>
snc/permit_insecure_start = 1<br>

**Setting up Clients with SSO**

Install SAPSSO.MSI on the client computers. The variable SNC_LIB on these computers are created. You can check this in the environment variables.<br>
In the Connection Properties of the related SAP GUI connection check the Option "Enable SNC" and enter the following: "p:SAPServiceSID@SERVER.DOMAIN.COM".

**Setting up the Users in SAP**

In the TX SU01 edit the user, select SNC tab, and provide the following information:
"p:domainuser@DOMAIN.COM".


You will also find more detail information about the needed DLLs, C++ runtimes for 32-/64-bit systems on the website:

[http://msdn.microsoft.com/en-us/library/cc185322%28v=bts.10%29.aspx](http://msdn.microsoft.com/en-us/library/cc185322%28v=bts.10%29.aspx).

and the links for the download:

[http://service.sap.com/sap/support/notes/2115486](http://service.sap.com/sap/support/notes/2115486)