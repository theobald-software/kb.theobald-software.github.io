---
layout: page
title: The Syntax of XtractQL and Examples
description: The Syntax of XtractQL and Examples
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The complete syntax of XtractQL language is shown below.

<details>
<summary>[XtractQL]</summary>
{% highlight sql %}
XtractQL
   := (SelectCommand | ExecuteCommand | DescribeCommand) 
   
SelectCommand
   := "SELECT" [SelectResult] SelectFieldList "FROM" (SelectQuery | SelectQueryBW 
        | SelectTable)
   
SelectResult      
   := "TOP" Integer ["SKIP" Integer]
   
SelectFieldList
   := "*" | (SelectField {"," SelectField})
   
SelectField
   := (Identifier | String | StringPassThrough) ["AS" (Identifier | String |
        StringPassThrough)]
   
SelectQuery
   := "QUERY" String [Into] ["WHERE" SelectQueryCriteria {","
        SelectQueryCriteria}] ["USING" String]
   
SelectQueryBW
   := "BWQUERY" String [Into] ["WHERE" SelectQueryCriteria {"," SelectQueryCriteria}]
   
SelectQueryCriteria
   := Identifier (("EQ" | "NE" | GT" | "LT" | "GE" | "LE" | "MP") (String | Variable) | ("IN" "(" SelectQueryCriteriaRange {[","] SelectQueryCriteriaRange} ")") | ("BT" (String | Variable) "AND" (String | Variable)))
   
SelectQueryCriteriaRange
   := "(" (("I" | "INCLUDE") | ("E" | "EXCLUDE")) "," (("EQ" | "NE" | GT" | "LT" | "GE" | "LE") | "LIKE") "," (String | Variable) ["," (String | Variable)] ")"
   
SelectTable
   := ["TABLE"] (String | Identifier) [Into] ["WHERE" SelectTableWhereExpression]) [WithOptions{CUSTOMFUNCTIONNAME}]
   
SelectTableWhereExpression
   := SelectTableWhereTerm {("AND" | "OR") SelectTableWhereTerm}
      
SelectTableWhereTerm
   := SelectTableWhereFactor | ("(" SelectTableWhereExpression ")")
   
SelectTableWhereFactor
   := Identifier (SelectTableWhereFactorOperator | SelectTableWhereFactorNull | (["NOT"] (SelectTableWhereFactorLike | SelectTableWhereFactorBetween | SelectTableWhereFactorIn)))
   
SelectTableWhereFactorOperator
   := ("EQ" | "NE" | "LT" | "GT" | "LE" | "GE") SelectTableWhereFactorValue
      
SelectTableWhereFactorNull  
   := "IS" ["NOT"] "NULL"
   
SelectTableWhereFactorLike
   := "LIKE" (String  | Variable)
   
SelectTableWhereFactorBetween
   := "BETWEEN" SelectTableWhereFactorValue "AND" SelectTableWhereFactorValue
   
SelectTableWhereFactorIn
   := "IN" "(" String {"," String} ")"
   
SelectTableWhereFactorValue
   := String | Integer | Number | Variable | Identifier
   
ExecuteCommand
   := "EXECUTE" (ExecuteMDX | ExecuteFunction)
   
ExecuteMDX
   := "MDX" StringPassThrough [Into]
   
ExecuteFunction
   := "FUNCTION" String [(Imports | Exports | Tables) {(Imports | Exports | Tables)}]
   
Imports
   := ("IMPORTS" | "IMPORTING") ImportsParameter {"," ImportsParameter}
      
ImportsParameter
   := Variable "=" Identifier
   
Exports
   := ("EXPORTS" | "EXPORTING") ExportsParameter {"," ExportsParameter}
      
ExportsParameter
   := Identifier "=" (String | Integer | Number | Variable)
   
Tables
   := "TABLES" TablesParameter {"," TablesParameter}
   
TablesParameter
   := Identifier ["=" (Variable | Table)] [Into]
   
Table
   := "(" TableMaps [","] TableValues {[","] TableValues} ")"
   
TableMaps
   := "(" Identifier {"," Identifier} ")"
      
TableValues
   := "(" String {"," String} ")"
   
DescribeCommand
   := "DESCRIBE" (DescribeTable | DescribeQuery | DescribeQueryBW | DescribeFunction | DescribeStructure) [Into]
   
DescribeTable
   := "TABLE" ((String ["GET" "FIELDS"]) | DescribeTableCatalog)
   
DescribeTableCatalog
   := "CATALOG" "WHERE" "TABLENAME" ("EQ" | "LIKE") String
   
DescribeQuery
   := "QUERY" (DescribeQueryGet | DescribeQueryCatalog | DescribeQueryUserGroup) 
   
DescribeQueryGet
   := String "GET" ("FIELDS" | "VARIANTS" | "SELECTION-PARAMETERS")
      
DescribeQueryCatalog
   := "CATALOG" "WHERE" DescribeQueryCatalogParameter {","  DescribeQueryCatalogParameter}
   
DescribeQueryCatalogParameter
   := DescribeQueryWorkspace | ("USERGROUP" ("EQ" | "LIKE") String) | ("QUERYNAME" ("EQ" | "LIKE") String)
   
DescribeQueryUserGroup
   := "USERGROUP" "WHERE" DescribeQueryWorkspace
   
DescribeQueryWorkspace
   := "WORKSPACE" "EQ" String{G,S,GLOBAL,STANDARD}
   
DescribeQueryBW
   := "BWQUERY" (DescribeQueryBWGet | DescribeQueryBWCatalog) 
   
DescribeQueryBWCatalog
   := "CATALOG" "WHERE" "CUBENAME" ("EQ" | "LIKE") String
      
DescribeQueryBWGet
   := String "GET" ("MEASURES" | "VARIABLES" | "DIMENSIONS" | ("DIMENSIONS-PROPERTIES" ["OF"] String))
   
DescribeFunction
   := "FUNCTION" (DescribeFunctionCatalog | (String "GET" ("EXPORTS" | "IMPORTS" | DescribeFunctionTables)))
   
DescribeFunctionCatalog
   := "CATALOG" "WHERE" "FUNCTIONNAME" ("EQ" | "LIKE") String
   
DescribeFunctionTables
   := "TABLES" | (("TABLES-STRUCTURE" | "TABLES-DATATABLE") ["OF"] String)
   
DescribeStructure
   := "STRUCTURE" String
   
Into
   := "INTO" Variable
   
WithOptions
   := ("WITH" | "WITH-OPTIONS") "(" Settings ")"
         
Settings
   :=  Identifier "=" String {"," Identifier "=" String}
   
Tokens
------
   
Variable
   := "@" , Identifier
   
Identifier
    := (Letter | "_") , {Letter | Digit | "_" | "-" | "$"}
       
String
    := ("'" , {ANY-CHARACTER-EXCEPT-QUOTE | "''"} , "'") | (""" , {ANY-CHARACTER-EXCEPT-QUOTE | """"} , """)
      
StringPassThrough
    := ("[" , {ANY-CHARACTER-EXCEPT-QUOTE | "]]"} , "]") | ("|" , {ANY-CHARACTER-EXCEPT-QUOTE | "||"} , "|")
Number
   := ["-" | "+"] , DigitSequence , ["." , DigitSequence]
Integer
   := DigitSequence
DigitSequence
    := Digit , {Digit}
Digit               
    := "0-9"
Letter
    := "A-Za-z"
{% endhighlight %}
</details>

The following examples show how XtractQL can be used.

**Table**

Select the first five records from table *T001W* where the field *FABKL* has a value of US.

{% highlight sql %}
SELECT TOP 5 * FROM T001W WHERE FABKL = 'US'
{% endhighlight %}

Select all records from table MARA. In SAP, the XQL query is executed using the custom function module Z_XTRACT_IS_TABLE.

{% highlight sql %}
SELECT * FROM MARA WITH-OPTIONS(CUSTOMFUNCTIONNAME = 'Z_XTRACT_IS_TABLE')
{% endhighlight %}

Select all records from table *MAKT*. The results table includes columns with the names *ShortText, MANDT* and *Language*. 

{% highlight sql %}
SELECT MAKTX AS [ShortText], MANDT, SPRAS AS Language FROM MAKT
{% endhighlight %}

Execute SAP Query S|ZTHEO02|ZLIKP with workspace Standard, user group *ZTHEO02* and name *ZLIKP*. 
The results table will return up to 30 records. XtractQL provides expanded syntax options for SELECT statements 
for SAP Query executions. For example, you can specify the return fields in the form LIPS-LFIMG or you can specify 
a WHERE clause as you typically would in SAP ABAP.

{% highlight sql %}
SELECT TOP 30 LIPS-LFIMG, LIPS-MATNR, TEXT_LIKP_KUNNR AS Kundennummer 
 FROM QUERY 'S|ZTHEO02|ZLIKP' 
 WHERE SP$00002 BT '0080011000'AND '0080011999'
{% endhighlight %}

**Function Module**

XQL query to discover the metadata for the *Export* parameter collection of function module *SD_RFC_CUSTOMER_GET.*

{% highlight sql %}
DESCRIBE FUNCTION 'SD_RFC_CUSTOMER_GET' GET EXPORTS
{% endhighlight %}

XQL query to discover the metadata for the *FIELDS* of SAP Query *ZTHEOSQUERY*.

{% highlight sql %}
DESCRIBE QUERY 'G|ZTHEO1|ZTHEOSQUERY' GET FIELDS
{% endhighlight %}

XQL query to execute SAP function module *SD_RFC_CUSTOMER_GET* using the *Export* parameter *KUNNR*. 
The SAP table *CUSTOMER_T* will durch die Syntaxbeschreibung *INTO @RETVAL* definiert.   

{% highlight sql %}
EXECUTE FUNCTION 'SD_RFC_CUSTOMER_GET' 
EXPORTS KUNNR='0000003340' 
TABLES CUSTOMER_T INTO @RETVAL;
{% endhighlight %}

**InfoCubes / BEx Queries**

Execution of SAP BEx Query *0D_DECU/VARDEMO01* with conditions in the *WHERE* clause.

{% highlight sql %}
SELECT * FROM BWQUERY '0D_DECU/VARDEMO01' 
  WHERE MAT03 EQ 'M03', SALESORG BT '1000' AND '3000'
{% endhighlight %}

Execution of SAP BEx *Query 0D_DECU/ZSIMPLEQUERY* with specific field selection.

{% highlight sql %}
SELECT [488CO5SSAOHBH8IM8Z45JO3WI] AS 'A B C',
  [0D_MATERIAL-50D_MATERIAL],[5N77E72SQLYDDW4Y96A53DKU6],
  [0D_MATERIAL-20D_MTLGROUP],[0D_MATERIAL],[0D_SOLD_TO] 
  FROM BWQUERY '0D_DECU/ZSIMPLEQUERY'
{% endhighlight %}
 