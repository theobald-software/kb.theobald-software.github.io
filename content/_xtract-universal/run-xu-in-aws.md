---
layout: page
title: Run Xtract Universal in AWS
description: Run Xtract Universal in AWS
permalink: /:collection/:path
weight: 127
---

The following article shows how to run Xtract Universal in [Amazon Web Services (AWS)](https://aws.amazon.com/marketplace/pp/prodview-anarfo2osmhl4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#pdp-reviews).

### About

AWS enables running virtual servers (instances) in the cloud, see [AWS Documentation: EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html).
Theobald Software offers Xtract Universal as an [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AMIs.html) for customers who want to evaluate Xtract Universal or who want to host Xtract Universal in the cloud.
After susbcribing to Xtract Universal you can select the Xtract Universal AMI when launching an instance in AWS.

<!---
Xtract Universal is provided as an [Amazon Machine Image (AMI)](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AMIs.html).
![XUinAWS-subscribe](/img/contents/xu/XUinAWS-subscribe.png)
-->

When starting an Xtract Universal instance, the following settings are pre-configured:

| License | Xtract Universal is already installed and running with a 30-days trial license. You can replace the trial license with your own license. | [Online Help: Licensing](https://help.theobald-software.com/en/xtract-universal/introduction/license)|
| Software Updates | The pre-installed version of Xtract Universal is displayed in the AWS marketplace. Make sure to keep Xtract Universal up-to-date with the latest software releases, see [Xtract Universal Version History](../version-history/xtract-universal-version-history). | [Online Help: Installation and Update](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update) |
| Server Settings | The webserver is pre-configured with a self-signed TLS certificate and can be accessed in a browser via https://xtractuniversal:8165/ from within the rdp session. | [Online Help: Server Settings](https://help.theobald-software.com/en/xtract-universal/security/server-security) |

### Prerequisites

- AWS account
- Access to the [EC2](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/concepts.html) console

### Use Xtract Universal in AWS

1. Log in to AWS marketplace and look up [Xtract Universal in AWS](https://aws.amazon.com/marketplace/pp/prodview-anarfo2osmhl4?sr=0-1&ref_=beagle&applicationId=AWSMPContessa#pdp-reviews).
2. Click **[Continue to Subscribe]** to [subscribe](https://docs.aws.amazon.com/marketplace/latest/buyerguide/buyer-ami-contracts.html) to Xtract Universal.<br>
![XUinAWS-marketplace](/img/contents/xu/XUinAWS-marketplace.png)
3. Click **[Continue to Configuration]** to select a software version and a region for hosting Xtract Universal.
4. Click **[Continue to Launch]**. <br>
![XUinAWS-configure](/img/contents/xu/XUinAWS-configure.png)
5. In **Choose Action** select *Launch through EC2* to access all options for configuring a virtual machine in EC2. 
![XUinAWS-launch](/img/contents/xu/XUinAWS-launch.png)
6. Click **[Launch]**. The EC2 console opens.
3. Open Xtract Universal.


Connect to the server with the Xtract Universal Designer, which you can find on the Desktop.
