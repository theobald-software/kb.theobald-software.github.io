---
layout: page
title: When loading packages from an older version of SSIS into a newer version of SSIS an error occurs
description: When loading packages from an older version of SSIS into a newer version of SSIS an error occurs
permalink: /:collection/:path
homepage-weight: 18
---

Please also have a look in our [OnlineHelp](https://help.theobald-software.com/en/) for further information.

**Error:**

When loading packages from an older version of SSIS (e.g. SSIS 2008R2) into a newer version of SSIS (e.g. SSIS 2014) I get the following error:

*The component metadata for "Xtract DeltaQ" could not be upgraded to the newer version of the component. The PerformUpgrade method failed.*

**Reason:**

This Exception occurs when trying to load an older SSIS package into a newer version of SSIS.

**Solution:**

Please use the conversion preparer before loading the package into the newer version of SSIS:



You can find details in our Onlinehelp following this link:

[http://help.theobald-software.com/Xtract-IS-EN/default.aspx?pageid=vs-2005-2008-migration](http://help.theobald-software.com/Xtract-IS-EN/default.aspx?pageid=vs-2005-2008-migration)