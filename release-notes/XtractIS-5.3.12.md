---
layout: releaseNotes
---

# XIS 5.3.12
This release fixes several issues with date conversion and legacy behavior

## Bugs
- Fixed a bug that caused the `ConvertsDates` property to not take effect

## Legacy behavior
- Fixed a bug where the date conversion was not enabled, although the checkbox was checked in version 4.x
- Previous to version 5.0 extractions would fail if a date value could not be converted and no invalid date replacement was supplied. This behavior is now implemented for converted components, but cannot be activated for new components.