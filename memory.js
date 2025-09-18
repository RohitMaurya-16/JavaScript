//1️⃣ Primitive Types (Stack)
//Examples: String, Number, Boolean, undefined, null
//Stored in Stack memory
//Copying creates a new independent value

let myName = "Rohit Maurya";  // primitive type stored in Stack
let otherName = myName;       // copy value of myName

otherName = "JOgo";           // change otherName, does NOT affect myName

console.log(myName);          // Output: Rohit Maurya
console.log(otherName);       // Output: JOgo


//Changing otherName does not affect myName because primitive types are copied by value.


//2️⃣ Non-Primitive Types (Heap)

/*Examples: Object, Array, Function

Stored in Heap memory

Copying stores reference (points to the same object in memory) */

let person = { name: "Rohit", age: 22 };  // object stored in Heap
let anotherPerson = person;               // reference to the same object

anotherPerson.name = "JOgo";             // change property

console.log(person.name);                // Output: JOgo
console.log(anotherPerson.name);         // Output: JOgo

/*Explanation

Both person and anotherPerson point to the same object in Heap.

Changing one affects the other because non-primitive types are copied by reference.*/