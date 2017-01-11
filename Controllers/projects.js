

appControllers.controller('projectsCtrl', function($scope, $interval, $http){
  $scope.title = "Projets";
  $scope.listProjects =[
    {
      "title":"Projet n°",
      "id":0,
      "resume":"Description du projet",
      "image":"http://p1.img.cctvpic.com/photoworkspace/contentimg/2016/01/27/2016012716310473095.jpg"
    },
    {
      "title":"Projet n°",
      "id":1,
      "resume":"BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla",
      "image":"http://s11.favim.com/orig/160919/forum-communaute-topic-9808-hd-putlocker-watch-hell-or-high-water-online-full-movie-1080p-Favim.com-4740061.jpeg"
    },
    {
      "title":"Projet n°",
      "id":2,
      "resume":"Description du projet",
      "image":""
    },
    {
      "title":"Projet n°",
      "id":3,
      "resume":"Description du projet",
      "image":""
    },
    {
      "title":"Projet n°",
      "id":4,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":5,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":6,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":7,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":8,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":9,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":10,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":11,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":12,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":13,
      "resume":"Description du projet",
      "image":""
    },{
      "title":"Projet n°",
      "id":14,
      "resume":"Description du projet",
      "image":""
    }
  ];


  $scope.currentPage = 1;
	$scope.totalItems = $scope.listProjects.length;
	$scope.entryLimit = 6; // items per page

});


appControllers.controller('newProjectCtrl', ['$scope', '$http', 'textAngularManager', function newProjectCtrl($scope, $http, textAngularManager) {
    $scope.version = textAngularManager.getVersion();
    $scope.versionNumber = $scope.version.substring(1);
    $scope.orightml = "Page de présentation de votre projet.";
    $scope.htmlcontent = $scope.orightml;
    $scope.disabled = false;

    $scope.createProject = function(project){

    }
}]);
