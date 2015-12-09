angular.module('ddApp')
	.controller('EventCreationCtl', ['ddEvents', '$location', 'ddEventTypeCfg', 'ddConstants',
		function(ddEvents, $location, ddEventTypeCfg, ddConstants){
			
			ctl = this;
			
			ctl.eventDetails = {
				id: null,
				name: null,
				desc: null,
				eventDate: null,
				startTime: null,
				system: null,
				
				//location data
				locName: null,
				address: null
			}
			//General event data fields
			
			
			
			
			ctl.saveEvent = function(){
				ddEvents.createEvent(ctl.eventDetails).then(
					function(id){
						$location.path(ddConstants.MY_EVENTS_PATH);
					}, 
					function(){
						console.error("Event Creation Failed");
					}
				);
				
			};
			
			ctl.startEvent = function(){
				ddEvents.createEvent(ctl.eventDetails).then(
					function(id){
						$location.path(ddConstants.EVENT_PATH + id);
					}, 
					function(){
						console.error("Event Creation Failed");
					}
				);
				
			};
			
			
			
		}
	]);