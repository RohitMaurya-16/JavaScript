"use strict"; // Treat all JS code as modern ECMAScript version

// Node.js environment, so alert() won't work here
// console.log() is used to display output instead

console.log(3 + 3);       // 6
console.log("Rohit");     // Rohit

// Note: Always write code in readable format instead of chaining many statements

// -------------------------
// DATATYPES IN JAVASCRIPT
// -------------------------

// 1. Number => Integers, decimals (safe range: ±2^53)
let num = 42;

// 2. BigInt => For very large integers beyond 2^53
let bigNum = 1234567890123456789012345678901234567890n;

// 3. Boolean => true or false
let isActive = true;

// 4. Null => Represents "no value" or empty
let emptyValue = null;

// 5. Undefined => A variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// 6. Symbol => Unique identifier
let uniqueId = Symbol("id");

// 7. Object => Collection of key-value pairs
let person = {
    name: "Rohit",
    age: 22
};

// -------------------------
// Checking types
// -------------------------
console.log(typeof "Rohit");        // string
console.log(typeof null);           // object (JavaScript quirk)
console.log(typeof undefined);      // undefined
console.log(typeof 123);            // number
console.log(typeof true);           // boolean
console.log(typeof bigNum);         // bigint
console.log(typeof uniqueId);       // symbol
console.log(typeof person);         // object
