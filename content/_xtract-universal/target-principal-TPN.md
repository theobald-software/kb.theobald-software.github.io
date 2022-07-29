---
layout: page
title: How to use target principal field (TPN)
description: How-to-use-target-principal-field(TPN)
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/xtract-universal/security/user-management) for further information.

### Target principal

To use Kerberos transport encryption or authenticate an Active Directory user, a Kerberos Target Principal Name (TPN) is required. This can be either a User Principal Name (UPN) or a Service Principal Name (SPN).

By default, the XU Service is executed under the Local System Account. 

![XU3_Default Log on](/img/contents/log_on_local_system_account.png){:class="img-responsive"}

In the AD, this user acts as a computer account. By default, the SPN is assigned to the computer account in the following form:

|field | syntax | example value |
|:---|:---|:---|
|XU Server | `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal| `HOST/[hostname]@[domain]` | HOST/TODD.theobald.local@THEOBALD.LOCAL|

The Target Principal Name must correspond either to the UPN of the user under which the XU Windows Service is running, or to an SPN assigned to this user.

![XU3_Designer_Authentication](/img/contents/XU3_Designer_Authentication.png){:class="img-responsive"}

{: .box-note }
**Note:** The Target Principal Name only needs to be changed in the Xtract Universal Designer login window if the service account of the XU Windows Service has been changed.

### If the service runs under another account

Deviating from the standard, the service can also be executed under a different account e.g. User Principal Name (UPN) or Service Principal Name (SPN).<br> The UPN or SPN of the Xtract Universal Windows service executes the write processes for the target environments in this context. <br> Accordingly, this user must have necessary write permissions for the database.

### User Principal Name (UPN)

![Search UPN](/img/contents/select_user_or_service_account.png){:class="img-responsive"}

![XU Log On UPN](/img/contents/log_on_diesen_account.png){:class="img-responsive"}

An UPN is assigned in the following form:

|field | syntax | example value |
|:---|:---|:---|
|XU Server| `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal | `[AD-user]@[domain]`| steffan@theobald.local |

![XU TPN UPN](/img/contents/xu_UPN_steffan@.png){:class="img-responsive"}

{: .box-note }
**Note:** After changing the user context of the Windows service, the UPN or SPN for logging in to the Xtract Universal Server must also be adjusted.

### Service Principal Name (SPN)

The service class and host name are at least required for authenticating a service instance to a logon account. In general, <br> Domain Admin rights are required for processing Manage Service Accounts. 

![AD User and computers - SPN](/img/contents/xu_ad_spn.png){:class="img-responsive"}

When dialing into a remote server where the service is not used in the local environment, both an UPN and an SPN can be used in the following form:

|field | syntax | example value |
|:---|:---|:---|
|XU Server| `[host].[domain]:[port]` | theosoftw2012r2.theobald.local:8064 |
|Target Principal as **UPN** | `[AD-user]@[domain]`| svc_xusrv@theobald.local |
|Target Principal as **SPN** | `[service class]/[host]@[domain]` | HTTP/theosoftw2012r2.theobald.local@THEOBALD.LOCAL|

![XU Log on SPN](/img/contents/xu_SPN.png){:class="img-responsive"}

{: .box-note }
**Note:** Xtract Universal can be used as a distributed application on a central application instance in the company network using appropriate UPNs or SPNs. <br> All users connect to this remote server in the company network using the locally installed Xtract Universal Designer.

***********
#### Related Links

- [User Principal Name](https://docs.microsoft.com/en-us/windows/win32/secauthn/user-name-formats?redirectedfrom=MSDN#user-principal-name)
- [Service Principal Names](https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx)



