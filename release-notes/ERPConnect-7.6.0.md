---
layout: releaseNotes
---

# Changes to R3Connection
The following properties/methods have been removed.

* `MultithreadingEnvironment` The feature is always active and cannot be disabled.
* `AllowStartProgram(string programList)`. Please contact support if you really need this feature.


The following properties/constructors/methods have been marked as obsolete and will be removed 2023-10-01.

* `ConnectionString` --> Please use `ParseConnectionString()` instead.
* `R3Connection(string connectionString)` --> Please use `ParseConnectionString()` instead.
* `Open(string rfcConnectionString)`--> Please use `ParseConnectionString()` instead.
* `OpenSSO(string ticket, bool loadBalancing)` --> Please set `LogonTicket` and `UsesLoadBalancing` instead.
* `OpenSSO(string ticket)` --> Please set `LogonTicket` instead.
* `Open(bool useLoadBalancing)` --> Please set `UsesLoadBalancing` instead.
* `GetSSOTicket(bool loadBalancing)` -->  Please set `UsesLoadBalancing` instead.
* `SetAbapDebug(bool enabled)` --> Please use external breakpoints in ABAP debugger instead.


`ClientProtocol.RFC` has been marked as obsolete. Please use `ClientProtocol.NWRFC` instead. The default value will be switched to NWRFC 2023-10-01.