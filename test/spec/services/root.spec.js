define(['ngMock', 'services/userService'],function(){

    describe('User Service', function () {
        var service;

        beforeEach(module('services'));

        beforeEach(inject(function (UserService) {
            service = UserService;
        }));

        it('should get success result', function () {          
            expect(service.getUser()).not.toBeNull();
        });
	});
});