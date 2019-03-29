---
layout: page
title: Authority Objects - SAP User Rights
description: Authority Objects - SAP User Rights
permalink: /:collection/:path
weight: 1
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To use our products you need an SAP user with the following authority objects. <br>
You can also use and upload the corresponding SAP role files (e.g. ZXTGENERAL.SAP) with T-Code *PFCG* in SAP. 

Please redirect this article to your SAP Basis admins to get the relevant authority objects you need for your user.  

#### General authority objects

The following objects are needed at least to establish a connection.

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SYST ;ACTVT=16 ;    
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=RFC1 ;ACTVT=16 ; 
```

SAP role for general authority objects:

[ZXTGENERAL.SAP (209.76 KB)](/files/ZXTGENERAL.SAP)

#### Table

Look up tables and table meta data:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDTX ;ACTVT=16 ;                  
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDIFRUNTIME ;ACTVT=16 ;           
S_TABU_DIS       ACTVT=03 ;DICBERCLS=&NC& ; 
```

or use the following separate authority check for each table to read: 

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDTX ;ACTVT=16 ;                  
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDIFRUNTIME ;ACTVT=16;
S_TABU_DIS       ACTVT=03 ;DICBERCLS=XXXX ;
S_TABU_NAM       ACTVT = 03; TABLE = DD02V
```

XXXX is the Authority Group for the table. To find out, which authority group belongs to which table look at table TDDAT (e.g. with SE16). 
If the table is not listed there the authority group is &NC&. For authorising specific tables please use authorization object S_TABU_NAM instead of S_TABU_DIS.

If our custom function modules like Z_THEO_READ_TABLE, Z_XTRACT_IS_TABLE_JOIN, (Z_XTRACT_IS_TABLE_COMPRESSION, Z_XTRACT_IS_TABLE) are used:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=XXXX ;ACTVT=16 ; 
```

XXXX is here the name of the function group where the custom function module are located. 

SAP role for table objects:

[ZXTABLE.SAP (209.76 KB)](/files/ZXTABLE.SAP)

#### BW Query / BW Cube

Look up and execute a BW Query / BW Cube (OLAP BAPI/MDX and BEx mode):

```
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSOB;ACTVT=16;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RRX1;ACTVT=16;
S_TABU_NAM       ACTVT = 03; TABLE = RSRREPDIR;
S_TABU_NAM       ACTVT = 03; TABLE = RSZGLOBV;
```

Optional (needed for date conversion): 

```
S_TABU_NAM       ACTVT = 03; TABLE = DD03L;
```



#### SAP Query

Look up and execute a query:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=AQRC ;ACTVT=16 ;  
```

#### Report

Look up report, preview und execute:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=XXXXX;ACTVT=16 ;
S_GUI            ACTVT=61 
```

XXXXX is the function group to which the function module Z_XTRACT_IS_REMOTE_REPORT belongs to.

Look up a report, preview und execute the report in a batch job.

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=XXXXX;ACTVT=16 ;
S_TABU_DIS       ACTVT=03;DICBERCLS=&NC& ;
S_TABU_DIS       ACTVT=03;DICBERCLS=SS;
S_BTCH_ADM       BTCADMIN=Y;
S_BTCH_JOB       JOBGROUP=*;JOBACTION=RELE;
S_GUI            ACTVT=61;
```

XXXXX is the function group to which the function module Z_XTRACT_IS_REMOTE_REPORT belongs to.

#### DeltaQ

Authority objects needed for the customizing check:

```
S_RFC RFC_TYPE = FUGR ;RFC_NAME=SUSR ; ACTVT=16 ;
S_RFC RFC_TYPE = FUNC ; RFC_NAME= RFC_GET_SYSTEM_INFO ; ACTVT= 16
S_ADMI_FCD S_ADMI_FCD = NADM
S_TABU_DIS ACTVT = 02; DICBERCLS = SA
S_TABU_DIS ACTVT = 03; DICBERCLS = SA
S_TABU_NAM ACTVT = 02; TABLE = EDIPOA
S_TABU_NAM ACTVT = 03; TABLE = EDIPOA
```

Activate a DataSource for the first time:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDIFRUNTIME ;ACTVT=16 ;   
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=RSAG ;ACTVT=16 ;
   
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SS ;                                                 
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SC ;                                                 
S_IDOCDEFT       EDI_TCD=WE30 ;ACTVT=01 ;EDI_CIM=*;EDI_DOC=* ;                             
S_IDOCDEFT       EDI_TCD=WE30 ;ACTVT=03 ;EDI_CIM=*;EDI_DOC=* ;  
```

Re-activate a DataSource:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDIFRUNTIME ;ACTVT=16 ;    
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SS ;                                  
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SC ;                                                 
S_IDOCDEFT       EDI_TCD=WE30 ;ACTVT=02 ;EDI_CIM=* ;EDI_DOC=* ;       

