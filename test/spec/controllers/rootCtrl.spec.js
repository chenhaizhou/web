define(['app','ngMock','controllers/rootController'],function (controllers){
	'use strict';
    describe('RootCtrl test',function(){

    	var scope, controller;

    	beforeEach(module('app'));
 
	    beforeEach(inject(function ($controller, $rootScope) {

			scope = $rootScope.$new();
	        controller = $controller('rootController', {
	            $scope: scope
	        });

	    }));

    	it('should have name set',function(){   		
    		expect(scope.name).toBeDefined();
    	});

    	it('should have name is not null',function(){   		
    		expect(scope.name).not.toBeNull();
    	});

    });

});