angular.module('ddApp')
	.controller('EventListCtl', ['ddEvents', 'ddEventTypeCfg',
		function(ddEvents, ddEventTypeCfg){
			
			var ctl = this;
			ddEvents.getOwnedEvents().then(
				function(events){
					ctl.events = events;
					console.log(ctl.events.length);
				},
				function(err){
					console.log(err);
				}
			);
		}
	]);