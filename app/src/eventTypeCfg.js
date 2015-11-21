angular.module('ddApp')
	.factory('ddEventTypeCfg', ['$http', '$q',
		function($http, $q){
			
			var availableSystems = ["warmachine", "guildBall"];
			
			var systemDetails = {
				warmachine: {
					description: "WARMACHINE & HORDES"
				},
				guildBall: {
					description: "Guild Ball"
				}
			};
			
			var cfg = {
				getSystems: function(){
					//This should really return a promise
					return availableSystems;
				}
				
			};
		}]);