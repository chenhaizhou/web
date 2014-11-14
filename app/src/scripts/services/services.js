define(['angular','./userService','./listService', './memberService'], function(angular, UserService, ListService, MemberService) {
  'use strict';
  return angular.module('services', [])
  .factory('UserService', UserService)
  .factory('ListService', ['$http', '$q', ListService])
  .factory('MemberService', ['$http', '$q', MemberService]);
});
