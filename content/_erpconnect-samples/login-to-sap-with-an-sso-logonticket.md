---
layout: page
title: Login to SAP with an SSO Logon Ticket
description: How to Login to SAP with an SSO Logonticket
permalink: /:collection/:path
weight: 25
---

This sample shows how to login to SAP with an SSO Logon Ticket.<br>
The following sample code retrieves the cookie from the SAP Portal Ticketissuer that contains the SSO Ticket using an HTTP Request with a Basic Authentication:

```csharp
using System;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;

using ERPConnect;
using ERPConnect.Utils;

Console.Write("User: ");
string user = Console.ReadLine();

Console.Write("Password: ");
string password = Console.ReadLine();

string cookie = RetrieveCookieBasic(user, password);
string ticket = ParseCookie(cookie);

using var connection = new R3Connection();
connection.Protocol = ClientProtocol.NWRFC;
connection.Host = "sapserver";
connection.Client = "001";
connection.Language = "EN";
connection.SystemNumber = 00;
connection.LogonTicket = ticket;

connection.Open();
var readTable = new ReadTable(connection)
{
    TableName = "USR01",
    WhereClause = "BNAME = SY-UNAME"
};

Console.WriteLine("Reading USR01...");
readTable.Run();

Console.WriteLine($"SAP user is {readTable.Result.Rows[0]["BNAME"]}");
return;

static string RetrieveCookieBasic(string user, string password)
{
    var httpWebRequest = (HttpWebRequest) HttpWebRequest.Create("http://sapserver:50000/irj/portal");
    string userAndPass = user + ":" + password;
    byte[] codepoints = Encoding.UTF8.GetBytes(userAndPass);
    string base64 = Convert.ToBase64String(codepoints);
    httpWebRequest.Headers[HttpRequestHeader.Authorization] = "Basic " + base64;

    using WebResponse webResponse = httpWebRequest.GetResponse();
    return webResponse.Headers[HttpResponseHeader.SetCookie];
}

static string ParseCookie(string cookie)
{
    Match match = Regex.Match(
        cookie,
        "MYSAPSSO2=([a-z0-9%]+);",
        RegexOptions.Compiled | RegexOptions.IgnoreCase);

    return match.Groups[1].Captures[0].Value;
}
```

****

#### Related Link:
- [Online Help: SSO with Logon Tickets](https://help.theobald-software.com/en/erpconnect/sap-connection/sso-with-log-on-tickets). 