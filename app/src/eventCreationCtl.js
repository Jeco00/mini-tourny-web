angular.module('ddApp')
	.controller('EventCreationCtl', ['ddEvents', '$location', 'ddEventTypeCfg', 'ddConstants',
		function(ddEvents, $location, ddEventTypeCfg, ddConstants){
			
			ctl = this;
			
			ctl.eventDetails = {
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
				ddEvents.createEvent(ctl.eventDetails);
				$location.path(ddConstants.MY_EVENTS_PATH);
			};
			
			ctl.startEvent = function(){
				var id = ddEvents.createEvent(ctl.eventDetails);
				$location.path(ddConstants.EVENT_PATH + id);
			};
			
			
			
		}
	]);