// 🌟 JAVASCRIPT OBJECTS - Full Stack Developer Version

// 1️⃣ Creating an Object
const user = {
  name: "Rohit",
  age: 22,
  city: "Lucknow",
  skills: ["HTML", "CSS", "JavaScript"],
  isDeveloper: true
};

console.log("1️⃣ User Object:", user);
// 👉 { name: 'Rohit', age: 22, city: 'Lucknow', skills: [ 'HTML', 'CSS', 'JavaScript' ], isDeveloper: true }

// 2️⃣ Accessing Values
console.log("2️⃣ Name:", user.name);      // 👉 "Rohit"
console.log("2️⃣ City:", user["city"]);   // 👉 "Lucknow"

// 3️⃣ Adding / Updating / Deleting Properties
user.college = "IIIT Delhi";   // add
user.age = 23;                 // update
delete user.city;              // delete
console.log("3️⃣ Modified Object:", user);
// 👉 { name: 'Rohit', age: 23, skills: [ 'HTML', 'CSS', 'JavaScript' ], isDeveloper: true, college: 'IIIT Delhi' }

// 4️⃣ Nested Objects (used in API responses)
const student = {
  name: "Rohit",
  address: {
    city: "Lucknow",
    pin: 226016
  },
  marks: {
    math: 90,
    science: 85
  }
};
console.log("4️⃣ Nested Object:", student.marks.math); // 👉 90

// 5️⃣ for...in loop → iterate over object keys
for (let key in user) {
  console.log(`5️⃣ ${key} = ${user[key]}`);
}
// 👉 name = Rohit
// 👉 age = 23
// 👉 skills = HTML,CSS,JavaScript
// 👉 isDeveloper = true
// 👉 college = IIIT Delhi

// 6️⃣ Object.keys() → returns array of keys
console.log("6️⃣ Keys:", Object.keys(user));
// 👉 [ 'name', 'age', 'skills', 'isDeveloper', 'college' ]

// 7️⃣ Object.values() → returns array of values
console.log("7️⃣ Values:", Object.values(user));
// 👉 [ 'Rohit', 23, [ 'HTML', 'CSS', 'JavaScript' ], true, 'IIIT Delhi' ]

// 8️⃣ Object.entries() → returns key-value pairs as array
console.log("8️⃣ Entries:", Object.entries(user));
// 👉 [ ['name','Rohit'], ['age',23], ['skills',[...]], ['isDeveloper',true], ['college','IIIT Delhi'] ]

// 9️⃣ Checking if key exists
console.log("9️⃣ Has key 'name'?", "name" in user);  // 👉 true
console.log("9️⃣ Has key 'city'?", "city" in user);  // 👉 false

// 🔟 Adding Method inside Object
const dev = {
  name: "Rohit",
  greet() {
    return `Hello, I am ${this.name}`;
  }
};
console.log("🔟 Method Output:", dev.greet());
// 👉 "Hello, I am Rohit"

// 1️⃣1️⃣ Shallow Copy using Spread Operator
const copyUser = { ...user };
copyUser.name = "Anjali";
console.log("1️⃣1️⃣ Copy:", copyUser);
console.log("Original (unchanged):", user.name);
// 👉 Copy: name 'Anjali', Original: 'Rohit'

// 1️⃣2️⃣ Deep Copy Example (object inside object)
const obj1 = { info: { city: "Lucknow" } };
const shallowCopy = { ...obj1 };
shallowCopy.info.city = "Delhi";
console.log("1️⃣2️⃣ Shallow Copy changes both:", obj1.info.city);
// 👉 "Delhi"  (same reference)

const deepCopy = JSON.parse(JSON.stringify(obj1)); // full independent copy
deepCopy.info.city = "Mumbai";
console.log("1️⃣2️⃣ Deep Copy keeps original:", obj1.info.city);
// 👉 "Delhi"

// 1️⃣3️⃣ Object.assign() → copy object
const target = { a: 1, b: 2 };
const source = { b: 5, c: 10 };
Object.assign(target, source);
console.log("1️⃣3️⃣ Object.assign result:", target);
// 👉 { a: 1, b: 5, c: 10 }

// 1️⃣4️⃣ Destructuring Objects
const { name, age, college } = user;
console.log("1️⃣4️⃣ Destructured:", name, age, college);
// 👉 Rohit 23 IIIT Delhi

// 1️⃣5️⃣ Optional Chaining (avoids crash if property missing)
const person = { details: { address: { city: "Lucknow" } } };
console.log("1️⃣5️⃣ Optional Chaining:", person.details?.address?.city);
// 👉 "Lucknow"
console.log("1️⃣5️⃣ Missing Prop (safe):", person.job?.title);
// 👉 undefined (no error)

// 1️⃣6️⃣ Converting Object → JSON (for sending to API)
const jsonString = JSON.stringify(user);
console.log("1️⃣6️⃣ JSON String:", jsonString);
// 👉 '{"name":"Rohit","age":23,"skills":["HTML","CSS","JavaScript"],"isDeveloper":true,"college":"IIIT Delhi"}'

// 1️⃣7️⃣ Converting JSON → Object (when receiving from API)
const newUser = JSON.parse(jsonString);
console.log("1️⃣7️⃣ Parsed Object:", newUser.name);
// 👉 "Rohit"

// 1️⃣8️⃣ Merging Two Objects
const objA = { a: 1, b: 2 };
const objB = { c: 3, d: 4 };
const merged = { ...objA, ...objB };
console.log("1️⃣8️⃣ Merged Object:", merged);
// 👉 { a: 1, b: 2, c: 3, d: 4 }

// 1️⃣9️⃣ Freezing Objects (prevent changes)
const settings = { theme: "dark" };
Object.freeze(settings);
settings.theme = "light"; // will not change
console.log("1️⃣9️⃣ Frozen Object:", settings);
// 👉 { theme: "dark" }

// 2️⃣0️⃣ Nested Destructuring (used in APIs)
const apiResponse = {
  success: true,
  data: {
    user: { id: 1, name: "Rohit" }
  }
};
const { data: { user: { id, name: username } } } = apiResponse;
console.log("2️⃣0️⃣ Nested Destructuring:", id, username);
// 👉 1 "Rohit"
