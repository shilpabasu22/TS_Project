"use strict";
function addNumbers(num1, num2) {
    return num1 + num2;
}
var number1 = 5;
var number2 = 2.8;
var result = addNumbers(number1, number2);
console.log(result);
// const person:{
//     name:string;
//     age:number;
// }
var person = {
    name: 'Shilpa',
    age: 40,
    hobbies: [
        'cooking',
        'driving'
    ],
    role: [
        1,
        'admin'
    ]
};
console.log(person.role);
person.role.push('user'); //typescript doesn't understand push in tuples
// person.role[1] =10;
console.log(person.role);
console.log(person.name);
//ENum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var people = {
    name: 'Shilpa',
    age: 40,
    hobbies: [
        'cooking',
        'driving'
    ],
    role: Role.ADMIN
};
if (people.role === Role.ADMIN) {
    console.log('.... is admin');
}
else if (people.role === Role.READ_ONLY) {
    console.log('.... is read only');
}
else {
    console.log('.... is author');
}
