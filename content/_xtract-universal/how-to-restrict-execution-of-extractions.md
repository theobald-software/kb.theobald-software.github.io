---
layout: page
title: How to restrict the execution of extractions?
description: using HTTPS restriction to AD users 
permalink: /:collection/:path
weight: 60
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/de/xtract-universal/) for further information.

The following section describes how to restrict the execution of defined extractions within Xtract Universal.

For a better understanding of the necessary settings, please follow the step-by-step instruction. 

For this functionality an X.509 certificate based on the company's Certificate authority (ca) is mandatory. 
This must then be used to create a personal certificate for the host name running the Xtract Universal Server.<br>
Forward this request to your network administrators. 

### Step-by-step instruction

1. Log-in and start the Xtract Universal Designer.
![xu-designer](/img/contents/xu/xu-connect-screen-neu.png){:class="img-responsive"} 
2. Navigate to **[Server] > [Settings]**.
3. **[Add]** (1) Windows AD users in the *Access Management* section and enable check-box *Restrict Designer access to the following users/groups*.
![XU-config-server](/img/contents/xu/server-settings-config.png){:class="img-responsive"}
4. Change the *Access control* protocol in the *Web Server* tab to *HTTPS - Restricted to AD users with Designer read access* (2).
![XU-web-server](/img/contents/xu/server-settings-web.png){:class="img-responsive"}
5. Click on *Select X.509 certificate* (3) to bind the certificate location using **Local Machine > Personal** and confirm the changes with **[OK]** (5).
![Certificate-Location](/img/contents/xu/edit-certificate-location.png){:class="img-responsive"}
6. Confirm the changes with **[OK]** (4).
7. Confirm the restart of the Xtract Universal Server with **[Yes]**.
![XU-Server-Restart-Question](/img/contents/xu/xu-server-restart-question.png){:class="img-responsive"}
8. Confirm the Info window with **[OK]**.
![Info-Box](/img/contents/xu/xu-server-restart-info.png){:class="img-responsive"}
8. Login to the XU server using following syntax `[host name].[domain]:[port]`
![xu-designer-2](/img/contents/xu/Connect-to-Xtract-Universal-Server.png){:class="img-responsive"}

*****
Related Links
- [Xtract Universal - Config Server](https://help.theobald-software.com/en/xtract-universal/server/server-settings#configuration-server)
- [Xtract Universal - Web Server](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server)
- [Install X.509 Certificate](https://help.theobald-software.com/en/xtract-universal/security/install-x.509-Certificate)
- [Xtract Universal - Server Security](https://help.theobald-software.com/en/xtract-universal/security/server-security)

