---
layout: releaseNotes
---

# Support for Oracle Autonomous DB

This release contains adjustments to support connecting to Oracle Autonomous databases with and without mTLS.

# Updated Oracle destination UI 

The Oracle destination UI was updated in order to cleanly display the different ways of connecting to an Oracle database:

* Default connections by providing a host, port, Service name/SID, User and Password as in previous versions
* Wallet connections needing the path to a wallet, the database user and password and the tns name of the requested connection from the wallet e.g. for connecting to an Oracle Autonomous DB with mTLS required
* Connect Descriptor using an Oracle Connect Descriptor, user name and password e.g. for connecting to an Oracle Autonomous DB without mTLS required