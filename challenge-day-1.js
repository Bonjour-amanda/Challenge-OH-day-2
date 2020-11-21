// Instruction
// Create a function that check if an input is a number

function checkNumber(input) {
    // CODE HERE
    if (typeof input === "number" ){
        return true
    } else {
        return false
    }
    }
    console.log(checkNumber(10))

    console.log(checkNumber("10"))
    // example
    // input = "A" should return FALSE
    // input = 10 should return TRUE