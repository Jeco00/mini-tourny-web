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
			.when("/events/:eventId",{
				templateUrl: 'eventMain.html',
				controller: 'EventCtl',
				controllerAs: "eventCtl"
			});
		
		
	}).run(function($location){
		$location.path('/welcome');	
	});