angular.module('ddApp')
	.factory('ddEvents', ['$http', '$q', 'ddEventTypeCfg',
		function($http, $q, ddEventTypeCfg){
		
			this.standings = [];
			
			var event = {
				eventId: null,
				players: Object.create(null),
				teams: Object.create(null),
				flights: Object.create(null),
				
				getOwnedEvents: function(){
					var deferred = $q.defer();
					deferred.resolve([]);
					return deferred;
				},
				
				reset: function() {
					
				},
				  
				createEvent: function(eventDetails){
					resetEvent();
					return 1;
				},
				loadEvent: function(eventId){
					resetEvent();
					var deferred = $q.defer();
					deferred.resolve("loaded!");
					return deferred;
				},
				getStandings: function(){
					return standings;
				}
			};
			
			function resetEvent(){
				eventId = null;
				//define container maps for enrolled players, and optional groups
				players = Object.create(null);
				teams = Object.create(null);
				flights = Object.create(null);
				standings = [];	
			}
			event.reset();//Create empty containers
			return event;
		}]);