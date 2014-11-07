define(['app','ngMock','routes'],function (app){
	'use strict';
	describe('Routes tests',function(){

		beforeEach(module('app'));
		var localtion, route, rootScope;

		beforeEach(inject(function (_$location_, _$route_, _$rootScope_){
			location = _$location_;
			route = _$route_;
			rootScope = _$rootScope_;
		}));

	
		describe('index route',function(){

			beforeEach(inject(function ($httpBackend){
				$httpBackend.expectGET('views/home.html').respond(200,'main HTML');
			}));

			it('should load home',function(){
				location.path('/home');
				rootScope.$digest();
				expect(route.current.controller).toBe('rootController');
			});
		});

	});
});