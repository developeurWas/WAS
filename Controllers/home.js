
appControllers.controller('homeCtrl', function($scope, $interval, $http){
  $scope.myInterval = 30000;
  $scope.listImages = [{"img":"../couleur-rose-5.jpg", "id": 0},
  {"img":"../couleur-rose-6.jpg", "id": 1},
  {"img":"../couleur-rose-7.png", "id": 2},
  {"img":"../couleur-rose-8.jpg", "id": 3}];

});
