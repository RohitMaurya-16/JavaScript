// ============================
// 🔹 Primitive Data Types
// ============================
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;               // Number
const isLoggedIn = false;        // Boolean
const name = "Rohit";            // String

const id = Symbol("123");        // Symbol → always unique
const anotherID = Symbol("123");
console.log(id == anotherID);    // false (Symbols are unique even if value is same)

const bigNumber = 12345678990098765n;  // BigInt (very large integers)

// null and undefined
let emptyValue = null;           // Intentionally empty
let notAssigned;                 // undefined (no value assigned)

console.log(typeof bigNumber);   // "bigint"
console.log(typeof null);        // ⚠️ "object" (this is a JavaScript bug/quirk)

// ============================
// 🔹 Non-Primitive (Reference) Data Types
// ============================
// Array, Object, Function 

// Array
const heros = ["superman", "captain usa"];
console.log(typeof heros);       // "object"

// Object
let myObj = {
    name: "Rohit",
    age: 22,
};
console.log(myObj);              // { name: "Rohit", age: 22 }
console.log(typeof myObj);       // "object"

// Function
const myFunction = function () {
    console.log("Good Job");
};
myFunction();                    // "Good Job"
console.log(typeof myFunction);  // "function" (but internally object)
