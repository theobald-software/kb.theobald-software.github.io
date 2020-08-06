---
layout: releaseNotes
---

# ERPConnect 6.13.0

* fix for parameters with decfloat types
* added RFCParameter.SetValueInternal()
* marked RFCParameter.GetLength() as obsolete
* removed RFCServerFunctionCollection.Find() (obsolete)
* removed RFCTableColumn.FixedLength (obsolete) - this also affects LINQtoERP, please regenerate your code