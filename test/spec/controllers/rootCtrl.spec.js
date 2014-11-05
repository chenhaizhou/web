define(['app','ngMock','controllers/rootController'],function(){
	
    describe('RootCtrl',function(){

    	var scope, controller;

    	beforeEach(module('controllers'));
 
	    beforeEach(inject(function ($controller, $rootScope) {

	        controller = $controller;
	        scope = $rootScope.$new();

	        controller('RootCtrl', {
	            $scope: scope
	        });

	    	console.log(scope.name);

	    }));

    	it('name is null?',function(){
    		
    		expect(scope.name).toBeUndefined();
    	});

    });

});