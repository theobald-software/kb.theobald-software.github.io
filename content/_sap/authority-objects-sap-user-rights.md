---
layout: page
title: Authority Objects - SAP User Rights
description: Authority Objects - SAP User Rights
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

### About
To use our products you need an SAP connection user with sufficient authorization in SAP. Authorizations are assigned via authorization objects in SAP. <br>

The authorizations in the first section "General authorization objects" are required to establish an SAP connection with the SAP application server. 
The remaining sections show the authorizations required for the respective components. Depending on the components that you want to use, the corresponding authorizations are required. 

Please redirect this article to your SAP Basis admins to get the relevant authorization objects you require for your SAP connection user.  

{: .box-note }
**Note** Should you still get an authorization error in or software, ask SAP Basis to record an ST01-/ or SU53-authorization trace in SAP. This trace tells you, which authorizations objects are missing.

### General authorization objects

The following objects are needed at least to establish a connection to SAP.

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SYST; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SRFC; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RFC1; ACTVT=16
```

### Table

Look up tables and table metadata e.g., primary keys & indexed table fields:

```
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=SDTX, SDIFRUNTIME                
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC&, SS
S_TABU_NAM       ACTVT=03; TABLE=ENLFDIR
```

**or** use the following separate authority check for each table to read: 

```
S_RFC            ACTVT=16; RFC_TYPE=FUGR; RFC_NAME=RFC_READ_TABLE, DDIF_FIELDINFO_GET, SDTX, SDIFRUNTIME, Z_THEO_READ_TABLE                   
S_TABU_DIS       ACTVT=03; DICBERCLS=XXXX
S_TABU_NAM       ACTVT=03; TABLE=DD02V, DD17S, DD27S, ENLFDIR
```

XXXX (stands for a placeholder) is the Authority Group for the table. To find out, which authority group belongs to which table look at table TDDAT (e.g. with SE16). 
If the table is not listed there the authority group is &NC&. For authorizing specific tables please use authorization object S_TABU_NAM instead of S_TABU_DIS.

{: .box-note }
**Note** The needed transport request for function group *Z_THEO_READ_TABLE* is located in the following path: ```C:\Program Files\[XtractProduct]\ABAP\Table``` of the default installation. 

When executing our custom function module Z_THEO_READ_TABLE in background:

```
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
```

When using the *count rows* button (if not using Z_THEO_READ_TABLE): 

```
S_RFC            RFC_TYPE=FUNC; RFC_NAME=EM_GET_NUMBER_OF_ENTRIES; ACTVT=16  
```

### BW Query / BW Cube

Authorizations for the underlying Queries, Cubes and InfoAreas need to be assigned via ```S_RS_COMP```and ```S_RS_COMP1```. <br>
Analysis authorizations are assigned via ```S_RS_AUTH```.

#### Look up and execute a BW Query / BW Cube (OLAP BAPI/MDX and BEx mode):

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOB; ACTVT=16
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RRX1; ACTVT=16
S_TABU_NAM       ACTVT=03; TABLE=RSRREPDIR
S_TABU_NAM       ACTVT=03; TABLE=RSZGLOBV
```

Optional (needed for date conversion): 

```
S_TABU_NAM       ACTVT=03; TABLE=DD03L
```

#### Look up and execute a BW Query / BW Cube (BICS mode ):

```
S_RFC            RFC_TYPE=FUGR;RFC_NAME=SYST;ACTVT=16;type=RF;name=RFCPING;
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSOBJS_RFC_INTERFACE; ACTVT=16; type=RF;name=RSOBJS_GET_NODES;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSAO_CORE;ACTVT=16;type=RF;name=RSAO_BICS_SESSION_INITIALIZE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_CONSUMER;ACTVT=16;type=RF;name=BICS_CONS_CREATE
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER;ACTVT=16;type=RF;name=BICS_PROV_OPEN;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSBOLAP_BICS_PROVIDER_VAR;ACTVT=16;type=RF;name=BICS_PROV_VA
S_ADMI_FCD       S_ADMI_FCD=PADM;
```

Alternatively, you can assign pfcg template *S_RS_RREPU - BW Role: Reporting User*. This template contains above authorizations except for S_ADMI_FCD.

### SAP Query

