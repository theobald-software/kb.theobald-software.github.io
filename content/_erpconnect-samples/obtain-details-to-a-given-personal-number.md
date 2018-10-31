---
layout: page
title: Obtain details to a given personal number
description: Obtain details to a given personal number
permalink: /:collection/:path
weight: 17
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This code shows how to get detail data to a given personal number.

![HRDemo01](/img/contents/HRDemo01.jpg){:class="img-responsive"}

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Connect to SAP
R3Connection con = new R3Connection("SAPServer",11,"XXX","XXX","EN","800");
con.UseGui = true;
con.Open();
  
// Create function
RFCFunction func1 = con.CreateFunction("BAPI_EMPLOYEE_GETDATA");
  
// set parameters
func1.Exports["EMPLOYEE_ID"].ParamValue = this.textBox1.Text;
func1.Exports["DATE"].ParamValue = ERPConnect.ConversionUtils.NetDate2SAPDate(System.DateTime.Now);
  
// execut e function module
func1.Execut e();
  
// Is there a return message?
if (func1.Imports["RETURN"].ToStructure()["MESSAGE"].ToString().Trim() != "")
{
    MessageBox.Show(func1.Imports["RETURN"].ToStructure()["MESSAGE"].ToString());
    return;
}
  
// process tables, but only, if they are filled with at least one row
if (func1.Tables["ORG_ASSIGNMENT"].RowCount > 0)
{
    this.textBox2.Text = func1.Tables["ORG_ASSIGNMENT"].Rows[0,"NAME"].ToString();
    this.textBox3.Text = func1.Tables["ORG_ASSIGNMENT"].Rows[0,"POSTXT"].ToString();
    this.textBox4.Text = func1.Tables["ORG_ASSIGNMENT"].Rows[0,"ORGTXT"].ToString();
    this.textBox7.Text = func1.Tables["ORG_ASSIGNMENT"].Rows[0,"COSTCENTER"].ToString();
}
  
// Email
if (func1.Tables["COMMUNICATION"].RowCount > 0)
{
    this.textBox5.Text = func1.Tables["COMMUNICATION"].Rows[0,"USRID_LONG"].ToString();  
}
  
// Phone Number
if (func1.Tables["INTERNAL_CONTROL"].RowCount > 0)
{
    this.textBox6.Text = func1.Tables["INTERNAL_CONTROL"].Rows[0,"PHONENO1"].ToString();
}
{% endhighlight %}
</details>