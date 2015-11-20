angular.module('ddApp')
	.controller('EventListCtl', ['ddEvents',
		function(ddEvents){
			ddEvents.getOwnedEvents(function(events){
				this.myEvents = events;
			});
		}
	]);