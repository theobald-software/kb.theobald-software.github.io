---
layout: page
title: How to read data from Cluster Fields in the Tables PCL1 and PCL2 (Payroll)
description: How to read data from Cluster Fields in the Tables PCL1 and PCL2 (Payroll)
permalink: /:collection/:path
homepage-weight: 8
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To read data from the tables PCL1 and PCL2 you need a custom function module.

First you need to create a remote enabled custom function module in the T-Code SE37

![payroll01](/img/contents/payroll01.png){:class="img-responsive"}

Then we need 4 Import Parameters:

PERNR                  PC2B0-PERNR   

ACTIONID            CHAR2               ‘P1’

STARTDATE         DATS

ENDDATE TYPE    DATS

![payroll02](/img/contents/payroll02.png){:class="img-responsive"}

Next we need the following table parameter:

ERT         PC2B8

ST           PC2B5

CRT         PC208

![payroll03](/img/contents/payroll03.png){:class="img-responsive"}

Below you can find the ABAP-Sourcecode that has to be inserted in the sourcecode area of the function module.

FUNCTION Z_HR_CLUSTER_READ.

*"----------------------------------------------------------------------

*"*"Local Interface:

*"  IMPORTING

*"     VALUE(PERNR) TYPE  PC2B0-PERNR OPTIONAL

*"     VALUE(ACTIONID) TYPE  CHAR2 DEFAULT 'P1'

*"     VALUE(STARTDATE) TYPE  DATS OPTIONAL

*"     VALUE(ENDDATE) TYPE  DATS OPTIONAL

*"  TABLES

*"      ERT STRUCTURE  PC2B8 OPTIONAL

*"      ST STRUCTURE  PC2B5 OPTIONAL

*"      CRT STRUCTURE  PC208 OPTIONAL

*"----------------------------------------------------------------------

  DATA : BEGIN OF it_pcl1 OCCURS 0,

  srtfd TYPE pcl1-srtfd,

  END OF it_pcl1.



  DATA BEGIN OF b1_key.

          INCLUDE STRUCTURE pdc10.

  DATA END OF b1_key.



  IF actionid = 'P1'.



    SELECT srtfd

    FROM pcl1

    INTO TABLE it_pcl1

    WHERE relid EQ 'B1'

    AND srtfd EQ pernr

    AND srtf2 EQ 0.


    LOOP AT it_pcl1.

      MOVE it_pcl1-srtfd TO b1_key.


      IMPORT st ert FROM DATABASE pcl1(b1) ID b1_key.

      IF sy-subrc EQ 0.

      ENDIF.

    ENDLOOP.



  ENDIF.

  IF actionid = 'P2'.


    DATA : it_rgdir TYPE TABLE OF pc261 INITIAL SIZE 0,

           wa_rgdir LIKE LINE OF it_rgdir,

           it_crt TYPE pay99_result-inter-crt,

           wa_crt LIKE LINE OF it_crt,

           wa_payrollresult TYPE pay99_result,

           v_molga TYPE molga.


    DATA : BEGIN OF wa_out,

            pernr TYPE pernr-pernr,

            gross TYPE pc207-betrg, "Amount

            net TYPE pc207-betrg,

           END OF wa_out,

           it_outtab LIKE TABLE OF wa_out.

   wa_out-pernr = PERNR.

    CALL FUNCTION 'CU_READ_RGDIR'

EXPORTING

        persnr          = PERNR

      IMPORTING

        molga           = v_molga

      TABLES

        in_rgdir        = it_rgdir

      EXCEPTIONS

        no_record_found = 1

        OTHERS          = 2.

    IF sy-subrc = 0.



      LOOP AT it_rgdir INTO wa_rgdir

                       WHERE fpbeg GE startdate AND

                             fpend LE enddate AND

                             srtza EQ 'A'.  "Current result

        CALL FUNCTION 'PYXX_READ_PAYROLL_RESULT'

          EXPORTING

            clusterid                    = 'RD'

            employeenumber               = PERNR

            sequencenumber               = wa_rgdir-seqnr

            READ_ONLY_INTERNATIONAL      = 'X'

          CHANGING

            payroll_result               = wa_payrollresult

          EXCEPTIONS

            illegal_isocode_or_clusterid = 1

            error_generating_import      = 2

            import_mismatch_error        = 3

            subpool_dir_full             = 4

            no_read_authority            = 5

            no_record_found              = 6

            versions_do_not_match        = 7

            error_reading_archive        = 8

            error_reading_relid          = 9

            OTHERS                       = 10.

        IF sy-subrc = 0.

          LOOP AT wa_payrollresult-inter-crt INTO wa_crt.

            CASE wa_crt-lgart.

              WHEN '/101'.  " Gross

                APPEND wa_crt TO crt.

            ENDCASE.

            CLEAR wa_out.

          ENDLOOP.

        ENDIF.

      ENDLOOP.

    ENDIF.

  ENDIF.

ENDFUNCTION.


If you fill in the Import Parameter "ACTIONID" with P1 , then you need the Personnel No. In the field PERNR. No additional parameters are needed. You get the result in the Table Parameter ST. If you need the payroll results of the Cluster Table PCL2, you need to fill in the ACTIONID "P2" and have to fill in a Start- and Enddate to the Parameters STARTDATE and ENDDATE. Then you get the Payroll results of the Table PCL2 in the Table parameter CRT.

This is a sample for our Product Xtract IS:

![payroll04](/img/contents/payroll04.png){:class="img-responsive"}

Please note that the Personnelnumber has to be send with leading zeroes.