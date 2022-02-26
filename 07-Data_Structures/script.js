'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Tiger building, Sharjah',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
        console.log(`Order recieved ${this.starterMenu[starterIndex]} and
         ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

//Spread Operators

const arr = [7, 8, 9];
const badArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArray)

const newArray = [...arr, 1, 2,];
console.log(newArray)

const newMenu = [...restaurant.mainMenu, 'Rice'];
console.log(newMenu);

//Copy Array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2Arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

//Iterables: arrays, strings, maps, sets but not objects

const str = 'Nishank';
const letters = [...str,' ', 'S.']
console.log(letters)


//Destructuring Objects

// restaurant.orderDelivery({
//     time: '23:30',
//     address: 'uppal southend',
//     mainIndex: 2,
//     starterIndex: 2,
// });

// restaurant.orderDelivery({
//     address: 'jaipur',
//     starterIndex: 1,
// })

// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //Default Values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //Mutating Variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b:7, c:14};
// ({a, b} = obj);
// console.log(a, b);

// //Nested Objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);



// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// ///nested arrays
// const nested = [3, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j)
// const [y, ,[r, s]] = nested;
// console.log(y, r, s);


// //Default Values
// const [q = 1,d =1, m = 1] = [8, 9]
// console.log(q, d, m);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// console.log(a, b, c);

///Destructuring Arrays
// const [x, y, z] = arr;
// console.log(x, y, z);

// const [,r , k] = arr;
// console.log(r,k);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// [first, second] = [second, first];
// console.log(first, second);

//console.log(restaurant.starterMenu[2]);

//console.log(restaurant.order(2, 0));

