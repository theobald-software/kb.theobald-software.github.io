---
layout: page
title: How to schedule Xtract Universal extractions to load data from SAP.
description: How-to-schedule-Xtract-Universal-extractions-to-load-data-from-SAP.
permalink: /:collection/:path
weight: 31
---

**[Xtract Universal](https://www.theobald-software.com/en/xtract-universa)** supports integration of your SAP data in the most different target systems. <br>

After creating an extraction (Refer to [OnlineHelp](https://help.theobald-software.com/en/xtract-universal/index)), you can run an extraction by just calling the command tool with the right parameters. <br>

As an alternative you can just call the correspondent URL that can be found in the Run Dialog (e.g. http://nbelzein:8065/?name=plants). We recommend to use the command line.

![XU schedule 01](/img/contents/xu/xu_schedule_01.jpg){:class="img-responsive"}

In this blog I will show you how to schedule an Xtract Universal extraction that is as easy as calling the command line with the right parameters.

Xtract Universal delivers the command tool **xu.exe** (to be found in the installation folder, e.g. **C:\Program Files\XtractUniversal\xu.exe** to run an extraction using the command line. <br>
We will use this approach to schedule an extraction with the windows Task Scheduler and the SQL Server Agent.

**Step 1** <br>

To open the Task Scheduler on Windows 7, Click **Start Button > Control Panel > System Security > Administrative Tools > Task Scheduler**.
Alternatively you can Run the Task Scheduler from the Command Line by Typing Taskschd.msc.

**Step 2** <br> 

Click the Action menu and then click Create Basic Task

![XU schedule 02](/img/contents/xu/xu_schedule_02.jpg){:class="img-responsive"}

**Step 3** <br>

Type a name for the task and an optional description, and then click **[Next]**.

![XU schedule 03](/img/contents/xu/xu_schedule_03.jpg){:class="img-responsive"}

**Step 4** <br>

Select the option **daily** and then click **[Next]**.

![XU schedule 04](/img/contents/xu/xu_schedule_04.jpg){:class="img-responsive"}

**Step 5** <br>

Set start date and time and then click **[Next]**.

![XU schedule 05](/img/contents/xu/xu_schedule_05.jpg){:class="img-responsive"}

**Step 6** <br>

Select the option **Start a program**

![XU schedule 06](/img/contents/xu/xu_schedule_06.jpg){:class="img-responsive"}

**Step 7** <br>

As **Program/script** set the path to the Xtract Universal Command tool **C:\Program Files\XtractUniversal\xu.exe**. <br> 

Set the field **Add arguments (optional)** to **-s localhost -p 8065 -n SAPPlants** <br>

Click **[Next]**.

![XU schedule 07](/img/contents/xu/xu_schedule_07.jpg){:class="img-responsive"}

**Step 8** <br>

Check the Summary and Click **[Finish]**.

![XU schedule 08](/img/contents/xu/xu_schedule_08.jpg){:class="img-responsive"}

Now the Task is planned. You can right-click the task and select **[run]** to start it immediately. <br>

![XU schedule 09](/img/contents/xu/xu_schedule_09.jpg){:class="img-responsive"}

If you want the task to run more than one extraction, open edit and go to the tab Actions and create new actions as described in **Step 7**. <br>

This was just a demonstration. The Task Scheduler offers more options. For more options check [Microsoft technet](http://technet.microsoft.com/en-us/library/cc721931.aspx)

**SQL Server Agent** <br>

You can also use the SQL Server Agent to schedule the job. <br>

Create a step of Type **Operating System (CmdExec)** and set the command to

**"C:\Program Files\XtractUniversal\xu.exe" -s localhost -p 8065 -n SAPPlants**