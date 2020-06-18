---
layout: releaseNotes
---

# Xtract Universal 3.12

## Text Encodings for *HTTP - CSV*, *Flat File - CSV* and *OData Atom* destinations

The large list of legacy encodings has been replaced with the following:

* UTF-8
* UTF-16LE
* UTF-16BE
* GB18030

It seems that these encodings should cover most common use cases. **If you have requirements for special encodings, that are not available anymore, please contact support.**


## Byte Order Marks / Preambles and *xu.exe* output redirection

The encodings listed above are used without preamble / BOM in *HTTP - CSV* and *OData Atom*. The *Flat File - CSV* destination on the other hand, uses preambles / BOMs. When redirecting standard output of *xu.exe* (e. g. to a file), preambles / BOMs will be used.

## Updated to .NET Framework 4.6.1

The target framework of all components has been updated from 4.5.2 to 4.6.1. **That means, you need .NET Framework 4.6.1 or higher to run Xtract Universal.**