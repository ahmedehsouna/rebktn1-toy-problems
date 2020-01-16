  
/*
Prime Tester
A prime number is an integer greater than 1 that has no divisors other than itself and 1. 
Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. 
The grader is looking at the efficiency of your solution (number of operations) as well as correctness!
primeTester(2) // true
primeTester(1) // false
*/

function primeTester(n) {
    if(n<2) return false
    if((n-1)%6 != 0 && (n+1) % 6 != 0 && n>4) return false
    for (let i = 2; i < n; i++) {
        if(n%i == 0) return false
    }
    return true
}



console.log(primeTester(1))
console.log(primeTester(2))
console.log(primeTester(7))
console.log(primeTester(21))
console.log(primeTester(23))