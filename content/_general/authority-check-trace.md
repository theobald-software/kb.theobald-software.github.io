---
layout: page
title: Authority Check Trace
description: Authority Check Trace
permalink: /:collection/:path
weight: 5
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Often it is difficult to say, which authority objects are needed for certain processes in SAP. To avoid too many authorities for technical users in a productive system, the following steps should help to assign only the authority objects that are really needed:

- Create an authority check trace in your test system
- Create a profile that contains only the needed objects
- Assign the profile to the CPIC user

Attention! The steps described below would only be done together with your system administrator.

**Step 1**

- Go to transaction ST01
- Check 'Authorization Check'
- Save the setting with the save button
- Turn on the trace with the button on the upper left

**Step 2**

- Do all processes you want to do in your sub system - Xtract Tools, ERPConnect etc.
- Hurry up, because it is not good for the performance of the system to have the trace turned on too long.
- Go back to ST01 and turn off the trace.

**Step 3**

- Click on Analysis
- Set the filter to the user you used for the RFC processes and set the filter for time and date. Press F8
- The list contains all used authority objects (green lines)

