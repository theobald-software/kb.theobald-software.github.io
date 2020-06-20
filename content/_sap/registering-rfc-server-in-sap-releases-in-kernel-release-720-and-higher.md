---
layout: page
title: Registering RFC Server in SAP Releases in Kernel Release 720 and higher
description: Registering RFC Server in SAP Releases in Kernel Release 720 and higher
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

As of Kernel Release 720, you can use the parameter *gw/acl_mode* to set an initial security environment with regard to starting and registering external programs e.g., RFC Server required for DeltaQ processing / customizing check. If this value is set to *1*, the DeltaQ component cannot register the RFC Server and the Customizing Check quits with following exception: 
*RFC server is not working, please check gateway info..*

Regarding this faulty behaviour, following alternative settings can be adjusted in the corresponding SAP source system.

#### Alternative I
You can change the Profile Parameter *gw/acl_mode* in the SAP transaction *RZ10* to 0 (default value of the parameter is 1). All RFC-Destinations/ RFC-Server with different Program IDs e.g., XTRACT01 can register.

1. Open 'Edit Profile' using SAP transaction *RZ10*
2. Select the profile name *Default* and select *Extended Maintenance*
3. Click *Change* and edit the parameter value to *0*
![SAP_parameter](/img/contents/parameter_gw_acl_mode.png){:class="img-responsive"}

#### Alternative II
You can define a White-list of Programs that can register at the SAP Gateway. To do so, you have to create two files named *secinfo* and *reginfo*. Both files don't existing per default.

The first file secinfo has to contain the following lines:
```
#VERSION=2
P TP=* HOST=internal,local CANCEL=internal,local ACCESS=internal,local
# the following line should be the LAST line in the secinfo file
P TP=XTRACT01 USER=* USER-HOST=* HOST=* 
```
This means, the RFC-Server *XTRACT01* is allowed to register. 

The second one reginfo has to contain the following lines:
```
#VERSION=2
# the following line should be the LAST line in the reginfo file
P TP=XTRACT01
```
Same here, this means, the RFC-Server *XTRACT01* is allowed to register.

You have to copy both files to the following path (data path):
`/usr/sap/<SID>/<INSTANCE>/data/`

Then you have to extend the following two parameters to the Profile Parameter in the TA *RZ10*:

- gw/reg_info = $(DIR_DATA)/reginfo
- gw/sec_info = $(DIR_DATA)/secinfo

After restarting the Gateway or rereading the security parameters by using SAP transaction *SMGW* and navigate to the following path: `Menu -> Goto -> Expert Functions -> External Security -> Reread`. 

After the external security file(s) reread, the Customizing Check will execute without error messages.

****
See also: 
- [SAP Help: Gateway Security Files secinfo and reginfo](https://help.sap.com/viewer/62b4de4187cb43668d15dac48fc00732/7.3.20/en-US/e216d0427a2440fc8bfc25e786b8e11c.html)
- Official [SAP Note 1850230](https://launchpad.support.sap.com/#/notes/0001850230) (ONE Support Launchpad account required)
- [SAP Community blog](http://scn.sap.com/docs/DOC-42463)
