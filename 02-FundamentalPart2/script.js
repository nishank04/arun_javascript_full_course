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