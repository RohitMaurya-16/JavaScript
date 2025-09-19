// String Methods in JavaScript with Examples

const str = "  Hello Rohit, Welcome to GitHub Codespaces!  ";
const str2 = "JavaScript";

// ------------------ Basic Properties ------------------
console.log(str.length); // 44 → returns total length (including spaces)

// ------------------ Case Conversion ------------------
console.log(str.toUpperCase()); // "  HELLO ROHIT, WELCOME TO GITHUB CODESPACES!  "
console.log(str.toLowerCase()); // "  hello rohit, welcome to github codespaces!  "

// ------------------ Trimming ------------------
console.log(str.trim()); // removes spaces from both sides
console.log(str.trimStart()); // removes spaces from start only
console.log(str.trimEnd());   // removes spaces from end only

// ------------------ Character Access ------------------
console.log(str.charAt(2)); // "H" → returns char at index 2
console.log(str.charCodeAt(2)); // 72 → Unicode of char at index 2
console.log(str[2]); // "H" → modern way (like array indexing)

// ------------------ Searching ------------------
console.log(str.indexOf("Rohit")); // 8 → first occurrence index
console.log(str.lastIndexOf("o")); // last occurrence of 'o'
console.log(str.includes("Welcome")); // true → checks if substring exists
console.log(str.startsWith("  Hello")); // true → starts with substring
console.log(str.endsWith("!  ")); // true → ends with substring

// ------------------ Extracting ------------------
console.log(str.slice(2, 7)); // "Hello" → slice(start, end)
console.log(str.substring(2, 7)); // "Hello" → similar but no negative index
console.log(str.substr(2, 5)); // "Hello" → (deprecated, but works)

// ------------------ Replacing ------------------
console.log(str.replace("Rohit", "Coder")); 
// "  Hello Coder, Welcome to GitHub Codespaces!  " → replaces first match
console.log(str.replaceAll("o", "0")); 
// replaces all occurrences of "o"

// ------------------ Splitting & Joining ------------------
console.log(str.split(" ")); 
// ["", "", "Hello", "Rohit,", "Welcome", "to", "GitHub", "Codespaces!", "", ""]
console.log(str2.split("")); 
// ["J","a","v","a","S","c","r","i","p","t"]
console.log(["I","Love","JS"].join("-")); // "I-Love-JS"

// ------------------ Repeating ------------------
console.log("JS ".repeat(3)); // "JS JS JS "

// ------------------ Padding ------------------
console.log(str2.padStart(15, "*")); // "***JavaScript"
console.log(str2.padEnd(15, "."));   // "JavaScript....."

// ------------------ Template Literals ------------------
const name = "Rohit";
const repoCount = 50;
console.log(`Hello, My name is ${name} and I have ${repoCount} repos.`);

// ------------------ Conversion ------------------
console.log(String(123));   // "123"
console.log((123).toString()); // "123"
