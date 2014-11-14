define(['angular','./nameFilter'], function(angular,nameFilter) {
  'use strict';
  return angular.module('filters', [])
  .filter('nameFilter',[nameFilter]);
});
