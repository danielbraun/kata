var fizzbuzz = require("../lib");
var assert = require("assert");


describe('fizzbuzz', function() {
    it('returns fizz for multiples of three', function() {
        assert.equal(fizzbuzz(9), "Fizz");
        assert.equal(fizzbuzz(33), "Fizz");
    });
    it('returns buzz for multiples of five', function() {
        assert.equal(fizzbuzz(50), "Buzz");
        assert.equal(fizzbuzz(55), "Buzz");
    });
    it('returns fizzbuzz for multiple of five and three', function() {
        assert.equal(fizzbuzz(15), "FizzBuzz");
        assert.equal(fizzbuzz(45), "FizzBuzz");
    });
    it('returns the number otherwise', function() {
        assert.equal(fizzbuzz(7), 7);
        assert.equal(fizzbuzz(22), 22);
        assert.equal(fizzbuzz(43), 43);
    });
});
