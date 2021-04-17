---
layout: page
title: KNIME Integration via SAP Reader (Theobald Software)
description: KNIME Integration via SAP Reader (Theobald Software)
permalink: /:collection/:path
weight: 20
---
This article describes the integration of Xtract Universal into the BI tool KNIME via SAP Reader (Theobald Software).

### Requirements
The following software applications must be installed for integration into KNIME:
- Latest version of Xtract Universal, obtained from the [Theobald Software website](https://theobald-software.com/en/download-trial)
- Latest version of the [KNIME Analytics Platform](https://www.knime.com/downloads)

### Step by step guide

{: .box-note }
**Note:** Basic knowledge of creating extraction in Xtract Universal is necessary for the following integration scenario, see [Defining a Table Extraction](https://help.theobald-software.com/en/xtract-universal/getting-started/define-a-table-extraction).

1. Create an extraction in Xtract Universal and make sure that the [Web Service - HTTP-CSV](https://help.theobald-software.com/en/xtract-universal/xu-destinations/csv-via-http) (1) Destination is selected for the extraction.
![XU Extraction Webservice HTTP](/img/contents/xu/xu_extraction_webservice_http.png){:class="img-responsive"}
2. Start the KNIME Analytics Platform. 
3. Install the extension [SAP Reader (Theobald Software)](https://hub.knime.com/knime/extensions/org.knime.features.sap.theobald/latest/org.knime.sap.theobald.node.SAPTheobaldReaderNodeFactory).
![Install KNIME Extension](/img/contents/xu/install_sap_reader.png){:class="img-responsive"}
4. Drag & Drop the Node / Source 'SAP Reader (Theobald Software)' (2) onto the KNIME Canvas.
![KNIME Extension](/img/contents/xu/sap_reader_knime_extension.png){:class="img-responsive"}
5. Open the SAP Reader Task 'Settings' and enter the URL address of the Xtract Universal Server, e.g. `http://localhost:8065/` (3).
![SAP Reader Settings](/img/contents/xu/sap_reader_settings.png){:class="img-responsive"}
6. Click on **[Fetch Queries]** (4) and select the desired extraction.
7. Confirm the entry by clicking **[OK]** (5).
8. Start the extraction via **[Execute]**. 
![Execute SAP Reader](/img/contents/xu/execute_sap_reader.png){:class="img-responsive"}
9. Check the extracted SAP data via **[SAP Query Result]**.
![SAP Reader Results](/img/contents/xu/sap_query_results.png){:class="img-responsive"}

****
#### Related Links
- [Xtract Universal Web Server Settings](https://help.theobald-software.com/en/xtract-universal/server/server-settings#web-server)
- [Xtract Universal Web Server Port](https://help.theobald-software.com/en/xtract-universal/server/ports)
- [Connecting Xtract Universal Server](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server#connecting-to-a-server)

