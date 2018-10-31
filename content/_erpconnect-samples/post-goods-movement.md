---
layout: page
title: Post Goods Movement
description: Post Goods Movement
permalink: /:collection/:path
weight: 27
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

In this sample we create a goods receipt for a goods movement with BAPI_GOODSMVT_CREATE. The Parameter "GM_CODE" represents the transaction code that would be used to post the movement as dialog user. The value “01” is replaced by SAP with the transaction code MB01. MB01 is used to create a goods receipt for purchase order. Further values for this parameter would be “02” for goods receipt for order (MB31) or "05" for other goods receipts (MB1C).

Important values for the header data structure are the Posting Date of the Document, the Username, and the Document Date. The item data rows are filled in our example with reference to the purchase order. The parameter MOVE_TYPE "101" is the Movement Type for the goods receipt for purchase order into warehouse/stores. The Storage Location for the goods can be set in the parameter "STGE_LOC". Since we create a goods movement for a purchase order, we have to set the parameters PO_NUMBER and the PO_ITEM with the Purchase Order Number and the Purchase Order Item. The Movement Indicator in the parameter "MVT_IND" specifies the type of document that constitutes the basis for the movement. Possible types are Purchase Order or Delivery Note for example.

If a goods receipt is successfully created the function returns the material document number and the year.

To get the function running a connection object (Con) must be available.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
public bool GoodsReceipt101(string PO_Number, string PO_ITEM, string Plant, decimal Quantity)
  {
     string rMessage;
     // Fill Export Structures for the FunctionModule
     RFCFunction func = Con.CreateFunction("BAPI_GOODSMVT_CREATE");
     func.Exports["GOODSMVT_HEADER"].ToStructure()["PSTNG_DATE"] = "20070921"; //Posting Date in the Document
     func.Exports["GOODSMVT_HEADER"].ToStructure()["PR_UNAME"] = "HUGO";       //UserName
     func.Exports["GOODSMVT_HEADER"].ToStructure()["HEADER_TXT"] = "XXX";      //HeaderText
     func.Exports["GOODSMVT_HEADER"].ToStructure()["DOC_DATE"] = "20070921";   //Document Date in Document
  
     func.Exports["GOODSMVT_CODE"].ToStructure()["GM_CODE"] = "01";
  
     // Fill Table Items 
     RFCStructure itemrow = func.Tables["GOODSMVT_ITEM"].Rows.Add();
     itemrow["PLANT"] = Plant;                //Plant
     itemrow["PO_NUMBER"] = PO_Number;        //Purchase Order Number
     itemrow["PO_ITEM"] = PO_ITEM;            //Item Number of Purchasing Document  
     itemrow["ENTRY_QNT"] = Quantity;         //Quantity in Unit of Entry
     itemrow["MOVE_TYPE"] = "101";            //Movement Type
     itemrow["MVT_IND"] = "B";                //Movement Indicator
     itemrow["STGE_LOC"] = "0001";            //Storage Location
  
     // Execute Function Module
     func.Execut e();
  
     RFCFunction funcCommit = Con.CreateFunction("BAPI_TRANSACTION_COMMIT");
     funcCommit.Exports["WAIT"].ParamValue = "X";
  
     string MaterialDocument = func.Imports["MATERIALDOCUMENT"].ParamValue.ToString();
     string MatDocumentYear = func.Imports["MATDOCUMENTYEAR"].ParamValue.ToString();
  
     // Check Return-Table
     if (func.Tables["RETURN"].RowCount > 0)
      {
        rMessage = func.Tables["RETURN"].Rows[0, "MESSAGE"].ToString();
        funcCommit.Execut e();
        return !func.Tables["RETURN"].Rows[0, "TYPE"].ToString().Equals("E");
      }
     else
      {
        funcCommit.Execut e();
        rMessage = "";
        return true;
      }
 }
{% endhighlight %}
</details>
