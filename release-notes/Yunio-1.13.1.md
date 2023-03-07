---
layout: releaseNotes
---

## yunIO 1.13.1

Increase PBKDF2 iterations. Existing passwords will be rehashed on successful login.
Rework authentication procedure to account for old PBKDF2 configurations.
PBKDF2 iterations and algorithm is now serialized to the user information.
Removed a side channel from the custom authentication of the RPC protocol.