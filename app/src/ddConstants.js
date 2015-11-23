angular.module('ddApp')
	.service('ddConstants',
		function(){
			this.HOME_PATH = "/welcome";
			this.MY_EVENTS_PATH = "/myEvents";
			this.NEW_EVENT_PATH = "/newEvent/";
			this.EVENT_PATH = "/toEvents/";
		});