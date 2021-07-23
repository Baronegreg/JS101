// Palindromic Numbers
// Write a function that returns true if its integer argument is palindromic, or false otherwise. 
// A palindromic number reads the same forwards and backwards.

isPalindromicNumber = (text) => {

  let strings = String(text)

  return strings === strings.split('').reverse().join('')
}


// USING THE PALANDROME NUMBER FUNCTION AS A HELPER FUNCTION
// function isPalindromicNumber(number) {
//   return isPalindrome(String(number));
// }

// Examples:


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true