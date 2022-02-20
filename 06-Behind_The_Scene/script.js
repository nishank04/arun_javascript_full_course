'use strict';

// function calcAge(birthYear){
//     const age = 2022 - birthYear;
//     //console.log(firstName);

//     function printAge() {
//         let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const str = `Oh you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             const output = 'New Otput';
//         }
//         //console.log(str);
//         console.log(millenial)
//         //console.log(add(2, 3));
//         console.log(output)
//     }

//     printAge();

//     return age;
// }
// const firstName = 'Nishank';
// calcAge(1989);
//console.log(age);
//printAge();

////Hoisting and TDZ

// ///Variables
// console.log(me);
// //console.log(job);
// console.log(year);

// var me = 'Nishank';
// let job = 'teacher';
// const year = 1989;

///functions

// console.log(addDecl(2,3));
// console.log(addExpr(2,3));
// console.log(addArrow(2,3));
//function declaration
function addDecl(a,b) {
    return a + b;
}

///function expresssion
// var addExpr = function(a,b) {
//     return a + b;
// }

///Arrow function
//var addArrow = (a,b) => a + b;

///Example
// console.log(undefined);
// if(!numProdycts) deleteShoppingCart();
// console.log(numProdycts)
// var numProdycts = 10;
// console.log(numProdycts)
// function deleteShoppingCart() {
//     console.log(`All products deleted`);
// }

///this keyword

// console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// }
// calcAge(1989);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// }

// calcAgeArrow(1991);

// const nishank = {
//     year: 1989,
//     calcAge: function() {
//         console.log(this);
//     }
// }
// nishank.calcAge();

// const arun = {
// //    year: 1979,
//     name: 'mohta',
// }

// arun.calcAge = nishank.calcAge;
// arun.calcAge();

///how to make a new object by referring a property set in a 
//constructor function names nishank1
// const nishank1 = function(year, fullName) {
//     this.year = year;
//     this.fullName = fullName;
// }
// console.log(nishank1);
// const tiger = new nishank1(1989, 'tiger shroff');
// console.log(tiger);

///Regular Function vs Arrow Function
// const jonas = {
//     firstName: 'jonas',
//     year: 1990,
//     calcAge: function(){
//         console.log(2037 - this.year);
//         const isMillenial = () => {
//             console.log(this);
//             console.log(this.year >= 1981 && this.year <= 1996)
//         };
//         isMillenial();
//     },

//     greet: () => {
//         console.log(this);
//         console.log(`Hey ${this.firstName}`);
//     }
// };
// jonas.greet();
// jonas.calcAge();

///arguments keyword

// const addExpr = function (a, b) {
//     console.log(arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a,b) => {
//     console.log(arguments);
//     return a + b;
// }

// addArrow(2, 5, 8);

///primitives vs objects

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Nishank',
    age: 30,
};

const friend = me;
console.log(friend);
friend.age = 27;
console.log('friend', friend)
console.log('me:', me);

///Primitive vs object typr practice

///Primitve type
let lastName = 'Yadav';
let oldLastName = lastName;
lastName = 'Rao';
console.log(lastName, oldLastName);

///Reference Type or Object Type

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

//Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
console.log(jessicaCopy);

jessicaCopy.lastName = 'Davis';

console.log(jessicaCopy);
console.log(jessica2);

jessicaCopy.family.push('Nishank');
jessicaCopy.family.push('Arun');
console.log(jessicaCopy);
console.log(jessica2)
