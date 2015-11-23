angular.module('ddApp', ['ngMaterial', 'ngRoute'])
	.config(function($mdThemingProvider, $routeProvider){
		//Configure application theme
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue')
            .accentPalette('blue-grey');
		
		//Configure application routes
		$routeProvider
			.when("/welcome", {
				templateUrl: 'welcome.html',
				controller: 'HomeCtl',
				controllerAs: "home"
			})
			.when("/myEvents",{
				templateUrl: 'eventList.html',
				controller: 'EventListCtl',
				controllerAs: 'ctl'
			})
			.when("/newEvent/", {
				templateUrl: 'newEvent.html',
				controller: 'EventCreationCtl',
				controllerAs: "ctl"
			})
			.when("/toEvents/:eventId",{
				templateUrl: 'toMain.html',
				controller: 'TOCtl',
				controllerAs: "ctl"
			})
			.when("/events/not_found",{
				templateUrl: 'eventNotFound.html'
			});
		
		
	}).run(function($location){
		$location.path('/welcome');	
	});