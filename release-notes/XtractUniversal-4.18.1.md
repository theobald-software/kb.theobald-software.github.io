---
layout: releaseNotes
---

## Retry logic for cloud storage destinations.

Implemented retry logic for web requests in Azure Storage destination and in AWS S3 destination. Now when Azure Storage destination or AWS S3 destination send a request to the API during an upload, if the request fails, it will be resent. The delay between each retry grows exponentially, starting at 1 second. Maximum delay is 60 seconds, after which the extraction fails.

This change will prevent extractions from failing due to transient faults in connection between Xtract Universal and S3 / Azure Storage or short service downtimes in the cloud environemnts.

### More technical information:

https://docs.aws.amazon.com/apigateway/api-reference/handling-errors/

https://docs.microsoft.com/en-us/azure/architecture/best-practices/retry-service-specific#general-rest-and-retry-guidelines