---
layout: releaseNotes
---

# Xtract Universal Designer 5.4.2
* Fixed the destination settings window, which did not load the SAP extraction information correctly and thus showed the SAP object name as "UNDEFINED".
* Fixed an issue where the designer would disconnect from the server but refuse a new login with a "already connected" message.

# Xtract Universal Server 5.4.2
* Fixed an issue where the server would not gracefully shutdown the connection.
  This caused unnecessary error messages in the designer.