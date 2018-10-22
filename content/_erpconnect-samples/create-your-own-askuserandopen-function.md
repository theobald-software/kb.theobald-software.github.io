---
layout: page
title: Create your own AskUserAndOpen() function
description: Create your own AskUserAndOpen() function
permalink: /:collection/:path
homepage-weight: 24
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Older version of ERPConnect's R3Connection class (before version 4.5) offered a method called AskUserAndOpen(). This method popped up a user dialog to ask the user for SAP credentials. The method is not available in ERPConnect version 4.5 or above because there was an increasing demand from the customers to have ERPConnect without any reference to the Windows.Forms namespace.

Customers who used this method are advised to download the SAPLogin from this URL and import it into their project:

[http://www.theobald-software.com/download/ERPConnect/SAPLogin.zip](http://www.theobald-software.com/download/ERPConnect/SAPLogin.zip)

The code has to be changed as shown in the following code snippet:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection();
SAPLogin MyLoginForm = new SAPLogin(con, true);
 
if (MyLoginForm.ShowDialog() == DialogResult.Cancel)
    return;
{% endhighlight %}
</details>
