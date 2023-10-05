---
layout: releaseNotes
---

# Xtract Universal 5.6

Config files need to be [converted when upgrading.](https://help.theobald-software.com/en/xtract-universal/introduction/installation-and-update#upgrading-major-releases---configconverter)

There is a [knowledge base article](https://kb.theobald-software.com/cubes/bwcube-component) with some general information about the new component.

## General improvements
- Introduction of a new column name style "Text" that replaces the "Use description for columns" setting. Column names might not be unique with this style. Use at own risk.
- Definition of runtime parameters as known from other extractors for manual filters and BEx variables
- Introduced new runtime parameter type List

## Reworked MDX Cube extraction mode
Previous extractions will be upgraded by our converter tool (See breaking changes)
		
- Updated internal structure with improvements to allow implementation of new features in the future
- Improved extraction performance
- Various minor bug fixes
- New and improved GUI
- MDX Cube extraction preview in Designer
			
## New BICS Cube extraction mode (BETA)
- Replaces the previous BEx 3.x mode
- Extraction of Infocubes and Queries using the BICS interface
- This mode is still in beta. Use it with caution. Multiple breaking changes until final release are possible and likely
- For using the BICS mode the user needs the [permissions as described in our knowledge base](https://kb.theobald-software.com/sap/authority-objects-sap-user-rights#bw-query--bw-cube)
	
## Breaking changes
- Custom MDX mode not supported and will not be converted. Please contact our support if you are using this mode
- BEx 3.x mode not supported and will not be converted. Please contact our support if you are using this mode
- Column order and naming might change
	- Corner case: combination of column name style TextAndCode or CodeAndText and "Use description for columns" setting will set column name style to Text
- Converted extractions will work as before as long as they stay unchanged	
	- Making changes to converted extractions requires a metadata refresh. After editing the new naming scheme will be used
- Non-Unicode systems may not be compatible with the new cube component

## Known issues
- Renaming already assigned list parameters is not yet supported and will cause issues
- BICS metadata retrieval may fail on some systems. Please send in traces if you encounter issues with metadata retrieval