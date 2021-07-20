// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
// For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; 
// otherwise, return the double number as-is.

// Examples:


function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}
// Discussion
// The challenging part of this problem is determining how to compare the left-side numbers with the right-side numbers. 
// The trick is to compare them as strings instead of as numbers.

// Given this, the solution does the following via the isDoubleNumber function:

// Gets the left-side and right-side substrings by calculating the middle index of stringNumber.
// Returns the result of comparing the left and right substrings.
// If the length of stringNumber is odd, it is not a double number.
// If the length of stringNumber is even, there is a chance that it is a double number.
// =============================================================================================================================
// The regex runs through the numbers one at a time and checks for a match, 
// so it finds one in the middle if the numbers are doubled.

// REGEX
function twice(number) {
  if (/^(\d+)\1$/.test(`${number}`)) {
    return number;
  }
  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 6688
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676