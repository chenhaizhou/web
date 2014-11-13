define(function() {
  'use strict';
    return function ($rootScope){

      return {
        restrict: 'A',
        scope: true,
        template: '<a href="javascript:;">aaa{{name}}</a>',
        link: function(scope, element, attrs) {
          console.log(element);
          element[0].focus();
        }
      };
    };
});
