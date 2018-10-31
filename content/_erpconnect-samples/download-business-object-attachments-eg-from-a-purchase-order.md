---
layout: page
title: Download Business Object Attachments (e.g. from a purchase order)
description: Download Business Object Attachments (e.g. from a purchase order)
permalink: /:collection/:path
weight: 39
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Introductions**

From SAP rel. 4.6 the user can attach documents to all common business objects. The image shows how to attach a drawing to a purchase order.

![POAttachment01](/img/contents/POAttachment01.png){:class="img-responsive"}

![POAttachment02](/img/contents/POAttachment02.png){:class="img-responsive"}

**Main Functions**

The function modules BDS_CONNECTIONS_GET and BDS_DOCUMENT_GET_TABLE can't be used here. Even if BDS_CONNECTIONS_GET delivers correct document IDs the function BDS_DOCUMENT_GET_TABLE throws a NOTHING_FOUND exception.
So we have to discuss a different way to query attachments of a business object. The following code shows how to read the table SRGBTBREL to obtain all document IDs attached to a business object. The object key is the document number (e.g. the purchase number) the object type is the name of the business object (e,.g. BUS2012 for POs or BUS2010 for RFQs). The function returns an array of strings each representing a key to a downloadable attachment.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static string[] GetAllAttachmentKeys(R3Connection con, 
    string ObjectType, string ObjectKey)
{
    ReadTable read = new ReadTable(con);
    read.TableName = "SRGBTBREL";
    read.AddField("INSTID_B");
    read.AddCriteria("RELTYPE = 'ATTA'");
    read.AddCriteria("AND INSTID_A = '" + ObjectKey + "'");
    read.AddCriteria("AND TYPEID_A = '" + ObjectType + "'");
    read.AddCriteria("AND CATID_A = 'BO'");
    read.Run();
  
    string[] DocIDs = new string[read.Result.Rows.Count];
  
    for (int i = 0; i < read.Result.Rows.Count; i++)
    {
        DocIDs[i] = read.Result.Rows[i]["INSTID_B"].ToString();
    }
  
    return DocIDs;
}
{% endhighlight %}
</details>

To find out some more details on each attachment we have to take a look into table SOOD. The primary key of the table entry is defined by certain parts of the document IDs provided by the function above. The file name of the attachment can be created by concatenating OBJDES and FILE_EXT.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static string GetFileName(R3Connection con, string DocID)
{
    string OBJTP = DocID.Substring(17, 3);
    string OBJYR = DocID.Substring(20, 2);
    string OBJNO = DocID.Substring(22, 12);
    ReadTable readsood = new ReadTable(con);
    readsood.TableName = "SOOD";
    readsood.AddField("OBJDES");
    readsood.AddField("FILE_EXT");
    readsood.AddCriteria("OBJTP = '" + OBJTP + "'");
    readsood.AddCriteria("AND OBJYR = '" + OBJYR + "'");
    readsood.AddCriteria("AND OBJNO = '" + OBJNO + "'");
    readsood.Run();
    if (readsood.Result.Rows.Count == 0)
    {
        return "";
    }
    else
    {
        return readsood.Result.Rows[0]["OBJDES"].ToString() +
            "." + readsood.Result.Rows[0]["FILE_EXT"].ToString();
    }
}
{% endhighlight %}
</details>

To download an attachment by a given object ID we use SO_DOCUMENT_READ_API1. The returning structure DOCUMENT_DATA contains some information about the file (e.g. DOC_SIZE). The table OBJECT_CONTENT returns the binary content of the attachment as a string (don't ask why). The strings are converted into byte arrays and stored to disk.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public static void DownloadDocument(R3Connection con, string Path, string key)
{
    RFCFunction func = con.CreateFunction("SO_DOCUMENT_READ_API1");
    func.Exports["DOCUMENT_ID"].ParamValue = key;
    func.Execut e();
  
    Int32 len = Convert.ToInt32(func.Imports["DOCUMENT_DATA"].ToStructure()["DOC_SIZE"]);
  
  
    string strfile = "";
    System.Text.Encoding enc = System.Text.Encoding.GetEncoding(1252);
  
    if (len > 0)
    {
        foreach (RFCStructure row in func.Tables["OBJECT_CONTENT"].Rows)
        {
            string stline = row["LINE"].ToString().PadRight(255);
  
            if (len < 255)
                stline = stline.Substring(0, len);
            else
                len = len - 255;
  
            strfile += stline;
  
        }
        byte[] bytesfile = enc.GetBytes(strfile);
        System.IO.File.WriteAllBytes(Path, bytesfile);
    }
    else
    {
        throw new Exception("Length of file = 0");
    }
  
}
{% endhighlight %}
</details>

This sample program uses the three functions discussed earlier to download all attachments to a given purchase order number. To download attachments of other business objects, just change the object type (e.g. BUS2010 for RFQ).

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection("SAPServer", 00, "SAPUser", "Password", "EN", "800");
  
con.Open();
  
string[] DocIDs = GetAllAttachmentKeys(con, "BUS2012", "4500014561");
  
if (DocIDs.Length == 0)
    Console.WriteLine("No attachments found");
else
{
    for (int i=0; i < DocIDs.Length ;i++)
    {
        string FileName = GetFileName(con, DocIDs[i]);
        Console.WriteLine("Now downloading " + FileName);
        DownloadDocument(con, @"c:\" + FileName, DocIDs[i]);
    }
}
  
Console.WriteLine("Press enter to exit");
Console.ReadLine();
{% endhighlight %}
</details>

