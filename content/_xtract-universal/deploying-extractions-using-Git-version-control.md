---
layout: page
title: Deploying Extractions Using Git Version Control
description: Deploying Extractions Using Git Version Control
permalink: /:collection/:path
weight: 60
---
### About

The following article describes a versioning of newly developed extractions using Git and the Git Client Fork as an example. 

With this implementation, new developments on a test environment of Xtract Universal can be transferred to the productive system and synchronized. 

The implementation of various Git security techniques ensures an error-free transfer without compromising the production system.


**Target audience:** Xtract Universal customers using a production as well as development environment for SAP data replications.

### Prerequisites

- Technically separate development and production environment of Xtract Universal.
- Xtract Universal developers have [read-only access](https://help.theobald-software.com/en/xtract-universal/security/access-management) to the Xtract Universal production system.
- Git client installed locally on the development environment and the production environment, [Fork](https://fork.dev/home) as an example.
- The Xtract Universal installations must have the same release status on the different servers.


### General Overview

1. Creation of a new Git repository according to instructions. The .git folder is created in the following path - `C:\Program Files\XtractUniversal\config` - of the Xtract Universal installation(s).
![Git Folder Repository](/img/contents/git_Folder.png){:class="img-responsive"}
2. The created Xtract Universal Config Repo must be cloned on all local development environments, see sample screenshot:
![Clone Repository](/img/contents/clone_repository_fork.png){:class="img-responsive"}
3. Create development branches to separate and monitor changes.

{: .box-tip} 
**Tip:** The initial initialization of the Git version control requires an empty config folder. For this reason, the existing config folder must first be renamed and then filled with the configuration files.

Git branches then enable the technical separation of the production repository from the local development environments. 

Appropriate security techniques such as Pull requests and Git user rights allow the changes to be checked and corrected in advance. 

New developments cannot cause fundamental damage to the data load of the productive landscape with this technical approach.

Versioning and possible retractions of changes (commits) can be implemented without any problems. 

{: .box-note}
**Note:** This scenario can also be implemented with Azure DevOps and Git. For more details, please refer to the official [Microsoft Documentation](https://docs.microsoft.com/en-us/azure/devops/repos/?view=azure-devops).



****
#### Releated Link
- [Manual Migration to a Different Machine](https://help.theobald-software.com/en/xtract-universal/advanced-techniques/backup-and-migration#migration-to-a-different-machine)
- [Getting Started - About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git Basics - Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Git Branching - Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [Distributed Git - Distributed Workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- [Git Basics - Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)




