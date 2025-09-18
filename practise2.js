 /* 📝 Practice Prompts (Step by Step)

Declare primitive values

A string studentName with your name.

A number rollNo with any number.

A boolean isPassed (true/false).

A variable grade with value null.

A variable remarks with value undefined.

A symbol uniqueID with "ID101".

A BigInt bigRank with a large number.

Declare non-primitive values

An array subjects with "Math", "Physics", "CS".

An object studentObj with properties:

name (use studentName)

age (any number)

rollNo (use rollNo)

subjects (use subjects array)

Create a function

Name it showStudent.

It should print student name and roll number using template literals.

Output Section

Print "=== Primitive Data Types ===".

For each primitive, print its typeof and value.

Print "=== Non-Primitive Data Types ===".

Print typeof and values of array and object.

Call showStudent().

Print typeof of showStudent. */


// Primitive values
// Import readline for Node.js input
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for student name
rl.question("Enter your name: ", function(studentName) {
    // Ask for roll number
    rl.question("Enter your roll number: ", function(rollNoInput) {
        const rollNo = Number(rollNoInput); // Convert input to number

        // Primitive values
        const isPassed = true;               // Boolean
        const grade = null;                  // null
        const remark = undefined;            // undefined
        const uniqueId = Symbol("ID101");    // Symbol
        const bigRank = 1235526265777676745n; // BigInt

        // Non-primitive values
        let names = ["Rohit", "Vaibhav", "Utkarsh", "Ayush"]; // Array

        let studentObj = {
            name: studentName,
            age: 22,
            rollNo: rollNo,
            subjects: ["Math", "Physics", "CS"]
        };

        console.log("\n=== Student Object ===");
        console.log(studentObj);

        // Function
        const showStudent = function() {
            console.log(`Student Name: ${studentObj.name}, Roll No: ${studentObj.rollNo}`);
        };

        showStudent();

        rl.close(); // Close readline
    });
});
