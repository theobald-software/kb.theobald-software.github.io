---
layout: page
title: How to activate tracing in ERPConnect
description: How to activate tracing in ERPConnect
permalink: /:collection/:path
weight: 10
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

For debugging you can activate the tracing feature of ERPConnect by setting the Logging = true and the and the Logdir to an existing directory before calling the Open() method (or before Start() if you are using an RFCServer Object).

There are 4 different variations how to set the properties:

1). Logging = false and LogDir = non-existing-path:<br>
        Tracing is disabled. No files are generated. (Default)


2). Logging = true and LogDir = non-existing-path:<br>
        same as 1)

3). Logging = false und LogDir = existing-path<br>
    Tracing is activated, files are generated in the directory specified by LogDir. Only RFC errors are traced.

4). Logging = true und LogDir = existierendes-Verzeichnis<br>
    Tracing is activated, files are generated in the directory specified by LogDir. Full RFC traces are generated.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using (R3Connection r3connection = new R3Connection("host", 00, "user", "pass", "EN", "800"))
{
    r3connection.LogDir = @"C:\Temp\Trace";    //  (directory must exist)
    r3connection.Logging = true;               
    r3connection.Open();
    // do stuff with r3connection
}
{% endhighlight %}
</details>