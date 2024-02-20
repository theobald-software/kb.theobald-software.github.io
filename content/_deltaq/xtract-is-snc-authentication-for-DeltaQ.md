---
layout: page
title: Xtract IS - SNC Authentication for DeltaQ and OHS
description: SNC Authentication for DeltaQ and OHS extraction types
permalink: /:collection/:path
weight: 55
---


The following article is intended for users who want to run SSIS packages with SNC Authentication when DeltaQ or OHS dataflow components are used. 
When SNC is used, it is a prerequisite that the associated application server, RFC destination (*SM59*) and SAP user have set SNC via partner name. 
This way the communication between the application server and Xtract IS takes place via RFC destination for DeltaQ and OHS dataflow components. 

### User maintenance configuration
In *SU01*, enter the User and click on **[Change]**. 
Go to SNC tab provide the SNC Name of the SAP user and click on **[Save]**. In our case, *MALAPATI* is the user and *THEOBALD.LOCAL* is the domain.
![sap_user_settings_snc](/img/contents/xis/sap_user_settings_snc.png){:class="img-responsive"}

Make sure the SAP user used in Xtract IS is enabled with the SNC name (1) of the user.

### SAP Source Settings
1. Open the Connection Manager of the SAP connection.
2. Provide the user details for which the SNC is enabled (1).
![connection_manager](/img/contents/xis/connection_manager.png){:class="img-responsive"}
3. Click on **[Additions]**.
![connection_manager_addition](/img/contents/xis/connection_manager_addition.png){:class="img-responsive"}
   - Check the box SNC (2).
   - Enter the complete path of the Kerberos library in the field SNC library 32 Bit (3).
   - Enter the complete path of the Kerberos library in the field SNC library 64 Bit (4).
   - Enter the SPN of the SAP service account in the field Partner name. Use the following notation: *p:[SPN]@[Domain-FQDN-Uppercase]* (5).
   - Set the Quality of Protection as *8* - Default (6).
   - Click **[OK]** (7).
   
4. Click on **[Test connection]** (8), to test the successful connection. The confirmation window opens.
5. Click on **[OK]** (9) to confirm.
![connection_manager_test](/img/contents/xis/connection_manager_test.png){:class="img-responsive"}
   
{: .box-note }
**Note:** Here the Partner name of the Application server is entered and in our case it is *p:SAPserviceERP/do_not_care@THEOBALD.LOCAL*.

### RFC destination configuration
Enable SNC for the corresponding RFC destination regarding SPN of SAP User account. In the example, the RFC destination *XTRACT10* is being used for enabling SNC
1. In *SM59* double-click on the already created TCP/IP RFC destination as explained in the online help [Xtract IS – RFC Destination](https://help.theobald-software.com/en/xtract-is/sap-customizing/preparation-for-ohs-in-bw) and go to change mode.
2. In the Logon & Security tab, under Status of Secure Protocol, click on [SNC] and in the pop-up screen Change View *SNC Extension: Details*
   - Provide the SPN (Service Principal Name) of SAP user account in the field Partners (1). In our case, the SNC Partner is *p:RfcServer/Malapati@THEOBALD.LOCAL*.
   - Set the Quality of Protection to Default (2).
   - Check the box **SNC Active** (3).
   - Click on  **[Continue]** (4).
   ![rfc_destination_snc1](/img/contents/xis/rfc_destination_snc1.png){:class="img-responsive"}
3. Once the above step is successful you can see the Active status of SNC 
![rfc_destination_snc](/img/contents/xis/rfc_destination_snc.png){:class="img-responsive"}
4.	Go to Unicode tab and select the Radio button Unicode and click on **[Save]**.
![rfc_destination_unicode](/img/contents/xis/rfc_destination_unicode.png){:class="img-responsive"}

***********
#### Related Links

- [Xtract IS – RFC Destination](https://help.theobald-software.com/en/xtract-is/sap-customizing/preparation-for-ohs-in-bw#creating-an-rfc-destination)
- [Xtract IS – The Connection Manager](https://help.theobald-software.com/en/xtract-is/sap-connection/the-connection-manager)
- [Xtract IS – SAP Connection with SNC](https://help.theobald-software.com/en/xtract-is/sap-connection/sap-connection-with-snc)
- [Help.SAP – Maintaining RFC destinations and their SNC options](https://help.sap.com/viewer/e73bba71770e4c0ca5fb2a3c17e8e229/7.5.8/en-US/57898009a859493a8bce56caaf0f8e13.html)










