define(['app','services/userService'],
  function (controllers) {
  	'use strict';
    controllers.controller('rootController', ['$scope', 'UserService',
      function($scope, UserService) {
        $scope.name = UserService.getUser();
    }]);
});
