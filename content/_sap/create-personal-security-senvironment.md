---
layout: page
title: Create Trust to SAP Cloud Systems
description: SAP TCP/IP Ports
permalink: /:collection/:path
weight: 50
---

The following article shows how to create trust between ... and SAP cloud systems.
Trusting the SAP cloud is a prerequisite for connecting to SAP via WebSocket RFC. 

{: .box-note }
**Note:** This article leads you through all steps required to trust the server certificate. It does not cover client certificate authentication.


### Create 

SAP uses a proprietary file format for storing client and server certificate (chains), called [PSE (Personal Security Environment)](https://help.sap.com/saphelp_nw73/helpdata/en/4c/61a6c6364012f3e10000000a15822b/frameset.htm). 

1. Log into the SAP cloud in your browser.
2. view certificate
3. download certificate with chain
4. get sapgenpse tool from \\HORIZON\Software\SAP\SAPCRY.ZIP
5. create a client PSE sapgenpse.exe gen_pse -p <client.pse> -v "CN=COMPUTER.theobald.local, C=DE, S=BW, O=TS, OU=DEV". <client.pse> is just a file name, the tool creates its own repository in a standard path, unless changed via environment variable SECUDIR or specifying an absolute path. The PSE must be created without a password/pin, otherwise reading it will not be possible
6. add certificate chain to created or existing PSE sapgenpse.exe maintain_pk -a <s4hana-cloud-sap-chain.pem> -p <client.pse>


<!---

Using in Xtract Universal
Because Xtract Universal is running as the local SYSTEM user, specify the absolute path to the PSE file, e.g.: C:\Users\<USER>\AppData\Local\sec\client.pse.

Instead of using the default User field used for all other SAP systems, cloud systems require the usage of the Alias user field. Do not specify a User.

your comment goes here
-->