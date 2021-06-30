// Write a function that returns an Array that contains every other element of an Array that is passed in as an argument. 
// The values in the returned list should be those values that are in the 1st, 3rd, 5th, and so on elements of the argument Array.

// Rules: 
// Explicit:
//  - function returns 1st, 3rd, 5th elements in Array

 function oddities(params) {
   
  
  // initilize empty array
  let oddNums = [];

  // loop thru array and display empty numbers only
  for (let index = 0; index <= params.length; index += 2){
    // params += oddNums[index];
    oddNums.push(params[index]);
    // console.log('index: ' + params[index])
  }

  //return oddNums
  return oddNums;


 }

//  OR

//  FILTER METHOD

// The first argument for the callback in filter is the current value in the array, 
// but since we don't actually need to know the value, we can essentially skip over that argument and represent it with an underscore ( _ ). 
// We really only need to know the index ( idx ). If the remainder of dividing the index by 2 is 0 (meaning its an even number), 
// then we will return those values from our input array. We therefore return the element at index 0, 2,4,6 and so on.


 let oddities = (arr) => arr.filter( (_, idx) => idx % 2 === 0);




// Examples:

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []