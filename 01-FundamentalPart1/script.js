//values and variables
//let firstName = "Mathew";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//variable naming convention
let jonas_singh = "hhgjh"

///Data Types

// let javascriptIsFun = true;
// console.log(javascriptIsFun)

// console.log(typeof true)
// console.log(typeof 23)
// console.log(typeof 'Jonas')
// console.log(typeof javascriptIsFun)
// javascriptIsFun = 'Yes!'
// console.log(typeof javascriptIsFun)

// let year;
// console.log(year)
// console.log(typeof year)

// year = 1991;
// console.log(typeof year)

// console.log(typeof null)

// ////let const and var
// let age = 30;
// age = '32';
// console.log(typeof age)
// console.log(age)

// const birthYear = 1989;
// // birthYear = 1990;

// console.log(birthYear)

// var job = 'programmer';
// job = 'teacher';
// console.log(job)

// // lastName = 'Yadav';
// // lastName= 'Mohta'
// // console.log(lastName)

// ///Basic Operators
// //Math Operators
// const now = 2037;
// const ageNishank = now - 1995;
// const ageJonas = now - 1991;
// console.log('ageJonas' + ageJonas, ageNishank)

// console.log(ageJonas * 2, ageNishank / 10, 2 ** 3)

// const firstName = 'Nishank'
// const lastName = 'Yadav'
// console.log(lastName + ' ' + firstName);

// //Asignment Operator
// let x = 10 + 5; // 15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;// x = x + 1
// x--;
// console.log(x)

// //Comparison Operators
// console.log(ageJonas > ageNishank) //>, <, >=, <=
// console.log(ageJonas >= 18)

// const isFullAge = ageJonas >=18

// const now = 2037;
// const ageJonas = now - 1991;
// const ageNishank = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 23 -10 -5; // x = y = 8, x = 8
// console.log(x, y)

// const averageAge = (ageJonas + ageNishank) / 2;
// console.log(ageJonas, ageNishank, averageAge)

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK ????
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/


///Strings and Template Literals
// const firstName = 'Nishakn';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const nishank = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!'; //String literal
// console.log(nishank)

// const nishankNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}` ///Template literal no need of quotes and no need + sign to concatenate. To concatenate we use ${}
// console.log(nishankNew)

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String with 
// multiple 
// lines`)

////Taking Decision: if / else statements
// if (conditon) {

// } else {

// }

//const age = 25;

// if (age >= 18) {
//     console.log(`Nishank can start driving license`)
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Nishank is too young. Wait another ${yearLeft} years`)
// }

///Coding challenge 2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log(`Mark's bmi ${BMIMark} is greater than john's BMI ${BMIJohn}`)
// } else{
//     console.log(`John's bmi ${BMIJohn} is greater than mark's BMI ${BMIMark}`)   
// }

// ////type conversion
// const inputYear = Number('1991');
// console.log(inputYear, typeof inputYear)
// console.log(inputYear + 18)

// console.log(Number('Nishank'))
// console.log(typeof NaN)

// console.log(String(23), 23)
// console.log(typeof String(23), typeof 23)

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' + 10 - 3);
// console.log('23' / '2');
// console.log('23' > '18');

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// ///truthly and falsely values

// //5 values in js which are false : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Nishank'));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(''));

// const money = 0;
// if (money) {
//     console.log('good')
// } else {
//     console.log('you should get a job')
// }


// ////Equality Operator: == vs ===
// const age = '18';
// if (age === 18) {
//     console.log(`Everything matching`)
// }

// if (age == 18) console.log(`something is matching`)

// ///logical operator

// const hasDriverLicense = true;
// const hasGoodVision = false;

// console.log(hasDriverLicense && hasGoodVision)
// console.log(hasDriverLicense || hasGoodVision)
// console.log(hasDriverLicense)

// if (hasDriverLicense && hasGoodVision) {
//     console.log(`Nishank is able to drive`)
// } else {
//     console.log(`Someone else should drive`)
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks ????
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK ????
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy ');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy ');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy ');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy ');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy ');
}
*/

////Switch case
// const day = 'sunday';
// switch (day) {
//     case 'monday':///day === 'monday'
//         console.log('Plan course structure');
//         break;
//     case 'tuesday':
//         console.log('Prepare theory part');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend')
//         break;
//     default:
//         console.log('not a valid day')
// }

// if (day === 'monday') {
//     console.log('Plan course structure');
// } else if (day === 'sunday' || day === 'saturday'){
//     console.log('enjoy the weekend')
// } else {
//     console.log('not a valid day')
// }

// ////Statement and expression
// 3 + 4
// 1991
// true && false && !false

// if (23 > 10) {
//     const str = '23 is bigger';
// }

///conditional (ternary) operator
const age = 23;
age >=18 ? console.log('I like to drink wine') : console.log('I like to drink water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
}

console.log(drink2);

console.log(`I like to drink ${age >=18 ? 'wine' : 'water'}`)

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement ???? (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 

*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/