"use strict";

// -------------------------
// UNARY OPERATOR
// -------------------------
let value = 3;
let negValue = -value;
console.log(negValue); // -3


// -------------------------
// ARITHMETIC OPERATORS
// -------------------------
// +   Addition
// -   Subtraction
// *   Multiplication
// **  Exponentiation (power)
// /   Division
// %   Modulus (remainder)

console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 2); // 4 (2 raised to power 2)
console.log(2 / 2); // 1
console.log(2 % 2); // 0


// -------------------------
// STRING CONCATENATION
// -------------------------
let str1 = "Rohit";
let str2 = " Maurya";
let str3 = str1 + str2;
console.log(str3); // Rohit Maurya


// -------------------------
// STRING + NUMBER COMBINATIONS
// -------------------------
console.log(1 + "2");      // "12"
console.log("1" + 2);      // "12"
console.log("1" + 2 + 2);  // "122"
console.log(1 + 2 + "3");  // "33"

// Explanation: JS follows ECMA ToPrimitive conversion rules
// - If string is first, everything becomes string
// - If number first, it tries math until string appears


// -------------------------
// BOOLEAN CONVERSION WITH +
// -------------------------
console.log(true);   // true
console.log(+true);  // 1  (unary plus converts to number)


// -------------------------
// MULTIPLE ASSIGNMENT (NOT RECOMMENDED)
// -------------------------
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1, num2, num3); // 4 4 4


// -------------------------
// PREFIX vs POSTFIX INCREMENT
// -------------------------

// Prefix (++x): Increments first, then returns value
let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

// Postfix (x++): Returns value first, then increments
let gameCounter1 = 100;
gameCounter1++;
console.log(gameCounter1); // 101
