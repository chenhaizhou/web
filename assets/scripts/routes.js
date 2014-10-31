define(['app','controllers/rootController'], function (app) {
	'use strict';

	return app.config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
	    $routeProvider.when('/home',
        {
          templateUrl: '/assets/partials/home.html',
          controller: 'RootCtrl'
        })
      .otherwise(
        {
          redirectTo: '/home'
        });

      //$locationProvider.html5Mode(true); 

	}]);
});