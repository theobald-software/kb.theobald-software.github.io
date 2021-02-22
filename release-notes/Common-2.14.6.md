---
layout: releaseNotes
---

##Theobald.Common 2.14.6
- Introduced new WPF window based messaging system, which allows the displaying of message windows always on screen's top most position, overlapping all current opened windows. 
- The messages are displayed always on the center of the screen
- No owner parameter is needed, as it considers always the current active window for it.
- All calls can be done through TheoMessageHelper.
- MessageBoxHelper is still available, but was marked as obsolete.