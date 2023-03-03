---
ref: xu-getting-started-04
layout: page
title: Load an Extraction into a Microsoft SQL Server Database
description: Load an Extraction into Microsoft SQL Server
permalink: /:collection/:path
weight: 97
lang: en_GB
---

This article shows how to load the data of an extraction into a Microsoft SQL Server database. <br>


### Creating a Microsoft SQL Server destination
To load data into a Microsoft SQL Server, a Microsoft SQL Server destination must be created and defined.<br>
 
1. In the main window of the designer, click **[Destination]** to open destination settings.
![Load-Destinations](/img/contents/xu/xu_designer_destination.png){:class="img-responsive"}
2. In the window "Destination Settings" click **[+]** (1) to manage destinations. 
![Load-Manage-Shared-Destination](/img/contents/xu/destinations_load_manage_shared.png){:class="img-responsive"}
3. Click **[Add]** (2) to add a new destination.
4. Enter a **Name** and select **SQLServer** from the drop down list **Type** (3).
![Select-Destination-Type](/img/contents/xu/destination_details_sqlserver.png){:class="img-responsive"}
5. Fill in the fields **Server Name** and **Database Name**. 
6. Click **[Test Connection]** (4) to check the connection to the  database.
![Test-Connection-Successful](/img/contents/xu/sqlserver_destination-details.png){:class="img-responsive"}
7. Click **[OK]** (5) to save the destination connection. 


### Loading data into the Microsoft SQL Server destination

1. In the main window of the designer, select an extraction.
2. Click **[Destination]**. The window "Destination Settings" opens.
![Load-Destinations](/img/contents/xu/xu_designer_destination.png){:class="img-responsive"}
3. In the "Destination Settings" window, choose the **SQLServer** destination from the drop down menu. 
You can change the extraction-specific settings, if needed. This example uses the default settings:<br>
![Load-Shared-Destination-SQLServer](/img/contents/xu/sqlserver_destination-settings.png){:class="img-responsive"}
4. Click **[OK]** to get back to the main window of the Designer.       
5. Click **[Run] > [run in xu.exe]**
![Run an extraction](/img/contents/xu/run_extraction.png){:class="img-responsive"} 
The command line window opens and the successful extraction procedure ends with a message *Extraction finished successfully*.
![Database-Metadata](/img/contents/xu/konsole_run_in_xu_exe.png){:class="img-responsive"}

#### Checking the extraction result
Open your SQL Management Studio and check the existence of the successfully extracted table. 
