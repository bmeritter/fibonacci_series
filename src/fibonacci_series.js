'use strict';

function fibonacci_series(n) {
    var result = [];
    result.push(0);
    result.push(1);
    var i=2;
    while(n-- >= 2) {

        var s = result[i-1] + result[i-2];
        result.push(s);
        i++;
    }
    return result;
}

module.exports = fibonacci_series;

var n = 10;
var result = fibonacci_series(n);
console.log(result);