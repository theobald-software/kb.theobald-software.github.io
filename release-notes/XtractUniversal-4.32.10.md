---
layout: releaseNotes
---

- Fixed a bug in the rollback logic, where if an extraction error occurred before any data was uploaded to S3, the destination would try to roll back the upload and run into an error since there was no data to delete.
- Multiple internal code changes and improvements in the S3 destination.