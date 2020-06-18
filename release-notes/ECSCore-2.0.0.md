---
layout: releaseNotes
---

# ECS Core 2.0

## Consumer Endpoint
- Azure Relay Connection is for the Consumer Endpoint only (no management actions are possible through it).
- Functionality to connect or disconnect the Azure Relay manually was removed.
- Non-contract classes/datatypes. Newtonsoft Json (more performant) instead of .NET Framework serializer.
- Windows Logging is only for the IIS-Preloader (Consumer Endpoint, Azure Relay registration), other components are using NLog.

## Management Endpoint
- The Management Actions (such as Deploying web services) were moved to the new Management Endpoint. For more information, go the full list on our help portal.
- The Management of the Consumer Endpoint (Clear Caches, Test SAP Connection, Connect Azure Relay via Application Pool reset) was moved to the Management Dashboard.
- Code compilation happens on the server-side now.
- API keys: during requests no more encoding in BASE64 required.
- There is no Azure Relay mapping for the Management Endpoint (please use the direct link).

## Management Dashboard
- The UI was revamped.
- Basic Management of Web Services (Add/Compile from definition, remove, get OpenAPI definition).
- 2 Types of API keys: **Management** keys (bound to the Portal/Dashboard login) and **Consumer** keys, bound to the Windows User.

## Web Service Designer
- The UI was revamped.
- File extension of the Web Service Definition (in JSON-Format) is "wsdef" now (converter provided).
- Sorting of operations and custom data types is supported.
- Importing multiple operations from the Catalog.
- Importing operations from an existing web service on the Server.
- Recognizing all web service definitions in the folder and presenting them in the Catalog.
- Code compilation removed (happens on the server-side now.)
- Testing dialog for web services is only for informational purposed of how a simple request should look like. Please use specialized tools like Postman for executing/testing your web services.

## Deployment Manager
- An attempt to install required IIS+Components on a clean machine automatically.
- Express installation with default values (One-Click).
- Uninstallation: uninstalling the Deployment Manager and/or the Web Service Designer DOES NOT removed the deployed Web Sites / Endpoints. (For that please use the Deployment Manager).

## General
- For the older changelog / version history (until version 1.7.6) please click [HERE.](https://kb.theobald-software.com/version-history/erpconnect-services-version-history)
- No more dependencies in the GAC (except of IIS Preloader).
- No more globally installed SQL CE binaries required.
- Deployment Manager\WcsmConverter could be used to upgrade old packages seamlessly.
- The ECSDesigner (for Visual Studio) was removed from the project (low usage).
- The Client Library for manual implementation of Web Services was removed (low usage).
- IIS Management module removed (low usage).