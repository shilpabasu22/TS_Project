//type aliases
type Combinable = number | string;
type ConversionDescriptors = 'as-number'|'as-text';

function combine(
    num1: Combinable,
    num2: Combinable, 
    resultConversion:ConversionDescriptors){
    let result;
    if(typeof num1 === 'number' && typeof num2 === 'number' || resultConversion === 'as-number'){
        result = +num1 + +num2;
    }else{
        result = num1.toString() + num2.toString();
    }    
    return result;
}


const combineAges = combine(20,30, 'as-number');
console.log(combineAges);

const combineStringAges = combine('20','30','as-number');
console.log(combineStringAges);

const combineNames = combine('Lav','Ila', 'as-text');
console.log(combineNames);