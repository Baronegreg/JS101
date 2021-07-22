// Write a program that solicits six numbers from the user and logs a message that describes 
// whether the sixth number appears among the first five numbers.

// let readlineSync = require("readline-sync");

// let numbers = [];

// console.log("Enter the 1st number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 2nd number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 3rd number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 4th number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the 5th number:");
// numbers.push(Number(readlineSync.prompt()));
// console.log("Enter the last number:");
// const lastNumber = Number(readlineSync.prompt());

// if (numbers.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in ${numbers}.`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in ${numbers}.`);
// }

// OR
// ============================================================================
let readline = require('readline-sync');

let numArray = [];

numArray.push(readline.question('Enter the 1st number: '));
numArray.push(readline.question('Enter the 2nd number: '));
numArray.push(readline.question('Enter the 3rd number: '));
numArray.push(readline.question('Enter the 4th number: '));
numArray.push(readline.question('Enter the 5th number: '));
let numLast = readline.question('Enter the last number: ');

let isInOrNot = numArray.includes(numLast) ? 'appears' : 'does not appear';
console.log(`The number ${numLast} ${isInOrNot} in ${numArray}.`);



// Examples:

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in 25,15,20,17,23.

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in 25,15,20,17,23.