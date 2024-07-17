---
layout: releaseNotes
---

## Board Connector 6.6.0

The runtimes are the Windows Desktop .NET runtime and the ASP.NET core runtime for the WCF support. The official Microsoft download mirror can be found [here](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

- Removed support for GB18030 encoding, since it is not supported out of the box by .NET
  - More information can be found [here](https://github.com/dotnet/runtime/issues/91068)
- Service
  - The Windows Service was reimplemented in rust (old implementation was C++)
- Floating point numbers
  - .NETFramework was not able to correctly convert floating point numbers into strings
  - .NET fixes this - Hence, floating point numbers may now include or omit additional digits
  - Floating point numbers in text form are now guaranteed to represent the correct value
  - More information [here](https://github.com/dotnet/coreclr/pull/22040)
