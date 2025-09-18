console.log("Number Guess Game - If it is multiple of 5 print it");

let wrongOnce = false; // track wrong attempt

while (true) {
    let a = parseInt(prompt("Enter any value:"));

    if (a % 5 === 0) {
        console.log("✅ Multiple of 5:", a);
        wrongOnce = false; // reset wrong attempt
    } else {
        if (!wrongOnce) {
            // first wrong attempt
            a = a ** 2;
            console.log("❌ Not multiple, so square is:", a);
            wrongOnce = true; // mark one wrong attempt
        } else {
            // second wrong attempt in a row
            console.log("🚪 Exit");
            break;
        }
    }
}
