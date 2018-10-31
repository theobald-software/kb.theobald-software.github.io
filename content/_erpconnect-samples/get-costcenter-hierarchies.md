---
layout: page
title: Get CostCenter hierarchies
description: Get CostCenter hierarchies
permalink: /:collection/:path
weight: 11
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

Cost center hierarchies are stored in SAP in different tables. Every controlling area has one standard hierarchy defined. Cost centers belong to this standard hierarchies. In this following example we want to build a treeview with the cost centers of one selected standard hierarchy.

The form should contain following elements:

One button: btnGetCC One DataGridView: dgContArea One TreeView: tvCC

During the FormLoad event insert the following code. First we open the SAP connection and the table with the controlling area standard hierarchy relations is shown in a DataGridView.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
R3Connection con = new R3Connection();
 string KOKRS;
 string STDHIER;
private void frmMain_Load(object sender, EventArgs e)
{
   try
   {
      con.AskUserAndOpen (true);
      ReadTable table = new ReadTable(con);
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

{% endhighlight %}
</details>

After we select one controling area with a click in the DataGridView, the standard hierarchy is written in a variable.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
private void dgContArea_Click(object sender, EventArgs e)
{
   STDHIER = dgContArea.CurrentRow.Cells["KHINR"].Value.ToString();
   KOKRS = dgContArea.CurrentRow.Cells["KOKRS"].Value.ToString();
}
{% endhighlight %}
</details>

After clicking the button, the whole structure of the cost centers and the hierarchy are build and shown in the treeview.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
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
  
public void PopulateTreeView(string Setname, TreeNode parentNode)
{
   try
   {
      ReadTable table = new ReadTable(con);
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
  
public void PopulateTreeViewKST(string Setname, TreeNode parentNode)
   {
   try
   {
      ReadTable table = new ReadTable(con);
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
  
public string TreeViewKSTGroupText(string Setname)
{
   ReadTable tableKST = new ReadTable(con);
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
public string TreeViewKSTText(string KST)
{
   ReadTable tableKST = new ReadTable(con);
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
{% endhighlight %}
</details>

The screenshot shows the application with one selected hierarchy.

![CostCenterHier](/img/contents/CostCenterHier.jpg){:class="img-responsive"}