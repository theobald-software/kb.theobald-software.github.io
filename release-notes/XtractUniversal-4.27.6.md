---
layout: releaseNotes
---

## Xtract Universal - 4.27.6
- To find a valid Alteryx installation, XU's setup will not only check its folder, but for the file \bin\RunTimeData\DefaultSettings.xml, which is mandatory for the plugin installation. If it is not found, setup will consider that there is no Alteryx instance was found.

- XtractUniversal's service now is started according to some conditions after installation:
	1. Service is freshly installed
	2. Service existed before and is set to start automatically
	3. Service existed before, is set to start manually, but was running before new installation