// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

let vals = [5,4,3,2,1];

// REGULAR JS
function sum(acc, val){
  console.log(`Acc is ${acc} and Val is ${val}`);
  return acc + val
  
};

let answer = vals.reduce(sum)
console.log('Total is ' + answer);

// ES6
// let sum = vals.reduce((acc, val) => acc + val)
// console.log(sum)
