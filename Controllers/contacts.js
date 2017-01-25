appControllers.controller('contactCtrl', function($scope, $sce){

  $scope.sendMessage = function(contactform){
    
  };

  $scope.valideURL = function(src){
    return $sce.trustAsRessourceUrl(src);
  }
})
