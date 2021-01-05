---
layout: page
title: Create Generic DataSources using a Function Module and Timestamps
description: create-generic-datasources-using-function-module-and-timestamps
permalink: /:collection/:path
weight: 11
---

### Delta fields ###

For delta functionality you need a delta field. Some tables like VBAK (Sales Document: Header Data) don't have a timestamp field for creation/change that we can use as a unique delta field but have separate fields for creation date (<strong>ERDAT</strong>), creation time (<strong>ERZET</strong>) and change date (<strong>AEDAT</strong>). To get the data of the VBAK table by using delta functionality we will create a generic datasource using a custom function module which implements the necessary logic.

We will create an extraction structure that has a timestamp field and we will use this field to implement the delta functionality. In this article this concept is explained.

There are two template function modules that can be copied and used:

- RSAX_BIW_GET_DATA_SIMPLE: A function module with simple interface for Full Load with no support of delta loads.

- RSAX_BIW_GET_DATA: : A function module with complete interface that supports Delta Load. We will use this FM.

### Step 1: Create an Extract Structure.  ###

Go to transaction SE11 and create a new structure ZZVBAK.

![XU create generic datasource 01](/img/contents/xu/xu-create-generic-01.jpg){:class="img-responsive"}

![XU create generic datasource 02](/img/contents/xu/xu-create-generic-02.jpg){:class="img-responsive"}

Insert the table VBAK as an include into the structure.

![XU create generic datasource 03](/img/contents/xu/xu-create-generic-03.jpg){:class="img-responsive"}

![XU create generic datasource 04](/img/contents/xu/xu-create-generic-04.jpg){:class="img-responsive"}

Add a field ZTMSTMP(Data element: TZNTSTMPS, it is of datatype DEC with Length 15). This field will hold the timestamp and allow us to use the extraction for delta purposes.

![XU create generic datasource 05](/img/contents/xu/xu-create-generic-05.jpg){:class="img-responsive"}

Save and activate the structure. This structure will be our extract structure for the datasource.

### Step 2: Create the function module. ###

Go to transaction code SE80 and copy the function group RSAX to the new function group Z_RSAX and copy the function module RSAX_BIW_GET_DATA to Z_RSAX_BIW_GET_DATA_VBAK. Be sure to copy and activate all the related objects (interfaces, datatypes etc.).

![XU create generic datasource 06](/img/contents/xu/xu-create-generic-06.png){:class="img-responsive"}

![XU create generic datasource 07](/img/contents/xu/xu-create-generic-07.jpg){:class="img-responsive"}

Go to SE37 and open your FM Z_RSAX_BIW_GET_DATA_VBAK to edit. In TABLES tab set the parameter E_T_DATA to associated type ZZVBAK.

![XU create generic datasource 08](/img/contents/xu/xu-create-generic-08.jpg){:class="img-responsive"}

Go to the source code tab. Copy the ABAP Code and paste it.

