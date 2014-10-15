$(function(){
    describe("A suite of basic functions", function() {

        beforeEach(function(){
            var basePath = '/Library';
        });
        var name;

        it("sayHello", function() {
            name = "Conan";
            var exp = "Hello Conan";
            expect(exp).toEqual(sayHello(name));
        });

        it("test del ajax success",function(){
            var aaa = 0;
            $.ajaxSetup({
                statusCode: {
                    404: function () {
                        aaa = 200;
                        console.log(1)
                    }
                }
            });
    var a = $.Deferred();
            $.when(delBook(8)).done(function(){
                console.log(aaa)
                expect(200).toEqual(aaa);
            });

        })
    });
})

