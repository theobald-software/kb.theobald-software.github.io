---
layout: releaseNotes
---

# ERPConnect 5.0.0 Release Note

## ERPConnect20.dll

ERPConnect20.dll has been around since the early days of .NET 2.0 in 2005.
On July 12, 2011 Microsoft stopped supporting .NET Framework
[2.0](https://support.microsoft.com/en-us/lifecycle/search/?p1=8291) and 
[3.x prior to 3.5 SP1](https://support.microsoft.com/en-us/lifecycle/search/?p1=12292).
That means, there have been no updates published by Microsoft for more than five years now for these .NET versions, not even security patches.  
Support by Microsoft for
[Visual Studio 2005](https://blogs.msdn.microsoft.com/visualstudio/2016/03/11/support-ending-for-visual-studio-2005/)
ended on April 12, 2016.
Therefore, we decided to remove ERPConnect20.dll. It can be easly replaced with ERPConnect35.dll or ERPConnect45.dll

## ERPConnect40.dll and ERPConnect45.dll

Support by Microsoft  for .NET Framework
[4, 4.5 and 4.5.1](https://support.microsoft.com/en-us/lifecycle/search/?p1=14380)
ended on January 12, 2016.

That means there have been no updates and no security patches for these .NET versions for more that a year now.
Therefore, we also decided to remove ERPConnect40.dll. Like ERPConnect20.dll, it can be easly replaced with ERPConnect35.dll or ERPConnect45.dll.
We also updated the target for ERPConnect45.dll to .NET Framework 4.5.2.

## Migration

If you have been using ERPConnect20.dll or ERPConnect40.dll in your projects,
please replace all references to those assemblies with either ERPConnect35.dll or ERPConnect45.dll.

If you want your software to run on CLR2, use ERPConnect35.dll and target NET Framework 3.5 / .NET Framework 3.5 Client Profile.

If you don't need to support CLR2, use ERPConnect45.dll and target .NET Framework 4.5.2 or higher

[Common Langauge Runtime (CLR)](https://msdn.microsoft.com/en-us/library/8bs2ecf4.aspx)  
[How to: Target a Version of the .NET Framework](https://msdn.microsoft.com/en-us/library/bb398202.aspx)

## SOAP is no longer supported by ERPConnect

Because of performance issues related to the verbosity of XML and low customer demand, support for SOAP connections has been removed. SOAP had been marked as deprecated since May 06, 2015. Please use `ClientProtocol.NWRFC` or `ClientProtocol.RFC instead`.
