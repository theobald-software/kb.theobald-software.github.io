---
layout: page
title: How to schedule Xtract Universal extractions to load data from SAP.
description: How-to-schedule-Xtract-Universal-extractions-to-load-data-from-SAP.
permalink: /:collection/:path
weight: 31
---

**[Xtract Universal](https://www.theobald-software.com/en/xtract-universa)** supports integration of your SAP data in the most different target systems. <br>

After creating an extraction (Refer to [OnlineHelp](https://help.theobald-software.com/en/xtract-universal/index)), you can run an extraction by just calling the command line tool with the right parameters. <br>

As an alternative you can just call the correspondent URL that can be found in the Run Dialog (e.g. http://nbelzein:8065/?name=plants). We recommend to use the command line.

![XU schedule 01](/img/contents/xu/xu-schedule-01.jpg){:class="img-responsive"}

This article describes how to schedule Xtract Universal extractions with the command line tool using dynamic parameters.

Xtract Universal delivers the command line tool **xu.exe** (to be found in the installation folder, e.g. **C:\Program Files\XtractUniversal\xu.exe** to run an extraction using the command line. <br>
We will use this approach to schedule an extraction with the "Windows Task Scheduler" and the "SQL Server Agent".

**Step 1** <br>

To open the Task Scheduler on Windows 7, click **Start Button > Control Panel > System Security > Administrative Tools > Task Scheduler**.
Alternatively you can run the task scheduler from the command line by typing "Taskschd.msc".

**Step 2** <br> 

Click the "Action" menu and then click **[Create Basic Task]**.

![XU schedule 02](/img/contents/xu/xu-schedule-02.jpg){:class="img-responsive"}

**Step 3** <br>

Type a name for the task and an optional description, and then click **[Next]**.

![XU schedule 03](/img/contents/xu/xu-schedule-03.jpg){:class="img-responsive"}

**Step 4** <br>

Select the option "Daily" and then click **[Next]**.

![XU schedule 04](/img/contents/xu/xu-schedule-04.jpg){:class="img-responsive"}

**Step 5** <br>

Set a start date and time and then click **[Next]**.

![XU schedule 05](/img/contents/xu/xu-schedule-05.jpg){:class="img-responsive"}

**Step 6** <br>

Select the option "Start a program".

![XU schedule 06](/img/contents/xu/xu-schedule-06.jpg){:class="img-responsive"}

**Step 7** <br>

As "Program/script" set the path to the Xtract Universal command line tool **C:\Program Files\XtractUniversal\xu.exe**. <br> 

Set the field "Add arguments (optional)" to "-s localhost -p 8065 -n SAPPlants" <br>

Click **[Next]**.

![XU schedule 07](/img/contents/xu/xu-schedule-07.png){:class="img-responsive"}

**Step 8** <br>

Check the summary and click **[Finish]**.

![XU schedule 08](/img/contents/xu/xu-schedule-08.png){:class="img-responsive"}

Now the task is planned. You can right-click the task and select **[run]** to start it immediately. <br>

![XU schedule 09](/img/contents/xu/xu-schedule-09.jpg){:class="img-responsive"}

If you want the task to run more than one extraction, open **[edit]** and go to the tab "Actions" and create new actions as described in *Step 7*. <br>

This was just a brief demonstration. The "Task Scheduler" offers more options, please check [Microsoft technet](http://technet.microsoft.com/en-us/library/cc721931.aspx) for more detailed information.

**SQL Server Agent** <br>

You can also use the SQL Server Agent to schedule the job. <br>

Create a step of type "Operating System (CmdExec)" and set the command to "C:\Program Files\XtractUniversal\xu.exe" -s localhost -p 8065 -n SAPPlants".