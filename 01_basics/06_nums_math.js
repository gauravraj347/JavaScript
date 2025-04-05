// Creating a number using literal
const score = 100;
console.log(score); // Output: 100

// Creating a number using Number object (not commonly used, but valid)
const balance = new Number(100);
console.log(balance); // Output: [Number: 100]

// Convert number to string and check its length
console.log(balance.toString().length); // Output: 3  (because "100" has 3 characters)

// Format number to fixed 2 decimal places
console.log(balance.toFixed(2)); // Output: "100.00"

// ------------------ toPrecision ------------------

// Rounds the number to a specific number of significant digits
const otherNumber = 123.8944;
console.log(otherNumber.toPrecision(4)); // Output: "123.9"

// ------------------ toLocaleString ------------------

// Formats number with commas according to locale
const hundreds = 100000000;
console.log(hundreds.toLocaleString('en-US')); // Output: "100,000,000" (US format)
console.log(hundreds.toLocaleString('en-IN')); // Output: "10,00,00,000" (Indian format)

// ++++++++++++++++++++  MATHS ++++++++++++++++++++++++++++++

// Math object overview
console.log(Math); // Output: [Math Object] (has constants and functions like round, random, etc.)

// Absolute value
console.log(Math.abs(-4)); // Output: 4

// Round to nearest integer
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.6)); // Output: 5
console.log(Math.round(4.5)); // Output: 5 (rounds up on .5)

// Round up to nearest integer
console.log(Math.ceil(4.2)); // Output: 5

// Round down to nearest integer
console.log(Math.floor(4.9)); // Output: 4

// ------------------ Random numbers ------------------

// Random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: e.g., 0.7263123 (random)

// Multiply to get number between 0 and 10
console.log(Math.random() * 10); // Output: e.g., 7.263123

// Add 1 to ensure it's not zero
console.log((Math.random() * 10) + 1); // Output: e.g., 8.263123

// Floor the number to get integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // Output: e.g., 7

// ------------------ Random between two values ------------------

// Generate random integer between min (10) and max (20)
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
// Output: Random number between 10 and 20 (inclusive)
