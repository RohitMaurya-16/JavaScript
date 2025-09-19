// ------------------- NUMBERS ------------------- //

const score = 400; // may be number or string
const balance = new Number(100); // always number type
console.log(balance); // [Number: 100]

console.log(balance.toString().length); 
// "100" → length = 3 (string form)

const len = Number(balance.toString().length);
console.log(len); // 3
console.log(typeof(len)); // number

// ------------------- Number Precision ------------------- //
const otherNumber = 23.1234;

console.log(otherNumber.toPrecision(3)); 
// "23.1" → rounds with total digits = 3 (not just after decimal)

// ------------------- Locale Formatting ------------------- //
const hundreds = 10000000;

console.log(hundreds.toLocaleString()); 
// "10,000,000" (US format by default)

console.log(hundreds.toLocaleString('en-IN')); 
// "1,00,00,000" (Indian numbering system)


// ------------------- MATH ------------------- //

console.log(Math); 
// Math object (has many methods like abs, round, sqrt, etc.)

console.log(Math.abs(-4)); 
// 4 → always positive

console.log(Math.round(5.7)); 
// 6 → rounds to nearest integer

// ------------------- Random Numbers ------------------- //
console.log(Math.round(10 * Math.random() + 1)); 
// Random integer between 1 and 11

// Range random: min → max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
// Random integer between 10 and 20
