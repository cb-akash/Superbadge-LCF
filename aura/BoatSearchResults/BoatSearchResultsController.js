({
    doSearch : function (component, event, helper) {
        component.set('v.ready', false);
        //Get boatTypeId from search method params
        var params = event.getParam('arguments');
        //If params exist set boatTypeId in aura attribute and call helper onSearch method
        if (params) {
            var boatTypeId = params.boatTypeId;
            component.set('v.boatTypeId', boatTypeId);
            helper.onSearch(component, event, helper);
        }
    },
})