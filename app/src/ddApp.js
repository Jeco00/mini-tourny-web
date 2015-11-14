angular.module('ddApp', ['ngMaterial'])
	.config(function($mdThemingProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('brown')
            .accentPalette('red');
	
	});