// Problem: Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
// For instance, the word size of "it's" is 3, not 4.

function wordSizes(words) {
  const regex = /\W+/g;
  return words.replace(regex, "")
}

// // Code:

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

// // function isLetter(char) {
// //   return char >= 'a' && char <= 'z';
// // }

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));    