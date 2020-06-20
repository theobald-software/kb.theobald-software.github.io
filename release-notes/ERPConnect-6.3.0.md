---
layout: releaseNotes
---

# ERPConnect 6.3

The base class / collection interface of following classes have changed:
- RFCParameterCollection
- RFCServerFunctionCollection
- RFCStructureCollection
- RFCTableCollection
- RFCTableColumnCollection

These classes don't inherit from CollectionBase any more and no longer implement non-generic collection interfaces like IList. They now implement the generic IList<T> interface.
This is a breaking change, but it shouldn't require any code adjustments in most cases.