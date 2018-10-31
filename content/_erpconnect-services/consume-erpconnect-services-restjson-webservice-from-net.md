---
layout: page
title: Consume ERPConnect Services REST/JSON Webservice from .NET
description: Consume ERPConnect Services REST/JSON Webservice from .NET
permalink: /:collection/:path
weight: 5
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

ERPConnect Services Runtime offers a very good REST interface which is well explained in the help portal (see [here](https://help.theobald-software.com/en/erpconnect-services/ecs-core/webservice-designer/rest-web-services)). The initial idea behind this interface is to offer SAP connectivity through EPPConnect Services to non-.NET environments like Java Script, PHP or Objective C. However it might be necessary as well to use the REST interfaces through C#.NET. This little sample shows the basic concept behind it. To get this sample to work, please make sure, that Basic Authentication is turned on at the SharePoint site on which ECS is running.

The first step is to create a proper WebRequest object, that points to the Webservice URL (in this sample we use the ExecuteTableQuery entry point, but the others work in the same manner). *MethodType* must be *Post, Content Type* is test/json, because we submit a JSON request in the body. 

After the request is submitted the response stream is read to the end and sent to the JSON deserializer (download and reference the dll from codeplex: [json.codeplex.com](https://archive.codeplex.com/?p=json)). After deserializing it's quite simple to access the SAP table through the row's index and column's name as shown in the last lines of the sample.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
{
    string url = "http://107.21.97.255/_vti_bin/ERPConnectServiceRest.svc/ExecuteTableQuery";
    WebRequest request = WebRequest.Create(url);
    request.Credentials = new NetworkCredential("MyAccount", "MyPassword");
    request.Method = "POST";
    request.ContentType = "text/json";
    byte[] byteArray = Encoding.UTF8.GetBytes ("{ tableName: 'T001W', settings: { RowCount: 10 } }");
    Stream myRequestStream = request.GetRequestStream();
    myRequestStream.Write(byteArray, 0, byteArray.Length);
    myRequestStream.Close();
 
    WebResponse ws = request.GetResponse();
    StreamReader reader = new StreamReader(ws.GetResponseStream(), Encoding.UTF8);
    String responseString = reader.ReadToEnd();
 
    dynamic jsonResponse = JsonConvert.DeserializeObject(responseString);
 
    for (int i = 0; i < jsonResponse.result.rows.Count; i++)
    {
        Console.WriteLine(jsonResponse.result.rows[i]["WERKS"] + " " + jsonResponse.result.rows[i]["NAME1"]);
    }
 
    Console.ReadLine();
}
{% endhighlight %}
</details>
