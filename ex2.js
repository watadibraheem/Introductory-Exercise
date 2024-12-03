// Exercise 2: Prime Numbers
// Programmers: Ibraheem Watad, Karim Biadsy
// This program prints all prime numbers less than 237.
// A prime number is only divisible by 1 and itself.

for (let num = 2; num < 237; num++) {
  let isPrime = true; // Assume the number is prime

  // Check divisibility by smaller numbers
  for (let divisor = 2; divisor < num; divisor++) {
    // If divisible by any smaller number
    if (num % divisor === 0) {
      isPrime = false; // Not a prime number
      break; // Exit the loop early
    }
  }
  // Print the number if it is prime
  if (isPrime) {
    console.log(num);
  }
}
