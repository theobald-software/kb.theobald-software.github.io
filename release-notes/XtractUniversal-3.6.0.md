---
layout: releaseNotes
---

# Xtract Universal 3.6

The server uses multiple processes now instead of one, which makes it more robust and improves parallelization.

## Running extractions

* TCP keep-alives avoid connection timeouts with long quiet periods and pull destinations
* X.509 certificate can be set directly in Xtract Universal
* HTTP access restrictions are no longer available - please use Windows firewall or other firewall solutions to implement these rules
* HTTPS requires TLS1.1 or above 
* Removed "Max. parallel requests" setting