---
layout: releaseNotes
---

# Xtract Universal 4.14.0

Several improvements related to Parquet

## Features
- Parquet files are now compressed using *GZIP* 
- Parquet file format can now be selected *in S3 AWS* and *Azure* destinations
- Time values will automatically be converted to TIME_MILLIS type <br> Exceptions:
  - `'______'` (*whitespaces*) -> 00:00:00
  - `'240000'` -> 23:59:59

## Bugs
- Fixed a bug where empty results created invalid Parquet files
- Fixed a bug where packed numbers had an incorrect total length