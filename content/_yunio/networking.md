---
layout: page
title: yunIO Networking Scenarios
description: Data Flow between Service Caller and SAP
permalink: /:collection/:path
weight: 95
progressstate: 25
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for yunIO.<br>
Make sure to use the samples within the new [HelpCenter for yunIO](https://helpcenter.theobald-software.com/yunio/knowledge-base).


When a call to a yunIO REST service is made, there are several ways a request and response can travel through networks from the caller to the SAP system and back. <br>
This article provides examples of networking scenarios between a service caller and SAP.<br>


### Same Network

If the service caller, yunIO and SAP are all part of the same network, the path for request and reponse is as follows:

1. The caller sends the request directly to the yunIO server via HTTP or HTTPS.
2. The yunIO server communicates with SAP. The response is sent back to the caller.<br> 
![Same Network](/img/contents/yunio/ts-knowledge-base_same-network.png){:class="img-responsive" width="600px"}

Examples:
- Caller, yunIO and SAP run on-premises.
- Caller, yunIO and SAP run in the same cloud environment. 

### Different Networks

If the service caller is located on another network than yunIO and the SAP system, the two networks can be connected via the internet.

Examples:
- Caller is located in the cloud, yunIO and SAP run on-premises.
- Caller is located in the cloud, yunIO and SAP are located at a hosting provider. 
- Caller is located in one cloud environment, yunIO and SAP are located in a different cloud environment.
- Caller is located on-premises, yunIO and SAP are located at a hosting provider. 
- Caller is located on-premises, yunIO and SAP are located in the cloud.
- Caller is located in US branch office, yunIO and SAP are located in European headquarters.

Depending on the location of the caller, it is possible to restrict requests to the yunIO server to only trusted origins through network traffic rules. 
If that is not possible, requests to the yunIO server can be made from untrusted sources. This can be a security risk, even if authentication is enabled, e.g., denial-of-service attacks.

### Direct Connection

A direct connection can be established, if firewall rules allow incoming requests from the caller's network to the yunIO/SAP network. 
HTTPS should always be enabled for direct connections to protect the confidentiality and integrity of the communication, see [yunIO Server Settings: Transport Layer Security](https://help.theobald-software.com/en/yunio/server-settings#transport-layer-security).
Note that the ports for service calls and for accessing the designer must be open, see [yunIO Server Settings: Services, Designer and WebSockets](https://help.theobald-software.com/en/yunio/server-settings#services-designer-and-websockets).
For callers in cloud environments, it might not be possible to restrict requests to the yunIO server to trusted origins through firewall rules.

1. The caller sends the request directly to the yunIO server via HTTPS.
2. The yunIO server communicates with SAP. The response is sent back to the caller. <br>
![Different Network](/img/contents/yunio/ts-knowledge-base_directly-open-port.png){:class="img-responsive" width="600px"}

### Azure Relay
The yunIO service can be exposed to the caller through [Azure Relay](https://docs.microsoft.com/en-gb/azure/azure-relay/relay-what-is-it).
For callers in cloud environments it might not be possible to restrict requests to the yunIO server to trusted origins through Azure Relay rules.
In this scenario it is not necessary to change firewall rules of the yunIO/SAP network to allow incoming requests from other networks. 
Only outgoing requests from the yunIO/SAP network to Azure Relay must be allowed.


1. The yunIO server connects from the yunIO/SAP network to Azure Relay and establishes a secure tunnel.
2. a) The caller makes a request to Azure Relay.<br>
b) The request is forwarded through the secure tunnel to the yunIO server.
3. The yunIO server communicates with SAP. The response is sent back to the caller. <br>
![Add parameters](/img/contents/yunio/ts-knowledge-base_azure-relay.png){:class="img-responsive" width="600px"}

For information on how to set up an Azure Relay Hybrid Connection with yunIO, see [Establish an Azure Relay Hybrid Connection to yunIO](./establish-an-azure-relay-hybrid-connection).

### Azure VPN
The caller and yunIO/SAP can be connected through a secure tunnel and joined to the same VNet in Azure.
The yunIO server can be protected from requests from untrusted sources by restricting access to the VNet in Azure.
In this scenario it is not necessary to change firewall rules of the yunIO/SAP network to allow incoming requests from other networks. 
Only outgoing requests from the yunIO/SAP network to Azure must be allowed.


1. The VPN client connects from yunIO/SAP network to Azure, establishes the secure tunnel.
2. a) The caller makes a request to the yunIO server via VNet.<br>
b) The request is forwarded through the secure tunnel to the yunIO/SAP network.<br>
c) The request is forwarded to the yunIO server.
3. The yunIO server communicates with SAP. The response is sent back to the caller. <br>
![Add parameters](/img/contents/yunio/ts-knowledge-base_azure-vpn.png){:class="img-responsive" width="600px"}


### Microsoft On-Premises Data Gateway
If the caller is one of the cloud services that is supported by the [on-premises data gateway](https://docs.microsoft.com/en-gb/data-integration/gateway/service-gateway-onprem), requests to the yunIO server can be forwarded to the yunIO server through that gateway.
The yunIO server can be protected from requests from untrusted sources using connection roles of the on-premises data gateway.<br>
Make sure that:
- the connectivity requirements from Microsoft are met, see [Adjust communication settings for the on-premises data gateway](https://learn.microsoft.com/en-us/data-integration/gateway/service-gateway-communication).
- the gateway and power platform region settings are identical, see [Check if the gateway is in the right region](https://docs.microsoft.com/en-gb/troubleshoot/power-platform/power-automate/check-if-gateway-is-the-right-region).

In this scenario it is not necessary to change firewall rules of the yunIO/SAP network to allow incoming requests from other networks. 
Only outgoing requests from the yunIO/SAP network to Azure must be allowed.

1. The on-premises data gateway connects from yunIO/SAP network to Azure, establishes the secure tunnel.
2. a) The caller makes a request to the yunIO server via gateway resource.<br>
b) The request is forwarded through the secure tunnel to the on-premises data gateway.<br>
c) The request is forwarded to the yunIO server.
3. The yunIO server communicates with SAP. The response is sent back to the caller. <br>
![Add parameters](/img/contents/yunio/ts-knowledge-base_azure-data-gateway.png){:class="img-responsive" width="600px"}

******
#### Related Links:

- [yunIO Online Help](https://help.theobald-software.com/en/yunio/)
- [Microsoft Documentation: Azure Relay](https://docs.microsoft.com/en-gb/azure/azure-relay/relay-what-is-it)
- [Microsoft Documentation: On-premises Data Gateway](https://docs.microsoft.com/en-gb/data-integration/gateway/service-gateway-onprem)