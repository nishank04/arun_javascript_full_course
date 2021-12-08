'use strict'

//Functions
function logger () {
    console.log('My name is Vijay');
}

logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor (2, 4);
console.log(appleOrangeJuice);

///Function Declaration vs. Expressions

///Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1= calcAge1(1991)

//Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991)

console.log(age1, age2)

////Arrow functions

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1991, 'Jatin'))

///Function calling Other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3))

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirements = function (birthYear, firstName) {
    const ages = calcAge (birthYear) ;
    const retirements = 65 - ages;

    if (retirements > 0) {
        console.log(`${firstName} retires in ${retirements} years`)
    } else {
        console.log(`${firstName} has already retired`)
    }
    return -1;
}

console.log(yearsUntilRetirements(1991, 'Nishank'));
console.log(yearsUntilRetirements(1950, 'Arun'));
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
let scoreDolphins1 = calcAverage(85, 54, 41);
let scoreKoalas2 = calcAverage(23, 34, 27);
console.log(scoreDolphins1, scoreKoalas2);
checkWinner(scoreDolphins1, scoreKoalas2);

///Introduction to Arrays
const friend1 = "Akshay";
const friend2 = "Dipendar";
const friend3 = "Raju";

const friends = ['Akshay', 'Dipendar', 'Raju'];
console.log(friends)
console.log(friends[0])
console.log(friends[3])
console.log(friends[2])
console.log(friends[friends.length - 2])
friends[2] = 'Arun'
console.log(friends)
console.log(friends.length)
const y = new Array(1991, 1994, 2000, 1653)
console.log(y)

///Basic Array operation methods
const friendss = ['afdsf', 'jyhgkhk', 'ytfyjgku'];

//Add element in Array
let nishank = friendss.push('Jay')
console.log(friendss)
console.log(nishank)
nishank = friendss.push(friends)
console.log(friendss)
console.log(nishank)

friendss.unshift('tuiym')
console.log(friendss)

friendss.pop();
console.log(friendss)

friendss.shift();
console.log(friendss)

console.log(friendss.indexOf('Jay'))

console.log(friendss.includes('Jay'))



//assignment
//current year is 2040
///we need to make a function(modern javascript way) which take the values from array years and will calculate the age

const calcAgeperson = function(yearOfBirth) {
    return 2040 - yearOfBirth
}

const years = [1989, '1965', 'Ankit', 'Manager', true, '1991']

const age = [calcAgeperson(years[0]), calcAgeperson(years[1]),
calcAgeperson(years[2]),calcAgeperson(years[3]),calcAgeperson(years[4]),calcAgeperson(years[years.length-1])];
console.log(age)
console.log(calcAgeperson('1956'))


///How to find a character or any combination from the arrays
console.log(`${years}`)
console.log(JSON.stringify(years))
const str = String(years)
console.log(str)
if (years.some(v => str.includes('ger') )){
    console.log(`its present`)
}

///Introduction to Objects
const nishankArray = [
    'nishank', 
    'yadav', 
    2037 - 1989, 
    'developer', 
    ['Saurabh', 'Runish', 'Prateek']
]

const nishankObject = {
    firstName: 'nishank',
    lastName: 'yadav',
    age: 2037 - 1989,
    job: 'developer',
    friends: ['Saurabh', 'Runish', 'Prateek']
}

console.log(nishankObject)

console.log(nishankObject.lastName)

// const interestedIn = prompt('What do you want to know about nishank? choose between firstname, lastname, age, job and friends')
// if (nishankObject[interestedIn]) {
//     console.log(nishankObject[interestedIn])
// } else {
//     console.log('wrong request! choose between firstname, lastname, age, job and friends')
// }


// nishankObject.location = 'Delhi';
// nishankObject['linkedIn'] = 'y.nishank'
// console.log(nishankObject)

//"nishank ha three friend, and his best friend called Saurabh"
console.log(`${nishankObject.firstName} has ${nishankObject.friends.length} friends, and his best friend is ${nishankObject.friends[0]}`)

///Object Methods
const nishankObject1 = {
    firstName: 'nishank',
    lastName: 'yadav',
    birthYear: 1989,
    job: 'developer',
    friends: ['Saurabh', 'Runish', 'Prateek'],
    hasDriverLiscense: false,
    calcAgeObject: function() {
        return 2021 - this.birthYear
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAgeObject()} years old and he has ${this.hasDriverLiscense ? 'a' : 'no'} driver's license`
    }
}

console.log(nishankObject1.calcAgeObject())

console.log(nishankObject1.getSummary())


///Coding Challenge 3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.


/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}*/


//Iteration: The for loop

// console.log('Lifting weights repetetion 1')
// console.log('Lifting weights repetetion 2')
// console.log('Lifting weights repetetion 3')

//for loop keeps running while the condition is TRUE
for (let rep = 1; rep <=30; rep+=3) {
    console.log(`Lifting weights repetition ${rep}`)
}

//Looping arrays, Breaking and Continue
const nishank2 = ['nishank',
 'yadav', 
 2021 - 1989, 
 'developer', 
 ['raj', 'gaurav', 'sahil'], 
 true];
const types = []
 for (let i = 0; i < nishank2.length; i++) {
     console.log(nishank2[i], typeof nishank2[i])
//filling types array
     types.push(typeof nishank2[i])
 }

 console.log(types)

 const year1 = [1965,1989, 1995, 1996, 2020, 2021]
 const ages3 = []

 for (let i = 0; i < year1.length; i++) {
     ages3.push(2021 - year1[i])
 }
console.log(ages3)

//continue and break
for(let i = 0; i < nishank2.length; i++) {
    if (typeof nishank2[i] !== 'string') continue;

    console.log(nishank2[i], typeof nishank2[i])
}

for(let i = 0; i < nishank2.length; i++) {
    if (typeof nishank2[i] === 'number') break;

    console.log(nishank2[i], typeof nishank2[i])
}
///looping backwards
for (let i = nishank2.length - 1; i>=0; i--) {
    console.log(nishank2[i])
}


////loops in loops

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------ Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: lifting weight repetition ${rep}`)
    }
}

///while loop
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetetion ${rep}`)
}

let rep1 = 1;

while (rep1 <= 10) {
    console.log(`Lifting weights repetetion 1 ${rep1}`)
    rep1++;
}


let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice)
while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`)
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log(`Loop is about to end`)
}

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array
  */