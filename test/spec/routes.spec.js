define(['ngMock','routes'],function (){
	'use strict';
	describe('Routes tests',function(){

		beforeEach(module('routes'));
		var location, route, rootScope;

		beforeEach(inject(function ( _$route_){

			route = _$route_;
		}));

	
		describe('index route',function(){
			
			it('should load home',function(){
				expect(route.routes['/home'].controller).toEqual('rootController');
    			expect(route.routes['/home'].templateUrl).toEqual('/app/views/home.html');

			});

			it('should load list',function(){
				expect(route.routes['/list'].controller).toEqual('listController');
    			expect(route.routes['/list'].templateUrl).toEqual('/app/views/list.html');

			});

			it('when other url should load home',function(){
				expect(route.routes[null].redirectTo).toEqual('/home');

			});
		});

	});
});