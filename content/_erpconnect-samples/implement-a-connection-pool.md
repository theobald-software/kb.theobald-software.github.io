---
layout: page
title: Implement a connection pool
description: How to implement a connection pool
permalink: /:collection/:path
weight: 34
---

This sample shows how to implement a connection pool for SAP connections.

### About

In some situations it can be useful to use a connection pool. 
This means that several processes or threads use a set of SAP connections together, e.g., in a web application: 30 users work with an application but there are only 10 concurrent connections to SAP. 
Everytime an application process needs a connection a free connection is allocated by the pool. 
After having used the connection it is freed by the process and can be used by another one.

### Prerequisites

Before the ConnectionPool class can be used, the *R3Connection* class must be extended by inheriting it.<br>
The two new properties *LastUsage* and *IsInUse* will be used later.

```csharp
class R3ConnectionEx : ERPConnect.R3Connection
{
    private DateTime _LastUsage = DateTime.Now;
    public DateTime LastUsage
    {
        get { return _LastUsage; }
        set { _LastUsage = value; }
    }
  
    private bool _IsInUse = false;
    public bool IsInUse
    {
        get { return _IsInUse; }
        set { _IsInUse = value; }
    }
}
```

### The ConnectionPool Class

The following sample code shows how to use the methods of the ConnectionPool class.

In the constructor of the class a timer is initialized. 
The timer is responsible for closing connections that are not used for a certain period of time.

```csharp
class R3ConnectionPool
{
  
    private System.Timers.Timer MyTimer = new System.Timers.Timer();
    public R3ConnectionPool()
    {
        // When this static class is created
        // initialize the timer and handle elapsed event
        MyTimer.Interval = 1000;
        MyTimer.Elapsed += new System.Timers.ElapsedEventHandler(MyTimer_Elapsed);
        MyTimer.Enabled = true;
    }
  
    private Int32 _MaxNoOfConnection = 10;
    public Int32 MaxNoOfConnection
    {
        get { return _MaxNoOfConnection; }
        set { _MaxNoOfConnection = value; }
    }
  
    private string _ConnectionString = "";
    public string ConnectionString
    {
        set { _ConnectionString = value; }
    }
  
    public Int32 CurrentNumberOfConnection
    {
        get { return MyConnectionList.Count; }
    }
```

The generic list *MyConnectionList* holds all active connections. 
When the last usage was more than 60 seconds ago and it is not currently in use, the connection is closed and removed from the list.

```csharp
private System.Collections.Generic.List
    MyConnectionList = new System.Collections.Generic.List();
  
private void MyTimer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
{
    // Loop through the list
    // and check, if a connection is not used for more than 60 second,
    // if so, close it an remove it from the list
    lock (MyConnectionList)
    {
        foreach (R3ConnectionEx con in MyConnectionList)
        {
            if (!con.IsInUse && con.LastUsage.AddSeconds(60) < DateTime.Now)
            {
                con.Close();
                MyConnectionList.Remove(con);
                return;
            }
        }
    }
}
```

The two internal private functions `AllocConnection()` and `FreeConnection()` are for allocating and deallocating connections. 
If there is no free connection available a new connection is created and added to the connection list.

```csharp
private R3ConnectionEx AllocConnection()
{
    lock (MyConnectionList)
    {
        foreach (R3ConnectionEx con in MyConnectionList)
        {
            if (!con.IsInUse)
            {
                con.IsInUse = true;
                return con;
            }
        }
  
        if (MyConnectionList.Count < this.MaxNoOfConnection)
        {
            R3ConnectionEx con = new R3ConnectionEx();
            con.Open(this._ConnectionString);
            this.MyConnectionList.Add(con);
            con.IsInUse = true;
            return con;
        }
  
        if (MyConnectionList.Count >= this.MaxNoOfConnection)
            throw new Exception("Maximun Number of connection exceeded");
        else
            throw new Exception("Unable to allocate a new connection");
    }
}
  
private void FreeConnection(R3ConnectionEx con)
{
    con.LastUsage = DateTime.Now;
    con.IsInUse = false;
}
```

Without the pool you would call `CreateFunction()` directly, e.g., `MyConnection.CreateFunction()`). 
When using the new pool class the `CreateFunction()` method is called by the pool after having allocated a connection dynamically. 
The RFCFunction object is cashed with the help of XML serialization and deserialization. 
This avoids retrieving the function's meta data from SAP every time `CreateFunction()` is called.

```csharp
private Hashtable FunctionHash = new Hashtable();
public RFCFunction CreateFunction(string FunctionName)
{
  
    lock (FunctionHash)
    {
        string xml = (string)FunctionHash[FunctionName];
  
        if (xml == null)
        {
            // The function has not been created yet in this pool
            R3ConnectionEx con = this.AllocConnection();
            try
            {
                RFCFunction func = con.CreateFunction(FunctionName);
                FreeConnection(con);
                // store in hash for later use
                FunctionHash.Add(FunctionName, func.SaveToXML());
                return func;
            }
            catch (Exception e1)
            {
                // Check if connection is still alive
                // if not, remove it
                if (!con.Ping())
                    MyConnectionList.Remove(con);
                else
                    FreeConnection(con);
                // rethrow exception
                throw e1;
            }
  
        }
        else
        {
            // We can create the function object without calling the CreateFunction method
            RFCFunction func = new RFCFunction(FunctionName);
            func.LoadFromXMLString(xml);
            return func;
        }
    }
}
```

The execution of the function uses the same principle as `CreateFunction()`: 
- Allocate connection
- Execute
- Deallocate

```csharp
public void Execut eFunction(RFCFunction func)
{
    R3ConnectionEx con = this.AllocConnection();
    try
    {
        func.Connection = (R3Connection)con;
        func.Execut e();
  
    }
    catch (Exception e1)
    {
        // Check if connection is still alive
        // if not, remove it
        if (!con.Ping())
            MyConnectionList.Remove(con);
        FreeConnection(con);
        // rethrow exception
        throw e1;
    }
  
    FreeConnection(con);
}
```


### Test the connection pool

The following console program shows how to test and apply the connection pool class.

How it works:
- First 3 separate threads are started. 
- After pressing Enter 3 more threads are started. 
- The timer shows the current number of active connections.
- Depending on how many threads have already finished after the new ones have been started, the connections are recycled or newly connected.

The output shows:

- 3 threads are started
- 2 have finished
- 3 news threads are started
- Result: 4 active SAP connections, because after 2 have finished only 1 more is needed.

![ThreadPoolDemo](/img/contents/ThreadPoolDemo.png){:class="img-responsive"}

Source code of the sample program:

```csharp
class Program
{
    static R3ConnectionPool ConPool = new R3ConnectionPool();
    static System.Timers.Timer timer = new System.Timers.Timer();
  
    [STAThread]
    static void Main(string[] args)
    {
        timer.Interval = 1500;
        timer.Elapsed += new System.Timers.ElapsedEventHandler(timer_Elapsed);
        timer.Enabled = true;
  
        ConPool.ConnectionString = "USER=Theobald LANG=DE CLIENT=XXX SYSNR=XX ASHOST=XXX PASSWD=XXX ";
  
        Start3Threads("TH*","H*","X*");
  
        Console.WriteLine("3 threads started. Press enter to start 3 more threads");
        Console.Read();
  
        Start3Threads("A*", "B*", "C*");
  
        Console.WriteLine("3 additional threads started. Press enter to quit.");
        Console.ReadLine();
        Console.ReadLine();
        Console.ReadLine();
        Console.ReadLine();
  
    }
  
    static void Start3Threads(string SearchKey1, string SearchKey2, string SearchKey3)
    {
        System.Threading.Thread t4 = new System.Threading.Thread(
          new System.Threading.ParameterizedThreadStart(Execut eALongRunningFunctionModule));
        t4.Name = SearchKey1; t4.Start(SearchKey1);
        System.Threading.Thread t5 = new System.Threading.Thread(
           new System.Threading.ParameterizedThreadStart(Execut eALongRunningFunctionModule));
        t5.Name = SearchKey2; t5.Start(SearchKey2);
        System.Threading.Thread t6 = new System.Threading.Thread(
           new System.Threading.ParameterizedThreadStart(Execut eALongRunningFunctionModule));
        t6.Name = SearchKey3; t6.Start(SearchKey3);
    }
  
    static void timer_Elapsed(object sender, System.Timers.ElapsedEventArgs e)
    {
        Console.WriteLine("Current Number of connections: " + ConPool.CurrentNumberOfConnection);
    }
  
    static void Execut eALongRunningFunctionModule(object SearchTerm)
    {
        RFCFunction func = ConPool.CreateFunction("BAPI_EMPLOYEE_GETLIST");
  
        func.Exports["SUR_NAME_SEARK"].ParamValue = SearchTerm.ToString();
        func.Exports["SEARCH_DATE"].ParamValue = "20070101";
  
  
        ConPool.Execut eFunction(func);
  
        Console.WriteLine(func.Tables["EMPLOYEE_LIST"].Rows.Count.ToString()
            + " rows received -> SearchKey: " + System.Threading.Thread.CurrentThread.Name);
  
    }
  
}
```




