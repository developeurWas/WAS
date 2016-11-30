var app = angular.module('app', ['angular-carousel', 'ui.bootstrap']);

app.controller('accueil', function($scope, $interval, $http){
  $scope.listImages = [{"img":"../couleur-rose-5.jpg", "id": 0},
  {"img":"../couleur-rose-6.jpg", "id": 1},
  {"img":"../couleur-rose-7.png", "id": 2},
  {"img":"../couleur-rose-8.jpg", "id": 3}];

});
