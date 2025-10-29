// 🌟 ARRAY METHODS IN JAVASCRIPT (Full-Stack Focus)

// Sample data — imagine this as user scores fetched from a database
let scores = [45, 78, 23, 90, 56, 78];

console.log("Original Array:", scores);
// 👉 [45, 78, 23, 90, 56, 78]

// 1️⃣ push() → Add element at END
scores.push(100);
console.log("After push(100):", scores);
// 👉 [45, 78, 23, 90, 56, 78, 100]

// 2️⃣ pop() → Remove element from END
let last = scores.pop();
console.log("After pop():", scores, "Removed:", last);
// 👉 [45, 78, 23, 90, 56, 78]  Removed: 100

// 3️⃣ unshift() → Add element at BEGINNING
scores.unshift(10);
console.log("After unshift(10):", scores);
// 👉 [10, 45, 78, 23, 90, 56, 78]

// 4️⃣ shift() → Remove element from BEGINNING
let first = scores.shift();
console.log("After shift():", scores, "Removed:", first);
// 👉 [45, 78, 23, 90, 56, 78]  Removed: 10

// 5️⃣ indexOf() → Find index of first match
console.log("Index of 78:", scores.indexOf(78));
// 👉 1

// 6️⃣ lastIndexOf() → Find index of last match
console.log("Last Index of 78:", scores.lastIndexOf(78));
// 👉 5

// 7️⃣ includes() → Check if value exists
console.log("Does array include 90?", scores.includes(90));
// 👉 true

// 8️⃣ slice(start, end) → Copy part of array (non-destructive)
let sliced = scores.slice(1, 4);
console.log("Sliced (1,4):", sliced);
// 👉 [78, 23, 90]

// 9️⃣ splice(start, deleteCount, ...items) → Add/Remove elements (changes original)
scores.splice(2, 1, 99); 
// removes 1 item from index 2 and adds 99 there
console.log("After splice(2,1,99):", scores);
// 👉 [45, 78, 99, 90, 56, 78]

// 🔟 concat() → Join two arrays
let newScores = scores.concat([60, 70]);
console.log("After concat:", newScores);
// 👉 [45, 78, 99, 90, 56, 78, 60, 70]

// 1️⃣1️⃣ join() → Convert array to string
console.log("Joined String:", scores.join(" - "));
// 👉 "45 - 78 - 99 - 90 - 56 - 78"

// 1️⃣2️⃣ reverse() → Reverse array
let reversed = [...scores].reverse(); // copy first so original not changed
console.log("Reversed:", reversed);
// 👉 [78, 56, 90, 99, 78, 45]

// 1️⃣3️⃣ sort() → Sort elements (by default alphabetically)
let sorted = [...scores].sort((a, b) => a - b); // ascending numeric sort
console.log("Sorted Ascending:", sorted);
// 👉 [45, 56, 78, 78, 90, 99]

// 1️⃣4️⃣ map() → Transform each element → returns NEW array
let doubled = scores.map(num => num * 2);
console.log("map() Doubled:", doubled);
// 👉 [90, 156, 198, 180, 112, 156]

// 1️⃣5️⃣ filter() → Filter elements based on condition
let above60 = scores.filter(num => num > 60);
console.log("filter() >60:", above60);
// 👉 [78, 99, 90, 78]

// 1️⃣6️⃣ find() → Find FIRST element matching condition
let firstAbove80 = scores.find(num => num > 80);
console.log("find() >80:", firstAbove80);
// 👉 99

// 1️⃣7️⃣ some() → Returns true if ANY element matches condition
console.log("some() >95:", scores.some(num => num > 95));
// 👉 true

// 1️⃣8️⃣ every() → Returns true if ALL elements match condition
console.log("every() >40:", scores.every(num => num > 40));
// 👉 false (because 23 < 40)

// 1️⃣9️⃣ reduce() → Combine array values into single result
let total = scores.reduce((sum, value) => sum + value, 0);
console.log("reduce() Sum:", total);
// 👉 446

// 2️⃣0️⃣ forEach() → Loop through each element (no return)
console.log("forEach() log:");
scores.forEach((num, i) => console.log(`Index ${i}: ${num}`));
// 👉 Logs each element with its index

// 2️⃣1️⃣ findIndex() → Find index of FIRST matching element
let indexAbove90 = scores.findIndex(num => num > 90);
console.log("findIndex() >90:", indexAbove90);
// 👉 2

// 2️⃣2️⃣ flat() → Flatten nested arrays
let nested = [1, [2, [3, 4]]];
console.log("flat(2):", nested.flat(2));
// 👉 [1, 2, 3, 4]

// 2️⃣3️⃣ from() → Convert iterable to array
let str = "ROHIT";
console.log("Array.from('ROHIT'):", Array.from(str));
// 👉 ['R', 'O', 'H', 'I', 'T']

// 2️⃣4️⃣ isArray() → Check if variable is an array
console.log("Is scores an array?", Array.isArray(scores));
// 👉 true
