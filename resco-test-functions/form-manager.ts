const relationShip = <MobileCRM.Relationship>{};
const editedAcount = <MobileCRM.DynamicEntity>{};
MobileCRM.UI.FormManager.showNewDialog(
    "contact",
    relationShip, {
        "@initialize": { // force the form to pre-fill certain fields
            telephone1: editedAcount.properties.telephone1, // new contact will have the same phone as account
            address1_line1: editedAcount.properties.address1_line1, // ... and address too
            address1_city: editedAcount.properties.address1_city
        },
        // These props will be passed to all iFrames on the contact form which is being opened
        iFrameOptions: {
            doNotRequirePhone: true
        }
    }
);