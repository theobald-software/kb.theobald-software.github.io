---
layout: page
title: Authorization Objects - SAP User Rights
description: Authorization Objects - SAP User Rights
permalink: /:collection/:path
weight: 1
---

### About
To use Theobald Software products you need an SAP connection user with sufficient authorization in SAP. Authorizations are assigned via authorization objects in SAP. <br>

The authorizations in the section [General authorization objects](#general-authorization-objects) are required to establish an SAP connection with the SAP application server. 
The required authorizations for each extraction type are listed in their respective section.  

Redirect this article to your SAP Basis administrators to get the relevant authorization objects for your SAP connection user.  

{: .box-tip }
**Tip:** Theobald Software provides SAP profiles that include authorizations, see [SAP Authorization Profiles](#sap-authorization-profiles).

### SAP Authorization Profiles

Theobald Software collected and combined the necessary authorizations for all extraction types into corresponding SAP roles. <br>
You can download the SAP profiles and upload them to your SAP system:

Component / Extraction Type  | SAP Role File
------------ | -------------
[General authorization objects](#general-authorization-objects) | [ZXTGENERAL.SAP](/files/sap_roles/ZXTGENERAL.SAP)
[BAPI](#bapi) | [ZXTBAPI.SAP](/files/sap_roles/ZXTBAPI.SAP)
[BW Cube](#bw-cube--bw-query)|[ZXTQUERY.SAP](/files/sap_roles/ZXTQUERY.SAP)
[BW Hierarchy](#bw-hierarchy) |[ZXTBWHIERARCHY.SAP](/files/sap_roles/ZXTBWHIERARCHY.SAP)
[ODP (Operational Data Provisioning)](#odp) |[ZXTODP.SAP](/files/sap_roles/ZXTODP.SAP)
[OHS (Open Hub Services)](#ohs) |[ZXTOHS.SAP](/files/sap_roles/ZXTOHS.SAP)
[SAP Query](#sap-query)|[ZXTQUERY.SAP](/files/sap_roles/ZXTQUERY.SAP)
[Report](#report)|[ZXREPORT.SAP](/files/sap_roles/ZXREPORT.SAP)
[Table](#table) | [ZXTABLE.SAP](/files/sap_roles/ZXTABLE.SAP) 
[Table CDC](#table-cdc) | [ZXTABLECDC.SAP](/files/sap_roles/ZXTABLECDC.SAP)
[DeltaQ (depricated)](#deltaq-depricated) |[ZXTDELTAQ.SAP](/files/sap_roles/ZXTDELTAQ.SAP),[DELTAQ_CUSTOMIZING_CHECK](/files/sap_roles/DELTAQ_CUSTOMIZING_CHECK.SAP)



{: .box-note }
**Note** If you still get an authorization error, ask SAP Basis to record an ST01-/ or SU53-authorization trace in SAP. This trace shows which authorizations objects are missing.

### General authorization objects
The following objects are required to establish a connection to SAP. <br>
*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SYST; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SRFC; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RFC1; ACTVT=16
</pre>


</details> 

Download the corresponding SAP role --- [SAP profile for general authorization](/files/sap_roles/ZXTGENERAL.SAP).

### BAPI
*Click to expand the details:*
<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=DDIF_FIELDINFO_GET, SDIFRUNTIME     
</pre>
</details> 

Download the corresponding SAP role --- [SAP profile for BAPI Extractions](/files/sap_roles/ZXTBAPI.SAP).

### BW Cube / BW Query 

Authorizations for the underlying Queries, Cubes, InfoAreas and analysis need to be assigned via: 

- ```S_RS_COMP```
- ```S_RS_COMP1```
- ```S_RS_AUTH```


*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOB; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RRX1; ACTVT=16
S_TABU_NAM       ACTVT=03; TABLE=RSRREPDIR
S_TABU_NAM       ACTVT=03; TABLE=RSZGLOBV
</pre>

</details>


<details> <summary> Necessary SAP authorizations - BICS mode </summary>

<pre>
S_RFC            RFC_TYPE=FUGR;RFC_NAME=SYST;ACTVT=16;type=RF;name=RFCPING;
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOBJS_RFC_INTERFACE; ACTVT=16; type=RF;name=RSOBJS_GET_NODES;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSAO_CORE;ACTVT=16;type=RF;name=RSAO_BICS_SESSION_INITIALIZE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_CONSUMER;ACTVT=16;type=RF;name=BICS_CONS_CREATE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER;ACTVT=16;type=RF;name=BICS_PROV_OPEN;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER_VAR;ACTVT=16;type=RF;name=BICS_PROV_VA
S_ADMI_FCD       S_ADMI_FCD=PADM;
</pre>

</details>



<details> <summary> Necessary SAP authorizations - Date conversion (optional) </summary>

<pre>
S_TABU_NAM       ACTVT=03; TABLE=DD03L
</pre>

</details>

Alternatively, you can assign the SAP role template  ```S_RS_RREPU```. <br>

Download the corresponding SAP role --- [SAP profile for BW Cube / BW Query](/files/sap_roles/ZXTQUERY.SAP).

### BW Hierarchy
*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSNDI_SHIE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=BAPI_IOBJ_GETDETAIL; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=DDIF_FIELDINFO_GET; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC1; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC_GET_FUNCTION_INTERFACE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RFC_READ_TABLE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSBAPI_IOBJ; ACTVT=16 
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=RSNDI_SHIE; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC          RFC_TYPE=FUNC, FUGR; RFC_NAME=SYST; ACTVT=16
S_RS_ADMWB     RSADMWBOBJ=INFOOBJECT; ACTVT=03
S_TABU_DIS     ACTVT=02, 03; DICBERCLS=BWC
S_TABU_DIS     ACTVT=02, 03; DICBERCLS=BWG
S_TABU_NAM     ACTVT=02, 03; TABLE=/BIC/*
S_TABU_NAM     ACTVT=02, 03; TABLE=ENLFDIR
S_TABU_NAM     ACTVT=02, 03; TABLE=RSHIEDIR
 </pre>

</details>


Download the corresponding SAP role --- [SAP profile for BW Hierarchy](/files/sap_roles/ZXTBWHIERARCHY.SAP).


### ODP

For a complete and detailed list of authorization objects refer to [SAP Note 2855052](https://launchpad.support.sap.com/#/notes/2855052) - Authorizations required for ODP Data Replication API 2.0. 

*Click to expand the details:*
<details> <summary>Necessary SAP authorizations - <i>Adjust currency decimals</i> setting</summary> 

<pre>
S_TABU_NAM       ACTVT=03; TABLE=TCURX
</pre>

</details> 

Download the corresponding SAP role ---  [SAP profile for ODP](/files/sap_roles/ZXTODP.SAP). 


### OHS

Alternatively, you can assign the SAP role template  ```S_BI-WHM_RFC ```. <br>

*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC      RFC_TYPE=FUGR; RFC_NAME=RSB3RD; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=BAPT; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=BATG; ACTVT=16
S_RFC      RFC_TYPE=FUGR; RFC_NAME=RSPC_API; ACTVT=16
S_TABU_DIS RC=0 ACTVT=03; DICBERCLS=&NC& 
S_RS_PC    RSPCCHAIN=*;RSPCAPPLNM=*; RSPCPART=DEFINITION; ACTVT=03
S_RS_PC    RSPCCHAIN=*;RSPCAPPLNM=*; RSPCPART=RUNTIME; ACTVT=16
S_CTS_ADMI CTS_ADMFCT=TABL
S_RS_DTP   RSTLDTPSRC=CUBE; RSSTDTPSRC=*; RSONDTPSRC=0D_DECU; RSTLDTPTGT=DEST; RSSTDTPTGT=*; ACTVT=16
S_BTCH_ADM BTCADMIN=Y
S_BTCH_JOB JOBGROUP=*; JOBACTION=RELE
S_RS_TR    RSTLOGOSRC=CUBE; RSSTTRSRC=*; RSOBJNMSRC=0D_DECU; RSTLOGOTGT=DEST; RSSTTRTGT=' '; RSOBJNMTG=*; ACTVT=16
S_RS_AUTH  BIAUTH=0BI_ALL
S_ADMI_FCD S_ADMI_FCD=ST0R
</pre>

</details>


Download the corresponding SAP role ---  [SAP profile for OHS](/files/sap_roles/ZXTOHS.SAP).

### SAP Query
*Click to expand the details:*
<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=AQRC; ACTVT=16 
</pre>

</details>

Download the corresponding SAP role ---  [SAP profile for SAP Query](/files/sap_roles/ZXTQUERY.SAP).


### Report

*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ZXTRACTABAP; ACTVT=16
S_TABU_NAM       ACTVT=03; TABLE=TRDIR, TRDIRT, TSTC, VARID
S_GUI            ACTVT=61 
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC& 
S_TABU_DIS       ACTVT=03; DICBERCLS=SS
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
</pre>

</details>

{: .box-note }
**Note** The necessary transport request for function group *ZXTRACTABAP* is located in the following path: ```C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip``` of the default installation.


Download the corresponding SAP role ---  [SAP profile for Report](/files/sap_roles/ZXREPORT.SAP).


### Table

*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=SDTX, SDIFRUNTIME, Z_THEO_READ_TABLE                   
S_TABU_DIS       ACTVT=03; DICBERCLS=XXXX
S_TABU_NAM       ACTVT=03; TABLE=DD02V, DD17S, DD27S, ENLFDIR
S_DSAUTH         ACTVT=16;    
</pre>

XXXX (stands for a placeholder) is the authorization group for the table. To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. 
If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.
</details>

{: .box-note }
**Note** The transport request for function group *Z_THEO_READ_TABLE* is located in the following path: ```C:\Program Files\[XtractProduct]\ABAP\Table``` of the default installation. 

When executing the custom function module Z_THEO_READ_TABLE in the background:

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
</pre>

</details>

<details> <summary> Necessary SAP authorizations - <i>Count Rows</i> button using Z_THEO_READ_TABLE</summary> 

<pre>
S_RFC            RFC_TYPE=FUNC; RFC_NAME=EM_GET_NUMBER_OF_ENTRIES; ACTVT=16  
</pre>

</details>

<details> <summary> Necessary SAP authorizations - <i>Adjust currency decimals</i> setting</summary> 

<pre>
S_TABU_NAM       ACTVT=03; TABLE=TCURX
</pre>

</details>

Download the corresponding SAP role ---  [SAP profile for Table](/files/sap_roles/ZXTABLE.SAP). 

### Table CDC

*Click to expand the details:*

<details> <summary> Necessary SAP authorizations </summary>

<pre>
S_RFC            ACTVT=16; RFC_TYPE=FUGR, FUNC; RFC_NAME=SDTX, SDIFRUNTIME, /THEO/CDC_*, /THEO/READ_TABLE            
S_TABU_DIS       ACTVT=03; DICBERCLS=XXXX
S_TABU_NAM       ACTVT=03; TABLE=DD02V, D17S, D27S, ENLFDIR

</pre>

XXXX (stands for a placeholder) is the authorization group for the source table. To determine, which authorization group belongs to which table, check the table TDDAT - Maintenance Areas for Tables. If the table is not listed, the authorization group is &NC&. For authorizing specific tables use authorization object S_TABU_NAM instead of S_TABU_DIS.

</details> 

{: .box-note }
**Note** The transport requests for the required function groups *Z_THEO_DELETE_LOG_ENTRIES* and *Z_THEO_READ_TABLE* are located in ```C:\Program Files\[XtractProduct]\ABAP\TableCDC``` and ```C:\Program Files\[XtractProduct]\ABAP\Table```. 

Download the corresponding SAP role ---  [SAP profile for Table CDC](/files/sap_roles/ZXTABLECDC.SAP).

### DeltaQ (Depricated)

*Click to expand the details:*

<details>
<summary> Necessary SAP authorizations for the customizing check:</summary>
<pre>
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SUSR; ACTVT=16  
S_RFC           RFC_TYPE=FUNC; RFC_NAME=RFC_GET_SYSTEM_INFO; ACTVT= 16 
S_ADMI_FCD      S_ADMI_FCD=NADM
S_TABU_DIS      ACTVT = 02; DICBERCLS=SA
S_TABU_DIS      ACTVT = 03; DICBERCLS=SA
S_TABU_NAM      ACTVT = 02; TABLE=EDIPOA
S_TABU_NAM      ACTVT = 03; TABLE=EDIPOA
</pre>

</details>

<details>
<summary> Necessary SAP authorizations for initial DataSource activation</summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSAG; ACTVT=16 
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                                
S_TABU_DIS       ACTVT=03; DICBERCLS=SC                                               
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=01; EDI_CIM=*; EDI_DOC=*                            
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=03; EDI_CIM=*; EDI_DOC=*   
</pre>

</details>

<details> <summary>Necessary SAP authorizations for re-activating a DataSource </summary>

<pre>
S_RFC           RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16
S_TABU_DIS      ACTVT=03; DICBERCLS=SS                                 
S_TABU_DIS      ACTVT=03; DICBERCLS=SC                                               
S_IDOCDEFT      EDI_TCD=WE30; ACTVT=02; EDI_CIM=*; EDI_DOC=*
</pre>

</details> 

<details> <summary> Necessary SAP authorizations for processing:</summary>

<pre>
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDI1; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=BATG; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIMEXT; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ARFC; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ERFC; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIN; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=/BIC/*; ACTVT=16 
S_RFC            RFC_TYPE=FUGR; RFC_NAME=/BI0/*; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSAK; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIW; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDTX; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=EDIMEXT; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SYSU; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSC1; ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSAP_REMOTE_HIERARCHY_CATALOG;  ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSA1_OLTPSOURCE_GET_ALL;  ACTVT=16
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RSA1_OLTPSOURCE_GET_SELECTIONS;  ACTVT=16
S_RFC_ADM        ACTVT=03; RFCDEST=XTRACT*; RFCTYPE = T; ICF_VALUE=* 
B_ALE_RECV       EDIMES=RSRQST
S_IDOCMONI       ACTVT=03; EDI_DIR=*; EDI_MES=*; EDI_PRN=*; EDI_PRT=*; EDI_TCD=WE*
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=02; EDI_CIM=*; EDI_DOC=*
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=03; EDI_CIM=*; EDI_DOC=*
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                   
S_TABU_DIS       ACTVT=03; DICBERCLS=SC
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC&  
S_BTCH_ADM       BTCADMIN=Y          
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
S_SPO_DEV        SPODEVICE=*
S_RO_OSOA        OLTPSOURCE=*; OSOAAPCO=*; OSOAPART=DATA; ACTVT=03;  | Only in SAP Releases  7.0 and higher
</pre>

</details>

Download the corresponding SAP roles ---  [SAP profile for DeltaQ](/files/sap_roles/ZXTDELTAQ.SAP), [SAP profile for DeltaQ Customizing Check](/files/sap_roles/DELTAQ_CUSTOMIZING_CHECK.SAP). 


******
#### Related Links
- [SAP  Role Administration](https://help.sap.com/doc/saphelp_nw74/7.4.16/en-us/52/6714a9439b11d1896f0000e8322d00/content.htm)
- [SAP ONE Support Launchpad](https://launchpad.support.sap.com/#/notes/2855052)
