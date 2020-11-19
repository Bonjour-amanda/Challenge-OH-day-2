// Instruction
// Create a function to multiply the inputs
// Your code should validate the input only accept the NUMBER type and cannot BLANK

function multiply(num1, num2) {
    // CODE HERE
    
    
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 * num2);
    } else if (typeof num1 === number && typeof num2 === String){
        console.log("Please provide a value");
    } else {
        console.log("PLease provide a number only!");
    }

    return num1 * num2;
}
    const result = multiply(2, 4);

    // example
    // num1 = 2, num2 = 4, return 8
    // num1 = "2", num2 = 4, return "Please provide a number only!"
    // num1 = true, num2 = null, return "Please provide a number only!"
    // num1 UNDEFINED, num2 = "2", return "Please provide a value!"



    //   function multiply(num1, num2) {
    //     if (typeof num1 === 'number' && typeof num2 === 'number') {
    //       return num1 * num2
    //     } else {
    //       console.log('Please provide a number only!')
    //     }
    //   }
      
    //   console.log(multiply(2, 4)) // output 8
    
    //OR

    // function multiply(num1, num2) {
    //     if (typeof num1 === 'number' && typeof num2 === 'number') {
    //         console.log(num1 * num2);
    //     } else {
    //       console.log('Please provide a number only!')
    //     }
    //   }
      
    //   multiply(2, 4);
