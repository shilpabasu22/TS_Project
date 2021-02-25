function add(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log('Result is: ' + num);
}
var combineValues;
combineValues = add;
console.log(combineValues(8, 8));
//callback function 
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
