({
    onBoatClick : function (component, event, helper) {
        //Get the Id from the boat tile selected
        var boatId = component.get('v.boat').Id;
        //Create an instance of the BoatSelect event. Pass boatIs as a parameter. Fire the event.
        var BoatSelectEvent = component.getEvent('BoatSelect');
        BoatSelectEvent.setParams({
            boatId : boatId,
        });
        BoatSelectEvent.fire();
    },
})