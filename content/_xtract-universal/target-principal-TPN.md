---
layout: page
title: How to use target principal field (TPN)
description: How-to-use-target-principal-field(TPN)
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/xtract-universal/security-xu3/user-management) for further information.

### Target principal

To use Kerberos transport encryption or authenticate an Active Directory user, a Kerberos Target Principal Name (TPN) is required. <br> This can be either a User Principal Name (UPN) or a Service Principal Name (SPN).

The Target Principal Name must correspond either to the UPN of the user under which the XU Windows Service is running, or to an SPN assigned to this user.

By default, the XU Service is executed under the Local System Account. 

![XU3_Default Log on](/img/contents/log_on_local_system_account.png){:class="img-responsive"}

In the AD, this user acts as a computer account. By default, the SPN is assigned to the computer account in the following form:
```
HOST/[hostname]@[domain]
```
Example:

|field | value|
|:---|:----|
|XU Server | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal| HOST/TODD.theobald.local@THEOBALD.LOCAL|

![XU3_Designer_Authentication](/img/contents/XU3_Designer_Authentication.png){:class="img-responsive"}

{: .box-note }
**Note:** The Target Principal Name only needs to be changed in the Xtract Universal Designer login window if the service account of the XU Windows Service has been changed.

### If the service runs under another account

Deviating from the standard, the service can also be executed under a different account e.g. User Principal Name (UPN) or Service Principal Name (SPN). 

{: .box-note }
**Note:** The UPN or SPN of the Xtract Universal Windows service executes the write processes for the target environments in this context. <br> Accordingly, this user must have necessary write permissions for the database.

![Search UPN](/img/contents/select_user_or_service_account.png){:class="img-responsive"}

![XU Log On UPN](/img/contents/log_on_diesen_account.png){:class="img-responsive"}


An UPN is assigned in the following form:
```
<user>@<domain>
```
Example:

|field | value|
|:---|:----|
|XU Server|TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal |`steffan@theobald.local`|


![XU TPN UPN](/img/contents/xu_UPN_steffan@.png){:class="img-responsive"}

{: .box-note }
**Note:** After changing the user context of the Windows service, the UPN or SPN for logging in to the Xtract Universal Server must also be adjusted.

For further information please refer to the official [Windows Library](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380525(v=vs.85).aspx)

### Service Principal Name - SPN

An SPN is assigned in the following form:
```
<service class>/<host>
```
Example:
```
HTTP/theosoftw2012r2.theobald.local
```
The service class and host name are at least required for authenticating a service instance to a logon account. In general, Domain Admin rights are required for processing Manage Service Accounts. 

For further information please refer to the official [Windows Library](https://msdn.microsoft.com/en-us/library/ms677949(VS.85).aspx)

![AD User and computers - SPN](/img/contents/xu_ad_spn.png){:class="img-responsive"}

{: .box-note }
**Note:** Xtract Universal can be used as a distributed application on a central application instance in the company network using appropriate UPNs or SPNs. <br> All users connect to this remote server in the company network using the locally installed Xtract Universal Designer.

When dialing into a remote server where the service is not used in the local environment, both an UPN and an SPN can be used in the following form:

|field | value|
|:---|:----|
|XU Server|		 theosoftw2012r2.theobald.local:8064|
|Target Principal as **UPN** |`DomainAdminUser@THEOBALD.LOCAL`|

|field | value|
|:---|:----|
|XU Server|	 theosoftw2012r2.theobald.local:8064|
|Target Principal as **SPN** |HTTP/theosoftw2012r2.theobald.local@THEOBALD.LOCAL|
