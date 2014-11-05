define(['common/t1'],function(t1){
	'use strict';

	describe("A suite of basic functions",function(){
		it("reverse word",function(){
			expect("DCBA").toEqual(t1.reverse("ABCD"));
		});

		it('sum',function(){
			expect(2).toEqual(t1.sumFun(1,1));
		});

		it('true',function(){
			expect(true).toEqual(true);
		});

	});
});