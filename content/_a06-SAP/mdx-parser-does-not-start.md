---
layout: page
title: MDX parser does not start
description: MDX parser does not start
permalink: /:collection/:path
weight: 9
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If the MDX execution terminates with an error message on the SAP BW system and if a connection test over the transaction SM59 not possible, then have a look at the

- [SAP Note 1032461](https://cdn-files.theobald-software.com/help/1032461EN.pdf) (English version) 
- [SAP Note 1032461](https://cdn-files.theobald-software.com/help/1032461.pdf) (German version)

Carry out the following steps:

- Read SAP Note 581509. This SAP Note contains general information about the "timeout during allocate" error message.

- Download the librfc32 from Kernel download location (Select Non Unicode Kernel to get librfc32, otherwise you might get librfc32u).

- Implement the current version of librfc32.dll (not librfc32u.dll) on ALL application servers. 
 

- The file librfc32.dll can be installed several times. Replace all versions. Note 336693 describes how to replace this DLL on the Windows platform.

- If file librfc32.dll is not contained in the same directory as mdxsvr.exe, it must be in one of the search path directories (environment variable PATH). The MDX parser (program mdxsvr) is located in a directory of the application server: /usr/sap/<SID>/sys/exe. To check whether the newly installed librfc32.dll is contained in the path, carry out the following steps on the Windows platform:

	- Use the command CMD to open a command line.
	- Execute the command SET.
	- Check whether the environment variable PATH contains a directory that contains librfc32.dll (for example, <Windows>\System32).

- In transaction SM59, check whether the setting "Communication Type with Target System" ("MDMP & Unicode" tab) is set to "Non-Unicode" for the RFC destination MDX PARSER.

- Install "Microsoft Visual C++ 2005 Service Pack 1 Redistributable Package ATL Security Update" (KB973544) [vcredist_x64.exe]
[http://www.microsoft.com/en-us/download/details.aspx?id=14431](http://www.microsoft.com/en-us/download/details.aspx?id=14431)

If these steps are not successful, try to start the MDX parser as a local RFC server. Carry out the following steps for the Windows platform:

- Use the command CMD to open a command line.
- Switch to the directory that contains mdxsvr.exe (/usr/sap/<SID>/sys/exe).
- Start the MDX parser as a server using the following command: mdxsvr -amdxparser -g<host> -x<gateway> -t (replace <host> and <gateway> accordingly).

If the program can be started successfully, the functions should not be impaired.

If a test of the RFC destination still results in an error, enter the complete path for the file mdxsvr.exe in the "Program" field (for example, j:\usr\sap\BWP\SYS\exe\run\mdxsvr). Then check whether the test still results in an error. If the test is successful this time, it indicates that a PATH variable is incomplete.

Important: If there should be error messages with regard to the MDX parser from BW 7.30 on (for example, in the system log), even though the statement can be parsed successfully, refer to the SAP Notes 1572695 and 1666816.