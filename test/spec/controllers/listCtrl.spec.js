define(['controllers/listController'],function (listController){
	'use strict';
	describe('list contRollers', function(){
		var scope, listService;

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

			listController(scope, listService);
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
			var index = 0, cardEditTitle = 'aaa', i = 0;

			scope.saveEditCard(index,cardEditTitle,i);
			expect(scope.list[index].data[i].title).toEqual(cardEditTitle);
			expect(scope.modal).toBeFalsy();
		});

		it('should editCard title is change',function(){
			var e = {
				/*target:{
					offset:function(){
						return {left:0,top:0};
					}
				}*/
				target: '<body></body>'
			}, 
			cardTitle = 'bbb', 
			i = 0;

			scope.editCard(e,cardTitle,i);
			expect(scope.cardEditTitle).toEqual(cardTitle);
		});

		it('should saceCard title is not undefiend',function(){
			var index = 0, cardTitle = 'ccc';

			scope.addCard(index);
			scope.saveCard(index, cardTitle);
			expect(scope.list[index].data[0].title).toEqual(cardTitle);
		});

		it('should menuShow menuBox is show',function(){
			var e = {
				target: '<div></div>'
			};

			scope.showMenu(e);
			expect(scope.menuBox).toBeTruthy();
			expect(scope.index).toBeDefined();
			expect(scope.menuBoxTop).toBeDefined();
			expect(scope.menuBoxLeft).toBeDefined();
		});

	});
	
});