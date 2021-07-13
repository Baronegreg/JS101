// Write a function that takes a string argument and returns a new string 
// that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

// function crunch(text) {

  
//   let index = 0;
//   let crunchText = '';

//   while (index <= text.length - 1) {
//     if (text[index] !== text[index + 1]) {
//       crunchText += text[index];
//     }

//     index += 1;
//   }

//   return crunchText;
// }

function crunch(params) {
  return params.replace(/[^\w\s]|(.)(?=\1)/gi, "");
}

// // Examples:

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// crunch('4444abcabccba');              // "4abcabcba"
// crunch('ggggggggggggggg');            // "g"
// crunch('a');                          // "a"
// crunch('');                           // ""

// const re1 = new RegExp('hey');

// console.log(re1.test('kekekekhelelel'))

console.log(/^\d+$/.test('11s21'))

// console.log('123070ttrdsa'.match(/^(\d{3})(\w+)$/))
console.log(/^(\d{3})(\w+)$/.exec('123s'))