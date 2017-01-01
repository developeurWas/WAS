var app = angular.module('app', ['ui.bootstrap', 'ngTouch', 'ngAnimate']);

app.controller('ctrl', function($scope, $interval, $http){
	$scope.json = function () {
		return "toto";
	}
});
