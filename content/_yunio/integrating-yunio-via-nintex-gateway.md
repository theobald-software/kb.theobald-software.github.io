---
layout: page
title: Integrating a yunIO Service via Nintex Gateway
description: Integrating a yunIO Service with Nintex
permalink: /:collection/:path
weight: 5
progressstate: 5
---


The following article shows how to integrate a yunIO services via the Nintex Gateway.<br>
The Nintex Gateway is an on-premises application that enables Nintex Automation Cloud to access on-premises resources.

### Prerequisites

- Install and configure the [Nintex Gateway](https://help.nintex.com/en-US/nwc/Content/Gateway/InstallAndConfigure.htm).
- Make sure that the Nintex Gateway has a valid API key for authentication.
- Install yunIO version 1.26.3 or higher.
- Set up Basic Authentication in yunIO, see [Online Help: Access Control](https://help.theobald-software.com/en/yunio/access-control#global-access-control). 

### Creating a yunIO Service for Nintex Gateway

1. Create a service in yunIO. The depicted example uses the BAPI SD_RFC_CUSTOMER_GET to search and extract customer data from SAP. 
2. Click ![run](/img/contents/yunio/run-icon.png) to testrun the service in yunIO (1). For more information, see [Online Help: Testing a Service](https://help.theobald-software.com/en/yunio/run-services#testing-a-service).
3. Click **[Ctrl]** + ![download-file](/img/contents/yunio/download.png) to download the service definition with predefined Nintex Gateway properties (2).<br>
![yunio-Services-Function-Download](/img/contents/yunio/yunio-run-services-function-download.png){:class="img-responsive" width="800px"}
4. Open the service definition and check if the following properties are available at the end of the service definition:
```json
...
"securityDefinitions": {
        "basic": {
            "type": "basic",
            "x-ntx-connection-properties": {
                "type": "object",
                "required": [
                    "x-ntx-gateway-id",
                    "x-ntx-gateway-apikey",
                    "x-ntx-gateway-xtension-baseurl",
                    "username",
                    "password"
                ],
                "properties": {
                    "x-ntx-gateway-id": {
                        "type": "string",
                        "title": "Select Nintex Gateway"
                    },
                    "x-ntx-gateway-apikey": {
                        "type": "string",
                        "title": "Nintex Gateway API key"
                    },
                    "x-ntx-gateway-xtension-baseurl": {
                        "type": "string",
                        "title": "On-premises service URL",
                        "description": "Base URL of the web service.",
                        "pattern": "^(https?:\/\/[^\/?#]+)(?:[\/]|\/.+|)$"
                    },
                    "username": {
                        "type": "string",
                        "title": "On-premises application username"
                    },
                    "password": {
                        "type": "string",
                        "title": "On-premises application password"
                    }
                }
            }
        }
    },
    "security": [
        {
            "basic": []
        }
    ],
    "x-ntx-render-version": 2,
    "x-ntx-host": "{{x-ntx-gateway-uri}}"
}
```

### Configuring a yunIO Xtension in Nintex

1. Open your Nintex Automation Cloud tenancy.
2. Click **Xtensions** (1) in the dashboard to open the Xtensions page.
3. Click ![nintex-add](/img/contents/yunio/nintex-add.png) (2) in the Private connector list.
4. Click **[Choose a file]** (3). Navigate to the yunIO service definition from [Creating a yunIO Service for Nintex Gateway](#creating-a-yunio-service-for-nintex-gateway).<br>
![nintex-xtensions1](/img/contents/yunio/nintex-xtension.png){:class="img-responsive"}
5. Wait for the Nintex Automation Cloud to validate the file.
6. Click **[Next]**. Nintex Workflow Cloud detects the basic authentication security template.
7. Click **[Next]**.
8. Edit the **Name** of the Xtension. The entered name becomes the name of the action group in the workflow.
9. Edit the **Description** of the Xtension. This appears in the Private connector list in the Xtensions page.
10. Optional: select or upload an icon for the Xtension.
11. Click **[Publish]** (4).<br>
![nintex-xtensions2](/img/contents/yunio/nintex-xtension2.png){:class="img-responsive"}

### Configuring a yunIO Connection in Nintex

1. Click **Connections** (5) in the dashboard to open the Connections page.
2. Click **[Add Connection]** (6) in the Connector list.<br>
![nintex-connections](/img/contents/yunio/nintex-connections.png){:class="img-responsive"}
3. Select the yunIO connector from [Configuring a yunIO Xtension in Nintex](#configuring-a-yunio-xtension-in-nintex).
4. Click **[Next]**.
5. Configure the connection:<br>
- **Connection name** - enter a name to identify the connection.
- **Select Nintex Gateway** - select your Nintex Gateway.
- **Nintex Gateway API key** - enter a valid API key of your Nintex Gateway.
- **On-premises service URL** - enter the base URL of your yunIO service, including the HTTPS.
- **On-premises application username** - enter your yunIO username.
- **On-premises application password** - enter your yunIO password.
![nintex-connection-settings](/img/contents/yunio/nintex-connection-settings.png){:class="img-responsive"}
6. Click **[Connect]**.<br>

### Using the yunIO Service in a Nintex workflow

After an Xtension and a Connection is created, the yunIO service can be used in a workflow. 

1. Drag&Drop the yunIO Xtension from [Configuring a yunIO Xtension in Nintex](#configuring-a-yunio-xtension-in-nintex) into the workflow (7).
2. Select the connection from [Configuring a yunIO Connection in Nintex](#configuring-a-yunio-connection-in-nintex) (8).<br>
![nintex-gateway-workflow](/img/contents/yunio/nintex-gateway-workflow.png){:class="img-responsive"}
3. Parameterize the input fields (9). 

******

#### Related Links
- [Nintex Documentation: Integrate with Theobald yunIO via Nintex Gateway](https://help.nintex.com/en-US/xtensions/04_Reference/Examples/EXM_04SAPTheobaldyunIO.htm)
- [Nintex Gateway](https://help.nintex.com/en-us/nwc/Content/Gateway/InstallAndConfigure.htm)