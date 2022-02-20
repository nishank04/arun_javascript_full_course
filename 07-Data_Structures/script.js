'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Tiger building, Sharjah',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

///nested arrays
const nested = [3, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j)
const [y, ,[r, s]] = nested;
console.log(y, r, s);


//Default Values
const [q = 1,d =1, m = 1] = [8, 9]
console.log(q, d, m);

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

