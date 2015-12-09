angular.module('ddApp')
	.factory('ddEvents', ['$http', '$q', 'ddEventTypeCfg','ddConstants',
		function($http, $q, ddEventTypeCfg, ddConstants){
		
			this.standings = [];
			
			var event = {
				eventId: null,
				players: Object.create(null),
				teams: Object.create(null),
				flights: Object.create(null),
				
				getOwnedEvents: function(){
					return $q(function(resolve, reject){
						var eventsJson = localStorage.getItem(ddConstants.OWNED_EVENTS);
						if(eventsJson != null){
							try{
								var events = angular.fromJson(eventsJson);
								resolve(events);
							} catch(err){
								reject(err);
							}
							return;
						} else {
							resolve([]);
						}
					});
				},
				
				reset: function() {
					
				},
				  
				createEvent: function(eventDetails){
					return $q(function (resolve, reject){
						//REST call to create event in back end
						//Failing backend access save to local
						event.getOwnedEvents().then(function(events){
							//Events loaded
							eventDetails.id = events.length+1;
							events.push(eventDetails);
							localStorage.setItem(ddConstants.OWNED_EVENTS, angular.toJson(events));
							console.log("item set");
							resolve(eventDetails.id);
						}, function(err){
							//loading error
							console.error("Could not load current Events");
							reject(0);
						})
					});
				},
				loadEvent: function(eventId){
					resetEvent();
					var deferred = $q.defer();
					deferred.resolve("loaded!");
					return deferred.promise;
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