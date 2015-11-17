angular.module('ddApp')
	.controller('navCtl', ['$mdSidenav',
	function($mdSidenav){
		this.toggleMenu =function(){
			$mdSidenav('left')
			.toggle()
			.then(function(){console.log('stuff')});
		}
	}]);