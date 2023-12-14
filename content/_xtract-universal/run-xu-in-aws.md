---
layout: page
title: Run Xtract Universal in a VM on AWS EC2
description: Run Xtract Universal in a VM on AWS EC2
permalink: /:collection/:path
weight: 127
---

The following article shows how to run Xtract Universal in a virtual machine on an AWS EC2.

### About

AWS enables running virtual servers (instances) in the cloud, see [AWS Documentation: EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html).
Theobald Software offers Xtract Universal as an [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AMIs.html) for customers who want to evaluate Xtract Universal or who want to host Xtract Universal in the cloud.
The Xtract Universal AMI can be selected when launching an instance in AWS.

When starting an Xtract Universal instance, the following settings are pre-configured:

| License | Xtract Universal is already installed and running with a 30-days trial license. You can replace the trial license with your own license. | [Online Help: Licensing](https://help.theobald-software.com/en/xtract-universal/introduction/license)|
| Software Updates | The pre-installed version of Xtract Universal is displayed in the AWS marketplace. Make sure to keep Xtract Universal up-to-date with the latest software releases, see [Xtract Universal Version History](../version-history/xtract-universal-version-history). | [Online Help: Installation and Update](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update) |
| Server Settings | The webserver is pre-configured with a self-signed TLS certificate and can be accessed in a browser via https://xtractuniversal:8165/ from within the rdp session. | [Online Help: Server Settings](https://help.theobald-software.com/en/xtract-universal/security/server-security) |

### Prerequisites

- AWS account
- Access to the [EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html) console

There are multiple ways to start using Xtract Universal in EC2.
- [Set Up Xtract Universal from the AWS Marketplace](#set-up-xtract-universal-from-the-aws-marketplace)
- [Set Up Xtract Universal directly from the EC2 Console](#set-up-xtract-universal-from-the-ec2-console)

### Set Up Xtract Universal from the AWS Marketplace

Follow the steps below to set up Xtract Universal from the AWS Marketplace:

1. Log in to AWS marketplace and open the [Xtract Universal product page in AWS](https://aws.amazon.com/marketplace/pp/prodview-anarfo2osmhl4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#pdp-reviews).
2. Click **[Continue to Subscribe]** to [subscribe](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to Xtract Universal.<br>
![XUinAWS-marketplace](/img/contents/xu/XUinAWS-marketplace.png)
3. Click **[Continue to Configuration]** to select a software version and a region for hosting Xtract Universal.
4. Click **[Continue to Launch]**. <br>
![XUinAWS-configure](/img/contents/xu/XUinAWS-configure.png)
5. In **Choose Action** select *Launch through EC2* to access all options for configuring a virtual machine in EC2. 
![XUinAWS-launch](/img/contents/xu/XUinAWS-launch.png)
6. Click **[Launch]**. The EC2 console opens.
7. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance).
The Xtract Universal AMI is already selected.<br>
![XUinAWS-ec2setup](/img/contents/xu/XUinAWS-ec2setup.png)
8. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows)
9. When connected, the Xtract Universal Designer is located on the Desktop. Start the Xtract Universal Designer.
10. Set up an SAP connection and extractions, see [Online Help: Getting Started](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server).

### Set Up Xtract Universal from the EC2 Console

Follow the steps below to set up Xtract Universal directly from the EC2 console:

1. Open the [Amazon EC2 console](https://console.aws.amazon.com/ec2/).
2. In the EC2 console dashboard, click **[Launch instance]**.<br>
![XUinAWS-XUinAWS-ec2-launch](/img/contents/xu/XUinAWS-ec2-launch.png)
3. In the *Quick Start* tab of **Application and OS Images (Amazon Machine Image)** click **[Browse more AMIs]**. <br>
![XUinAWS-browseAMIs](/img/contents/xu/XUinAWS-browseAMIs.png)
4. Enter "Xtract Universal" in the search bar. Xtract Universal is listed under *AWS Marketplace AMIs*.
5. Click **[Select]**. The application returns to the EC2 console.<br>
![XUinAWS-ec2-select](/img/contents/xu/XUinAWS-ec2-select.png)
6. Set up your virtual machine, see [AWS Documentation: Launch an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-launch-instance).
The Xtract Universal AMI is already selected.<br>
![XUinAWS-ec2setup](/img/contents/xu/XUinAWS-ec2setup.png)
7. Start the EC2 instance and connect to it, see [AWS Documentation: Connect to an Instance](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/EC2_GetStarted.html#ec2-connect-to-instance-windows)
8. When connected, the Xtract Universal Designer is located on the Desktop. Start the Xtract Universal Designer.
9. Set up an SAP connection and extractions, see [Online Help: Getting Started](https://help.theobald-software.com/en/xtract-universal/getting-started/connect-designer-with-server).

{: .box-note }
**Note:** If you are not already [subscribed](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to Xtract Universal, launching the EC2 instance automatically adds the subscription.