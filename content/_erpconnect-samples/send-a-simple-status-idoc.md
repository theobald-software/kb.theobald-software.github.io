---
layout: page
title: Send a simple STATUS IDoc
description: Send a simple STATUS IDoc
permalink: /:collection/:path
weight: 19
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The example below shows a sample console program that sends a STATUS IDoc. This message type (STATUS) is designed for manipulating a status of another outbound IDoc. If an external application received an IDoc, it can use the STATUS IDoc to confirm the successful processing. STATUS is a very simple IDoc (which contains only one data record). We have kept the example simple here.

To begin, we open a client connection to the R/3 system with the help of R3Connection class. Then we use the CreateIdoc method to instance a valid IDoc object. SYSTAT01 is the IDoc type for the appropriate message type STATUS.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
static void Main(string[] args)
        {
            R3Connection con = new R3Connection("hamlet",11,"Theobald","pw","DE","800");
            con.Open(false);
  
            Console.WriteLine("Which Idocnumber would you like to manipulate?");
            string IdocNo = Console.ReadLine();
  
            Idoc i = con.CreateIdoc("SYSTAT01","");
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
Sub Main(ByVal args() As String)
        Dim con As R3Connection = New R3Connection("hamlet", 11, "Theobald", "pw", "DE", "800")
        con.Open(False)
  
        Console.WriteLine("Which Idocnumber would you like to manipulate?")
        Dim IdocNo As String = Console.ReadLine()
  
        Dim i As Idoc = con.CreateIdoc("SYSTAT01", "")
{% endhighlight %}
</details>

The next step is to provide various administrative information. Have a look at the source code to see how receiver and sender information is set.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Fill Message Type
            i.MESTYP = "STATUS";
  
            // Fill Information about Idoc Reciever
            i.RCVPRN = "PT4_800"; // Partner number
            i.RCVPRT = "LS"; // Partner type
  
            // Fill information about idoc sender
            i.SNDPOR = "ERPCONNECT"; // Partner port
            i.SNDPRN = "ERPCONNECT"; // Partner number
            i.SNDPRT = "LS"; // Partner type
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
' Fill Message Type
        i.MESTYP = "STATUS"
  
        ' Fill Information about Idoc Reciever
        i.RCVPRN = "PT4_800" ' Partner number
        i.RCVPRT = "LS" ' Partner type
  
        ' Fill information about idoc sender
        i.SNDPOR = "ERPCONNECT" ' Partner port
        i.SNDPRN = "ERPCONNECT" ' Partner number
        i.SNDPRT = "LS" ' Partner type
{% endhighlight %}
</details>

Now we have to fill in some fields in segment E1STATS: the new status code (STATUS), date und time (LOGDAT, LOGTIM), and the IDoc number, which should be manipulated. Now is the ideal time to send the IDoc via the Send method.

<details>
<summary>[C#]</summary>
{% highlight csharp %}
// Fill the right fields in the segments
            i.Segments["E1STATS",0].Fields["LOGDAT"].FieldValue = "20060101";
            i.Segments["E1STATS",0].Fields["LOGTIM"].FieldValue = "152301";
            i.Segments["E1STATS",0].Fields["STATUS"].FieldValue = "12";
            i.Segments["E1STATS",0].Fields["DOCNUM"].FieldValue = IdocNo;
  
            i.Send();
  
            Console.WriteLine("Idoc sent");
            Console.ReadLine();
{% endhighlight %}
</details>

<details>
<summary>[VB]</summary>
{% highlight visualbasic %}
' Fill the right fields in the segments
        i.Segments("E1STATS", 0).Fields("LOGDAT").FieldValue = "20060101"
        i.Segments("E1STATS", 0).Fields("LOGTIM").FieldValue = "152301"
        i.Segments("E1STATS", 0).Fields("STATUS").FieldValue = "12"
        i.Segments("E1STATS", 0).Fields("DOCNUM").FieldValue = IdocNo
  
        i.Send()
  
        Console.WriteLine("Idoc sent")
        Console.ReadLine()
{% endhighlight %}
</details>

The figures below show the sample program in action. The status code is increased from 3 (Data passed...) to 12 (Dispatch OK).

![IdocSend1](/img/contents/IdocSend1.jpg){:class="img-responsive"}

![IdocSend2](/img/contents/IdocSend2.jpg){:class="img-responsive"}