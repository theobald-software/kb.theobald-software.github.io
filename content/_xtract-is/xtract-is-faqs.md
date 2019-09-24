---
layout: page
title: Xtract IS FAQs
description: Xtract IS FAQs
permalink: /:collection/:path
weight: 19
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

#### Installation

**Librfc32.dll can not be loaded on the server**

*I added the librfc32.dll to the server's system32 directory. But there is still an error that the dll cannot be loaded. I haven't installed the SAP GUI and I do not use a 64-bit os.*

Please check, if the following C++-Runtime-Dlls are available. MSVCP71.dll, MSVCR71.dll. If not, copy them from the local workstation to the server's system32. Those Dlls are part of the Microsoft Visual C++ Redistributable Package. Please download the suitable package for your machine from Microsoft website.

**UnauthorizedAccessException during license installation**

*An UnauthorizedAccessException is thrown on my Vista workstation when I try to apply the license using the License Manager*

Please run the License Manager in admin mode. If this doesn't help, check if the file XtractIS.License.dll in your Xtract IS installation directory is set to read-only. If so, un-set this option.

**How to download 64 bit version of librfc32.dll**

I'm unable to find the 64-bit version of librfc32.dll in SAP software download center (SAPNet)

Please drill down the following path:

- Entry by Application Group
- SAP NetWeaver
	- SAP NETWEAVER
		- SAP NETWEAVER 2004S
			- Entry by Component
				-Application Server ABAP
					- SAP KERNEL 7.00 64-BIT>
						- Windows Server on x64 64 bit
							- #Database independent
								- librfc_XXXXXXXXX.SAR

#### BW Cube

**Axis 0 has no rows**

*When I try to execute a BW query I get the message 'Axis 0 has no rows'.*

You are using variable values that lead to an empty result set. Please check the value of your variables and use the value help to ensure that the correct format is provided.


**MetaData Refresh doesn't work**

*I click on MetaData Refresh but the meta data is refreshed. The query is still in old version.*

Close and open the dialog again to force the connection to SAP to be reconnected. SAP catches the meta data during active sessions.

**Extracting VBPA rows for dedicated partner roles doesn't work**

*I would like to filter table VBPA (PARVW = ‘SH’) but with your tool I receive no records.When I do this in SE16N I receive records.*

The PARVW field is translated automatically by SE16N between the technical PARVW and the language dependant PARVW. The translation between both values is stored in table TPAUM. In your case the right value for SH would be WE, so please try to adjust your WHERE string to ‘PARVW = ‘WE’.
 

**Error message 'Field name in SQL statement too long'**

*The WHERE Statement (AUART <> 'RK' OR AUART <> 'ZRTF' OR AUART <> 'ZRTG') AND ERDAT = 20070530 leads to the error 'Field name in SQL statement too long'*

The WHERE statement is SAP Open SQL, so please place a space right after the first bracket: ( AUART <> 'RK' OR AUART <> 'ZRTF' OR AUART <> 'ZRTG')

**Wildcards in the WHERE clause?**

*Is it possible to use wildcards in the WHERE clause?*

It is possible to use wildcards along with the LIKE operator: e.g. AUART LIKE ‘A%’


**Table Joins**

*When you use the Xtract Is Table component, is it possible to extract more than one table at once and if yes can you write SQL queries between those tables?*

The Xtract IS Table component can only extract one table at once. This has something to do with the fact that we would have to install a lot of stuff in the SAP system to provide real table joins. This is not accepted by most of the customers. But you have different other options to arrange joins:

- Put two table source components in your data flow task. Then you can use the Join Transformation to put the two streams together.
- Create a view in SAP based on the tables you want to join (it’s like a view in SQL server). Then you can use Xtract IS Table to extract the view.
- Create a SAP query based on the table you want to join, then use the Xtract IS Query component to execute and read the query. 

**Short Dump &INCLUDE INCL_INSTALLATION_ERROR**

*After a long period of time the extraction crashes with this error message: &INCLUDE INCL_INSTALLATION_ERROR*

The extraction needs too much memory within the SAP system. Please reduce the package size.

#### Xtract IS Query

**Unable to find query in search dialog**

*I can't see my query in the search dialog in the SSIS component.*

After creating the query in SAP, you have to execute the query once to compile the query in SAP and to make it possible to see from SSIS.

#### DeltaQ

**Deleting a Delta Queue entry in RSA7**

*I'm not able to delete an active Delta Queue entry in RSA7. The system is doing nothing when I click the delete button.*

Please go to SE16 or SE16n and delete all the entries manually that belong to your request from the tables ROOSPRMSF and ROOSPRMSC.
 

**Internal tables for DeltaQ processes**

*What are the most important internal tables for the Delta process in SAP?*

RORQSTPRMS -> Log table, entry per Request, Data Pack Number or Info Pack Number<br>
ROOSPRMSC -> Entry per OLTP Source and destination system and initial request ID <br>
ROOSPRMSF -> Selection criteria per OLTP Source, destination system and initial Request <br>
ROOSGEN -> Entry per OLTP Source and destination system 


**Connection Manager not found in SSIS**

*Connection Manger in SSIS is recognized as a non valid connection manager for SSIS.*

Please restart your server where SSIS is installed to solve this problem.

 
**No delta possible with master data / attributes**

*I performed a Delta Init on data source 0CUSTOMER_ATTR. But no delta changes are tracked. The queue is always empty.*

Please make sure, that the change pointer is activated in your R/3 system: 

Transaction SALE -> Modeling and Implementing Business Processes -> Master Data Distribution -> Replication of Modified Data -> Activate Change Pointers - Generally