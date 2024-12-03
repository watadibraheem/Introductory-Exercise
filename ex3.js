// Exercise 3: Count Zeros
// Programmers: Ibraheem Watad, Karim Biadsy
// This program calculates the number of zeros in an array.
// It uses a conditional expression instead of an if statement.

const arr = [0, 1, 0, 2, 0, 3, 4, 0, 5]; // Define the array

let zeroCount = 0; // Initialize the zero counter

// Loop through the array to count zeros
for (const num of arr) {
  zeroCount += num === 0 ? 1 : 0; // Add 1 if the number is zero, otherwise add 0
}

console.log(zeroCount); // Output the count of zeros
