angular.module('ddApp')
	.controller('EventListCtl', ['ddEvents'
		function(ddEvents){
			this.myEvents = ddEvents.getOwnedEvents();
		}
	]);