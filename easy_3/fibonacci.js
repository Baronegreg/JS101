// Solution

function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// Discussion
// The function starts by initializating the first two numbers in the Fibonacci sequence, both of which are 1n. 
// We use the count variable to keep track of where we are in the sequence -- the value of second is the second Fibonacci number, so our count is initially 2n.

// The solution then uses a do...while loop to calculate the value of each subsequent Fibonacci number while the length of the number is is less than the value 
// of the value of the length argument. At every iteration the solution does the following:

// Computes the value for fibonacci by adding up the first and second values.
// Increments count by 1n. It returns the value of count if the corresponding Fibonacci number is greater than or equal to the desired length.
// Sets the value of first to the value of second, and the value of second to the value of fibonacci. 
// If the criteria for stopping the loop isn't met at the end of this iteration, it uses the two numbers for the computation of fibonacci in the next iteration.