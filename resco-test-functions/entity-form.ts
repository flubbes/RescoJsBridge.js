
function saveAndCloseForm() {
    MobileCRM.UI.EntityForm.requestObject(
        function (entityForm) {
            /// <param name="entityForm" type="MobileCRM.UI.EntityForm"/>
            if (entityForm)
                MobileCRM.UI.EntityForm.saveAndClose();
        },
        function (err) {
            MobileCRM.bridge.alert("An error occurred: " + err);
        },
        null
    );
}