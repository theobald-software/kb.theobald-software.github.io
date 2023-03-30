---
layout: page
title: Operating Xtract Universal with Load Balancing
description: Operating Xtract Universal with a Load-Balancing
permalink: /:collection/:path
weight: 105
---

This article shows how to operate Xtract Universal with load balancing.<br>
In this context, load balancing refers to distributing the network traffic caused by Xtract Universal to multiple Windows servers.

### About Load Balancing

In today's highly interconnected world, a load balancer is a crucial tool for managing traffic effectively. 


The process of load balancing involves distributing network traffic across multiple servers to avoid server overloads. 
When distributing it is necessary to use a load balancer between different Windows servers running Xtract Universal.

Typical use cases for load balancing include:
- Improved Performance: By distributing network traffic across multiple Xtract Universal servers, a load balancer can significantly improve the performance of your network. 
This can be especially important for high-traffic applications that require fast and reliable access.
- Increased Reliability: Load balancing can help increase the reliability of your network by ensuring that no one Xtract Universal server becomes overloaded with traffic. 
This helps to prevent downtime and ensures that your network is always available.
- Scalability: A load balancer can also help improve the scalability of your network by allowing you to easily add or remove Xtract Universal servers as needed. 
This can be important for businesses that experience sudden spikes in traffic.
- Centralized Management: A Load Balancer allows you to manage multiple servers from a single location. 
This makes it easier to monitor your network, troubleshoot issues, and make necessary adjustments.
- Parallel Processing: 


### Prerequisites

- Every Xtract Universal servers needs a server license, see [Online Help: Licensing](https://help.theobald-software.com/en/xtract-universal/introduction/license).
- All Xtract Universal installations must share the same configuration folder, e.g. by using [git version control]([Deploying Extractions Using Git Version Control](https://kb.theobald-software.com/xtract-universal/deploying-extractions-using-Git-version-control)). 
The configuration folder contains the settings for the destinations, extractions, sources, server and users. The folder can be found in the installation directory of Xtract Universal, e.g., `C:\Program Files\XtractUniversal\config`.
- All Xtract Universal installations must use the same software version to avoid any version compatibility issues.

### The Process

When a web request comes to the load balancer in a setup with a load balancer and two Xtract Universal servers, here's what happens:
1.	The load balancer is the entry point for all incoming web requests, so it's the first component to receive the request.
2.	The load balancer uses a predefined algorithm (such as round-robin, least connections, or IP hash) to select the Xtract Universal server to handle the incoming web request.
3.	Once the load balancer has determined which server to forward the request to, it forwards the request to that Xtract Universal server.
4.	The selected Xtract Universal server processes the incoming request and sends the response back to the load balancer.
5.	The load balancer receives the response from the selected server and forwards it back to the client who initiated the request.
6.	For subsequent web requests, the load balancer repeats this process of selecting a Xtract Universal server to handle the request and forwarding it to that server for processing.


#### Related Links:
- [Deploying Extractions Using Git Version Control](https://kb.theobald-software.com/xtract-universal/deploying-extractions-using-Git-version-control)
- [Online Help: Installation and Update - Program Directory Files](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#program-directory-files)