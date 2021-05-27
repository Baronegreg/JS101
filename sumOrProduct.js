// Write a program that asks the user to enter an integer greater than 0, 
// then asks whether the user wants to determine the sum or the product of all numbers between 1 and the entered integer, inclusive.

// user input of an integer
// user asked sum or product of numbers between 1 and that number
// take the number and loop thru every number in between


//Hepler Function for Calculating Sum
function computeSum(targetNum){
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1){
    total += num;
  }

  return total;
}
// ======================================================
//Hepler Function for Calculating Product
function computeProduct(targetNum){
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1){
    total *= num
  }

  return total;
}
// ======================================================
// Get user prompts
let readlineSync = require("readline-sync")

console.log("Please enter an integer greater than 0");
let number = parseInt(readlineSync.prompt(), 10);

console.log("Enter 's' to compute the sum, 'p' to compute the product.");
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);
} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(
    `The product of the integers between 1 and ${number} is ${product}.`
  );
} else {
  console.log("Oops. Unknown operation.");
}



// Examples:

// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.