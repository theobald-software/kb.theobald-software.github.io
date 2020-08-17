---
layout: releaseNotes
---

# Xtract Universal 4.16.2

This fixes a timeout issue in QlikSense when no data arrived for 5 minutes on the initial request. QlikSense now respects the *Timeout* setting of the REST connection instead.

**Note**: This fix might require you to adjust this setting for existing REST connections to XU as the default is 30 seconds. 