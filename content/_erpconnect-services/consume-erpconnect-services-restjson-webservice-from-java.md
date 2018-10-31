---
layout: page
title: Consume ERPConnect Services REST/JSON Webservice from Java
description: Consume ERPConnect Services REST/JSON Webservice from Java
permalink: /:collection/:path
weight: 6
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

The ERPConnect Services Runtime allows its users to send REST requests to offer SAP connectivity through ERPConnect Services to non-.NET environments. This example shows the basic concept of these requests in Java. To get this sample to work, please make sure, that Basic Authentication is turned on at the SharePoint site on which ECS is running.

The first step for executing requests via ERPConnect Services is creating an URL object that contains the address to the Webservice. After this step, a HttpURLConnection object must be created and filled with the data for authentication. Set the "doOutput" property of the HttpURLConnection object to true to be able to send POST requests. In the next steps the requestMethod is set to "POST" and two request properties are set: the "Content-Type" property is "text/json" and the "Authorization" property contains a string with the authentication method ("Basic") and the credentials (Note: the credentials have to be encoded in Base64. For encoding, the [apache commons codec package](http://commons.apache.org/proper/commons-codec/download_codec.cgi) can be used).

Once this is done, the POST request can be transmitted to the server. In this sample, the request executes a BAPI called "BAPI_MATPHYSINV_GETDETAIL" to get the details of an inventory list. Get the OutputStream of the HttpURLConnection and send the request to the server. The result can be read with an InputStreamReader, wrapped in a BufferedReader. Now the result of the request can be processed in the program (In this example, it is simply printed to the command line). When the request is done, the connection should be closed with the disconnect() method.

<details>
<summary>[Java]</summary>
{% highlight java %}
public static void main(String[] args) throws Exception {
    String credentials = new String(Base64.encodeBase64("MyAccount:MyPassword".getBytes()));
    URL url = new URL("http://107.21.97.204/_vti_bin/ERPConnectServiceRest.svc/ExecuteXQL"); 
    
    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
    connection.setDoOutput(true);
    connection.setRequestMethod("POST");
    connection.setRequestProperty("Content-Type", "text/json");
    connection.addRequestProperty("Authorization", "Basic " + credentials );

    String requestJSON = "{\"query\":"
            + "\"EXECUTE FUNCTION "
                + "'BAPI_MATPHYSINV_GETDETAIL' "
            + "EXPORTS "
                + "PHYSINVENTORY = '0200003005', FISCALYEAR = '2013' "
            + "TABLES "
                + "ITEMS INTO @RETVAL;\","
        + "\"applicationName\":\"ECC\"}";
    OutputStream postStream = connection.getOutputStream();
    postStream.write(requestJSON.getBytes());
    postStream.flush();
    if(connection.getResponseCode() != HttpURLConnection.HTTP_OK) {
        System.out.println("Request failed: " + connection.getResponseMessage());
        return;
    }
    BufferedReader resultReader = new BufferedReader(new InputStreamReader(connection.getInputStream()));
    String outputString;
    while((outputString = resultReader.readLine()) != null) {
        System.out.println(outputString); 
    }
    connection.disconnect(); 
}
{% endhighlight %}
</details>


