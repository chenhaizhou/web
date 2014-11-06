define(['app','ngMock','controllers/rootController'],function(controllers){
	'use strict';
    xdescribe('RootCtrl test',function(){

    	var scope, controller;

    	beforeEach(module('controllers'));
 
	    beforeEach(inject(function(_$controller_, _$rootScope_) {

	        controller = _$controller_;
	        scope = _$rootScope_.$new();

	        controller('RootCtrl', {
	            $scope: scope
	        });

	    }));

    	it('name is null?',function(){
    		
    		expect(scope.name).toBeUndefined();
    	});

    });

});