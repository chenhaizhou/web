define(['controllers/rootController'],function (rootController){
	'use strict';
    describe('RootCtrl test',function(){

    	var scope, UserService, t1;
 
	    beforeEach(function(){
            scope = {};
            UserService = {
                getUser: function(){
                    return 'testUser1';
                }
            };
        });


        it('should have name when init controller',function(){           
            rootController(scope, UserService);
            expect(scope.name).toEqual('testUser1');
        });

        it('should have name when init controller',function(){           
            rootController(scope, UserService);
            expect(scope.result).toEqual(2);
        });

    });

});