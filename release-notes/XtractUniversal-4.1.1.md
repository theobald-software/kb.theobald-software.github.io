---
layout: releaseNotes
---

#### Installation
Move the **.pqx** file to **%userprofile%\Documents\Power BI Desktop\Custom Connectors**. You can remove the **.mez** file if it exists.


#### Trusting the connector
Microsoft's documentation on how to trust connectors for Power BI can be found [here](https://docs.microsoft.com/en-us/power-bi/desktop-trusted-third-party-connectors).
The certificate thumbprint can be found in the *thumbprint.txt* file in the *powerbi* subdirectory.

Alternatively, you can run the *trust-connector.ps1* script as administrator to automatically modify the registry on your machine.