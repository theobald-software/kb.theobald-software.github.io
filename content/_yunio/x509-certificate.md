---
layout: page
title: Installing an X.509 Certificate
description: Installing an X.509 Certificate
permalink: /:collection/:path
weight: 100
progressstate: 25
---

This article shows how to install an X.509 certificate for Transport encryption.<br>
The installation of an X.509 certificate is required to use [Transport Layer Security (TLS)](https://learn.microsoft.com/en-us/windows/win32/secauthn/transport-layer-security-protocol) and secure authentication with yunIO.

### About X.509 Certificates 

There are two approaches for creating an X.509 certificate:
- Certificate released by an (internal) certification authority (CA) 
- Self-signed certificate

{: .box-note }
**Note:** On test environments you can use a self-signed certificate. For production environment it is recommended to use a certificate released by an (internal) certificate authority (CA). 

### Create an X.509 Certificate

Have a TLS certificate issued by your IT network team considering the following points:
 
- The certificate property “Subject Alternative Name” contains the DNS name of the server that runs the yunIO Windows service. 
- Place the certificate in the [Windows Certificate Store](https://technet.microsoft.com/en-us/ms788967(v=vs.91)) on the machine that runs the yunIO Windows service.
- The certificate common name (CN) attribute contains the DNS name of the server. 

{: .box-tip }
**Tip:** To display the Common Name (CN) of the certificate, double-click on the certificate in the Cetrificate Manager and navigate to the *Details* tab.

{: .box-note }
**Note:** The Windows Certificate Store works with most browsers. Note that Mozilla Firefox offers its own certificate storage.  
Configure your Firefox browser to trust certificates in the Windows certificate store or import the certificate via an enterprise ploicy, see [Mozilla Support: Setting Up Certificate Authorities (CAs) in Firefox](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox).

### Import an X.509 Certificate

1. Import the certificate to the Windows Certificate Store using Microsoft Management Console (mmc).
In the example shown, the server name is "sherri":
![XU-X509-MMC](/img/contents/yunio/certificate.png){:class="img-responsive"}
2. Open the yunIO Designer and navigate to the *Settings* menu. 
3. Click **[Pick Certificate]** to reference the X.509 certificate.<br>
Information about the currently saved certificate is displayed in the Transport Layer Security section of the menu.<br>
![import-certificate](/img/contents/yunio/certificate-settings.png){:class="img-responsive"}
4. Click **Enable TLS** to activate Transport Layer Security, see [Online Help: yunIO - Server Settings](https://help.theobald-software.com/en/yunio/server-settings).
5. Click **[Save]** and restart the yunIO Windows service to implement the changes.

The yunIO Designer and the services created in yunIO are now accessible via https protocol. 

#### Related Links:
- [Certificate Renewal for TLS](./certificate-renewal)
- [Enabling Secure Network Communication (SNC) via X.509 certificate](../sap/enable-snc-using-pse-file)
- [Online Help: yunIO - Server Settings](https://help.theobald-software.com/en/yunio/server-settings)