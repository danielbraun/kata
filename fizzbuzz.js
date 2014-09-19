(function() {
    "use strict";

    function fizzbuzz(number) {
        return (number % 5 === 0 && number % 3 === 0) ? "FizzBuzz" :
            (number % 5 === 0) ? "Buzz" :
            (number % 3 === 0) ? "Fizz" :
            number;
    }

    function main() {
        for (var i = 1; i <= 100; i++) {
            console.log(fizzbuzz(i));
        }
    }
}());
