---
layout: page
title: Registering RFC Server in SAP Releases in Kernel Release 720 and higher
description: Registering RFC Server in SAP Releases in Kernel Release 720 and higher
permalink: /:collection/:path
weight: 4
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

As of Kernel Release 720, you can use the parameter gw/acl_mode = 1 to set an initial security environment with regard to starting and registering external programs. If this value is set to 1, the DeltaQ Component for example cannot register the RFC Server and the Customizing Check quits with an exception (RFC_FAILURE).

If so, you have 2 possibilities:

1: You can change the Profile Parameter in the TA RZ10 to 0 (gw/acl_mode = 1). And all the Destinations with different Program IDs can register, and you have no issues regarding the launch of RFC Servers.

2: You can define a White-list of Programs that can register at the SAP Gateway. To do so, you have to create 2 files : secinfo and reginfo. Both files are not existing per default.

The first file secinfo has to contain the following lines:<br>
**VERSION=2**<br>
P TP=XTRACT01 USER=* USER-HOST=* HOST=*<br>
P TP=XTRACT01 USER=* USER-HOST=* HOST=* 

This means, the Program XTRACT01 is allowed to register.

The second one reginfo has to contain the following lines:

**VERSION=2**<br>
P TP=XTRACT01

Same here, this means, the Program XTRACT01 is allowed to register.

You have to copy both files to the following path (data path):
/usr/sap/<SID>/<INSTANCE>/data/

Then you have to extend the following 2 Parameters to the Profile Parameter in the TA RZ10:

gw/reg_info = $(DIR_DATA)/reginfo<br>
gw/sec_info = $(DIR_DATA)/secinfo

After restarting the Gateway or rereading the Security Parameters in the Transaction SMGW (Menu -> Goto-> Expert Functions-> External Security-> Reread), the Customizing Check executes without problems.

See also : [http://scn.sap.com/docs/DOC-42463](http://scn.sap.com/docs/DOC-42463)