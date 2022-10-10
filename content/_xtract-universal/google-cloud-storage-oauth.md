---
layout: page
title: Setting Up OAuth 2.0 for the Google Cloud Storage Destination
description: Dynamic Runtime Parameter within KNIME Workflow
permalink: /:collection/:path
weight: 140
---

Xtract Universal supports OAuth 2.0 for authentication with the Google servers.
To enable the OAuth 2.0 protocol, configure an OAuth flow with the required access permissions to Xtract Universal.

{: .box-note }
**Note**: Google initially classifies third-party applications generally as unsafe and issues a warning. 
The verification process is optional. Official app verification involves ongoing charges.

### GCP console
The GCP console allows configuring of all resources and services. 
To get to the overview dashboard, navigate to the [Google Cloud Storage](https://cloud.google.com/storage) page and click **[Console]** or **[Go to console]**. 

To access all settings and services use the navigation menu on the upper left side.

![xu-google-cloud-req-01](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-01.png){:class="img-responsive"}
 
 
### Setting Up OAuth 2.0

1. Open the GCP console. In the navigation menu, select **APIs & Services > Credentials** .
![xu-google-cloud-req-02](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-02.png){:class="img-responsive"}
2. In the "Credentials" section select **Create Credentials > OAuth client ID**.
![xu-google-cloud-req-03](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-03.png){:class="img-responsive"}
3. Click **[Configure consent screen]**. The "Configure consent screen" is processed with the OAuth flow that is started when a connection is established in the Xtract Universal Designer.
![xu-google-cloud-req-04](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-04.png){:class="img-responsive"}
4. If your account belongs to an organization, you can restrict the usage of Xtract Universal in combination with GCS to your organization. To do so, select “internal” in the “User Type” option.  The restriction option is only available, if you are a [GSuite](https://gsuite.google.com/) user. <br>
Alternatively you can allow any user with access to the OAuth credentials to grant Xtract Universal the permission to write data to your GCS buckets. To do so, select "external" in the “User Type” option. <br> 
Click **[Create]** to continue.
![xu-google-cloud-req-05](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-05.png){:class="img-responsive"}
5. In the "App information" section enter an app name of your choice. <br>
"Support email" and "Developer contact information" are also mandatory fields. Click **[Save and continue]** to get to the next section. <br>
![xu-google-cloud-req-06](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-06.png){:class="img-responsive"}
![xu-google-cloud-req-07](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-07.png){:class="img-responsive"}
6. In the following section click **[Add or remove scopes]**.
Xtract Universal needs read and write permissions for its operations, which are configured in the "Scopes" section.
![xu-google-cloud-req-08](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-08.png){:class="img-responsive"}
7. Enter `https://www.googleapis.com/auth/devstorage.read_write` under **Manually add scopes** and click **[Add to table]**.
![xu-google-cloud-req-09](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-09.png){:class="img-responsive"}
8. The newly added scope is the first entry in the table. Click **[Update]** to create the entry. 
![xu-google-cloud-req-10](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-10.png){:class="img-responsive"}
9. Click **[Continue]** when the "Verfification required" window is prompted. <br>
![xu-google-cloud-req-11](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-11.png){:class="img-responsive"}
10. Confirm twice with **[Save and continue]**. Click **[Back to dashboard]** to return to the dashboard.      
![xu-google-cloud-req-12](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-12.png){:class="img-responsive"}
![xu-google-cloud-req-13](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-13.png){:class="img-responsive"}
![xu-google-cloud-req-14](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-14.png){:class="img-responsive"}
11. Return to the "Credentials" menu, click **[Create credentials]** and select "OAuth client ID". <br>
Select "Desktop app" as application type, give the app a name of your choice and click **[Create]**.
![xu-google-cloud-req-15](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-15.png){:class="img-responsive"}
12. Your OAuth client is now created. <br>
The "Client ID" and the "Client secret" are needed for the destination configuration in Xtract Universal, see [Online Help: Google Cloud Connection Settings](https://help.theobald-software.com/en/xtract-universal/destinations/google-cloud-storage#connection).
![xu-google-cloud-req-16](/img/contents/xu/googlecloudstorage/xu-google-cloud-req-16.png){:class="img-responsive"}

{: .box-note }
Note: As of version 5.11.16 Xtract Universal also supports authentication via service account credentials, see [Online Help: Google Cloud Storage - Destination Details](https://help.theobald-software.com/en/xtract-universal/destinations/google-cloud-storage#destination-details). 

*****
#### Related Links
- [Online Help: Google Cloud Storage Destination](https://help.theobald-software.com/en/xtract-universal/destinations/google-cloud-storage)
- [Google Cloud Storage Documentation: Cloud Storage-Authentifizierung](https://cloud.google.com/storage/docs/authentication)
- [Google Cloud Storage Documentation](https://cloud.google.com/storage/docs#docs)