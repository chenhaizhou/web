define(['app','routes'],function(){
	'use strict';
	xdescribe('Routes tests',function(){

		beforeEach(module('app'));
		var localtion, route, rootScope;

		beforeEach(inject(function(_$rootScope_,_$localtion_,_$route_){
			localtion = _$localtion_;
			route = _$route_;
			rootScope =_$rootScope_;
		}));

		

		describe('index route',function(){

			beforeEach(inject(function($httpBackend){
				$httpBackend.expectGET('partials/home.html').respond(200,'main HTML');
			}));

			it('home',function(){
				localtion.path('/');
				rootScope.$digest();
				expect(route.current.controller).toBe('RootCtrl');
			});
		});

	});
});