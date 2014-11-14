define(['controllers/listController'],function (listController){
	'use strict';
	describe('list contRollers', function(){
		var scope, listService, memberService;

		beforeEach(function(){
			scope = {};
			listService = {
				getList: function(){
					return {
						then: function (callback) {
							callback([{"name":"To Do","data":[{"type":"story","title":"aaaa"}]}]);
						}
					};
				}
			};
			memberService = {
				getMember: function (callback){
					return {
						then: function (callback) {
							callback([]);
						}
					};
				}
			};

			listController(scope, listService, memberService);
		});

		it('should list is not null', function(){
			expect(scope.list).toEqual(jasmine.any(Array));
		});

		it('should close menu', function(){
			expect(scope.menuBox).toBeUndefined();
			scope.close();
			expect(scope.menuBox).toEqual(false);
		});

		it('should addCard the list length +1',function(){
			var len = scope.list[0].data.length;

			scope.addCard(0);
			expect(scope.list[0].data.length).toEqual(len + 1);
		});

		it('should cancel card list length -1',function(){
			var len = scope.list[0].data.length, index = 0;

			scope.cancelCard(index);
			expect(scope.list[index].data.length).toEqual(len - 1);
		});

		it('should saveEditCard title is change',function(){
			var index = 0, i = 0;

			scope.cardEditTitle = 'aaa';

			scope.saveEditCard(index,i);
			expect(scope.list[index].data[i].title).toEqual(scope.cardEditTitle);
			expect(scope.modal).toBeFalsy();
		});

		it('should editCard title is change',function(){
			var e = {
					target: '<div></div>'
				}, 
				i = 0, index = 0;

			scope.list[index].data[i].title = 'bbb';

			scope.editCard(e,index, i);
			expect(scope.cardEditTitle).toEqual(scope.list[index].data[i].title);
		});

		it('should saveCard title is not undefiend',function(){
			var index = 0, vm;
			vm = scope.vm = {};
			vm.cardNewTitle = 'ccc';

			scope.addCard(index);
			scope.saveCard(index);
			expect(scope.list[index].data[0].title).toEqual(vm.cardNewTitle);
		});

		it('should menuShow menuBox is show',function(){
			var e = {
				target: '<div></div>'
			};

			scope.showMenu(e,0);
			expect(scope.menuBox).toBeTruthy();
			expect(scope.index).toBeDefined();
			expect(scope.menuBoxTop).toBeDefined();
			expect(scope.menuBoxLeft).toBeDefined();
		});

	});
	
});