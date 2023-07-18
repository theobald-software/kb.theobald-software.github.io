---
layout: page
title: Certificate Renewal for TLS
description: Certificate Renewal for TLS
permalink: /:collection/:path
weight: 5
---

The following article shows how to manually and automatically renew a X.509 certificate used for TLS in yunIO.

### Renewing a Certificate Manually

{: .box-warning }
**Warning! The certificate is already expired:** 
To access the Designer after a certificate has expired, delete the `tls.json` file in the installation directory of yunIO and restart the yunIO service.
This resets all TLS settings in yunIO, including the certificate selection.

#### Renew a Certificate with New Key

1. Before the old certificate expires, install a new certificate on the server machine.
2. Open the yunIO Designer and switch to the new certificate, see [Server Settings - Transport Layer Security](https://help.theobald-software.com/en/yunio/server-settings#transport-layer-security).
3. Delete the old certificate from the Microsoft Certificate Store.

#### Renew a Certificate with the Same Key

1. Block external access to yunIO using the firewall.
2. Open the yunIO Designer and enable anonymous access, see [Server Settings - Anonymous Access](https://help.theobald-software.com/en/yunio/server-settings).
3. Disable TLS in the Designer, see [Server Settings - Transport Layer Security](https://help.theobald-software.com/en/yunio/server-settings#transport-layer-security).
4. Renew the certificate with the same key using Windows AD Certificate Services.
5. Enable TLS in the Designer with the new certificate.
6. Disable anonymous access in the Designer.
7. Allow external access to yunIO using the firewall.

### Renewing a Certificate Automatically

If you're using [win-acme](https://www.win-acme.com/reference/plugins/installation/script) for the renewal of Letsencrypt certificates, run the following PowerShell script with the same client that runs win-acme:
- [Download the PowerShell Script for Letsencrypt Certificate Renewal](/files/yunio/yunio-le.ps1){:download="/files/yunio/yunio-le.ps1"}

#### About win-acme
win-acme creates a scheduled task for the renewal process. 
When this process is triggered, it issues a new certificate and stores it in the Windows Certificate Store. 
The old certificate is deleted. 

#### About the PowerShell Script

The `yunio-le.ps1` script replaces the old certificate in the yunIO settings with the new certificate.
No manual changes in yunIO are required.

The `yunio-le.ps1` script requires 2 input parameters:
- the thumbprint of the old certificate
- the thumbprint of the new certificate


******

#### Related Links
- [Installing an X.509 Certificate](./x509-certificate).
- [Enabling Secure Network Communication (SNC) via X.509 certificate](../sap/enable-snc-using-pse-file)
- [Online Help: yunIO - Server Settings](https://help.theobald-software.com/en/yunio/server-settings)