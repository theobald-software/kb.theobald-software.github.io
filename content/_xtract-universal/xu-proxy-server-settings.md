---
layout: page
title: Proxy server settings in Xtract Universal
description: proxy-server-settings-in-xtract-universal
permalink: /:collection/:path
weight: 120
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for Xtract Universal.<br>
Make sure to use the knowledge base within the new [HelpCenter for Xtract Universal](https://helpcenter.theobald-software.com/xtract-universal/knowledge-base/).

### About ###
Due to corporate network regulations there might be the requirement that all web traffic goes through a web proxy. <br>
This means that Xtract Universal must also connect to a destination (e.g. S3 AWS) via a proxy server. <br>

A proxy server can be configured in Xtract Universal in the following ways: 

### System wide in the Windows settings ###
Open the settings *Network and Internet* in your Windows start menu and set the respective proxy server settings there. 
When connecting to a destination in Xtract Universal the connection will always be routed through the proxy server. 
![XU-proxy-settings-01](/img/contents/xu/xu-proxy-settings-01.png){:class="img-responsive"}

### XU application specific ###
This can be achieved following the [Microsoft guidelines](https://docs.microsoft.com/en-us/dotnet/framework/network-programming/proxy-configuration).
Modify the **Theobald.Xu.Web.Worker.exe.config** and the **XtractDesigner.exe.config** files, that can be found in the Xtract Universal installation folder. <br>
Enter the following section in both files: 
```xml
<system.net>
    <defaultProxy>
        <proxy  proxyaddress="http://[My_Proxyserver]:3128"
                bypassonlocal="True"
        />
    </defaultProxy>
</system.net>
```

{: .box-note }																   
**Note:** Before Xtract Universal version 5.0 the **Theobald.Xu.Web.Worker.exe.config** was called **XtractRun.exe.config**.
If you use Xtract Universal version <= 4.x, modify the **XtractRun.exe.config** instead of the **Theobald.Xu.Web.Worker.exe.config**.

**Theobald.Xu.Web.Worker.exe.config:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
    <system.net>
        <defaultProxy>
            <proxy proxyaddress="http://[My_Proxyserver]:3128" bypassonlocal="true" />
        </defaultProxy>
    </system.net>
    <startup>
        <!-- ... -->
    </startup>
    <runtime>
        <!-- ... -->
    </runtime>
</configuration>
```
**XtractDesigner.exe.config:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<configuration>
​
	<configSections>
		<!-- ... -->
	</configSections>
​
	<system.net>  
		<defaultProxy>  
			<proxy  proxyaddress="http://[My_Proxyserver]:3128"
                bypassonlocal="true"  
        />  
		</defaultProxy>  
	</system.net>
	
```

{: .box-note}
**Note:** Proxy server settings are generic settings that apply to all XU destinations.  

*****
Related Links
- [Microsoft Help: < defaultProxy > Element (Network Settings)](https://docs.microsoft.com/en-us/dotnet/framework/configure-apps/file-schema/network/defaultproxy-element-network-settings)
- [Xtract Universal - Online Help](https://help.theobald-software.com/en/xtract-universal/)











