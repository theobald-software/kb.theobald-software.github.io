---
layout: page
title: ERPConnect License Key
description: ERPConnect License Key
permalink: /:collection/:path
weight: 1
---

ERPConnect checks the license number whenever a connection is opened (client and server). After the end of the test period ERPConnect will not run without a valid license.
  
Please set your license number through the static class ERPConnect.LIC as shown in the code below. This must be done before the first connection to SAP is established (regardless of wether as a server or a client).

<details>
<summary>Click to open C# example.</summary>
{% highlight csharp %}
ERPConnect.LIC.SetLic("XXXXXXXXXX");
{% endhighlight %}
</details>

<details>
<summary>Click to open VB.NET example.</summary>
{% highlight vb %}
ERPConnect.LIC.SetLic("XXXXXXXXXX")
{% endhighlight %}
</details>
  
If you have more than one developer license, the license numbers end with -01,-02, etc. Which ending you use with SetLic does not matter. You may omit the end completely.
