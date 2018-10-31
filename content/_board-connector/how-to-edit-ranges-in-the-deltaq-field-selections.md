---
layout: page
title: How to Edit Ranges in the DeltaQ Field Selections
description: How to Edit Ranges in the DeltaQ Field Selections
permalink: /:collection/:path
weight: 3
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

If a datasource offers a selection, there is a link "Edit" shown in the field selection of the DeltaQ Component. If you click on this link, the Edit Range dialog opens, and you can define a condition/selection for this datasource.

The field **Sign** hast 2 Options: Include - Exclude. This selection determines for every row whether the result of the condition is included or excluded in the entire resulting set for all rows.

The field **Option** contains the selection option for the condition of the row in form of logical operators:

'='  Equal

'!=' Not Equal

'<' Lower Than

'<=' Lower Equal Than

'>' Greater Than

'>=' Greater Equal Than

'[]' BeTween

'][' NotBetween

' * ' Contains Pattern (Like)

**Low Value** column is designated for the comparison value or the lower interval limitation.

**High Value** column is designated for the upper interval limitation.

A Sample for Edit Range with static values:


![DeltaQRangeDefintion](/img/contents/DeltaQRangeDefintion.png){:class="img-responsive"}

A Sample for Edit Range with SSIS Variables:

![DeltaQRangeDefintion-Variables](/img/contents/DeltaQRangeDefintion-Variables.png){:class="img-responsive"}