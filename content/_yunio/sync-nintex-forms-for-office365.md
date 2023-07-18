---
layout: page
title: Sync Nintex Forms for Office 365 with SAP using JavaScript
description: Sync Nintex Forms for Office 365 with SAP using JavaScript
permalink: /:collection/:path
weight: 39
progressstate: 5
---

This article shows how to synchronize a Nintex form for Office 365 in near-real time with SAP using custom java scripts.<br>
In the following scenario, SAP data is made available in a Nintex form for data selection in dropdown lists using JavaScript and REST services.

### About 

This article leads you through all necessary steps to set up the following process:
- when an SAP material number is entered in an input field, the possible hits are displayed in a dropdown list.
- If a material is selected in the drop-down list, the material text is displayed in a text field.
- When the input is confirmed, the selected material is written to SharePoint.


### Setting up the Nintex Form

In Nintex for Office 365 you can create forms that allows users to create or customize SharePoint Online lists.
For more information, see [Nintex Documentation: Office 365 Forms](https://help.nintex.com/en-US/office365/Forms/DesignForms.htm).

1. Create a new SharePoint custom list with a column "Material".<br>
![nintex-sharepoint](/img/contents/yunio/nintex-sharepoint.png){:class="img-responsive" }
2. Click **[Nintex Forms]** to create a new Nintex form for the SharePoint custom list.<br>
![nintex-office-design](/img/contents/yunio/nintex-office-design.png){:class="img-responsive" }
3. Define the following text fields:
- the field "Material" of type *Single Line Textbox* is the input field that contains the material number. 
- the field "Suggested Materials" of type *Choice* displays the possible hits for the material number in a dropdown list. 
- the third field "Selected Material" of type *Single Line Textbox* displays the material text of the selected material.
4. Open the advanced settings of the field "Material" and set **Store Client ID in JavaScript Variable** to *Yes*.
5. In the field **Client ID JavaScript variable name** enter the variable name "inputMaterial".<br>
![nintex-office-material-number](/img/contents/yunio/nintex-office-material-number.png){:class="img-responsive" }
6. Click **[Save]**.
7. Open the general settings of the field "Suggested Materials" and set **Display format** to *Drop down list*.
8. In the field **Choices** enter "no matches". This input will be overwritten via JavaScript.
9. Open the advanced settings of the field "Suggested Materials" and set **Store Client ID in JavaScript Variable** to *Yes*.
10. In the field **Client ID JavaScript variable name** enter the variable name "selectMaterial".<br>
![nintex-office-dropdown](/img/contents/yunio/nintex-office-dropdown.png){:class="img-responsive" }
11. Click **[Save]**.
12. Open the general settings of the field "Selected Material" and set **Connected to** to the SharePoint column *Material*.
13. Open the advanced settings of the field "Selected Material" and set **Store Client ID in JavaScript Variable** to *Yes*.
14. In the field **Client ID JavaScript variable name** enter the variable name "outputMaterialId".<br>
![nintex-office-output](/img/contents/yunio/nintex-office-output.png){:class="img-responsive" }
15. Add a **[Save]** and **[Cancel]** button to the form.

### Integrating JavaScript Code

This example uses the following JavaScript to call a yunIO service "MAKTService" that reads the material number and the material long text from the SAP table MAKT:

```java
document.addEventListener("DOMContentLoaded", async () => {
    let yunioClient = await import(
        "https://static.theobald-software.com/theobald.yunio.client.js/dist/theobald.yunio.client.js"
    );

    yunioClient.TheobaldYunioClient.initializeLiveCombobox({
        $: NWF$,
        controls: {
            inputId: inputMaterial,
            selectId: selectMaterial,
            outputId: outputMaterialId
            /*descriptionId: outputMaterialDescription*/
            /*buttonId: 'buttonId'*/
        },
        tableSettings: {
            serviceName: "MAKTService",
            idField: "MATNR",
            textField: "MAKTX",
            language: "E"
        },
        connection: {
            url: "https://yunio.example.com:8175/",
            /* future apiKey */
            username: prompt("yunIO username", ""),
            password: prompt("yunIO password", "")
        }
    });
});
```

{: .box-note }
**Note:** To use this script in your application, replace the connection URL. 
If your service has a different name and / or uses different parameters, edit and the table settings accordingly.

Follow the steps below to integrate the script in your Nintex Form:

1. Open the settings of the Nintex form and copy the JavaScript into the field **Custom JavaScript**.
![nintex-office-java-code](/img/contents/yunio/nintex-office-java-code.png){:class="img-responsive" }
2. Click **[Save]**.


### Running the Nintex Form
1. Preview or publish the Nintex form.
2. When promted, enter your yunIO username and password to connect.
3. Enter a material number. The hits for the entry are read from SAP and displayed in the dropdown list "Suggested Materials".<br>
![nintex-office-selection](/img/contents/yunio/nintex-office-selection.png){:class="img-responsive" }
4. If you select a material from the list, the long text for this material is displayed in the field "Material".
5. Click **[Save]** to write the selected material to your SharePoint custom list.


******
#### Related Links:
- [yunIO Online Help](https://help.theobald-software.com/en/yunio/)
- [Nintex Documentation: Office 365 Forms](https://help.nintex.com/en-US/office365/Forms/DesignForms.htm)
- [Theobald Software GitHub: JavaScript library for REST](https://github.com/theobald-software/static.theobald-software.github.io/tree/main/theobald.yunio.client.js)
