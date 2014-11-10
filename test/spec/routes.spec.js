define(['app','ngMock','routes'],function (app){
	'use strict';
	describe('Routes tests',function(){

		beforeEach(module('routes'));
		var localtion, route, rootScope;

		beforeEach(inject(function ( _$route_){

			route = _$route_;
		}));

	
		describe('index route',function(){

			

			
			it('url',function(){
				console.log(route.routes['/home'].controller,'rootController');
				 expect(route.routes['/home'].controller).toEqual('rootController');
    			expect(route.routes['/home'].templateUrl).toEqual('/app/views/home.html');

			});
		});

	});
});