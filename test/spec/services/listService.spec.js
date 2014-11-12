define(['services/listService', 'ngMock'],function (listService){
	'use strict';
	describe('list services', function(){
		var service, $httpBackend;

		beforeEach(inject(function ($http, $q, _$httpBackend_){
			$httpBackend = _$httpBackend_;
			service = listService($http, $q);
		}));

		it('should list get success',function(){
			$httpBackend.whenGET('/json/list.json').respond([{
				id:1,
				name: '2'
			}]);

			service.getList().then(function (data) {
				expect(data.length).toEqual(1);
			});

			$httpBackend.flush();
		});

	});
});