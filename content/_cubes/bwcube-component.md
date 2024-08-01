---
layout: page
title: Useful information regarding the BWCube component
description: Useful information regarding the new BWCube component
permalink: /:collection/:path
weight: 6
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base.<br>
Make sure to use the knowledge base within the new [Theobald Software HelpCenter](https://helpcenter.theobald-software.com/).


## About
With Xtract Universal 5.6.0, BOARD Connector 5.5.0 and Xtract for Alteryx 1.15.0, a reworked BW Cube component has been released, see [Version History](https://kb.theobald-software.com/version-history). This article is meant to shed some light on this new component. Most of the following only applies to Xtract Universal and BOARD Connector.

Should you have questions about or issues with the new BWCube component, contact [Theobald Software support](https://support.theobald-software.com) team.

{: .box-note }
**Note:** This article is constantly updated.

## Why did we rework the BWCube component?
- Internal code rework so as to allow better maintenance and adding additional features in the future.
- Modern UI, based on WPF.
- Added XU list parameters for populating BEx variables with multiple single values.
- new BICS mode (beta).


## Conversion of existing BWCube extractions 
### [ConfigConverter.exe](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#upgrading-major-releases---configconverter)
The ConfigConverter.exe runs at setup. The setup routine identifies existing BWCube extractions that need to be converted. The config converter checkbox is then automatically selected. The detection of BWCube extractions that need to be converted is based on whether the config.xml is available in the extractions folder of BWCube extractions.

- Multiple conversions can take place at the same time when updating XU from a previous version. (e.g. Report conversion, SAP sources conversion, BWCube conversion..)
- The config converter does not need to be executed at setup but can be run afterwards.
- As always, a backup folder of non-converted BWCube extractions will be automatically created by the config converter.


![ConfigConverter](/img/contents/NewBWCube_ConfigConverter.png){:class="img-responsive" width="800px"}


### Conversion of existing BWCube extractions and Backward Compatibility 
BWCube extractions, created with previous versions of the BWCube component should continue to work after an update and after they were converted with ConfigConverter.exe.
Also check our [general recommendations](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#new-installation-and-update) before installing an update. This appliess to all our products.


**Exceptions to that rule, as of current Build:**
- There is no free hand MDX mode *Use MDX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.
- There is no mode *Use BEX Extraction* in the new Cube component. Those extractions won't work after an update. This is permanent.

![Bex3.x/MDX mode not supported](/img/contents/NewBWCube_UnsupportedModes.png)

After running the config-converter for those extractions, you would see corresponding entries in the config converter log.

```
PT00H00M01.843S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_BEX': Conversion of BEX Cube extractions is not supported. Please contact support.
PT00H00M02.028S W LegacyCubeConverter: Could not convert extraction 'Z_BICS_MDX': Conversion of Cube extractions with custom MDX is not supported. Please contact support.
```

Also, when opening the extractions in the XU Designer, the extraction window is empty.

![manual Filter not supported](/img/contents/NewBWCube_FailedConversion.png){:class="img-responsive" width="800px"}


{: .box-note }
**Note:**  Functionality that was available through BEx or free hand MDX mode is already available or is supposed to be available in the future in the new BW Cube component.



## MDX mode: old release vs. new release

### Use Description replaced by ColumNameStyle "Text"

![Use Description](/img/contents/NewBWCube_UseDescription.png)
![Use Description](/img/contents/NewBWCube_ColumNameStyle_Text.png)

The combination of "Use Description" and ColumnNameStyle "TextAndCode" or "CodeAndText" is converted to ColumnNameStyle "Text"

### Measure Units in Result Set

![Measure Unit_old](/img/contents/NewBWCube_MeasureUnit_old.png)
![Measure Unit](/img/contents/NewBWCube_MeasureUnit.png)

### Manual Member Filter
When applying a member filter, the filtered dimension is automatically selected.
Member filter supports parameters (equal = and between [])
![Manual Member Filter](/img/contents/NewBWCube_Manual_Filter.png)


### Row Limit (MDX Mode)
New feature: Limit the number of extracted rows. Only available in MDX mode. Not exposed as a URL parameter.

![RowLimit](/img/contents/NewBWCube_RowLimit.png)

### Changed and improved column naming convention
After migration, the old naming convention is still in place.
The new naming convention is applied when:
1. creating a new BWCube extraction.
2. running a metadata refresh on an existing extraction.

Keep in mind that the new naming convention might affect consecutive workflows.


### Features no longer available
![GoneSettings](/img/contents/NewBWCube_GoneSettings.png)

- Sorting Output (gone for good)
- Real Data Preview (in MDX mode, real data is automatically used, no dummy data anymore)
- MDX mode and BEx mode, as mentioned above.



## What is BICS? Why use it?

BICS stands for Business Intelligence Consumer Service. It's the communication interface that SAP's own BI clients like Analysis for Office use, when querying BW data. It is SAP's native BI interface. The official interface for 3rd party tools for querying BW is called OLAP BAPI. This interface uses MDX as a query language. 

Chances are that data extraction through BICS is faster than through MDX. This would currently be the main reason why you would be using BICS.
The BICS mode is also meant as a replacement of the previous Bex 3.x mode.

{: .box-note }
**Note:**  BICS is currently running in beta mode. You may be stumbling over bugs or missing functionality. In this case, contact Theobald Software support. 



### BICS Compatibility Report
Run this report if the BICS mode does not display any metadata.
Send the output of this report to the Theobald Software support team for further analysis.

{: .box-note }
**Note:** The option to run this report is only visible in the Extraction or Cube Settings *after* BICS mode was selected and a metadata lookup was performed.


![BICS_CompatibilityReport](/img/contents/NewBWCube_BICSCompatibilityReport.png)

### Use BICS fast mode
Per default we use a mode that tries to ensure that metadata lookup actually returns metadata in BICS mode, see Known issues/limitations with BICS mode below. The drawback is, that metadata lookup and extraction might take a little longer.
Activate this mode and run the metadata lookup again in BICS mode. If metadata is returned you with this mode switched on, this should also have a positive impact on extraction performance.

### Known issues/limitations with BICS mode

- BICS only works when using the NW RFC protocol. Select this protocol in the SAP source connection setup **before** doing a metadata lookup in BICS mode.
- Metadata lookup might take some time.

![BICS_UseNWRFC](/img/contents/NewBWCube_BICS_UseNWRFC.png)

- Especially on newer BW systems, we may be faced with initial metadata lookup not fetching any metadata (empty window). In this case, run the BICS compatibility report below.
- No Key columns, just Description columns are available for output.
- Automatic Slicing may not work in all cases.
- BICS preselects the dimensions that are placed on Columns or Rows in the BEx Query definition.










