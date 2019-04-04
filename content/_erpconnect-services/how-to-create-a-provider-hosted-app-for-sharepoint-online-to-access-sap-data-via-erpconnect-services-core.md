---
layout: page
title: How to-Create a provider-hosted app for SharePoint Online to access SAP data via ERPConnect Services Core
description: How to- Create a provider-hosted app for SharePoint Online to access SAP data via ERPConnect Services Core
permalink: /:collection/:path
weight: 10
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.


This article will show you how to build a provider-hosted app for SharePoint that can access SAP data by using the ERPConnect Services Core (ECS Core) platform and the Azure AD Authentication Library for .NET (ADAL). This tutorial just gives you quick overview of the steps that are required to create the app implementing Single Sign-On (SSO) feature. For additional information and background knowledge refer the section Related Articles at the end of this tutorial.

**Understanding authentication with ECS Core and SAP**

To gain authorized access to ECS Core and the underlying SAP system, a provider-hosted app for SharePoint must be registered with the Azure AD tenant that are created for each Office 365 subscription. The ECS Core application gateway must also be registered with Azure AD to use the OAuth 2.0 Authorization Code Grant flow to get an access token for bearer token authentication that can be passed to ECS Core via the Client library through the Azure Service Bus relay.

On the ECS Core side, you need to create a service application and a secure store within the ECS Core management website. The service application must be connected to the secure store that contains the user credential mappings. As alternative solution you may setup a SNC connection with the SAP system to avoid the additional mappings.


**Create an Office 365 Subscription with Developer Site**

In the first step you need to create an Office 365 Developer Subscription. This kind of subscription allows you to create a Developer Site that helps you to start creating, testing, and deploying apps for Office and SharePoint. For the purpose of this tutorial, an Office 365 Business Premium Subscription for a fictional company named Thomsen Software as well as a Developer Site named DEV Site have been created.

![Picture1](/img/contents/Picture1.png){:class="img-responsive"}

**Create an Azure Subscription**

In the next step you need to create a Windows Azure Subscription based on your Office 365 Subscription. That’s a very important step in order to register your applications with the Azure AD later on. For each Office 365 account, Microsoft is creating Active Directory tenant within the Azure cloud.

To get access to the Office 365 Azure AD tenant, you need to sign up with Azure using your Office 365 account data. Once you have created the Azure account you will see one item already created, the Azure AD for Office 365.

![Picture2](/img/contents/Picture2.png){:class="img-responsive"}

Under the Applications tab for the Active Directory you will find two applications already registered: Office 365 SharePoint Online and Office 365 Exchange Online.

 

**Create an Azure Service Bus**

Next you need to create a Service Bus with your Azure Subscription. This step is required to connect the ECS Core platform with the Azure cloud. Name the Service Bus ecscore.

![Picture3](/img/contents/Picture3.png){:class="img-responsive"}

Select Connection Information at the bottom of the page and copy the Connection String to the clipboard.

![Picture4](/img/contents/Picture4.png){:class="img-responsive"}

**Install ECS Core and connect with Azure Service Bus**

Next you need to install the ECS Core platform (version 1.1.160 or higher) on Windows Server 2012 R2 (IIS 8.5). For more information about the installation of ECS Core refer the product documentation. After the installation finished you need to create a secure store and service application. The service application must be connected to the secure store by selecting the authentication method Secure Store.

In the first step, create the secure store named ECCSS and define the user credential mappings.

![Picture4.1](/img/contents/Picture4.1.png){:class="img-responsive"}

![Picture4.2](/img/contents/Picture4.2.png){:class="img-responsive"}

Next create the service application ECCSS. You may create a new user group, e.g. ECS Core Users ECCSS, and add it on the Users tab. The Users tab define the users or groups that are allowed to access the service application.

![Picture4.3](/img/contents/Picture4.3.png){:class="img-responsive"}

Next you connect ECS Core platform with the Azure Service Bus by saving the connection string you copied during the creation of the Service Bus. Click Settings, then Azure Service Bus and paste the string in the text box.

