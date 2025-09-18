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

/* You want a program where:

It runs continuously.

If user enters a number that is a multiple of 5 (or any number you choose), it should print it.

If user enters a wrong number (not a multiple), then first time it gives the power/square result.

Next wrong entry, it should exit.

But if after a wrong entry, the next input is again a multiple, the game should continue. */