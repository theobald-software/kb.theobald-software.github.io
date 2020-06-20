---
layout: releaseNotes
---

# Xtract Universal 3.0

This release includes major changes related to the communication between Xtract Universal Server and Xtract Universal Designer. Transport security and access control has been improved. The file format and folder structure for persisting extractions, sources, destinations, logs, etc. has undergone major changes as well.

## Designer/Server Communication

* Transport security has been improved - Kerberos and TLS 1.1/1.2 are supported now
* Active Directory single-sign on is supported
* Active Directory logon uses Kerberos instead of LDAP (breaking change)

## Access Control

* Individual server permission for custom users
* Individual read/write permission for extractions and sources
* Support for Active Directory groups (breaking change: AD users can no longer be member of an XU user group)

## Files/Folders/Persistence

The config directory uses a new structure for files and folders. Existing configurations (extractions, sources, destinations etc.) can be converted to the new format during setup, or manually by running ConfigConverter.exe from the XU program directory.
