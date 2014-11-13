define(['common/t1'], function (t1) {
  	'use strict';

    return function ($scope, UserService) {
        $scope.name = UserService.getUser();
        $scope.result = t1.sumFun(1, 1);

        var vm;

        $scope.aaa = function(){
        	$scope.bbb = true;
        	vm = $scope.vm = {};
        	console.log(vm);
        };

        $scope.msgEvent = function(){
        	console.log($scope,vm.msgg);
        };
    };
});
