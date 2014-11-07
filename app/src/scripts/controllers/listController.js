define(['app'],function (controllers){
	'use strict';
	controllers.controller('listController',['$scope', function ($scope){
		$scope.listName = ['To Do','Doing','Q&A','Done'];
	}]);
});