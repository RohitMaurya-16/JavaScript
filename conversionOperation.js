"use strict";

// -------------------------
// TYPE CONVERSION IN JAVASCRIPT
// -------------------------

// Example 1: String → Number
let score = "33";

console.log(typeof score); // string

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // 33

// Note: If the string has non-numeric chars, result = NaN
// "33"   ==> 33
// "33abc" ==> NaN


// Example 2: null → Number
let score1 = null;

console.log(typeof score1); // object (quirk of JS)

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1); // number
console.log(valueInNumber1);        // 0


// Example 3: undefined → Number
let score2 = undefined;

console.log(typeof score2); // undefined

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2);        // NaN


// -------------------------
// BOOLEAN CONVERSION
// -------------------------

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// Conversion Rules:
// 1  ==> true
// 0  ==> false
// "" ==> false
// "rohit" ==> true


// -------------------------
// NUMBER → STRING CONVERSION
// -------------------------

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(stringNumber);        // "33"
console.log(typeof stringNumber); // string
