---
layout: page
title: SAP Inventory iOS App for iPad
description: SAP Inventory iOS App for iPad
permalink: /:collection/:path
weight: 7
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

To show the potential of ERPConnect Services for mobile programming, we have created an iOS app for the SAP MM inventory process.

The iOS app is focused on the iPad and communicates with SAP through the REST WebService of ERPConnect Services and uses XtractQL for its statements.

To keep this article short and readable, it will only discuss the basics of the communications with the SAP system. 

In order to concentrate on the basic task, the UI and other internal parts won´t be discussed and the focus is on the communication with the SAP system.

The example Xcode project is available via [this link](/files/LoadDataFromWebService_iOS.zip). 

Before writing communication classes, two classes named “InventoryHeader“ and “InventoryItem“ will be created to store the results of the requests. In addition, they will contain methods to process the results of the requests, that will be in the JSON format. 

The external communication logic is written in a class called “DataLoader“. Besides the communication, it also contains methods for error handling. 

To load an inventory list, there is a method called “getRowsForLists“ that needs two arguments to identify the requested list: 

the inventory number and the fiscal year. To send a request to the server, a NSURLConnection and a NSMutableURLRequest are needed. 

The method contains the following code:

```
NSURLConnection *webServiceConnection;

   NSURL *webServiceUrl = [[NSURLalloc] initWithString:@"http://*YourServerIP*/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL"];

   NSMutableURLRequest *request = [[NSMutableURLRequestalloc] initWithURL:webServiceUrl];

   [request addValue:@"application/json" forHTTPHeaderField:@"Content-Type"];

   NSString *authorizationString;

   NSData *authData = [[NSStringstringWithFormat:@"%@:%@", @"YourUserName", @"YourPassword"] dataUsingEncoding:NSUTF8StringEncoding];

   NSString *encodedCredentials = [authData base64EncodedStringWithOptions:0];

   authorizationString = [NSStringstringWithFormat:@"Basic %@", encodedCredentials];

   [request addValue:authorizationString forHTTPHeaderField:@"Authorization"];

   [request setHTTPMethod:@"POST"];

   NSString *bodyJsonString = @"{\"query\": "

   "\"EXECUTE FUNCTION "

   "'BAPI_MATPHYSINV_GETDETAIL' "

   "EXPORTS "

   "PHYSINVENTORY = '0123456789', FISCALYEAR = '2014' "

   "TABLES "

   "ITEMS INTO @RETVAL "

   "IMPORTS "

   "@RETVAL = HEAD;\" "

   "}";

   [request setHTTPBody:[bodyJsonString dataUsingEncoding:NSUTF8StringEncoding]];

   webServiceConnection = [[NSURLConnectionalloc] initWithRequest:request

                delegate:self
                startImmediately:true];
```

The method begins with the declaration of an NSURLConnection and an NSMutableURLRequest. These are the basic objects needed for communication with the WebService. The NSMutableURLRequest is immediately initialized with an NSURL object that contains the URL to your WebService. The following line adds the content type of the request. In this case, it is “application/json" because the app send JSON objects. Then the authorization string needs to be created. It has the format “Basic Username:Password" and the credentials part is base64 encoded. The authorisation string is added to the http header with the statement in line 9. The HTTP method is “post“ and needs to be set, too. 

When this is done, the statement with the XtractQL query needs to be added. It is a JSON object stored as string. In this case, the function “BAPI_MATPHYSINV_GETLIST“ will be executed with the values “0123456789“ for the field “PHYSINVENTORY" and “2014“ for the field “FISCALYEAR“.

The created NSString object is used to create an NSData object with UTF8 encoding as content for the request´s body.

When all this is done, the NSURLConnection object can be initialized with the request, a delegate to the DataLoader object and a boolean that indicates that the request should be executed immediately.

The delegate to the DataLoader object is necessary, because the methods for the connection handling are defined in the DataLoader class. These are basically

```
(void) connection:(NSURLConnection *) nConnection didReceiveData:(NSData *)nData
```

and

```
- (void) connectionDidFinishLoading:(NSURLConnection *) nConnection
```

These methods are used to process the incoming data. didReceiveData is sent every time a package arrives. When the transaction is completed, the message connectionDidFinishLoadingData will be sent to show that the complete result data was received.  

Additional methods are necessary for error handling but these won´t be discussed in this article. Please have a look at the project files, if you are interested in further details on error handling.

In the final project, the didReceiveData method contains some further data and error handling, but the basic task is to convert the received data. Because the Webservice responses are JSON objects, the incoming data needs to be converted into a JSON object. This happens in one single statement:

```
NSError *error;

   NSJSONSerialization *json = [NSJSONSerialization JSONObjectWithData:nData
   options:NSJSONReadingAllowFragments                                error:&error];

```

This code creates an NSJSONSerialization object from a data object. The error object is only needed to detect error while conversion. It can be used to do some further error handling in following lines, for example in case of illegal data.

Now the contents of the JSON object can be processed as needed, for example for displaying the data in an UITableView.

The following 3 screenshots show an example inventory. The first screenshot shows the inventory detail for the material 100-100. After committing the data from the app shown in the second screenshot, you can see the results in the third screenshot.

![sapBeforeCommit_iOS](/img/contents/sapBeforeCommit_iOS.PNG){:class="img-responsive"}

![commitCountApp_iOS](/img/contents/commitCountApp_iOS.png){:class="img-responsive"}

![sapAfterCommit_iOS](/img/contents/sapAfterCommit_iOS.PNG){:class="img-responsive"}


