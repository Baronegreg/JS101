// Letter Counter (Part 1)
// Write a function that takes a string consisting of zero or more space separated words and returns an 
// object that shows the number of words of different sizes.

// Words consist of any sequence of non-space characters.


// Problem:

// Function takes string as arguement
// Words are seperated by whitespace
// Count length of letters in each word. Return that number. (Ex. 'Four' = 3, 'score' = 5, 'seven.' = 6)
// Edge Case: '' = empty object



// Examples:

// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

// Data Structure:

//('Four score and seven.')); // { "3": 1, "4": 1, "5": 1, "6": 1 }

// Algorithims:

// Initialize empty object
// Split words into seperate words
// Determine count of each word
// Return an object that shows the number of words of different sizes


// Code:

function wordSizes(words) {

  //Split array of words in seperate words
  let wordsArray = words.split(' ');
  
  // Stores the counts of word sizes as properties of the *count object*.
  let count = {};

  
  // Iterate over the list of words:
  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    
    // Initialize the wordSize variable to the length of the current word
    let wordSize = wordsArray[idx].length;


    // Check whether wordSize is equal to 0. 
    // If yes, proceed immediately to the next iteration,
    // since there is no need to account for words of zero length.
    if (wordSize === 0) {
      continue;
    }


    // Ensure that the property for the current wordSize in the count object exists and has a value. 
    // If the property does not exist (i.e., count[wordSize] evaluates to undefined), set it to 0.
    // Otherwise, just set it to its current value. Note that we use bang prefix here.
    // This prefix converts the value to a boolean and reverses it.
    if (!count[wordSize]) {
      count[wordSize] = 0;
    }
     
    // Increment the count for a particular wordSize by 1.
    count[wordSize] += 1;
  }

  return count;
}

// function isLetter(char) {
//   return char >= 'a' && char <= 'z';
// }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}






// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// wordSizes('');                                            // {}