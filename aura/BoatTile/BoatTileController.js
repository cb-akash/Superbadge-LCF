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

        //Get the boat tile selected
        var boat = component.get('v.boat')
        //Create an instance of the BoatSelected event. Pass boat as a parameter. Fire the event.
        var BoatSelectedEvent = $A.get('e.c:BoatSelected');
        BoatSelectedEvent.setParams({
            boat : boat,
        });
        BoatSelectedEvent.fire();
    },
})