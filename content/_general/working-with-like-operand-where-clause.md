---
layout: page
title: LIKE operand in WHERE-Clauses
description: Working with LIKE operand in WHERE-Clauses
permalink: /:collection/:path
weight: 12
---

Check the [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In addition to any known operands you can also use the LIKE operand in WHERE-Clauses.

A pattern in an operand is defined using the following wildcard characters:

- "%" is any character string (including an empty string)
- "_" is any character

The pattern is case-sensitive. Trailing blanks in operands are ignored. This also applies in particular to operands of the type string with trailing blanks that are otherwise respected in ABAP.

`MSEG~MBLNR LIKE '00490002__'`  
![like_](/img/contents/like_operator.png){:class="img-responsive"}

`MSEG~MBLNR LIKE '0049%'`
![like_%](/img/contents/like_percent_operator.png){:class="img-responsive"}


****
### Related Links
- [Open SQL - Operands and Expressions - LIKE ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_like.htm)