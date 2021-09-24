---
layout: page
title: Self-signed certificate creation
description: Self-signed certificate creation
permalink: /:collection/:path
weight: 52
---
### Target audience ###
Customers who want to use certificates with Xtract Universal. <br>

### About ###
This article presents two approaches to easily create a self-signed certificate. Please note that the procedure for certificate creation in your company could differ from this guide.  

For transport encryption and authentication in Xtract Universal it is required to [install an X.509 certificate](https://help.theobald-software.com/en/xtract-universal/security/install-x.509-Certificate).

There are two ways for creating an X.509 certificate:

- Certificate released by an (internal) certification authority (CA)
- Self-signed certificate

### Approaches ###
We focus on **self-signed certificates** here. There are several ways to create such certificates, two of which are briefly presented here.

1. **Creation via PowerShell** <br>
Please have a look at the following Microsoft Article about [certificate creation via PowerShell](https://docs.microsoft.com/en-us/powershell/module/pki/new-selfsignedcertificate?view=windowsserver2019-ps).
2. **Creation in IIS** <br>
Regarding the creation of an IIS self-signed certificate exist numerous guidelines in the internet. 
