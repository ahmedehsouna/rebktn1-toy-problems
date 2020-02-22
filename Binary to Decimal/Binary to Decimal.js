// Given a number n (represented as a binary number string), convert n to base 10. Do NOT use parseInt(n, 2). 
// You may use the parseInt function that takes in just one argument.

// Examples
// Input	Output
// n: "0"	 0
// n: "1"	 1
// n:"10"	 2
// n:"11"	 3
// n:"100"	 4
// n:"101"	 5
// n:"110"	 6
// n:"111"	 7
// n:"1000"	 8 



function binaryToDecimal (n) {
    // code gose here 
    let sum =0;
    let power = 0;
    for (let i = n.length -1 ; i >= 0; i--) {
    sum += (Number(n[i]) * (2**power))
    power++       
    }
    return sum
    }

// function binaryToDecimal (n) {
//     return parseInt(Number(n) , 2)
// }

    console.log(binaryToDecimal("0"))
    console.log(binaryToDecimal("1"))
    console.log(binaryToDecimal("10"))
    console.log(binaryToDecimal("11"))
    console.log(binaryToDecimal("100"))
    console.log(binaryToDecimal("101"))
    console.log(binaryToDecimal("110"))
    console.log(binaryToDecimal("111"))
    console.log(binaryToDecimal("1000"))