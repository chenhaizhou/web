define(['angular',
	'./listController',
	'./rootController',
	'services/services'
], function (angular, listController, rootController) {
  'use strict';
  return angular
  			.module('controllers', [])
  			.controller('listController',['$scope', 'ListService', 'MemberService', listController])
			.controller('rootController', ['$scope', 'UserService', rootController]);
});
