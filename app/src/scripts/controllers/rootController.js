define(['common/t1'], function (t1) {
  	'use strict';

    return function ($scope, UserService) {
        $scope.name = UserService.getUser();
        $scope.result = t1.sumFun(1, 1);
    };
});
