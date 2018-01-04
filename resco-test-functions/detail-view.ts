MobileCRM.UI.EntityForm.requestObject(
    function (entityForm) {
    	/// <param name='entityForm' type='MobileCRM.UI.EntityForm'/>
    	var detailView = entityForm.getDetailView("General");
    	var linkItem = detailView.getItemByName("SaveLink");
    	// ...
    }, MobileCRM.bridge.alert, null);