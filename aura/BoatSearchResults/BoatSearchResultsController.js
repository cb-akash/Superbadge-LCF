({
    doInit : function(component, event, helper) {
        //On Init call helper
        component.set('v.ready', false);
		helper.onSearch(component, event, helper);
	},
})