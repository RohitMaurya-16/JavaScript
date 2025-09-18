/* 
Comparison Operators in JavaScript

console.log(2 > 1)   // true
console.log(2 < 1)   // false
console.log(2 == 1)  // false
console.log(2 != 1)  // true

These are basic comparisons, everyone knows.
*/

// 🟢 JS also does type conversion automatically (called Type Coercion)
console.log("2" > 1);   // true  → "2" is converted to number 2
console.log("02" > 1);  // true  → "02" is also converted to number 2

// 🔴 Special case: null in comparisons
console.log(null > 0);   // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

/* 
⚡ Why? 
- The equality check (==) and comparisons (<, >, >=, <=) work differently.
- Comparisons convert null to number (null → 0).
   → null >= 0 becomes 0 >= 0 → true
- But equality check (==) does not convert null to 0. It only equals undefined.
*/

// 🔴 Special case: undefined
console.log(undefined == 0);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false
// undefined is only loosely equal to null

// 🟡 Strict Equality (===)
// Checks both VALUE and DATATYPE (no conversion)
console.log("2" == 2);   // true   → "2" is converted to number
console.log("2" === 2);  // false  → different types (string vs number)
