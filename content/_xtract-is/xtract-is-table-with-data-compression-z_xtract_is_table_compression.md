---
layout: page
title: Xtract IS Table with Data Compression Z_XTRACT_IS_TABLE_COMPRESSION
description: Xtract IS Table with Data Compression Z_XTRACT_IS_TABLE_COMPRESSION
permalink: /:collection/:path
homepage-weight: 22
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This article describes how to install the function Z_XTRACT_IS_TABLE_COMPRESSION the follow-up of the Z_XRACT_IS_TABLE function.

To use the Z function please follow these instructions:

 

**Xtract IS Table**

Go to the settings dialog and check Data Compression to use the new function module. (Please be sure the field Custom Function has the value Z_XTRACT_IS_TABLE_COMPRESSION)


### Step-by-step Guide - How to install Z_XTRACT_IS_TABLE_COMPRESSION

#### Step 1 - DDIC Object

First we need 2 structures. Please have a look at the screenshot below.

![Z_XTRACT_IS_TABLE_COMPRESS06](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS06.png){:class="img-responsive"}

![CompressionStruc02](/img/contents/CompressionStruc02.png){:class="img-responsive"}

#### Step 2 – Create a new function module

Call transaction SE37 and create a new function module named Z_XTRACT_IS_TABLE_COMPRESSION. 
You can use an existing function group or create a new one. 
This is also valid for the development class (Package).

In tab “Attributes” check “Remote Enabled”.

![Z_XTRACT_IS_TABLE_COMPRESS](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS.png){:class="img-responsive"}

#### Step 3 – Import Parameter

Define the import parameters: 

![Z_XTRACT_IS_TABLE_COMPRESS02](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS02.png){:class="img-responsive"}

Define the export parameters:

![Z_XTRACT_IS_TABLE_COMPRESS03](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS03.png){:class="img-responsive"}

Define the tables:

![Z_XTRACT_IS_TABLE_COMPRESS04](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS04.png){:class="img-responsive"}

Define the exceptions:

![Z_XTRACT_IS_TABLE_COMPRESS05](/img/contents/Z_XTRACT_IS_TABLE_COMPRESS05.png){:class="img-responsive"}

#### Step 4 - Code

1. You need to fill in the data from the attachment functionpool_compression.txt in the global data of the function module (menu Goto -> Global Data).
2. The ABAP sourcecode is placed in the attached file Z_XTRACT_IS_TABLE_COMPRESSION.txt. Use Ctrl + C and Ctrl + V to paste the code in the source code editor. Save the function module and activate it.

Attachments   	---------------------------------------

[functionpool.txt (7.25 KB)](/files/functionpool.txt) <br>
[z_xtract_is_table_compression.txt (167.36 KB)](/files/z_xtract_is_table_compression.txt)