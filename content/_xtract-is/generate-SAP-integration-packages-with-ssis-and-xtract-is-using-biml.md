---
layout: page
title: Generate SAP Integration Packages with SSIS and Xtract IS using BIML
description: generate-sap-integration-packages-with-ssis-and-xtract-is-using-biml
permalink: /:collection/:path
weight: 100
---

### Content ###

SQL Server Integration Services (SSIS) is a component of the Microsoft SQL Server database that can be used to perform a broad range of data integration and data extraction, transformation, and loading (ETL) tasks.

Xtract IS is an SAP Integration solution for SSIS that provides all kinds of integration with SAP ERP and SAP BW in a secure and type-safe way with a graphical editor.

Business Intelligence Markup Language (Biml) is a domain-specific XML dialect for defining business intelligence (BI) assets. BIML authored BI assets can currently be used by the BIDS Helper add-on for Microsoft SQL Server Business Intelligence Development Studio (BIDS) and the Varigence Mist integrated development environment; both tools translate Biml metadata into SQL Server Integration Services (SSIS) and SQL Server Analysis Services (SSAS) assets for the Microsoft SQL Server platform. <br> 
However, emitters can be created to compile BIML for any desired BI platform, see [Wikipedia](https://en.wikipedia.org/wiki/Business_Intelligence_Markup_Language).

In this article it is demonstrated how to use a BIML script to generate an SSIS package that extracts SAP table data using Xtract IS and loads it to an SQL Server.

In the BIML script I will define an SSIS Package (SSIS version 2014) with two connection managers and two tasks:
- An OLE DB connection manager to an existing SQL Database BIMLTest and an Xtract Connection manager to an SAP ERP system.
- An SQL Task to truncate the SQL table and a data flow task.

In the data flow task two components ae defined:

- An Xtract Table component to extract three columns from the SAP customer table KNA1 .
- An OLE DB Destination to load the extracted SAP data into the SQL Server table. The table should exist before, refer to the comments in the BIML script.

### Step-by-step explanation ###

**Step 1: Add a new BIML File**

![xis-ssis-biml_01](/img/contents/xis/xis-ssis-biml_01.jpg){:class="img-responsive"}

**Step 2: Write the BIML Script code**

![xis-ssis-biml_02](/img/contents/xis/xis-ssis-biml_02.jpg){:class="img-responsive"}

Here you can find the BIML Script Code.
Check the requirements and the comments for more details.

``` XML
Biml xmlns=&quot;http://schemas.varigence.com/biml.xsd&quot;&gt;
  &lt;!--   Requirements
  1. Create SQL-Database [BIMLTest]
  2. Create SQL-Table KNA1
      USE [BIMLTest]
      GO
      SET ANSI_NULLS ON
      GO
      SET QUOTED_IDENTIFIER ON
      GO
      CREATE TABLE [dbo].[KNA1](
	      [KUNNR] [nvarchar](10) NULL,
	      [LAND1] [nvarchar](3) NULL,
	      [NAME1] [nvarchar](35) NULL
      ) ON [PRIMARY]
      GO
  3. SAP-User
  4. Further it is required that you have installed SSIS, Xtract IS and the BIDS Helper
  --&gt;
  &lt;!-- Connection Section  --&gt;

  &lt;Connections &gt;
    &lt;!-- SAP Connection
    Set the property ConnectionString  --&gt;
    &lt;CustomSsisConnection Name=&quot;SAPConnection&quot; CreateInProject=&quot;1&quot; CreationName=&quot;XTRACT&quot; ObjectData=&quot;&amp;lt;XtractConnectionManager ConnectionString=&amp;quot;USER=Elzein LANG=DE CLIENT=800 SYSNR=00 ASHOST=ec5.theobald-software.com PASSWD=XXX RFCLIB=CLASSIC  &amp;quot; /&amp;gt;&quot;/&gt;

    &lt;!-- OLE DB Connection to SQL Server Database BIMLTest  --&gt;
    &lt;Connection Name =&quot;OLE_BIML&quot;
            ConnectionString=&quot;Data Source=.;Initial Catalog=BIMLTest;
                Provider=SQLNCLI11.1;Integrated Security=SSPI;Auto Translate=False;&quot;/&gt;

  &lt;/Connections&gt;
  &lt;!-- Packages Section  --&gt;
  &lt;Packages&gt;
    &lt;!-- Package Section  --&gt;
    &lt;Package Name=&quot;HelloWorld&quot; ConstraintMode=&quot;Linear&quot; ProtectionLevel=&quot;EncryptSensitiveWithUserKey&quot;&gt;
      &lt;!-- Tasks Section  --&gt;
      &lt;Tasks&gt;
        &lt;!-- Execute SQL Task Section to Truncate Table KNA1 --&gt;
        &lt;ExecuteSQL Name=&quot;(SQL) Truncate Table&quot; ConnectionName=&quot;OLE_BIML&quot;&gt;
          &lt;DirectInput&gt;TRUNCATE TABLE KNA1;&lt;/DirectInput&gt;
        &lt;/ExecuteSQL&gt;
        &lt;!-- Data Flow Task Section to define the SAP source table and the SQL destination table --&gt;
        &lt;Dataflow Name=&quot;My Dataflow&quot;&gt;
          &lt;Transformations&gt;
            &lt;!-- Xtract Table component definition of table KNA1 --&gt;
            &lt;CustomComponent Name=&quot;KNA1&quot;  ComponentTypeName=&quot;XtractIS.XtractSourceTable, XtractIS2014, Version=1.0.0.0, Culture=neutral, PublicKeyToken=4b0cc842b94d345e&quot;&gt;

              &lt;Connections&gt;
                &lt;Connection Name=&quot;Xtract SAP Connection&quot; ConnectionName=&quot;SAPConnection&quot; /&gt;
              &lt;/Connections&gt;

              &lt;!-- customer properties of Xtract Table component --&gt;
              &lt;CustomProperties&gt;
                &lt;CustomProperty Name=&quot;MaxRows&quot; DataType=&quot;Int32&quot;&gt;0&lt;/CustomProperty&gt;
                &lt;CustomProperty Name=&quot;PackageSize&quot; DataType=&quot;Int32&quot;&gt;5000&lt;/CustomProperty&gt;
                &lt;CustomProperty Name=&quot;StringConversion&quot; DataType=&quot;Int32&quot;&gt;0&lt;/CustomProperty&gt;
                &lt;CustomProperty Name=&quot;UseCustomFunction&quot; DataType=&quot;Boolean&quot;&gt;false&lt;/CustomProperty&gt;
                &lt;CustomProperty Name=&quot;TableName&quot; DataType=&quot;String&quot;&gt;KNA1&lt;/CustomProperty&gt;
                &lt;!-- the InternalXML custom property defines the columns of the SAP source --&gt;
                &lt;CustomProperty Name=&quot;InternalXML&quot; DataType=&quot;String&quot;&gt;
                  &amp;lt;StorageTableBase xmlns=&amp;quot;http://tempuri.org/StorageTableBase.xsd&amp;quot;&amp;gt;
                  &amp;lt;TableColumns&amp;gt;
                  &amp;lt;ColName&amp;gt;KUNNR&amp;lt;/ColName&amp;gt;
                  &amp;lt;ColDescription&amp;gt;Debitorennummer&amp;lt;/ColDescription&amp;gt;
                  &amp;lt;ColLength&amp;gt;10&amp;lt;/ColLength&amp;gt;
                  &amp;lt;ColSelected&amp;gt;true&amp;lt;/ColSelected&amp;gt;
                  &amp;lt;ABAPType&amp;gt;c&amp;lt;/ABAPType&amp;gt;
                  &amp;lt;Decimals&amp;gt;0&amp;lt;/Decimals&amp;gt;
                  &amp;lt;/TableColumns&amp;gt;
                  &amp;lt;TableColumns&amp;gt;
                  &amp;lt;ColName&amp;gt;LAND1&amp;lt;/ColName&amp;gt;
                  &amp;lt;ColDescription&amp;gt;L&amp;#228;nderschl&amp;#252;ssel&amp;lt;/ColDescription&amp;gt;
                  &amp;lt;ColLength&amp;gt;3&amp;lt;/ColLength&amp;gt;
                  &amp;lt;ColSelected&amp;gt;true&amp;lt;/ColSelected&amp;gt;
                  &amp;lt;ABAPType&amp;gt;c&amp;lt;/ABAPType&amp;gt;
                  &amp;lt;Decimals&amp;gt;0&amp;lt;/Decimals&amp;gt;
                  &amp;lt;/TableColumns&amp;gt;
                  &amp;lt;TableColumns&amp;gt;
                  &amp;lt;ColName&amp;gt;NAME1&amp;lt;/ColName&amp;gt;
                  &amp;lt;ColDescription&amp;gt;Name 1&amp;lt;/ColDescription&amp;gt;
                  &amp;lt;ColLength&amp;gt;35&amp;lt;/ColLength&amp;gt;
                  &amp;lt;ColSelected&amp;gt;true&amp;lt;/ColSelected&amp;gt;
                  &amp;lt;ABAPType&amp;gt;c&amp;lt;/ABAPType&amp;gt;
                  &amp;lt;Decimals&amp;gt;0&amp;lt;/Decimals&amp;gt;
                  &amp;lt;/TableColumns&amp;gt;
                  &amp;lt;/StorageTableBase&amp;gt;
                &lt;/CustomProperty&gt;
              &lt;/CustomProperties&gt;

              &lt;!-- Output path of source component --&gt;
              &lt;OutputPaths&gt;
                &lt;OutputPath Name=&quot;XtractOutput&quot; &gt;
                  &lt;OutputColumns&gt;
                    &lt;OutputColumn Name=&quot;KUNNR&quot; DataType=&quot;String&quot; Length=&quot;10&quot;/&gt;
                    &lt;OutputColumn Name=&quot;LAND1&quot; DataType=&quot;String&quot; Length=&quot;3&quot;/&gt;
                    &lt;OutputColumn Name=&quot;NAME1&quot; DataType=&quot;String&quot; Length=&quot;35&quot;/&gt;
                  &lt;/OutputColumns&gt;
                  &lt;ExternalColumns&gt;
                    &lt;ExternalColumn Name=&quot;KUNNR&quot; DataType=&quot;String&quot; Length=&quot;10&quot;/&gt;
                    &lt;ExternalColumn Name=&quot;LAND1&quot; DataType=&quot;String&quot; Length=&quot;3&quot;/&gt;
                    &lt;ExternalColumn Name=&quot;NAME1&quot; DataType=&quot;String&quot; Length=&quot;35&quot;/&gt;
                  &lt;/ExternalColumns&gt;
                &lt;/OutputPath&gt;
              &lt;/OutputPaths&gt;

            &lt;/CustomComponent&gt;

            &lt;!-- OLE DB Destination KNA1
            The table should exist.
            Column Names are the same in the source and in the destination.
            Mapping will be done automatically using the column names
            --&gt;
            &lt;OleDbDestination Name=&quot;OLE DB Destination&quot; LocaleId=&quot;None&quot; ConnectionName=&quot;OLE_BIML&quot;&gt;
              &lt;Annotations&gt;
                &lt;Annotation AnnotationType=&quot;Description&quot;&gt;KNA1&lt;/Annotation&gt;
              &lt;/Annotations&gt;
              &lt;ExternalTableOutput Table=&quot;KNA1&quot; /&gt;
            &lt;/OleDbDestination&gt;

          &lt;/Transformations&gt;
        &lt;/Dataflow&gt;
      &lt;/Tasks&gt;
    &lt;/Package&gt;
  &lt;/Packages&gt;
&lt;/Biml
```

*****
Related Links <br>

[Xtract IS](https://theobald-software.com/en/xtract-is/) - product information <br>
[Xtract IS](https://help.theobald-software.com/en/xtract-is/) - OnlineHelp <br>