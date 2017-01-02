//Déclaration de notre application, ainsi que ses dépendances aux autres modules, nommée
//puzzleProjectApp
var puzzleProjectApp = angular.module('puzzleProjectApp',
	[
		'ui.bootstrap', 	//Angular-ui-bootstrap
		'ngTouch',
		'ngAnimate',
		'ngRoute',
		'ngSanitize',
		'ngResource',
		'appControllers'	//Module contenant nos controlleurs
	]
);

//Configuration de l'application
puzzleProjectApp.config(['$routeProvider',
    function($routeProvider) {

        //Configuration du système de routage
        $routeProvider
				.when('/home',	//Pour href="#/home"
				{
            templateUrl: 'home.html',	//Template de la page à afficher
            controller: 'homeCtrl'	//Controleur correspondant au template
        })
        .otherwise({
          redirectTo: '/home'		//Chemin par défaut
        })
    }
]);

//Déclaration du module contenant nos controleurs
var appControllers = angular.module('appControllers', []);

/*app.controller('ctrl', function($scope, $interval, $http){
	$scope.json = function () {
		return "toto";
	}

});*/
