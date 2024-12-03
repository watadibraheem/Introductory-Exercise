// Exercise 1: Divisibility Check
// Programmers: Ibraheem Watad, Karim Biadsy
// This program checks the divisibility of a number by 2, 3, and 5.
// It prints 1 if divisible by one number, 2 if divisible by two, and 3 if divisible by all three.

const num = 123;

// Check divisibility using logical operations
const divisibleBy2 = num % 2 === 0; // True if divisible by 2
const divisibleBy3 = num % 3 === 0; // True if divisible by 3
const divisibleBy5 = num % 5 === 0; // True if divisible by 5

// Count how many numbers divide evenly
const count =
  Number(divisibleBy2) + Number(divisibleBy3) + Number(divisibleBy5);

// Print result based on count
console.log(count); // Outputs: 1, 2, or 3
