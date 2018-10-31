---
layout: page
title: Salesforce-Extract data and process it using scheduled APEX
description: Salesforce-Extract data and process it using scheduled APEX
permalink: /:collection/:path
weight: 2
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

This article will describe how to extract data from SAP to Salesforce using Xtract Universal and then Process it using scheduled Apex jobs. We will here extract annual revenue values from SAP to a staging object in Salesforce and then transfer them to the annual revenue field of the standard Salesforce Accounts object.

#### Define extraction 

We define an extraction based on the SAP table KNA1 for general customer information.

![settings_create_object_2](/img/contents/settings_create_object_2.PNG){:class="img-responsive"}

The two columns needed for this example are **KUNNR** and **UMSA1**. The **Where Clause** will be used to get only those entries which match our criteria.

#### Set destination
 

To use the Salesforce destination we have to set our Salesforce login data.

![definition](/img/contents/definition.PNG){:class="img-responsive"}

#### Define destination settings 

These settings are set by default and required for this example.

![settings_create_object__0](/img/contents/settings_create_object__0.PNG){:class="img-responsive"}

The **Preparation** option *Create if not exists* will only create a new Salesforce object if no object with the same name already exists. With **Row processing** set to Insert all new entries will be inserted into the specified object and merging won’t be possible.

#### Run extraction 

Click the **Run** button in the extraction definition window. In the dialog click either **Run in xu.exe** or **Run in Browser**.

![run_extraction_popup](/img/contents/run_extraction_popup.PNG){:class="img-responsive"}

Refresh the Designer by clicking the **Refresh** button. Check the execution status and the number of rows that have been extracted.

![designer_view](/img/contents/designer_view.PNG){:class="img-responsive"}

To check the processing status in Salesforce we have to navigate to **Setup > Jobs > Bulk Data Load Jobs**. Here we can check the status of our extraction job. Make sure the number of records processed matches the number of rows extracted in Xtract Universal.


![salesforce_view](/img/contents/salesforce_view.PNG){:class="img-responsive"}

The entries in our Sales__c object look as following:

![salesforce_entries_view](/img/contents/salesforce_entries_view.PNG){:class="img-responsive"}

#### Create Apex class
 
To create the Apex class for our scheduled APEX job we navigate to the **Developer Console**. Under **File > New > Apex Class** create a new Apex class and name it **ScheduledSalesJob**.


![defcon_new_class](/img/contents/defcon_new_class.PNG){:class="img-responsive"}

This example class will take all entries from our custom **Sales__c** object that have been modified since the last run of the scheduled job and write its **Annual Revenue (UMSA1)** value to our corresponding Account by matching the **Account Number (KUNNR)**.

![defcon_class_source](/img/contents/defcon_class_source.PNG){:class="img-responsive"}

(Source code can be downloaded from the attachments)

Create scheduled Apex job
 

To create the job we will have to open the **Execute Anonymous Window**. It can be opened under **Debug > Open Execute Anonymous Window** or by pressing **CTRL + E**. The following code will create a scheduled job that is named **Sales** and runs daily at 17:00.

![defcon_execute_anon](/img/contents/defcon_execute_anon.PNG){:class="img-responsive"}

Once we executed this code by clicking the **Execute** button we can check **Setup > Jobs > Scheduled Jobs** to see if our job got created successfully.

![salesforce_scheduled_jobs_view](/img/contents/salesforce_scheduled_jobs_view.PNG){:class="img-responsive"}

By checking the **Log** in the **Developer Console** we can check if the scheduled execution of the Apex code was successful.

![defcon_log](/img/contents/defcon_log.PNG){:class="img-responsive"}

What our **Accounts** looked like before the execution:

![scheduled_apex_job_pre_output](/img/contents/scheduled_apex_job_pre_output.PNG){:class="img-responsive"}

What our **Accounts** look like after successful execution:

![scheduled_apex_job_output](/img/contents/scheduled_apex_job_output.PNG){:class="img-responsive"}

Attachments	 	----------------------------------------

[scheduledsalesjob.zip (0.79 KB)](/files/scheduledsalesjob.zip)