```

Processing:

```
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=EDI1 ;ACTVT=16;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=BATG ;ACTVT=16;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=EDIMEXT ;ACTVT=16 ; 
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=ARFC ;ACTVT=16 ;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=ERFC ;ACTVT=16 ;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=EDIN ;ACTVT=16 ;
B_ALE_RECV       EDIMES=RSRQST;
S_IDOCDEFT       EDI_TCD=WE30 ;ACTVT=02 ;EDI_CIM=* ;EDI_DOC=* ;
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SS ;                                  
S_TABU_DIS       ACTVT=03 ;DICBERCLS=SC;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=SDTX ;ACTVT=16 ;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=EDIMEXT ;ACTVT=16 ;
S_IDOCDEFT       EDI_TCD=WE30;ACTVT=03;EDI_DOC=RSREQUST;EDI_CIM=* ; 
S_IDOCDEFT       EDI_TCD=WE30;ACTVT=03;EDI_CIM=* ;EDI_DOC=* ; 
S_BTCH_ADM       BTCADMIN=Y;          
S_BTCH_JOB       JOBGROUP='*;JOBACTION=RELE; 
S_RFC            RFC_TYPE=FUGR;RFC_NAME=SYSU;ACTVT=16;
S_SPO_DEV        SPODEVICE=*;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=RSAK;ACTVT=16;
S_RFC            RFC_TYPE=FUGR;RFC_NAME=EDIW;ACTVT=16;
S_RO_OSOA        OLTPSOURCE=*;OSOAAPCO=*;OSOAPART=DATA;ACTVT=03;  *Only in SAP Releases  7.0 and higher
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=RSC1 ;ACTVT=16 ;
S_IDOCMONI ACTVT=03;EDI_DIR=*;EDI_MES=*;EDI_PRN=*;EDI_PRT=*;EDI_TCD=WE*;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=/BIC/* ;ACTVT=16 ;
S_RFC            RFC_TYPE=FUGR ;RFC_NAME=/BI0/* ;ACTVT=16 ;
S_RFC_ADM   ACTVT = 03; RFCDEST = XTRACT*; RFCTYPE = T; ICF_VALUE =* 
S_RFC           ACTVT = 16;  RFC_NAME = RSAP_REMOTE_HIERARCHY_CATALOG; RFC_TYPE = FUNC
S_RFC           ACTVT = 16;  RFC_NAME = RSA1_OLTPSOURCE_GET_ALL; RFC_TYPE = FUNC
S_RFC           ACTVT = 16;  RFC_NAME = RSA1_OLTPSOURCE_GET_SELECTIONS; RFC_TYPE = FUNC
S_TABU_DIS                     ACTVT = 03; DICBERCLS = &NC&
```

#### OHS

Look up an OHS extraction:

```
S_RFC      RFC_TYPE=FUGR;RFC_NAME=RSB3RD;ACTVT=16;
S_RFC      RFC_TYPE=FUGR;RFC_NAME=SDTX;ACTVT=16;
S_RFC      RFC_TYPE=FUGR;RFC_NAME=BAPT;ACTVT=16;
S_RFC      RFC_TYPE=FUGR;RFC_NAME=BATG;ACTVT=16;
S_RFC      RFC_TYPE=FUGR;RFC_NAME=RSPC_API;ACTVT=16;
S_TABU_DIS RC=0 ACTVT=03;DICBERCLS=&NC& 
;

S_RS_PC   RSPCCHAIN=*;RSPCAPPLNM=* ;RSPCPART=DEFINITION;ACTVT=03;
S_RS_PC   RSPCCHAIN=*;RSPCAPPLNM=* ;RSPCPART=RUNTIME;ACTVT=16;
S_CTS_ADMI CTS_ADMFCT=TABL;
S_RS_DTP   RSTLDTPSRC=CUBE;RSSTDTPSRC=*;RSONDTPSRC=0D_DECU;RSTLDTPTGT=DEST;RSSTDTPTGT=*;ACTVT=16;

S_BTCH_ADM BTCADMIN=Y;
S_BTCH_JOB JOBGROUP=*;JOBACTION=RELE;

S_RS_TR    RSTLOGOSRC=CUBE;RSSTTRSRC=*;RSOBJNMSRC=0D_DECU;RSTLOGOTGT=DEST;RSSTTRTGT=' ';RSOBJNMTG=*;ACTVT=16;
S_RS_AUTH  BIAUTH=0BI_ALL;
S_ADMI_FCD S_ADMI_FCD=ST0R;
```

#### BW Hierarchies

Look up and read hierarchies:

```
S_RFC          RFC_TYPE=FUGR;RFC_NAME=RSNDI_SHIE;ACTVT=16;
S_RS_ADM       WBRSADMWBOBJ=INFOOBJECT;ACTVT=03
S_RFC          RFC_TYPE=FUGR;RFC_NAME=RSBAPI_IOBJ;ACTVT=16 
S_RFC          RFC_TYPE=FUNC;RFC_NAME=BAPI_IOBJ_GETDETAIL;ACTVT=16
S_TABU_DIS     RC=4   ACTVT=03;DICBERCLS=BWC;
S_TABU_NAM     RC=12 ACTVT=03;TABLE=RSHIEDIR;
S_TABU_DIS     RC=4 ACTVT=03;DICBERCLS=BWG;
S_TABU_NAM     RC=12 ACTVT=03;TABLE=/BIC/*;
```
