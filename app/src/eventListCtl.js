angular.module('ddApp')
	.controller('EventListCtl', ['ddEvents', 'ddEventTypeCfg',
		function(ddEvents, ddEventTypeCfg){
			ddEvents.getOwnedEvents(function(events){
				this.myEvents = events;
			});
		}
	]);