// Question 1
// Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.

// For this practice problem, write a program that outputs The Flintstones Rock! 10 times, 
// with each line indented 1 space to the right of the line above it. The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    ...

// for (let padding = 1; padding <= 10; padding++) {
//   console.log(" ".repeat(padding) + "The Flinstones Rock!");
// }
// =================================================================================================================
// Question 2;

// Starting with the string:

// let munstersDescription = "The Munsters are creepy and spooky.";

// munstersDescription.split("").map(function(char) {
//   if (char === char.toUpperCase()) {
//     return char.toLowerCase();
//   } else {
//     return char.toUpperCase();
//   }
// }).join("");

// // OR

// var answer = munstersDescription.split('')
// .map((letter) =>
//  letter === letter.toUpperCase() 
//  ? letter.toLowerCase()
//  : letter.toUpperCase()
// ).join('')

// console.log(answer)

// Return a new string that swaps the case of all of the letters:

// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
// =======================================================================

//Question 3
// Alan wrote the following function, which was intended to return all of the factors of number:

// function factors(number) {
//   let divisor = number;
//   let factors = [];
  
//   while (divisor > 0) {
//     if (number % divisor === 0) {
//       factors.push(number / divisor);
//     }
//     divisor -= 1;
  
//   } while (divisor !== 0);
//   return factors;
// }

// console.log(factors(-70))

//Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. 
//How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, 
//but we want to handle it gracefully instead of raising an exception or going into an infinite loop.
// ===========================================================================================================

// console.log(isNaN(NaN))

// console.log(Object.is(12,12))

// let nanArray = [NaN];

// console.log('1' + nanArray[0] === NaN);
// console.log('2' + Object.is(nanArray[0], NaN))
// console.log(Number.isNaN(nanArray[0])); // true
