---
layout: page
title: Useful information regarding the new BWCube component
description: Useful information regarding the new BWCube component
permalink: /newcube/
weight: 6
---

**THIS IS A NON PRODUCTIVE PAGE FOR INTERNAL USAGE BY THEOBALD SOFTWARE ONLY**


### Why did we rework the BWCube component?
- Internal code rework so as to allow better maintenance and adding additional features in the future
- Modern UI based on WPF
- Added XU list parameters for populating BEx variables with multiple single values.
- new BICS mode (beta)


### Conversion of existing BWCube extractions with  [ConfigConverter.exe](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#upgrading-major-releases---configconverter)
The ConfigConverter.exe runs at setup. The setup routine identifies existing BWCube extractions that need to be converted. The config converter checkbox is then automatically selected. The detection of BWCube extractions that need to be converted is based on whether the config.xml is available in the extractions folder of BWCube extractions.

- Multiple conversions can take place at the same time when updating XU from a previous version. (e.g. Report conversion, SAP sources conversion, BWCube conversion..)
- The config converter does not need to be executed at setup but can be run afterwards.
- as always, a backup folder of non-converted BWCube extractions will be automatically created by the config converter.


![ConfigConverter](/img/contents/NewBWCube_ConfigConverter.png){:class="img-responsive" width="800px"}


### Conversion of existing BWCube extractions and Backward Compatibility (!!!)
BWCube extractions, created with previous versions of the BWCube component should continue to work after an update and after they were converted with ConfigConverter.exe.

**Exceptions to that rule, as of current Build:**
- There won't be a free hand MDX mode *Use MDX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.
- There won't be a BEx 3.x mode *Use BEX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.

![Bex3.x/MDX mode not supported](/img/contents/NewBWCube_UnsupportedModes.png)

After running the config-converter for those extractions, you would see corresponding entries in the config converter log.

```
PT00H00M01.843S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_BEX': Conversion of BEX Cube extractions is not supported. Please contact support.
PT00H00M02.028S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_MDX': Conversion of Cube extractions with custom MDX is not supported. Please contact support.
```

Also, when opening the extractions in the XU Designer, the extraction window is empty.

![manual Filter not supported](/img/contents/NewBWCube_FailedConversion.png){:class="img-responsive" width="800px"}


### No free hand MDX - things that worked in free hand MDX but currently won't work in the new release
- Swapping of Column and Rows axes possible
Measures are always displayed on columns, dimensions are always displayed on rows. 

This is temporary and will be implemented later!

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
- Real Data Preview (in MDX mode, real data is automatically used, no dummy data anymore)


### What is BICS? Why use it?

BICS stands for Business Intelligence Consumer Service. It's the communication interface that SAP's own BI clients like Analysis for Office use, when querying BW data. It is SAP's native BI interface. The official interface for 3rd party tools for querying BW is called OLAP BAPI. This interface uses MDX as a query language. 

Chances are that data extraction through BICS is faster than through MDX. This would currently be the main reason why you would be using BICS.

{: .box-note }
**Note:**  BICS is currently running in beta mode. You may be stumbling over bugs or missing functionality. In this case, contact Theobald Software support. 

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
- BICS is still beta: Especially on newer BW systems, we may be faced with Lookup not fetching any metadata (empty window). In this case, record traces and report to TS Support team.
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





