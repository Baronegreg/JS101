// let numbers = [1, 2, 3, 4, 5, 6];

// let allNums = numbers.reduce((acc, cur) => acc + cur);
// let mappedNums = numbers.map(number => number)

// console.log('Mapped ' + mappedNums)
// console.log('Reduced ' + allNums)



// console.log(numbers[6] = 5);

// let numbers = [1, 2, 3];
// numbers[6] = 5;
// numbers[5] = undefined; // => [ 1, 2, 3, <2 empty items>, undefined, 5 ]
// console.log(numbers.map(() => 10));  // => [ 10, 10, 10, <2 empty items>, 10, 10 ]


// let str1 = "Come over here!"; // true
// let str2 = "What's up, Doc?"; // false

// console.log(str1.endsWith('!'));
// console.log(str2.endsWith('!'));

// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// console.log(ages.hasOwnProperty('Lily'))

// Using the following string, 
// create a new string that contains all lowercase letters except for the first character, 
// which should be capitalized. (See the example output.)

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// // => The munsters are creepy and spooky.

// console.log(munstersDescription[0].toUpperCase() + munstersDescription.substring(1).toLowerCase())

// We have most of the Munster family in our ages object:

// let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// // Add entries for Marilyn and Spot to the object:

// let additionalAges = { Marilyn: 22, Spot: 237 };

// Object.assign(ages, additionalAges);

// console.log(ages)

// let str1 = "Few things in life are as important as house training your pet dinosaur.";
// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str1.includes('Dino'));
// console.log(str2.includes('Dino'));

// Alternate Solution

// str1.match('Dino') !== null; // false
// str2.match('Dino') !== null; // true

// Yet another Solution

// str1.indexOf('Dino') > -1; // false
// str2.indexOf('Dino') > -1; // true

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

// flintstones.push('Dino', 'Hoppy')

// console.log(flintstones)

// Alternate Solution

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones = flintstones.concat("Dino");
// flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

// Yet Another Solution

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones[flintstones.length] = "Dino";
// flintstones; // => [ 'Fred', 'Barney', 'Wilma', 'Betty', 'Bambam', 'Pebbles', 'Dino' ]

// Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.slice(0, advice.indexOf('house')));
// // => 'Few things in life are as important as '

// let advice = "Few things in life are as important as house training your pet dinosaur.";

// console.log(advice.replace('important', 'urgent'));

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 23, 4, 5];
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// numbers = [1, 2, 3, 23, 4, 5];
// numbers.sort();
// console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// famousWords = `Four score and ${famousWords}`;
// // OR
// "Four score and ".concat(famousWords);

// console.log('Four score and', ...[famousWords])

// Given an array of numbers [1, 2, 3, 4, 5], 
// mutate the array by removing the number at index 2, so that the array becomes [1, 2, 4, 5].

// let numbers = [1, 2, 3, 4, 5];

// numbers.splice(2, 1);

// console.log(numbers)


// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// flintstones = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// }, []);

// console.log(flintstones)

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

// console.log(flintstones)

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// let title = "Flintstone Family Members";

// console.log(...title)

// // OR

// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));
// =======================================================================
// Write two one-line expressions to count the 
// number of lower-case t characters in each of the following strings:

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// console.log(statement1.split('').filter(char => char === 't').length);
// console.log(statement2.split('').filter(char => char === 't').length)
// ===========================================================================
// Remove all elements in array

// let numbers = [1, 2, 3, 4];

// // numbers.splice())
// // numbers.splice(0, numbers.length);
// // numbers.length = 0
// console.log(numbers)



// =======================================================================================
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// This can have one return statement

  function isColorValid(color) {
    return color === "blue" || color === "green";
  }

  // In functions that return a boolean value, you often don't need separate return statements for the true and false cases. 
  // Instead, you can return the value of a conditional expression directly.
  
  // We can also use an arrow function to simplify the code even more:
  
  const isColorValid = color => color === "blue" || color === "green";
  
  // Another tweak you can make is to use the Array.prototype.includes method; 
  // this works especially well when you have more than 2 choices:
  

  const isColorValid = color => ["blue", "green"].includes(color);
  // =======================================================================================