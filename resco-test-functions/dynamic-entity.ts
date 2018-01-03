function updateGPS(accountid, latitude, longitude) {
    var account = new MobileCRM.DynamicEntity("account", accountid);
    var props = account.properties;
    props.address1_latitude = latitude;
    props.address1_longitude = longitude;
    account.save(
        function (error) {
            if (error)
                MobileCRM.bridge.alert("An error occurred: " + error);
            else {
                // callback is called in scope of newly created MobileCRM.DynamicEntity object; thus we can access the data using "this" keyword
                logModification(this.id, this.primaryName);
            }
        }
    );
}

declare function logModification(a, b);

var account = MobileCRM.DynamicEntity.createNew("account");
var props = account.properties;
props.name = "A Bike Store";
props.address1_line1 = "Unknown";
// ...
account.save(
    function (error) {
        if (error)
            MobileCRM.bridge.alert("An error occurred: " + error);
        else {
            // callback is called in scope of newly created MobileCRM.DynamicEntity object; thus we can access the data using "this" keyword
            var newId = this.id;
            var allProps = this.properties;
            rememberNewAccount(newId, allProps.name);
        }
    }
);

declare function rememberNewAccount(a, b);
declare function onAccountDeleted(a);
const accountid = '';
MobileCRM.DynamicEntity.deleteById(
    "account",
    accountid,
    function () {
        onAccountDeleted(accountid);
    },
    function (error) {
        MobileCRM.bridge.alert("An error occurred: " + error);
    }
);

function downloadNoteAttachment(noteId) {
    MobileCRM.DynamicEntity.downloadAttachment("annotation", noteId, function (base64str) {
        /// <param name='base64str' type='String'>parameter contains a string with base64-encoded attachment data.</param>
        var imgElement = document.getElementById("img-result");
        if (imgElement)
            imgElement.setAttribute("src", "data:;base64," + base64str); // set the "src" attribute for out <img> element
    }, MobileCRM.bridge.alert, null);
}

function getAccountData(accountId) {
    /// <param name="account" type="MobileCRM.Reference"/>;
    MobileCRM.DynamicEntity.loadById(
        "account",
        accountId,
        function (entity) {
            /// <param name="entity" type="MobileCRM.DynamicEntity"/>;
            // "entity" argument contains the MobileCRM.DynamicEntity object
            MobileCRM.bridge.alert(JSON.stringify(entity.properties));
        },
        function (error) {
            MobileCRM.bridge.alert("An error occurred: " + error);
        }, null);
}
const accountidid = '';
function loadAccountDocumentBody(accountid) {
    MobileCRM.DynamicEntity.loadDocumentBody("annotation", accountidid, function (base64str) {
        /// <param name='base64str' type='String'>parameter contains a string with base64-encoded attachment data.</param>
        MobileCRM.bridge.alert("Base64String: \n\n" + base64str);
        var imgElement = document.getElementById("img-result");
        if (imgElement)
            imgElement.setAttribute("src", "data:image/jpeg;base64," + base64str); // set the "src" attribute for out <img> element
    }, MobileCRM.bridge.alert, null);
}

function saveAnnotation(filePath, accountReference) {
    ///<param name='filePath' type='String'>path to file for annotation attachment.</param>
    ///<param name='accountReference' type='MobileCRM.Reference'>Reference to account.</param>
    var relationship = new MobileCRM.Relationship("objectid", accountReference);
    MobileCRM.DynamicEntity.saveDocumentBody(null, null, relationship, filePath, null, function (annotation) {
        ///<param name='annotation' type='MobileCRM.Reference'>Reference to nelwy created annotation.</param>

        MobileCRM.bridge.alert(annotation.entityName + " '" + annotation.primaryName + "' successfully saved.");
    }, MobileCRM.bridge.alert, null);
}