---
layout: releaseNotes
---

# BOARD Connector 3.3.0

The **ABAP** subdirectory now contains the following transport requests:

### Z_THEO_READ_TABLE.zip
Transport request for new table custom function module *Z_THEO_READ_TABLE*. This is the successor to *Z_XTRACT_IS_TABLE_COMPRESSION*.
The old table function module *Z_XTRACT_IS_TABLE_COMPRESSION* will continue to work with our products, but is no longer being maintained. Please consider adjusting your table extractions to use *Z_THEO_READ_TABLE* instead of *Z_XTRACT_IS_TABLE_COMPRESSION*.
This version of the transport request requires SAP Release 7.40 SP05 or later and supports sub-selects in WHERE-clauses.

### Z_THEO_READ_TABLE-before_740SP05.zip
Same as above, but for SAP Releases older than 7.40 SP05. This version does not support sub-selects in WHERE-clauses.

### thtrans.zip
Transport request for Report component custom function *Z_XTRACT_IS_REMOTE_REPORT* and Table Join component custom function *Z_XTRACT_IS_TABLE_JOIN*. This transport request no longer contains *Z_XTRACT_IS_TABLE_COMPRESSION*, since it has been deprecated. Please use *Z_THEO_READ_TABLE* instead.