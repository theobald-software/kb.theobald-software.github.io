---
layout: page
title: Authentication via Azure Active Directory for Azure Storage
description: Authentication via Azure Active Directory for Azure Storage
permalink: /:collection/:path
weight: 6
---

The following article shows how to connect to the Azure Storage destination using Authentication via Azure Active Directory.<br>
The article leads you through through the following process:

1. Register a new app with your Azure AD tenant.
2. Assign access rights for the new app in Azure Storage using the Storage Blob Data Contributor role.
3. In Xtract Universal, connect to Azure Storage using the Azure Active Directory method.

### App Registration

Follow the steps below to register a new app with your Azure AD tenant:

1. Open the Azure portal and navigate to **App Registrations**.
2. Click **[New registration]** to register a new app with your Azure AD tenant. <br>
![azure-app-new-registration](/img/contents/xu/azure-storage/azure-app-new-registration.png){:class="img-responsive"}
3. Enter the name of the application.
4. In the Redirect UI section, select *Public Client /native (mobile and desktop)* and assign `https://login.microsoftonline.com/common/oauth2/nativeclient` as the redirect URI.
5. Click **Register**.<br>
![azure-app-registration](/img/contents/xu/azure-storage/azure-app-registration.png){:class="img-responsive"}
6. Open the new application and navigate to **API Permissions > Add a permission > Azure Storage**.<br>
![azure-app-permission](/img/contents/xu/azure-storage/azure-app-permission.png){:class="img-responsive"}
7. Click **Grant admin consent**.<br>
![azure-app-grant-permission](/img/contents/xu/azure-storage/azure-app-grant-permission.png){:class="img-responsive"}

### Access Rights to Azure Storage

Follow the steps below to assign access rights for the [new Azure app](#app-registration) in Azure Storage using the Storage Blob Data Contributor role:

1. Open the Azure portal and navigate to **Access Control (IAM)**. 
2. Click **[Add role assignment]**.<br>
![azure-storage-role-assignment](/img/contents/xu/azure-storage/azure-storage-role-assignment.png){:class="img-responsive"}
3. Select the **Storage Blob Data Contributor** role and click **[Next]**. <br>
![azure-storage-role](/img/contents/xu/azure-storage/azure-storage-role.png){:class="img-responsive"}
4. Click **+ Select members** and add the new Azure app created in [App Registration](#app-registration) to the members.<br>
![azure-storage-members](/img/contents/xu/azure-storage/azure-storage-members.png){:class="img-responsive"}
5. Click **[Next]** to continue, then click **[Review + assign]** to assign the access rights.<br>
![azure-storage-review+assign](/img/contents/xu/azure-storage/azure-storage-review+assign.png){:class="img-responsive"}

### Connect to Azure Storage with Xtract Universal

Follow the steps below to connect Xtract Universal to the Azure Storage destination using Authentication via Azure Active Directory:

1. Open Xtract Universal and create a new Azure Storage destination or edit an existing destination.
2. Select the connection type **Azure active directory**. 
3. Enter the name of your storage account.<br>
![azure-destination-in-xu](/img/contents/xu/azure-storage/azure-destination-in-xu.png){:class="img-responsive"}
4. Copy and paste the Application (client) ID and the Directory (tenant) ID from the Azure app created in [App Registration](#app-registration).<br>
![azure-info](/img/contents/xu/azure-storage/azure-info.png){:class="img-responsive"}
5. Click **[Connect]**. The window "Azure OAuth 2.0" opens.
6. When prompted, pass your Active Directory credentials and click **[Accept]**. <br>
![azure-auth-in-xu](/img/contents/xu/azure-storage/azure-auth-in-xu.png){:class="img-responsive"}
7. If the connection is successful, a "Connection successful" message is displayed in a pop-up window.

