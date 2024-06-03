---
layout: page
title: Formats and Conversions in Power Automate
description: Formats and Conversions in Power Automate
permalink: /:collection/:path
weight: 10
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for yunIO.<br>
Make sure to use the samples within the new [HelpCenter for yunIO](https://helpcenter.theobald-software.com/yunio/knowledge-base).

This article offers conversion tips and code templates for working with yunIO in Power Automate.

### Leading Zeros

Data in SAP often uses leading zeros to maintain a 10 character convention, e.g., KUNNR, MATNR, COST_CTR, etc.
yunIO also requires leading zeros for these parameters.

The following code adds leading zeros to a variable *strValue*: <br>
`concat(substring('0000000000', 0, sub(10,length(variables('strValue')))), variables('strValue'))`

### Date Conversion

When working with yunIO dates use the SAP format "yyyyMMdd".<br>
The following code converts German ("dd.MM.yyyy") and US ("MM/dd/yyyy") dates to the SAP date format ("yyyyMMdd") for variable *strDate*:

```
concat(
    substring(variables('strDate'), 6, 4),

    if(contains(variables('strDate'), '/'),
        concat(
            substring(variables('strDate'), 0, 2),
            substring(variables('strDate'), 3, 2)
            ),
        concat(
            substring(variables('strDate'), 3, 2),
            substring(variables('strDate'), 0, 2)
            )
        )
)
```

### Syntax in Different Language Settings

The Power Apps coding syntax is dependent on the configured language settings.
This impacts:
- Arguments in function calls
- Fields in a record
- Records in a table

For more information, see [Microsoft: Formula separators and chaining operator](https://docs.microsoft.com/en-us/power-platform/power-fx/global#formula-separators-and-chaining-operator).


| Author's language decimal separator |	Power Apps decimal separator |	Power Apps list separator |	Power Apps chaining operator |
|-------------------------------------|------------------------------|----------------------------|------------------------------|
|. (dot or period)	                  | . (dot or period)	         |, (comma)	                  | ; (semi-colon)               |
|, (comma)	                          | , (comma)	                 | ; (semi-colon)	          | ;; (double semi-colon)       |

Example: the English `ClearCollect(SAPData,yunIO_1.ReadCSKT());` becomes `ClearCollect(SAPData;yunIO_1.ReadCSKT())` for German language users. <br>

******

#### Related Links
- [How to use yunIO to populate Drop Down Controls in Power Apps](./populating-drop-down-controls-in-power-apps)
- [Sync Salesforce with SAP using Power Automate and yunIO](./salesforce-power-automate-scenario)
