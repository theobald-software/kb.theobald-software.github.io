---
layout: page
title: Xtract Universal Server Troubleshooting
description: Xtract Universal Server Troubleshooting
permalink: /:collection/:path
weight: 170
---
The Xtract Universal (XU) server is a standard Windows service that runs under the Local System Account by default. 

![XU service](/img/contents/xu_service.png){:class="img-responsive"}

In the Active Directory (AD), this user acts as a computer account. By default, the Service Principal Name (SPN) is assigned to the computer account in the following form:

|Field | Syntax | Example value |
|:---|:---|:---|
|XU Server | `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal| `HOST/[hostname]@[domain]` | HOST/TODD.theobald.local@THEOBALD.LOCAL|

The Target Principal must correspond either to the UPN of the user under which the XU Windows Service is running, or to an SPN assigned to this user.

![XU3_Designer_Authentication](/img/contents/XU3_Designer_Authentication.png){:class="img-responsive"}

{: .box-note }
**Note:** The Target Principal only needs to be changed in the Xtract Universal Designer login window if the service account of the XU Windows Service has been changed.

### Windows service does not start

When a service does not start, configure the service to use an user account with the following rights:

- **Local Security Policy > Local Policies > User Right Management**: *Log on as a service*
- Permissions for the installation folder and subfolders: *Modify*
- HTTP URL Access Control List e.g.,  `urlacl url=https://+:80/MyUri user=DOMAIN\user` 

### User Principal Name (UPN)

Deviating from the standard, the service can also be executed under a different account:
- User Principal Name (UPN) 
- Service Principal Name (SPN)

An UPN is assigned in the following form:

|Field | Syntax | Example value |
|:---|:---|:---|
|XU Server| `[host].[domain]:[port]` | TODD.theobald.local:8064 (or localhost:8064)|
|Target Principal | `[AD-user]@[domain]`| steffan@theobald.local |

{: .box-note }
**Note:** After changing the user context of the Windows service, the UPN or SPN for logging in to the Xtract Universal Server must also be adjusted.

To configure the service to use with UPN, do the following steps:

1. Open Windows Services (Local).
2. Selection of the Xtract Universal service.
![XU service](/img/contents/xu_service.png){:class="img-responsive"}
3. Right click to open properties.
4. Select the Log-on tab and switch to 'This Account'.
5. Search for Windows Ad users via **[Browse ...]**.
7. Change the **[Locations ...]** to 'Entire Directory'.
![Search UPN](/img/contents/select_user_or_service_account.png){:class="img-responsive"}
8. Select an existing UPN or SPN and confirm with **[OK]**.
![XU Log On UPN](/img/contents/log_on_diesen_account.png){:class="img-responsive"}
9. Apply the changes by restarting the Xtract Universal service.
10. Adjust the UPN in the Target Principal field when logging on to the XU service.
![XU TPN UPN](/img/contents/xu_UPN_steffan@.png){:class="img-responsive"}

****
#### Releated Links
- [Microsoft documentation](https://docs.microsoft.com/en-us/windows/win32/http/add-urlacl)
- [How to use target principal field (TPN)](https://kb.theobald-software.com/xtract-universal/target-principal-TPN)












