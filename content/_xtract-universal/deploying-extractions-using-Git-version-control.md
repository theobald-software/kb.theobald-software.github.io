---
layout: page
title: Deploying Extractions Using Git Version Control
description: Deploying Extractions Using Git Version Control
permalink: /:collection/:path
weight: 35
---

{: .box-warning}
**Warning: Deprecated articles** <br>
You are using the old version of the knowledge base for Xtract Universal.<br>
Make sure to use the knowledge base within the new [HelpCenter for Xtract Universal](https://helpcenter.theobald-software.com/xtract-universal/knowledge-base/).


### About

The following article describes a versioning of newly developed extractions using [Git](https://gitforwindows.org/) and (optionally) the Git client [Fork](https://fork.dev) as an example.

With this implementation, new developments on a test environment can be transferred to the productive system and synchronized.

The implementation of various [Git](https://gitforwindows.org/) security techniques ensures an error-free transfer without compromising the production system.

{: .box-note}
**Note:** Target audience: Customers who use a production and a development environment for SAP data replications.

### Prerequisites

- Technically separate development and production environment.
- Developers have [read-only access](https://help.theobald-software.com/en/xtract-universal/security/access-management) to the Xtract product on the production system.
- Git client installed locally on the development environment and the production environment, e.g., [Fork](https://fork.dev).
- The Xtract product installations must have the identical release version on the servers.

### When setting up a new environment

1. Create a new Git Repository. How to do this depends on the technology you use, e.g.:
   - [GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo)
   - [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-new-repo?view=azure-devops)
   - [Git-scm](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
2. Clone the repository into the installation directory of your Xtract product, e.g., `C:\Program Files\XtractUniversal`.
   - The repository directory **must** be named `config`!
3. Use dedicated branches for test and development environments and the main branch for the production system.
  
{: .box-tip} 
**Tip:** The initial initialization of the Git version control requires an empty `config` folder. For this reason, the existing `config` folder must first be renamed and then filled with the configuration files.

### When setting up an existing environment

1. Create a new Git Repository. How to do this depends on the technology you use, e.g.:
   - [GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo)
   - [Azure DevOps](https://docs.microsoft.com/en-us/azure/devops/repos/git/create-new-repo?view=azure-devops)
   - [Git-scm](https://git-scm.com/book/en/v2/Git-on-the-Server-Setting-Up-the-Server)
2. Initialize a local repository in the installation directory of your Xtract product, e.g., `C:\Program Files\XtractUniversal\config` with `git init`.
   - the `config` directory should look like this
   ![.git Folder-Repository](/img/contents/git_Folder.png){:class="img-responsive"}
3. Attach the remote repository to your local one with `git remote add origin [ssh/https]://git-server-address/path/to/repo.git`.
4. Commit the current `config` folder.

By using the main branch for the production environment and development branches for the development or test environments the former is separated from the latter.

Applying appropriate and established techniques such as [pull requests](https://www.git-scm.com/docs/git-request-pull) and Git user rights allows the changes to be checked and corrected in advance.

New developments can **not** cause fundamental damage to the data load of the productive landscape with this approach.

This architecture automatically enables quick and easy rollbacks of changes by reverting them in Git and is agnostic towards the use of containers (such as Docker).

{: .box-note}
**Note:** This scenario can also be implemented with Azure DevOps and Git. For more details, please refer to the official [Microsoft Documentation](https://docs.microsoft.com/en-us/azure/devops/repos/?view=azure-devops).

****

#### Releated Link

- [GitForWindows Download](https://gitforwindows.org/)
- [Manual Migration to a Different Machine](https://help.theobald-software.com/en/xtract-universal/introduction/backup-and-migration#migration-to-a-different-machine)
- [Getting Started - About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
- [Git Basics - Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
- [Git Branching - Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
- [Distributed Git - Distributed Workflows](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows)
- [Git Basics - Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)

