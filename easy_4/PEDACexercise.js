/*
Given a string of one or more words, return an array that contains
the number of vowels in each word of the argument string.

The returned array should have the same number of
elements as words in the argument string.


vowelCount('WhaTs yOur enneagram?');                  // [1, 2, 4]
vowelCount('Colonel Sanders feeds me well !!');       // [3, 2, 2, 1, 1, 0]
vowelCount('');                                       // []
vowelCount('ZoInkies!! There are monsters in here.'); // [4, 2, 2, 2, 1, 2]
vowelCount('grrr!');                                  // [0]

PEDAC - PRoblem Examples Data structure Algorithm Code

PROBLEM
- Input: String of one or more words
- What is word? -- group of characters separted by a white space

- Output: An array, elements are numbers. Numbers represent the count of the vowels of each word.

- Vowels: 'aeiouAEIOU'

- explicit requirements? Returned array should have same numbers elements as words. 


EXAMPLES
- `!!` is considered a word in the 2nd example.
- words can be a combination of letters and symbols 'abc' 'grr!'
- When given an empty string that contains no words, return and empty array.
- Can assume that words do not contain numbers.

DATA STRUCTURES
- input String
- output array of numbers
- another data structure convert String --> Array

Algorithm
Greg
1. Initialize empty array
2. Split string into individual words
3. Loop thru words and search for (let Vowels = 'aeiouAEIOU')
4. push amount of vowels into new array
5. return new array

ALGORITHM
H
1. declare function with one parameter that takes a string argument of one or more words
2. initialize an empty array to count the number of vowels in each word
3. change the string to all lowercase
4. split the string at each word
5. initialize variable to count vowels of each word
6. loop through check each word for a vowel
  - if vowel increase the count of vowels for the word
  - check next word to end of string
7. return array of numbers indicating how many vowels in each word


Mandy
- Convert the input string of words into an array of words.
    - Split the string by spaces to extract each word into the array. 
- Convert the array of words into a new array of numbers.
- Iterate over each word in the array of words and count the number of vowels for each word, using the `numOfVowels(word)` helper function. 

    - Create a helper function for the sub-problem of counting  the number of vowels in a word. `numOfVowels` function:
        - Given a single word.
        - Initialize a variable `count` to store the count.
        - Iterate over each character of the word.
        - If the character is one of `a` `e` `i` `o` `u` , - increment `count`. 
        - After iteration is complete, return `count`.

- Return the newly created array of numbers (number of vowels). 

*/

function vowelCount(str) {
  if (str === '') return [];
  
  return str.split(' ')
     .map((word) => countVowels(word));
}

function countVowels(word) {
  let count = 0;
  let vowels = ['a','e','i','o','u'];
  
  for (let character of word) {
    if (vowels.includes(character.toLowerCase())) {
      count += 1;
    }
  }
  
  return count;
}
