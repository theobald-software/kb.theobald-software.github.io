---
layout: page
title: How to insert xtract universal extraction events into the windows logs
description: how-to-insert-xtract-universal-extraction-events-into-the-windows-logs-and-show-them-in-the-event-viewer
permalink: /:collection/:path
weight: 3
---
You can use the Windows Event Viewer to show events from your extractions of Xtract Universal. 

To accomplish this, you need a batch file, which inserts extraction events into the windows log. 

Let's name it *xubatch.bat* (You can find a sample attached)

This batchfile contains following lines:
 ```
echo off
"C:\Program Files\XtractUniversal\xu.exe" %1
IF %ERRORLEVEL% == 0 eventcreate /ID 1 /L APPLICATION /T INFORMATION /SO "XtractUniversal" /D "Extraction successfully executed"
IF %ERRORLEVEL% == 1001 eventcreate /ID 101 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "An undefined error occured"
IF %ERRORLEVEL% == 1002 eventcreate /ID 102 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "Could not find the specified file"
IF %ERRORLEVEL% == 1013 eventcreate /ID 113 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "Invalid input data"
IF %ERRORLEVEL% == 1014 eventcreate /ID 114 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "The number of arguments is invalid"
IF %ERRORLEVEL% == 1015 eventcreate /ID 115 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "The parameter name is unknown"
IF %ERRORLEVEL% == 1016 eventcreate /ID 116 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "The argument is not valid"
IF %ERRORLEVEL% == 1053 eventcreate /ID 153 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "Something is wrong with your URL"
IF %ERRORLEVEL% == 1087 eventcreate /ID 187 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "The parameter is invalid"
IF %ERRORLEVEL% == 404 eventcreate /ID 404 /L APPLICATION /T ERROR /SO "XtractUniversal" /D "Extraction does not exist"
 ```
If you are using a different folder for your XU installation than the default folder, please change the following line to your installation path:
```
"C:\Program Files\XtractUniversal\xu.exe" %1
 ```
You only need to run the following line with the name of the extraction as an argument in the windows command line:
```
xubatch.bat http://localhost:8065/?name=MAKT
```

![XU_batch](/img/contents/xu_batch_bat_screenshot.png){:class="img-responsive"}

You can see the following event in the Event Viewer:

![event_viewer](/img/contents/event_viewer_result.png){:class="img-responsive"}
![error_event_viewer](/img/contents/error_event_viewer.png){:class="img-responsive"}
