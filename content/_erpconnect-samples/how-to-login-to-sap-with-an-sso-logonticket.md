---
layout: page
title: How to Login to SAP with an SSO Logonticket
description: How to Login to SAP with an SSO Logonticket
permalink: /:collection/:path
weight: 25
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

ERPConnect can use SSO Tickets to logon to SAP. There are several methods to get an SSO Ticket depending on the SAP Infrastructure in the company.

 To get the cookie from the SAP Portal Ticketissuer, which contains the SSO Ticket, a HTTP Request with a Basic Authentication can be used:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
string rfcHost = "sapserver";
string rfcClient = "000";
int rfcSystemNumber = 00;
string portalUrl = "http://sapserver:50000/irj/portal";
string user = "J2EE_ADMIN";
string password = "PWD";
string cookie, ticket;
cookie = RetrieveCookieBasic(portalUrl, user, password);
static string RetrieveCookieBasic(string portalUrl, string user, string password)
{<br> 
HttpWebRequest httpWebRequest = (HttpWebRequest)HttpWebRequest.Create(portalUrl);
string userAndPass = user + ":" + password;
byte[] codepoints = Encoding.UTF8.GetBytes(userAndPass);
string base64 = Convert.ToBase64String(codepoints);
httpWebRequest.Headers[HttpRequestHeader.Authorization] = "Basic " + base64;
using (WebResponse webResponse = httpWebRequest.GetResponse())
{<br>
cookie =  webResponse.Headers[HttpResponseHeader.SetCookie];
}
}
{% endhighlight %}
</details>

The next step is to parse the cookie:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
ticket = ParseCookie(cookie);
static string ParseCookie(string cookie){
Match match = Regex.Match(
cookie,
"MYSAPSSO2=([a-z0-9%]+);",
RegexOptions.Compiled | RegexOptions.IgnoreCase);
return match.Groups[1].Captures[0].Value;}
{% endhighlight %}
</details>

Now a client connection with ERPConnect and the ticket  to an SAP System  is possible:

<details>
<summary>[C#]</summary>
{% highlight csharp %}
using (R3Connection r3Connection =new R3Connection()
{
Host = rfcHost, Client = rfcClient,
Language = "EN", 
SystemNumber = rfcSystemNumber
}
)
{
 r3Connection.OpenSSO(ticket);
ReadTable readTable = new ReadTable(r3Connection);
 readTable.TableName = "USR01";
 readTable.WhereClause = "BNAME = SY-UNAME";
 Console.WriteLine("Reading USR01...");
 readTable.Run();
 Console.WriteLine("SAP user is " + readTable.Result.Rows[0]["BNAME"]);
 }
{% endhighlight %}
</details>
