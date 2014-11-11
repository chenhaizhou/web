define(['angular','./userService','./listService'], function(angular, UserService, ListService) {
  'use strict';
  return angular.module('services', [])
  .factory('UserService', UserService)
  .factory('ListService', ['$http', '$q', ListService]);
});
