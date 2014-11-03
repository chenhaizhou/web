define(['app',
		'services/services',
		'services/userService'
	],function(){
		'use strict';

		describe('rootController?',function(){

			it('userService is call？',function(){
				expec(false).toBeNull(UserService.getUser());
			})

		});
});