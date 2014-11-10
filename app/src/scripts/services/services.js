define(['angular','./userService'], function(angular, UserService) {
  'use strict';
  return angular.module('services', [])
  .factory('UserService', UserService);
});
