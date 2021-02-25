function add(num1:number, num2:number){
    return num1+num2
}

var number1 = 5;
var number2 = 2.8;
var result = add(number1,number2);

console.log(result);


// const person:{
//     name:string;
//     age:number;
// }
const person:{ // we need explicit type assignment for tuples
    name:string;
    age: number;
    hobbies: string[];
    role:[number,string]; //tuple
} = {
    name:'Shilpa',
    age: 40,
    hobbies:[
        'cooking',
        'driving'
    ],
    role:[
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

enum Role {ADMIN,READ_ONLY,AUTHOR};
const people= {
    name:'Shilpa',
    age: 40,
    hobbies:[
        'cooking',
        'driving'
    ],
    role:Role.ADMIN
};

if(people.role === Role.ADMIN){
    console.log('.... is admin');
}else if(people.role === Role.READ_ONLY){
    console.log('.... is read only');
}else{
    console.log('.... is author');
}