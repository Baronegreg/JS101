// readlineSync = require('readline-sync');


// let lengthInMeters = readlineSync.question("What is the length in meters?");
// console.log(`The room is ${lengthInMeters} meters long`)

// let widthInMeters = readlineSync.question("What is the width in meters?");
// console.log(`The room is ${widthInMeters} meters wide`)


// console.log('The room is ' + (lengthInMeters * widthInMeters) * 10.7639 + ' square feet')

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
  `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`
);