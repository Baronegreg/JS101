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

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.slice(0, advice.indexOf('house')));
// => 'Few things in life are as important as '



// Expected return value:
// => 'Few things in life are as important as '