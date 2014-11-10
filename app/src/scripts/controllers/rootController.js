define(function () {
  	'use strict';

    return function($scope, UserService) {
        $scope.name = UserService.getUser();
    };
});
