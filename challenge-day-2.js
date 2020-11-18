// Write if-else statements to fulfill the following conditions:
// if score morethan 60 you pass otherwise you failed

function testScore(num) {
  // code below this line
    if (num > 60) {
         console.log ('Passed')
    } else 
        console.log ('Failed')

}

(testScore(50));
(testScore(90));

//testScore(50) should return "Failed"
//testScore(90) should return "Passed"