---
layout: page
title: Calculate the length of the SAP type QUAN when setting up an RFC-Server
description: How to calculate the length of the SAP type QUAN when setting up an RFC-Server
permalink: /:collection/:path
weight: 32
---

This sample shows how to calculate the length of the SAP type QUAN in .NET.

When defining the SAP type QUAN in your RFC Server you also have to define it as a BCD (binary coded decimal) in .NET. 
The length in .NET is not the same as in SAP.
Every digit from SAP needs a half byte. At the end you have to round up to a complete byte. 

Example:

4 digits: 4 * 0.5 + 0.5 = 2.5 -> 3 byte Length<br>
13 digits: 13 * 0.5 + 0.5 = 7 -> 7 byte Length

The following code converts a QUAN field in SAP with the length 13,3:

```csharp
MYRFCTable.Columns.Add("BREIT", 7, 3, RFCTYPE.BCD);
```