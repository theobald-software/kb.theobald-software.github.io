---
layout: page
title: How to use target principal field (TPN)
description: How-to-use-target-principal-field(TPN)
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/xtract-universal/security-xu3/user-management) for further information.

### Target principal<br>
To use Kerberos transport encryption or authenticate an Active Directory user, a Kerberos Target Principal Name (TPN) is required. This can be either a User Principal Name (UPN) or a Service Principal Name (SPN).<br>

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

Therefore, the Target Principal Name only needs to be changed in the login window if the service account of the XU Windows Service has been changed.

### If the service runs under another account<br>
Deviating from the standard, the service can also be executed under a different account. 
For this the setting *This account* is selected.

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

For further information please refer to the official [Windows Library](https://msdn.microsoft.com/en-us/library/windows/desktop/aa380525(v=vs.85).aspx)

### Service Principal Name - SPN<br>
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

When dialing into a remote server where the service is not used in the local environment, both an UPN and an SPN can be used in the following form:


|field | value|
|:---|:----|
|XU Server|		 theosoftw2012r2.theobald.local:8064|
|Target Principal as UPN |`DomainAdminUser@THEOBALD.LOCAL`|

|field | value|
|:---|:----|
|XU Server|	 theosoftw2012r2.theobald.local:8064|
|Target Principal as SPN |HTTP/theosoftw2012r2.theobald.local@THEOBALD.LOCAL|
