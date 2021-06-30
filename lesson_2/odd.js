// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. 
// You may assume that the argument is a valid integer value.

// function takes one integer arg
//  - true for odd
//  - false for even

// function isOdd(number){

//   return Math.abs(number) % 2 === 1;

// }

// console.log(isOdd(2)); // => false
// console.log(isOdd(5)); // => true
// console.log(isOdd(-17)); // => true
// console.log(isOdd(-8)); // => false
// console.log(isOdd(0)); // => false
// console.log(isOdd(7)); // => true

// Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.

// for (let i = 0; i <=100; i+=2){
//   console.log(i);
// }

for (let number = 1; number < 100; number += 1) {
  if (number % 2 === 1) {
    continue;
  }

  console.log(number);
}