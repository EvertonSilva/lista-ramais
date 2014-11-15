/**
 * Hello World Tests
 *
 * This file verify if js test libs
 * mocha, chai and sinonjs are functional
 * add some dummy test cases.
 */

 window.hello = function () {
   return "Hello World";
 };

 describe("Trying out the test libraries", function() {
   describe("Chai", function() {
     it("should be equal using 'expect'", function() {
       expect(hello()).to.equal("Hello World");
     });
   });

   describe("Sinonjs", function() {
     it("should report spy called", function() {
       var helloSpy = sinon.spy(window, 'hello');

       expect(helloSpy.called).to.be.false;
       hello();
       expect(helloSpy.called).to.be.true;
       hello.restore();
     });
   });

 });
