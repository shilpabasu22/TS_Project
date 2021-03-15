"use strict";
function combine(num1, num2, resultConversion) {
    var result;
    if (typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === 'as-number') {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var combineAges = combine(20, 30, 'as-number');
console.log(combineAges);
var combineStringAges = combine('20', '30', 'as-number');
console.log(combineStringAges);
var combineNames = combine('Lav', 'Ila', 'as-text');
console.log(combineNames);
