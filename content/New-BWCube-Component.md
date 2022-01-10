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

### ATTENTION - Backward Compatibility
BWCube extractions, created with previous versions of the BWCube component, should continue to work after an update.


**Exceptions to that rule, as of current Build:**
- There won't be a free hand MDX mode *Use MDX Extraction* in the new Cube component. Those extractions won't work after an update. Please contact Theobald Software support.
- There won't be a BEx 3.x mode *Use BEX Extraction* in the new Cube component. Those extractions won't work after an update. Please contact Theobald Software support.

![Bex3.x/MDX mode not supported](/img/contents/NewBWCube_UnsupportedModes.png)
- Extractions, that used a variable/parameter for populating a manual filter selection, won't work after an update. Please contact Theobald Software support.

![manual Filter not supported](/img/contents/NewBWCube_manualFilter.png){:class="img-responsive" width="800px"}

After running the config-converter (as part of the update routing) for those extractions, you would see corresponding entries in the config converter log.
Also, when opening the extractions in the XU Designer, the extraction window is empty.

![manual Filter not supported](/img/contents/NewBWCube_FailedConversion.png){:class="img-responsive" width="800px"}


### ATTENTION - No free hand MDX - things that worked in free hand MDX but won't work in current Build 
- Swapping of Column and Rows axes possible
Measures are always displayed on columns, dimensions are always displayed on rows.

- No hierarchical display of dimensions possible

```
SELECT    { [0EFUZM0P10X7PS3AZVMOPPOFE].[0EFUZM0P10X7PS3AZVMOPPUQY] }
ON COLUMNS,
     NON EMPTY
 DESCENDANTS( [0GL_ACCOUNT                   INT].[LEVEL02])

ON ROWS
FROM
  [0FIGL_C10/TEST_HIERARCHY_01]
  ```


### ISSUE - Hierarchy Selection

- Discrepancy between number of displayed member filters
- Different order

![incomplete Hierarchy Filter](/img/contents/NewBWCube_HierarchyFilter.png){:class="img-responsive" width="800px"}





### INFORMATION - Use Description replaced by ColumNameStyle "Text"

![Use Description](/img/contents/NewBWCube_UseDescription.png)
![Use Description](/img/contents/NewBWCube_ColumNameStyle_Text.png)



