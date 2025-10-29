// Dates

let myDate =new Date()
console.log(myDate.getFullYear()); // 2025

console.log(myDate); // 2025-10-29T06:10:33.834Z
console.log(myDate.toString()); // Wed Oct 29 2025 06:11:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); //2025-10-29T06:13:22.170Z
console.log(myDate.toJSON());//2025-10-29T06:13:57.880Z


console.log(myDate.toLocaleString());//10/29/2025, 6:15:06 AM

let mydate =new Date(2025,9,29)// you can create your own date....
console.log(myDate.toLocaleDateString()); //10/29/2025

const yourDate = new Date();

const day = yourDate.toLocaleString('default', {
    weekday: 'long'
});

console.log(day); //Wednesday
