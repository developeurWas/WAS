

appControllers.controller('projectsCtrl', function($scope, $interval, $http, $sce){
  $scope.title = "Projets";
  $scope.state = 'navigation';
  $scope.selectedproject;
  $scope.listProjects =[
    {
      "authorname":"",
      "authormail":"",
      "publishauthor":"",
      "title":"",
      "id":-1,
      "resume":"",
      "pres": "",
      "image":"",
      "donationobj":0
    }];
  var socket = io.connect('http://localhost:1111');
  socket.emit('project');
  socket.on('projects', function(proj) {
    $scope.listProjects.push(proj);
    $scope.$apply();
  });

  $scope.view = function(project){
    $scope.state = 'view';
    $scope.selectedproject = project;
  };

  $scope.returnToNavigation = function(){
    $scope.state = 'navigation';
  };
  /*$scope.currentPage = 1;
	$scope.totalItems = $scope.listProjects.length;
	$scope.entryLimit = 3; // items per page*/

  $scope.renderHtml = function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  };

});


appControllers.controller('newProjectCtrl', ['$scope', '$http', '$uibModal', 'textAngularManager', function newProjectCtrl($scope, $http, $uibModal, textAngularManager) {
    $scope.version = textAngularManager.getVersion();
    $scope.versionNumber = $scope.version.substring(1);
    $scope.orightml = "Page de présentation de votre projet.";
    $scope.disabled = false;
    $scope.projectform;

    $scope.createProject = function(projectform){
        if($scope.projectform.$valid){
          var modalInstance = $uibModal.open({
            templateUrl: 'popupnewproject.html',
            controller: 'PopupCont',
          });
          window.location = "#/projects";
        }
        /*
          Implémenter le controle des champs du formulaire et l'appel à la fonction mail
          s'il est valide
        */

        /*$http.post("../script/project-form.php", $scope.project)
           .success(function(data){
               //$scope.tasks = data;
               console.log(data);
        });*/
        /*$http({
            method  : 'POST',
            url     : './script/project-form.php',
            data    : $.param($scope.project),  //param method from jQuery
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
        }).success(function(data){
            console.log(data);
            if (data.success) { //success comes from the return json object
                $scope.submitButtonDisabled = true;
                $scope.resultMessage = data.message;
                $scope.result='bg-success';
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = data.message;
                $scope.result='bg-danger';
            }
        });*/
    };
}]);

appControllers.controller('PopupCont', ['$scope','$uibModalInstance',function ($scope, $uibModalInstance) {
$scope.close = function () {
$uibModalInstance.dismiss('cancel');
};
}]);
