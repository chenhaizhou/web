define(['services/userService'],function(userService){
    'use strict';
    describe('User Service', function () {
        var service;

        beforeEach(function () {
            service = userService();
        });
        
        it('should get success result', function () {   
            expect(service.getUser()).not.toBeNull();
        });
	});
});