---
layout: releaseNotes
---

# BOARD Connector 3.0

This release includes major changes related to the communication between BOARD Connector Server and BOARD Connector Designer / BOARD. Transport security and access control has been improved. The file format and folder structure for persisting extractions, sources, logs, etc. has undergone major changes as well.
The server uses multiple proceses now instead of one, which makes it more robust and improves parallelization.

## Communication with BOARD Connector Designer 

* Transport security has been improved - Kerberos and TLS 1.1/1.2 are supported now
* Active Directory single-sign on is supported
* Active Directory logon uses Kerberos instead of LDAP (breaking change)

## Communication with BOARD

* TCP keep-alives avoid connection timeouts with long quiet periods and BOARD cloud instances
* X.509 certificate can be set directly in BOARD Connector
* HTTP access restrictions are no longer available - please use Windows firewall or other firewall solutions to implement these rules

## Access Control

* Individual server permission for custom users
* Individual read/write permission for extractions and sources
* Support for Active Directory groups (breaking change: AD users can no longer be member of an custom user group)

## Files/Folders/Persistence

The config directory uses a new structure for files and folders. Existing configurations (extractions, sources, etc.) can be converted to the new format during setup, or manually by running ConfigConverter.exe from the program directory.
