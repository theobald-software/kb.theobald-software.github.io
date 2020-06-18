---
layout: page
---

# Xtract Universal 3.11

Access to the web server can now be restricted to Active Directory users with Designer read access.
In order to use this feature Kerberos has to be configured to work with the XU server.
For security reasons it is no longer possible to have *HTTP* and *HTTPS* enabled at the same time (breaking change). If both *HTTP* and *HTTPS* were enabled the server will automatically disable *HTTP* and only use *HTTPS*.