Look up and execute a query:

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=AQRC; ACTVT=16 
```

### Report

Look up report, preview und execute:

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ZXTRACTABAP; ACTVT=16
S_GUI            ACTVT=61 
```

Look up a report, preview and execute the report in a batch job.

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=ZXTRACTABAP; ACTVT=16
S_TABU_DIS       ACTVT=03; DICBERCLS=&NC& 
S_TABU_DIS       ACTVT=03; DICBERCLS=SS
S_BTCH_ADM       BTCADMIN=Y
S_BTCH_JOB       JOBGROUP=*; JOBACTION=RELE
S_GUI            ACTVT=61
```

{: .box-note }
**Note** The needed transport request for function group *ZXTRACTABAP* is located in the following path: ```C:\Program Files\[XtractProduct]\ABAP\Report\Z_XTRACT_IS_REMOTE_REPORT-transport.zip``` of the default installation.


### ODP

A complete and detailed list of authorization objects refer to [SAP Note 2855052](https://launchpad.support.sap.com/#/notes/2855052) - Authorizations required for ODP Data Replication API 2.0. 

<!---
Authority objects needed for the Operational Data Provisioning (ODP):
```
S_RFC            RFC_TYPE=FUGR,FUNC; RFC_NAME=RODPS_REPL; ACTVT=16                  
S_TCODE          TCD=BSANL_ACWB, ODQMON, RODPS_ODP_IMG, RSO2, RSOR, RSRTS_ODP_DIS            
S_ADMI_FCD       Value=NADM 
S_APPL_LOG       ALG_OBJECT=ODQ; ALG_SUBOBJ=*; ACTVT=03, 06
S_RO_OSOA        OLTPSOURCE=*; OSOAAPCO=*; OSOAPART=DATA, DEFINITION; ACTVT=03
```
--->

### DeltaQ

Authority objects needed for the customizing check:

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SUSR; ACTVT=16  
S_RFC            RFC_TYPE=FUNC; RFC_NAME=RFC_GET_SYSTEM_INFO; ACTVT= 16 
S_ADMI_FCD       S_ADMI_FCD=NADM
S_TABU_DIS       ACTVT = 02; DICBERCLS=SA
S_TABU_DIS       ACTVT = 03; DICBERCLS=SA
S_TABU_NAM       ACTVT = 02; TABLE=EDIPOA
S_TABU_NAM       ACTVT = 03; TABLE=EDIPOA
```

Activate a DataSource for the first time:

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16   
S_RFC            RFC_TYPE=FUGR; RFC_NAME=RSAG; ACTVT=16 
   
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                                 
S_TABU_DIS       ACTVT=03; DICBERCLS=SC                                                 
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=01; EDI_CIM=*; EDI_DOC=*                             
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=03; EDI_CIM=*; EDI_DOC=*   
```

Re-activate a DataSource:

```
S_RFC            RFC_TYPE=FUGR; RFC_NAME=SDIFRUNTIME; ACTVT=16    
S_TABU_DIS       ACTVT=03; DICBERCLS=SS                                   
S_TABU_DIS       ACTVT=03; DICBERCLS=SC                                                 
S_IDOCDEFT       EDI_TCD=WE30; ACTVT=02; EDI_CIM=*; EDI_DOC=*       

```

Processing:

```
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
```

### OHS

Look up an OHS extraction:

```
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
```

### BW Hierarchies

Look up and read hierarchies:
```
S_RFC          RFC_TYPE=FUGR; RFC_NAME=RSNDI_SHIE; ACTVT=16
S_RFC          RFC_TYPE=FUGR; RFC_NAME=RSBAPI_IOBJ; ACTVT=16 
S_RFC          RFC_TYPE=FUNC; RFC_NAME=BAPI_IOBJ_GETDETAIL; ACTVT=16
S_RS_ADMWB     RSADMWBOBJ=INFOOBJECT; ACTVT=03
S_TABU_DIS     RC=4; ACTVT=03; DICBERCLS=BWC
S_TABU_DIS     RC=4; ACTVT=03; DICBERCLS=BWG
S_TABU_NAM     RC=12; ACTVT=03; TABLE=/BIC/*
S_TABU_NAM     RC=12; ACTVT=03; TABLE=RSHIEDIR
```
