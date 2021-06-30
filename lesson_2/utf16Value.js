
function utf16Value(string) {
  // initializes the sum to 0 
  // (which takes care of the empty string test case, in addition to giving us a starting value)
  let sum = 0;

  // then adds the UTF-16 character code value for every character to that sum
  for (let idx = 0; idx < string.length; idx += 1) {
    sum += string.charCodeAt(idx);
  }

  // returns sum
  return sum;
}


console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// Function takes a paramater called string.
// check if that matches a-z && A-Z looping through charCodeAt()
// if yes return true, if not return false