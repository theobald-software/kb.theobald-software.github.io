---
layout: page
title: Get CostCenter Hierarchies
description: Get CostCenter hierarchies
permalink: /:collection/:path
weight: 11
---


This sample shows how to build a treeview with cost centers of one selected standard hierarchy.

### About

Cost center hierarchies are stored in different tables in SAP. 
Every controlling area has one standard hierarchy defined. 
Cost centers belong to these standard hierarchies. 

### Set Up a Treeview of Cost Centers

The Windows form for the treeview should contain following elements:

- One button: *btnGetCC* 
- One DataGridView: *dgContArea* 
- One TreeView: *tvCC*

![CostCenterHier](/img/contents/CostCenterHier.jpg){:class="img-responsive"}

Follow the steps below to build a treeview during *FormLoad*:

1. Connect to the SAP system using `R3Connection`.
2. Read the table with the controlling area standard hierarchy relations.
3. Display the table in a *DataGridView*.
4. When selecting a controlling area with a click in the *DataGridView*, the standard hierarchy is written inzo a variable.
5. When clicking the button, the structure of the cost centers and the hierarchy are build and shown in the treeview.

<!---
multiple tabs?. first tab includes step 1-3, second tab includes step 4, thirs tab includes step
-->

```csharp
using System;
using ERPConnect;

// Set your ERPConnect license
LIC.SetLic("xxxx");

using var connection = new R3Connection(
    host: "server.acme.org",
    systemNumber: 00,
    userName: "user",
    password: "passwd",
    language: "EN",
    client: "001")
{
    Protocol = ClientProtocol.NWRFC,
};

connection.Open();

string KOKRS;
string STDHIER;

private void frmMain_Load(object sender, EventArgs e)
{
   try
   {
      connection.AskUserAndOpen (true);
      ReadTable table = new ReadTable(connection);
      table.AddField("KOKRS");
      table.AddField("BEZEI");
      table.AddField("KHINR");
      table.TableName = "TKA01";
      table.Run();
      DataTable resulttable = table.Result;
      dgContArea.DataSource = resulttable;
  
      dgContArea.Columns["KOKRS"].HeaderText = "Controlling Area";
      dgContArea.Columns["BEZEI"].HeaderText = "Name";
      dgContArea.Columns["KHINR"].HeaderText = "Std. Hierarchy";
      dgContArea.Columns["KOKRS"].Width = 120;
      dgContArea.Columns["BEZEI"].Width = 150;
}
   catch (Exception e1)
   {
      MessageBox.Show(e1.Message);
   }
}
```

```csharp
private void dgContArea_Click(object sender, EventArgs e)
{
   STDHIER = dgContArea.CurrentRow.Cells["KHINR"].Value.ToString();
   KOKRS = dgContArea.CurrentRow.Cells["KOKRS"].Value.ToString();
}
```

```csharp
private void btnGetCC_Click(object sender, EventArgs e)
{
   tvCC.Nodes.Clear();
   tvCC.Nodes.Add(STDHIER);
   try
   {
      PopulateTreeView(STDHIER, tvCC.Nodes[0]);
   }
   catch (Exception e1)
   {
      MessageBox.Show(e1.Message);
   }
}
```

```csharp
public void PopulateTreeView(string Setname, TreeNode parentNode)
{
   try
   {
      ReadTable table = new ReadTable(connection);
      table.AddField("SETCLASS");
      table.AddField("SUBCLASS");
      table.AddField("SETNAME");
      table.AddField("SUBSETNAME");
  
      table.TableName = "SETNODE";
      table.WhereClause = "SETCLASS = '0101' and SUBCLASS = '" + KOKRS + "' and SETNAME = '" + Setname + "'";
      table.Run();
  
      DataTable ResultTable = table.Result;
  
      if (ResultTable.Rows.Count != 0)
      {
         for (int i = 0; i < ResultTable.Rows.Count; i++)
         {
            string Set = TreeViewKSTGroupText(ResultTable.Rows[i]["SUBSETNAME"].ToString());
            Set = ResultTable.Rows[i]["SUBSETNAME"].ToString() + " " + Set;
            TreeNode myNode = new TreeNode(Set);
  
            parentNode.Nodes.Add(myNode);
            PopulateTreeViewKST(ResultTable.Rows[i]["SUBSETNAME"].ToString(), myNode);
            PopulateTreeView(ResultTable.Rows[i]["SUBSETNAME"].ToString(), myNode);
         }
      }
   }
  
   catch (UnauthorizedAccessException)
   {
      parentNode.Nodes.Add("Access denied");
   } 
}
```

```csharp  
public void PopulateTreeViewKST(string Setname, TreeNode parentNode)
   {
   try
   {
      ReadTable table = new ReadTable(connection);
      table.AddField("SETCLASS");
      table.AddField("SUBCLASS");
      table.AddField("SETNAME");
      table.AddField("VALFROM");
  
      table.TableName = "SETLEAF";
      table.WhereClause = "SETCLASS = '0101' and SUBCLASS = '" + KOKRS + "' and SETNAME = '" + Setname + "'";
      table.Run();
  
      DataTable ResultTable = table.Result;
  
      if (ResultTable.Rows.Count != 0)
      {
          for (int i = 0; i < ResultTable.Rows.Count; i++)
          {
             string KST = TreeViewKSTText(ResultTable.Rows[i]["VALFROM"].ToString());
             KST = ResultTable.Rows[i]["VALFROM"].ToString() + " " + KST;
             TreeNode myNode = new TreeNode(KST);
           ´ myNode.ForeColor = Color.Red;
             parentNode.Nodes.Add(myNode);
          }
       }
   }
   catch (UnauthorizedAccessException)
   {
      parentNode.Nodes.Add("Access denied");
   } 
}
```

```csharp
public string TreeViewKSTGroupText(string Setname)
{
   ReadTable tableKST = new ReadTable(connection);
   tableKST.AddField("SETCLASS");
   tableKST.AddField("SUBCLASS");
   tableKST.AddField("SETNAME");
   tableKST.AddField("LANGU");
   tableKST.AddField("DESCRIPT");
  
   tableKST.TableName = "SETHEADERT";
   tableKST.WhereClause = "SETCLASS = '0101' and SUBCLASS = '" + KOKRS + "' and SETNAME = '" + Setname + "' and LANGU = 'EN'";
   tableKST.Run();
  
   DataTable ResultTable = tableKST.Result;
   if (ResultTable.Rows.Count > 0)
   {
      return ResultTable.Rows[0]["DESCRIPT"].ToString();
  
   }
   else
   {
      return " ";
   }
}
```

```csharp
public string TreeViewKSTText(string KST)
{
   ReadTable tableKST = new ReadTable(connection);
   tableKST.AddField("KOKRS");
   tableKST.AddField("KOSTL");
  
   tableKST.AddField("SPRAS");
   tableKST.AddField("KTEXT");
  
   tableKST.TableName = "CSKT";
   tableKST.WhereClause = "KOKRS = '" + KOKRS + "' and KOSTL = '" + KST + "' and SPRAS = 'EN'";
   tableKST.Run();
  
   DataTable ResultTable = tableKST.Result;
  
   if (ResultTable.Rows.Count > 0)
   {
      return ResultTable.Rows[0]["KTEXT"].ToString();
   }
   else
   {
   return " ";
   }
}
```
