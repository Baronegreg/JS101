// Question 3:

// function messWithVars(one, two, three) {
//   one = two; // 1 = 2
//   two = three; // 2 = 3
//   three = one; // 3 = 1
// }

// let one = ["one"]; // 1
// let two = ["two"]; // 2 
// let three = ["three"]; // 3

// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // 1
// console.log(`two is: ${two}`); // 2
// console.log(`three is: ${three}`); // 3

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);


// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two"); // 1 = 2
//   two.splice(0, 1, "three"); // 2 = 3
//   three.splice(0, 1, "one"); // 3 = 1
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// //Mutated the values of numbers within the function and then passed them to the function invocation
// messWithVars(one, two, three);

// console.log(`one is: ${one}`); // 2
// console.log(`two is: ${two}`); // 3
// console.log(`three is: ${three}`); // 1




// ===========================================================================================================
// Question 4

// Function testing if a given number is a string digits or not, between 0 and 255.
function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
    
  }

  
  
  
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return 'Not 4 args';
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('2122.45.3.45'))