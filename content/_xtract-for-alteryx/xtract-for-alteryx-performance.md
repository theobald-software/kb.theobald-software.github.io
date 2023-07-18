---
layout: page
title: Xtract fo Alteryx Performance Considerations
description: Test
permalink: /:collection/:path
weight: 20
---

This article contains information on performance measurements for Xtract for Alteryx.<br>
This includes the reliability of performance measurements, best practices to enhance the performance and an example benchmark.

### Reliability of Performance Measurements

Extraction times in Xtract for Alteryx depend mainly on the SAP system’s processing time and the network. 

Performance measurements on SAP systems cannot be generalized because SAP systems are highly customized. 
The performance of SAP systems depends on a variety of factors that are specific to each system. 
These factors include:
- hardware configuration
- network infrastructure
- system workload
- data volume
- software customization 

Conclusion: Performance measurements and benchmarks are not meaningful.

### Factors for Performance Measurements

Performance measurements for Xtract for Alteryx must be specific to each individual system.
The following factors must be considered:
- Network latency
- Data volume
- Hardware capacity (SAP system and Alteryx Designer)

Note that Alteryx workflows are not meant to be real-time data processing solutions, but rather analytical workflows that process mass data. 
Therefore, it is usually not important whether a workflow finishes within a few seconds or a minute.

### Best Practices to Enhance Performance

The following best practices enhance the performance of extractions with Xtract for Alteryx:
- Make sure that the Xtract for Alteryx user and the SAP source system are as close as possible in the network to reduce network latency.
For more information, see [Alteryx Community: Alteryx Workflow Performance - The Network Effect](https://community.alteryx.com/t5/Engine-Works/Alteryx-Workflow-Performance-The-Network-Effect/ba-p/1030910).
- Make sure that the machine that runs the Alteryx workflow has sufficient free hardware capacity (CPU, Memory, etc.).
- Limit the amount of data that needs to be processed and transferred. Example: Use filters and/or WHERE clauses to reduce the number of columns and rows that need to be extracted.
- ODP and Change Data Capture (CDC) extractions offer the option to only extract the changes made to the data since the last extraction.
This makes the extraction faster and more efficient, because less data needs to be transferred and processed.
- Use the latest version of Xtract for Alteryx to take advantage of new features and performance improvements.

{: .box-tip }
**Tip:** Table and Report extractions offer the option to run as background jobs in the SAP system. 
This means that the user can continue to work on the same machine while the extraction is run in the background.

### Example 

The depicted example workflow finishes within 7.2 seconds:<br>

- Workflow: contains Xtract Table to extract SAP tables and a Browse tool to view the extracted data
- Extracted data: 166.169 rows and 15 columns from the SAP Table ACDOCA (Universal Ledger)
- SAP source system: S/4HANA
- Custom Function Module: Z_THEO_READ_TABLE for table extractions
- Hardware: 16GB RAM

![extraction-time](/img/contents/xfa/extraction-time.png){:class="img-responsive"}

#### Related Links
- [Download the latest Version of Xtract for Alteryx](https://my.theobald-software.com)
- [Xtract for Alteryx Version History](https://kb.theobald-software.com/version-history/xtract-for-alteryx-version-history)
