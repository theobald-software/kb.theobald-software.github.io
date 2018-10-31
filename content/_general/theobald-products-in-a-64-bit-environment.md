---
layout: page
title: Theobald Products in a 64-Bit environment
description: Theobald Products in a 64-Bit environment
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

All our products support native 64-bit environments. 
To use our products in a 64-Bit System you need two versions of the librfc32.dll library.

The **64-Bit Version** and the **32-Bit Version**.

Please download the latest versions in the SAP Support Portal: [https://support.sap.com/swdc](https://support.sap.com/swdc)  (Version 7200.0.800.8330)

Please make sure you also have the latest Visual C++ 2005 Runtime. You can get it [here](https://www.microsoft.com/en-us/download/details.aspx?id=14431).  (for librfc32.dll Version 7200.0.800.8330)

- Please copy the **64-bit version** of librfc32.dll in the **<WindowsDir>\System32** folder. 
- The **32-Bit Version** has to be copied in the **<WindowsDir>\SysWOW64** folder.

Both versions of the library have the same file name, but a different file size.

![librfc01](/img/contents/librfc01.png){:class="img-responsive"}

The following exception is thrown, if the librfc32.dll is missing or is in the wrong folder or the C++ Runtimes are missing:

*ERPConnect.ERPException: Cannot access librfc32.dll.Please put a 64-bit version of librfc32.dll in your System32 folder (typically C:\Windows\System32) and a 32-bit version of librfc32.dll in your SysWow64 folder (typically C:\Windows\SysWow64)*.