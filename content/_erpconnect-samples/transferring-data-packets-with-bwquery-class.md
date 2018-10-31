---
layout: page
title: Transferring data packets with BWQuery class
description: Transferring data packets with BWQuery class
permalink: /:collection/:path
weight: 30
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

When extracting BW queries with a huge amount of data it might be useful not to extract the whole result set at once (see also Transferring data packets with ReadTable class ).

The code sample below shows how to use the property 'PackageSize' and the event 'OnIncomingPackage'. The sample is shortened and is based on Executing BW Queries .

Set the PackageSize property to a reasonable value (e.g. 1000) and process each package within the IncomingPackage event. Before calling Execut e() the event handler must be set correctly to trigger the event.

**Attention! Packaging is limited to 1.000.000 rows due to SAP**

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void Go_Click(object sender, System.EventArgs e)
{
    // Open R3Connection and create BWQuery object
  
    query.PackageSize = 1000;
    query.IncomingPackage += new BWCube.OnIncomingPackage(query_IncomingPackage);
  
    query.Execut e();
}
  
void query_IncomingPackage(BWCube Sender, MDXExecuter mdxexecuter, DataTable PackageResult)
{
    MessageBox.Show("A new data package has arrived");
    this.dataGrid1.DataSource = PackageResult;
}
{% endhighlight %}
</details>
