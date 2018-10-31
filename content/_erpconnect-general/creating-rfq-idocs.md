---
layout: page
title: Creating RFQ IDocs
description: Creating RFQ IDocs
permalink: /:collection/:path
weight: 4
---

**Create an RFC Destination / Logical System**

* Create a RFC destination.
* Goto transaction SALE -> ALE -> Sending and Receiving Systems -> Define Logical System
* Make a new entry named with the same name as your RFC destination
* Goto transaction WE21
* Create a new logical Port (Transctional RFC) and connect it to your RFC destination


**Create a Distribution Model**

* Goto transaction BD64
* Switch from display to edit mode
* Create a new model view with name ZRFQ or select an existing model view
* Add a new message type to your model view
  * Sender: You SAP's logical system name (see table T000 if you don't know)
  * Receiver: The logical system name of you sub system
  * Message Type: ORDERS
* Select you model view -> Environment -> Generate Partner Profiles -> F8


**Manipulating Partner Profiles**

* Goto transaction WE20
* Choose your system on the left side
* Double click on Outbound Parameter ORDERS
* Switch to tab Message Control
* Add a new Message Control
  * Application: EA
  * Message Type: NEU
  * Process Code: ME10


**Test**

* Goto transaction ME41
* Create a new RFQ
* After saving goto transaction ME43 (view RFQ)
* Go to Header -> Messages
* Mark ALE-Nessage, Press Processing Log to find out more about problems during IDoc creation
* To find out more about the sent IDocs please go to transaction WE02