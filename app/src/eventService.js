angular.module('ddApp')
	.factory('ddEvents', ['$http', '$q',
		function($http, $q){
		
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
					eventId = null;
					//define container maps for enrolled players, and optional groups
					players = Object.create(null);
					teams = Object.create(null);
					flights = Object.create(null);
					standings = [];	
				},
				  
				createEvent: function(){
					reset();
				},
				
				getStandings: function(){
					return standings;
				}
			};
			
			event.reset();//Create empty containers
			return event;
		}]);