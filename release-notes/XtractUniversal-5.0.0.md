---
layout: releaseNotes
---

# Xtract Universal 5.0
Config files need to be [converted when upgrading.](
https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#upgrading-major-releases---configconverter)

## SAP passwords are encrypted in context of XU Service Account (breaking)
When creating new sources or editing existing ones, the SAP passwords
are encrypted with a key that is derived from the Windows account that
is configured to run the XU service.
The passwords can only be accessed from the same service account,
when restoring a backup or moving the files to a different machine.
If the service account changes, passwords need to be re-entered manually.

## SAP passwords are stored seperately
Passwords are no longer part of sources/[name]/general.json.
They are stored in sources/[name]/password.json now.

## Various changes
* Using new TheoRPC implementation for Designer/Server communication
* Removed backward compatibility for custom users before XU 3.0
* Table Join extractions cannot be created any more
* Renamed XtractWebServer.exe to Theobald.Xu.Web.Listener.exe
* Renamed XtractRun.exe to Theobald.Xu.Web.Worker.exe