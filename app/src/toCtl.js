angular.module('ddApp')
	.controller('TOCtl', ['$routeParams', 'ddEvents', '$location', 'ddEventTypeCfg',
		function($routeParams, ddEvents, location, ddEventTypeCfg){
			
			ctl = this;
			
			//General event data fields
			ctl.eventName = "";
			ctl.eventDesc = "";
			ctl.eventDate = null;
			ctl.system = "";
			
			
			if($routeParams.eventId == null){
				ddEvents.newEvent();
			} else {
				//Load will pull remote data and return a promise to resolve after get
				ddEvents.loadEvent($routeParams.eventId).then(populateEvent(), eventNotFound());
			}
			
			function populateEvent(){
				//populate the controller from the loaded event
			}
			
			function eventNotFound(){
				//Route to nothing found page
				$location.path("/events/not_found");
			}
		}
	]);