![Picture4.4](/img/contents/Picture4.4.png){:class="img-responsive"}

To allow ECS Core to validate the OAuth access tokens you need to define Azure AD settings in the Web.Config of the Services site. Open the Web.Config (default deployment folder is C:\ECSCore\Services\) and search for the appSettings section. Use the values defined in the next screenshot.

![Picture5](/img/contents/Picture5.png){:class="img-responsive"}

That’s all you need to configure on the ECS Core side.

**Create Provider-Hosted App for SharePoint**

To create the provider-hosted app for SharePoint open Visual Studio 2013 and create an ASP.NET project (C# > Cloud). First select MVC as template, then click on Change Authentication to select the kind of authentication. In order to deploy your site directly to an Azure website you need to check the Host in the cloud checkbox.

![Picture6](/img/contents/Picture6.png){:class="img-responsive"}

In the Change Authentication dialog enter your Office 365 account data and select the values of the dropdown boxes as shown.

![Picture7](/img/contents/Picture7.png){:class="img-responsive"}

Next you will be asked to define the Azure website settings. Use as site name SPAppECSCore.

![Picture8](/img/contents/Picture8.png){:class="img-responsive"}

Now Visual Studio will create an ASP.NET MVC web application, a new website on Azure and will immediately register the application with Azure AD. The web application will not be published to the cloud in this tutorial.

![Picture8.2](/img/contents/Picture8.2.png){:class="img-responsive"}

![Picture8.3](/img/contents/Picture8.3.png){:class="img-responsive"}


![Picture9](/img/contents/Picture9.png){:class="img-responsive"}

For now you just have created a regular ASP.NET MVC web application. To convert this project to SharePoint project, right click the web project, select Convert and then Convert to App for SharePoint Project.

![Picture10](/img/contents/Picture10.png){:class="img-responsive"}

In the dialog showing up next you define the Developer Site you created in the first step.

![Picture11](/img/contents/Picture11.png){:class="img-responsive"}

The project conversion will add the SharePoint packing project to the solution, including the App manifest file.

![Picture12](/img/contents/Picture12.png){:class="img-responsive"}

Press F5 to install, deploy and run the App on your SharePoint Online tenant. You will be asked by Visual Studio to sign in with your Office 365 credentials before it will install the App. In the browser window sign in, then you are redirected to a page to trust the newly created App for SharePoint.

![Picture12.1](/img/contents/Picture12.1.png){:class="img-responsive"}

Click the Trust It button and you are set.

![Picture12.2](/img/contents/Picture12.2.png){:class="img-responsive"}

Now that you have a functional provider-hosted app for SharePoint, you need to implement the OAuth 2.0 Authorization Code Grant flow to get a bearer access token granted based on the current user signed in with SharePoint Online.

First you need to add the Azure AD Authentication Library for .NET, a library that helps you communicating with Azure AD. ADAL provides features like acquiring, caching and refreshing access tokens. The library will be added to the Visual Studio project via NuGet package. Enter ADAL as search text and click Install.

![Picture12.3](/img/contents/Picture12.3.png){:class="img-responsive"}

Next, add a helper class named AADAuthHelper to the project.

```
using System;

using System.Web;

using Microsoft.IdentityModel.Clients.ActiveDirectory;

 

namespace SPAppECSCore

{

  internal static class AADAuthHelper

  {

    static readonly string _authority = "496e4b15-625b-4387-a176-d9428a875596";

    static readonly string _replyUrl = "https://localhost:44307/";

    static readonly string _resourceUrl = "https://ecscore.servicebus.windows.net";

    static readonly ClientCredential _clientCredential = new ClientCredential(
           "9d65f1d8-aee3-4480-a4e3-e0a021438ab1", "...");

    static readonly AuthenticationContext _authenticationContext = 

           new AuthenticationContext(        string.Format(https://login.windows.net/{0}/oauth2/authorize?api-version=1.0, _authority));

 

    public static string AuthorizationRequestURL

    {

      get {

        return string.Format("https://login.windows.net/common/oauth2/authorize?response_type=code&resource={0}&redirect_uri={1}&client_id={2}&state={3}",

          HttpUtility.UrlEncode(_resourceUrl),

          HttpUtility.UrlEncode(_replyUrl),

          HttpUtility.UrlEncode(_clientCredential.ClientId),

          HttpUtility.UrlEncode(Guid.NewGuid().ToString()));

      }

    }

 

    public static string AcquireTokenByAuthorizationCode(string authorizationCode)

    {

      var result = _authenticationContext.AcquireTokenByAuthorizationCode(authorizationCode, 
           new Uri(_replyUrl), _clientCredential, _resourceUrl);

 

      return result.AccessToken;

    }

  }

}
```

Adjust the static variables _authority, _replyUrl and _clientCredential specific to your values. The _authority value is the Azure AD tenant ID. To get the ID will be displayed in den App Endpoints dialog for the Active Directory under the Applications tab in the Azure portal.

![Picture13](/img/contents/Picture13.png){:class="img-responsive"}

To get the values for the variables _replyUrl and _clientCredential open the SPAppECSCore application registration in the Applications tab for the Active Directory. Then select the Configure tab. On this screen you find all values. You may copy the client ID and the reply URL directly to the variables. The client secret (second parameter of the ClientCredential) have to be generated by selecting a key (1 or 2 years). The key itself will be displayed after you saved data. Then copy the value into your AADAuthHelper class.

![Picture14](/img/contents/Picture14.png){:class="img-responsive"}

Next, add a reference to the ECS ClientCore library (ERPConnectServices.ClientCore.dll). You find the library in the installation directory of ECS Core in the subfolder \Clients\NET45.

Next, update the Index method of the HomeController to flow authentication.

```
using System;

using System.Threading.Tasks;

using System.Web.Mvc;

using ERPConnectServices;

 

...

public async Task<ActionResult> Index()

{

  if(Request.QueryString["code"] != null)

  {

    string accessToken = null;

    try

    {

      accessToken = AADAuthHelper.AcquireTokenByAuthorizationCode(Request.QueryString["code"]);

    }

    catch

    {

      return Redirect(AADAuthHelper.AuthorizationRequestURL);

    }

    try

    {

      var settings = new ERPConnectServiceClientSettings(

                           "https://ecscore.servicebus.windows.net/ecs/ws/", "ECCSS") {

                             RequireHttps = true,

                             UseBearerAuthentication = true,

                             AccessToken = accessToken

                           };

      using(var client = new ERPConnectServiceClient(settings))

      {

        var dt = await client.ExecuteXQLAsync("SELECT TOP 10 * FROM MAKT");

 

        ViewBag.Message = dt.Rows.Count;

      }

    }

    catch(ERPConnectServiceException e)

    {

      ViewBag.Message = e.HasFaultMessage ? e.Fault.Message : e.Message;

    }

    catch(Exception e)

    {

      ViewBag.Message = e.Message;

    }

  }

  else if(Request.QueryString["error"] != null)

  {

    // TODO: May output error description?

  }

  else

    return Redirect(AADAuthHelper.AuthorizationRequestURL);

  return View();

}

...

```

Once the application is called, the Index method checks if an OAuth Authorization Code is available. If the code has not been passed with the query string, the signed in Office 365 user will be redirected to the Azure AD to get an authorization code. The reply URL defined in the AADAuthHelper class is used by the Azure AD to return the code.

 

To finally get the access token you will call the AcquireTokenByAuthorizationCode method of the AADAuthHelper class. The method requests an access token for the current signed in user, which you will use to call ECS Core afterwards. To call the ECS Core API first setup an instance of the ERPConnectServiceClientSettings class with the Service Bus relay address, the service application to use as well as settings to use the bearer authentication (including the access token). The ClientCore library will pass the access token to the ECS Core API, the server will validate the token and the API returns the data.

 

Before you may execute the application you need to register the ECS Core application with Azure AD in the next section.

**Register Applications with Azure Active Directory**

The final step is to register the ECS Core application with the Azure AD. In the Applications tab of the Active Directory click the Add button and select Add an application my organization is developing.

![Picture14.9](/img/contents/Picture14.9.png){:class="img-responsive"}

In the next dialog enter the name ECS Core and select Web Application and /or Web API as type.

![Picture15](/img/contents/Picture15.png){:class="img-responsive"}

Then enter the service bus address as Sign-On URL and APP ID URL and click OK.

![Picture16](/img/contents/Picture16.png){:class="img-responsive"}

Next adjust the permissions for the ECS Core application by downloading and updating the manifest JSON file.

![Picture17](/img/contents/Picture17.png){:class="img-responsive"}

Open the JSON manifest file with a text editor and replace the "appPermissions": [] part with the following permission.

Open the JSON manifest file with a text editor and replace the "appPermissions": [] part with the following permission.

```
"appPermissions": [{

    "claimValue": "user_impersonation",

    "description": "Allow the application full access to ECS Core on behalf of the signed-in user",

    "directAccessGrantTypes": [],

    "displayName": "Have full access to ECS Core ",

    "impersonationAccessGrantTypes": [

      {

        "impersonated": "User",

        "impersonator": "Application"

      }

    ],
```


![Picture18](/img/contents/Picture18.png){:class="img-responsive"}

Then upload the manifest file again.

 

Finally set the permission for the SPAppECSCore application. Select the application in the Applications tab and the click Configure. At the bottom of the page (permissions to other applications section) select the ECS Core application and check the Have full access to ECS Core permission.

![Picture19](/img/contents/Picture19.png){:class="img-responsive"}

Click save, go to Visual Studio and hit F5 to test the application.

![Picture20](/img/contents/Picture20.png){:class="img-responsive"}

Now, you are finally done.

You may debug the solution to understand the OAuth 2.0 Authorization Code Flow in more detail.

The application has not been published to the Azure website Visual Studio has been created at the beginning. To publish the App right click the project and select Publish and follow the instructions of the dialog. Depending on the features of your website you may need to adjust certain things to run in the cloud.

![Picture21](/img/contents/Picture21.png){:class="img-responsive"}

Related articles

Sign up for an Office 365 Developer Subscription, set up your tools and environment, and start deploying apps

[https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/set-up-a-development-environment-for-sharepoint-add-ins-on-office-365](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/set-up-a-development-environment-for-sharepoint-add-ins-on-office-365)

How to: Create a Developer Site within your existing Office 365 subscription

[https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/create-a-developer-site-on-an-existing-office-365-subscription](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/create-a-developer-site-on-an-existing-office-365-subscription)

Getting started with Azure AD

[http://msdn.microsoft.com/library/azure/dn655157.aspx](http://msdn.microsoft.com/library/azure/dn655157.aspx)

How to: Create a basic provider-hosted app for SharePoint

[http://msdn.microsoft.com/en-us/library/office/fp142381(v=office.15).aspx](http://msdn.microsoft.com/en-us/library/office/fp142381(v=office.15).aspx)

Creating apps for SharePoint that use low-trust authorization

[http://msdn.microsoft.com/en-us/library/office/dn790707(v=office.15).aspx](http://msdn.microsoft.com/en-us/library/office/dn790707(v=office.15).aspx)

Azure AD Authentication Library for .NET

[http://msdn.microsoft.com/library/azure/jj573266.aspx](http://msdn.microsoft.com/library/azure/jj573266.aspx)

OAuth 2.0 in Azure AD

[http://msdn.microsoft.com/library/azure/dn645545.aspx](http://msdn.microsoft.com/library/azure/dn645545.aspx)

OAuth 2.0: Authorization Code Grant Flow

[http://msdn.microsoft.com/en-us/library/azure/dn645542.aspx](http://msdn.microsoft.com/en-us/library/azure/dn645542.aspx)

Azure AD: Adding, Updating, and Removing an Application

[http://msdn.microsoft.com/library/azure/dn132599.aspx](http://msdn.microsoft.com/library/azure/dn132599.aspx)

ERPConnect Services

[http://theobald-software.com/en/erpconnect-services-productinfo.html](http://theobald-software.com/en/erpconnect-services-productinfo.html)

