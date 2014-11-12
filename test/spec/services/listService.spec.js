define(['services/listService', 'ngMock'],function (listService){
	'use strict';
	describe('list services', function(){
		var service, $httpBackend;

		beforeEach(inject(function ($http, $q, _$httpBackend_){
			$httpBackend = _$httpBackend_;
			service = listService($http, $q);
			
			
			jasmine.getJSONFixtures().fixturesPath='base/json';
			
		}));

		it('should list get success',function(){
			$httpBackend.whenGET('/json/list.json').respond(getJSONFixture('list.json'));

			service.getList().then(function (data) {
				expect(data.length).toEqual(4);
			});

			$httpBackend.flush();
		});

	});
});