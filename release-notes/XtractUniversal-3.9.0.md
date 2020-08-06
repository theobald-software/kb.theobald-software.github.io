---
layout: releaseNotes
---

# Xtract Universal 3.9

The server can now impersonate Active Directory users using Kerberos. This allows SSO on SAP systems and SQL server destinations from various clients including the *Alteryx Plugin* and *xu.exe*. 

For security reasons this feature requires the usage of *HTTPS*. Using **"Require SAP credentials to be explicitly supplied for execution"** also requires *HTTPS* now, which is a breaking change.