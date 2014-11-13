define(['angular','./ngbkFocus'], function (angular, ngbkFocus) {
  'use strict';
  return angular.module('directives', [])
  		.directive('ngbkFocus', ['$rootScope', ngbkFocus]);
});
