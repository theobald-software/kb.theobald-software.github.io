---
layout: page
title: Useful information regarding the new BWCube component
description: Useful information regarding the new BWCube component
permalink: /newcube/
weight: 6
---

**THIS IS A NON PRODUCTIVE PAGE FOR INTERNAL USAGE BY THEOBALD SOFTWARE ONLY**

**current Build**
169

### Conversion of existing BWCube extractions with  XU ConfigConverter.exe
The ConfigConverter.exe runs at setup. The setup routine identifies existing BWCube extractions that need to be converted. The config converter checkbox is then automatically selected. The detection of BWCube extractions that need to be convewrted is based on whether the config.xml is available in the extractions folder of BWCube extractions.

- Multiple conversions can take place at the same time when updating XU from a previous version. (e.g. Report conversion, SAP sources conversion, BWCube conversion..)
- The config converter does not need to be executed at setup but can be run afterwards.
- as always, a backup folder of non-converted BWCube extractions will be automatically created by the config converter.


![ConfigConverter](/img/contents/NewBWCube_ConfigConverter.png){:class="img-responsive" width="800px"}


### Conversion of existing BWCube extractions and Backward Compatibility (!!!)
BWCube extractions, created with previous versions of the BWCube component, should continue to work after an update and after they were converted with ConfigConverter.exe.


**Exceptions to that rule, as of current Build:**
- There won't be a free hand MDX mode *Use MDX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.
- There won't be a BEx 3.x mode *Use BEX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.
- Extractions, that used a variable/parameter for populating a manual filter selection, won't work after an update. This is temporary.

![Bex3.x/MDX mode not supported](/img/contents/NewBWCube_UnsupportedModes.png)

![manual Filter not supported](/img/contents/NewBWCube_manualFilter.png){:class="img-responsive" width="800px"}

After running the config-converter for those extractions, you would see corresponding entries in the config converter log.

```
PT00H00M01.843S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_BEX': Conversion of BEX Cube extractions is not supported. Please contact support.
PT00H00M02.010S D LegacyCubeConverter: System.NotSupportedException: Conversion of parameterized filters is not supported. Please contact support.
        Parameter name: 'P_MonthFilter' Dimension: '0CALMONTH'
PT00H00M02.028S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_MDX': Conversion of Cube extractions with custom MDX is not supported. Please contact support.
```

Also, when opening the extractions in the XU Designer, the extraction window is empty.

![manual Filter not supported](/img/contents/NewBWCube_FailedConversion.png){:class="img-responsive" width="800px"}


### No free hand MDX - things that worked in free hand MDX but won't work in current Build  (!!!)
- Swapping of Column and Rows axes possible
Measures are always displayed on columns, dimensions are always displayed on rows. 

This is temporary and will be implemented later.

- No hierarchical display of dimensions possible

This may be temporary only.

```
SELECT    { [0EFUZM0P10X7PS3AZVMOPPOFE].[0EFUZM0P10X7PS3AZVMOPPUQY] }
ON COLUMNS,
     NON EMPTY
 DESCENDANTS( [0GL_ACCOUNT                   INT].[LEVEL02])

ON ROWS
FROM
  [0FIGL_C10/TEST_HIERARCHY_01]
  ```





### Extraction Settings: old release vs. new release

#### Use Description replaced by ColumNameStyle "Text"

![Use Description](/img/contents/NewBWCube_UseDescription.png)
![Use Description](/img/contents/NewBWCube_ColumNameStyle_Text.png)

**ATTENTION**: The combination of "Use Description" and ColumnNameStyle "TextAndCode" or "CodeAndText" will be converted to ColumnNameStyle "Text"

#### Measure Unites in Result Set

![Measure Unit_old](/img/contents/NewBWCube_MeasureUnit_old.png)
![Measure Unit](/img/contents/NewBWCube_MeasureUnit.png)

#### Manual Member Filter
When applying a member filter, the filtered dimension is automatically selected.
Member filter supports parameters (equal = and between [])
![Manual Member Filter](/img/contents/NewBWCube_Manual_Filter.png)


#### Row Limit (MDX Mode)
New feature: Limit the number of extracted rows. Only available in MDX mode. Not exposed as a URL parameter.
![RowLimit](/img/contents/NewBWCube_RowLimit.png)

#### Features no longer available
![RowLimit](/img/contents/NewBWCube_GoneSettings.png)

- MDX mode (gone for good)
- BEx mode (gone for good)
- Sorting Output (gone for good)
- Use multiple single values in URL parameters as manual Filter (currently under development). Currently only Range [ ] is supported.
- Real Data Preview (in MDX mode, real data is automatically used, no dummy data anymore)


### Open Issues


1. Conversion: Formatted Values
2. Conversion: Use Description + TextAndCode --> Text --> Breaking!!
3. //Manual Filter Exclude - > Different number of extraction records: New BWCube component has the correct value, though!
4. Member Filter einen Level tiefer expandieren.
~~5. Konvertiertes Slicing....~~


#### BICS (Business Intelligence Consumer Interface)

- SAP's native interface that is used by their own BI clients for connecting to SAP.
- Is meant as a new feature as well as to replace Bex 3.x mode
- Beta means: You may find a number of things that don't work as expected. Please report to TS Support team. Also, multiple breaking changes until final release are possible and likely.
- BICS is still (very much) beta: Especially on newer BW systems, we may be faced with Lookup not fetching any metadata (empty window). In this case, record traces and report to TS Support team.
- No Key columns, just Description columns
- At Lookup: No asterisk(*) required
- Can extract more InfoCubes than MDX, for example DSOs.


#### Share with colleagues
- "Load more members"- button

- Description Texts have changed, no '_' and Umlaute
new version:
```
CREATE TABLE [Y_BICS_DESCRIPTION_3_2022_02_02_11_14_06_009]
(
   [Buchungskreis] NATIONAL CHARACTER VARYING(255),
   [Buchungskreis Schlüssel] NATIONAL CHARACTER VARYING(4),
   [Buchungskreis Bezeichnung] NATIONAL CHARACTER VARYING(20),
   [Menge in Basiseinh.] NUMERIC(15,6),
   [Auftragsbestand] NUMERIC(15,3),
   [Nettowert OA in StWg] NUMERIC(15,2),
   [Anzahl der Belege] NUMERIC(15,3),
   [Kosten in Statwährng] NUMERIC(15,2)
);
```

converted from 5.x/MDX
```
CREATE TABLE [Z_BICS_DESCRIPTION]
(
   [Buchungskreis] NATIONAL CHARACTER VARYING(255),
   [Land] NATIONAL CHARACTER VARYING(255),
   [Werk] NATIONAL CHARACTER VARYING(255),
   [Verk_ufergruppe] NATIONAL CHARACTER VARYING(255),
   [Buchungskreis_Schl_ssel] NATIONAL CHARACTER VARYING(255),
   [Buchungskreis_Bezeichnung] NATIONAL CHARACTER VARYING(255),
   [Menge_in_Basiseinh_] NUMERIC(15,6),
   [Auftragsbestand] NUMERIC(15,3),
   [Nettowert_OA_in_StWg] NUMERIC(15,2),
   [Anzahl_der_Belege] NUMERIC(15,3),
   [Kosten_in_Statw_hrng] NUMERIC(15,2)
);

```   


- Slicing Dimension: Performance improvements (1 million records, 12 minutes versus 20 minutes)





