// Write a function that takes an array of numbers and returns an array with the same number of elements, 
// but with each element's value being the running total from the original array.

// Examples:

// function runningTotal (arr){

//   let mapped = arr.map((nums) => nums)
//   let adding = mapped + arr.slice(-1)
//   return adding

// }

function runningTotal(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20] // (2 + 5 + 13)
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67] // (14 + 11 + 7 + 15 + 20)
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []