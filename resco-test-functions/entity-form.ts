
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

MobileCRM.UI.EntityForm.onSave(
    function (entityForm) {
        var addressDetail = entityForm.getDetailView("Address");
        var addrItem = addressDetail.getItemByName("address1_line1");
        if (!addrItem.value || addrItem.value.length == 0) {
            // Set the error message on detail item
            addrItem.errorMessage = "Street 1 line is empty.";
            // select second tab (zero-based)
            entityForm.form.selectedViewIndex = 1;
            entityForm.context.errorMessage = addrItem.errorMessage;
            // Return true to apply changed values
            return true;
        }
        // Return false to ignore all changes
        return false;
    },
    true,
    null
);