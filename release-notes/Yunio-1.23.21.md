---
layout: releaseNotes
---

## yunIO 1.23.21

- SAP connection management in the runtime was reworked
  - This massively improves performance in high load scenarios.
- Fixed a deadlock in the HTTP server
  - This caused worker processes to become unresponsive in high load scenarios.
- The connection management of the azure relay connector was reworked.
  - This significantly reduces resource usage and latency, especially for short requests and high load.