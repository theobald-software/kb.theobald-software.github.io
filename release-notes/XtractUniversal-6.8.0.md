---
layout: releaseNotes
---

## XtractUniversal 6.8.0

- Destinations
  - DB2
    - The driver is now delivered with the XU setup, since .NET does not work with the .NETFramework driver
    - The driver used now by XU can be found [here](https://www.nuget.org/packages/Net.IBM.Data.Db2/)
  - Salesforce
    - Does now target API version 60
    - Everything else should stay the same and work as expected
- Removed support for GB18030 encoding, since it is not supported out of the box by .NET
  - More information can be found [here](https://github.com/dotnet/runtime/issues/91068)
- Service
  - The Windows Service was reimplemented in rust (old implementation was C++)
- Floating point numbers
  - .NETFramework was not able to correctly convert floating point numbers into strings
    - .NET fixes this - Hence, floating point numbers my now include or omit additional digits
    - Floating point numbers in text form are now guaranteed to represent the correct value
    - More information [here](https://github.com/dotnet/coreclr/pull/22040)