``` ABAP
FUNCTION Z_RSAX_BIW_GET_DATA_VBAK.
*"----------------------------------------------------------------------
*"*"Local Interface:
*"  IMPORTING
*"     VALUE(I_REQUNR) TYPE  SBIWA_S_INTERFACE-REQUNR
*"     VALUE(I_ISOURCE) TYPE  SBIWA_S_INTERFACE-ISOURCE OPTIONAL
*"     VALUE(I_MAXSIZE) TYPE  SBIWA_S_INTERFACE-MAXSIZE OPTIONAL
*"     VALUE(I_INITFLAG) TYPE  SBIWA_S_INTERFACE-INITFLAG OPTIONAL
*"     VALUE(I_UPDMODE) TYPE  SBIWA_S_INTERFACE-UPDMODE OPTIONAL
*"     VALUE(I_DATAPAKID) TYPE  SBIWA_S_INTERFACE-DATAPAKID OPTIONAL
*"     VALUE(I_PRIVATE_MODE) OPTIONAL
*"     VALUE(I_CALLMODE) LIKE  ROARCHD200-CALLMODE OPTIONAL
*"     VALUE(I_REMOTE_CALL) TYPE  SBIWA_FLAG DEFAULT SBIWA_C_FLAG_OFF
*"  TABLES
*"      I_T_SELECT TYPE  SBIWA_T_SELECT OPTIONAL
*"      I_T_FIELDS TYPE  SBIWA_T_FIELDS OPTIONAL
*"      E_T_ZZVBAK STRUCTURE  ZZVBAK OPTIONAL
*"  EXCEPTIONS
*"      NO_MORE_DATA
*"      ERROR_PASSED_TO_MESS_HANDLER
*"----------------------------------------------------------------------

* THE INPUT PARAMETER I_DATAPAKID IS NOT SUPPORTED YET !

* EXAMPLE: INFOSOURCE CONTAINING TADIR OBJECTS
*  TABLES: TADIR.

* AUXILIARY SELECTION CRITERIA STRUCTURE
  DATA: L_S_SELECT TYPE SBIWA_S_SELECT,
        STARTDATE LIKE SY-DATUM,
        STARTTIME LIKE SY-UZEIT,
        ENDDATE LIKE SY-DATUM,
        ENDTIME LIKE SY-UZEIT,
        TSTAMP LIKE TZONREF-TSTAMPS.

* MAXIMUM NUMBER OF LINES FOR DB TABLE
  STATICS: L_MAXSIZE TYPE SBIWA_S_INTERFACE-MAXSIZE.

* SELECT RANGES
  RANGES:  L_R_TMPSTMP FOR ZZVBAK-ZTMSTMP.

* PARAMETER I_PRIVATE_MODE:
* SOME APPLICATIONS MIGHT WANT TO USE THIS FUNCTION MODULE FOR OTHER
* PURPOSES AS WELL (E.G. DATA SUPPLY FOR OLTP REPORTING TOOLS). IF THE
* PROCESSING LOGIC HAS TO BE DIFFERENT IN THIS CASE, USE THE OPTIONAL
* PARAMETER I_PRIVATE_MODE (NOT SUPPLIED BY BIW !) TO DISTINGUISH
* BETWEEN BIW CALLS (I_PRIVATE_MODE = SPACE) AND OTHER CALLS
* (I_PRIVATE_MODE = X).
* IF THE MESSAGE HANDLING HAS TO BE DIFFERENT AS WELL, DEFINE YOUR OWN
* MESSAGING MACRO WHICH INTERPRETS PARAMETER I_PRIVATE_MODE. WHEN
* CALLED BY BIW, IT SHOULD USE THE LOG_WRITE MACRO, OTHERWISE DO WHAT
* YOU WANT.

* INITIALIZATION MODE (FIRST CALL BY SAPI) OR DATA TRANSFER MODE
* (FOLLOWING CALLS) ?
  IF I_INITFLAG = SBIWA_C_FLAG_ON.

************************************************************************
* INITIALIZATION: CHECK INPUT PARAMETERS
*                 BUFFER INPUT PARAMETERS
*                 PREPARE DATA SELECTION
************************************************************************

* THE INPUT PARAMETER I_DATAPAKID IS NOT SUPPORTED YET !

* INVALID SECOND INITIALIZATION CALL -> ERROR EXIT
    IF NOT G_FLAG_INTERFACE_INITIALIZED IS INITIAL.

      IF 1 = 2. MESSAGE E008(R3). ENDIF.
      LOG_WRITE 'E'                    "MESSAGE TYPE
                'R3'                   "MESSAGE CLASS
                '008'                  "MESSAGE NUMBER
                ' '                    "MESSAGE VARIABLE 1
                ' '.                   "MESSAGE VARIABLE 2
      RAISE ERROR_PASSED_TO_MESS_HANDLER.
    ENDIF.

* CHECK INFOSOURCE VALIDITY
    CASE I_ISOURCE.
      WHEN 'ZDSVBAK' OR ''.
      WHEN OTHERS.
        IF 1 = 2. MESSAGE E009(R3). ENDIF.
        LOG_WRITE 'E'                  "MESSAGE TYPE
                  'R3'                 "MESSAGE CLASS
                  '009'                "MESSAGE NUMBER
                  I_ISOURCE            "MESSAGE VARIABLE 1
                  ' '.                 "MESSAGE VARIABLE 2
        RAISE ERROR_PASSED_TO_MESS_HANDLER.
    ENDCASE.

* CHECK FOR SUPPORTED UPDATE MODE
    CASE I_UPDMODE.
      WHEN 'F' OR ''.
      WHEN 'C'.  "
      WHEN 'R'.  "
      WHEN 'S'.  " DELTA INITIALIZATION
      WHEN 'I'.    " DELTA INIT FOR NON CUMMULATIVE
      WHEN 'D'.   " DELTA UPDATE
      WHEN OTHERS.
        IF 1 = 2. MESSAGE E011(R3). ENDIF.
        LOG_WRITE 'E'                  "MESSAGE TYPE
                  'R3'                 "MESSAGE CLASS
                  '011'                "MESSAGE NUMBER
                  I_UPDMODE            "MESSAGE VARIABLE 1
                  ' '.                 "MESSAGE VARIABLE 2
        RAISE ERROR_PASSED_TO_MESS_HANDLER.
    ENDCASE.

* CHECK FOR OBLIGATORY SELECTION CRITERIA
*    READ TABLE I_T_SELECT INTO L_S_SELECT WITH KEY FIELDNM = 'ZTMSTMP'.
*    IF SY-SUBRC <> 0.
*      IF 1 = 2. MESSAGE E010(R3). ENDIF.
*      LOG_WRITE 'E'                    "MESSAGE TYPE
*                'R3'                   "MESSAGE CLASS
*                '010'                  "MESSAGE NUMBER
*                'PGMID'                "MESSAGE VARIABLE 1
*                ' '.                   "MESSAGE VARIABLE 2
*      RAISE ERROR_PASSED_TO_MESS_HANDLER.
*    ENDIF.

    APPEND LINES OF I_T_SELECT TO G_T_SELECT.

* FILL PARAMETER BUFFER FOR DATA EXTRACTION CALLS
    G_S_INTERFACE-REQUNR    = I_REQUNR.
    G_S_INTERFACE-ISOURCE   = I_ISOURCE.
    G_S_INTERFACE-MAXSIZE   = I_MAXSIZE.
    G_S_INTERFACE-INITFLAG  = I_INITFLAG.
    G_S_INTERFACE-UPDMODE   = I_UPDMODE.
    G_S_INTERFACE-DATAPAKID = I_DATAPAKID.
    G_FLAG_INTERFACE_INITIALIZED = SBIWA_C_FLAG_ON.

* FILL FIELD LIST TABLE FOR AN OPTIMIZED SELECT STATEMENT
* (IN CASE THAT THERE IS NO 1:1 RELATION BETWEEN INFOSOURCE FIELDS
* AND DATABASE TABLE FIELDS THIS MAY BE FAR FROM BEEING TRIVIAL)
    APPEND LINES OF I_T_FIELDS TO G_T_SEGFIELDS.

  ELSE.                 "INITIALIZATION MODE OR DATA EXTRACTION ?

************************************************************************
* DATA TRANSFER: FIRST CALL      OPEN CURSOR + FETCH
*                FOLLOWING CALLS FETCH ONLY
************************************************************************

* FIRST DATA PACKAGE -> OPEN CURSOR
    IF G_COUNTER_DATAPAKID = 0.
      "LOOP AT I_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'ZTMSTMP'.
       LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'ZTMSTMP'.

        TSTAMP = L_S_SELECT-LOW.
        CONVERT TIME STAMP TSTAMP TIME ZONE SY-ZONLO INTO DATE STARTDATE TIME STARTTIME.
        TSTAMP = L_S_SELECT-HIGH.
        CONVERT TIME STAMP TSTAMP TIME ZONE SY-ZONLO INTO DATE ENDDATE TIME ENDTIME.
      ENDLOOP.
* FILL RANGE TABLES FOR FIXED INFOSOURCES. IN THE CASE OF GENERATED
* INFOSOURCES, THE USAGE OF A DYNAMICAL SELECT STATEMENT MIGHT BE
* MORE REASONABLE. BIW WILL ONLY PASS DOWN SIMPLE SELECTION CRITERIA
* OF THE TYPE SIGN = 'I' AND OPTION = 'EQ' OR OPTION = 'BT'.
*      LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'PGMID'.
*        MOVE-CORRESPONDING L_S_SELECT TO L_R_PGMID.
*        APPEND L_R_PGMID.
*      ENDLOOP.

*      LOOP AT G_T_SELECT INTO L_S_SELECT WHERE FIELDNM = 'OBJECT'.
*        MOVE-CORRESPONDING L_S_SELECT TO L_R_OBJECT.
*        APPEND L_R_OBJECT.
*      ENDLOOP.

* DETERMINE NUMBER OF DATABASE RECORDS TO BE READ PER FETCH STATEMENT
* FROM INPUT PARAMETER I_MAXSIZE. IF THERE IS A ONE TO ONE RELATION
* BETWEEN INFOSOURCE TABLE LINES AND DATABASE ENTRIES, THIS IS TRIVIAL.
* IN OTHER CASES, IT MAY BE IMPOSSIBLE AND SOME ESTIMATED VALUE HAS TO
* BE DETERMINED.
      L_MAXSIZE = G_S_INTERFACE-MAXSIZE.
      IF ENDDATE <> '00000000' AND ENDTIME <> '000000'.
        OPEN CURSOR WITH HOLD G_CURSOR FOR
    SELECT * FROM VBAK
      WHERE
      (
        ( ERDAT >= STARTDATE AND ERZET >= STARTTIME AND ERDAT <= ENDDATE AND ERZET <= ENDTIME )
        OR ( AEDAT >= STARTDATE AND  AEDAT <= ENDDATE )
      ).
      ELSE.
        OPEN CURSOR WITH HOLD G_CURSOR FOR
         SELECT * FROM VBAK.
      ENDIF.
    ENDIF.                             "FIRST DATA PACKAGE ?

* FETCH RECORDS INTO INTERFACE TABLE. THERE ARE TWO DIFFERENT OPTIONS:
* - FIXED INTERFACE TABLE STRUCTURE FOR FIXED INFOSOURCES HAVE TO BE
*   NAMED E_T_'NAME OF ASSIGNED SOURCE STRUCTURE IN TABLE ROIS'.
* - FOR GENERATING APPLICATIONS LIKE LIS AND CO-PA, THE GENERIC TABLE
*   E_T_DATA HAS TO BE USED.
* ONLY ONE OF THESE INTERFACE TYPES SHOULD BE IMPLEMENTED IN ONE API !
    FETCH NEXT CURSOR G_CURSOR
               APPENDING CORRESPONDING FIELDS
               OF TABLE E_T_ZZVBAK
               PACKAGE SIZE 1000.
* PACKAGE SIZE L_MAXSIZE.

    IF SY-SUBRC <> 0.
      CLOSE CURSOR G_CURSOR.
      RAISE NO_MORE_DATA.
    ENDIF.

    G_COUNTER_DATAPAKID = G_COUNTER_DATAPAKID + 1.

  ENDIF.              "INITIALIZATION MODE OR DATA EXTRACTION ?

ENDFUNCTION.
```

