angular.module("musiteca").config(function ($routeProvider) {

    /**
	
	$routeProvider.when("/artistasFavoritos",  {
		templateUrl: "view/artistasFavoritos.html",
		controller: "musitecaCtrl"
	});

	$routeProvider.when("/playlist",  {
		templateUrl: "view/playlist.html",
		controller: "playlistsCtrl"
	});
    **/

	$routeProvider.otherwise({redirectTo: "/"});
});
