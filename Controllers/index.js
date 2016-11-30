var app = angular.module('app', ['ui.bootstrap']);

app.controller('ctrl', function($scope, $interval, $http){
	$scope.json = function () {
		return "toto";
	}
	$interval(function () {
		alert("Salut");
	}, 1000);
});
