define(['app'], function (app) {
	'use strict';
	//var app = angular.module('myApp', ["ngRoute"]);
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