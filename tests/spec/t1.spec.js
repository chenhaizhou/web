define(['assets/scripts/app/t1'],function(){
	'use strict';
	describe("A suite of basic functions",function(){
		it("reverse word",function(){
			expect("DCBA").toEqual(reverse("ABCD"));
		});

		it('sum',function(){
			expect(2).toEqual(sumFun(1,1));
		});

	});
});