// Double Doubles
// A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. 
// For example, 44, 3333, 103103, and 7676 are all double numbers, whereas 444, 334433, and 107 are not.

// Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; 
// otherwise, return the double number as-is.

// Examples:


twice = (num) => {
  
  let digits = (""+num).split("");
  // console.log(digits)
  
  for (let idx=0; idx <= digits.length; idx +=1){
    // console.log()
    if(digits[0] !== digits[1]){
      return digits.reduce((a,b) => (a + b)*2)
    } else {
      return parseInt(digits[idx])
    }

  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
// console.log(twice(334433));      // 6688
// console.log(twice(444));         // 888
// console.log(twice(107));         // 214
// console.log(twice(103103));      // 103103
// console.log(twice(3333));        // 3333
// console.log(twice(7676));        // 7676greg@greg-ThinkPad-T460:~/Desktop/JS101/easy_3$ 66