Save and activate the function module.

### Step 3: Create the DataSource. ### 

Go to transaction RSO2 and create a new DataSource for transaction data and name it to ZDSVBAK.

![XU create generic datasource 09](/img/contents/xu/xu-create-generic-09.jpg){:class="img-responsive"}

Set the Application component and the description texts.

![XU create generic datasource 10](/img/contents/xu/xu-create-generic-10.jpg){:class="img-responsive"}

Click on **[Extraction by FM]**. Enter the name of the function module Z_RSAX_BIW_GET_DATA_VBAK and the extract structure ZZVBAK.

![XU create generic datasource 11](/img/contents/xu/xu-create-generic-11.jpg){:class="img-responsive"}

Click on **[Generic Delta]**. Select the timestamp field ZTMSTMP and set the option **[Timestamp]**.

![XU create generic datasource 12](/img/contents/xu/xu-create-generic-12.jpg){:class="img-responsive"}

Optionally set the Safety Interval Lower Limit. For more Information refer to [SAP HELP](http://help.sap.com/saphelp_nw04/helpdata/en/37/4f3ca8b672a34082ab3085d3c22145/frameset.htm).

Click **[Save]** twice. In the following screen you can set the selection fields. The timestamp field is disabled because it will be automatically populated as part of the delta process.

![XU create generic datasource 13](/img/contents/xu/xu-create-generic-13.jpg){:class="img-responsive"}

Now go to transaction RSA2 to see the details of our DataSource ZDSVBAK. The extraction method is set to F2 (Simple Interface). To change it to F1 (Complete Interface) 
execute the following ABAP code. You can go to SE38 and create a new report with this ABAP code. Unfortunately this is not possible in the GUI. 

``` ABAP
REPORT ZABAPDEMO
UPDATE roosource
SET delta = 'E'
exmethod = 'F1'
genflag = 'X'
WHERE oltpsource = 'ZDSVBAK'
```

Go to RSA2 and display the status of the DataSource ZDSVBAK (to confirm, that it is set to F1).

![XU create generic datasource 14](/img/contents/xu/xu-create-generic-14.jpg){:class="img-responsive"}

Check for errors.

![XU create generic datasource 15](/img/contents/xu/xu-create-generic-15.jpg){:class="img-responsive"}

This is an optional step: To test the function module go to SE37 and call it twice - one call for initialization and the second to read data. 
This can be used to check whether the FM is functioning correctly.

![XU create generic datasource 16](/img/contents/xu/xu-create-generic-16.jpg){:class="img-responsive"}

![XU create generic datasource 17](/img/contents/xu/xu-create-generic-17.jpg){:class="img-responsive"}

This was the initialization call. The second call is for getting the data:

![XU create generic datasource 18](/img/contents/xu/xu-create-generic-18.jpg){:class="img-responsive"}

![XU create generic datasource 19](/img/contents/xu/xu-create-generic-19.jpg){:class="img-responsive"}

Be sure that the table E_T_DATA contains the data.

### Step 4: Test the DataSource. ###

Go to transaction RSA3 to test the datasource.

![XU create generic datasource 20](/img/contents/xu/xu-create-generic-20.jpg){:class="img-responsive"}

![XU create generic datasource 21](/img/contents/xu/xu-create-generic-21.jpg){:class="img-responsive"}

Now the DataSource is created and you can use the Xtract DeltaQ component to read it. Be sure to activate it via the activate button.

The DataSource supports the Full and Update Delta mode. To use the Update Delta mode the first call must have the update type C (Delta Initialization). 
All following calls must have the update type D (Delta Update). The delta process of the datasource can be monitored and maintained in RSA7 (Delta Queue).

![XU create generic datasource 22](/img/contents/xu/xu-create-generic-22.jpg){:class="img-responsive"}

***********

#### References ####

[SAP Help about Maintaining generic datasources](http://help.sap.com/saphelp_nw04/helpdata/en/37/4f3ca8b672a34082ab3085d3c22145/frameset.htm) <br>

[SAP BI Generic Extraction Using a Function Module](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33) <br>

[How to Create Generic Delta](http://www.sdn.sap.com/irj/sdn/go/portal/prtroot/docs/library/uuid/84bf4d68-0601-0010-13b5-b062adbb3e33) <br>

[SAP BI Generic Extraction Using a Function Module](http://www.sdn.sap.com/irj/scn/go/portal/prtroot/docs/library/uuid/a0f46157-e1c4-2910-27aa-e3f4a9c8df33) <br>