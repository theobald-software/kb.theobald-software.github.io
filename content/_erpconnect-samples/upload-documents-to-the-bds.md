---
layout: page
title: Upload Documents to the BDS
description: Upload Documents to the BDS
permalink: /:collection/:path
weight: 35
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

With ERPConnect it is easy to upload documents like excel sheets, word documents or images to the BDS (Business Document Service). All you have to do is to read the file into a byte array and send the array line after line to the function module BDS_BUSINESSDOCUMENT_CREA_TAB.

In the code below you can see how to upload an excel sheet to the BDS. With just a few changes in the coding like the document class, the document and MIME-type you can easily upload other document types.

The relevant document classes and type you can find in the SAP IMG --> Basis Services --> Archive Link --> Basic Customizing

The Classname (BKPF) is standing for the Accounting document type. In the Document Navigator (TA OAOR) you can find other Classes.
The objectkey (100000000115642009) for BKPF is build from the company code, document number and the fiscal year.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
  
            try
            {
                string sPath = System.IO.Path.GetDirectoryName(@"C:\temp\Material.xlsx");
                string sFile = System.IO.Path.GetFileName(@"C:\temp\Material.xlsx");
                byte[] bytes;
                R3Connection con = new R3Connection("ptmalg", 05, "xxx", "xxx", "en", "800");
                con.Open(false);
  
                RFCFunction func = con.CreateFunction("BDS_BUSINESSDOCUMENT_CREA_TAB");
  
                RFCTable tbData = func.Tables["CONTENT"];
                RFCTable tbSig = func.Tables["SIGNATURE"];
                RFCTable tbComp = func.Tables["COMPONENTS"];
  
                func.Exports["CLASSNAME"].ParamValue = "BKPF";
                func.Exports["CLASSTYPE"].ParamValue = "BO";
                func.Exports["OBJECT_KEY"].ParamValue = "100000000115642009";
                func.Exports["BINARY_FLAG"].ParamValue = "X";
  
                bytes = System.IO.File.ReadAllBytes(@"C:\temp\Material.xlsx");
  
                RFCStructure Content = new RFCStructure();
  
                for (int offset = 0; offset < bytes.Length; offset += 1022)
                {
                    byte[] ExportBytes = new byte[1022]; // In VB change the value of this array to 1021
                    if (offset + 1022 > bytes.Length)
                        Array.Copy(bytes, offset, ExportBytes, 0, bytes.Length - offset);
                    else
                        Array.Copy(bytes, offset, ExportBytes, 0, 1022);
                    Content = tbData.AddRow();
                    Content["LINE"] = ExportBytes;
                }
  
                RFCStructure recComp = tbComp.AddRow();
  
                recComp["DOC_COUNT"] = 1;
                recComp["COMP_COUNT"] = 1;
                recComp["COMP_ID"] = sFile;
                recComp["MIMETYPE"] = "application/vnd.ms-excel";
                recComp["COMP_SIZE"] = bytes.Length;
  
                RFCStructure recSig = tbSig.AddRow();
  
                recSig["DOC_COUNT"] = 1;
                recSig["DOC_ID"] = "";
                recSig["DOC_VER_NO"] = 1;
                recSig["DOC_VAR_ID"] = 1;
                recSig["DOC_VAR_TG"] = "OR";
                recSig["COMP_COUNT"] = 1;
                recSig["PROP_NAME"] = "BDS_DOCUMENTTYPE";
                recSig["PROP_VALUE"] = "BDS_SHEET";
  
                recSig = tbSig.AddRow();
  
                recSig["DOC_COUNT"] = 1;
                recSig["DOC_ID"] = "";
                recSig["DOC_VER_NO"] = 1;
                recSig["DOC_VAR_ID"] = 1;
                recSig["DOC_VAR_TG"] = "OR";
                recSig["COMP_COUNT"] = 1;
                recSig["PROP_NAME"] = "BDS_DOCUMENTCLASS";
                recSig["PROP_VALUE"] = "XLS";
  
                recSig = tbSig.AddRow();
  
                recSig["DOC_COUNT"] = 1;
                recSig["DOC_ID"] = "";
                recSig["DOC_VER_NO"] = 1;
                recSig["DOC_VAR_ID"] = 1;
                recSig["DOC_VAR_TG"] = "OR";
                recSig["COMP_COUNT"] = 1;
                recSig["PROP_NAME"] = "DESCRIPTION";
                recSig["PROP_VALUE"] = sFile;
  
                recSig = tbSig.AddRow();
  
                recSig["DOC_COUNT"] = 1;
                recSig["DOC_ID"] = "";
                recSig["DOC_VER_NO"] = 1;
                recSig["DOC_VAR_ID"] = 1;
                recSig["DOC_VAR_TG"] = "OR";
                recSig["COMP_COUNT"] = 1;
                recSig["PROP_NAME"] = "LANGUAGE";
                recSig["PROP_VALUE"] = "EN"; 
                func.Execut e();
                Console.WriteLine("Upload OK");
                Console.ReadLine();
            }
            catch (Exception e1)
            {
                Console.WriteLine(e1.Message);
                Console.ReadLine();
            }
        }
{% endhighlight %}
</details>

![BusinessDocumentNavigator01](/img/contents/BusinessDocumentNavigator01.jpg){:class="img-responsive"}

![BDNDisplayDocument](/img/contents/BDNDisplayDocument.jpg){:class="img-responsive"}