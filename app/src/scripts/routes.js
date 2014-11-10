define(['angular','ngRoute'], function (angular) {
	'use strict';
	angular.module('routes',['ngRoute'])
  .config(['$routeProvider','$locationProvider', function ($routeProvider,$locationProvider) {
	    $routeProvider.when('/home',
        {
          templateUrl: '/app/views/home.html',
          controller: 'rootController'
        })
      .when('/list',
        {
          templateUrl: '/app/views/list.html',
          controller: 'listController'
        })
      .otherwise(
        {
          redirectTo: '/home'
        });

      //$locationProvider.html5Mode(true); 

	}]);
});