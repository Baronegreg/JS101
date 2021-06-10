// Write a function that computes the sum of all numbers between 1 and some other number, 
// inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, 
// the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

// You may assume that the number passed in is an integer greater than 1.

// function called multisum 
// starts with 1 and some other number arguement
// function multisum(number){

  

// if multiple of 3 or 5 add 3 and 5 until number is hit
  // for(let index = 1; index <= number; index += 1){
  //     if (index % 3 === 0){
  //       console.log('thats a 3')
  //     } else if (index % 5 === 0) {
  //       console.log('thats a 5')
  //     } else {
  //       console.log(index)
  //     }
  //   }



// Ex. 20: 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20)

// multisum(10);
// Examples:

// multisum(3);       // 3
// multisum(5);       // 8
// multisum(10);      // 33
// multisum(1000);    // 234168

// ===============================================================================================================
// Helper Function: 
// isMultiple returns true if the given number is a multiple of the divisor, or false if it is not. 

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

// ===============================================================================================================
// The main function, multisum, adds each value in the range to our sum variable 
// if the value is a multiple of 3 or 5.

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

