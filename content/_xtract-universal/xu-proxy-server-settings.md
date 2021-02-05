---
layout: page
title: Proxy server settings in Xtract Universal
description: proxy-server-settings-in-xtract-universal
permalink: /:collection/:path
weight: 51
---

Due to corporate network regulations there might be the requirement that all web traffic goes through a web proxy. <br>
This means that Xtract Universal must also connect to a destination (e.g. S3 AWS) via a proxy server. <br>

A proxy server can be configured in Xtract Universal in the following ways: 

1. **System wide in the Windows settings** <br>
Open the settings *Network and Internet* in your Windows start menu and set the respective proxy server settings there. 
When connecting to a destination in Xtract Universal the connection will always be routed through the proxy server. 
![XU-proxy-settings-01](/img/content/xu-proxy-settings-01.png){:class="img-responsive"}
2. **XU application specific** <br>
This can be achieved following the [Microsoft guidelines](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/proxy-configuration).
Modify the *XtractRun.exe.config'*and the *XtractDesigner.exe.config* files, that can be found in the Xtract Universal installation folder.
For *proxyaddress* set the IP address of your proxy server: 
![XU-proxy-settings-02](/img/content/du/xu-proxy-settings-02.png){:class="img-responsive"}
![XU-proxy-settings-03](/img/content/xu/xu-proxy-settings-03.png){:class="img-responsive"}

{: .box-note}
**Note:** Proxy server settings are generic settings that apply to all XU destinations.  

*****
Related Links
- [Xtract Universal - Online Help](https://help.theobald-software.com/en/xtract-universal/)











