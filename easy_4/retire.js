// When Will I Retire?
// Build a program that logs when the user will retire and how many more years the user has to work until retirement.

let readline = require('readline-sync');

let age = parseInt(readline.question("What is your age? "))

let retireAge = Number(readline.question("At what age would you like to retire? "))

let year = new Date().getFullYear()

let retireDate = year + 40

console.log(`It's ${year}. You will retire in ${retireDate}. You only have ${retireAge - age} years of work to go!`)





// Example:

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!