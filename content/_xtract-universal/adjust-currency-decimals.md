---
layout: page
title: Adjust Currency Decimals
description: Adjust Currency Decimals
permalink: /:collection/:path
weight: 54
---
This article describes how to specified the correct references to currency/unit fields for the relevant amount/quantity fields in the data extraction process.

For more information to choose the currency/unit field from the target structure, see [SAP Help: Amount and Quantity Fields Must Reference Currencies and Units](https://help.sap.com/doc/a7b666550852bd7de10000000a44538d/700_SFIN20%20006/en-US/f77ecb53f0f67314e10000000a174cb4.html) and the below mentioned Related Links.

In the following example, the SAP standard field EKPO~NETPR (Net Order Value in PO Currency) of the Data Element Attrributes is referenced to determine the correct decimal places 

based on the currency unit of measure EKKO~WAERS (Currency Key).

### Data Element Attribute - Field EKPO~NETPR

![Data Element Attributes](/img/contents/xu/adjust-currency-decimals/data-element-attribute-specification.png){:class="img-responsive"}

This description serves as an example procedure for reference fields that do not exist in the SAP table to be extracted in order to be able to use the Adjust Currency Decimal functionality.

### Prerequisites

- The use of left outer joins in the Table component by the custom function module Z_THEO_READ_TABLE in version 2.x or higher.
- SAP Authority object for the *Adjust Currency Decimals* settings: *S_TABU_NAM	ACTVT=03; TABLE=TCURX*

### Adjust Currency Decimals Procedure

1. Performing the table look-up on the standard EKPO table and selecting appropriate fields, e.g. EKPO~NETPR (Net Order Value in PO Currency).
![EKPO Table Look-up](/img/contents/xu/adjust-currency-decimals/ekpo-table-look-up.png){:class="img-responsive"}
2. Enable the Advanced Settings *Adjust currency decimals* within Extraction Settings window. (1)
![EKPO Table Look-up](/img/contents/xu/adjust-currency-decimals/enable-adjust-currency-decimals.png){:class="img-responsive"}
3. Execute the *Load Live Preview*. (2)
![ERROR: Cannot-initialize-currency-conversion](/img/contents/xu/adjust-currency-decimals/error-cannot-initialize-currency-conversion.png){:class="img-responsive"}
>Cannot initialize currency conversion because the reference field for field 'NETPR' (Reference field: 'WAERS', Reference table: 'EKKO') was not found.
4. Look-up the requested Table EKKO and select the reference field EKKO-WAERS. (3)
![Reference Field EKKO-WAERS](/img/contents/xu/adjust-currency-decimals/reference-field-ekko-waers.png){:class="img-responsive"} 
5. Create a left outer join condition manually. (4)(5)
![Left-Outer-Join-Condition](/img/contents/xu/adjust-currency-decimals/left-outer-join-condition.png){:class="img-responsive"} 
6. Execute the *Load Live Preview* to check the correct conversion of the currency values. (6)
![Load-live-preview-with-reference-field](/img/contents/xu/adjust-currency-decimals/load-live-preview-with-reference-field.png){:class="img-responsive"}
7. Save the current settings with **[OK]**. (7)

{: .box-note }
**Note:** The decimal places of the field *[NETPR]* in the target destination Microsoft SQL Server is defined exemplarily as follows *NUMERIC(15,4)*.

******

#### Related Links
- [Online Help: Table - Extraction Settings](https://help.theobald-software.com/en/xtract-universal/table/extraction-settings#advanced-settings)
- [Online Help: ODP - Settings](https://help.theobald-software.com/en/xtract-universal/odp/odp-settings#advanced-settings)
- [SAP Help: Settings for Decimals and Currencies](https://help.sap.com/viewer/26c2d5e366bc44c1a98f2a9212a0c49d/1709%20001/en-US/16b080606b114d39ad693529a8a9335f.html)
- [SAP Help: Reference Fields](https://help.sap.com/viewer/6f39239e6c4b1014a39983d35720fc45/7.01.23/en-US/e16a94c7-b9e4-41ed-a749-3a38b9ac39f7.html?q=reference%20field%20for%20currency%20%2F%20amount%20field)