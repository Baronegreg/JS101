// Write a function that returns the next to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String will always contain at least two words.

function penultimate(str) {

  for (let idx = 0; idx < str.length; idx += 1){
     var n = str.split(" ");
     
  }
  return n[n.length - 2]; 
}


// Examples:

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true